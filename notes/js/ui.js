import * as config from './config.js';
import * as dom from './dom.js';
import { state } from './state.js';
import {
  getActiveNote, getFolderById, getDefaultFolderId, isAllNotesView,
  ensureDataOrders, sortNotes, canDragNotes, maybeAutoTitle
} from './data.js';
import { escapeHtml, formatDate, formatDateTime, setSaveStatus, uid } from './utils.js';
import { htmlToPlainText, htmlToPreviewText } from './html.js';
import { saveSession, scheduleSave, persistData, markJsonBackedUp } from './storage.js';
import {
  commitUndoGroup, beginUndoGroup, clearNoteHistory, setEditorContent, syncContentFromEditor,
  focusEditorBody
} from './editor.js';
import { isMobileLayout, navigateToEditor, navigateToList, navigateToSidebar } from './mobile.js';
import { renderFolderDropdown, renderSortDropdown } from './custom-dropdown.js';
import { renderAddDropdown } from './add-dropdown.js';
import { renderEditorMoreMenu } from './editor-more-menu.js';
import { showConfirm, showUndoToast } from './confirm.js';
import { closeInNoteSearch } from './in-note-search.js';
import { canEdit, applyEditMode } from './auth.js';

export function reorderFolders(fromId, toId) {
  if (!canEdit()) return;
  if (fromId === toId) return;
  const folders = [...state.data.folders].sort((a, b) => a.order - b.order);
  const fromIndex = folders.findIndex(f => f.id === fromId);
  const toIndex = folders.findIndex(f => f.id === toId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [moved] = folders.splice(fromIndex, 1);
  folders.splice(toIndex, 0, moved);
  folders.forEach((folder, i) => { folder.order = i; });
  scheduleSave();
}

export function reorderNotesInFolder(fromId, toId, folderId) {
  if (!canEdit()) return;
  if (fromId === toId) return;
  const notes = state.data.notes
    .filter(n => n.folderId === folderId)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const fromIndex = notes.findIndex(n => n.id === fromId);
  const toIndex = notes.findIndex(n => n.id === toId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [moved] = notes.splice(fromIndex, 1);
  notes.splice(toIndex, 0, moved);
  notes.forEach((note, i) => { note.order = i; });
  state.sortOrder = 'manual';
  renderSortDropdown();
  scheduleSave();
}

export function setupFolderDrag(el, folderId) {
  if (!canEdit()) return;
  el.draggable = true;
  el.addEventListener('dragstart', (e) => {
    state.dragPayload = { type: 'folder', id: folderId };
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  el.addEventListener('dragend', () => {
    el.classList.remove('dragging');
    dom.folderListEl.querySelectorAll('.drag-over').forEach(n => n.classList.remove('drag-over'));
    state.dragPayload = null;
  });
  el.addEventListener('dragover', (e) => {
    if (!state.dragPayload || state.dragPayload.type !== 'folder') return;
    e.preventDefault();
    el.classList.add('drag-over');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    if (state.dragPayload?.type === 'folder' && state.dragPayload.id !== folderId) {
      reorderFolders(state.dragPayload.id, folderId);
      renderAll();
      saveSession();
    }
  });
}

export function setupNoteDrag(el, noteId) {
  if (!canDragNotes()) return;
  el.draggable = true;
  el.addEventListener('dragstart', (e) => {
    state.dragPayload = { type: 'note', id: noteId };
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  el.addEventListener('dragend', () => {
    el.classList.remove('dragging');
    dom.noteListEl.querySelectorAll('.drag-over').forEach(n => n.classList.remove('drag-over'));
    state.dragPayload = null;
  });
  el.addEventListener('dragover', (e) => {
    if (!state.dragPayload || state.dragPayload.type !== 'note') return;
    e.preventDefault();
    el.classList.add('drag-over');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    if (state.dragPayload?.type === 'note' && state.dragPayload.id !== noteId) {
      reorderNotesInFolder(state.dragPayload.id, noteId, state.activeFolderId);
      renderAll();
      saveSession();
    }
  });
}

export function renderNoteMetadata() {
  const note = getActiveNote();
  if (!note) {
    dom.noteMetadataEl.textContent = '';
    return;
  }
  dom.noteMetadataEl.textContent =
    `Created ${formatDateTime(note.createdAt)} · Edited ${formatDateTime(note.updatedAt)}`;
}

export function renderFolders() {
  const sorted = [...state.data.folders].sort((a, b) => a.order - b.order);
  if (!state.activeFolderId || (state.activeFolderId !== config.ALL_NOTES_ID && !getFolderById(state.activeFolderId))) {
    state.activeFolderId = config.ALL_NOTES_ID;
  }

  const allCount = state.data.notes.length;
  const allActive = state.activeFolderId === config.ALL_NOTES_ID ? ' active' : '';

  let html = `<li class="folder-item all-notes${allActive}" data-id="${config.ALL_NOTES_ID}">
    <span>+</span>
    <span class="folder-name">All notes</span>
    <span class="count">${allCount}</span>
  </li>`;

  html += sorted.map(folder => {
    const count = state.data.notes.filter(n => n.folderId === folder.id).length;
    const active = folder.id === state.activeFolderId ? ' active' : '';
    const folderActions = canEdit()
      ? `<span class="folder-actions">
        <button type="button" class="folder-action-btn" data-action="rename" aria-label="Rename folder">Rename</button>
        <button type="button" class="folder-action-btn danger" data-action="delete" aria-label="Delete folder">Del</button>
      </span>`
      : '';
    return `<li class="folder-item${active}" data-id="${folder.id}"${canEdit() ? ' draggable="true"' : ''}>
      <span class="drag-handle">+</span>
      <span class="folder-name">${escapeHtml(folder.name)}</span>
      <span class="count">${count}</span>
      ${folderActions}
    </li>`;
  }).join('');

  dom.folderListEl.innerHTML = html;

  dom.folderListEl.querySelectorAll('.folder-item').forEach(el => {
    const folderId = el.dataset.id;
    if (folderId !== config.ALL_NOTES_ID) {
      setupFolderDrag(el, folderId);
    }

    el.addEventListener('click', (e) => {
      if (e.target.closest('.folder-action-btn')) return;
      state.activeFolderId = folderId;
      state.activeNoteId = null;
      saveSession();
      renderAll();
      navigateToList();
    });
  });

  dom.folderListEl.querySelectorAll('.folder-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const folderItem = btn.closest('.folder-item');
      const folderId = folderItem.dataset.id;
      if (btn.dataset.action === 'rename') {
        showRenameFolderModal(folderId);
      } else if (btn.dataset.action === 'delete') {
        deleteFolder(folderId);
      }
    });
  });

  if (isAllNotesView()) {
    dom.currentFolderNameEl.textContent = 'All notes';
  } else {
    const current = sorted.find(f => f.id === state.activeFolderId);
    dom.currentFolderNameEl.textContent = current ? current.name : 'Notes';
  }
}

export function renderNoteList() {
  const query = dom.searchBoxEl.value.trim().toLowerCase();
  let notes;

  if (query) {
    notes = state.data.notes.filter(n =>
      n.title.toLowerCase().includes(query) ||
      htmlToPlainText(n.content).toLowerCase().includes(query)
    );
  } else if (isAllNotesView()) {
    notes = [...state.data.notes];
  } else {
    notes = state.data.notes.filter(n => n.folderId === state.activeFolderId);
  }

  notes = sortNotes(notes);

  if (!notes.length) {
    dom.noteListEl.innerHTML = `<li class="empty-state">${query ? 'No matching notes' : 'No notes yet — create one'}</li>`;
    return;
  }

  const showFolder = isAllNotesView() || query;

  dom.noteListEl.innerHTML = notes.map(note => {
    const active = note.id === state.activeNoteId ? ' active' : '';
    const preview = htmlToPreviewText(note.content) || 'Empty note';
    const folder = getFolderById(note.folderId);
    const folderTag = showFolder && folder
      ? `<div class="note-item-folder">${escapeHtml(folder.name)}</div>`
      : '';
    return `<li class="note-item${active}" data-id="${note.id}">
      ${folderTag}
      <div class="note-item-title">${escapeHtml(note.title || 'Untitled')}</div>
      <div class="note-item-preview">${escapeHtml(preview)}</div>
      <div class="note-item-date">${formatDate(note.updatedAt)}</div>
    </li>`;
  }).join('');

  dom.noteListEl.querySelectorAll('.note-item').forEach(el => {
    const noteId = el.dataset.id;
    setupNoteDrag(el, noteId);

    el.addEventListener('click', () => {
      state.activeNoteId = noteId;
      saveSession();
      renderEditor();
      renderNoteList();
      navigateToEditor();
    });
  });
}

export function renderMoveFolderSelect() {
  const note = getActiveNote();
  dom.deleteNoteBtnEl.disabled = !note;
  renderFolderDropdown();
  renderAddDropdown();
  renderEditorMoreMenu();
}

export function renderEditor() {
  commitUndoGroup();
  closeInNoteSearch();

  const note = getActiveNote();

  if (!note) {
    dom.editorBodyEl.classList.add('hidden');
    dom.editorPlaceholderEl.classList.remove('hidden');
    dom.titleInputEl.value = '';
    setEditorContent('');
    renderMoveFolderSelect();
    renderNoteMetadata();
    return;
  }

  dom.editorBodyEl.classList.remove('hidden');
  dom.editorPlaceholderEl.classList.add('hidden');
  dom.titleInputEl.value = note.title;
  setEditorContent(note.content);
  renderMoveFolderSelect();
  renderNoteMetadata();
  focusEditorBody();
}

export function renderAll() {
  renderFolders();
  renderNoteList();
  renderEditor();
  applyEditMode();
}

export function createNote() {
  if (!canEdit()) return;
  let targetFolderId = isAllNotesView() ? getDefaultFolderId() : state.activeFolderId;

  if (!targetFolderId && state.data.folders.length) {
    targetFolderId = state.data.folders[0].id;
  }
  if (!targetFolderId) {
    state.data.folders.push({ id: uid(), name: 'General', order: 0 });
    targetFolderId = state.data.folders[0].id;
  }

  const folderNotes = state.data.notes.filter(n => n.folderId === targetFolderId);
  const maxNoteOrder = folderNotes.reduce((m, n) => Math.max(m, n.order ?? 0), -1);

  const now = new Date().toISOString();
  const note = {
    id: uid(),
    title: '',
    content: '',
    folderId: targetFolderId,
    order: maxNoteOrder + 1,
    createdAt: now,
    updatedAt: now
  };

  state.data.notes.unshift(note);
  state.activeNoteId = note.id;
  saveSession();
  renderAll();
  scheduleSave();
  navigateToEditor();
  focusEditorBody();
}

export async function deleteActiveNote() {
  if (!canEdit()) return;
  const note = getActiveNote();
  if (!note) return;

  const title = note.title.trim() || 'Untitled';
  const confirmed = await showConfirm({
    title: 'Delete note?',
    message: `"${title}" will be removed from your notes.`
  });
  if (!confirmed) return;

  const deletedNote = { ...note };
  const deletedIndex = state.data.notes.findIndex(n => n.id === note.id);

  state.data.notes = state.data.notes.filter(n => n.id !== note.id);
  clearNoteHistory(note.id);
  state.activeNoteId = null;
  closeInNoteSearch();
  saveSession();
  renderAll();
  scheduleSave();
  if (isMobileLayout()) navigateToList();

  showUndoToast('Note deleted', () => {
    const insertAt = Math.min(deletedIndex, state.data.notes.length);
    state.data.notes.splice(insertAt, 0, deletedNote);
    state.activeNoteId = deletedNote.id;
    saveSession();
    renderAll();
    scheduleSave();
    navigateToEditor();
  });
}

export function updateActiveNote(field, value) {
  if (!canEdit()) return;
  const note = getActiveNote();
  if (!note || state.isApplyingHistory) return;
  beginUndoGroup(note);
  note[field] = value;
  note.updatedAt = new Date().toISOString();
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
}

export function showFolderModal() {
  if (!canEdit()) return;
  state.folderModalMode = 'create';
  state.editingFolderId = null;
  dom.folderModalTitleEl.textContent = 'New folder';
  dom.folderNameInputEl.value = '';
  dom.folderModalEl.classList.remove('hidden');
  dom.folderNameInputEl.focus();
}

export function showRenameFolderModal(folderId) {
  if (!canEdit()) return;
  const folder = getFolderById(folderId);
  if (!folder) return;

  state.folderModalMode = 'rename';
  state.editingFolderId = folderId;
  dom.folderModalTitleEl.textContent = 'Rename folder';
  dom.folderNameInputEl.value = folder.name;
  dom.folderModalEl.classList.remove('hidden');
  dom.folderNameInputEl.focus();
  dom.folderNameInputEl.select();
}

export function hideFolderModal() {
  dom.folderModalEl.classList.add('hidden');
  state.folderModalMode = 'create';
  state.editingFolderId = null;
}

export function saveFolderModal() {
  if (!canEdit()) return;
  const name = dom.folderNameInputEl.value.trim();
  if (!name) return;

  if (state.folderModalMode === 'rename') {
    const folder = getFolderById(state.editingFolderId);
    if (!folder) return;
    folder.name = name;
  } else {
    const maxOrder = state.data.folders.reduce((m, f) => Math.max(m, f.order), -1);
    const folder = { id: uid(), name, order: maxOrder + 1 };
    state.data.folders.push(folder);
    state.activeFolderId = folder.id;
    saveSession();
  }

  hideFolderModal();
  renderAll();
  scheduleSave();
}

export function deleteFolder(folderId) {
  if (!canEdit()) return;
  if (state.data.folders.length <= 1) {
    alert('You need at least one folder.');
    return;
  }

  const folder = getFolderById(folderId);
  if (!folder) return;

  const noteCount = state.data.notes.filter(n => n.folderId === folderId).length;
  const fallbackId = getDefaultFolderId() === folderId
    ? state.data.folders.find(f => f.id !== folderId)?.id
    : getDefaultFolderId();

  if (!fallbackId) return;

  const message = noteCount
    ? `Delete "${folder.name}"? Its ${noteCount} note${noteCount === 1 ? '' : 's'} will move to "${getFolderById(fallbackId).name}".`
    : `Delete folder "${folder.name}"?`;

  if (!confirm(message)) return;

  state.data.notes.forEach(note => {
    if (note.folderId === folderId) {
      note.folderId = fallbackId;
    }
  });

  state.data.folders = state.data.folders.filter(f => f.id !== folderId);

  if (state.activeFolderId === folderId) {
    state.activeFolderId = config.ALL_NOTES_ID;
    state.activeNoteId = null;
    saveSession();
  }

  renderAll();
  scheduleSave();
}

export function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'notes.json';
  a.click();
  URL.revokeObjectURL(url);
  markJsonBackedUp();
  setSaveStatus('saved', 'Exported — JSON backup saved');
}

export function importJson(file) {
  if (!canEdit()) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported.folders || !imported.notes) {
        throw new Error('Invalid notes format');
      }
      state.data = imported;
      state.activeNoteId = null;
      state.activeFolderId = config.ALL_NOTES_ID;
      renderAll();
      await persistData(true);
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
  };
  reader.readAsText(file);
}
