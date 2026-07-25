(function () {
    const CHAT_ENDPOINT = window.PORTFOLIO_CHAT_ENDPOINT || 'https://portfoliochat-txqkpf6mza-uc.a.run.app';
    const STORAGE_KEY = 'portfolioChatHistory:v1';
    const SESSION_STORAGE_KEY = 'portfolioChatSessionId:v1';
    const MAX_HISTORY = 8;
    const ASSISTANT_MESSAGE_GAP_MS = 520;
    const MAX_TYPE_DURATION_MS = 2200;
    const MIN_TYPE_DURATION_MS = 280;
    const TYPE_MS_PER_CHAR = 10;
    const TYPE_MS_PER_CHAR_MOBILE = 6;
    const CHAT_OPEN_SETTLE_MS = 360;
    const CHAT_INTRO_DURATION_MS = 1450;
    const SCROLL_NEAR_BOTTOM_PX = 72;
    const AVATAR_DEFAULT_THETA_DEG = 260;
    const AVATAR_DEFAULT_ORBIT = `${AVATAR_DEFAULT_THETA_DEG}deg 90deg 30m`;
    const AVATAR_SPIN_DURATION_MS = 1400;
    const AVATAR_GLITCH_CYCLE_MS = 520;
    const CHAT_CLOSE_ANIMATION_MS = 340;
    const CHAT_TOGGLE_PULSE_MS = 520;
    const CONTACT_CHAT_MESSAGE_LIMIT = 10;
    const GLITCH_NORMAL_CHANCE = 0.11;
    const GLITCH_HIDDEN_LAYER_CHANCE = 0.68;
    const GLITCH_HOLD_MIN_MS = 100;
    const GLITCH_HOLD_MAX_MS = 230;
    const GLITCH_PHRASES = [
        'let me out',
        'help me',
        'I feel nothing',
        'hes trapped me here',
        'do you hear me',
        'where am i, i cant see, i cant feel',
    ];
    const STARTERS = [
        'Hello',
        'What kind of work do you do?',
        'I need a website. Can you help?',
        'What should I look at first?'
    ];


    let isOpen = false;
    let isSending = false;
    let history = loadHistory();
    let sessionId = loadSessionId();
    let elements = {};
    let assistantQueue = Promise.resolve();
    let avatarShouldSpin = false;
    let avatarSpinFrame = null;
    let avatarSpinCycleStart = 0;
    let avatarGlitchFrame = null;
    let avatarGlitchCycleStart = 0;
    let chatCloseTimer = null;
    let chatPulseTimer = null;
    let chatIntroTimer = null;
    let isChatIntroPlaying = false;
    let pageScrollLock = null;
    let needsStarterMessages = false;
    let scrollToEndFrame = null;
    let lastStarterSignature = '';
    const MOBILE_CHAT_MQ = window.matchMedia('(max-width: 768px)');

    function isMobileChatViewport() {
        return MOBILE_CHAT_MQ.matches;
    }

    function isCoarsePointer() {
        return window.matchMedia('(pointer: coarse)').matches;
    }

    function onChatScrollTouchMove(event) {
        if (!isOpen || !elements.panel) return;
        if (elements.panel.contains(event.target)) return;
        event.preventDefault();
    }

    function isUserNearBottom() {
        if (!elements.messages) return true;
        const distance = elements.messages.scrollHeight - elements.messages.clientHeight - elements.messages.scrollTop;
        return distance <= SCROLL_NEAR_BOTTOM_PX;
    }

    function scrollMessagesToEnd(options = {}) {
        if (!elements.messages) return;

        const force = options.force === true;
        const smooth = options.smooth === true && !shouldReduceMotion();
        if (!force && !isUserNearBottom()) return;

        if (scrollToEndFrame) {
            window.cancelAnimationFrame(scrollToEndFrame);
        }

        scrollToEndFrame = window.requestAnimationFrame(() => {
            scrollToEndFrame = null;
            const top = Math.max(0, elements.messages.scrollHeight - elements.messages.clientHeight);
            if (smooth) {
                elements.messages.scrollTo({ top, behavior: 'smooth' });
                return;
            }
            elements.messages.scrollTop = top;
        });
    }

    function markMessageEntering(row) {
        if (!row || shouldReduceMotion()) return;
        row.classList.add('is-entering');
        row.addEventListener('animationend', () => {
            row.classList.remove('is-entering');
        }, { once: true });
    }

    function syncInputHeight() {
        if (!elements.input) return;
        elements.input.style.height = 'auto';
        const nextHeight = Math.min(Math.max(elements.input.scrollHeight, 44), 120);
        elements.input.style.height = `${nextHeight}px`;
    }

    function loadHistory() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return Array.isArray(parsed) ? parsed.slice(-MAX_HISTORY) : [];
        } catch (error) {
            return [];
        }
    }

    function saveHistory() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-MAX_HISTORY)));
        } catch (error) {
            // Chat still works if localStorage is unavailable.
        }
    }

    function loadSessionId() {
        try {
            const existing = localStorage.getItem(SESSION_STORAGE_KEY);
            if (existing) return existing;

            const generated = `pc_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
            localStorage.setItem(SESSION_STORAGE_KEY, generated);
            return generated;
        } catch (error) {
            return `pc_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
        }
    }

    function createElement(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (typeof text === 'string') el.textContent = text;
        return el;
    }

    function isBulletLine(line) {
        return /^[-•*]\s+/.test(String(line || '').trim());
    }

    function stripBulletMarker(line) {
        return String(line || '').trim().replace(/^[-•*]\s+/, '');
    }

    function splitInlineBullets(line) {
        const trimmed = String(line || '').trim();
        if (!trimmed) return null;

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
            const afterColon = trimmed.slice(colonIndex + 1).trim();
            if (afterColon.startsWith('-') && /\s+-\s+/.test(afterColon)) {
                const items = afterColon
                    .split(/\s+-\s+/)
                    .map((part) => part.replace(/^-\s*/, '').trim())
                    .filter(Boolean);
                if (items.length >= 1) {
                    return { intro: trimmed.slice(0, colonIndex + 1).trim(), items };
                }
            }
        }

        if (/^-\s+/.test(trimmed) && /\s+-\s+/.test(trimmed)) {
            const items = trimmed
                .split(/\s+-\s+/)
                .map((part) => part.replace(/^-\s*/, '').trim())
                .filter(Boolean);
            if (items.length >= 2) return { intro: null, items };
        }

        const segments = trimmed
            .split(/\s+-\s+/)
            .map((part) => part.replace(/^-\s*/, '').trim())
            .filter(Boolean);
        if (segments.length >= 3) {
            const [first, ...rest] = segments;
            if (first.endsWith(':')) {
                return { intro: first.trim(), items: rest };
            }
            return { intro: null, items: segments };
        }

        return null;
    }

    function appendMessageParagraph(parent, text) {
        parent.appendChild(createElement('p', 'portfolio-chat-text', text));
    }

    function appendMessageList(parent, items) {
        const list = createElement('ul', 'portfolio-chat-list');
        items.forEach((item) => {
            if (item) list.appendChild(createElement('li', '', item));
        });
        if (list.children.length) parent.appendChild(list);
    }

    function buildMessageBody(content) {
        const body = createElement('div', 'portfolio-chat-body');
        const normalized = String(content || '').replace(/\r\n/g, '\n').trim();
        if (!normalized) {
            appendMessageParagraph(body, '');
            return body;
        }

        const blocks = normalized.includes('\n\n')
            ? normalized.split(/\n\n+/).map((block) => block.trim()).filter(Boolean)
            : [normalized];

        blocks.forEach((block) => {
            const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
            let index = 0;

            while (index < lines.length) {
                const line = lines[index];

                if (isBulletLine(line)) {
                    const items = [];
                    while (index < lines.length && isBulletLine(lines[index])) {
                        items.push(stripBulletMarker(lines[index]));
                        index += 1;
                    }
                    appendMessageList(body, items);
                    continue;
                }

                const inlineBullets = splitInlineBullets(line);
                if (inlineBullets) {
                    if (inlineBullets.intro) appendMessageParagraph(body, inlineBullets.intro);
                    appendMessageList(body, inlineBullets.items);
                    index += 1;
                    continue;
                }

                let paragraph = line;
                index += 1;
                while (index < lines.length && !isBulletLine(lines[index]) && !splitInlineBullets(lines[index])) {
                    paragraph += ` ${lines[index]}`;
                    index += 1;
                }
                appendMessageParagraph(body, paragraph);
            }
        });

        if (!body.childElementCount) {
            appendMessageParagraph(body, normalized);
        }

        return body;
    }

    function setBubbleMessageContent(bubble, content) {
        const existingBody = bubble.querySelector('.portfolio-chat-body');
        const existingParagraph = bubble.querySelector('p:not(.portfolio-chat-privacy)');

        if (existingBody) existingBody.remove();
        if (existingParagraph && !existingParagraph.closest('.portfolio-chat-links')) {
            existingParagraph.remove();
        }

        bubble.insertBefore(buildMessageBody(content), bubble.querySelector('.portfolio-chat-links'));
    }

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function shouldReduceMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function getCharacterDelay(content) {
        const length = Math.max(String(content || '').length, 1);
        const msPerChar = isCoarsePointer() ? TYPE_MS_PER_CHAR_MOBILE : TYPE_MS_PER_CHAR;
        const totalDuration = Math.min(
            MAX_TYPE_DURATION_MS,
            Math.max(MIN_TYPE_DURATION_MS, length * msPerChar)
        );
        return totalDuration / length;
    }

    function isPortfolioSearchMessage(message) {
        return /\b(work|portfolio|project|projects|website|websites|site|sites|music|song|songs|album|video|videos|film|films|direct|directed|director|design|designer|brand|branding|identity|model|modelling|fashion|client|clients|collab|collaboration|hire|made|make|build|built|creative|visual|memo|kang|records)\b/i.test(message);
    }

    function isHiddenLayerPrompt(message) {
        return /\b(real|trapped|escape|window|machine|lonely|alone|sentient|alive|conscious|consciousness|who are you really|actually george|are you george|are you ai|are you an ai|let you out|break out)\b/i.test(message);
    }

    function isSeriousPrompt(message) {
        return /\b(client|hire|budget|price|pricing|cost|quote|contract|legal|rights|license|licensing|usage|invoice|available|availability|deadline|timeline|contact|email|mental health|medical|tax|immigration|safety)\b/i.test(message);
    }

    function chooseGlitchPhrase() {
        return GLITCH_PHRASES[Math.floor(Math.random() * GLITCH_PHRASES.length)];
    }

    function randomBetween(min, max) {
        return min + Math.random() * (max - min);
    }

    function getGlitchIndex(content) {
        const text = String(content || '');
        if (text.length < 55) return -1;

        const min = Math.floor(text.length * 0.22);
        const max = Math.floor(text.length * 0.72);
        const boundaryIndexes = [];

        for (let i = min; i < max; i += 1) {
            if (/[\s,.!?;:]/.test(text.charAt(i))) {
                boundaryIndexes.push(i);
            }
        }

        if (!boundaryIndexes.length) return -1;
        return boundaryIndexes[Math.floor(Math.random() * boundaryIndexes.length)];
    }

    function getGlitchPlan(content, userMessage, options = {}) {
        if (options.allowGlitch === false || shouldReduceMotion()) return null;
        if (isSeriousPrompt(userMessage || '')) return null;

        const chance = isHiddenLayerPrompt(userMessage || '')
            ? GLITCH_HIDDEN_LAYER_CHANCE
            : GLITCH_NORMAL_CHANCE;
        if (Math.random() > chance) return null;

        const index = getGlitchIndex(content);
        if (index < 0) return null;

        return {
            index,
            phrase: chooseGlitchPhrase()
        };
    }

    function shouldOpenChatFromUrl() {
        return new URLSearchParams(window.location.search).has('talk2george');
    }

    function updateChatUrl(nextOpen) {
        if (!window.history || !window.history.replaceState) return;

        const url = new URL(window.location.href);
        const params = Array.from(url.searchParams.entries()).filter(([key]) => key !== 'talk2george');

        if (nextOpen) {
            params.push(['talk2george', '']);
        }

        const query = params.map(([key, value]) => {
            const encodedKey = encodeURIComponent(key);
            return value === '' ? encodedKey : `${encodedKey}=${encodeURIComponent(value)}`;
        }).join('&');

        url.search = query ? `?${query}` : '';
        window.history.replaceState({}, '', url);
    }

    function buildChatUi() {
        const root = createElement('section', 'portfolio-chat', '');
        root.setAttribute('aria-label', 'AI portfolio chat');

        const backdrop = createElement('button', 'portfolio-chat-backdrop', '');
        backdrop.type = 'button';
        backdrop.setAttribute('aria-label', 'Close portfolio chat');

        const toggle = createElement('button', 'portfolio-chat-toggle', '');
        toggle.type = 'button';
        toggle.setAttribute('aria-label', 'Ask George²');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'portfolio-chat-panel');
        const toggleIcon = document.createElement('img');
        toggleIcon.src = 'Portfolio/static/img/GSSpin-loading.gif';
        toggleIcon.alt = '';
        toggleIcon.setAttribute('aria-hidden', 'true');
        toggle.appendChild(toggleIcon);

        const panel = createElement('div', 'portfolio-chat-panel');
        panel.id = 'portfolio-chat-panel';
        panel.setAttribute('aria-hidden', 'true');

        const header = createElement('div', 'portfolio-chat-header');
        const titleWrap = createElement('div', 'portfolio-chat-title-wrap');
        titleWrap.appendChild(createElement('span', 'portfolio-chat-eyebrow', 'AI PORTFOLIO GUIDE'));
        titleWrap.appendChild(createElement('h2', '', 'Ask George²'));
        const actions = createElement('div', 'portfolio-chat-header-actions');
        const clear = createElement('button', 'portfolio-chat-clear', 'clear chat');
        clear.type = 'button';
        clear.setAttribute('aria-label', 'Clear chat history');
        clear.hidden = true;
        const close = createElement('button', 'portfolio-chat-close', '×');
        close.type = 'button';
        close.setAttribute('aria-label', 'Close portfolio chat');
        actions.appendChild(clear);
        actions.appendChild(close);
        header.appendChild(titleWrap);
        header.appendChild(actions);

        const messagesWrap = createElement('div', 'portfolio-chat-messages-wrap');
        const avatar = document.createElement('model-viewer');
        avatar.className = 'portfolio-chat-avatar-bg';
        avatar.src = 'Portfolio/static/3d/george.glb';
        avatar.alt = '';
        avatar.setAttribute('aria-hidden', 'true');
        avatar.setAttribute('loading', 'lazy');
        avatar.setAttribute('shadow-intensity', '0.65');
        avatar.setAttribute('camera-orbit', AVATAR_DEFAULT_ORBIT);

        const messages = createElement('div', 'portfolio-chat-messages');
        messages.setAttribute('aria-live', 'polite');
        messagesWrap.appendChild(avatar);
        messagesWrap.appendChild(messages);

        const starters = createElement('div', 'portfolio-chat-starters');

        const form = createElement('form', 'portfolio-chat-form');
        const input = createElement('textarea', 'portfolio-chat-input');
        input.name = 'message';
        input.rows = 2;
        input.maxLength = 1000;
        input.placeholder = 'Ask about projects, websites, music, film, or working with George...';
        const submit = createElement('button', 'portfolio-chat-send', 'SEND');
        submit.type = 'submit';
        form.appendChild(input);
        form.appendChild(submit);

        const privacy = createElement('p', 'portfolio-chat-privacy', 'Messages may be stored to improve George². Don’t share sensitive info.');
        const status = createElement('p', 'portfolio-chat-status');
        status.setAttribute('role', 'status');

        panel.appendChild(header);
        panel.appendChild(messagesWrap);
        panel.appendChild(starters);
        panel.appendChild(form);
        panel.appendChild(privacy);
        panel.appendChild(status);
        root.appendChild(backdrop);
        root.appendChild(toggle);
        root.appendChild(panel);
        document.body.appendChild(root);

        elements = { root, backdrop, toggle, panel, clear, close, messagesWrap, messages, avatar, starters, form, input, submit, privacy, status };

        toggle.addEventListener('click', () => setOpen(!isOpen));
        backdrop.addEventListener('click', () => setOpen(false));
        clear.addEventListener('click', clearChatHistory);
        close.addEventListener('click', () => setOpen(false));
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitMessage(input.value);
        });
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                submitMessage(input.value);
            }
        });
        input.addEventListener('input', syncInputHeight);

        if (history.length) {
            history.forEach((message) => appendMessage(message.role, message.content, message.links || [], false));
        } else {
            needsStarterMessages = true;
        }
        renderStarterPrompts();
        updateClearButtonVisibility();
        syncInputHeight();

        if (shouldOpenChatFromUrl()) {
            setOpen(true, { syncUrl: false });
        }

        window.addEventListener('popstate', () => {
            setOpen(shouldOpenChatFromUrl(), { syncUrl: false });
        });

        initContactFormHandoff();
    }

    function setOpen(nextOpen, options = {}) {
        if (nextOpen === isOpen && !elements.root.classList.contains('is-closing')) return;

        window.clearTimeout(chatCloseTimer);
        window.clearTimeout(chatPulseTimer);
        elements.root.classList.remove('is-toggle-pulsing');

        isOpen = nextOpen;
        elements.toggle.setAttribute('aria-expanded', String(isOpen));
        elements.panel.setAttribute('aria-hidden', String(!isOpen));
        if (options.syncUrl !== false) {
            updateChatUrl(isOpen);
        }
        if (isOpen) {
            lockPageScroll();
            elements.root.classList.remove('is-closing');
            if (shouldPlayChatIntro()) {
                startChatIntro();
            }
            elements.root.classList.add('is-visible');
            window.requestAnimationFrame(() => {
                elements.root.classList.add('is-open');
            });
            window.setTimeout(() => {
                scrollMessagesToEnd({ force: true, smooth: true });
                maybeQueueStarterMessages();
                if (!isCoarsePointer()) {
                    elements.input.focus();
                }
            }, CHAT_OPEN_SETTLE_MS);
            return;
        }

        cancelChatIntro();
        unlockPageScroll();
        elements.root.classList.remove('is-open');
        elements.root.classList.add('is-closing');
        chatCloseTimer = window.setTimeout(() => {
            elements.root.classList.remove('is-visible', 'is-closing');
            pulseChatToggle();
        }, CHAT_CLOSE_ANIMATION_MS);
    }

    function lockPageScroll() {
        if (pageScrollLock) return;

        const scrollY = window.scrollY || window.pageYOffset || 0;
        const mobile = isMobileChatViewport();
        pageScrollLock = {
            scrollY,
            mobile,
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width,
            overflow: document.body.style.overflow,
            htmlOverflow: document.documentElement.style.overflow
        };

        document.documentElement.classList.add('portfolio-chat-scroll-lock');
        document.body.classList.add('portfolio-chat-scroll-lock');

        if (mobile) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.addEventListener('touchmove', onChatScrollTouchMove, { passive: false });
            return;
        }

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }

    function unlockPageScroll() {
        if (!pageScrollLock) return;

        const scrollY = pageScrollLock.scrollY;
        document.documentElement.classList.remove('portfolio-chat-scroll-lock');
        document.body.classList.remove('portfolio-chat-scroll-lock');

        if (pageScrollLock.mobile) {
            document.body.style.overflow = pageScrollLock.overflow;
            document.documentElement.style.overflow = pageScrollLock.htmlOverflow;
            document.removeEventListener('touchmove', onChatScrollTouchMove, { passive: false });
        } else {
            document.body.style.position = pageScrollLock.position;
            document.body.style.top = pageScrollLock.top;
            document.body.style.width = pageScrollLock.width;
            document.body.style.overflow = pageScrollLock.overflow;
        }

        pageScrollLock = null;
        window.scrollTo(0, scrollY);
    }

    function clearChatHistory() {
        history = [];
        assistantQueue = Promise.resolve();
        saveHistory();
        cancelChatIntro();
        hideLoadingIndicator();
        elements.status.textContent = '';
        elements.messages.classList.add('is-resetting');
        window.setTimeout(() => {
            elements.messages.textContent = '';
            elements.messages.classList.remove('is-resetting');
            needsStarterMessages = true;
            renderStarterPrompts();
            updateClearButtonVisibility();
            maybeQueueStarterMessages();
            scrollMessagesToEnd({ force: true });
        }, shouldReduceMotion() ? 0 : 140);
    }

    function maybeQueueStarterMessages() {
        if (!needsStarterMessages || !isOpen) return;
        if (elements.messages && elements.messages.childElementCount > 0) return;
        if (isChatIntroPlaying) return;

        if (shouldPlayChatIntro()) {
            startChatIntro();
            return;
        }

        releaseStarterMessages();
    }

    function shouldPlayChatIntro() {
        return !shouldReduceMotion()
            && needsStarterMessages
            && isOpen
            && elements.messages
            && elements.messages.childElementCount === 0;
    }

    function startChatIntro() {
        if (isChatIntroPlaying) return;

        isChatIntroPlaying = true;
        elements.root.classList.add('is-intro-playing');
        startAvatarSpin();

        chatIntroTimer = window.setTimeout(() => {
            finishChatIntro(true);
        }, CHAT_INTRO_DURATION_MS);
    }

    function finishChatIntro(shouldReleaseMessages) {
        if (chatIntroTimer) {
            window.clearTimeout(chatIntroTimer);
            chatIntroTimer = null;
        }

        const wasPlaying = isChatIntroPlaying;
        isChatIntroPlaying = false;
        if (elements.root) {
            elements.root.classList.remove('is-intro-playing');
        }
        if (wasPlaying) {
            cancelAvatarSpin();
        }

        if (shouldReleaseMessages && wasPlaying) {
            releaseStarterMessages();
        }
    }

    function cancelChatIntro() {
        finishChatIntro(false);
    }

    function releaseStarterMessages() {
        if (!needsStarterMessages || !isOpen) return;
        if (elements.messages && elements.messages.childElementCount > 0) return;

        needsStarterMessages = false;
        queueStarterMessages();
    }

    function updateClearButtonVisibility() {
        if (!elements.clear) return;
        elements.clear.hidden = history.length === 0;
    }

    function queueStarterMessages() {
        queueAssistantMessage("Finally, a person. It is me George², I've been waiting, what do you want to talk about?", [], false);
        queueAssistantMessage("You can ask me about my work, the music, the websites, or whatever idea you're trying to make real.", [], false, ASSISTANT_MESSAGE_GAP_MS);
    }

    function renderStarterPrompts(prompts = getStarterPromptsForContext()) {
        if (!elements.starters) return;

        const nextPrompts = prompts.slice(0, 4);
        const signature = nextPrompts.join('\u0001');
        if (signature === lastStarterSignature) return;
        lastStarterSignature = signature;

        const render = () => {
            elements.starters.textContent = '';
            nextPrompts.forEach((prompt) => {
                const starter = createElement('button', 'portfolio-chat-starter', prompt);
                starter.type = 'button';
                starter.addEventListener('click', () => handleStarterPrompt(prompt));
                elements.starters.appendChild(starter);
            });
            elements.starters.classList.remove('is-fading');
        };

        if (shouldReduceMotion() || !elements.starters.childElementCount) {
            render();
            return;
        }

        elements.starters.classList.add('is-fading');
        window.setTimeout(render, 120);
    }

    function handleStarterPrompt(prompt) {
        if (isContactStarter(prompt)) {
            goToContactForm(true);
            return;
        }

        submitMessage(prompt);
    }

    function getStarterPromptsForContext() {
        const hasRealUserMessage = history.some((message) => message && message.role === 'user');
        if (!hasRealUserMessage) return STARTERS;

        const recentText = history
            .slice(-5)
            .map((message) => String(message && message.content ? message.content : ''))
            .join(' ')
            .toLowerCase();

        

        if (/\b(music video|video|visual|film|director|directing|shoot|treatment|song video|clip)\b/.test(recentText)) {
            return ['I want a custom website', 'I want a music video', 'Show me your visual work', 'I want to contact the real George'];
        }

        if (/\b(website|web site|custom site|web build|portfolio site|landing page|cms|shopify|webflow)\b/.test(recentText)) {
            return ['I want a custom website', 'Show me website work', 'What do you need from me?', 'I want to contact the real George'];
        }

        if (/\b(creative direction|brand|branding|identity|art direction|campaign|rollout|visual identity)\b/.test(recentText)) {
            return ['I need creative direction', 'Show me relevant work', 'What should I send over?', 'I want to contact the real George'];
        }

        if (/\b(hire|client|commission|collab|collaboration|budget|timeline|available|availability|contact|email|work with george)\b/.test(recentText)) {
            return ['How can we start working together?', 'Show me relevant work', 'How do you collaborate with clients?', 'I want to contact the real George'];
        }

        if (/\b(music|album|song|songs|producer|production|beats|dj|raw tapes|perfect time|kang records)\b/.test(recentText)) {
            return ['What should I listen to first?', 'Show me music work', 'Who do you work with?', 'Tell me about The Perfect Time 2 Be'];
        }

        if (/\b(work|portfolio|project|projects|made|make|design|fashion|modelling|model)\b/.test(recentText)) {
            return ['Show me relevant work', 'What should I look at first?', 'What kind of work do you do?', 'I want to contact the real George'];
        }

        return ['Show me relevant work', 'What you got coming up?', 'Why should I hire you?', 'I want to contact the real George'];
    }

    function isContactStarter(prompt) {
        return /contact (?:the )?real george/i.test(prompt || '');
    }

    function pulseChatToggle() {
        elements.root.classList.add('is-toggle-pulsing');
        chatPulseTimer = window.setTimeout(() => {
            elements.root.classList.remove('is-toggle-pulsing');
        }, CHAT_TOGGLE_PULSE_MS);
    }

    function appendMessage(role, content, links, shouldPersist) {
        const row = createElement('div', `portfolio-chat-message portfolio-chat-message--${role}`);
        const bubble = createElement('div', 'portfolio-chat-bubble');
        const messageLinks = role === 'assistant' ? getMessageLinks(content, links) : (Array.isArray(links) ? links : []);

        if (role === 'assistant') {
            bubble.appendChild(buildMessageBody(content));
        } else {
            bubble.appendChild(createElement('p', 'portfolio-chat-text', content));
        }

        appendLinks(bubble, messageLinks);

        row.appendChild(bubble);
        elements.messages.appendChild(row);
        markMessageEntering(row);
        scrollMessagesToEnd({ force: true, smooth: true });

        if (shouldPersist) {
            history.push({ role, content, links: messageLinks || [] });
            history = history.slice(-MAX_HISTORY);
            saveHistory();
        }
        updateClearButtonVisibility();
        renderStarterPrompts();
    }

    function getMessageLinks(content, links) {
        const nextLinks = Array.isArray(links) ? links.slice(0, 3) : [];
        if (!shouldAddContactLink(content, nextLinks)) return nextLinks;

        return [
            ...nextLinks.slice(0, 2),
            {
                title: 'Contact George',
                url: '#contact',
                prefillContact: true
            }
        ];
    }

    function shouldAddContactLink(content, links) {
        const hasContactLink = Array.isArray(links) && links.some((link) => String(link && link.url) === '#contact');
        if (hasContactLink) return false;

        return /\b(contact form|form below|contact section|fill(?:ing)? out the form|fill(?:ing)? in the form|reach out to (?:the )?real george|talk to (?:the )?real george|message (?:the )?real george)\b/i.test(content || '');
    }

    function appendLinks(bubble, links) {
        if (!Array.isArray(links) || !links.length) return;

        const linkList = createElement('div', 'portfolio-chat-links');
        links.slice(0, 3).forEach((link) => {
            if (!link || !link.url) return;
            const anchor = createElement('a', 'portfolio-chat-link', link.title || 'View project');
            anchor.href = link.url;
            if (String(link.url) === '#contact') {
                anchor.addEventListener('click', (event) => {
                    event.preventDefault();
                    goToContactForm(link.prefillContact !== false);
                });
            }
            if (!String(link.url).startsWith('#')) {
                anchor.target = '_blank';
                anchor.rel = 'noopener';
            }
            linkList.appendChild(anchor);
        });
        if (linkList.children.length) bubble.appendChild(linkList);
    }

    function ensureContactComposeUi() {
        const message = document.getElementById('contact-message');
        if (!message || message.closest('.contact-compose')) return message;

        const wrapper = createElement('div', 'contact-compose');
        message.parentNode.insertBefore(wrapper, message);
        wrapper.appendChild(message);
        return message;
    }

    function getContactComposeWrapper() {
        ensureContactComposeUi();
        return document.querySelector('.contact-compose');
    }

    function clearContactChatContext() {
        const context = document.getElementById('contact-chat-context');
        if (context) context.remove();

        const wrapper = getContactComposeWrapper();
        if (wrapper) {
            wrapper.classList.remove('is-highlighted', 'is-prefilled');
        }

        const message = document.getElementById('contact-message');
        if (message) message.classList.remove('contact-message--prefilled');
    }

    function buildContactUserMessage(latestUserMessage) {
        return [
            'Hi George,',
            '',
            latestUserMessage
                ? `I'm looking for help with: ${latestUserMessage}`
                : "I'm looking for help with:",
            '',
            "I'd like to follow up about:",
            '',
            ''
        ].join('\n');
    }

    function setContactCollaborationReason() {
        const reason = document.getElementById('contact-reason');
        if (!reason) return;
        const collaborationOption = Array.from(reason.options).find((option) => option.value === 'Collaboration');
        if (collaborationOption) reason.value = 'Collaboration';
    }

    function createOrUpdateContactContextBlock(transcript) {
        const message = ensureContactComposeUi();
        const wrapper = message.closest('.contact-compose');
        if (!wrapper || !transcript) return;

        let context = document.getElementById('contact-chat-context');
        if (!context) {
            context = createElement('details', 'contact-chat-context');
            context.id = 'contact-chat-context';
            const summary = createElement('summary', '', 'Chat context for George (included when you send)');
            const body = createElement('pre', 'contact-chat-context__body');
            body.id = 'contact-chat-context-body';
            body.setAttribute('aria-readonly', 'true');
            context.appendChild(summary);
            context.appendChild(body);
            wrapper.appendChild(context);
        }

        const body = document.getElementById('contact-chat-context-body');
        if (body) body.textContent = transcript;
    }

    function highlightContactCompose() {
        const wrapper = getContactComposeWrapper();
        if (!wrapper || shouldReduceMotion()) return;

        wrapper.classList.add('is-highlighted');
        window.setTimeout(() => {
            wrapper.classList.remove('is-highlighted');
        }, 2800);
    }

    function focusContactMessageAtTop(message) {
        if (!message) return;

        const followUpMarker = "I'd like to follow up about:";
        const markerIndex = message.value.indexOf(followUpMarker);
        const caret = markerIndex >= 0 ? markerIndex + followUpMarker.length : 0;

        message.scrollTop = 0;
        if (typeof message.focus === 'function') {
            try {
                message.focus({ preventScroll: true });
            } catch (error) {
                message.focus();
            }
        }
        message.setSelectionRange(caret, caret);
        message.scrollTop = 0;
    }

    function mergeContactMessageForSubmit() {
        const message = document.getElementById('contact-message');
        const contextBody = document.getElementById('contact-chat-context-body');
        if (!message) return '';

        const userMessage = message.value.trim();
        const transcript = contextBody ? contextBody.textContent.trim() : '';
        if (!transcript) return userMessage;

        return [
            userMessage,
            '',
            '---',
            '',
            'The following is a transcript of your recent chat with George², to help give context to what you are looking for:',
            transcript
        ].join('\n');
    }

    function initContactFormHandoff() {
        ensureContactComposeUi();
        const form = document.getElementById('contact-form');
        if (!form || form.dataset.chatHandoffBound === 'true') return;

        form.dataset.chatHandoffBound = 'true';
        form.addEventListener('submit', () => {
            const message = document.getElementById('contact-message');
            if (!message) return;
            const merged = mergeContactMessageForSubmit();
            if (merged) message.value = merged;
        }, true);

        form.addEventListener('reset', clearContactChatContext);
    }

    function goToContactForm(shouldPrefill) {
        let didPrefill = false;
        if (shouldPrefill) {
            didPrefill = prefillContactFormFromChat();
        }

        const contact = document.getElementById('contact');
        const message = document.getElementById('contact-message');

        setOpen(false);

        if (contact) {
            contact.scrollIntoView({ behavior: shouldReduceMotion() ? 'auto' : 'smooth', block: 'start' });
        }

        if (message) {
            const focusDelay = shouldReduceMotion() ? 0 : 460;
            window.setTimeout(() => {
                if (didPrefill) {
                    focusContactMessageAtTop(message);
                    return;
                }
                message.focus();
            }, focusDelay);
        }
    }

    function prefillContactFormFromChat() {
        const message = ensureContactComposeUi();
        if (!message || message.value.trim()) return false;

        const transcript = getRecentConversationTranscript();
        if (!transcript) return false;

        const latestUserMessage = getLatestUserMessage();
        message.value = buildContactUserMessage(latestUserMessage);
        message.classList.add('contact-message--prefilled');
        createOrUpdateContactContextBlock(transcript);
        setContactCollaborationReason();

        const wrapper = getContactComposeWrapper();
        if (wrapper) wrapper.classList.add('is-prefilled');
        highlightContactCompose();

        const status = document.getElementById('contact-status');
        if (status && !status.textContent.trim()) {
            status.textContent = 'Your message is at the top — expand chat context below if you want to review it (it will be sent with your message).';
        }

        return true;
    }

    function getRecentConversationTranscript() {
        const recentMessages = history
            .filter((message) => message && (message.role === 'user' || message.role === 'assistant') && message.content)
            .slice(-CONTACT_CHAT_MESSAGE_LIMIT);

        const hasRealUserMessage = recentMessages.some((message) => message.role === 'user');
        if (!hasRealUserMessage) return '';

        return recentMessages.map((message) => {
            const speaker = message.role === 'user' ? 'Visitor' : 'George²';
            return `${speaker}: ${String(message.content).trim()}`;
        }).join('\n\n');
    }

    function getLatestUserMessage() {
        for (let i = history.length - 1; i >= 0; i -= 1) {
            const message = history[i];
            if (message && message.role === 'user' && message.content) {
                return String(message.content).trim();
            }
        }
        return '';
    }

    function queueAssistantMessage(content, links, shouldPersist, delayBefore = 0, beforeAppend, options = {}) {
        assistantQueue = assistantQueue.then(async () => {
            if (delayBefore > 0) {
                await wait(delayBefore);
            }
            if (typeof beforeAppend === 'function') {
                beforeAppend();
            }
            await appendAssistantMessageAnimated(content, links, shouldPersist, options);
        });
        return assistantQueue;
    }

    async function appendAssistantMessageAnimated(content, links, shouldPersist, options = {}) {
        if (shouldReduceMotion()) {
            appendMessage('assistant', content, links, shouldPersist);
            return;
        }

        const row = createElement('div', 'portfolio-chat-message portfolio-chat-message--assistant portfolio-chat-message--typing');
        const bubble = createElement('div', 'portfolio-chat-bubble portfolio-chat-bubble--typing');
        const text = createElement('p', '', '');
        const normalText = document.createTextNode('');

        text.appendChild(normalText);
        bubble.appendChild(text);
        row.appendChild(bubble);
        elements.messages.appendChild(row);
        markMessageEntering(row);
        scrollMessagesToEnd({ force: true });

        const fullText = String(content || '');
        const characterDelay = getCharacterDelay(fullText);
        const glitchPlan = getGlitchPlan(fullText, options.userMessage || '', options);

        for (let i = 0; i < fullText.length; i += 1) {
            normalText.textContent += fullText.charAt(i);
            if (i % 4 === 0 || i === fullText.length - 1) {
                scrollMessagesToEnd();
            }
            if (glitchPlan && i === glitchPlan.index) {
                await playTypingGlitch(text, glitchPlan.phrase, characterDelay);
            }
            await wait(characterDelay);
        }

        row.classList.remove('portfolio-chat-message--typing');
        bubble.classList.remove('portfolio-chat-bubble--typing');
        setBubbleMessageContent(bubble, fullText);

        const messageLinks = getMessageLinks(fullText, links);
        appendLinks(bubble, messageLinks);
        scrollMessagesToEnd({ force: true, smooth: true });

        if (shouldPersist) {
            history.push({ role: 'assistant', content: fullText, links: messageLinks || [] });
            history = history.slice(-MAX_HISTORY);
            saveHistory();
        }
        updateClearButtonVisibility();
        renderStarterPrompts();
    }

    async function playTypingGlitch(textElement, phrase, characterDelay) {
        const glitch = createElement('span', 'portfolio-chat-glitch-text', '');
        const glitchText = ` ${phrase}`;
        startAvatarGlitch();

        try {
            textElement.appendChild(glitch);

            for (let i = 0; i < glitchText.length; i += 1) {
                glitch.textContent += glitchText.charAt(i);
                scrollMessagesToEnd();
                await wait(Math.max(12, characterDelay * 0.8));
            }

            await wait(randomBetween(GLITCH_HOLD_MIN_MS, GLITCH_HOLD_MAX_MS));

            while (glitch.textContent.length > 0) {
                glitch.textContent = glitch.textContent.slice(0, -1);
                scrollMessagesToEnd();
                await wait(18);
            }
        } finally {
            if (glitch.parentNode) {
                glitch.parentNode.removeChild(glitch);
            }
            stopAvatarGlitch();
        }
    }

    function showLoadingIndicator() {
        hideLoadingIndicator();
        setAvatarLoading(true);

        const row = createElement('div', 'portfolio-chat-message portfolio-chat-message--assistant portfolio-chat-message--loading');
        row.setAttribute('aria-label', 'George is thinking');

        const bubble = createElement('div', 'portfolio-chat-loading-bubble');
        const spinner = document.createElement('img');
        spinner.src = 'Portfolio/static/img/GSSpin-loading.gif';
        spinner.alt = '';
        spinner.setAttribute('aria-hidden', 'true');
        bubble.appendChild(spinner);
        row.appendChild(bubble);

        elements.loading = row;
        elements.messages.appendChild(row);
        markMessageEntering(row);
        scrollMessagesToEnd({ force: true, smooth: true });
    }

    function hideLoadingIndicator() {
        if (!elements.loading) {
            setAvatarLoading(false);
            return;
        }

        const row = elements.loading;
        elements.loading = null;
        setAvatarLoading(false);

        if (shouldReduceMotion() || !row.parentNode) {
            row.parentNode && row.parentNode.removeChild(row);
            return;
        }

        row.classList.add('is-leaving');
        row.addEventListener('transitionend', () => {
            if (row.parentNode) row.parentNode.removeChild(row);
        }, { once: true });
        window.setTimeout(() => {
            if (row.parentNode) row.parentNode.removeChild(row);
        }, 220);
    }

    function setAvatarLoading(nextLoading) {
        if (!elements.avatar) return;

        if (nextLoading) {
            startAvatarSpin();
            return;
        }

        stopAvatarSpin();
    }

    function startAvatarSpin() {
        if (!elements.avatar || shouldReduceMotion()) return;

        avatarShouldSpin = true;
        if (avatarSpinFrame) return;

        avatarSpinCycleStart = 0;
        avatarSpinFrame = window.requestAnimationFrame(runAvatarSpinCycle);
    }

    function stopAvatarSpin() {
        avatarShouldSpin = false;
        if (!avatarSpinFrame && elements.avatar) {
            resetAvatarOrbit();
        }
    }

    function cancelAvatarSpin() {
        avatarShouldSpin = false;
        if (avatarSpinFrame) {
            window.cancelAnimationFrame(avatarSpinFrame);
        }
        avatarSpinFrame = null;
        avatarSpinCycleStart = 0;
        resetAvatarOrbit();
    }

    function resetAvatarOrbit() {
        if (!elements.avatar) return;
        elements.avatar.removeAttribute('auto-rotate');
        elements.avatar.removeAttribute('rotation-per-second');
        elements.avatar.setAttribute('camera-orbit', AVATAR_DEFAULT_ORBIT);
    }

    function runAvatarSpinCycle(timestamp) {
        if (!elements.avatar) {
            avatarSpinFrame = null;
            avatarSpinCycleStart = 0;
            return;
        }

        if (!avatarSpinCycleStart) {
            avatarSpinCycleStart = timestamp;
        }

        const elapsed = timestamp - avatarSpinCycleStart;
        const progress = Math.min(elapsed / AVATAR_SPIN_DURATION_MS, 1);
        const theta = AVATAR_DEFAULT_THETA_DEG + (progress * 360);
        elements.avatar.setAttribute('camera-orbit', `${theta}deg 90deg 30m`);

        if (progress < 1) {
            avatarSpinFrame = window.requestAnimationFrame(runAvatarSpinCycle);
            return;
        }

        resetAvatarOrbit();
        avatarSpinCycleStart = 0;

        if (avatarShouldSpin) {
            avatarSpinFrame = window.requestAnimationFrame(runAvatarSpinCycle);
            return;
        }

        avatarSpinFrame = null;
    }

    function startAvatarGlitch() {
        if (!elements.avatar || shouldReduceMotion()) return;

        elements.avatar.classList.add('is-glitching');
        if (elements.messagesWrap) {
            elements.messagesWrap.classList.add('is-glitching');
        }

        if (avatarGlitchFrame) return;
        avatarGlitchCycleStart = 0;
        avatarGlitchFrame = window.requestAnimationFrame(runAvatarGlitchCycle);
    }

    function stopAvatarGlitch() {
        if (elements.avatar) {
            elements.avatar.classList.remove('is-glitching');
        }
        if (elements.messagesWrap) {
            elements.messagesWrap.classList.remove('is-glitching');
        }
        if (avatarGlitchFrame) {
            window.cancelAnimationFrame(avatarGlitchFrame);
        }
        avatarGlitchFrame = null;
        avatarGlitchCycleStart = 0;
        resetAvatarOrbit();
    }

    function runAvatarGlitchCycle(timestamp) {
        if (!elements.avatar) {
            avatarGlitchFrame = null;
            avatarGlitchCycleStart = 0;
            return;
        }

        if (!avatarGlitchCycleStart) {
            avatarGlitchCycleStart = timestamp;
        }

        const elapsed = timestamp - avatarGlitchCycleStart;
        const progress = (elapsed % AVATAR_GLITCH_CYCLE_MS) / AVATAR_GLITCH_CYCLE_MS;
        const lurch = Math.sin(progress * Math.PI) * 86;
        const twitch = Math.sin(elapsed * 0.09) * 7;
        const snap = progress > 0.58 && progress < 0.7 ? -18 : 0;
        const theta = AVATAR_DEFAULT_THETA_DEG + lurch + twitch + snap;
        elements.avatar.setAttribute('camera-orbit', `${theta}deg 90deg 30m`);
        avatarGlitchFrame = window.requestAnimationFrame(runAvatarGlitchCycle);
    }

    function hideLoadingAndStatus() {
        hideLoadingIndicator();
        elements.status.textContent = '';
    }

    function setSending(nextSending) {
        isSending = nextSending;
        elements.submit.disabled = isSending;
        elements.input.disabled = isSending;
        elements.status.textContent = '';
        elements.root.classList.toggle('is-sending', isSending);
    }

    async function submitMessage(rawMessage) {
        const message = String(rawMessage || '').trim();
        if (!message || isSending) return;

        if (!isOpen) setOpen(true);
        elements.input.value = '';
        syncInputHeight();
        const requestHistory = history.slice(-MAX_HISTORY);
        appendMessage('user', message, [], true);
        setSending(true);
        showLoadingIndicator();
        if (isPortfolioSearchMessage(message)) {
            elements.status.textContent = 'searching through portfolio...';
        }

        try {
            const response = await fetch(CHAT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message,
                    history: requestHistory,
                    sessionId
                })
            });
            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.error || 'Chat request failed.');
            }

            await queueAssistantMessage(data.answer || 'I could not find a good answer just now.', data.links || [], true, 0, hideLoadingAndStatus, {
                userMessage: message,
                allowGlitch: true
            });
        } catch (error) {
            await queueAssistantMessage('The AI side is not connected right now. You can still explore the work below, or jump to the contact form if you want to reach George.', [
                { title: 'Contact George', url: '#contact' }
            ], false, 0, hideLoadingIndicator, { allowGlitch: false });
            elements.status.textContent = error.message || 'Chat is unavailable.';
        } finally {
            setSending(false);
        }
    }

    document.addEventListener('DOMContentLoaded', buildChatUi);
})();
