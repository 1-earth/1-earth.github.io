(function () {
    var TEXTS = ['ONE EARTH PRODUCTIONS ℗', 'GEORGE SYMONDS'];
    var CORRUPT_CHARS = ['▓', '▒', '░', '█'];
    var REST_HOLD_MS = 5500;
    var REDUCED_HOLD_MS = 6000;
    var SWAP_BURST_MS = 380;
    var CORRUPT_CHANCE = 0.28;

    function corrupt(text) {
        if (text.length < 4) return text;
        var i = Math.floor(Math.random() * text.length);
        var c = CORRUPT_CHARS[Math.floor(Math.random() * CORRUPT_CHARS.length)];
        return text.slice(0, i) + c + text.slice(i + 1);
    }

    function delay(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function SiteTitleGlitch(link) {
        this.link = link;
        this.wrap = link.querySelector('.site-title-glitch__wrap');
        this.layers = link.querySelectorAll('[data-site-title-text]');
        this.header = link.closest('.portfolio-header, .work-header');
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.paused = false;
        this.running = false;
        this.timer = null;
        this.index = 0;

        if (!this.wrap || !this.layers.length) return;

        var current = (this.layers[0].textContent || '').trim();
        var found = TEXTS.indexOf(current);
        this.index = found >= 0 ? found : 0;

        this.setMinWidth();
        this.setText(TEXTS[this.index]);
        this.bindEvents();
        this.start();
    }

    SiteTitleGlitch.prototype.setMinWidth = function () {
        var probe = document.createElement('span');
        probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none;';
        probe.style.font = window.getComputedStyle(this.link).font;
        document.body.appendChild(probe);

        var max = 0;
        for (var i = 0; i < TEXTS.length; i += 1) {
            probe.textContent = TEXTS[i];
            max = Math.max(max, probe.offsetWidth);
        }
        document.body.removeChild(probe);
        this.wrap.style.minWidth = max + 'px';
    };

    SiteTitleGlitch.prototype.setText = function (text) {
        for (var i = 0; i < this.layers.length; i += 1) {
            this.layers[i].textContent = text;
        }
    };

    SiteTitleGlitch.prototype.bindEvents = function () {
        var self = this;

        this.link.addEventListener('mouseenter', function () {
            self.link.classList.add('is-hover');
        });
        this.link.addEventListener('mouseleave', function () {
            self.link.classList.remove('is-hover');
        });

        if (this.header) {
            var syncPause = function () {
                self.paused = self.header.classList.contains('header-hidden');
                self.link.classList.toggle('is-paused', self.paused);
            };
            syncPause();
            new MutationObserver(syncPause).observe(this.header, {
                attributes: true,
                attributeFilter: ['class']
            });
        }

        var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        var onMotionChange = function () {
            self.reducedMotion = motionQuery.matches;
            self.link.classList.toggle('is-reduced-motion', self.reducedMotion);
            self.restart();
        };
        onMotionChange();
        if (motionQuery.addEventListener) {
            motionQuery.addEventListener('change', onMotionChange);
        } else if (motionQuery.addListener) {
            motionQuery.addListener(onMotionChange);
        }
    };

    SiteTitleGlitch.prototype.restart = function () {
        this.stop();
        this.start();
    };

    SiteTitleGlitch.prototype.stop = function () {
        this.running = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.link.classList.remove('is-swapping');
    };

    SiteTitleGlitch.prototype.start = function () {
        if (this.running) return;
        this.running = true;
        this.loop();
    };

    SiteTitleGlitch.prototype.schedule = function (ms) {
        var self = this;
        return new Promise(function (resolve) {
            self.timer = setTimeout(resolve, ms);
        });
    };

    SiteTitleGlitch.prototype.loop = async function () {
        while (this.running) {
            if (this.paused) {
                await this.schedule(200);
                continue;
            }

            var holdMs = this.reducedMotion ? REDUCED_HOLD_MS : REST_HOLD_MS;
            await this.schedule(holdMs);
            if (!this.running || this.paused) continue;

            this.index = (this.index + 1) % TEXTS.length;
            var nextText = TEXTS[this.index];

            if (this.reducedMotion) {
                await this.playReducedSwap(nextText);
                continue;
            }

            await this.playSwap(nextText);
        }
    };

    SiteTitleGlitch.prototype.playReducedSwap = async function (nextText) {
        this.link.classList.add('is-reduced-swapping');
        await delay(520);
        this.setText(nextText);
        await delay(520);
        this.link.classList.remove('is-reduced-swapping');
    };

    SiteTitleGlitch.prototype.playSwap = async function (nextText) {
        this.link.classList.add('is-swapping');

        if (Math.random() < CORRUPT_CHANCE) {
            this.setText(corrupt(nextText));
            await delay(55);
            if (Math.random() < 0.45) {
                this.setText(corrupt(nextText));
                await delay(45);
            }
        }

        this.setText(nextText);
        await delay(SWAP_BURST_MS);
        this.link.classList.remove('is-swapping');
    };

    function init() {
        var links = document.querySelectorAll('.site-title-glitch');
        for (var i = 0; i < links.length; i += 1) {
            new SiteTitleGlitch(links[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
