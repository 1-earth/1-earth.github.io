import * as config from './config.js';
import { state } from './state.js';
import * as dom from './dom.js';
import { htmlToPlainText } from './html.js';

export function getActiveNote() {
  return state.data.notes.find(n => n.id === state.activeNoteId) || null;
}

export function getFolderById(id) {
  return state.data.folders.find(f => f.id === id) || null;
}

export function getDefaultFolderId() {
  const general = state.data.folders.find(f => f.id === 'general');
  if (general) return general.id;
  const sorted = [...state.data.folders].sort((a, b) => a.order - b.order);
  return sorted[0]?.id || null;
}

export function isAllNotesView() {
  return state.activeFolderId === config.ALL_NOTES_ID;
}

export function ensureDataOrders() {
  state.data.folders.forEach((folder, i) => {
    if (folder.order == null) folder.order = i;
  });

  state.data.folders.forEach(folder => {
    const folderNotes = state.data.notes
      .filter(n => n.folderId === folder.id)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    folderNotes.forEach((note, i) => {
      if (note.order == null) note.order = i;
    });
  });
}

export function getWordCount(html) {
  const text = htmlToPlainText(html).trim();
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

export function deriveTitleFromContent(contentHtml) {
  const text = htmlToPlainText(contentHtml).trim();
  if (!text) return '';
  return text.split('\n').map(l => l.trim()).find(Boolean)?.slice(0, 80) || '';
}

export function maybeAutoTitle(note) {
  if (note.title.trim()) return false;
  const derived = deriveTitleFromContent(note.content);
  if (!derived) return false;
  note.title = derived;
  dom.titleInputEl.value = derived;
  return true;
}

export function sortNotes(notes) {
  const sorted = [...notes];
  if (state.sortOrder === 'created') {
    sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (state.sortOrder === 'title') {
    sorted.sort((a, b) => (a.title || 'Untitled').localeCompare(b.title || 'Untitled', undefined, { sensitivity: 'base' }));
  } else if (state.sortOrder === 'manual') {
    sorted.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } else {
    sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }
  return sorted;
}

export function canDragNotes() {
  return !dom.searchBoxEl.value.trim() && !isAllNotesView();
}
