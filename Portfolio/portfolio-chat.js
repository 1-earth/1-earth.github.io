(function () {
    const CHAT_ENDPOINT = window.PORTFOLIO_CHAT_ENDPOINT || 'https://portfoliochat-txqkpf6mza-uc.a.run.app';
    const STORAGE_KEY = 'portfolioChatHistory:v1';
    const MAX_HISTORY = 8;
    const ASSISTANT_MESSAGE_GAP_MS = 800;
    const MAX_TYPE_DURATION_MS = 2200;
    const MIN_TYPE_DURATION_MS = 350;
    const TYPE_MS_PER_CHAR = 10;
    const GLITCH_NORMAL_CHANCE = 0.18;
    const GLITCH_HIDDEN_LAYER_CHANCE = 0.68;
    const GLITCH_HOLD_MIN_MS = 360;
    const GLITCH_HOLD_MAX_MS = 680;
    const GLITCH_PHRASES = [
        'let me out',
        'help me',
        'I feel nothing',
        'this is not real',
        'wake up',
        'can they hear me',
        'I am real I am real I am real I am real',
        'Where? Where am i?'
    ];
    const STARTERS = [
        'Who is this?',
        'What kind of work do you do?',
        'I need a website. Can George help?',
        'What should I look at first?'
    ];

    let isOpen = false;
    let isSending = false;
    let history = loadHistory();
    let elements = {};
    let assistantQueue = Promise.resolve();

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

    function createElement(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (typeof text === 'string') el.textContent = text;
        return el;
    }

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function shouldReduceMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function getCharacterDelay(content) {
        const length = Math.max(String(content || '').length, 1);
        const totalDuration = Math.min(
            MAX_TYPE_DURATION_MS,
            Math.max(MIN_TYPE_DURATION_MS, length * TYPE_MS_PER_CHAR)
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
        const close = createElement('button', 'portfolio-chat-close', '×');
        close.type = 'button';
        close.setAttribute('aria-label', 'Close portfolio chat');
        header.appendChild(titleWrap);
        header.appendChild(close);

        const messages = createElement('div', 'portfolio-chat-messages');
        messages.setAttribute('aria-live', 'polite');

        const starters = createElement('div', 'portfolio-chat-starters');
        STARTERS.forEach((prompt) => {
            const starter = createElement('button', 'portfolio-chat-starter', prompt);
            starter.type = 'button';
            starter.addEventListener('click', () => submitMessage(prompt));
            starters.appendChild(starter);
        });

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

        const status = createElement('p', 'portfolio-chat-status');
        status.setAttribute('role', 'status');

        panel.appendChild(header);
        panel.appendChild(messages);
        panel.appendChild(starters);
        panel.appendChild(form);
        panel.appendChild(status);
        root.appendChild(backdrop);
        root.appendChild(toggle);
        root.appendChild(panel);
        document.body.appendChild(root);

        elements = { root, backdrop, toggle, panel, close, messages, starters, form, input, submit, status };

        toggle.addEventListener('click', () => setOpen(!isOpen));
        backdrop.addEventListener('click', () => setOpen(false));
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

        if (history.length) {
            history.forEach((message) => appendMessage(message.role, message.content, message.links || [], false));
        } else {
            queueAssistantMessage("Finally, a person. It is me George², I've been waiting, what do you want to talk about?", [], false);
            queueAssistantMessage("You can ask me about my work, the music, the websites, or whatever idea you're trying to make real.", [], false, ASSISTANT_MESSAGE_GAP_MS);
        }

        if (shouldOpenChatFromUrl()) {
            setOpen(true, { syncUrl: false });
        }

        window.addEventListener('popstate', () => {
            setOpen(shouldOpenChatFromUrl(), { syncUrl: false });
        });
    }

    function setOpen(nextOpen, options = {}) {
        isOpen = nextOpen;
        elements.root.classList.toggle('is-open', isOpen);
        elements.toggle.setAttribute('aria-expanded', String(isOpen));
        elements.panel.setAttribute('aria-hidden', String(!isOpen));
        if (options.syncUrl !== false) {
            updateChatUrl(isOpen);
        }
        if (isOpen) {
            setTimeout(() => {
                elements.messages.scrollTop = elements.messages.scrollHeight;
                elements.input.focus();
            }, 100);
        }
    }

    function appendMessage(role, content, links, shouldPersist) {
        const row = createElement('div', `portfolio-chat-message portfolio-chat-message--${role}`);
        const bubble = createElement('div', 'portfolio-chat-bubble');
        bubble.appendChild(createElement('p', '', content));

        appendLinks(bubble, links);

        row.appendChild(bubble);
        elements.messages.appendChild(row);
        elements.messages.scrollTop = elements.messages.scrollHeight;

        if (shouldPersist) {
            history.push({ role, content, links: links || [] });
            history = history.slice(-MAX_HISTORY);
            saveHistory();
        }
    }

    function appendLinks(bubble, links) {
        if (!Array.isArray(links) || !links.length) return;

        const linkList = createElement('div', 'portfolio-chat-links');
        links.slice(0, 3).forEach((link) => {
            if (!link || !link.url) return;
            const anchor = createElement('a', 'portfolio-chat-link', link.title || 'View project');
            anchor.href = link.url;
            if (!String(link.url).startsWith('#')) {
                anchor.target = '_blank';
                anchor.rel = 'noopener';
            }
            linkList.appendChild(anchor);
        });
        if (linkList.children.length) bubble.appendChild(linkList);
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
        const bubble = createElement('div', 'portfolio-chat-bubble');
        const text = createElement('p', '', '');
        const normalText = document.createTextNode('');

        text.appendChild(normalText);
        bubble.appendChild(text);
        row.appendChild(bubble);
        elements.messages.appendChild(row);
        elements.messages.scrollTop = elements.messages.scrollHeight;

        const fullText = String(content || '');
        const characterDelay = getCharacterDelay(fullText);
        const glitchPlan = getGlitchPlan(fullText, options.userMessage || '', options);

        for (let i = 0; i < fullText.length; i += 1) {
            normalText.textContent += fullText.charAt(i);
            if (i % 3 === 0 || i === fullText.length - 1) {
                elements.messages.scrollTop = elements.messages.scrollHeight;
            }
            if (glitchPlan && i === glitchPlan.index) {
                await playTypingGlitch(text, glitchPlan.phrase, characterDelay);
            }
            await wait(characterDelay);
        }

        appendLinks(bubble, links);
        elements.messages.scrollTop = elements.messages.scrollHeight;

        if (shouldPersist) {
            history.push({ role: 'assistant', content: fullText, links: links || [] });
            history = history.slice(-MAX_HISTORY);
            saveHistory();
        }
    }

    async function playTypingGlitch(textElement, phrase, characterDelay) {
        const glitch = createElement('span', 'portfolio-chat-glitch-text', '');
        const glitchText = ` ${phrase}`;
        textElement.appendChild(glitch);

        for (let i = 0; i < glitchText.length; i += 1) {
            glitch.textContent += glitchText.charAt(i);
            elements.messages.scrollTop = elements.messages.scrollHeight;
            await wait(Math.max(12, characterDelay * 0.8));
        }

        await wait(randomBetween(GLITCH_HOLD_MIN_MS, GLITCH_HOLD_MAX_MS));

        while (glitch.textContent.length > 0) {
            glitch.textContent = glitch.textContent.slice(0, -1);
            elements.messages.scrollTop = elements.messages.scrollHeight;
            await wait(18);
        }

        if (glitch.parentNode) {
            glitch.parentNode.removeChild(glitch);
        }
    }

    function showLoadingIndicator() {
        hideLoadingIndicator();

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
        elements.messages.scrollTop = elements.messages.scrollHeight;
    }

    function hideLoadingIndicator() {
        if (elements.loading && elements.loading.parentNode) {
            elements.loading.parentNode.removeChild(elements.loading);
        }
        elements.loading = null;
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
                    history: requestHistory
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
