import * as dom from './dom.js';
import { isMobileLayout } from './mobile.js';
import { saveEditorSelection, applyTextFormat } from './editor.js';

const SWIPE_DISMISS_PX = 72;
const SWIPE_DRAG_START_PX = 12;

let sheetDragStartY = 0;
let sheetDragging = false;
let sheetDragActive = false;
let sheetDragOffset = 0;

function resetSheetPanelPosition() {
  if (!dom.formatSheetPanelEl) return;
  dom.formatSheetPanelEl.style.transition = '';
  dom.formatSheetPanelEl.style.transform = '';
  if (dom.formatSheetBackdropEl) dom.formatSheetBackdropEl.style.opacity = '';
}

export function isFormatSheetOpen() {
  return dom.formatSheetEl && !dom.formatSheetEl.classList.contains('hidden');
}

export function openFormatSheet() {
  if (!isMobileLayout()) return;
  dom.formatSheetEl.classList.remove('hidden');
  dom.formatSheetTriggerEl.setAttribute('aria-expanded', 'true');
}

export function closeFormatSheet() {
  if (!dom.formatSheetEl) return;
  sheetDragging = false;
  sheetDragActive = false;
  sheetDragOffset = 0;
  resetSheetPanelPosition();
  dom.formatSheetEl.classList.add('hidden');
  dom.formatSheetTriggerEl?.setAttribute('aria-expanded', 'false');
}

function setupSheetSwipeDismiss() {
  const panel = dom.formatSheetPanelEl;
  if (!panel) return;

  panel.addEventListener('touchstart', (e) => {
    if (!isFormatSheetOpen() || e.touches.length !== 1) return;
    sheetDragStartY = e.touches[0].clientY;
    sheetDragging = true;
    sheetDragActive = false;
    sheetDragOffset = 0;
    panel.style.transition = 'none';
  }, { passive: true });

  panel.addEventListener('touchmove', (e) => {
    if (!sheetDragging || e.touches.length !== 1) return;
    const dy = e.touches[0].clientY - sheetDragStartY;
    if (dy <= 0) return;
    if (!sheetDragActive && dy < SWIPE_DRAG_START_PX) return;
    sheetDragActive = true;
    sheetDragOffset = dy;
    panel.style.transform = `translateY(${dy}px)`;
    if (dom.formatSheetBackdropEl) {
      const fade = Math.max(0.2, 1 - dy / 280);
      dom.formatSheetBackdropEl.style.opacity = String(fade);
    }
  }, { passive: true });

  const endSheetDrag = () => {
    if (!sheetDragging) return;
    sheetDragging = false;
    if (!sheetDragActive) {
      sheetDragOffset = 0;
      return;
    }
    if (sheetDragOffset >= SWIPE_DISMISS_PX) {
      closeFormatSheet();
      return;
    }
    panel.style.transition = 'transform 0.2s ease';
    panel.style.transform = '';
    if (dom.formatSheetBackdropEl) {
      dom.formatSheetBackdropEl.style.transition = 'opacity 0.2s ease';
      dom.formatSheetBackdropEl.style.opacity = '';
      panel.addEventListener('transitionend', () => {
        dom.formatSheetBackdropEl.style.transition = '';
      }, { once: true });
    }
    sheetDragOffset = 0;
  };

  panel.addEventListener('touchend', endSheetDrag, { passive: true });
  panel.addEventListener('touchcancel', endSheetDrag, { passive: true });
}

export function initFormatSheet() {
  dom.formatSheetTriggerEl?.addEventListener('click', () => {
    if (isFormatSheetOpen()) closeFormatSheet();
    else {
      saveEditorSelection();
      openFormatSheet();
    }
  });

  dom.formatSheetBackdropEl?.addEventListener('click', closeFormatSheet);

  dom.formatSheetEl?.addEventListener('mousedown', (e) => {
    if (e.target.closest('[data-format]')) {
      saveEditorSelection();
      e.preventDefault();
    }
  });

  dom.formatSheetEl?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-format]');
    if (!btn) return;
    e.preventDefault();
    applyTextFormat(btn.dataset.format);
    closeFormatSheet();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFormatSheetOpen()) {
      e.preventDefault();
      closeFormatSheet();
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobileLayout()) closeFormatSheet();
  });

  setupSheetSwipeDismiss();
}
