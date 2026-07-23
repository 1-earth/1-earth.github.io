import * as dom from './dom.js';
import { getActiveNote } from './data.js';
import { createActionDropdown } from './custom-dropdown.js';
import { canEdit } from './auth.js';

const MORE_OPTIONS = [
  { value: 'delete', label: 'Delete note' }
];

let onDeleteNote = () => {};

const editorMoreMenu = createActionDropdown({
  rootEl: dom.editorMoreMenuEl,
  triggerEl: dom.editorMoreTriggerEl,
  menuEl: dom.editorMoreMenuListEl,
  optionClass: 'editor-more-option',
  isTriggerDisabled: () => !getActiveNote() || !canEdit(),
  getOptions: () => MORE_OPTIONS,
  onSelect: (value) => {
    if (value === 'delete') onDeleteNote();
  }
});

export function initEditorMoreMenu({ onDeleteNote: handler } = {}) {
  if (handler) onDeleteNote = handler;
  editorMoreMenu.init();
}

export function renderEditorMoreMenu() {
  editorMoreMenu.render();
}
