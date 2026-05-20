(function () {
    const CHAT_ENDPOINT = window.PORTFOLIO_CHAT_ENDPOINT || 'https://portfoliochat-txqkpf6mza-uc.a.run.app';
    const STORAGE_KEY = 'portfolioChatHistory:v1';
    const MAX_HISTORY = 8;
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
        toggle.setAttribute('aria-label', 'Ask George');
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
        titleWrap.appendChild(createElement('h2', '', 'Ask George'));
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
            appendMessage('assistant', 'Hi, I am George-ish: an AI guide to this portfolio. Ask me what to look at, what George makes, or whether a project idea sounds like a fit.', [], false);
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

        if (Array.isArray(links) && links.length) {
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

        row.appendChild(bubble);
        elements.messages.appendChild(row);
        elements.messages.scrollTop = elements.messages.scrollHeight;

        if (shouldPersist) {
            history.push({ role, content, links: links || [] });
            history = history.slice(-MAX_HISTORY);
            saveHistory();
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

            hideLoadingIndicator();
            appendMessage('assistant', data.answer || 'I could not find a good answer just now.', data.links || [], true);
        } catch (error) {
            hideLoadingIndicator();
            appendMessage('assistant', 'The AI side is not connected right now. You can still explore the work below, or jump to the contact form if you want to reach George.', [
                { title: 'Contact George', url: '#contact' }
            ], false);
            elements.status.textContent = error.message || 'Chat is unavailable.';
        } finally {
            setSending(false);
        }
    }

    document.addEventListener('DOMContentLoaded', buildChatUi);
})();
