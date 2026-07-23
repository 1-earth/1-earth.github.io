import * as dom from './dom.js';

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatDateTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

export function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isModalOpen() {
  return !dom.folderModalEl.classList.contains('hidden') ||
    !dom.embedModalEl.classList.contains('hidden') ||
    !dom.confirmModalEl.classList.contains('hidden') ||
    (dom.formatSheetEl && !dom.formatSheetEl.classList.contains('hidden'));
}

export function formatLastSaved(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function setSaveStatus(state, text) {
  dom.saveStatusEl.className = 'save-status' + (state ? ' ' + state : '');
  dom.saveStatusEl.textContent = text;
}
