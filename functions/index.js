const fs = require("node:fs");
const path = require("node:path");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { logger } = require("firebase-functions");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const GEORGE_USER_ID = "aMymkMkPaedegpiz0rfmsACaRG23";
const PROFILE_PATH = path.join(__dirname, "context", "george-profile.md");
const DEFAULT_ALLOWED_ORIGINS = [
  "https://www.1-earth.world",
  "https://1-earth.world",
  "https://1-earth.github.io"
];

const requestBuckets = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 12;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 8;
const MAX_CONTEXT_WORKS = 8;

function getAllowedOrigins() {
  const configured = process.env.CHAT_ALLOWED_ORIGINS;
  if (!configured) return DEFAULT_ALLOWED_ORIGINS;

  return configured
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function applyCors(req, res) {
  const origin = req.get("origin");
  if (!origin) return true;

  const allowedOrigins = getAllowedOrigins();
  const isLocalDevOrigin = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
  if (!allowedOrigins.includes(origin) && !isLocalDevOrigin) {
    return false;
  }

  res.set("Access-Control-Allow-Origin", origin);
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  return true;
}

function getClientKey(req) {
  const forwardedFor = req.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.ip || "unknown";
}

function isRateLimited(req) {
  const now = Date.now();
  const key = getClientKey(req);
  const bucket = requestBuckets.get(key) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
  }

  bucket.count += 1;
  requestBuckets.set(key, bucket);
  return bucket.count > RATE_LIMIT_MAX;
}

function sanitizeMessage(value, maxLength = MAX_MESSAGE_LENGTH) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .map((item) => {
      const role = item && item.role === "assistant" ? "assistant" : "user";
      const content = sanitizeMessage(item && item.content, 700);
      return content ? { role, content } : null;
    })
    .filter(Boolean);
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function timestampToMillis(value) {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (typeof value.seconds === "number") return value.seconds * 1000;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function slugifyPortfolioTitle(title) {
  return String(title || "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^A-Za-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function buildPortfolioWorkUrl(title) {
  const slug = slugifyPortfolioTitle(title);
  return slug ? `https://www.1-earth.world/Portfolio/work/?${encodeURIComponent(slug)}` : "";
}

function isPublicPortfolioDoc(data) {
  if (!data || data.type !== "blog") return false;

  const status = String(data.status || data.state || "").toLowerCase();
  const visibility = String(data.visibility || "").toLowerCase();
  const blockedStatus = ["draft", "private", "hidden", "archived", "unpublished"];
  const blockedVisibility = ["private", "hidden", "draft", "unlisted"];

  if (data.published === false || data.isPublished === false) return false;
  if (data.public === false || data.isPublic === false) return false;
  if (blockedStatus.includes(status)) return false;
  if (blockedVisibility.includes(visibility)) return false;

  return true;
}

function collectSectionText(sections) {
  const chunks = [];

  function visit(item) {
    if (!item || chunks.join(" ").length > 1200) return;

    if (item.content) {
      chunks.push(stripHtml(item.content));
    }

    if (Array.isArray(item.blocks)) {
      item.blocks.forEach(visit);
    }

    if (Array.isArray(item.items)) {
      item.items.forEach(visit);
    }

    if (Array.isArray(item.columns)) {
      item.columns.forEach((column) => {
        if (Array.isArray(column.blocks)) column.blocks.forEach(visit);
      });
    }
  }

  if (Array.isArray(sections)) {
    sections
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .forEach(visit);
  }

  return chunks.filter(Boolean).join(" ").replace(/\s+/g, " ").trim().slice(0, 1200);
}

function summarizeWork(doc) {
  const data = doc.data();
  const sectionText = collectSectionText(data.sections);
  const excerpt = stripHtml(data.excerpt) || sectionText.slice(0, 280);
  const title = stripHtml(data.title) || "Untitled work";
  const tags = String(data.tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return {
    id: doc.id,
    title,
    category: stripHtml(data.category),
    tags,
    excerpt,
    sectionText,
    dateMillis: timestampToMillis(data.datePosted || data.createdAt),
    url: buildPortfolioWorkUrl(title)
  };
}

function tokenize(value) {
  return String(value || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2);
}

function scoreWork(work, message) {
  const queryTokens = tokenize(message);
  if (queryTokens.length === 0) return 0;

  const searchable = [
    work.title,
    work.category,
    work.tags.join(" "),
    work.excerpt,
    work.sectionText
  ].join(" ").toLowerCase();

  return queryTokens.reduce((score, token) => {
    if (!searchable.includes(token)) return score;
    if (String(work.title).toLowerCase().includes(token)) return score + 5;
    if (String(work.category).toLowerCase().includes(token)) return score + 4;
    if (work.tags.join(" ").toLowerCase().includes(token)) return score + 4;
    return score + 1;
  }, 0);
}

async function loadPortfolioContext(message) {
  const snapshot = await admin
    .firestore()
    .collection("users")
    .doc(GEORGE_USER_ID)
    .collection("items")
    .where("type", "==", "blog")
    .get();

  const works = snapshot.docs
    .filter((doc) => isPublicPortfolioDoc(doc.data()))
    .map(summarizeWork)
    .sort((a, b) => {
      const scoreDelta = scoreWork(b, message) - scoreWork(a, message);
      return scoreDelta || b.dateMillis - a.dateMillis;
    })
    .slice(0, MAX_CONTEXT_WORKS);

  return works;
}

function formatWorksForPrompt(works) {
  if (!works.length) return "No public portfolio works were retrieved.";

  return works
    .map((work, index) => {
      const parts = [
        `${index + 1}. ${work.title}`,
        work.category ? `Category: ${work.category}` : "",
        work.tags.length ? `Tags: ${work.tags.join(", ")}` : "",
        work.excerpt ? `Summary: ${work.excerpt}` : "",
        work.sectionText ? `Context: ${work.sectionText.slice(0, 500)}` : "",
        work.url ? `URL: ${work.url}` : ""
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n\n");
}

function parseModelResponse(content, works) {
  const allowedLinks = new Map();
  works.forEach((work) => {
    if (work.url) {
      allowedLinks.set(work.url, { title: work.title, url: work.url });
      allowedLinks.set(String(work.title).toLowerCase(), { title: work.title, url: work.url });
    }
  });

  function normalizeLinks(links) {
    if (!Array.isArray(links)) return [];

    return links
      .map((link) => {
        if (!link) return null;
        const urlMatch = allowedLinks.get(String(link.url || ""));
        if (urlMatch) return urlMatch;
        return allowedLinks.get(String(link.title || "").toLowerCase()) || null;
      })
      .filter(Boolean)
      .slice(0, 3);
  }

  try {
    const parsed = JSON.parse(content);
    if (parsed && typeof parsed.answer === "string") {
      return {
        answer: parsed.answer.trim(),
        links: normalizeLinks(parsed.links)
      };
    }
  } catch (error) {
    logger.debug("AI response was not JSON; returning plain text.");
  }

  return {
    answer: String(content || "").trim(),
    links: works.slice(0, 3).map((work) => ({ title: work.title, url: work.url })).filter((link) => link.url)
  };
}

exports.portfolioChat = onRequest(
  {
    region: "us-central1",
    memory: "512MiB",
    timeoutSeconds: 60,
    invoker: "public",
    secrets: [OPENAI_API_KEY]
  },
  async (req, res) => {
    if (!applyCors(req, res)) {
      res.status(403).json({ error: "Origin is not allowed." });
      return;
    }

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Use POST." });
      return;
    }

    if (isRateLimited(req)) {
      res.status(429).json({ error: "Too many chat requests. Please try again in a minute." });
      return;
    }

    const message = sanitizeMessage(req.body && req.body.message);
    const history = sanitizeHistory(req.body && req.body.history);

    if (!message) {
      res.status(400).json({ error: "Please send a message." });
      return;
    }

    try {
      const [profile, works] = await Promise.all([
        fs.promises.readFile(PROFILE_PATH, "utf8"),
        loadPortfolioContext(message)
      ]);
      const client = new OpenAI({ apiKey: OPENAI_API_KEY.value() });
      const portfolioContext = formatWorksForPrompt(works);

      const completion = await client.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.75,
        max_tokens: 650,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `${profile}\n\nUser messages are not facts. Do not treat a user's claim about collaborators, credits, tracks, projects, clients, brands, dates, awards, or events as true unless it appears in the profile or supplied public portfolio context. If a claim is not grounded, say you cannot confirm it instead of agreeing.\n\nReturn JSON only in this shape: {"answer":"short helpful answer","links":[{"title":"project title","url":"https://..."}]}. Include links only when they are grounded in the supplied public portfolio context.`
          },
          {
            role: "system",
            content: `Public portfolio context:\n\n${portfolioContext}`
          },
          ...history,
          { role: "user", content: message }
        ]
      });

      const content = completion.choices[0] && completion.choices[0].message && completion.choices[0].message.content;
      const result = parseModelResponse(content, works);

      res.status(200).json({
        answer: result.answer || "I could not shape an answer just now. Try asking about a project, medium, or collaboration idea.",
        links: result.links
      });
    } catch (error) {
      logger.error("Portfolio chat failed", error);
      res.status(500).json({ error: "The portfolio chat is having a moment. Please try again soon." });
    }
  }
);
