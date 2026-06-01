import * as config from './config.js';
import * as dom from './dom.js';
import { state } from './state.js';
import { getActiveNote, maybeAutoTitle } from './data.js';
import { plainTextToHtml, stripFormattingFragment } from './html.js';
import { scheduleSave } from './storage.js';
import { isModalOpen } from './utils.js';
import { renderNoteList, renderNoteMetadata } from './ui.js';

export function getUndoStack(noteId) {
  if (!state.undoStacks[noteId]) state.undoStacks[noteId] = [];
  return state.undoStacks[noteId];
}

export function getRedoStack(noteId) {
  if (!state.redoStacks[noteId]) state.redoStacks[noteId] = [];
  return state.redoStacks[noteId];
}

export function clearNoteHistory(noteId) {
  delete state.undoStacks[noteId];
  delete state.redoStacks[noteId];
}

export function snapshotNote(note) {
  return { title: note.title, content: note.content };
}

export function pushUndoState(noteId, snapshot) {
  const stack = getUndoStack(noteId);
  const last = stack[stack.length - 1];
  if (last && last.title === snapshot.title && last.content === snapshot.content) return;
  stack.push(snapshot);
  if (stack.length > config.UNDO_LIMIT) stack.shift();
  state.redoStacks[noteId] = [];
}

export function commitUndoGroup() {
  clearTimeout(state.undoGroupTimer);
  state.undoGroupTimer = null;
  if (state.undoGroupNoteId && state.undoGroupSnapshot) {
    pushUndoState(state.undoGroupNoteId, state.undoGroupSnapshot);
    state.undoGroupSnapshot = null;
    state.undoGroupNoteId = null;
  }
}

export function beginUndoGroup(note) {
  if (state.isApplyingHistory || !note) return;

  if (state.undoGroupNoteId !== note.id) {
    commitUndoGroup();
    state.undoGroupNoteId = note.id;
    state.undoGroupSnapshot = snapshotNote(note);
  }

  clearTimeout(state.undoGroupTimer);
  state.undoGroupTimer = setTimeout(commitUndoGroup, config.UNDO_GROUP_MS);
}

export function applyHistorySnapshot(note, snapshot) {
  state.isApplyingHistory = true;
  note.title = snapshot.title;
  note.content = snapshot.content;
  note.updatedAt = new Date().toISOString();
  dom.titleInputEl.value = snapshot.title;
  setEditorContent(snapshot.content);
  state.isApplyingHistory = false;
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
}

export function undoNote() {
  if (isModalOpen()) return;

  const note = getActiveNote();
  if (!note) return;

  commitUndoGroup();

  const stack = getUndoStack(note.id);
  if (!stack.length) return;

  getRedoStack(note.id).push(snapshotNote(note));
  applyHistorySnapshot(note, stack.pop());
}

export function redoNote() {
  if (isModalOpen()) return;

  const note = getActiveNote();
  if (!note) return;

  const stack = getRedoStack(note.id);
  if (!stack.length) return;

  getUndoStack(note.id).push(snapshotNote(note));
  applyHistorySnapshot(note, stack.pop());
}

export function getIndentLevel(el) {
  return Math.max(0, parseInt(el.dataset.indent || '0', 10) || 0);
}

export function setIndentLevel(el, level) {
  level = Math.max(0, Math.min(config.MAX_INDENT_LEVEL, level));
  if (level === 0) {
    delete el.dataset.indent;
    el.style.paddingLeft = '';
  } else {
    el.dataset.indent = String(level);
    el.style.paddingLeft = '';
  }
}

export function getLineBlock(node) {
  let el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  while (el && el !== dom.contentInputEl) {
    if (el.tagName === 'LI') return el;
    if (el.classList?.contains('task-line')) return el;
    const tag = el.tagName;
    if (['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'UL', 'OL'].includes(tag)) {
      if (el.parentElement === dom.contentInputEl) return el;
      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BLOCKQUOTE'].includes(tag)) return el;
    }
    el = el.parentElement;
  }
  return null;
}

export function isTopLevelLineBlock(el) {
  if (!el || !dom.contentInputEl.contains(el)) return false;
  if (el.tagName === 'LI') return true;
  if (el.classList?.contains('task-line')) return true;
  if (el.parentElement === dom.contentInputEl) {
    return ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'UL', 'OL'].includes(el.tagName);
  }
  return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BLOCKQUOTE'].includes(el.tagName);
}

export function getBlocksInSelection() {
  const sel = window.getSelection();
  if (!sel.rangeCount) return [];

  const range = sel.getRangeAt(0);
  const blocks = [];
  const seen = new Set();

  function addBlock(node) {
    const block = getLineBlock(node);
    if (block && isTopLevelLineBlock(block) && !seen.has(block)) {
      seen.add(block);
      blocks.push(block);
    }
  }

  addBlock(range.startContainer);
  if (!sel.isCollapsed) addBlock(range.endContainer);

  if (sel.isCollapsed) return blocks;

  dom.contentInputEl.querySelectorAll('li, div.task-line, div, p, h1, h2, h3, h4, h5, h6, blockquote, ul, ol').forEach(el => {
    if (!isTopLevelLineBlock(el) || seen.has(el)) return;
    const blockRange = document.createRange();
    try {
      blockRange.selectNodeContents(el);
      if (
        range.compareBoundaryPoints(Range.END_TO_START, blockRange) < 0 &&
        range.compareBoundaryPoints(Range.START_TO_END, blockRange) > 0
      ) {
        seen.add(el);
        blocks.push(el);
      }
    } catch (_) {}
  });

  return blocks.sort((a, b) => {
    const pos = a.compareDocumentPosition(b);
    if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  });
}

export function indentListItem(li) {
  const list = li.parentElement;
  if (!list || !['UL', 'OL'].includes(list.tagName)) return false;

  const prev = li.previousElementSibling;
  if (prev) {
    let subList = prev.querySelector(':scope > ul, :scope > ol');
    if (!subList) {
      subList = document.createElement(list.tagName);
      prev.appendChild(subList);
    }
    subList.appendChild(li);
    return true;
  }

  if (getIndentLevel(li) < config.MAX_INDENT_LEVEL) {
    setIndentLevel(li, getIndentLevel(li) + 1);
    return true;
  }
  return false;
}

export function outdentListItem(li) {
  if (getIndentLevel(li) > 0) {
    setIndentLevel(li, getIndentLevel(li) - 1);
    return true;
  }

  const list = li.parentElement;
  if (!list || !['UL', 'OL'].includes(list.tagName)) return false;

  const parentLi = list.parentElement;
  if (parentLi?.tagName !== 'LI') return false;

  const grandList = parentLi.parentElement;
  if (!grandList) return false;

  grandList.insertBefore(li, parentLi.nextSibling);
  if (!list.children.length) list.remove();
  return true;
}

export function indentBlock(block) {
  if (getIndentLevel(block) >= config.MAX_INDENT_LEVEL) return false;
  setIndentLevel(block, getIndentLevel(block) + 1);
  return true;
}

export function outdentBlock(block) {
  if (getIndentLevel(block) <= 0) return false;
  setIndentLevel(block, getIndentLevel(block) - 1);
  return true;
}

export function handleListAutoFormatOnSpace(e) {
  if (e.key !== ' ' || e.defaultPrevented || state.isApplyingHistory) return false;
  if (document.activeElement !== dom.contentInputEl) return false;

  const sel = window.getSelection();
  if (!sel?.rangeCount || !sel.isCollapsed) return false;
  if (!dom.contentInputEl.contains(sel.anchorNode)) return false;

  const block = getLineBlock(sel.anchorNode);
  if (!block || block.tagName === 'LI' || block.classList?.contains('task-line')) return false;
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL'].includes(block.tagName)) return false;

  const prefixRange = document.createRange();
  try {
    prefixRange.setStart(block, 0);
    prefixRange.setEnd(sel.anchorNode, sel.anchorOffset);
  } catch {
    return false;
  }

  const prefix = prefixRange.toString().replace(/\u00a0/g, ' ');
  let listCommand = null;
  if (prefix === '-') {
    listCommand = 'insertUnorderedList';
  } else if (/^\d+\.$/.test(prefix)) {
    listCommand = 'insertOrderedList';
  } else {
    return false;
  }

  e.preventDefault();

  const note = getActiveNote();
  if (!note) return true;

  prefixRange.deleteContents();
  dom.contentInputEl.focus();
  document.execCommand(listCommand, false, null);
  document.execCommand('insertText', false, ' ');
  syncContentFromEditor();
  updateFormatToolbar();
  return true;
}

export function handleEditorTab(e) {
  if (e.key !== 'Tab' || document.activeElement !== dom.contentInputEl || isModalOpen()) return;

  e.preventDefault();

  const note = getActiveNote();
  if (!note) return;

  commitUndoGroup();
  pushUndoState(note.id, snapshotNote(note));

  const outdent = e.shiftKey;
  const blocks = getBlocksInSelection();

  if (!blocks.length) {
    document.execCommand('insertText', false, '\t');
    syncContentFromEditor();
    return;
  }

  blocks.forEach(block => {
    if (block.tagName === 'LI') {
      if (outdent) outdentListItem(block);
      else indentListItem(block);
    } else {
      if (outdent) outdentBlock(block);
      else indentBlock(block);
    }
  });

  syncContentFromEditor();
}

export function rangeIntersectsNode(range, node) {
  const nodeRange = document.createRange();
  try {
    nodeRange.selectNodeContents(node);
  } catch {
    return false;
  }
  return (
    range.compareBoundaryPoints(Range.END_TO_START, nodeRange) < 0 &&
    range.compareBoundaryPoints(Range.START_TO_END, nodeRange) > 0
  );
}

export function sortBlocksDocumentOrder(blocks) {
  return blocks.sort((a, b) => {
    const pos = a.compareDocumentPosition(b);
    if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  });
}

export function copyBlockIndent(from, to) {
  if (from.dataset.indent) to.dataset.indent = from.dataset.indent;
}

export function ensureTaskSpanContent(span) {
  const hasMedia = span.querySelector('img, iframe, .note-image-wrap, .note-embed-wrap');
  const text = (span.textContent || '').replace(/\u00a0/g, '').trim();
  if (!text && !hasMedia) span.innerHTML = '&nbsp;';
}

export function createTaskToggle(checked = false) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'task-toggle';
  btn.setAttribute('contenteditable', 'false');
  btn.setAttribute('aria-checked', checked ? 'true' : 'false');
  btn.setAttribute('aria-label', 'Mark task complete');
  btn.setAttribute('tabindex', '-1');
  return btn;
}

export function migrateLegacyTasks() {
  dom.contentInputEl.querySelectorAll('.task-line').forEach(line => {
    const oldCheck = line.querySelector('input[type="checkbox"]');
    let checked = line.classList.contains('is-done');

    if (oldCheck) {
      checked = oldCheck.checked || checked;
      oldCheck.remove();
    }

    let toggle = line.querySelector('.task-toggle');
    if (!toggle) {
      toggle = createTaskToggle(checked);
      line.insertBefore(toggle, line.firstChild);
    } else {
      toggle.setAttribute('aria-checked', checked ? 'true' : 'false');
    }

    let textEl = line.querySelector('.task-text');
    if (!textEl) {
      textEl = line.querySelector('span:not(.task-toggle)');
      if (textEl) textEl.classList.add('task-text');
    }

    line.classList.toggle('is-done', checked);
  });
}

export function buildEmptyTaskLine() {
  const taskLine = document.createElement('div');
  taskLine.className = 'task-line';
  taskLine.appendChild(createTaskToggle(false));
  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerHTML = '&nbsp;';
  taskLine.appendChild(span);
  return taskLine;
}

export function convertBlockToTaskLine(block) {
  if (block.classList?.contains('task-line')) return block;

  const parentList = block.tagName === 'LI' ? block.parentElement : null;
  const taskLine = document.createElement('div');
  taskLine.className = 'task-line';
  copyBlockIndent(block, taskLine);

  taskLine.appendChild(createTaskToggle(false));

  const span = document.createElement('span');
  span.className = 'task-text';
  const nestedLists = [];

  Array.from(block.childNodes).forEach(child => {
    if (child.nodeType === Node.ELEMENT_NODE && (child.tagName === 'UL' || child.tagName === 'OL')) {
      nestedLists.push(child);
    } else {
      span.appendChild(child);
    }
  });

  ensureTaskSpanContent(span);
  taskLine.appendChild(span);
  block.replaceWith(taskLine);

  nestedLists.forEach(list => taskLine.after(list));

  if (parentList && ['UL', 'OL'].includes(parentList.tagName) && !parentList.children.length) {
    parentList.remove();
  }

  return taskLine;
}

export function convertTaskLineToBlock(taskLine) {
  const span = taskLine.querySelector('.task-text') || taskLine.querySelector('span');
  const div = document.createElement('div');
  copyBlockIndent(taskLine, div);

  if (span) {
    Array.from(span.childNodes).forEach(child => div.appendChild(child));
  }

  if (!(div.textContent || '').replace(/\u00a0/g, '').trim() && !div.querySelector('img, iframe, .note-image-wrap, .note-embed-wrap')) {
    div.innerHTML = '<br>';
  }

  taskLine.replaceWith(div);
  return div;
}

export function applyCheckboxFormat() {
  dom.contentInputEl.focus();
  restoreEditorSelection();

  const sel = window.getSelection();
  if (!sel.rangeCount) return;

  const range = sel.getRangeAt(0);
  if (!dom.contentInputEl.contains(range.commonAncestorContainer)) return;

  if (sel.isCollapsed) {
    const block = getLineBlock(sel.anchorNode);
    if (block?.classList?.contains('task-line')) {
      convertTaskLineToBlock(block);
      state.savedEditorRange = null;
      return;
    }

    const taskLine = buildEmptyTaskLine();
    range.insertNode(taskLine);
    const textEl = taskLine.querySelector('.task-text');
    range.selectNodeContents(textEl);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    state.savedEditorRange = null;
    return;
  }

  const blocks = getBlocksInSelection();

  if (blocks.length) {
    const allTasks = blocks.every(b => b.classList?.contains('task-line'));
    if (allTasks) {
      blocks.forEach(block => convertTaskLineToBlock(block));
    } else {
      blocks.forEach(block => {
        if (!block.classList?.contains('task-line')) convertBlockToTaskLine(block);
      });
    }
    state.savedEditorRange = null;
    return;
  }

  state.savedEditorRange = null;
}

export function handleTaskToggleClick(e) {
  const toggle = e.target.closest('.task-toggle');
  if (!toggle || !dom.contentInputEl.contains(toggle)) return;

  e.preventDefault();
  e.stopPropagation();

  const taskLine = toggle.closest('.task-line');
  const checked = toggle.getAttribute('aria-checked') !== 'true';
  toggle.setAttribute('aria-checked', checked ? 'true' : 'false');
  taskLine?.classList.toggle('is-done', checked);

  if (checked) {
    toggle.classList.remove('is-animating');
    void toggle.offsetWidth;
    toggle.classList.add('is-animating');
  }

  syncContentFromEditor();
}

export function handleTaskEnter(e) {
  if (e.key !== 'Enter' || e.defaultPrevented || e.shiftKey) return false;

  const sel = window.getSelection();
  if (!sel?.rangeCount || !sel.isCollapsed) return false;

  let node = sel.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
  const taskLine = node?.closest?.('.task-line');
  if (!taskLine || !dom.contentInputEl.contains(taskLine)) return false;

  e.preventDefault();

  const newTask = buildEmptyTaskLine();
  taskLine.after(newTask);

  const textEl = newTask.querySelector('.task-text');
  const range = document.createRange();
  range.selectNodeContents(textEl);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);

  syncContentFromEditor();
  return true;
}

export function getEditorContent() {
  return dom.contentInputEl.innerHTML;
}

export function setEditorContent(content) {
  dom.contentInputEl.innerHTML = plainTextToHtml(content || '');
  migrateLegacyTasks();
  setupEditorImages();
  setupEditorEmbeds();
  clearMediaSelection();
}

export function isSafeHttpsUrl(url) {
  try {
    const normalized = url.trim().startsWith('//') ? 'https:' + url.trim() : url.trim();
    return new URL(normalized).protocol === 'https:';
  } catch {
    return false;
  }
}

export function normalizeIframeSrc(url) {
  const trimmed = url.trim();
  return trimmed.startsWith('//') ? 'https:' + trimmed : trimmed;
}

export function sanitizeIframeElement(iframe) {
  const src = iframe.getAttribute('src');
  if (!src || !isSafeHttpsUrl(src)) return null;

  const clean = document.createElement('iframe');
  clean.setAttribute('src', normalizeIframeSrc(src));
  config.ALLOWED_IFRAME_ATTRS.forEach(attr => {
    if (attr === 'src') return;
    if (iframe.hasAttribute(attr)) {
      clean.setAttribute(attr, iframe.getAttribute(attr));
    }
  });

  if (!clean.hasAttribute('width')) clean.setAttribute('width', '560');
  if (!clean.hasAttribute('height')) clean.setAttribute('height', '315');
  if (!clean.hasAttribute('frameborder')) clean.setAttribute('frameborder', '0');
  if (!clean.hasAttribute('allowfullscreen')) clean.setAttribute('allowfullscreen', '');
  clean.style.maxWidth = '100%';
  clean.style.display = 'block';
  return clean;
}

export function parseEmbedCode(raw) {
  const trimmed = raw.trim();
  if (!trimmed) throw new Error('Paste embed code first');

  const doc = new DOMParser().parseFromString(trimmed, 'text/html');
  doc.querySelectorAll('script').forEach(el => el.remove());

  const iframes = doc.querySelectorAll('iframe');
  if (!iframes.length) {
    throw new Error('No iframe found. Paste embed code that includes an iframe.');
  }

  const clean = sanitizeIframeElement(iframes[0]);
  if (!clean) throw new Error('Iframe must use an https:// URL.');
  return clean.outerHTML;
}

export function buildEmbedHtml(iframeHtml) {
  return `<span class="note-embed-wrap" contenteditable="false">${iframeHtml}</span>`;
}

export function saveEditorSelection() {
  const sel = window.getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  if (!dom.contentInputEl.contains(range.commonAncestorContainer)) return;
  state.savedEditorRange = range.cloneRange();
}

export function restoreEditorSelection() {
  if (!state.savedEditorRange) return false;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(state.savedEditorRange);
  return true;
}

export function insertHtmlAtCursor(html) {
  dom.contentInputEl.focus();

  const sel = window.getSelection();
  if (state.savedEditorRange) {
    sel.removeAllRanges();
    sel.addRange(state.savedEditorRange);
    state.savedEditorRange = null;
  }

  if (!sel.rangeCount) {
    dom.contentInputEl.insertAdjacentHTML('beforeend', html.trim());
    return true;
  }

  const range = sel.getRangeAt(0);
  range.deleteContents();

  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const fragment = template.content;
  const lastNode = fragment.lastChild;

  range.insertNode(fragment);

  if (lastNode) {
    range.setStartAfter(lastNode);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  return true;
}

export function showEmbedModal() {
  if (!getActiveNote()) return;
  saveEditorSelection();
  dom.embedCodeInputEl.value = '';
  dom.embedModalEl.classList.remove('hidden');
  dom.embedCodeInputEl.focus();
}

export function hideEmbedModal() {
  dom.embedModalEl.classList.add('hidden');
  state.savedEditorRange = null;
}

export function insertEmbedFromModal() {
  const note = getActiveNote();
  if (!note) return;

  try {
    const iframeHtml = parseEmbedCode(dom.embedCodeInputEl.value);
    commitUndoGroup();
    pushUndoState(note.id, snapshotNote(note));
    insertHtmlAtCursor(buildEmbedHtml(iframeHtml));
    setupEditorEmbeds();
    note.content = getEditorContent();
    note.updatedAt = new Date().toISOString();
    renderNoteList();
    renderNoteMetadata();
    scheduleSave();
    hideEmbedModal();
  } catch (err) {
    alert(err.message);
  }
}

export function clearMediaSelection() {
  selectImageWrap(null);
  selectEmbedWrap(null);
}

export function selectEmbedWrap(wrap) {
  dom.contentInputEl.querySelectorAll('.note-embed-wrap.selected').forEach(el => {
    el.classList.remove('selected');
  });
  state.selectedEmbedWrap = wrap;
  if (wrap) {
    wrap.classList.add('selected');
    state.selectedImageWrap = null;
    dom.contentInputEl.querySelectorAll('.note-image-wrap.selected').forEach(el => {
      el.classList.remove('selected');
    });
  }
}

export function deleteSelectedEmbed() {
  if (!state.selectedEmbedWrap) return false;
  const note = getActiveNote();
  if (!note) return false;
  state.selectedEmbedWrap.remove();
  state.selectedEmbedWrap = null;
  note.content = getEditorContent();
  note.updatedAt = new Date().toISOString();
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
  return true;
}

export function setupEditorEmbeds() {
  dom.contentInputEl.querySelectorAll('iframe').forEach(iframe => {
    if (iframe.closest('.note-embed-wrap')) return;
    const wrap = document.createElement('span');
    wrap.className = 'note-embed-wrap';
    wrap.contentEditable = 'false';
    iframe.parentNode.insertBefore(wrap, iframe);
    wrap.appendChild(iframe);
  });

  dom.contentInputEl.querySelectorAll('.note-embed-wrap').forEach(wrap => {
    wrap.contentEditable = 'false';
    const iframe = wrap.querySelector('iframe');
    if (!iframe) {
      wrap.remove();
      return;
    }
    iframe.setAttribute('contenteditable', 'false');
    iframe.style.maxWidth = '100%';
    iframe.style.display = 'block';
  });
}

export function buildImageHtml(dataUrl, widthPx) {
  const width = widthPx || config.IMAGE_DEFAULT_WIDTH;
  return `<span class="note-image-wrap" contenteditable="false"><img src="${dataUrl}" style="width:${width}px;max-width:100%;height:auto;display:block;" draggable="false" alt=""><span class="image-resize-handle" contenteditable="false"></span></span>`;
}

export function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w > config.IMAGE_MAX_WIDTH) {
          h = Math.round(h * (config.IMAGE_MAX_WIDTH / w));
          w = config.IMAGE_MAX_WIDTH;
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', config.IMAGE_JPEG_QUALITY));
      };
      img.onerror = () => reject(new Error('Could not load image'));
      img.src = reader.result;
    };
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}

export function placeCaretAtPoint(x, y) {
  let range = null;
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(x, y);
  } else if (document.caretPositionFromPoint) {
    const pos = document.caretPositionFromPoint(x, y);
    if (pos) {
      range = document.createRange();
      range.setStart(pos.offsetNode, pos.offset);
      range.collapse(true);
    }
  }
  if (!range || !dom.contentInputEl.contains(range.startContainer)) return;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

export function selectImageWrap(wrap) {
  dom.contentInputEl.querySelectorAll('.note-image-wrap.selected').forEach(el => {
    el.classList.remove('selected');
  });
  state.selectedImageWrap = wrap;
  if (wrap) {
    wrap.classList.add('selected');
    state.selectedEmbedWrap = null;
    dom.contentInputEl.querySelectorAll('.note-embed-wrap.selected').forEach(el => {
      el.classList.remove('selected');
    });
  }
}

export function deleteSelectedImage() {
  if (!state.selectedImageWrap) return false;
  const note = getActiveNote();
  if (!note) return false;
  state.selectedImageWrap.remove();
  state.selectedImageWrap = null;
  note.content = getEditorContent();
  note.updatedAt = new Date().toISOString();
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
  return true;
}

export function setupEditorImages() {
  dom.contentInputEl.querySelectorAll('img').forEach(img => {
    if (img.closest('.note-image-wrap')) return;
    const wrap = document.createElement('span');
    wrap.className = 'note-image-wrap';
    wrap.contentEditable = 'false';
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
    const handle = document.createElement('span');
    handle.className = 'image-resize-handle';
    handle.contentEditable = 'false';
    wrap.appendChild(handle);
  });

  dom.contentInputEl.querySelectorAll('.note-image-wrap').forEach(wrap => {
    wrap.contentEditable = 'false';
    if (!wrap.querySelector('.image-resize-handle')) {
      const handle = document.createElement('span');
      handle.className = 'image-resize-handle';
      handle.contentEditable = 'false';
      wrap.appendChild(handle);
    }
    const img = wrap.querySelector('img');
    if (!img) return;
    img.draggable = false;
    img.style.display = 'block';
    img.style.height = 'auto';
    img.style.maxWidth = '100%';
    if (!img.style.width) img.style.width = config.IMAGE_DEFAULT_WIDTH + 'px';
  });
}

export async function insertImageFromFile(file, options) {
  const pushUndo = !options || options.pushUndo !== false;
  const note = getActiveNote();
  if (!note || !file || !file.type.startsWith('image/')) return;

  try {
    if (pushUndo) {
      commitUndoGroup();
      pushUndoState(note.id, snapshotNote(note));
    }

    const dataUrl = await compressImageFile(file);
    dom.contentInputEl.focus();
    document.execCommand('insertHTML', false, buildImageHtml(dataUrl));
    setupEditorImages();
    note.content = getEditorContent();
    maybeAutoTitle(note);
    note.updatedAt = new Date().toISOString();
    renderNoteList();
    renderNoteMetadata();
    scheduleSave();
  } catch (err) {
    alert('Could not insert image: ' + err.message);
  }
}

export function startImageResize(e, wrap) {
  const img = wrap.querySelector('img');
  if (!img) return;

  e.preventDefault();
  e.stopPropagation();
  selectImageWrap(wrap);

  state.imageResizeState = {
    wrap,
    img,
    startX: e.clientX,
    startWidth: img.offsetWidth
  };

  document.addEventListener('mousemove', onImageResizeMove);
  document.addEventListener('mouseup', onImageResizeEnd);
}

export function onImageResizeMove(e) {
  if (!state.imageResizeState) return;
  const delta = e.clientX - state.imageResizeState.startX;
  const newWidth = Math.max(80, Math.min(config.IMAGE_MAX_WIDTH, state.imageResizeState.startWidth + delta));
  state.imageResizeState.img.style.width = newWidth + 'px';
}

export function onImageResizeEnd() {
  if (!state.imageResizeState) return;
  document.removeEventListener('mousemove', onImageResizeMove);
  document.removeEventListener('mouseup', onImageResizeEnd);
  state.imageResizeState = null;
  syncContentFromEditor();
}

export function initImageEditorEvents() {
  dom.contentInputEl.addEventListener('click', (e) => {
    if (e.target.closest('.task-toggle')) {
      handleTaskToggleClick(e);
      return;
    }

    const handle = e.target.closest('.image-resize-handle');
    if (handle) return;

    const embedWrap = e.target.closest('.note-embed-wrap');
    if (embedWrap && dom.contentInputEl.contains(embedWrap)) {
      e.preventDefault();
      selectEmbedWrap(embedWrap);
      return;
    }

    const wrap = e.target.closest('.note-image-wrap');
    if (wrap && dom.contentInputEl.contains(wrap)) {
      e.preventDefault();
      selectImageWrap(wrap);
      return;
    }

    if (!e.target.closest('.note-image-wrap') && !e.target.closest('.note-embed-wrap')) {
      clearMediaSelection();
    }
  });

  dom.contentInputEl.addEventListener('mousedown', (e) => {
    const handle = e.target.closest('.image-resize-handle');
    if (!handle) return;
    const wrap = handle.closest('.note-image-wrap');
    if (wrap) startImageResize(e, wrap);
  });

  dom.contentInputEl.addEventListener('keydown', (e) => {
    if (handleListAutoFormatOnSpace(e)) return;
    if (handleTaskEnter(e)) return;
    if (e.key === 'Tab') {
      handleEditorTab(e);
      return;
    }
    if ((e.key === 'Backspace' || e.key === 'Delete') && (state.selectedImageWrap || state.selectedEmbedWrap)) {
      e.preventDefault();
      const note = getActiveNote();
      if (!note) return;
      commitUndoGroup();
      pushUndoState(note.id, snapshotNote(note));
      if (state.selectedImageWrap) deleteSelectedImage();
      else deleteSelectedEmbed();
    }
  });

  dom.contentInputEl.addEventListener('paste', async (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    const imageItems = [...items].filter(item => item.type.startsWith('image/'));
    if (!imageItems.length) return;
    e.preventDefault();
    for (const item of imageItems) {
      const file = item.getAsFile();
      if (file) await insertImageFromFile(file);
    }
  });

  dom.contentInputEl.addEventListener('dragover', (e) => {
    if ([...e.dataTransfer.types].includes('Files')) {
      e.preventDefault();
      dom.contentInputEl.classList.add('drag-over-image');
    }
  });

  dom.contentInputEl.addEventListener('dragleave', (e) => {
    if (!dom.contentInputEl.contains(e.relatedTarget)) {
      dom.contentInputEl.classList.remove('drag-over-image');
    }
  });

  dom.contentInputEl.addEventListener('drop', async (e) => {
    const files = [...e.dataTransfer.files].filter(f => f.type.startsWith('image/'));
    if (!files.length) return;
    e.preventDefault();
    dom.contentInputEl.classList.remove('drag-over-image');
    placeCaretAtPoint(e.clientX, e.clientY);
    for (let i = 0; i < files.length; i++) {
      await insertImageFromFile(files[i], { pushUndo: i === 0 });
    }
  });

  dom.imageFileInputEl.addEventListener('change', async (e) => {
    const files = [...e.target.files];
    for (let i = 0; i < files.length; i++) {
      await insertImageFromFile(files[i], { pushUndo: i === 0 });
    }
    e.target.value = '';
  });
}

export function syncContentFromEditor() {
  const note = getActiveNote();
  if (!note || state.isApplyingHistory) return;
  beginUndoGroup(note);
  note.content = getEditorContent();
  maybeAutoTitle(note);
  note.updatedAt = new Date().toISOString();
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
}

export function applyTextFormat(format) {
  const note = getActiveNote();
  if (!note) return;

  commitUndoGroup();
  pushUndoState(note.id, snapshotNote(note));

  dom.contentInputEl.focus();

  if (format === 'bold') {
    document.execCommand('bold', false, null);
  } else if (format === 'italic') {
    document.execCommand('italic', false, null);
  } else if (format === 'strike') {
    document.execCommand('strikeThrough', false, null);
  } else if (format === 'h1') {
    document.execCommand('formatBlock', false, '<h1>');
  } else if (format === 'h2') {
    document.execCommand('formatBlock', false, '<h2>');
  } else if (format === 'link') {
    const url = prompt('Enter link URL:', 'https://');
    if (url) {
      document.execCommand('createLink', false, url);
    } else {
      return;
    }
  } else if (format === 'clear') {
    const sel = window.getSelection();
    if (!sel.rangeCount || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const fragment = range.extractContents();
    const cleaned = stripFormattingFragment(fragment);
    range.insertNode(cleaned);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (format === 'image') {
    dom.imageFileInputEl.click();
    return;
  } else if (format === 'embed') {
    showEmbedModal();
    return;
  } else if (format === 'bullet') {
    document.execCommand('insertUnorderedList', false, null);
  } else if (format === 'numbered') {
    document.execCommand('insertOrderedList', false, null);
  } else if (format === 'checkbox') {
    applyCheckboxFormat();
  }

  note.content = getEditorContent();
  maybeAutoTitle(note);
  note.updatedAt = new Date().toISOString();
  setupEditorImages();
  setupEditorEmbeds();
  renderNoteList();
  renderNoteMetadata();
  scheduleSave();
  updateFormatToolbar();
}

function queryBlockTag() {
  try {
    const val = document.queryCommandValue('formatBlock');
    if (!val) return '';
    const match = String(val).match(/h1|h2|p|div|blockquote/i);
    return match ? match[0].toLowerCase() : String(val).replace(/[<>]/g, '').toLowerCase();
  } catch {
    return '';
  }
}

function isInTaskLine() {
  const sel = window.getSelection();
  if (!sel?.rangeCount) return false;
  let node = sel.anchorNode;
  if (node?.nodeType === Node.TEXT_NODE) node = node.parentElement;
  return !!node?.closest?.('.task-line');
}

function isFormatActive(format) {
  try {
    if (format === 'bold') return document.queryCommandState('bold');
    if (format === 'italic') return document.queryCommandState('italic');
    if (format === 'strike') return document.queryCommandState('strikeThrough');
    if (format === 'h1') return queryBlockTag() === 'h1';
    if (format === 'h2') return queryBlockTag() === 'h2';
    if (format === 'bullet') return document.queryCommandState('insertUnorderedList');
    if (format === 'numbered') return document.queryCommandState('insertOrderedList');
    if (format === 'checkbox') return isInTaskLine();
  } catch {
    return false;
  }
  return false;
}

export function updateFormatToolbar() {
  const sel = window.getSelection();
  const inEditor = !!(sel?.rangeCount && sel.anchorNode && dom.contentInputEl.contains(sel.anchorNode));

  dom.formatToolbarEl.querySelectorAll('[data-format]').forEach(btn => {
    const format = btn.dataset.format;
    const togglable = ['bold', 'italic', 'strike', 'h1', 'h2', 'bullet', 'numbered', 'checkbox'].includes(format);
    btn.classList.toggle('active', inEditor && togglable && isFormatActive(format));
  });
}

export function focusEditorBody() {
  requestAnimationFrame(() => {
    if (dom.editorBodyEl.classList.contains('hidden')) return;
    dom.contentInputEl.focus();
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(dom.contentInputEl);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    updateFormatToolbar();
  });
}

export function initFormatToolbar() {
  document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    if (!sel?.rangeCount) return;
    const anchor = sel.anchorNode;
    if (anchor && dom.contentInputEl.contains(anchor)) {
      updateFormatToolbar();
    }
  });

  dom.contentInputEl.addEventListener('focus', updateFormatToolbar);
  dom.contentInputEl.addEventListener('keyup', updateFormatToolbar);
  dom.contentInputEl.addEventListener('mouseup', updateFormatToolbar);
  dom.contentInputEl.addEventListener('blur', () => {
    requestAnimationFrame(updateFormatToolbar);
  });
}
