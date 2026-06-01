import * as config from './config.js';
import * as dom from './dom.js';
import { state } from './state.js';
import { loadSession, loadData, setupUnloadGuards, saveSession, forceSave, scheduleSave, refreshSaveStatus, flushPendingCloudSync } from './storage.js';
import { ensureDataOrders } from './data.js';
import { isModalOpen } from './utils.js';
import { renderAll, renderNoteList, createNote, deleteActiveNote, showFolderModal, hideFolderModal, saveFolderModal, exportJson, importJson, updateActiveNote } from './ui.js';
import {
  applyTextFormat, saveEditorSelection, initImageEditorEvents, syncContentFromEditor,
  undoNote, redoNote, insertEmbedFromModal, hideEmbedModal, initFormatToolbar
} from './editor.js';
import { getActiveNote } from './data.js';
import { initMobileNav } from './mobile.js';
import {
  initFolderDropdown, initSortDropdown, setFolderDropdownHandler,
  setSortDropdownHandler, renderSortDropdown
} from './custom-dropdown.js';
import { initConfirmModal } from './confirm.js';
import { initInNoteSearch, openInNoteSearch } from './in-note-search.js';
import { initAddDropdown } from './add-dropdown.js';
import { initAuth, applyEditMode, canEdit } from './auth.js';

document.getElementById('newNoteBtn').addEventListener('click', createNote);
document.getElementById('deleteNoteBtn').addEventListener('click', deleteActiveNote);
document.getElementById('addFolderBtn').addEventListener('click', showFolderModal);
document.getElementById('folderModalCancel').addEventListener('click', hideFolderModal);
document.getElementById('folderModalSave').addEventListener('click', saveFolderModal);
document.getElementById('exportBtn').addEventListener('click', exportJson);
document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) importJson(file);
  e.target.value = '';
});

dom.folderNameInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') saveFolderModal();
  if (e.key === 'Escape') hideFolderModal();
});

dom.formatToolbarEl.addEventListener('mousedown', (e) => {
  if (e.target.closest('[data-format]')) {
    saveEditorSelection();
    e.preventDefault();
  }
});

dom.formatToolbarEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-format]');
  if (!btn) return;
  e.preventDefault();
  applyTextFormat(btn.dataset.format);
});

dom.titleInputEl.addEventListener('input', () => updateActiveNote('title', dom.titleInputEl.value));
dom.contentInputEl.addEventListener('input', syncContentFromEditor);

document.addEventListener('keydown', (e) => {
  const mod = e.metaKey || e.ctrlKey;
  if (!mod) return;

  const modalOpen = isModalOpen();

  if (e.key.toLowerCase() === 'z' && !modalOpen && getActiveNote()) {
    const inEditor = document.activeElement === dom.titleInputEl ||
      document.activeElement === dom.contentInputEl;
    if (inEditor) {
      e.preventDefault();
      if (e.shiftKey) redoNote();
      else undoNote();
    }
    return;
  }

  if (modalOpen) return;

  if (e.key.toLowerCase() === 'n') {
    e.preventDefault();
    createNote();
  } else if (e.key.toLowerCase() === 'f') {
    e.preventDefault();
    const noteOpen = getActiveNote() && !dom.editorBodyEl.classList.contains('hidden');
    if (noteOpen) {
      openInNoteSearch();
    } else {
      dom.searchBoxEl.focus();
      dom.searchBoxEl.select();
    }
  } else if (e.key.toLowerCase() === 's') {
    e.preventDefault();
    forceSave();
  } else if (e.key === 'Backspace' && getActiveNote()) {
    const inEditor = document.activeElement === dom.titleInputEl ||
      document.activeElement === dom.contentInputEl;
    if (!inEditor) {
      e.preventDefault();
      deleteActiveNote();
    }
  }
});

setFolderDropdownHandler(() => renderAll());
setSortDropdownHandler(() => {
  saveSession();
  renderNoteList();
});

dom.searchBoxEl.addEventListener('input', renderNoteList);

dom.folderModalEl.addEventListener('click', (e) => {
  if (e.target === dom.folderModalEl) hideFolderModal();
});

dom.embedModalEl.addEventListener('click', (e) => {
  if (e.target === dom.embedModalEl) hideEmbedModal();
});

document.getElementById('embedModalCancel').addEventListener('click', hideEmbedModal);
document.getElementById('embedModalInsert').addEventListener('click', insertEmbedFromModal);

dom.embedCodeInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) insertEmbedFromModal();
  if (e.key === 'Escape') hideEmbedModal();
});

initImageEditorEvents();
initFormatToolbar();
setupUnloadGuards();
initMobileNav();
initFolderDropdown();
initSortDropdown();
initAddDropdown();
initConfirmModal();
initInNoteSearch();

(async function init() {
  try {
    await initAuth(async (session) => {
      if (session) {
        await loadData();
        if (!state.data.folders.length) {
          state.data.folders.push({ id: 'general', name: 'General', order: 0 });
        }
        ensureDataOrders();
        renderAll();
        applyEditMode();
        if (canEdit()) {
          await flushPendingCloudSync(true);
        }
        refreshSaveStatus();
      }
    });
    await loadData();
    if (!state.data.folders.length) {
      state.data.folders.push({ id: 'general', name: 'General', order: 0 });
    }
    ensureDataOrders();
    loadSession();
    if (!state.activeFolderId) state.activeFolderId = config.ALL_NOTES_ID;
    renderSortDropdown();
    renderAll();
    applyEditMode();
    if (canEdit()) {
      await flushPendingCloudSync(false);
    }
    refreshSaveStatus();
  } finally {
    dom.loadingOverlayEl.classList.add('hidden');
  }
})();
