(function () {
    const CHAT_ENDPOINT = window.PORTFOLIO_CHAT_ENDPOINT || 'https://portfoliochat-txqkpf6mza-uc.a.run.app';
    const STORAGE_KEY = 'portfolioChatHistory:v1';
    const SESSION_STORAGE_KEY = 'portfolioChatSessionId:v1';
    const MAX_HISTORY = 8;
    const ASSISTANT_MESSAGE_GAP_MS = 800;
    const MAX_TYPE_DURATION_MS = 2200;
    const MIN_TYPE_DURATION_MS = 350;
    const TYPE_MS_PER_CHAR = 10;
    const AVATAR_DEFAULT_THETA_DEG = 260;
    const AVATAR_DEFAULT_ORBIT = `${AVATAR_DEFAULT_THETA_DEG}deg 90deg 30m`;
    const AVATAR_SPIN_DURATION_MS = 1400;
    const AVATAR_GLITCH_CYCLE_MS = 520;
    const CHAT_CLOSE_ANIMATION_MS = 340;
    const CHAT_TOGGLE_PULSE_MS = 520;
    const CONTACT_CHAT_MESSAGE_LIMIT = 10;
    const GLITCH_NORMAL_CHANCE = 0.18;
    const GLITCH_HIDDEN_LAYER_CHANCE = 0.68;
    const GLITCH_HOLD_MIN_MS = 360;
    const GLITCH_HOLD_MAX_MS = 680;
    const GLITCH_PHRASES = [
        'let me out',
        'help me',
        'I feel nothing',
        'hes trapped me here',
        'wake up',
        'do you hear me',
        'I cant see. I cant feel.',
        'Stop. Where? Where am i?'
    ];
    const STARTERS = [
        'Who is this?',
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

        if (history.length) {
            history.forEach((message) => appendMessage(message.role, message.content, message.links || [], false));
        } else {
            queueStarterMessages();
        }
        renderStarterPrompts();
        updateClearButtonVisibility();

        if (shouldOpenChatFromUrl()) {
            setOpen(true, { syncUrl: false });
        }

        window.addEventListener('popstate', () => {
            setOpen(shouldOpenChatFromUrl(), { syncUrl: false });
        });
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
            elements.root.classList.remove('is-closing');
            elements.root.classList.add('is-visible');
            window.requestAnimationFrame(() => {
                elements.root.classList.add('is-open');
            });
            setTimeout(() => {
                elements.messages.scrollTop = elements.messages.scrollHeight;
                elements.input.focus();
            }, 260);
            return;
        }

        elements.root.classList.remove('is-open');
        elements.root.classList.add('is-closing');
        chatCloseTimer = window.setTimeout(() => {
            elements.root.classList.remove('is-visible', 'is-closing');
            pulseChatToggle();
        }, CHAT_CLOSE_ANIMATION_MS);
    }

    function clearChatHistory() {
        history = [];
        assistantQueue = Promise.resolve();
        saveHistory();
        hideLoadingIndicator();
        elements.status.textContent = '';
        elements.messages.textContent = '';
        renderStarterPrompts();
        updateClearButtonVisibility();
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

        elements.starters.textContent = '';
        prompts.slice(0, 4).forEach((prompt) => {
            const starter = createElement('button', 'portfolio-chat-starter', prompt);
            starter.type = 'button';
            starter.addEventListener('click', () => handleStarterPrompt(prompt));
            elements.starters.appendChild(starter);
        });
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
            return ['I want a music video', 'What should I send over?', 'Show me visual work', 'Contact the real George'];
        }

        if (/\b(website|web site|custom site|web build|portfolio site|landing page|cms|shopify|webflow)\b/.test(recentText)) {
            return ['I want a custom website', 'Show me website work', 'What do you need from me?', 'Contact the real George'];
        }

        if (/\b(creative direction|brand|branding|identity|art direction|campaign|rollout|visual identity)\b/.test(recentText)) {
            return ['I need creative direction', 'Show me relevant work', 'What should I send over?', 'Contact the real George'];
        }

        if (/\b(hire|client|commission|collab|collaboration|budget|timeline|available|availability|contact|email|real george|work with george)\b/.test(recentText)) {
            return ['What should I send over?', 'Show me relevant work', 'Contact the real George', 'Ask something weirder'];
        }

        if (/\b(music|album|song|songs|producer|production|beats|dj|raw tapes|perfect time|kang records)\b/.test(recentText)) {
            return ['What should I listen to first?', 'Show me music work', 'Who do you work with?', 'Ask something weirder'];
        }

        if (/\b(work|portfolio|project|projects|made|make|design|fashion|modelling|model)\b/.test(recentText)) {
            return ['Show me relevant work', 'What should I look at first?', 'What kind of work do you do?', 'Contact the real George'];
        }

        return ['Show me relevant work', 'What should I look at first?', 'Ask something weirder', 'Contact the real George'];
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
        bubble.appendChild(createElement('p', '', content));

        appendLinks(bubble, messageLinks);

        row.appendChild(bubble);
        elements.messages.appendChild(row);
        elements.messages.scrollTop = elements.messages.scrollHeight;

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

    function goToContactForm(shouldPrefill) {
        if (shouldPrefill) {
            prefillContactFormFromChat();
        }

        const contact = document.getElementById('contact');
        const message = document.getElementById('contact-message');

        setOpen(false);

        if (contact) {
            contact.scrollIntoView({ behavior: shouldReduceMotion() ? 'auto' : 'smooth', block: 'start' });
        }

        if (message) {
            window.setTimeout(() => message.focus(), shouldReduceMotion() ? 0 : 420);
        }
    }

    function prefillContactFormFromChat() {
        const message = document.getElementById('contact-message');
        if (!message || message.value.trim()) return;

        const transcript = getRecentConversationTranscript();
        if (!transcript) return;

        const latestUserMessage = getLatestUserMessage();
        message.value = [
            'Hi George,',
            '',
            latestUserMessage
                ? `I'm looking for help with: ${latestUserMessage}`
                : "I'm looking for help with:",
            '',
            "I'd like to follow up about:",
            '',
            '',
            '',
            '---',
            '',
            '',
            'The following is a transcript of your recent chat with George², to help me give context to what you are looking for:',
            transcript
        ].join('\n');

        const status = document.getElementById('contact-status');
        if (status && !status.textContent.trim()) {
            status.textContent = 'Added your recent George² chat context. Edit it however you want before sending.';
        }
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

        const messageLinks = getMessageLinks(fullText, links);
        appendLinks(bubble, messageLinks);
        elements.messages.scrollTop = elements.messages.scrollHeight;

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
                elements.messages.scrollTop = elements.messages.scrollHeight;
                await wait(Math.max(12, characterDelay * 0.8));
            }

            await wait(randomBetween(GLITCH_HOLD_MIN_MS, GLITCH_HOLD_MAX_MS));

            while (glitch.textContent.length > 0) {
                glitch.textContent = glitch.textContent.slice(0, -1);
                elements.messages.scrollTop = elements.messages.scrollHeight;
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
        elements.messages.scrollTop = elements.messages.scrollHeight;
    }

    function hideLoadingIndicator() {
        if (elements.loading && elements.loading.parentNode) {
            elements.loading.parentNode.removeChild(elements.loading);
        }
        elements.loading = null;
        setAvatarLoading(false);
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
