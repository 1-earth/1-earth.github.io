import * as dom from './dom.js';
import { state } from './state.js';

export const MOBILE_BREAKPOINT = 768;
const SWIPE_EDGE_PX = 40;
const SWIPE_MIN_PX = 55;

export function isMobileLayout() {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}

function applyMobileViewClasses() {
  dom.appEl.classList.remove('mobile-sidebar', 'mobile-list', 'mobile-editor');
  if (!isMobileLayout()) return;
  const view = state.mobileView || 'sidebar';
  dom.appEl.classList.add(`mobile-${view}`);
}

export function setMobileView(view) {
  if (!isMobileLayout()) return;
  state.mobileView = view;
  applyMobileViewClasses();
}

export function navigateToSidebar() {
  setMobileView('sidebar');
}

export function navigateToList() {
  setMobileView('list');
}

export function navigateToEditor() {
  setMobileView('editor');
}

export function goBackFromEditor() {
  navigateToList();
}

export function goBackFromList() {
  navigateToSidebar();
}

function setupSwipeBack(panelEl, onBack) {
  if (!panelEl) return;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  panelEl.addEventListener('touchstart', (e) => {
    if (!isMobileLayout() || isModalOpen()) return;
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = startX <= SWIPE_EDGE_PX;
  }, { passive: true });

  panelEl.addEventListener('touchend', (e) => {
    if (!tracking || !isMobileLayout()) return;
    tracking = false;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (dx >= SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy) * 1.4) {
      onBack();
    }
  }, { passive: true });

  panelEl.addEventListener('touchcancel', () => {
    tracking = false;
  }, { passive: true });
}

function isModalOpen() {
  return !dom.folderModalEl.classList.contains('hidden') ||
    !dom.embedModalEl.classList.contains('hidden') ||
    !dom.confirmModalEl.classList.contains('hidden');
}

export function initMobileNav() {
  dom.noteListBackBtn.addEventListener('click', goBackFromList);
  dom.editorBackBtn.addEventListener('click', goBackFromEditor);

  setupSwipeBack(dom.noteListPanelEl, goBackFromList);
  setupSwipeBack(dom.editorPanelEl, goBackFromEditor);

  window.addEventListener('resize', () => {
    if (isMobileLayout()) {
      if (!state.mobileView) state.mobileView = 'sidebar';
      applyMobileViewClasses();
      dom.appEl.classList.add('mobile-transitions-ready');
    } else {
      dom.appEl.classList.remove(
        'mobile-sidebar', 'mobile-list', 'mobile-editor', 'mobile-transitions-ready'
      );
    }
  });

  if (isMobileLayout()) {
    state.mobileView = 'sidebar';
    applyMobileViewClasses();
    requestAnimationFrame(() => {
      dom.appEl.classList.add('mobile-transitions-ready');
    });
  }
}
