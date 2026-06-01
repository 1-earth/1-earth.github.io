import * as dom from './dom.js';
import { getActiveNote } from './data.js';
import { createActionDropdown } from './custom-dropdown.js';
import { applyTextFormat, saveEditorSelection } from './editor.js';
import { canEdit } from './auth.js';

const ADD_OPTIONS = [
  { value: 'image', label: '◻︎ Image' },
  { value: 'embed', label: '⧉ Embed' }
];

const addDropdown = createActionDropdown({
  rootEl: dom.addDropdownEl,
  triggerEl: dom.addDropdownTriggerEl,
  menuEl: dom.addDropdownMenuEl,
  optionClass: 'add-dropdown-option',
  isTriggerDisabled: () => !getActiveNote() || !canEdit(),
  getOptions: () => ADD_OPTIONS,
  onTriggerMousedown: saveEditorSelection,
  onSelect: (value) => {
    if (value === 'embed') saveEditorSelection();
    applyTextFormat(value);
  }
});

export function initAddDropdown() {
  addDropdown.init();
}

export function renderAddDropdown() {
  addDropdown.render();
}
