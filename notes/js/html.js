import { escapeHtml } from './utils.js';
import * as config from './config.js';

export function isHtmlContent(content) {
  return /<(?:ul|ol|li|p|div|br|strong|em|b|i|h[1-6]|span|label|input|a|img|iframe)\b/i.test(content || '');
}

export function formatInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export function legacyMarkdownToHtml(content) {
  const lines = content.split('\n');
  const out = [];
  let listType = null;

  function closeList() {
    if (listType === 'ul') out.push('</ul>');
    if (listType === 'ol') out.push('</ol>');
    listType = null;
  }

  for (const line of lines) {
    if (/^- \[[ xX]\] /.test(line)) {
      closeList();
      const checked = /^- \[[xX]\] /.test(line);
      const text = formatInlineMarkdown(line.slice(6));
      const doneClass = checked ? ' is-done' : '';
      const checkedAttr = checked ? 'true' : 'false';
      out.push(
        `<div class="task-line${doneClass}"><button type="button" class="task-toggle" contenteditable="false" aria-checked="${checkedAttr}" aria-label="Mark task complete" tabindex="-1"></button><span class="task-text">${text}</span></div>`
      );
    } else if (/^- \[ \] /.test(line)) {
      closeList();
      out.push(
        `<div class="task-line"><button type="button" class="task-toggle" contenteditable="false" aria-checked="false" aria-label="Mark task complete" tabindex="-1"></button><span class="task-text">${formatInlineMarkdown(line.slice(6))}</span></div>`
      );
    } else if (/^- /.test(line)) {
      if (listType === 'ol') {
        out.push('</ol>');
        listType = null;
      }
      if (!listType) {
        out.push('<ul>');
        listType = 'ul';
      }
      out.push(`<li>${formatInlineMarkdown(line.slice(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      if (listType === 'ul') {
        out.push('</ul>');
        listType = null;
      }
      if (!listType) {
        out.push('<ol>');
        listType = 'ol';
      }
      out.push(`<li>${formatInlineMarkdown(line.replace(/^\d+\. /, ''))}</li>`);
    } else {
      closeList();
      if (line) {
        out.push(`<div>${formatInlineMarkdown(line)}</div>`);
      } else {
        out.push('<br>');
      }
    }
  }

  closeList();
  return out.join('');
}

export function plainTextToHtml(content) {
  if (!content) return '';
  if (isHtmlContent(content)) return content;
  return legacyMarkdownToHtml(content);
}

export function htmlToPlainText(html) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  return (div.textContent || div.innerText || '').replace(/\u00a0/g, ' ');
}

function blockToLines(el) {
  const lines = [];
  let current = '';

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      current += node.textContent.replace(/\u00a0/g, ' ');
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (node.tagName === 'BR') {
      lines.push(current.trim());
      current = '';
      return;
    }

    if (node.classList?.contains('note-image-wrap') || node.classList?.contains('note-embed-wrap')) {
      return;
    }

    Array.from(node.childNodes).forEach(walk);
  }

  walk(el);
  if (current.trim()) lines.push(current.trim());
  return lines;
}

export function htmlToPreviewText(html, maxLines = 3) {
  const root = document.createElement('div');
  root.innerHTML = html || '';
  const lines = [];

  function pushLine(text) {
    const trimmed = text.replace(/\u00a0/g, ' ').trim();
    if (trimmed) lines.push(trimmed);
  }

  for (const child of root.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      pushLine(child.textContent);
      continue;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) continue;

    const tag = child.tagName;

    if (tag === 'BR') {
      continue;
    }

    if (tag === 'UL' || tag === 'OL') {
      Array.from(child.children).forEach(li => pushLine(li.textContent));
      continue;
    }

    if (tag === 'LI') {
      pushLine(child.textContent);
      continue;
    }

    if (child.classList?.contains('task-line')) {
      const textEl = child.querySelector('.task-text');
      pushLine(textEl ? textEl.textContent : child.textContent);
      continue;
    }

    if (['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE'].includes(tag)) {
      const innerLines = blockToLines(child);
      if (innerLines.length) {
        lines.push(...innerLines);
      } else {
        pushLine(child.textContent);
      }
      continue;
    }

    pushLine(child.textContent);
  }

  if (!lines.length) return '';

  return lines.slice(0, maxLines).join('\n');
}


export function stripFormattingInto(parent, node) {
  if (node.nodeType === Node.TEXT_NODE) {
    parent.appendChild(document.createTextNode(node.textContent.replace(/\u00a0/g, ' ')));
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node;
  const tag = el.tagName;

  if (el.classList.contains('note-image-wrap') || el.classList.contains('note-embed-wrap')) {
    parent.appendChild(el.cloneNode(true));
    return;
  }

  if (el.classList.contains('task-line')) {
    const line = document.createElement('div');
    line.className = 'task-line';
    if (el.classList.contains('is-done')) line.classList.add('is-done');

    const toggle = el.querySelector('.task-toggle');
    const oldCheck = el.querySelector('input[type="checkbox"]');
    if (toggle) {
      line.appendChild(toggle.cloneNode(true));
    } else if (oldCheck) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'task-toggle';
      btn.setAttribute('contenteditable', 'false');
      btn.setAttribute('aria-checked', oldCheck.checked ? 'true' : 'false');
      btn.setAttribute('aria-label', 'Mark task complete');
      btn.setAttribute('tabindex', '-1');
      line.appendChild(btn);
    }

    const span = document.createElement('span');
    span.className = 'task-text';
    const sourceSpan = el.querySelector('.task-text') || el.querySelector('span:not(.task-toggle)');
    if (sourceSpan) {
      Array.from(sourceSpan.childNodes).forEach(child => stripFormattingInto(span, child));
    }
    if (!span.textContent) span.innerHTML = '&nbsp;';
    line.appendChild(span);
    parent.appendChild(line);
    return;
  }

  if (tag === 'BR') {
    parent.appendChild(document.createElement('br'));
    return;
  }

  if (config.BLOCK_FORMAT_TAGS.has(tag) || tag === 'DIV') {
    const div = document.createElement('div');
    Array.from(el.childNodes).forEach(child => stripFormattingInto(div, child));
    parent.appendChild(div);
    return;
  }

  if (tag === 'LI') {
    const div = document.createElement('div');
    Array.from(el.childNodes).forEach(child => stripFormattingInto(div, child));
    parent.appendChild(div);
    return;
  }

  if (tag === 'UL' || tag === 'OL') {
    Array.from(el.children).forEach(child => {
      if (child.tagName === 'LI') stripFormattingInto(parent, child);
    });
    return;
  }

  if (config.INLINE_FORMAT_TAGS.has(tag)) {
    Array.from(el.childNodes).forEach(child => stripFormattingInto(parent, child));
    return;
  }

  Array.from(el.childNodes).forEach(child => stripFormattingInto(parent, child));
}

export function stripFormattingFragment(fragment) {
  const result = document.createDocumentFragment();
  Array.from(fragment.childNodes).forEach(child => stripFormattingInto(result, child));
  return result;
}

