import * as dom from './dom.js';

const HIGHLIGHT_NAME = 'in-note-find';
const CURRENT_HIGHLIGHT_NAME = 'in-note-find-current';

let matchRanges = [];
let currentIndex = -1;

function supportsHighlight() {
  return typeof CSS !== 'undefined' && CSS.highlights;
}

function clearHighlights() {
  if (supportsHighlight()) {
    CSS.highlights.delete(HIGHLIGHT_NAME);
    CSS.highlights.delete(CURRENT_HIGHLIGHT_NAME);
  }
}

function collectMatchRanges(query) {
  const ranges = [];
  if (!query) return ranges;

  const root = dom.contentInputEl;
  const lowerQuery = query.toLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  let node = walker.nextNode();
  while (node) {
    const text = node.textContent;
    const lowerText = text.toLowerCase();
    let start = 0;
    let idx = lowerText.indexOf(lowerQuery, start);

    while (idx !== -1) {
      const range = document.createRange();
      range.setStart(node, idx);
      range.setEnd(node, idx + query.length);
      ranges.push(range);
      start = idx + 1;
      idx = lowerText.indexOf(lowerQuery, start);
    }

    node = walker.nextNode();
  }

  return ranges;
}

function applyHighlights() {
  clearHighlights();
  if (!matchRanges.length || !supportsHighlight()) return;

  CSS.highlights.set(HIGHLIGHT_NAME, new Highlight(...matchRanges));

  if (currentIndex >= 0 && matchRanges[currentIndex]) {
    CSS.highlights.set(CURRENT_HIGHLIGHT_NAME, new Highlight(matchRanges[currentIndex]));
  }
}

function updateCountLabel() {
  if (!matchRanges.length) {
    dom.inNoteSearchCountEl.textContent = dom.inNoteSearchInputEl.value.trim()
      ? 'No matches'
      : '';
    return;
  }
  dom.inNoteSearchCountEl.textContent = `${currentIndex + 1} of ${matchRanges.length}`;
}

function scrollToCurrentMatch() {
  if (currentIndex < 0 || !matchRanges[currentIndex]) return;

  const range = matchRanges[currentIndex];
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range.cloneRange());

  const rect = range.getBoundingClientRect();
  const editorRect = dom.contentInputEl.getBoundingClientRect();
  if (rect.top < editorRect.top || rect.bottom > editorRect.bottom) {
    const node = range.startContainer.parentElement || dom.contentInputEl;
    node.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

function runSearch() {
  const query = dom.inNoteSearchInputEl.value;
  matchRanges = collectMatchRanges(query.trim());
  currentIndex = matchRanges.length ? 0 : -1;
  applyHighlights();
  updateCountLabel();
  scrollToCurrentMatch();
}

function goToMatch(delta) {
  if (!matchRanges.length) return;
  currentIndex = (currentIndex + delta + matchRanges.length) % matchRanges.length;
  applyHighlights();
  updateCountLabel();
  scrollToCurrentMatch();
}

export function isInNoteSearchOpen() {
  return !dom.inNoteSearchEl.classList.contains('hidden');
}

export function openInNoteSearch() {
  dom.inNoteSearchEl.classList.remove('hidden');
  dom.inNoteSearchInputEl.focus();
  dom.inNoteSearchInputEl.select();
  runSearch();
}

export function closeInNoteSearch() {
  dom.inNoteSearchEl.classList.add('hidden');
  dom.inNoteSearchInputEl.value = '';
  matchRanges = [];
  currentIndex = -1;
  clearHighlights();
  dom.inNoteSearchCountEl.textContent = '';
  dom.contentInputEl.focus();
}

export function initInNoteSearch() {
  dom.inNoteSearchInputEl.addEventListener('input', runSearch);

  dom.inNoteSearchInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeInNoteSearch();
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      goToMatch(e.shiftKey ? -1 : 1);
    }
  });

  dom.inNoteSearchPrevEl.addEventListener('click', () => goToMatch(-1));
  dom.inNoteSearchNextEl.addEventListener('click', () => goToMatch(1));
  dom.inNoteSearchCloseEl.addEventListener('click', closeInNoteSearch);
}
