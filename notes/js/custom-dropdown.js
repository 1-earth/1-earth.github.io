import * as dom from './dom.js';
import { state } from './state.js';
import { getActiveNote } from './data.js';
import { escapeHtml } from './utils.js';
import { scheduleSave } from './storage.js';
import { canEdit } from './auth.js';

const SORT_OPTIONS = [
  { value: 'modified', label: 'Modified' },
  { value: 'created', label: 'Created' },
  { value: 'title', label: 'Title A–Z' },
  { value: 'manual', label: 'Manual order' }
];

export function createCustomDropdown({
  rootEl,
  triggerEl,
  menuEl,
  marqueeWrapEl,
  labelEl,
  labelCopyEl,
  optionClass,
  getOptions,
  getLabel,
  isTriggerDisabled,
  onSelect,
  shouldCloseWhenOpen,
  emptyLabel = '—',
  skipMarqueeWhenEmpty = false
}) {
  let onChange = () => {};
  let focusedOptionIndex = -1;

  function closeDropdown() {
    rootEl.classList.remove('is-open');
    triggerEl.classList.remove('is-paused');
    triggerEl.setAttribute('aria-expanded', 'false');
    menuEl.classList.add('hidden');
    focusedOptionIndex = -1;
  }

  function openDropdown() {
    if (triggerEl.disabled) return;
    rootEl.classList.add('is-open');
    triggerEl.classList.add('is-paused');
    triggerEl.setAttribute('aria-expanded', 'true');
    menuEl.classList.remove('hidden');
    focusSelectedOption();
  }

  function toggleDropdown() {
    if (rootEl.classList.contains('is-open')) closeDropdown();
    else openDropdown();
  }

  function getMenuOptions() {
    return [...menuEl.querySelectorAll(`.${optionClass}`)];
  }

  function focusSelectedOption() {
    const options = getMenuOptions();
    const selectedIndex = options.findIndex(el => el.getAttribute('aria-selected') === 'true');
    focusedOptionIndex = selectedIndex >= 0 ? selectedIndex : 0;
    options[focusedOptionIndex]?.focus();
  }

  function updateMarquee(labelText) {
    const text = labelText || emptyLabel;
    labelEl.textContent = text;
    labelCopyEl.textContent = text;
    triggerEl.title = text === emptyLabel && skipMarqueeWhenEmpty ? '' : text;

    triggerEl.classList.remove('is-overflowing');

    requestAnimationFrame(() => {
      const wrapWidth = marqueeWrapEl.clientWidth;
      const textWidth = labelEl.scrollWidth;
      const skipMarquee = skipMarqueeWhenEmpty && text === emptyLabel;
      if (textWidth > wrapWidth && !skipMarquee) {
        triggerEl.classList.add('is-overflowing');
        const duration = Math.max(5, textWidth / 28);
        triggerEl.style.setProperty('--marquee-duration', `${duration}s`);
      } else {
        triggerEl.style.removeProperty('--marquee-duration');
      }
    });
  }

  function applySelection(value) {
    onSelect(value, { closeDropdown, render, onChange });
  }

  function render() {
    if (typeof isTriggerDisabled === 'function') {
      triggerEl.disabled = isTriggerDisabled();
    }

    const options = getOptions();
    menuEl.innerHTML = options.map(o => {
      const selected = !!o.selected;
      return `<li
        class="${optionClass}${selected ? ' is-selected' : ''}"
        role="option"
        tabindex="-1"
        aria-selected="${selected ? 'true' : 'false'}"
        data-value="${escapeHtml(o.value)}"
        title="${escapeHtml(o.label)}"
      >${escapeHtml(o.label)}</li>`;
    }).join('');

    updateMarquee(getLabel());

    if (!rootEl.classList.contains('is-open')) return;
    if (typeof shouldCloseWhenOpen === 'function' && shouldCloseWhenOpen()) {
      closeDropdown();
    }
  }

  function handleMenuKeydown(e) {
    const options = getMenuOptions();
    if (!options.length) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdown();
      triggerEl.focus();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedOptionIndex = Math.min(focusedOptionIndex + 1, options.length - 1);
      options[focusedOptionIndex]?.focus();
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedOptionIndex = Math.max(focusedOptionIndex - 1, 0);
      options[focusedOptionIndex]?.focus();
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const option = options[focusedOptionIndex];
      if (option) applySelection(option.dataset.value);
    }
  }

  function init() {
    triggerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    triggerEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDropdown();
      }
      if (e.key === 'Escape') closeDropdown();
    });

    menuEl.addEventListener('click', (e) => {
      const option = e.target.closest(`.${optionClass}`);
      if (!option) return;
      applySelection(option.dataset.value);
    });

    menuEl.addEventListener('keydown', handleMenuKeydown);

    triggerEl.addEventListener('mouseenter', () => {
      if (triggerEl.classList.contains('is-overflowing')) {
        triggerEl.classList.add('is-paused');
      }
    });

    triggerEl.addEventListener('mouseleave', () => {
      triggerEl.classList.remove('is-paused');
    });

    triggerEl.addEventListener('touchstart', () => {
      if (triggerEl.classList.contains('is-overflowing')) {
        triggerEl.classList.add('is-paused');
      }
    }, { passive: true });

    triggerEl.addEventListener('touchend', () => {
      if (!rootEl.classList.contains('is-open')) {
        triggerEl.classList.remove('is-paused');
      }
    });

    document.addEventListener('click', (e) => {
      if (!rootEl.contains(e.target)) closeDropdown();
    });

    window.addEventListener('resize', () => {
      updateMarquee(getLabel());
    });
  }

  function setHandler(fn) {
    onChange = fn;
  }

  return { init, render, setHandler };
}

export function createActionDropdown({
  rootEl,
  triggerEl,
  menuEl,
  optionClass,
  getOptions,
  isTriggerDisabled,
  onSelect,
  onTriggerMousedown
}) {
  let focusedOptionIndex = -1;

  function closeDropdown() {
    rootEl.classList.remove('is-open');
    triggerEl.setAttribute('aria-expanded', 'false');
    menuEl.classList.add('hidden');
    focusedOptionIndex = -1;
  }

  function openDropdown() {
    if (triggerEl.disabled) return;
    rootEl.classList.add('is-open');
    triggerEl.setAttribute('aria-expanded', 'true');
    menuEl.classList.remove('hidden');
    const options = getMenuOptions();
    focusedOptionIndex = 0;
    options[focusedOptionIndex]?.focus();
  }

  function toggleDropdown() {
    if (rootEl.classList.contains('is-open')) closeDropdown();
    else openDropdown();
  }

  function getMenuOptions() {
    return [...menuEl.querySelectorAll(`.${optionClass}`)];
  }

  function applySelection(value) {
    closeDropdown();
    onSelect(value);
  }

  function render() {
    if (typeof isTriggerDisabled === 'function') {
      triggerEl.disabled = isTriggerDisabled();
    }

    menuEl.innerHTML = getOptions().map(o => `<li
      class="${optionClass}"
      role="menuitem"
      tabindex="-1"
      data-value="${escapeHtml(o.value)}"
      title="${escapeHtml(o.label)}"
    >${escapeHtml(o.label)}</li>`).join('');
  }

  function handleMenuKeydown(e) {
    const options = getMenuOptions();
    if (!options.length) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdown();
      triggerEl.focus();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedOptionIndex = Math.min(focusedOptionIndex + 1, options.length - 1);
      options[focusedOptionIndex]?.focus();
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedOptionIndex = Math.max(focusedOptionIndex - 1, 0);
      options[focusedOptionIndex]?.focus();
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const option = options[focusedOptionIndex];
      if (option) applySelection(option.dataset.value);
    }
  }

  function init() {
    render();

    triggerEl.addEventListener('mousedown', (e) => {
      if (typeof onTriggerMousedown === 'function') {
        e.preventDefault();
        onTriggerMousedown();
      }
    });

    triggerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    triggerEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDropdown();
      }
      if (e.key === 'Escape') closeDropdown();
    });

    menuEl.addEventListener('click', (e) => {
      const option = e.target.closest(`.${optionClass}`);
      if (!option) return;
      applySelection(option.dataset.value);
    });

    menuEl.addEventListener('keydown', handleMenuKeydown);

    document.addEventListener('click', (e) => {
      if (!rootEl.contains(e.target)) closeDropdown();
    });
  }

  return { init, render };
}

function getSortedFolders() {
  return [...state.data.folders].sort((a, b) => a.order - b.order);
}

function getSortLabel(value) {
  return SORT_OPTIONS.find(o => o.value === value)?.label || SORT_OPTIONS[0].label;
}

const folderDropdown = createCustomDropdown({
  rootEl: dom.moveFolderDropdownEl,
  triggerEl: dom.moveFolderTriggerEl,
  menuEl: dom.moveFolderMenuEl,
  marqueeWrapEl: dom.moveFolderMarqueeWrapEl,
  labelEl: dom.moveFolderLabelEl,
  labelCopyEl: dom.moveFolderLabelCopyEl,
  optionClass: 'folder-dropdown-option',
  emptyLabel: '—',
  skipMarqueeWhenEmpty: true,
  isTriggerDisabled: () => !getActiveNote() || !canEdit(),
  getOptions: () => {
    const note = getActiveNote();
    const sorted = getSortedFolders();
    return sorted.map(f => ({
      value: f.id,
      label: f.name,
      selected: !!(note && note.folderId === f.id)
    }));
  },
  getLabel: () => {
    const note = getActiveNote();
    if (!note) return '—';
    const folder = getSortedFolders().find(f => f.id === note.folderId);
    return folder ? folder.name : '—';
  },
  shouldCloseWhenOpen: () => {
    const note = getActiveNote();
    const sorted = getSortedFolders();
    return !note || !sorted.some(f => f.id === note.folderId);
  },
  onSelect: (folderId, { closeDropdown, onChange }) => {
    const note = getActiveNote();
    if (!note || note.folderId === folderId) {
      closeDropdown();
      return;
    }
    note.folderId = folderId;
    note.updatedAt = new Date().toISOString();
    closeDropdown();
    onChange();
    scheduleSave();
  }
});

const sortDropdown = createCustomDropdown({
  rootEl: dom.sortDropdownEl,
  triggerEl: dom.sortTriggerEl,
  menuEl: dom.sortMenuEl,
  marqueeWrapEl: dom.sortMarqueeWrapEl,
  labelEl: dom.sortLabelEl,
  labelCopyEl: dom.sortLabelCopyEl,
  optionClass: 'sort-dropdown-option',
  getOptions: () => SORT_OPTIONS.map(o => ({
    value: o.value,
    label: o.label,
    selected: state.sortOrder === o.value
  })),
  getLabel: () => getSortLabel(state.sortOrder),
  onSelect: (value, { closeDropdown, render, onChange }) => {
    if (state.sortOrder === value) {
      closeDropdown();
      return;
    }
    state.sortOrder = value;
    closeDropdown();
    render();
    onChange();
  }
});

export function initFolderDropdown() {
  folderDropdown.init();
}

export function initSortDropdown() {
  sortDropdown.render();
  sortDropdown.init();
}

export function renderFolderDropdown() {
  folderDropdown.render();
}

export function renderSortDropdown() {
  sortDropdown.render();
}

export function setFolderDropdownHandler(fn) {
  folderDropdown.setHandler(fn);
}

export function setSortDropdownHandler(fn) {
  sortDropdown.setHandler(fn);
}
