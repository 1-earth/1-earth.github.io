import * as dom from './dom.js';

let confirmResolve = null;
let undoTimer = null;
let undoInterval = null;
let undoPayload = null;

export function showConfirm({ title, message, confirmLabel = 'Delete' }) {
  return new Promise((resolve) => {
    confirmResolve = resolve;
    dom.confirmModalTitleEl.textContent = title;
    dom.confirmModalMessageEl.textContent = message;
    dom.confirmModalConfirmEl.textContent = confirmLabel;
    dom.confirmModalEl.classList.remove('hidden');
    dom.confirmModalCancelEl.focus();
  });
}

export function hideConfirm(confirmed = false) {
  dom.confirmModalEl.classList.add('hidden');
  if (confirmResolve) {
    confirmResolve(confirmed);
    confirmResolve = null;
  }
}

export function clearUndoToast(dismissed = false) {
  if (undoTimer) clearTimeout(undoTimer);
  if (undoInterval) clearInterval(undoInterval);
  undoTimer = null;
  undoInterval = null;
  if (dismissed) undoPayload = null;
  dom.undoToastEl.classList.add('hidden');
}

export function showUndoToast(message, onUndo, durationMs = 5000) {
  clearUndoToast(true);
  undoPayload = { onUndo };

  dom.undoToastMessageEl.textContent = message;
  dom.undoToastEl.classList.remove('hidden');

  let remaining = durationMs;
  dom.undoToastTimerEl.textContent = `${Math.ceil(remaining / 1000)}s`;

  undoInterval = setInterval(() => {
    remaining -= 1000;
    if (remaining <= 0) {
      dom.undoToastTimerEl.textContent = '0s';
      return;
    }
    dom.undoToastTimerEl.textContent = `${Math.ceil(remaining / 1000)}s`;
  }, 1000);

  undoTimer = setTimeout(() => {
    clearUndoToast(true);
  }, durationMs);
}

export function performUndo() {
  if (!undoPayload?.onUndo) return;
  undoPayload.onUndo();
  clearUndoToast(true);
}

export function initConfirmModal() {
  dom.confirmModalCancelEl.addEventListener('click', () => hideConfirm(false));
  dom.confirmModalConfirmEl.addEventListener('click', () => hideConfirm(true));

  dom.confirmModalEl.addEventListener('click', (e) => {
    if (e.target === dom.confirmModalEl) hideConfirm(false);
  });

  dom.confirmModalEl.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideConfirm(false);
  });

  dom.confirmModalConfirmEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      hideConfirm(true);
    }
  });

  dom.undoToastBtnEl.addEventListener('click', performUndo);
}
