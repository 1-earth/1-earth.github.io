// js/uiService.js

// --- RTE Instances (global to this module) ---
let quillInstances = {}; // To store multiple Quill instances if needed { 'editorId': quill }

// --- Helper Functions ---
export function escapeHTML(str) {
    if (str === null || typeof str === 'undefined') return '';
    if (typeof str !== 'string') str = String(str);
    return str.replace(/[&<>"']/g, function (match) {
        // Correctly map characters to their HTML entities
        return {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"',
            "'": "'",
        }[match];
    });
}

function formatDateForInput(date) {
    if (!date) return '';
    // Ensure 'date' is a Date object. Firebase Timestamps have a toDate() method.
    const d = (date.toDate instanceof Function) ? date.toDate() : new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const COLUMN_GROUP_MIN_WIDTH = 10;
export const COLUMN_GROUP_MAX_COLUMNS = 4;

function createColumnId() {
    return `column_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getEqualizedWidths(count) {
    if (!count || count < 1) return [];
    const baseWidth = Math.floor(100 / count);
    const widths = Array.from({ length: count }, () => baseWidth);
    widths[count - 1] += 100 - (baseWidth * count);
    return widths;
}

function getColumnSliderBounds(columnCount) {
    if (columnCount <= 1) {
        return { min: 100, max: 100 };
    }

    return {
        min: COLUMN_GROUP_MIN_WIDTH,
        max: 100 - (COLUMN_GROUP_MIN_WIDTH * (columnCount - 1))
    };
}

function normalizeColumnWidths(columns) {
    if (!Array.isArray(columns) || columns.length === 0) {
        return [];
    }

    const safeColumns = columns.map((column, index) => ({
        id: column && column.id ? column.id : createColumnId(),
        width: Number(column && column.width),
        blocks: Array.isArray(column && column.blocks) ? column.blocks : [],
        order: typeof (column && column.order) === 'number' ? column.order : index
    }));

    const widths = safeColumns.map(column => Number.isFinite(column.width) && column.width > 0 ? column.width : 0);
    const totalWidth = widths.reduce((sum, width) => sum + width, 0);
    const normalizedWidths = totalWidth > 0
        ? widths.map(width => (width / totalWidth) * 100)
        : getEqualizedWidths(safeColumns.length);

    let runningTotal = 0;
    return safeColumns.map((column, index) => {
        let width = normalizedWidths[index];
        if (!Number.isFinite(width) || width <= 0) {
            width = getEqualizedWidths(safeColumns.length)[index] || 0;
        }

        let roundedWidth = index === safeColumns.length - 1
            ? Math.max(0, 100 - runningTotal)
            : Math.round(width);

        runningTotal += roundedWidth;

        return {
            ...column,
            width: roundedWidth
        };
    });
}

function getColumnSummary(columns) {
    return columns.map(column => `${Math.round(column.width)}%`).join(' / ');
}

export function createDefaultColumnGroupColumns(columnCount = 2) {
    return getEqualizedWidths(columnCount).map((width, index) => ({
        id: createColumnId(),
        width,
        blocks: [],
        order: index
    }));
}

export function normalizeColumnGroupItem(item = {}) {
    const hasNewColumns = Array.isArray(item.columns) && item.columns.length > 0;
    let columns = [];

    if (hasNewColumns) {
        columns = item.columns.map((column, index) => ({
            id: column && column.id ? column.id : createColumnId(),
            width: column && typeof column.width !== 'undefined' ? column.width : undefined,
            blocks: Array.isArray(column && column.blocks) ? column.blocks : [],
            order: typeof (column && column.order) === 'number' ? column.order : index
        }));
    } else {
        const leftRatio = item.columnRatio && typeof item.columnRatio.left === 'number'
            ? item.columnRatio.left
            : 50;
        const rightRatio = item.columnRatio && typeof item.columnRatio.right === 'number'
            ? item.columnRatio.right
            : (100 - leftRatio);

        columns = [
            {
                id: `${item.id || 'group'}_left`,
                width: leftRatio,
                blocks: Array.isArray(item.leftColumn) ? item.leftColumn : [],
                order: 0
            },
            {
                id: `${item.id || 'group'}_right`,
                width: rightRatio,
                blocks: Array.isArray(item.rightColumn) ? item.rightColumn : [],
                order: 1
            }
        ];
    }

    return {
        ...item,
        columns: normalizeColumnWidths(columns)
    };
}

export function createColumnDropZoneHtml(groupId, column, columnIndex, totalColumns) {
    const sliderBounds = getColumnSliderBounds(totalColumns);
    const blockList = Array.isArray(column.blocks) ? column.blocks : [];
    const blocksHtml = blockList.map(block =>
        createBlogBlockHtml(
            block.id,
            block.blockType || block.type,
            block.content,
            block.mediaId,
            block.layout,
            block.layoutRatio
        )
    ).join('');

    return `
        <div class="column-drop-zone" data-column-id="${column.id}" data-column-width="${column.width}" style="width: ${column.width}%;">
            <div class="column-header">
                <span class="column-title">Column ${columnIndex + 1}</span>
                <div class="column-actions">
                    <button class="btn btn-xs btn-secondary add-column-block-btn">+ Add Block</button>
                    <button class="btn btn-xs btn-secondary remove-column-btn" ${totalColumns <= 1 ? 'disabled' : ''}>Remove Column</button>
                </div>
            </div>
            <div class="column-width-control">
                <label for="${groupId}_${column.id}_width">Width</label>
                <input type="range"
                       id="${groupId}_${column.id}_width"
                       class="column-width-slider"
                       min="${sliderBounds.min}"
                       max="${sliderBounds.max}"
                       value="${Math.round(column.width)}">
                <span class="column-width-display">${Math.round(column.width)}%</span>
            </div>
            <div class="column-content">
                ${blocksHtml}
            </div>
            <div class="column-drop-indicator">Drop blocks here</div>
        </div>
    `;
}

export function refreshColumnGroupUi(columnGroup) {
    if (!columnGroup) return [];

    const columnElements = [...columnGroup.querySelectorAll('.column-drop-zone')];
    const columns = normalizeColumnWidths(columnElements.map((columnEl, index) => ({
        id: columnEl.dataset.columnId || createColumnId(),
        width: parseFloat(columnEl.dataset.columnWidth || '0'),
        blocks: [],
        order: index
    })));
    const sliderBounds = getColumnSliderBounds(columns.length);

    columnElements.forEach((columnEl, index) => {
        const columnData = columns[index];
        const titleEl = columnEl.querySelector('.column-title');
        const sliderEl = columnEl.querySelector('.column-width-slider');
        const widthDisplayEl = columnEl.querySelector('.column-width-display');
        const removeButton = columnEl.querySelector('.remove-column-btn');

        columnEl.dataset.columnId = columnData.id;
        columnEl.dataset.columnWidth = String(columnData.width);
        columnEl.style.width = `${columnData.width}%`;

        if (titleEl) {
            titleEl.textContent = `Column ${index + 1}`;
        }

        if (sliderEl) {
            sliderEl.min = String(sliderBounds.min);
            sliderEl.max = String(sliderBounds.max);
            sliderEl.value = String(Math.round(columnData.width));
            sliderEl.disabled = columns.length <= 1;
        }

        if (widthDisplayEl) {
            widthDisplayEl.textContent = `${Math.round(columnData.width)}%`;
        }

        if (removeButton) {
            removeButton.disabled = columns.length <= 1;
        }
    });

    const ratioDisplay = columnGroup.querySelector('.ratio-display');
    if (ratioDisplay) {
        ratioDisplay.textContent = getColumnSummary(columns);
    }

    const addColumnBtn = columnGroup.querySelector('.add-column-btn');
    if (addColumnBtn) {
        addColumnBtn.disabled = columns.length >= COLUMN_GROUP_MAX_COLUMNS;
    }

    return columns;
}

// --- Loading Indicator ---
const loadingOverlay = document.getElementById('loadingOverlay');
export function showLoading(show) {
    if (loadingOverlay) {
        loadingOverlay.style.display = show ? 'flex' : 'none';
    }
}

// --- Popup ---
const popupOverlay = document.getElementById('popupOverlay');
const popupMessageEl = document.getElementById('popupMessage');
const popupActionsEl = document.getElementById('popupActions');
const popupCloseBtn = document.getElementById('popupClose');

let confirmCallbackInfo = null; // Store as object { func, executed }
let cancelCallbackInfo = null;

if (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', () => {
        // If it's a confirm dialog and "Close" is clicked, treat as cancel if onCancel exists
        if (cancelCallbackInfo && confirmCallbackInfo && !confirmCallbackInfo.executed) {
            cancelCallbackInfo();
        }
        hidePopup();
    });
}

if (popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) { // Clicked on backdrop
            if (cancelCallbackInfo && confirmCallbackInfo && !confirmCallbackInfo.executed) {
                cancelCallbackInfo();
            }
            hidePopup();
        }
    });
}

function hidePopup() {
    if (popupOverlay) popupOverlay.style.display = 'none';
    confirmCallbackInfo = null;
    cancelCallbackInfo = null;
}

export function showPopup(message, type = 'alert', onConfirm = null, onCancel = null) {
    if (!popupOverlay || !popupMessageEl || !popupActionsEl) {
        console.warn("Popup elements not found, using browser dialogs as fallback.");
        if (type === 'confirm') {
            if (confirm(message)) {
                if (onConfirm) onConfirm();
            } else {
                if (onCancel) onCancel();
            }
        } else {
            alert(message);
            if (onConfirm) onConfirm();
        }
        return;
    }

    popupMessageEl.textContent = message;
    popupActionsEl.innerHTML = '';

    confirmCallbackInfo = onConfirm ? { func: onConfirm, executed: false } : null;
    cancelCallbackInfo = onCancel; // Store the raw onCancel function

    if (type === 'confirm') {
        const yesButton = document.createElement('button');
        yesButton.textContent = 'Yes';
        yesButton.className = 'btn btn-primary';
        yesButton.onclick = () => {
            if (confirmCallbackInfo && !confirmCallbackInfo.executed) {
                confirmCallbackInfo.func();
                confirmCallbackInfo.executed = true;
            }
            hidePopup();
        };
        popupActionsEl.appendChild(yesButton);

        const noButton = document.createElement('button');
        noButton.textContent = 'No';
        noButton.className = 'btn';
        noButton.onclick = () => {
            if (cancelCallbackInfo) cancelCallbackInfo();
            hidePopup();
        };
        popupActionsEl.appendChild(noButton);
        if (popupCloseBtn) popupCloseBtn.style.display = 'none';
    } else { // 'alert' or other types
        if (onConfirm) {
            const okButton = document.createElement('button');
            okButton.textContent = 'OK';
            okButton.className = 'btn btn-primary';
            okButton.onclick = () => {
                if (confirmCallbackInfo && !confirmCallbackInfo.executed) {
                    confirmCallbackInfo.func();
                    confirmCallbackInfo.executed = true;
                }
                hidePopup();
            };
            popupActionsEl.appendChild(okButton);
            if (popupCloseBtn) popupCloseBtn.style.display = 'none';
        } else {
            if (popupCloseBtn) popupCloseBtn.style.display = 'inline-block';
        }
    }
    popupOverlay.style.display = 'flex';
}


// --- UI Updates ---
const itemsListUl = document.getElementById('itemsList');
const itemsListTitleEl = document.getElementById('itemsListTitle');
const createNewItemBtnEl = document.getElementById('createNewItemBtn');
const newItemTypeLabelEl = document.getElementById('newItemTypeLabel');
const dashboardContentEl = document.getElementById('dashboardContent');
const dashboardTitleEl = document.getElementById('dashboardTitle');

export function updateItemsListTitle(title) {
    if (itemsListTitleEl) itemsListTitleEl.textContent = title;
}

export function setNewItemButtonText(typeLabel) {
    if (newItemTypeLabelEl) newItemTypeLabelEl.textContent = typeLabel;
    if (createNewItemBtnEl) createNewItemBtnEl.style.display = 'block';
}

export function hideNewItemButton() {
    if (createNewItemBtnEl) createNewItemBtnEl.style.display = 'none';
}

export function updateDashboardTitle(title) {
    if (dashboardTitleEl) dashboardTitleEl.textContent = title;
}

export function clearDashboard(message = "Select an item or create a new one.") {
    if (dashboardContentEl) dashboardContentEl.innerHTML = `<p class="placeholder-text">${escapeHTML(message)}</p>`;
    destroyAllQuillInstances();
    document.dispatchEvent(new CustomEvent('cms-dashboard-cleared'));
}

/**
 * @typedef {Object} ItemsListMenuAction
 * @property {string} text
 * @property {boolean} [danger]
 * @property {(dataID: string) => void} onSelect
 */

/**
 * @typedef {Object} ItemsListItemMenu
 * @property {string} ariaLabel
 * @property {ItemsListMenuAction[]} actions
 */

export function displayItemsList(items, currentOpenItemID, onItemSelected, listOptions = {}) {
    if (!itemsListUl) return;
    /** @type {ItemsListItemMenu|undefined} */
    const itemMenu = listOptions.itemMenu;
    itemsListUl.innerHTML = '';
    if (!items || items.length === 0) {
        itemsListUl.innerHTML = '<li class="placeholder-text">No items yet.</li>';
        return;
    }
    items.forEach(item => {
        const li = document.createElement('li');
        const titleText = item.title || `Untitled (${item.dataID ? item.dataID.slice(-6) : 'New'})`;
        if (item.dataID) li.dataset.id = item.dataID;

        if (item.dataID && item.dataID === currentOpenItemID) {
            li.classList.add('active');
        }

        if (itemMenu && item.dataID && Array.isArray(itemMenu.actions) && itemMenu.actions.length) {
            li.classList.add('items-list-item--with-menu');

            const row = document.createElement('div');
            row.className = 'items-list-item-row';

            const titleBtn = document.createElement('button');
            titleBtn.type = 'button';
            titleBtn.className = 'items-list-item-title';
            titleBtn.textContent = titleText;

            const menuWrap = document.createElement('div');
            menuWrap.className = 'items-list-menu-wrap';

            const menuBtn = document.createElement('button');
            menuBtn.type = 'button';
            menuBtn.className = 'items-list-menu-trigger';
            menuBtn.setAttribute('aria-label', itemMenu.ariaLabel || 'Item options');
            menuBtn.setAttribute('aria-haspopup', 'true');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.innerHTML = '<svg class="items-list-menu-trigger-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';

            const dropdown = document.createElement('div');
            dropdown.className = 'items-list-dropdown';
            dropdown.hidden = true;
            dropdown.setAttribute('role', 'menu');

            itemMenu.actions.forEach((action) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = action.danger
                    ? 'items-list-dropdown-action items-list-dropdown-action--danger'
                    : 'items-list-dropdown-action';
                btn.textContent = action.text;
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropdown.hidden = true;
                    menuBtn.setAttribute('aria-expanded', 'false');
                    if (typeof action.onSelect === 'function') action.onSelect(item.dataID);
                });
                dropdown.appendChild(btn);
            });

            menuWrap.appendChild(menuBtn);
            menuWrap.appendChild(dropdown);
            row.appendChild(titleBtn);
            row.appendChild(menuWrap);
            li.appendChild(row);

            titleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                itemsListUl.querySelectorAll('.items-list-dropdown').forEach((el) => { el.hidden = true; });
                itemsListUl.querySelectorAll('.items-list-menu-trigger').forEach((b) => { b.setAttribute('aria-expanded', 'false'); });
                if (!item.dataID) return;
                document.querySelectorAll('#itemsList li.active').forEach(activeLi => activeLi.classList.remove('active'));
                li.classList.add('active');
                onItemSelected(item.dataID);
            });

            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const willOpen = dropdown.hidden;
                itemsListUl.querySelectorAll('.items-list-dropdown').forEach((el) => { el.hidden = true; });
                itemsListUl.querySelectorAll('.items-list-menu-trigger').forEach((b) => { b.setAttribute('aria-expanded', 'false'); });
                dropdown.hidden = !willOpen;
                menuBtn.setAttribute('aria-expanded', String(willOpen));
            });
        } else {
            li.textContent = titleText;
            li.addEventListener('click', () => {
                if (!item.dataID) {
                    console.warn('Clicked item has no dataID, cannot select.');
                    return;
                }
                document.querySelectorAll('#itemsList li.active').forEach(activeLi => activeLi.classList.remove('active'));
                li.classList.add('active');
                onItemSelected(item.dataID);
            });
        }

        itemsListUl.appendChild(li);
    });
}

export function setActiveItemInList(dataID) {
    if (!itemsListUl) return;
    document.querySelectorAll('#itemsList li.active').forEach(activeLi => activeLi.classList.remove('active'));
    if (dataID) { // Only try to find and activate if dataID is provided
        const itemLi = itemsListUl.querySelector(`li[data-id="${dataID}"]`);
        if (itemLi) {
            itemLi.classList.add('active');
        }
    }
}

// --- Error Display ---
export function displayErrorNearElement(element, message) {
    if (!element || !element.parentNode) return;
    clearErrorNearElement(element);
    const errorEl = document.createElement('p');
    errorEl.className = 'error-message field-error';
    errorEl.textContent = message;
    // Insert after the element: element.parentNode.insertBefore(errorEl, element.nextSibling);
    // Or, for more consistent placement with various inputs, append to parent.
    element.parentNode.appendChild(errorEl); // Simpler, often works well if parent is form-group
    element.classList.add('input-error');
}

export function clearErrorNearElement(element) {
    if (!element || !element.parentNode) return;
    const parent = element.parentNode;
    const errorEl = parent.querySelector('p.field-error'); // More specific selector
    if (errorEl && errorEl.parentNode === parent) { // Ensure it's a direct child before removing
        parent.removeChild(errorEl);
    }
    element.classList.remove('input-error');
}


// --- Quill RTE ---
function destroyAllQuillInstances() {
    for (const editorId in quillInstances) {
        if (quillInstances[editorId]) {
            const editorElement = document.getElementById(editorId);
            if (editorElement) {
                // Simple cleanup: just remove content. Quill specific cleanup is harder.
                // editorElement.innerHTML = '';
            }
        }
    }
    quillInstances = {}; // Reset the store
}

export function initQuillEditor(editorContainerId, toolbarContainerId, initialContent = '', options = {}) {
    // Always use the default Quill toolbar (ignore toolbarContainerId)
    const editorElement = document.getElementById(editorContainerId);
    if (!editorElement) {
        console.error(`Quill editor container #${editorContainerId} not found.`);
        return null;
    }
    editorElement.innerHTML = ''; // Clear it before Quill takes over

    const quill = new Quill(`#${editorContainerId}`, {
        theme: 'snow' // Default toolbar
    });

    if (initialContent) {
        quill.root.innerHTML = initialContent;
    }
    quillInstances[editorContainerId] = quill; // Store the instance
    if (options && options.trackPageDirty) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                quill.on('text-change', () => {
                    document.dispatchEvent(new CustomEvent('cms-page-editor-dirty'));
                });
            });
        });
    }
    return quill;
}

export function getQuillEditorContent(editorContainerId) {
    if (quillInstances[editorContainerId]) {
        return quillInstances[editorContainerId].root.innerHTML;
    }
    console.warn(`Quill instance for ${editorContainerId} not found.`);
    return '';
}

// --- TEXT DASHBOARD ---
export function renderTextDashboard(dataID, existingData = null) {
    if (!dashboardContentEl) { console.error("Dashboard content element not found!"); return; }
    const title = existingData ? existingData.title : '';
    const content = existingData ? existingData.content : '';
    const isNew = !existingData;

    const html = `
        <div class="dashboard-section text-dashboard dashboard-with-sidebar">
            <div class="dashboard-main-content">
                <div class="form-group">
                    <label for="textTitle">Title:</label>
                    <input type="text" id="textTitle" value="${escapeHTML(title)}" placeholder="Enter text title">
                </div>
                <div class="form-group">
                    <label>Data ID:</label>
                    <div class="data-id-display">${escapeHTML(dataID)}</div>
                </div>
                <div class="form-group">
                    <label for="textContent">Content:</label>
                    <div id="textEditorContainer"></div>
                </div>
            </div>
            <div class="dashboard-sidebar">
                <div class="dashboard-sidebar-header">Page Settings:</div>
                <div class="dashboard-actions">
                    <button id="saveTextBtn" class="btn btn-primary">Save Text</button>
                    ${!isNew ? `<button id="deleteTextBtn" class="btn btn-danger">Delete Text</button>` : ''}
                </div>
            </div>
        </div>
    `;
    dashboardContentEl.innerHTML = html;
    const editor = initQuillEditor('textEditorContainer', undefined, content);
    // No need to return editor from here if main.js doesn't directly use it after this call.
    // getQuillEditorContent can be used by main.js when saving.
}

// --- MEDIA DASHBOARD ---
export function renderMediaDashboard(dataID, existingData = null, currentUserID) {
    if (!dashboardContentEl) { console.error("Dashboard content element not found!"); return; }
    const title = existingData ? existingData.title : '';
    const selectedMediaType = existingData ? existingData.mediaType : 'photo';
    const isNew = !existingData;

    const html = `
        <div class="dashboard-section media-dashboard dashboard-with-sidebar">
            <div class="dashboard-main-content">
                <input type="hidden" id="currentUserID" value="${escapeHTML(currentUserID)}">
                <div class="form-group">
                    <label for="mediaTitle">Collection Title:</label>
                    <input type="text" id="mediaTitle" value="${escapeHTML(title)}" placeholder="Enter media collection title">
                </div>
                <div class="form-group">
                    <label>Data ID:</label>
                    <div class="data-id-display">${escapeHTML(dataID)}</div>
                </div>
                <div class="form-group">
                    <label for="mediaFileUploadTrigger">+ Add Media File(s):</label>
                    <div class="media-upload-area" id="mediaUploadDropzone">
                        <p>Click or Drag & Drop files here</p>
                    </div>
                    <input type="file" id="mediaFileUpload" multiple style="display:none;">
                    <div id="uploadProgressContainer" style="display:none;">
                        <p id="uploadProgressText"></p>
                        <progress id="uploadProgressBar" value="0" max="100" style="width:100%;"></progress>
                    </div>
                </div>
                <div class="media-previews" id="mediaPreviewsContainer"></div>
            </div>
            <div class="dashboard-sidebar">
                <div class="dashboard-sidebar-header">Page Settings:</div>
                <div class="form-group">
                    <label for="mediaTypeSelect">Media Type:</label>
                    <select id="mediaTypeSelect">
                        <option value="photo" ${selectedMediaType === 'photo' ? 'selected' : ''}>Single Photo</option>
                        <option value="photoGallery" ${selectedMediaType === 'photoGallery' ? 'selected' : ''}>Photo Gallery</option>
                        <option value="video" ${selectedMediaType === 'video' ? 'selected' : ''}>Single Video</option>
                        <option value="pdf" ${selectedMediaType === 'pdf' ? 'selected' : ''}>PDF Document</option>
                    </select>
                </div>
                <div class="dashboard-actions">
                    <button id="saveMediaBtn" class="btn btn-primary">Save Media</button>
                    ${!isNew ? `<button id="deleteMediaBtn" class="btn btn-danger">Delete Media</button>` : ''}
                </div>
            </div>
        </div>
    `;
    dashboardContentEl.innerHTML = html;
}


// --- BLOG DASHBOARD ---
export function renderBlogDashboard(dataID, existingData = null) {
    if (!dashboardContentEl) { console.error("Dashboard content element not found!"); return; }
    document.dispatchEvent(new CustomEvent('cms-blog-dashboard-will-render'));
    const title = existingData ? existingData.title : '';
    const author = existingData ? existingData.author : '';
    const category = existingData ? existingData.category : '';
    const excerpt = existingData ? existingData.excerpt : '';
    
    // Handle backwards compatibility for featuredMedia
    let featuredMedia = existingData ? existingData.featuredMedia : null;
    if (!featuredMedia && existingData && existingData.featuredImage) {
        // Convert old format to new format
        featuredMedia = { url: existingData.featuredImage };
    }
    if (!featuredMedia) {
        featuredMedia = { url: '', poster: '' };
    }

    let featuredMedia2 = existingData && existingData.featuredMedia2 ? existingData.featuredMedia2 : null;
    if (!featuredMedia2) {
        featuredMedia2 = { url: '', poster: '', type: '' };
    }
    const featuredMedia2Open = !!(featuredMedia2.url && String(featuredMedia2.url).trim());
    const posterImage2ContainerStyle = featuredMedia2.url && String(featuredMedia2.url).trim() ? '' : 'display:none;';

    const tags = existingData ? existingData.tags : '';
    const datePostedValue = existingData && existingData.datePosted ?
                           formatDateForInput(existingData.datePosted) :
                           formatDateForInput(new Date());
    const sections = existingData && existingData.sections ? existingData.sections : [];
    const isNew = !existingData;

    const html = `
        <div class="dashboard-section blog-dashboard dashboard-with-sidebar">
            <div class="dashboard-main-content">
                <div class="form-group">
                    <label for="blogTitle">Page title</label>
                    <input type="text" id="blogTitle" value="${escapeHTML(title)}" placeholder="Title shown on your site">
                </div>
                <details class="data-id-disclosure">
                    <summary class="data-id-disclosure-summary">
                        <span class="data-id-disclosure-title">Advanced</span>
                        <span class="data-id-disclosure-hint">Document ID (support &amp; integrations)</span>
                    </summary>
                    <div class="data-id-disclosure-body">
                        <code class="data-id-code">${escapeHTML(dataID)}</code>
                        <button type="button" class="btn btn-sm btn-secondary data-id-copy-btn" data-copy-text="${escapeHTML(dataID)}">Copy ID</button>
                    </div>
                </details>
                <div class="blog-content-area">
                    <div class="blog-content-header">
                        <div class="blog-content-header-titles">
                            <h3>Page content</h3>
                            <span id="pageUnsavedIndicator" class="page-unsaved-badge" hidden>Unsaved changes</span>
                        </div>
                        <button id="addBlogSectionBtn" class="btn btn-secondary">+ Add Section</button>
                    </div>
                    <div id="blogSectionsContainer" class="blog-sections-container">
                        ${sections.length === 0 ? '<div class="no-sections-message">No sections yet. Click "Add Section" to get started.</div>' : ''}
                    </div>
                </div>
            </div>
            <div class="dashboard-sidebar">
                <div class="dashboard-sidebar-scroll">
                    <div class="dashboard-sidebar-header">Page settings</div>
                    <div class="dashboard-sidebar-section">
                        <h4 class="dashboard-sidebar-section-title">Publishing</h4>
                        <div class="form-group">
                            <label for="blogAuthor">Author</label>
                            <p class="form-field-hint">Displayed where your theme shows credit.</p>
                            <input type="text" id="blogAuthor" value="${escapeHTML(author)}" placeholder="Author name">
                        </div>
                        <div class="form-group">
                            <label for="blogDatePosted">Date posted</label>
                            <p class="form-field-hint">Used for ordering and display on the site.</p>
                            <input type="date" id="blogDatePosted" value="${datePostedValue}">
                        </div>
                    </div>
                    <div class="dashboard-sidebar-section">
                        <h4 class="dashboard-sidebar-section-title">Summary</h4>
                        <div class="form-group">
                            <label for="blogCategory">Category</label>
                            <p class="form-field-hint">Helps group this page in listings and filters.</p>
                            <input type="text" id="blogCategory" value="${escapeHTML(category)}" placeholder="e.g. Photographer">
                        </div>
                        <div class="form-group">
                            <label for="blogExcerpt">Short excerpt</label>
                            <p class="form-field-hint">Short blurb for cards and previews. You can leave this empty if your site fills it automatically.</p>
                            <textarea id="blogExcerpt" placeholder="Optional short description">${escapeHTML(excerpt)}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="blogTags">Tags / keywords</label>
                            <p class="form-field-hint">Comma-separated. Used for search and filtering where your site supports it.</p>
                            <input type="text" id="blogTags" value="${escapeHTML(tags)}" placeholder="e.g. portrait, studio">
                        </div>
                    </div>
                    <div class="dashboard-sidebar-section">
                        <h4 class="dashboard-sidebar-section-title">Cover media</h4>
                        <div class="form-group">
                            <label for="blogFeaturedMedia">Featured media</label>
                            <p class="form-field-hint">Main image or video for this page—often used on listing cards and social link previews.</p>
                            <div class="featured-media-container" id="featuredMediaContainer">
                                ${featuredMedia.url ? `
                                    <div class="featured-media-preview">
                                        ${createFeaturedMediaPreview(featuredMedia.url)}
                                    </div>
                                    <button class="btn btn-sm btn-secondary select-featured-media-btn">Change featured media</button>
                                ` : `
                                    <div class="featured-media-placeholder">No featured media selected</div>
                                    <button class="btn btn-sm btn-primary select-featured-media-btn">Select featured media</button>
                                `}
                            </div>
                            <div class="poster-image-container" id="posterImageContainer">
                                <label for="blogPosterImage">Poster image</label>
                                <p class="form-field-hint">Optional still shown before a video plays (thumbnail).</p>
                                ${featuredMedia.poster ? `
                                    <div class="poster-image-preview">
                                        <img src="${escapeHTML(featuredMedia.poster)}" alt="Poster Image" style="max-width: 200px; max-height: 100px; object-fit: cover;">
                                    </div>
                                    <button class="btn btn-sm btn-secondary select-poster-image-btn">Change poster image</button>
                                ` : `
                                    <div class="poster-image-placeholder">No poster image selected</div>
                                    <button class="btn btn-sm btn-primary select-poster-image-btn">Select poster image</button>
                                `}
                            </div>
                            <details class="blog-featured-media2-details" ${featuredMedia2Open ? 'open' : ''}>
                                <summary class="blog-featured-media2-summary">
                                    <span class="blog-featured-media2-summary-title">Artist profile hero only (optional)</span>
                                    <span class="blog-featured-media2-summary-hint">Separate from cover / listing card</span>
                                </summary>
                                <div class="blog-featured-media2-body">
                                    <p class="form-field-hint blog-featured-media2-lead">
                                        When set, the large hero on the <strong>artist profile</strong> page uses this media instead of the cover above.
                                        The <strong>Artists</strong> grid card still uses <strong>Featured media</strong> only. Leave empty for the default behavior.
                                    </p>
                                    <div class="form-group">
                                        <label>Hero media</label>
                                        <p class="form-field-hint">Image or video from your library.</p>
                                        <div class="featured-media-container" id="featuredMedia2Container">
                                            ${featuredMedia2.url ? `
                                                <div class="featured-media-preview">
                                                    ${createFeaturedMediaPreview(featuredMedia2.url)}
                                                </div>
                                                <button type="button" class="btn btn-sm btn-secondary select-featured-media2-btn">Change hero-only media</button>
                                            ` : `
                                                <div class="featured-media-placeholder">Not set — hero matches cover media</div>
                                                <button type="button" class="btn btn-sm btn-primary select-featured-media2-btn">Select hero-only media</button>
                                            `}
                                        </div>
                                        <div class="poster-image-container" id="posterImage2Container" style="${posterImage2ContainerStyle}">
                                            <label for="blogPosterImage2">Poster (hero video)</label>
                                            <p class="form-field-hint">Recommended for video: a still frame before playback (especially on mobile).</p>
                                            ${featuredMedia2.poster ? `
                                                <div class="poster-image-preview">
                                                    <img src="${escapeHTML(featuredMedia2.poster)}" alt="Hero video poster" style="max-width: 200px; max-height: 100px; object-fit: cover;">
                                                </div>
                                                <button type="button" class="btn btn-sm btn-secondary select-poster-image2-btn">Change hero poster</button>
                                            ` : `
                                                <div class="poster-image-placeholder">No poster selected</div>
                                                <button type="button" class="btn btn-sm btn-primary select-poster-image2-btn">Select hero poster</button>
                                            `}
                                        </div>
                                        <div class="blog-featured-media2-actions">
                                            <button type="button" class="btn btn-sm btn-secondary clear-featured-media2-btn"${featuredMedia2.url && String(featuredMedia2.url).trim() ? '' : ' disabled'}>Remove hero-only media</button>
                                        </div>
                                        <input type="hidden" id="blogFeaturedMedia2Url" value="${escapeHTML(featuredMedia2.url)}">
                                        <input type="hidden" id="blogFeaturedMedia2Poster" value="${escapeHTML(featuredMedia2.poster || '')}">
                                        <input type="hidden" id="blogFeaturedMedia2Type" value="${escapeHTML(featuredMedia2.type || '')}">
                                    </div>
                                </div>
                            </details>
                            <input type="hidden" id="blogFeaturedMediaUrl" value="${escapeHTML(featuredMedia.url)}">
                            <input type="hidden" id="blogFeaturedMediaPoster" value="${escapeHTML(featuredMedia.poster)}">
                        </div>
                    </div>
                </div>
                <div class="dashboard-sidebar-sticky-footer">
                    <div class="dashboard-actions">
                        <button id="saveBlogBtn" class="btn btn-primary">Save page</button>
                        ${!isNew ? `<button id="deleteBlogBtn" class="btn btn-danger">Delete page</button>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    dashboardContentEl.innerHTML = html;
    
    // Render existing sections if any
    if (sections.length > 0) {
        const sectionsContainer = document.getElementById('blogSectionsContainer');
        sections.forEach((section, sectionIndex) => {
            // Handle both old format (blocks) and new format (items)
            const items = section.items || (section.blocks ? section.blocks.map(block => ({
                ...block,
                type: 'single-block',
                blockType: block.type
            })) : []);
            
            const sectionHtml = createBlogSectionHtml(section.id, items, sectionIndex);
            sectionsContainer.insertAdjacentHTML('beforeend', sectionHtml);
            
            const sectionElement = document.querySelector(`[data-section-id="${section.id}"]`);
            if (sectionElement) {
                wireBlogSectionDrag(sectionElement);
            }
            
            // Initialize items (blocks and column groups)
            items.forEach(item => {
                if (item.type === 'column-group') {
                    // Initialize column group
                    const groupElement = document.querySelector(`[data-group-id="${item.id}"]`);
                    if (groupElement) {
                        initializeColumnGroupDragDrop(groupElement);
                    }
                    
                    // Initialize blocks within columns
                    const normalizedColumnGroup = normalizeColumnGroupItem(item);
                    const allColumnBlocks = normalizedColumnGroup.columns.flatMap(column => column.blocks || []);
                    allColumnBlocks.forEach(block => {
                        const blockElement = document.querySelector(`[data-block-id="${block.id}"]`);
                        if (blockElement) {
                            wireBlogBlockDrag(blockElement);
                        }
                        
                        if (block.type === 'subtitle' || block.type === 'body') {
                            const editorContainer = document.getElementById(`${block.id}_editor`);
                            if (editorContainer) {
                                initQuillEditor(editorContainer.id, undefined, block.content || '', { trackPageDirty: true });
                            }
                        } else if (block.type === 'media' && block.mediaId) {
                            // Load media content for media blocks
                            setTimeout(async () => {
                                let uid = window.CMS_EFFECTIVE_USER_ID;
                                if (!uid) {
                                    const { getCurrentUser } = await import('./auth.js');
                                    const cu = getCurrentUser();
                                    uid = cu ? cu.uid : null;
                                }
                                if (uid) {
                                    await loadMediaIntoBlock(block.id, block.mediaId, uid, block.mediaSettings || block.slideshowSettings || null);
                                }
                            }, 50);
                        }
                    });
                } else {
                    // Initialize single block
                    const blockElement = document.querySelector(`[data-block-id="${item.id}"]`);
                    if (blockElement) {
                        wireBlogBlockDrag(blockElement);
                    }
                    
                    if (item.blockType === 'subtitle' || item.blockType === 'body') {
                        const editorContainer = document.getElementById(`${item.id}_editor`);
                        if (editorContainer) {
                            initQuillEditor(editorContainer.id, undefined, item.content || '', { trackPageDirty: true });
                        }
                    } else if (item.blockType === 'media' && item.mediaId) {
                        // Load media content for media blocks
                        setTimeout(async () => {
                            let uid = window.CMS_EFFECTIVE_USER_ID;
                            if (!uid) {
                                const { getCurrentUser } = await import('./auth.js');
                                const cu = getCurrentUser();
                                uid = cu ? cu.uid : null;
                            }
                            if (uid) {
                                await loadMediaIntoBlock(item.id, item.mediaId, uid, item.mediaSettings || item.slideshowSettings || null);
                            }
                        }, 50);
                    }
                }
            });
        });
    }
    
    // Initialize drag and drop functionality
    setTimeout(() => {
        // Use timeout to ensure DOM is fully rendered
        initializeBlogDragAndDrop();
    }, 100);
}

// --- BLOG SECTION AND BLOCK CREATION ---
export function createBlogSectionHtml(sectionId, items = [], sectionIndex = null) {
    const itemsHtml = items.map(item => {
        if (item.type === 'column-group') {
            const normalizedColumnGroup = normalizeColumnGroupItem(item);
            return createColumnGroupHtml(item.id, normalizedColumnGroup.columns);
        } else {
            // Single block
            return createBlogBlockHtml(
                item.id,
                item.blockType || item.type,
                item.content,
                item.mediaId,
                item.layout,
                item.layoutRatio,
                item.mediaSettings || item.slideshowSettings || null
            );
        }
    }).join('');

    // Assign special ids for the first five sections
    let anchorId = '';
    if (sectionIndex === 0) anchorId = 'design';
    if (sectionIndex === 1) anchorId = 'photography';
    if (sectionIndex === 2) anchorId = 'videography';
    if (sectionIndex === 3) anchorId = 'computation';
    if (sectionIndex === 4) anchorId = 'research';

    return `
        <div class="blog-section" data-section-id="${sectionId}"${anchorId ? ` id="${anchorId}"` : ''}>
            <div class="section-header">
                <div class="section-controls">
                    <button class="btn btn-sm btn-secondary add-block-btn">+ Add Block</button>
                    <button class="btn btn-sm btn-primary add-column-group-btn">+ Add Column Group</button>
                    <button class="btn btn-sm btn-danger remove-section-btn">Remove Section</button>
                    <button class="btn btn-sm move-section-up-btn">↑</button>
                    <button class="btn btn-sm move-section-down-btn">↓</button>
                </div>
            </div>
            <div class="section-blocks">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function sanitizeMediaBlockLinkValue(value) {
    if (typeof value === 'string') return value.trim();
    if (value && typeof value.url === 'string') return value.url.trim();
    return '';
}

function isValidMediaBlockLinkValue(value) {
    const trimmedValue = sanitizeMediaBlockLinkValue(value);
    if (!trimmedValue) return true;
    if (/^\s*javascript:/i.test(trimmedValue)) return false;

    try {
        const parsedUrl = new URL(trimmedValue, window.location.origin);
        const hasExplicitProtocol = /^[a-z][a-z0-9+.-]*:/i.test(trimmedValue);

        if (!hasExplicitProtocol) return true;

        return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsedUrl.protocol);
    } catch (_) {
        return false;
    }
}

const GALLERY_COLS_MIN = 1;
const GALLERY_COLS_MAX = 6;

const MEDIA_ASPECT_PRESET_KEYS = ['9:16', '2:3', '3:4', '4:5', '1:1', '5:4', '4:3', '3:2', '16:9'];

function clampPositiveAspectInt(value, fallback = 0, max = 10000) {
    const n = Math.round(Number(value));
    if (!Number.isFinite(n) || n < 1) return fallback;
    return Math.min(max, n);
}

/** Normalizes aspect ratio fields for storage (null = default / legacy). */
export function normalizeAspectRatioFields(settings = {}) {
    const ar = settings && settings.aspectRatio;
    if (ar === undefined || ar === null || ar === '' || ar === 'default') {
        return { aspectRatio: null, aspectRatioCustom: null };
    }
    if (ar === 'custom') {
        const c = (settings && settings.aspectRatioCustom) || {};
        const w = clampPositiveAspectInt(c.w ?? c.width, 0);
        const h = clampPositiveAspectInt(c.h ?? c.height, 0);
        if (!w || !h) return { aspectRatio: null, aspectRatioCustom: null };
        return { aspectRatio: 'custom', aspectRatioCustom: { w, h } };
    }
    const key = String(ar);
    if (MEDIA_ASPECT_PRESET_KEYS.includes(key)) {
        return { aspectRatio: key, aspectRatioCustom: null };
    }
    return { aspectRatio: null, aspectRatioCustom: null };
}

function fileHasVisualMediaForAspect(file) {
    if (!file || !file.url) return false;
    const t = String(file.type || '').toLowerCase();
    return t.startsWith('image/') || t.startsWith('video/');
}

function clampGalleryColumnCount(value, fallback) {
    const n = Math.round(Number(value));
    if (!Number.isFinite(n)) return fallback;
    return Math.min(GALLERY_COLS_MAX, Math.max(GALLERY_COLS_MIN, n));
}

function sanitizeVideoPosterUrl(url) {
    if (url == null || url === '') return '';
    const s = String(url).trim();
    return s;
}

export function normalizeMediaBlockSettings(settings = {}, fileCount = 0) {
    const arFields = normalizeAspectRatioFields(settings || {});

    const normalized = {
        showCaptions: !!(settings && settings.showCaptions),
        clickAction: settings && settings.clickAction === 'link' ? 'link' : 'preview',
        openLinksInNewTab: !!(settings && settings.openLinksInNewTab),
        imageLinks: [],
        aspectRatio: arFields.aspectRatio,
        aspectRatioCustom: arFields.aspectRatioCustom,
        videoPosterUrl: sanitizeVideoPosterUrl(settings && settings.videoPosterUrl)
    };

    let gmin = clampGalleryColumnCount(settings && settings.galleryMinColumns, GALLERY_COLS_MIN);
    let gmax = clampGalleryColumnCount(settings && settings.galleryMaxColumns, 3);
    if (gmin > gmax) {
        const t = gmin;
        gmin = gmax;
        gmax = t;
    }
    normalized.galleryMinColumns = gmin;
    normalized.galleryMaxColumns = gmax;

    const rawLinks = Array.isArray(settings && settings.imageLinks) ? settings.imageLinks : [];
    const linkCount = Math.max(Number(fileCount) || 0, rawLinks.length);

    for (let i = 0; i < linkCount; i += 1) {
        normalized.imageLinks.push(sanitizeMediaBlockLinkValue(rawLinks[i]));
    }

    if (fileCount > 0) {
        normalized.imageLinks = normalized.imageLinks.slice(0, fileCount);
    }

    return normalized;
}

/** Keeps min/max column sliders consistent (min ≤ max) and updates value labels. */
export function syncGalleryColumnSliders(changedInput) {
    if (!changedInput) return;
    const panel = changedInput.closest('.media-block-settings-panel');
    if (!panel) return;
    const minEl = panel.querySelector('.media-gallery-min-cols');
    const maxEl = panel.querySelector('.media-gallery-max-cols');
    const minLabel = panel.querySelector('[data-gallery-cols-min-value]');
    const maxLabel = panel.querySelector('[data-gallery-cols-max-value]');
    if (!minEl || !maxEl) return;
    let minV = clampGalleryColumnCount(minEl.value, GALLERY_COLS_MIN);
    let maxV = clampGalleryColumnCount(maxEl.value, 3);
    if (changedInput === minEl && minV > maxV) {
        maxEl.value = String(minV);
        maxV = minV;
    } else if (changedInput === maxEl && maxV < minV) {
        minEl.value = String(maxV);
        minV = maxV;
    } else {
        minEl.value = String(minV);
        maxEl.value = String(maxV);
    }
    if (minLabel) minLabel.textContent = String(minV);
    if (maxLabel) maxLabel.textContent = String(maxV);
    minEl.setAttribute('aria-valuenow', String(minV));
    maxEl.setAttribute('aria-valuenow', String(maxV));
}

function aspectPreviewShapeHtml(val) {
    if (val === 'default') {
        return '<span class="media-aspect-preview-shape media-aspect-preview-shape--default" aria-hidden="true"></span>';
    }
    if (val === 'custom') {
        return '<span class="media-aspect-preview-shape media-aspect-preview-shape--custom" aria-hidden="true"><span class="media-aspect-preview-custom-icon">W∶H</span></span>';
    }
    const ratioMap = {
        '9:16': '9 / 16',
        '2:3': '2 / 3',
        '3:4': '3 / 4',
        '4:5': '4 / 5',
        '1:1': '1 / 1',
        '5:4': '5 / 4',
        '4:3': '4 / 3',
        '3:2': '3 / 2',
        '16:9': '16 / 9'
    };
    const cssRatio = ratioMap[val];
    if (!cssRatio) {
        return '<span class="media-aspect-preview-shape media-aspect-preview-shape--default" aria-hidden="true"></span>';
    }
    const parts = val.split(':');
    const wNum = Number(parts[0]);
    const hNum = Number(parts[1]);
    if (!Number.isFinite(wNum) || !Number.isFinite(hNum) || wNum <= 0 || hNum <= 0) {
        return '<span class="media-aspect-preview-shape media-aspect-preview-shape--default" aria-hidden="true"></span>';
    }
    const wide = wNum >= hNum;
    const maxPreviewW = 46;
    const maxPreviewH = 48;
    let wPx;
    let hPx;
    if (wide) {
        wPx = maxPreviewW;
        hPx = Math.max(1, Math.round((maxPreviewW * hNum) / wNum));
    } else {
        hPx = maxPreviewH;
        wPx = Math.max(1, Math.round((maxPreviewH * wNum) / hNum));
    }
    const style = `width:${wPx}px;height:${hPx}px;aspect-ratio:${cssRatio};flex-shrink:0;`;
    return `<span class="media-aspect-preview-shape" style="${style}" aria-hidden="true"></span>`;
}

function createMediaAspectRatioSectionHtml(blockId, normalizedSettings) {
    const aspectId = `${blockId}_aspectRatio`;
    const radioName = `${blockId}_aspectRatioRadios`;
    const customWId = `${blockId}_aspectCustomW`;
    const customHId = `${blockId}_aspectCustomH`;
    const ar = normalizedSettings.aspectRatio;
    const custom = normalizedSettings.aspectRatioCustom;
    const isCustom = ar === 'custom';
    const selValue = ar == null ? 'default' : ar;
    const cw = isCustom && custom && custom.w ? String(custom.w) : '16';
    const ch = isCustom && custom && custom.h ? String(custom.h) : '9';

    const presetOptions = [
        ['default', 'Default'],
        ['9:16', '9:16'],
        ['2:3', '2:3'],
        ['3:4', '3:4'],
        ['4:5', '4:5'],
        ['1:1', '1:1'],
        ['5:4', '5:4'],
        ['4:3', '4:3'],
        ['3:2', '3:2'],
        ['16:9', '16:9'],
        ['custom', 'Custom']
    ];

    const gridHtml = presetOptions.map(([val, label]) => {
        const inputId = `${aspectId}_opt_${val.replace(/:/g, '_')}`;
        const checked = selValue === val ? 'checked' : '';
        return `
                <label class="media-aspect-option" for="${inputId}">
                    <input
                        type="radio"
                        id="${inputId}"
                        name="${radioName}"
                        class="media-aspect-ratio-input"
                        value="${val}"
                        ${checked}
                    >
                    <span class="media-aspect-option-card">
                        <span class="media-aspect-preview-frame">
                            ${aspectPreviewShapeHtml(val)}
                        </span>
                        <span class="media-aspect-option-text">${escapeHTML(label)}</span>
                    </span>
                </label>`;
    }).join('');

    return `
            <div class="media-block-settings-header">
                <h4>Media aspect ratio</h4>
                <p>Applies to images and video in the on-page grid. Default keeps the existing look (including gallery thumbnails). Lightbox stays full-frame.</p>
            </div>
            <div class="media-block-field media-block-field--full media-aspect-ratio-field">
                <p class="media-field-label" id="${aspectId}_label">Aspect ratio</p>
                <div class="media-aspect-ratio-grid" role="radiogroup" aria-labelledby="${aspectId}_label">
                    ${gridHtml}
                </div>
            </div>
            <div class="media-aspect-custom-row ${isCustom ? '' : 'is-hidden'}">
                <div class="media-aspect-custom-inputs">
                    <label class="media-field-label" for="${customWId}">Width</label>
                    <input type="number" id="${customWId}" class="media-aspect-custom-w" min="1" max="10000" step="1" value="${escapeHTML(cw)}" inputmode="numeric">
                    <span class="media-aspect-custom-sep" aria-hidden="true">∶</span>
                    <label class="media-field-label" for="${customHId}">Height</label>
                    <input type="number" id="${customHId}" class="media-aspect-custom-h" min="1" max="10000" step="1" value="${escapeHTML(ch)}" inputmode="numeric">
                </div>
                <p class="media-setting-hint">Enter any positive whole numbers (e.g. 21 and 9).</p>
            </div>
    `;
}

function createMediaBlockVideoPosterSectionHtml(blockId, normalizedSettings) {
    const posterUrl = normalizedSettings.videoPosterUrl || '';
    const hiddenId = `${blockId}_videoPosterUrl`;
    const hasPoster = !!String(posterUrl).trim();
    const previewOrPlaceholder = hasPoster
        ? `
            <div class="poster-image-preview media-block-video-poster-preview">
                <img src="${escapeHTML(posterUrl)}" alt="" style="max-width: 200px; max-height: 100px; object-fit: cover;">
            </div>
            <button type="button" class="btn btn-sm btn-secondary select-media-block-video-poster-btn">Change poster</button>
            <button type="button" class="btn btn-sm btn-secondary clear-media-block-video-poster-btn">Remove poster</button>
        `
        : `
            <div class="poster-image-placeholder">No poster — a still image before playback (optional).</div>
            <button type="button" class="btn btn-sm btn-primary select-media-block-video-poster-btn">Select poster image</button>
        `;
    return `
            <div class="media-block-video-poster-field">
                <div class="media-block-settings-header">
                    <h4>Video poster</h4>
                    <p>Shown before the video loads (e.g. home grid, mobile). Pick an image from your library.</p>
                </div>
                <input type="hidden" id="${hiddenId}" class="media-block-video-poster-url" value="${escapeHTML(posterUrl)}">
                ${previewOrPlaceholder}
            </div>
    `;
}

function createMediaBlockSettingsHtml(blockId, mediaItem, mediaSettings = null) {
    const files = Array.isArray(mediaItem && mediaItem.files) ? mediaItem.files : [];
    const isPhotoGallery = mediaItem && mediaItem.mediaType === 'photoGallery';
    const imageFiles = files
        .map((file, index) => ({ file, index }))
        .filter(({ file }) => file && file.type && file.type.startsWith('image/'));

    const hasVisual = files.some((f) => fileHasVisualMediaForAspect(f));
    if (!hasVisual) {
        return '';
    }

    const normalizedSettings = normalizeMediaBlockSettings(mediaSettings, files.length);
    const showSlideshow = isPhotoGallery && files.length > 1 && imageFiles.length;

    const aspectSectionHtml = createMediaAspectRatioSectionHtml(blockId, normalizedSettings);
    const firstFile = files[0];
    const isSingleNonGalleryVideo = !!(
        firstFile &&
        firstFile.type &&
        firstFile.type.startsWith('video/') &&
        !isPhotoGallery
    );
    const videoPosterSectionHtml = isSingleNonGalleryVideo
        ? createMediaBlockVideoPosterSectionHtml(blockId, normalizedSettings)
        : '';

    if (!showSlideshow) {
        return `
        <div class="media-block-settings-panel" data-block-id="${blockId}">
            <div class="media-block-settings-stack">
                ${videoPosterSectionHtml}
                ${aspectSectionHtml}
            </div>
        </div>
    `;
    }

    const linkModeActive = normalizedSettings.clickAction === 'link';

    const showCaptionsId = `${blockId}_showCaptions`;
    const openLinksTabId = `${blockId}_openLinksNewTab`;
    const clickActionId = `${blockId}_clickAction`;
    const galleryMinColsId = `${blockId}_galleryMinCols`;
    const galleryMaxColsId = `${blockId}_galleryMaxCols`;
    const gmin = normalizedSettings.galleryMinColumns;
    const gmax = normalizedSettings.galleryMaxColumns;

    return `
        <div class="media-block-settings-panel" data-block-id="${blockId}">
            <div class="media-block-settings-stack">
                ${aspectSectionHtml}

                <div class="media-block-settings-header media-block-settings-header--slideshow">
                    <h4>Slideshow</h4>
                    <p>These options apply to this gallery on the live work page.</p>
                </div>

                <div class="media-gallery-cols-section">
                    <p class="media-gallery-cols-hint">Min applies on small screens, max on large; tablet uses a value between them.</p>
                    <div class="media-gallery-cols-row">
                        <label class="media-gallery-cols-label" for="${galleryMinColsId}">
                            Min: <span data-gallery-cols-min-value>${gmin}</span>
                        </label>
                        <input
                            type="range"
                            id="${galleryMinColsId}"
                            class="media-gallery-min-cols media-gallery-cols-range"
                            min="${GALLERY_COLS_MIN}"
                            max="${GALLERY_COLS_MAX}"
                            step="1"
                            value="${gmin}"
                            aria-valuemin="${GALLERY_COLS_MIN}"
                            aria-valuemax="${GALLERY_COLS_MAX}"
                            aria-valuenow="${gmin}"
                        >
                    </div>
                    <div class="media-gallery-cols-row">
                        <label class="media-gallery-cols-label" for="${galleryMaxColsId}">
                            Max: <span data-gallery-cols-max-value>${gmax}</span>
                        </label>
                        <input
                            type="range"
                            id="${galleryMaxColsId}"
                            class="media-gallery-max-cols media-gallery-cols-range"
                            min="${GALLERY_COLS_MIN}"
                            max="${GALLERY_COLS_MAX}"
                            step="1"
                            value="${gmax}"
                            aria-valuemin="${GALLERY_COLS_MIN}"
                            aria-valuemax="${GALLERY_COLS_MAX}"
                            aria-valuenow="${gmax}"
                        >
                    </div>
                </div>

                <div class="media-setting-toggle-row">
                    <div class="media-setting-toggle-row__copy">
                        <span class="media-setting-label" id="${showCaptionsId}_label">Caption below each image</span>
                        <span class="media-setting-hint">Text comes from each file’s caption in Media.</span>
                    </div>
                    <label class="media-switch" for="${showCaptionsId}">
                        <input
                            type="checkbox"
                            id="${showCaptionsId}"
                            class="media-show-captions-toggle media-switch__input"
                            aria-labelledby="${showCaptionsId}_label"
                            ${normalizedSettings.showCaptions ? 'checked' : ''}
                        >
                        <span class="media-switch__track" aria-hidden="true"></span>
                        <span class="media-switch__state" aria-hidden="true">
                            <span class="media-switch__off">Off</span>
                            <span class="media-switch__on">On</span>
                        </span>
                    </label>
                </div>

                <div class="media-block-field media-block-field--full">
                    <label class="media-field-label" for="${clickActionId}">When someone clicks an image</label>
                    <select id="${clickActionId}" class="media-click-action-select">
                        <option value="preview" ${normalizedSettings.clickAction === 'preview' ? 'selected' : ''}>Open lightbox (full-screen slideshow)</option>
                        <option value="link" ${normalizedSettings.clickAction === 'link' ? 'selected' : ''}>Open a link (set a URL per image below)</option>
                    </select>
                </div>

                <div class="media-setting-toggle-row media-open-links-row ${linkModeActive ? '' : 'is-hidden'}">
                    <div class="media-setting-toggle-row__copy">
                        <span class="media-setting-label" id="${openLinksTabId}_label">Open links in a new tab</span>
                        <span class="media-setting-hint">Only applies when images use links.</span>
                    </div>
                    <label class="media-switch" for="${openLinksTabId}">
                        <input
                            type="checkbox"
                            id="${openLinksTabId}"
                            class="media-open-links-toggle media-switch__input"
                            aria-labelledby="${openLinksTabId}_label"
                            ${normalizedSettings.openLinksInNewTab ? 'checked' : ''}
                        >
                        <span class="media-switch__track" aria-hidden="true"></span>
                        <span class="media-switch__state" aria-hidden="true">
                            <span class="media-switch__off">Off</span>
                            <span class="media-switch__on">On</span>
                        </span>
                    </label>
                </div>
            </div>

            <div class="media-link-settings ${linkModeActive ? '' : 'is-hidden'}">
                <div class="media-link-settings-header">
                    <strong>Link per image</strong>
                    <span>Leave blank so that image stays non-clickable.</span>
                </div>
                <div class="media-link-list">
                    ${imageFiles.map(({ file, index }, imageNumber) => `
                        <label class="media-link-item">
                            <span class="media-link-item-label">Image ${imageNumber + 1}</span>
                            <span class="media-link-item-caption">${escapeHTML(file.caption || 'No caption set')}</span>
                            <input
                                type="text"
                                class="media-link-input"
                                data-file-index="${index}"
                                value="${escapeHTML(normalizedSettings.imageLinks[index] || '')}"
                                placeholder="/page-path or https://example.com/page"
                                autocomplete="off"
                            >
                            <span class="media-link-validation-message"></span>
                        </label>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

export function collectMediaBlockSettings(blockEl) {
    if (!blockEl) return null;

    const settingsContainer = blockEl.querySelector('.media-block-settings');
    const fileCount = settingsContainer ? Number(settingsContainer.dataset.fileCount || 0) : 0;
    if (!settingsContainer || !fileCount || !settingsContainer.querySelector('.media-block-settings-panel')) return null;

    const showCaptionsToggle = settingsContainer.querySelector('.media-show-captions-toggle');
    const clickActionSelect = settingsContainer.querySelector('.media-click-action-select');
    const openLinksToggle = settingsContainer.querySelector('.media-open-links-toggle');
    const linkInputs = settingsContainer.querySelectorAll('.media-link-input');
    const galleryMinCols = settingsContainer.querySelector('.media-gallery-min-cols');
    const galleryMaxCols = settingsContainer.querySelector('.media-gallery-max-cols');
    const aspectRadio = settingsContainer.querySelector('input.media-aspect-ratio-input:checked');
    const customWInp = settingsContainer.querySelector('.media-aspect-custom-w');
    const customHInp = settingsContainer.querySelector('.media-aspect-custom-h');

    const imageLinks = new Array(fileCount).fill('');
    linkInputs.forEach((input) => {
        const fileIndex = Number(input.dataset.fileIndex);
        if (Number.isNaN(fileIndex) || fileIndex < 0 || fileIndex >= fileCount) return;
        imageLinks[fileIndex] = sanitizeMediaBlockLinkValue(input.value);
    });

    let aspectRatioPayload = null;
    let aspectRatioCustomPayload = undefined;
    if (aspectRadio) {
        const raw = aspectRadio.value;
        if (raw === 'custom') {
            aspectRatioPayload = 'custom';
            aspectRatioCustomPayload = {
                w: clampPositiveAspectInt(customWInp ? customWInp.value : 0, 0),
                h: clampPositiveAspectInt(customHInp ? customHInp.value : 0, 0)
            };
        } else if (raw && raw !== 'default') {
            aspectRatioPayload = raw;
        }
    }

    const videoPosterInput = settingsContainer.querySelector('.media-block-video-poster-url');
    const collectPayload = {
        showCaptions: !!(showCaptionsToggle && showCaptionsToggle.checked),
        clickAction: clickActionSelect ? clickActionSelect.value : 'preview',
        openLinksInNewTab: !!(openLinksToggle && openLinksToggle.checked),
        galleryMinColumns: galleryMinCols ? Number(galleryMinCols.value) : undefined,
        galleryMaxColumns: galleryMaxCols ? Number(galleryMaxCols.value) : undefined,
        imageLinks,
        aspectRatio: aspectRatioPayload,
        aspectRatioCustom: aspectRatioCustomPayload
    };
    if (videoPosterInput) {
        collectPayload.videoPosterUrl = videoPosterInput.value;
    }

    return normalizeMediaBlockSettings(collectPayload, fileCount);
}

export function syncMediaBlockSettingsUi(blockEl) {
    if (!blockEl) return;

    const settingsContainer = blockEl.querySelector('.media-block-settings');
    if (!settingsContainer) return;

    const clickActionSelect = settingsContainer.querySelector('.media-click-action-select');
    const openLinksRow = settingsContainer.querySelector('.media-open-links-row');
    const linkSettings = settingsContainer.querySelector('.media-link-settings');
    const previewItems = blockEl.querySelectorAll('.media-preview-gallery-item');
    const linkInputs = settingsContainer.querySelectorAll('.media-link-input');
    const linkModeActive = !!clickActionSelect && clickActionSelect.value === 'link';

    if (openLinksRow) openLinksRow.classList.toggle('is-hidden', !linkModeActive);
    if (linkSettings) linkSettings.classList.toggle('is-hidden', !linkModeActive);

    linkInputs.forEach((input) => {
        const value = sanitizeMediaBlockLinkValue(input.value);
        const isValid = !linkModeActive || isValidMediaBlockLinkValue(value);
        const message = input.closest('.media-link-item')?.querySelector('.media-link-validation-message');

        input.value = value;
        input.setCustomValidity(isValid ? '' : 'Enter a valid URL or page path.');
        input.classList.toggle('is-invalid', !isValid && !!value);

        if (message) {
            message.textContent = !value || isValid ? '' : 'Enter a valid URL or page path.';
        }
    });

    previewItems.forEach((item) => {
        const fileIndex = Number(item.dataset.fileIndex);
        const input = settingsContainer.querySelector('.media-link-input[data-file-index="' + fileIndex + '"]');
        const linked = !!(linkModeActive && input && sanitizeMediaBlockLinkValue(input.value) && input.checkValidity());
        let badge = item.querySelector('.media-preview-gallery-linked-badge');

        item.classList.toggle('is-linked', linked);

        if (linked) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'media-preview-gallery-badge media-preview-gallery-linked-badge';
                badge.textContent = 'Linked';
                item.appendChild(badge);
            }
        } else if (badge && badge.parentNode) {
            badge.parentNode.removeChild(badge);
        }
    });

    const customRow = settingsContainer.querySelector('.media-aspect-custom-row');
    const customAspectChecked = settingsContainer.querySelector('input.media-aspect-ratio-input[value="custom"]:checked');
    if (customRow) {
        customRow.classList.toggle('is-hidden', !customAspectChecked);
    }
}

export function createBlogBlockHtml(blockId, blockType, content = '', mediaId = null, layout = 'full', layoutRatio = 50, mediaSettings = null) {
    const blockContent = createBlockContentHtml(blockId, blockType, content, mediaId, mediaSettings);
    const layoutClass = layout === 'full' ? 'block-full-width' : 'block-split-layout';
    const layoutStyle = layout !== 'full' ? `style="width: ${layoutRatio}%;"` : '';
    
    const blockHtml = `
        <div class="blog-block ${layoutClass}" data-block-id="${blockId}" data-block-type="${blockType}" data-layout="${layout}" data-layout-ratio="${layoutRatio}" ${layoutStyle}>
            <div class="block-header">
                <div class="block-type-selector">
                    <select class="block-type-select">
                        <option value="subtitle" ${blockType === 'subtitle' ? 'selected' : ''}>Subtitle</option>
                        <option value="body" ${blockType === 'body' ? 'selected' : ''}>Body Text</option>
                        <option value="media" ${blockType === 'media' ? 'selected' : ''}>Media</option>
                        <option value="embed" ${blockType === 'embed' ? 'selected' : ''}>Embed</option>
                    </select>
                </div>
                <div class="block-controls">
                    <button class="btn btn-sm btn-secondary layout-toggle-btn">${layout === 'full' ? 'Split Layout' : 'Full Width'}</button>
                    <button class="btn btn-sm btn-secondary duplicate-block-btn">Duplicate</button>
                    <button class="btn btn-sm btn-danger remove-block-btn">Remove</button>
                    <button class="btn btn-sm move-block-up-btn">↑</button>
                    <button class="btn btn-sm move-block-down-btn">↓</button>
                </div>
            </div>
            <div class="block-content">
                ${blockContent}
            </div>
        </div>
    `;
    
    // If it's a media block with existing media, load the media content after the DOM is updated
    if (blockType === 'media' && mediaId) {
        // Use setTimeout to ensure the DOM is updated before trying to load media
        setTimeout(async () => {
            let uid = window.CMS_EFFECTIVE_USER_ID;
            if (!uid) {
                const { getCurrentUser } = await import('./auth.js');
                const cu = getCurrentUser();
                uid = cu ? cu.uid : null;
            }
            if (uid) {
                await loadMediaIntoBlock(blockId, mediaId, uid, mediaSettings);
            }
        }, 10);
    }
    
    // If it's an embed block, initialize it (with or without existing data)
    if (blockType === 'embed') {
        setTimeout(() => {
            if (content) {
                try {
                    const embedData = typeof content === 'string' ? JSON.parse(content) : content;
                    initializeEmbedBlock(blockId, embedData);
                } catch (e) {
                    console.error('Error initializing embed block:', e);
                    // Still try to initialize with just the URL if parsing fails
                    initializeEmbedBlock(blockId, null);
                }
            } else {
                // Initialize new embed block
                initializeEmbedBlock(blockId, null);
            }
        }, 10);
    }
    
    return blockHtml;
}

export function createColumnGroupHtml(groupId, columnsOrLeftColumn = [], rightColumnBlocks = [], leftRatio = 50, rightRatio = 50) {
    const providedColumns = Array.isArray(columnsOrLeftColumn) &&
        (columnsOrLeftColumn.length === 0 || Object.prototype.hasOwnProperty.call(columnsOrLeftColumn[0], 'blocks'))
        ? columnsOrLeftColumn
        : [
            { id: `${groupId}_left`, width: leftRatio, blocks: Array.isArray(columnsOrLeftColumn) ? columnsOrLeftColumn : [] },
            { id: `${groupId}_right`, width: rightRatio, blocks: Array.isArray(rightColumnBlocks) ? rightColumnBlocks : [] }
        ];
    const normalizedColumns = normalizeColumnWidths(providedColumns.length ? providedColumns : createDefaultColumnGroupColumns(2));
    const columnsHtml = normalizedColumns.map((column, index) =>
        createColumnDropZoneHtml(groupId, column, index, normalizedColumns.length)
    ).join('');

    return `
        <div class="column-group" data-group-id="${groupId}">
            <div class="column-group-header">
                <div class="column-group-controls">
                    <div class="column-group-actions">
                        <button class="btn btn-sm btn-primary add-column-btn" ${normalizedColumns.length >= COLUMN_GROUP_MAX_COLUMNS ? 'disabled' : ''}>+ Add Column</button>
                        <button class="btn btn-sm btn-secondary equalize-columns-btn">Equalize Widths</button>
                        <button class="btn btn-sm btn-danger ungroup-btn">Ungroup</button>
                    </div>
                    <div class="column-group-meta">
                        <span class="ratio-display">${getColumnSummary(normalizedColumns)}</span>
                        <span class="column-group-warning">Multi-column layouts currently render on the JJ work page only.</span>
                    </div>
                </div>
            </div>
            <div class="column-layout">
                ${columnsHtml}
            </div>
        </div>
    `;
}

function createBlockContentHtml(blockId, blockType, content = '', mediaId = null, mediaSettings = null) {
    switch (blockType) {
        case 'subtitle':
            return `
                <div class="block-editor-container" id="${blockId}_editor">
                    <!-- Quill editor will be initialized here -->
                </div>
            `;
        case 'body':
            return `
                <div class="block-editor-container" id="${blockId}_editor">
                    <!-- Quill editor will be initialized here -->
                </div>
            `;
        case 'media':
            if (mediaId) {
                return `
                    <div class="block-media-container" data-media-id="${mediaId}">
                        <div class="media-content-preview" id="media-preview-${blockId}">
                            <div class="media-placeholder">Loading media...</div>
                        </div>
                        <div
                            class="media-block-settings"
                            id="media-settings-${blockId}"
                            data-file-count="${Array.isArray(mediaSettings && mediaSettings.imageLinks) ? mediaSettings.imageLinks.length : 0}"
                        ></div>
                        <button class="btn btn-sm btn-secondary select-media-btn">Change Media</button>
                    </div>
                `;
            } else {
                return `
                    <div class="block-media-container">
                        <div class="media-placeholder">No media selected</div>
                        <div class="media-block-settings" id="media-settings-${blockId}" data-file-count="0"></div>
                        <button class="btn btn-sm btn-primary select-media-btn">Select Media</button>
                    </div>
                `;
            }
        case 'embed':
            return createEmbedBlockContent(blockId, content);
        default:
            return '<div class="block-placeholder">Unknown block type</div>';
    }
}

// --- MEDIA SELECTOR ---
export function showMediaSelector(mediaItems, onSelect) {
    const modalHtml = `
        <div class="media-selector-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Select Media</h3>
                    <button class="modal-close-btn" onclick="this.closest('.media-selector-modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <div class="media-filters">
                        <select id="mediaTypeFilter">
                            <option value="">All Media</option>
                            <option value="photo">Photos</option>
                            <option value="video">Videos</option>
                            <option value="photoGallery">Photo Galleries</option>
                        </select>
                    </div>
                    <div class="media-grid" id="mediaGrid">
                        ${mediaItems.length === 0 ? '<div class="no-media-message">No media items found. Upload media first.</div>' : ''}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.media-selector-modal').remove()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Render media items
    renderMediaGrid(mediaItems);
    
    // Set up event listeners
    const mediaGrid = document.getElementById('mediaGrid');
    const mediaTypeFilter = document.getElementById('mediaTypeFilter');
    
    mediaTypeFilter.addEventListener('change', (e) => {
        const filterType = e.target.value;
        const filteredItems = filterType ? mediaItems.filter(item => item.mediaType === filterType) : mediaItems;
        renderMediaGrid(filteredItems);
    });
    
    mediaGrid.addEventListener('click', (e) => {
        const mediaItem = e.target.closest('.media-item');
        if (mediaItem) {
            const mediaId = mediaItem.dataset.mediaId;
            const selectedMedia = mediaItems.find(item => item.dataID === mediaId);
            if (selectedMedia) {
                onSelect(selectedMedia);
                document.querySelector('.media-selector-modal').remove();
            }
        }
    });
}

function renderMediaGrid(mediaItems) {
    const mediaGrid = document.getElementById('mediaGrid');
    if (!mediaGrid) return;
    
    if (mediaItems.length === 0) {
        mediaGrid.innerHTML = '<div class="no-media-message">No media items found for this filter.</div>';
        return;
    }
    
    const mediaHtml = mediaItems.map(item => {
        const firstFile = item.files && item.files[0];
        const thumbnailUrl = firstFile ? firstFile.url : '';
        const mediaType = item.mediaType || 'unknown';
        const fileCount = item.files ? item.files.length : 0;
        
        // Generate appropriate thumbnail based on media type and file type
        let thumbnailHtml = '';
        if (thumbnailUrl) {
            const isVideo = firstFile.type && firstFile.type.startsWith('video/');
            const isPhotoGallery = mediaType === 'photoGallery';
            
            if (isVideo) {
                thumbnailHtml = `<video src="${thumbnailUrl}" muted class="media-thumbnail-video"></video>`;
            } else if (isPhotoGallery && fileCount > 1) {
                thumbnailHtml = `
                    <div class="media-thumbnail-slideshow">
                        <img src="${thumbnailUrl}" alt="${escapeHTML(item.title)}">
                        <div class="slideshow-indicator">📷 ${fileCount}</div>
                    </div>
                `;
            } else {
                thumbnailHtml = `<img src="${thumbnailUrl}" alt="${escapeHTML(item.title)}">`;
            }
        } else {
            thumbnailHtml = '<div class="no-preview">No Preview</div>';
        }
        
        return `
            <div class="media-item" data-media-id="${item.dataID}">
                <div class="media-thumbnail">
                    ${thumbnailHtml}
                </div>
                <div class="media-info">
                    <div class="media-title">${escapeHTML(item.title || 'Untitled')}</div>
                    <div class="media-type">${mediaType} ${fileCount > 1 ? `(${fileCount} files)` : ''}</div>
                </div>
            </div>
        `;
    }).join('');
    
    mediaGrid.innerHTML = mediaHtml;
}

// Helper function to check if URL is a video
function isVideoUrl(url) {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
}

// Helper function to create appropriate HTML element for featured media
function createFeaturedMediaPreview(mediaUrl) {
    if (!mediaUrl) return '';
    
    if (isVideoUrl(mediaUrl)) {
        return `<video src="${escapeHTML(mediaUrl)}" controls style="max-width: 200px; max-height: 100px; object-fit: cover;"></video>`;
    } else {
        return `<img src="${escapeHTML(mediaUrl)}" alt="Featured Image" style="max-width: 200px; max-height: 100px; object-fit: cover;">`;
    }
}

export function createMediaPreviewHtml(mediaItem, mediaSettings = null) {
    const files = mediaItem.files || [];
    const firstFile = files[0];
    if (!firstFile) return '<div class="media-placeholder">No media preview available</div>';
    
    const mediaType = mediaItem.mediaType || 'unknown';
    const isVideo = firstFile.type && firstFile.type.startsWith('video/');
    const isImage = firstFile.type && firstFile.type.startsWith('image/');
    const isPhotoGallery = mediaType === 'photoGallery';
    const normalizedPreviewSettings = normalizeMediaBlockSettings(mediaSettings, files.length);
    const blockVideoPoster =
        isVideo && !isPhotoGallery ? (normalizedPreviewSettings.videoPosterUrl || '').trim() : '';
    
    let previewHtml = '';
    
    if (isPhotoGallery && files.length > 1) {
        const normalizedSettings = normalizedPreviewSettings;
        const linkModeActive = normalizedSettings.clickAction === 'link';
        previewHtml = `
            <div class="media-preview-gallery">
                <div class="media-preview-gallery-meta">${files.length} items</div>
                <div class="media-preview-gallery-grid">
                ${files.map((file, index) => {
                    const fileIsImage = file.type && file.type.startsWith('image/');
                    const fileIsVideo = file.type && file.type.startsWith('video/');
                    const hasLinkedUrl = !!(
                        linkModeActive &&
                        fileIsImage &&
                        normalizedSettings.imageLinks[index] &&
                        isValidMediaBlockLinkValue(normalizedSettings.imageLinks[index])
                    );
                    
                    if (fileIsImage) {
                        return `
                            <div class="media-preview-gallery-item ${hasLinkedUrl ? 'is-linked' : ''}" data-file-index="${index}">
                                <img src="${file.url}" alt="${escapeHTML(file.caption || mediaItem.title)}" class="media-preview-gallery-image">
                                ${hasLinkedUrl ? '<span class="media-preview-gallery-badge media-preview-gallery-linked-badge">Linked</span>' : ''}
                            </div>
                        `;
                    } else if (fileIsVideo) {
                        return `
                            <div class="media-preview-gallery-item media-preview-gallery-item-video" data-file-index="${index}">
                                <video src="${file.url}" class="media-preview-gallery-image" muted playsinline preload="metadata"></video>
                                <span class="media-preview-gallery-badge">Video</span>
                            </div>
                        `;
                    } else {
                        return `
                            <div class="media-preview-gallery-item media-preview-gallery-item-unsupported" data-file-index="${index}">
                                <div class="media-placeholder">Unsupported file type</div>
                            </div>
                        `;
                    }
                }).join('')}
                </div>
            </div>
        `;
    } else if (isVideo) {
        const posterAttr = blockVideoPoster ? ` poster="${escapeHTML(blockVideoPoster)}"` : '';
        previewHtml = `<video src="${firstFile.url}"${posterAttr} controls class="media-preview-video"></video>`;
    } else if (isImage) {
        previewHtml = `<img src="${firstFile.url}" alt="${escapeHTML(firstFile.caption || mediaItem.title)}" class="media-preview-img">`;
    } else {
        previewHtml = `<div class="media-placeholder">Preview not available</div>`;
    }
    
    return `
        <div class="media-preview" data-media-id="${mediaItem.dataID}">
            ${previewHtml}
            <div class="media-caption">${escapeHTML(mediaItem.title || 'Untitled')}</div>
        </div>
    `;
}

// Function to update image info for existing images
window.updateExistingImageInfo = function(imgElement, fileIndex) {
    const imageInfoDiv = document.getElementById(`existingImageInfo_${fileIndex}`);
    if (imageInfoDiv && imgElement.complete) {
        const { naturalWidth, naturalHeight } = imgElement;
        // Get file size from existing data if available
        const previewItem = imgElement.closest('.media-preview-item');
        const storagePathAttr = previewItem?.dataset.storagePath;
        
        // For existing images, we don't have the original file size readily available
        // But we can show dimensions
        const specsElement = imageInfoDiv.querySelector('.image-specs');
        if (specsElement) {
            specsElement.textContent = `${naturalWidth} × ${naturalHeight}`;
        }
    }
};

// Function to load media content into a media block
export async function loadMediaIntoBlock(blockId, mediaId, currentUserID, mediaSettings = null) {
    const previewContainer = document.getElementById(`media-preview-${blockId}`);
    const settingsContainer = document.getElementById(`media-settings-${blockId}`);
    if (!previewContainer) return;
    
    try {
        // Import Firebase functions
        const { getItemById } = await import('./firestoreService.js');
        
        // Fetch media data
        const docSnap = await getItemById(currentUserID, mediaId);
        if (docSnap.exists) {
            const mediaData = docSnap.data();
            const mediaItem = {
                dataID: mediaId,
                ...mediaData
            };
            const mediaPreviewHtml = createMediaPreviewHtml(mediaItem, mediaSettings);
            previewContainer.innerHTML = mediaPreviewHtml;
            if (settingsContainer) {
                settingsContainer.dataset.fileCount = Array.isArray(mediaItem.files) ? String(mediaItem.files.length) : '0';
                settingsContainer.innerHTML = createMediaBlockSettingsHtml(blockId, mediaItem, mediaSettings);
            }
            syncMediaBlockSettingsUi(document.querySelector(`[data-block-id="${blockId}"]`));
        } else {
            previewContainer.innerHTML = '<div class="media-placeholder">Media not found</div>';
            if (settingsContainer) {
                settingsContainer.dataset.fileCount = '0';
                settingsContainer.innerHTML = '';
            }
        }
    } catch (error) {
        console.error('Error loading media into block:', error);
        previewContainer.innerHTML = '<div class="media-placeholder">Error loading media</div>';
        if (settingsContainer) {
            settingsContainer.dataset.fileCount = '0';
            settingsContainer.innerHTML = '';
        }
    }
}

export function updateBlockLayoutDisplay(blockEl, layout) {
    blockEl.classList.remove('block-full-width', 'block-split-layout');
    blockEl.classList.add(layout === 'full' ? 'block-full-width' : 'block-split-layout');
    
    if (layout === 'full') {
        blockEl.style.width = '';
    } else {
        const layoutRatio = blockEl.dataset.layoutRatio || '50';
        blockEl.style.width = `${layoutRatio}%`;
    }
}

/** True when pointerdown target should not start a blog section/block HTML5 drag (sliders, Quill, form controls, etc.). */
export function isBlogReorderInteractionSuppressed(el) {
    if (!el) return false;
    const node = el.nodeType === Node.TEXT_NODE ? el.parentElement : el;
    if (!node || !node.closest) return false;
    if (node.closest('.ql-editor, .ql-toolbar, .ql-container, .ql-picker, .ql-picker-options, .ql-tooltip, .ql-bubble')) {
        return true;
    }
    if (node.closest('[contenteditable="true"]')) return true;
    if (node.closest('button, input, textarea, select, option, label, fieldset, legend, datalist, output')) {
        return true;
    }
    if (node.closest('a[href]')) return true;
    if (node.closest('.media-previews--reorderable, .media-preview-drag-handle')) return true;
    return false;
}

const blogReorderSuppressNextDrag = new WeakMap();

function clearBlogReorderSuppressFlag(draggableEl) {
    blogReorderSuppressNextDrag.delete(draggableEl);
}

export function wireBlogSectionDrag(sectionElement) {
    if (!sectionElement) return;
    sectionElement.draggable = true;
    sectionElement.addEventListener('pointerdown', (e) => {
        blogReorderSuppressNextDrag.set(sectionElement, isBlogReorderInteractionSuppressed(e.target));
    }, true);
    sectionElement.addEventListener('dragstart', (e) => {
        if (blogReorderSuppressNextDrag.get(sectionElement)) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text/plain', sectionElement.dataset.sectionId);
        e.dataTransfer.effectAllowed = 'move';
        sectionElement.classList.add('dragging');
    });
    sectionElement.addEventListener('dragend', () => {
        clearBlogReorderSuppressFlag(sectionElement);
        sectionElement.classList.remove('dragging');
    });
    sectionElement.addEventListener('pointerup', () => clearBlogReorderSuppressFlag(sectionElement));
    sectionElement.addEventListener('pointercancel', () => clearBlogReorderSuppressFlag(sectionElement));
}

export function wireBlogBlockDrag(blockElement) {
    if (!blockElement) return;
    blockElement.draggable = true;
    blockElement.addEventListener('pointerdown', (e) => {
        blogReorderSuppressNextDrag.set(blockElement, isBlogReorderInteractionSuppressed(e.target));
    }, true);
    blockElement.addEventListener('dragstart', (e) => {
        if (blogReorderSuppressNextDrag.get(blockElement)) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text/plain', blockElement.dataset.blockId);
        e.dataTransfer.effectAllowed = 'move';
        blockElement.classList.add('dragging');
    });
    blockElement.addEventListener('dragend', () => {
        clearBlogReorderSuppressFlag(blockElement);
        blockElement.classList.remove('dragging');
    });
    blockElement.addEventListener('pointerup', () => clearBlogReorderSuppressFlag(blockElement));
    blockElement.addEventListener('pointercancel', () => clearBlogReorderSuppressFlag(blockElement));
}

// --- DRAG AND DROP FUNCTIONALITY ---
function initializeBlogDragAndDrop() {
    const sectionsContainer = document.getElementById('blogSectionsContainer');
    if (!sectionsContainer) return;

    // Handle section and block dragging
    sectionsContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        // Handle section reordering
        const draggingSection = sectionsContainer.querySelector('.blog-section.dragging');
        if (draggingSection) {
            const afterElement = getDragAfterElementForSections(sectionsContainer, e.clientY);
            if (afterElement == null) {
                sectionsContainer.appendChild(draggingSection);
            } else {
                sectionsContainer.insertBefore(draggingSection, afterElement);
            }
        }
        
        // Handle block reordering within sections (but not inside column groups)
        const draggingBlock = document.querySelector('.blog-block.dragging');
        if (draggingBlock && !e.target.closest('.column-group')) {
            const sectionBlocks = e.target.closest('.section-blocks');
            if (sectionBlocks) {
                const afterElement = getDragAfterElement(sectionBlocks, e.clientY);
                if (afterElement == null) {
                    sectionBlocks.appendChild(draggingBlock);
                } else {
                    sectionBlocks.insertBefore(draggingBlock, afterElement);
                }
            }
        }
    });

    sectionsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        // Cleanup any drag states
        document.querySelectorAll('.dragging').forEach(el => {
            el.classList.remove('dragging');
        });
        document.dispatchEvent(new CustomEvent('cms-page-editor-dirty'));
    });
}

export function initializeColumnGroupDragDrop(columnGroup) {
    const columns = columnGroup ? [...columnGroup.querySelectorAll('.column-drop-zone')] : [];

    columns.forEach(column => {
        if (column.dataset.dragDropInitialized === 'true') {
            return;
        }

        column.dataset.dragDropInitialized = 'true';
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';
            
            // Show drop indicator
            const dropIndicator = column.querySelector('.column-drop-indicator');
            if (dropIndicator) {
                dropIndicator.style.display = 'block';
            }
            
            // Handle block reordering within column
            const draggingBlock = document.querySelector('.blog-block.dragging');
            if (draggingBlock) {
                const columnContent = column.querySelector('.column-content');
                if (columnContent) {
                    const afterElement = getDragAfterElementForColumn(columnContent, e.clientY);
                    if (afterElement == null) {
                        columnContent.appendChild(draggingBlock);
                    } else {
                        columnContent.insertBefore(draggingBlock, afterElement);
                    }
                }
            }
        });
        
        column.addEventListener('dragleave', (e) => {
            // Only hide if we're leaving the column entirely
            if (!column.contains(e.relatedTarget)) {
                const dropIndicator = column.querySelector('.column-drop-indicator');
                if (dropIndicator) {
                    dropIndicator.style.display = 'none';
                }
            }
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Hide drop indicator
            const dropIndicator = column.querySelector('.column-drop-indicator');
            if (dropIndicator) {
                dropIndicator.style.display = 'none';
            }
            document.dispatchEvent(new CustomEvent('cms-page-editor-dirty'));
        });
    });

    refreshColumnGroupUi(columnGroup);
}

function getDragAfterElement(container, y) {
    // Only select direct children blocks and column groups, not nested blocks
    const draggableElements = [...container.querySelectorAll(':scope > .blog-block:not(.dragging), :scope > .column-group:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function getDragAfterElementForSections(container, y) {
    const draggableElements = [...container.querySelectorAll('.blog-section:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function getDragAfterElementForColumn(columnContent, y) {
    // Only select direct children blocks within the column content
    const draggableElements = [...columnContent.querySelectorAll(':scope > .blog-block:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// --- CALENDAR DASHBOARD ---
export function renderCalendarDashboard(dataID, existingData = null) {
    if (!dashboardContentEl) { console.error("Dashboard content element not found!"); return; }
    const title = existingData ? existingData.title : '';
    const isNew = !existingData;
    
    // Get the saved month/year if available
    const savedMonth = existingData && existingData.lastViewedMonth !== undefined ? existingData.lastViewedMonth : null;
    const savedYear = existingData && existingData.lastViewedYear !== undefined ? existingData.lastViewedYear : null;
    
    // Get events if available
    const events = existingData && existingData.events ? existingData.events : [];

    const html = `
        <div class="dashboard-section calendar-dashboard dashboard-with-sidebar">
            <div class="dashboard-main-content">
                <div class="form-group">
                    <label for="calendarTitle">Calendar Title:</label>
                    <input type="text" id="calendarTitle" value="${escapeHTML(title)}" placeholder="Enter calendar title">
                </div>
                <div class="form-group">
                    <label>Data ID:</label>
                    <div class="data-id-display">${escapeHTML(dataID)}</div>
                </div>
                <div class="form-group calendar-container">
                    <div id="calendarPlaceholder" class="calendar-wrapper">
                        <div class="calendar-header">
                            <a href="#" class="today-btn" id="calendarTodayBtn">Today</a>
                            <div class="calendar-nav">
                                <button class="nav-btn" id="prevMonthBtn">&lt;</button>
                                <button class="nav-btn" id="nextMonthBtn">&gt;</button>
                                <span class="current-month" id="currentMonthDisplay">May 2025</span>
                                
                            </div>
                        </div>
                        <div class="calendar-grid" id="calendarGrid">
                            <!-- Weekday headers -->
                            <div class="weekday-header">Mon</div>
                            <div class="weekday-header">Tue</div>
                            <div class="weekday-header">Wed</div>
                            <div class="weekday-header">Thu</div>
                            <div class="weekday-header">Fri</div>
                            <div class="weekday-header">Sat</div>
                            <div class="weekday-header">Sun</div>
                            
                            <!-- Calendar days will be generated by JavaScript -->
                        </div>
                        <div class="calendar-footer">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>Events shown in GMT</div>
                                <div>🌐 <a href="https://1-earth.world" target="_blank">ONE EARTH</a> Calendars</div>
                            </div>
                        </div>
                        
                        <!-- Month/Year dropdown (hidden by default) -->
                        <div class="month-dropdown" id="monthYearDropdown">
                            <div class="year-selector">
                                <button class="year-nav" id="prevYearBtn">&lt;</button>
                                <span id="dropdownYearDisplay">2025</span>
                                <button class="year-nav" id="nextYearBtn">&gt;</button>
                            </div>
                            <div class="month-grid" id="monthGrid">
                                <!-- Month buttons will be generated by JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-sidebar">
                <div class="dashboard-sidebar-header">Page Settings:</div>
                <div id="eventDetailsContainer">
                    <div class="no-event-selected">
                        <p>No event selected. Click on an event to edit details or use "..." to add a new event.</p>
                    </div>
                </div>
                <div class="dashboard-actions">
                    <button id="saveCalendarBtn" class="btn btn-primary">Save Calendar</button>
                    ${!isNew ? `<button id="deleteCalendarBtn" class="btn btn-danger">Delete Calendar</button>` : ''}
                </div>
            </div>
        </div>
    `;
    dashboardContentEl.innerHTML = html;
    
    // Initialize calendar after the HTML is inserted
    initializeCalendar(savedMonth, savedYear, events, dataID);
}

// Calendar functionality
function initializeCalendar(initialMonth = null, initialYear = null, events = [], dataID = null) {
    const today = new Date();
    let currentDate = new Date();
    
    // Use saved month/year if available, otherwise use current date
    let currentViewMonth = initialMonth !== null ? initialMonth : currentDate.getMonth();
    let currentViewYear = initialYear !== null ? initialYear : currentDate.getFullYear();
    
    // Current selected event
    let selectedEvent = null;
    
    // Debounce function for auto-save
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };
    
    // DOM elements
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthDisplay = document.getElementById('currentMonthDisplay');
    const monthYearDropdown = document.getElementById('monthYearDropdown');
    const dropdownYearDisplay = document.getElementById('dropdownYearDisplay');
    const monthGrid = document.getElementById('monthGrid');
    const eventDetailsContainer = document.getElementById('eventDetailsContainer');
    const saveCalendarBtn = document.getElementById('saveCalendarBtn');
    
    // Navigation buttons
    const todayBtn = document.getElementById('calendarTodayBtn');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const prevYearBtn = document.getElementById('prevYearBtn');
    const nextYearBtn = document.getElementById('nextYearBtn');
    
    // Month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Initialize the calendar view
    renderCalendarMonth(currentViewMonth, currentViewYear);
    populateMonthDropdown();
    
    // Event listeners
    if (todayBtn) {
        todayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentViewMonth = today.getMonth();
            currentViewYear = today.getFullYear();
            renderCalendarMonth(currentViewMonth, currentViewYear);
            monthYearDropdown.classList.remove('active');
        });
    }
    
    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentViewMonth--;
            if (currentViewMonth < 0) {
                currentViewMonth = 11;
                currentViewYear--;
            }
            renderCalendarMonth(currentViewMonth, currentViewYear);
        });
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', () => {
            currentViewMonth++;
            if (currentViewMonth > 11) {
                currentViewMonth = 0;
                currentViewYear++;
            }
            renderCalendarMonth(currentViewMonth, currentViewYear);
        });
    }
    
    if (currentMonthDisplay) {
        currentMonthDisplay.addEventListener('click', () => {
            monthYearDropdown.classList.toggle('active');
            dropdownYearDisplay.textContent = currentViewYear;
            highlightCurrentMonth();
        });
    }
    
    if (prevYearBtn) {
        prevYearBtn.addEventListener('click', () => {
            currentViewYear--;
            dropdownYearDisplay.textContent = currentViewYear;
            highlightCurrentMonth();
        });
    }
    
    if (nextYearBtn) {
        nextYearBtn.addEventListener('click', () => {
            currentViewYear++;
            dropdownYearDisplay.textContent = currentViewYear;
            highlightCurrentMonth();
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        // Close month/year dropdown
        if (monthYearDropdown && monthYearDropdown.classList.contains('active')) {
            if (!monthYearDropdown.contains(e.target) && e.target !== currentMonthDisplay) {
                monthYearDropdown.classList.remove('active');
            }
        }
        
        // Close day menus
        const allDayMenus = document.querySelectorAll('.day-dropdown-menu.active');
        allDayMenus.forEach(menu => {
            const menuButton = menu.parentElement.querySelector('.day-menu-button');
            if (!menu.contains(e.target) && e.target !== menuButton) {
                menu.classList.remove('active');
            }
        });
        
        // Close date/time pickers
        const allPickers = document.querySelectorAll('.picker-dropdown.active');
        allPickers.forEach(picker => {
            const pickerInput = picker.parentElement.querySelector('input');
            const pickerToggle = picker.parentElement.querySelector('.picker-toggle');
            if (!picker.contains(e.target) && e.target !== pickerInput && e.target !== pickerToggle) {
                picker.classList.remove('active');
            }
        });
    });
    
    // Auto-save event changes with debounce
    const saveEventChanges = debounce((newEventData) => {
        // Find the event in the array and update it
        const eventIndex = events.findIndex(e => e.id === newEventData.id);
        if (eventIndex !== -1) {
            events[eventIndex] = newEventData;
            renderCalendarMonth(currentViewMonth, currentViewYear); // Refresh calendar to show changes
            
            // Simulate "auto-saving" status - this could be replaced with actual firestore save
            const saveIndicator = document.getElementById('eventSaveIndicator');
            if (saveIndicator) {
                saveIndicator.textContent = 'Saving...';
                setTimeout(() => {
                    saveIndicator.textContent = 'Changes saved';
                    setTimeout(() => {
                        saveIndicator.textContent = '';
                    }, 2000);
                }, 500);
            }
        }
    }, 800);
    
    // Function to render the calendar for a specific month/year
    function renderCalendarMonth(month, year) {
        // Update the month/year display
        if (currentMonthDisplay) {
            currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;
        }
        
        // Clear existing days (keeping the weekday headers)
        while (calendarGrid.children.length > 7) {
            calendarGrid.removeChild(calendarGrid.lastChild);
        }
        
        // Get the first day of the month
        const firstDay = new Date(year, month, 1);
        
        // Get the last day of the month
        const lastDay = new Date(year, month + 1, 0);
        
        // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
        // Convert to Monday as first day (0 = Monday, 6 = Sunday)
        let firstDayOfWeek = firstDay.getDay() - 1;
        if (firstDayOfWeek < 0) firstDayOfWeek = 6;
        
        // Get the number of days in the month
        const daysInMonth = lastDay.getDate();
        
        // Get the number of days from the previous month to display
        const daysFromPrevMonth = firstDayOfWeek;
        
        // Get the last day of the previous month
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        
        // Create days from previous month
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
            const dayNumber = prevMonthLastDay - i;
            const dayDate = new Date(prevYear, prevMonth, dayNumber);
            const dayDateStr = formatDateIso(dayDate);
            const dayEvents = events.filter(event => event.date === dayDateStr);
            const dayDiv = createDayElement(dayNumber, true, false, dayDate, dayEvents);
            calendarGrid.appendChild(dayDiv);
        }
        
        // Create days for current month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDate = new Date(year, month, i);
            const dayDateStr = formatDateIso(dayDate);
            const isToday = isSameDay(dayDate, today);
            const dayEvents = events.filter(event => event.date === dayDateStr);
            const dayDiv = createDayElement(i, false, isToday, dayDate, dayEvents);
            calendarGrid.appendChild(dayDiv);
        }
        
        // Calculate how many days from next month to show to fill the grid
        const totalDaysDisplayed = daysFromPrevMonth + daysInMonth;
        const remainingCells = 7 - (totalDaysDisplayed % 7);
        
        // Create days from next month if needed
        if (remainingCells < 7) {
            const nextMonth = month === 11 ? 0 : month + 1;
            const nextYear = month === 11 ? year + 1 : year;
            for (let i = 1; i <= remainingCells; i++) {
                const dayDate = new Date(nextYear, nextMonth, i);
                const dayDateStr = formatDateIso(dayDate);
                const dayEvents = events.filter(event => event.date === dayDateStr);
                const dayDiv = createDayElement(i, true, false, dayDate, dayEvents);
                calendarGrid.appendChild(dayDiv);
            }
        }
        
        // Update the calendar footer
        const calendarFooter = document.querySelector('.calendar-footer');
        if (calendarFooter) {
            calendarFooter.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>Events shown in GMT</div>
                    <div>🌐 <a href="https://1-earth.world" target="_blank">ONE EARTH</a> Calendars</div>
                </div>
            `;
        }
    }
    
    // Function to create a day element
    function createDayElement(dayNumber, isOtherMonth, isToday, date, dayEvents = []) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        if (isOtherMonth) {
            dayDiv.classList.add('other-month');
        }
        
        if (isToday) {
            dayDiv.classList.add('today');
        }
        
        // Add the day number
        const dayNumberSpan = document.createElement('span');
        dayNumberSpan.className = 'day-number';
        dayNumberSpan.textContent = dayNumber;
        dayDiv.appendChild(dayNumberSpan);
        
        // Sort events by time before adding to the day
        const sortedEvents = [...dayEvents].sort((a, b) => {
            // Handle "All day" events (they should appear first)
            if (a.time === 'All day') return -1;
            if (b.time === 'All day') return 1;
            
            // Extract start time from time range (e.g., "09:00 - 10:00" → "09:00")
            const getStartTime = (timeStr) => {
                const match = timeStr.match(/^(\d{1,2}):(\d{2})/);
                if (!match) return -1; // Invalid format
                
                const hour = parseInt(match[1], 10);
                const minute = parseInt(match[2], 10);
                return hour * 60 + minute; // Convert to minutes for comparison
            };
            
            return getStartTime(a.time) - getStartTime(b.time);
        });
        
        // Add events to the day
        sortedEvents.forEach(event => {
            const eventMarker = document.createElement('div');
            eventMarker.className = `event-marker event-type-${event.type}`;
            eventMarker.textContent = event.title || (event.type === 'blocked' ? 'Blocked' : 'Event');
            eventMarker.dataset.eventId = event.id;
            
            // Add click handler to select the event
            eventMarker.addEventListener('click', (e) => {
                e.stopPropagation();
                selectEvent(event);
            });
            
            dayDiv.appendChild(eventMarker);
        });
        
        // Add the "..." menu button
        const menuButton = document.createElement('div');
        menuButton.className = 'day-menu-button';
        menuButton.textContent = '...';
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close any other open day menus
            document.querySelectorAll('.day-dropdown-menu.active').forEach(menu => {
                if (menu.parentElement !== dayDiv) {
                    menu.classList.remove('active');
                }
            });
            
            // Toggle this day's menu
            const menu = dayDiv.querySelector('.day-dropdown-menu');
            if (menu) {
                menu.classList.toggle('active');
            }
        });
        dayDiv.appendChild(menuButton);
        
        // Create dropdown menu
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'day-dropdown-menu';
        
        // Add menu items
        const addEventItem = document.createElement('div');
        addEventItem.className = 'day-menu-item';
        addEventItem.textContent = 'Add event';
        addEventItem.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
            addEvent(date);
        });
        dropdownMenu.appendChild(addEventItem);
        
        const blockDayItem = document.createElement('div');
        blockDayItem.className = 'day-menu-item';
        blockDayItem.textContent = 'Block out this day';
        blockDayItem.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
            blockDay(date);
        });
        dropdownMenu.appendChild(blockDayItem);
        
        dayDiv.appendChild(dropdownMenu);
        
        return dayDiv;
    }
    
    // Function to add a new event
    function addEvent(date) {
        const dateStr = formatDateIso(date);
        const dateDisplay = formatDateDisplay(date);
        
        // Create a new event object
        const newEvent = {
            id: 'event_' + Date.now(), // Generate a unique ID
            title: 'New Event',
            date: dateStr,
            time: '09:00 - 10:00',
            information: '',
            type: 'event'
        };
        
        // Add to events array
        events.push(newEvent);
        
        // Refresh calendar view
        renderCalendarMonth(currentViewMonth, currentViewYear);
        
        // Select the new event to edit
        selectEvent(newEvent);
    }
    
    // Function to block a day
    function blockDay(date) {
        const dateStr = formatDateIso(date);
        const dateDisplay = formatDateDisplay(date);
        
        // Create a new blocked day event
        const newEvent = {
            id: 'blocked_' + Date.now(), // Generate a unique ID
            title: 'Blocked Day',
            date: dateStr,
            time: 'All day',
            information: 'This day is blocked out',
            type: 'blocked'
        };
        
        // Add to events array
        events.push(newEvent);
        
        // Refresh calendar view
        renderCalendarMonth(currentViewMonth, currentViewYear);
        
        // Select the new event to edit
        selectEvent(newEvent);
    }
    
    // Function to select an event and show its details in the sidebar
    function selectEvent(event) {
        selectedEvent = event;
        
        // Remove highlight from all events
        document.querySelectorAll('.event-marker').forEach(marker => {
            marker.style.boxShadow = '';
        });
        
        // Highlight the selected event
        document.querySelectorAll(`.event-marker[data-event-id="${event.id}"]`).forEach(marker => {
            marker.style.boxShadow = '0 0 0 2px #333';
        });
        
        // Update the sidebar with event details
        if (eventDetailsContainer) {
            const dateObj = event.date ? new Date(event.date) : new Date();
            
            eventDetailsContainer.innerHTML = `
                <div class="event-form">
                    <div class="form-group">
                        <label for="eventTitle">Event Title:</label>
                        <input type="text" id="eventTitle" value="${escapeHTML(event.title || '')}" placeholder="Enter event title">
                    </div>
                    
                    <div class="form-group">
                        <label for="eventDate">Date:</label>
                        <div class="date-time-picker">
                            <input type="text" id="eventDate" value="${formatDateDisplay(dateObj)}" readonly>
                            <span class="picker-toggle">▼</span>
                            <div class="picker-dropdown" id="datePicker">
                                <!-- Date picker will be populated by JS -->
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="eventTime">Time:</label>
                        <div class="date-time-picker">
                            <input type="text" id="eventTime" value="${escapeHTML(event.time || '')}" readonly>
                            <span class="picker-toggle">▼</span>
                            <div class="picker-dropdown" id="timePicker">
                                <div class="time-slots">
                                    <!-- Time slots will be populated by JS -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="eventInfo">Information:</label>
                        <textarea id="eventInfo" placeholder="Enter event details">${escapeHTML(event.information || '')}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <span id="eventSaveIndicator" style="font-size: 0.8rem; color: #777;"></span>
                    </div>
                    
                    <button id="deleteEventBtn" class="delete-event-btn">Delete this event</button>
                </div>
            `;
            
            // Setup date picker toggle
            const dateInput = document.getElementById('eventDate');
            const dateToggle = dateInput.nextElementSibling;
            const datePicker = document.getElementById('datePicker');
            
            if (dateToggle && datePicker) {
                dateToggle.addEventListener('click', () => {
                    datePicker.classList.toggle('active');
                    populateDatePicker(datePicker, new Date(event.date), (newDate) => {
                        const newDateStr = formatDateIso(newDate);
                        dateInput.value = formatDateDisplay(newDate);
                        
                        // Update event
                        event.date = newDateStr;
                        saveEventChanges({...event});
                        
                        // Close picker
                        datePicker.classList.remove('active');
                    });
                });
                
                dateInput.addEventListener('click', () => {
                    dateToggle.click();
                });
            }
            
            // Setup time picker toggle
            const timeInput = document.getElementById('eventTime');
            const timeToggle = timeInput.nextElementSibling;
            const timePicker = document.getElementById('timePicker');
            
            if (timeToggle && timePicker) {
                timeToggle.addEventListener('click', () => {
                    timePicker.classList.toggle('active');
                    populateTimePicker(timePicker, (newTime) => {
                        timeInput.value = newTime;
                        
                        // Update event
                        event.time = newTime;
                        saveEventChanges({...event});
                        
                        // Close picker
                        timePicker.classList.remove('active');
                    });
                });
                
                timeInput.addEventListener('click', () => {
                    timeToggle.click();
                });
            }
            
            // Setup event fields change listeners
            const titleInput = document.getElementById('eventTitle');
            const infoTextarea = document.getElementById('eventInfo');
            
            if (titleInput) {
                titleInput.addEventListener('input', () => {
                    event.title = titleInput.value;
                    saveEventChanges({...event});
                });
            }
            
            if (infoTextarea) {
                infoTextarea.addEventListener('input', () => {
                    event.information = infoTextarea.value;
                    saveEventChanges({...event});
                });
            }
            
            // Setup delete button
            const deleteBtn = document.getElementById('deleteEventBtn');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => {
                    deleteEvent(event.id);
                });
            }
        }
    }
    
    // Function to delete an event
    function deleteEvent(eventId) {
        // Show confirmation popup
        showPopup(
            `Are you sure you want to delete this event? This action cannot be undone.`,
            'confirm',
            () => {
                // Find the event index
                const index = events.findIndex(e => e.id === eventId);
                if (index !== -1) {
                    // Remove from array
                    events.splice(index, 1);
                    
                    // Clear selected event
                    selectedEvent = null;
                    
                    // Show placeholder in sidebar
                    if (eventDetailsContainer) {
                        eventDetailsContainer.innerHTML = `
                            <div class="no-event-selected">
                                <p>No event selected. Click on an event to edit details or use "..." to add a new event.</p>
                            </div>
                        `;
                    }
                    
                    // Refresh calendar
                    renderCalendarMonth(currentViewMonth, currentViewYear);
                }
            }
        );
    }
    
    // Function to populate the date picker
    function populateDatePicker(pickerElement, currentDate, onDateSelect) {
        if (!pickerElement) return;
        
        // Create a calendar-like date picker
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        pickerElement.innerHTML = `
            <div style="text-align: center; margin-bottom: 10px; font-weight: bold;">
                ${monthNames[month]} ${year}
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;">
                <div style="text-align: center; font-size: 0.8rem;">M</div>
                <div style="text-align: center; font-size: 0.8rem;">T</div>
                <div style="text-align: center; font-size: 0.8rem;">W</div>
                <div style="text-align: center; font-size: 0.8rem;">T</div>
                <div style="text-align: center; font-size: 0.8rem;">F</div>
                <div style="text-align: center; font-size: 0.8rem;">S</div>
                <div style="text-align: center; font-size: 0.8rem;">S</div>
            </div>
        `;
        
        const daysGrid = document.createElement('div');
        daysGrid.style.display = 'grid';
        daysGrid.style.gridTemplateColumns = 'repeat(7, 1fr)';
        daysGrid.style.gap = '5px';
        
        // Get first day of month
        const firstDay = new Date(year, month, 1);
        let firstDayOfWeek = firstDay.getDay() - 1;
        if (firstDayOfWeek < 0) firstDayOfWeek = 6;
        
        // Get last day of month
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // Add empty cells for days before the first of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.style.height = '25px';
            daysGrid.appendChild(emptyCell);
        }
        
        // Add days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayBtn = document.createElement('div');
            dayBtn.textContent = i;
            dayBtn.style.height = '25px';
            dayBtn.style.width = '25px';
            dayBtn.style.textAlign = 'center';
            dayBtn.style.cursor = 'pointer';
            dayBtn.style.borderRadius = '50%';
            dayBtn.style.margin = '0 auto';
            dayBtn.style.lineHeight = '25px';
            
            // Highlight current date
            if (i === currentDate.getDate()) {
                dayBtn.style.backgroundColor = '#e6f2ff';
                dayBtn.style.fontWeight = 'bold';
            }
            
            dayBtn.addEventListener('click', () => {
                const newDate = new Date(year, month, i);
                onDateSelect(newDate);
            });
            
            dayBtn.addEventListener('mouseenter', () => {
                dayBtn.style.backgroundColor = '#f0f0f0';
            });
            
            dayBtn.addEventListener('mouseleave', () => {
                if (i === currentDate.getDate()) {
                    dayBtn.style.backgroundColor = '#e6f2ff';
                } else {
                    dayBtn.style.backgroundColor = '';
                }
            });
            
            daysGrid.appendChild(dayBtn);
        }
        
        pickerElement.appendChild(daysGrid);
    }
    
    // Function to populate the time picker
    function populateTimePicker(pickerElement, onTimeSelect) {
        if (!pickerElement) return;
        
        const timeSlots = pickerElement.querySelector('.time-slots');
        if (!timeSlots) return;
        
        timeSlots.innerHTML = '';
        
        // Generate time slots from 6:00 to 23:00
        const startHour = 6;
        const endHour = 23;
        
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let min of ['00', '30']) {
                const time = `${hour}:${min}`;
                const timeDisplay = formatTime(hour, min);
                
                const timeSlot = document.createElement('div');
                timeSlot.className = 'time-slot';
                timeSlot.textContent = timeDisplay;
                timeSlot.addEventListener('click', () => {
                    onTimeSelect(`${timeDisplay} - ${formatTime((hour + 1) % 24, min)}`);
                });
                
                timeSlots.appendChild(timeSlot);
            }
        }
        
        // Add "All day" option
        const allDaySlot = document.createElement('div');
        allDaySlot.className = 'time-slot';
        allDaySlot.textContent = 'All day';
        allDaySlot.style.gridColumn = '1 / -1';
        allDaySlot.style.borderTop = '1px solid #ddd';
        allDaySlot.style.marginTop = '5px';
        allDaySlot.style.paddingTop = '5px';
        allDaySlot.addEventListener('click', () => {
            onTimeSelect('All day');
        });
        
        timeSlots.appendChild(allDaySlot);
    }
    
    // Function to populate the month dropdown
    function populateMonthDropdown() {
        if (!monthGrid) return;
        
        monthGrid.innerHTML = '';
        
        monthNames.forEach((month, index) => {
            const monthBtn = document.createElement('div');
            monthBtn.className = 'month-item';
            monthBtn.textContent = month;
            monthBtn.dataset.month = index;
            
            monthBtn.addEventListener('click', () => {
                currentViewMonth = index;
                currentViewYear = parseInt(dropdownYearDisplay.textContent);
                renderCalendarMonth(currentViewMonth, currentViewYear);
                monthYearDropdown.classList.remove('active');
            });
            
            monthGrid.appendChild(monthBtn);
        });
        
        highlightCurrentMonth();
    }
    
    // Function to highlight the current month in the dropdown
    function highlightCurrentMonth() {
        const monthItems = monthGrid.querySelectorAll('.month-item');
        monthItems.forEach(item => {
            const month = parseInt(item.dataset.month);
            if (month === currentViewMonth && parseInt(dropdownYearDisplay.textContent) === currentViewYear) {
                item.style.backgroundColor = '#e6f2ff';
                item.style.fontWeight = 'bold';
            } else {
                item.style.backgroundColor = '';
                item.style.fontWeight = '';
            }
        });
    }
    
    // Helper function to check if two dates are the same day
    function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }
    
    // Helper function to format date to ISO string (YYYY-MM-DD)
    function formatDateIso(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    // Helper function to format date for display (DD/MM/YYYY)
    function formatDateDisplay(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    // Helper function to format time
    function formatTime(hour, minute) {
        const h = hour < 10 ? `0${hour}` : hour;
        return `${h}:${minute}`;
    }
}

// --- EMBED BLOCK FUNCTIONALITY ---

function createEmbedBlockContent(blockId, embedData = '') {
    // Parse existing embed data if it exists
    let parsedData = {};
    if (embedData && typeof embedData === 'string') {
        try {
            parsedData = JSON.parse(embedData);
        } catch (e) {
            console.error('Error parsing embed data:', e);
        }
    } else if (embedData && typeof embedData === 'object') {
        parsedData = embedData;
    }

    const platform = parsedData.platform || 'youtube';
    const url = parsedData.url || parsedData.originalUrl || '';
    const embedId = parsedData.embedId || '';
    const title = parsedData.title || '';
    const viewType = parsedData.viewType || 'normal'; // For Spotify
    const width = parsedData.width || 100; // Width percentage

    return `
        <div class="block-embed-container" data-block-id="${blockId}">
            <div class="embed-controls">
                <div class="embed-platform-selector">
                    <label for="${blockId}_platform">Platform:</label>
                    <select id="${blockId}_platform" class="embed-platform-select" onchange="handleEmbedPlatformChangeWithPreview('${blockId}')">
                        <option value="youtube" ${platform === 'youtube' ? 'selected' : ''}>YouTube</option>
                        <option value="spotify" ${platform === 'spotify' ? 'selected' : ''}>Spotify</option>
                        <option value="soundcloud" ${platform === 'soundcloud' ? 'selected' : ''}>SoundCloud</option>
                    </select>
                </div>
                <div class="embed-spotify-options" id="${blockId}_spotify_options" style="display: ${platform === 'spotify' ? 'block' : 'none'};">
                    <div class="spotify-controls-row">
                        <div class="spotify-view-control">
                            <label for="${blockId}_viewtype">Spotify View:</label>
                            <select id="${blockId}_viewtype" class="embed-viewtype-select" onchange="handleEmbedSettingsChangeWithPreview('${blockId}')">
                                <option value="normal" ${viewType === 'normal' ? 'selected' : ''}>Normal</option>
                                <option value="compact" ${viewType === 'compact' ? 'selected' : ''}>Compact</option>
                            </select>
                        </div>
                        <div class="spotify-width-control">
                            <label for="${blockId}_width">Width:</label>
                            <div class="width-control-wrapper">
                                <div class="width-input-group">
                                    <input type="number" id="${blockId}_width" class="embed-width-input" 
                                           value="${width}" min="10" max="100" step="5"
                                           oninput="handleEmbedSettingsChangeWithPreview('${blockId}')">
                                    <span class="width-unit">%</span>
                                </div>
                                <div class="width-presets">
                                    <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 50)">50%</button>
                                    <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 75)">75%</button>
                                    <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 100)">100%</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="embed-width-control" id="${blockId}_width_control" style="display: ${platform === 'spotify' ? 'none' : 'block'};">
                    <label for="${blockId}_width_general">Width:</label>
                    <div class="width-control-wrapper">
                        <div class="width-input-group">
                            <input type="number" id="${blockId}_width_general" class="embed-width-input" 
                                   value="${width}" min="10" max="100" step="5"
                                   oninput="handleEmbedSettingsChangeWithPreview('${blockId}')">
                            <span class="width-unit">%</span>
                        </div>
                        <div class="width-presets">
                            <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 50)">50%</button>
                            <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 75)">75%</button>
                            <button type="button" class="width-preset-btn" onclick="setEmbedWidthWithPreview('${blockId}', 100)">100%</button>
                        </div>
                    </div>
                </div>
                                                 <div class="embed-url-input">
                    <label for="${blockId}_url">URL:</label>
                    <input type="text" id="${blockId}_url" class="embed-url-field" 
                           value="${escapeHTML(url)}" 
                           placeholder="Paste the full URL here..."
                           oninput="handleEmbedUrlInputWithPreview('${blockId}')"
                           onpaste="handleEmbedUrlPaste('${blockId}')">
                </div>
                <div class="embed-guidance" id="${blockId}_guidance">
                    ${getEmbedGuidanceText(platform)}
                </div>
            </div>
            <div class="embed-preview-container" id="${blockId}_preview">
                ${embedId ? createEmbedPreviewHtml(platform, embedId, title, viewType, width) : '<div class="embed-placeholder">Enter a URL to see the embed</div>'}
            </div>

            <div class="embed-error-container" id="${blockId}_error" style="display: none;">
                <div class="embed-error-message"></div>
                <button class="btn btn-sm btn-secondary embed-retry-btn" data-block-id="${blockId}">
                    Try Again
                </button>
            </div>
        </div>
    `;
}

function getEmbedGuidanceText(platform) {
    switch (platform) {
        case 'youtube':
            return `
                <div class="embed-guidance-text">
                    <strong>YouTube Videos:</strong> Paste the full YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
                    <br><em>Note: YouTube Shorts are not supported - only regular videos</em>
                </div>
            `;
        case 'spotify':
            return `
                <div class="embed-guidance-text">
                    <strong>Spotify:</strong> Paste the full Spotify URL for tracks, albums, playlists, or artists
                    <br><em>Example: https://open.spotify.com/track/TRACK_ID</em>
                </div>
            `;
        case 'soundcloud':
            return `
                <div class="embed-guidance-text">
                    <strong>SoundCloud:</strong> Paste the full SoundCloud URL for tracks, sets, or user profiles
                    <br><em>Example: https://soundcloud.com/user/track-name</em>
                </div>
            `;
        default:
            return '';
    }
}

function createEmbedPreviewHtml(platform, embedId, title = '', viewType = 'normal', width = 100) {
    const widthStyle = width < 100 ? `style="width: ${width}%; margin: 0 auto;"` : '';
    
    switch (platform) {
        case 'youtube':
            return `
                <div class="embed-preview youtube-embed" ${widthStyle}>
                    <iframe src="https://www.youtube.com/embed/${embedId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                    ${title ? `<div class="embed-title">${escapeHTML(title)}</div>` : ''}
                </div>
            `;
        case 'spotify':
            const spotifyHeight = viewType === 'compact' ? '80' : '152';
            const spotifyTheme = viewType === 'compact' ? '&theme=0' : '';
            return `
                <div class="embed-preview spotify-embed spotify-${viewType}" ${widthStyle}>
                    <iframe src="https://open.spotify.com/embed/${embedId}?utm_source=generator&theme=0${spotifyTheme}" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"
                            style="height: ${spotifyHeight}px;">
                    </iframe>
                    ${title ? `<div class="embed-title">${escapeHTML(title)}</div>` : ''}
                </div>
            `;
        case 'soundcloud':
            return `
                <div class="embed-preview soundcloud-embed" ${widthStyle}>
                    <iframe src="https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/' + embedId)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
                            frameborder="0" 
                            allow="autoplay">
                    </iframe>
                    ${title ? `<div class="embed-title">${escapeHTML(title)}</div>` : ''}
                </div>
            `;
        default:
            return '<div class="embed-error">Unsupported platform</div>';
    }
}

export function parseEmbedUrl(url, platform) {
    // Auto-detect platform if not specified
    if (!platform) {
        platform = detectEmbedPlatform(url);
    }
    
    try {
        switch (platform) {
            case 'youtube':
                return parseYouTubeUrl(url);
            case 'spotify':
                return parseSpotifyUrl(url);
            case 'soundcloud':
                return parseSoundCloudUrl(url);
            default:
                throw new Error('Unsupported platform');
        }
    } catch (error) {
        console.error('Error parsing embed URL:', error);
        return null;
    }
}

function detectEmbedPlatform(url) {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return 'youtube';
    } else if (url.includes('spotify.com')) {
        return 'spotify';
    } else if (url.includes('soundcloud.com')) {
        return 'soundcloud';
    }
    return null;
}

function parseYouTubeUrl(url) {
    // Regular YouTube video URL patterns
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]{11})/
    ];
    
    // Check for YouTube Shorts (not supported)
    if (url.includes('/shorts/')) {
        throw new Error('YouTube Shorts are not supported. Please use regular YouTube videos.');
    }
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return {
                platform: 'youtube',
                embedId: match[1],
                originalUrl: url,
                url: url
            };
        }
    }
    
    throw new Error('Invalid YouTube URL. Please enter a valid YouTube video URL.');
}

function parseSpotifyUrl(url) {
    // Spotify URL patterns: https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh
    const match = url.match(/spotify\.com\/(track|album|playlist|artist)\/([a-zA-Z0-9]+)/);
    if (match) {
        return {
            platform: 'spotify',
            embedId: `${match[1]}/${match[2]}`,
            originalUrl: url,
            url: url
        };
    }
    
    throw new Error('Invalid Spotify URL. Please enter a valid Spotify track, album, playlist, or artist URL.');
}

function parseSoundCloudUrl(url) {
    // SoundCloud URL patterns: https://soundcloud.com/user/track-name
    const match = url.match(/soundcloud\.com\/([^\/]+(?:\/[^\/]+)?)/);
    if (match) {
        return {
            platform: 'soundcloud',
            embedId: match[1],
            originalUrl: url,
            url: url
        };
    }
    
    throw new Error('Invalid SoundCloud URL. Please enter a valid SoundCloud track or set URL.');
}

export function handleEmbedPreview(blockId) {
    const urlInput = document.getElementById(`${blockId}_url`);
    const platformSelect = document.getElementById(`${blockId}_platform`);
    const previewContainer = document.getElementById(`${blockId}_preview`);
    const errorContainer = document.getElementById(`${blockId}_error`);
    const guidanceContainer = document.getElementById(`${blockId}_guidance`);
    
    if (!urlInput || !platformSelect || !previewContainer || !errorContainer) {
        console.error('Embed elements not found for block:', blockId);
        return;
    }
    
    const url = urlInput.value.trim();
    const platform = platformSelect.value;
    
    console.log('Generating preview for block', blockId, '- Platform:', platform, 'URL:', url);
    
    // Clear previous errors
    errorContainer.style.display = 'none';
    
    if (!url) {
        showEmbedError(blockId, 'Please enter a URL');
        return;
    }
    
    // Parse the URL
    try {
        const parsedData = parseEmbedUrl(url, platform);
        
        if (!parsedData) {
            throw new Error('Invalid URL for the selected platform');
        }
        
        // Get current settings
        const viewTypeSelect = document.getElementById(`${blockId}_viewtype`);
        const widthInput = document.getElementById(`${blockId}_width`);
        const generalWidthInput = document.getElementById(`${blockId}_width_general`);
        const viewType = viewTypeSelect ? viewTypeSelect.value : 'normal';
        
        // Get width from appropriate input based on platform
        let width = 100;
        if (platform === 'spotify' && widthInput) {
            width = parseInt(widthInput.value);
        } else if (platform !== 'spotify' && generalWidthInput) {
            width = parseInt(generalWidthInput.value);
        }
        
        // Add settings to parsed data
        parsedData.viewType = viewType;
        parsedData.width = width;
        
        // Create preview
        const previewHtml = createEmbedPreviewHtml(parsedData.platform, parsedData.embedId, '', viewType, width);
        previewContainer.innerHTML = previewHtml;
        
        // Store the parsed data for saving
        const container = document.querySelector(`[data-block-id="${blockId}"]`);
        if (container) {
            container.dataset.embedData = JSON.stringify(parsedData);
            console.log('Embed preview generated and saved for block', blockId, ':', parsedData);
        }
        
    } catch (error) {
        console.error('Error generating embed preview for block', blockId, ':', error);
        showEmbedError(blockId, error.message || 'Invalid URL for the selected platform');
        
        // Still save the URL input so it's not lost
        const container = document.querySelector(`[data-block-id="${blockId}"]`);
        if (container) {
            const rawData = {
                platform: platform,
                url: url,
                embedId: null
            };
            container.dataset.embedData = JSON.stringify(rawData);
            console.log('Saved raw URL data for block', blockId, '(preview failed):', rawData);
        }
    }
}

function showEmbedError(blockId, message) {
    const errorContainer = document.getElementById(`${blockId}_error`);
    const errorMessage = errorContainer.querySelector('.embed-error-message');
    
    if (errorContainer && errorMessage) {
        errorMessage.textContent = message;
        errorContainer.style.display = 'block';
    }
}

export function getEmbedBlockData(blockId) {
    const container = document.querySelector(`[data-block-id="${blockId}"]`);
    if (!container) {
        console.warn('Embed container not found for block:', blockId);
        return null;
    }
    
    const embedData = container.dataset.embedData;
    if (embedData) {
        try {
            const parsed = JSON.parse(embedData);
            console.log('Retrieved embed data for block', blockId, ':', parsed);
            return parsed;
        } catch (e) {
            console.error('Error parsing embed data for block', blockId, ':', e);
        }
    }
    
    console.log('No embed data found for block:', blockId);
    return null;
}

export function updateEmbedGuidance(blockId, platform) {
    const guidanceContainer = document.getElementById(`${blockId}_guidance`);
    if (guidanceContainer) {
        guidanceContainer.innerHTML = getEmbedGuidanceText(platform);
    }
}

// Save URL input as user types to preserve it during save/load cycles
export function handleEmbedUrlInput(blockId) {
    const urlInput = document.getElementById(`${blockId}_url`);
    const platformSelect = document.getElementById(`${blockId}_platform`);
    const viewTypeSelect = document.getElementById(`${blockId}_viewtype`);
    const widthInput = document.getElementById(`${blockId}_width`);
    const container = document.querySelector(`[data-block-id="${blockId}"]`);
    
    if (!urlInput || !platformSelect || !container) {
        console.warn('Missing embed elements for block:', blockId);
        return;
    }
    
    const url = urlInput.value.trim();
    const platform = platformSelect.value;
    const viewType = viewTypeSelect ? viewTypeSelect.value : 'normal';
    const width = widthInput ? parseInt(widthInput.value) : 100;
    
    // Always save the current URL input and settings, even if not previewed
    const rawData = {
        platform: platform,
        url: url,
        embedId: null, // Will be populated when previewed
        viewType: viewType,
        width: width
    };
    
    // Try to parse the URL to see if it's valid
    try {
        const parsedData = parseEmbedUrl(url, platform);
        if (parsedData) {
            // If URL is valid, save the parsed data but without embedId until previewed
            rawData.originalUrl = parsedData.originalUrl;
        }
    } catch (e) {
        console.log('URL not yet valid for block', blockId, ':', e.message);
    }
    
    container.dataset.embedData = JSON.stringify(rawData);
    console.log('Saved embed URL input for block', blockId, ':', rawData);
}

// Initialize embed block with existing data
export function initializeEmbedBlock(blockId, embedData) {
    const container = document.querySelector(`[data-block-id="${blockId}"]`);
    const urlInput = document.getElementById(`${blockId}_url`);
    const previewContainer = document.getElementById(`${blockId}_preview`);
    
    if (!container || !urlInput || !previewContainer) return;
    
    if (embedData) {
        // Store the embed data in the container
        container.dataset.embedData = JSON.stringify(embedData);
        
        // If there's an embedId, show the preview automatically
        if (embedData.embedId) {
            const viewType = embedData.viewType || 'normal';
            const width = embedData.width || 100;
            const previewHtml = createEmbedPreviewHtml(embedData.platform, embedData.embedId, embedData.title, viewType, width);
            previewContainer.innerHTML = previewHtml;
            console.log('Auto-restored preview for embed block:', blockId, embedData);
        }
    } else if (urlInput.value.trim()) {
        // If there's just a URL, save it
        handleEmbedUrlInput(blockId);
    }
}

// Handle changes to embed settings (view type, width, etc.)
export function handleEmbedSettingsChange(blockId) {
    const urlInput = document.getElementById(`${blockId}_url`);
    const platformSelect = document.getElementById(`${blockId}_platform`);
    const viewTypeSelect = document.getElementById(`${blockId}_viewtype`);
    const widthInput = document.getElementById(`${blockId}_width`);
    const generalWidthInput = document.getElementById(`${blockId}_width_general`);
    const container = document.querySelector(`[data-block-id="${blockId}"]`);
    
    if (!container) return;
    
    const url = urlInput ? urlInput.value.trim() : '';
    const platform = platformSelect ? platformSelect.value : 'youtube';
    const viewType = viewTypeSelect ? viewTypeSelect.value : 'normal';
    
    // Get width from appropriate input based on platform
    let width = 100;
    if (platform === 'spotify' && widthInput) {
        width = parseInt(widthInput.value);
    } else if (platform !== 'spotify' && generalWidthInput) {
        width = parseInt(generalWidthInput.value);
    }
    
    // Get existing embed data
    let embedData = getEmbedBlockData(blockId);
    if (!embedData) {
        embedData = {
            platform: platform,
            url: url,
            embedId: null
        };
    }
    
    // Update with new settings
    embedData.viewType = viewType;
    embedData.width = width;
    embedData.platform = platform;
    if (url) embedData.url = url;
    
    // Save updated data
    container.dataset.embedData = JSON.stringify(embedData);
    
    // If there's a preview, update it with new settings
    const previewContainer = document.getElementById(`${blockId}_preview`);
    if (previewContainer && embedData.embedId) {
        const previewHtml = createEmbedPreviewHtml(embedData.platform, embedData.embedId, embedData.title, viewType, width);
        previewContainer.innerHTML = previewHtml;
    }
    
    console.log('Updated embed settings for block', blockId, ':', embedData);
}

// Debounce function to prevent too many rapid updates
let embedPreviewTimeouts = {};

function debounceEmbedPreview(blockId, func, delay = 800) {
    clearTimeout(embedPreviewTimeouts[blockId]);
    embedPreviewTimeouts[blockId] = setTimeout(func, delay);
}

// Auto-preview URL input with debouncing
export function handleEmbedUrlInputWithPreview(blockId) {
    // Always save the input immediately
    handleEmbedUrlInput(blockId);
    
    // Debounce the preview generation
    debounceEmbedPreview(blockId, () => {
        const urlInput = document.getElementById(`${blockId}_url`);
        if (urlInput && urlInput.value.trim()) {
            tryAutoPreview(blockId);
        }
    });
}

// Immediate preview on paste
export function handleEmbedUrlPaste(blockId) {
    // Small delay to let paste complete
    setTimeout(() => {
        handleEmbedUrlInput(blockId);
        const urlInput = document.getElementById(`${blockId}_url`);
        if (urlInput && urlInput.value.trim()) {
            tryAutoPreview(blockId);
        }
    }, 100);
}

// Platform change with auto-preview
export function handleEmbedPlatformChangeWithPreview(blockId) {
    const platform = document.getElementById(`${blockId}_platform`).value;
    updateEmbedGuidance(blockId, platform);
    
    // Show/hide Spotify options and general width control
    const spotifyOptions = document.getElementById(`${blockId}_spotify_options`);
    const generalWidthControl = document.getElementById(`${blockId}_width_control`);
    
    if (spotifyOptions) {
        spotifyOptions.style.display = platform === 'spotify' ? 'block' : 'none';
    }
    if (generalWidthControl) {
        generalWidthControl.style.display = platform === 'spotify' ? 'none' : 'block';
    }
    
    // Update settings and try preview
    handleEmbedSettingsChange(blockId);
    const urlInput = document.getElementById(`${blockId}_url`);
    if (urlInput && urlInput.value.trim()) {
        tryAutoPreview(blockId);
    } else {
        // Clear preview if no URL
        const previewContainer = document.getElementById(`${blockId}_preview`);
        if (previewContainer) {
            previewContainer.innerHTML = '<div class="embed-placeholder">Enter a URL to see the embed</div>';
        }
    }
}

// Settings change with auto-preview
export function handleEmbedSettingsChangeWithPreview(blockId) {
    handleEmbedSettingsChange(blockId);
    
    // If there's already a preview, update it immediately
    const embedData = getEmbedBlockData(blockId);
    if (embedData && embedData.embedId) {
        updateExistingPreview(blockId, embedData);
    }
}

// Quick width preset function with auto-preview
export function setEmbedWidthWithPreview(blockId, width) {
    const platformSelect = document.getElementById(`${blockId}_platform`);
    const platform = platformSelect ? platformSelect.value : 'youtube';
    
    const widthInput = document.getElementById(`${blockId}_width`);
    const generalWidthInput = document.getElementById(`${blockId}_width_general`);
    
    if (platform === 'spotify' && widthInput) {
        widthInput.value = width;
    } else if (platform !== 'spotify' && generalWidthInput) {
        generalWidthInput.value = width;
    }
    
    handleEmbedSettingsChangeWithPreview(blockId);
}

// Try to auto-generate preview from URL
function tryAutoPreview(blockId) {
    const urlInput = document.getElementById(`${blockId}_url`);
    const platformSelect = document.getElementById(`${blockId}_platform`);
    const previewContainer = document.getElementById(`${blockId}_preview`);
    const errorContainer = document.getElementById(`${blockId}_error`);
    
    if (!urlInput || !platformSelect || !previewContainer || !errorContainer) {
        return;
    }
    
    const url = urlInput.value.trim();
    const platform = platformSelect.value;
    
    if (!url) {
        previewContainer.innerHTML = '<div class="embed-placeholder">Enter a URL to see the embed</div>';
        errorContainer.style.display = 'none';
        return;
    }
    
    console.log('Auto-generating preview for block', blockId, '- Platform:', platform, 'URL:', url);
    
    try {
        // Parse the URL
        const parsedData = parseEmbedUrl(url, platform);
        
        if (!parsedData) {
            throw new Error('Invalid URL for the selected platform');
        }
        
        // Get current settings
        const viewTypeSelect = document.getElementById(`${blockId}_viewtype`);
        const widthInput = document.getElementById(`${blockId}_width`);
        const generalWidthInput = document.getElementById(`${blockId}_width_general`);
        const viewType = viewTypeSelect ? viewTypeSelect.value : 'normal';
        
        // Get width from appropriate input based on platform
        let width = 100;
        if (platform === 'spotify' && widthInput) {
            width = parseInt(widthInput.value);
        } else if (platform !== 'spotify' && generalWidthInput) {
            width = parseInt(generalWidthInput.value);
        }
        
        // Add settings to parsed data
        parsedData.viewType = viewType;
        parsedData.width = width;
        
        // Create and show preview
        const previewHtml = createEmbedPreviewHtml(parsedData.platform, parsedData.embedId, '', viewType, width);
        previewContainer.innerHTML = previewHtml;
        
        // Store the complete data
        const container = document.querySelector(`[data-block-id="${blockId}"]`);
        if (container) {
            container.dataset.embedData = JSON.stringify(parsedData);
            console.log('Auto-preview generated and saved for block', blockId, ':', parsedData);
        }
        
        // Hide any previous errors
        errorContainer.style.display = 'none';
        
    } catch (error) {
        console.log('Auto-preview failed for block', blockId, ':', error.message);
        
        // Show a subtle error state, but don't overwhelm the user
        previewContainer.innerHTML = '<div class="embed-placeholder embed-placeholder-invalid">Invalid URL - check format and try again</div>';
        errorContainer.style.display = 'none'; // Don't show the big error box for auto-preview
        
        // Still save the URL input
        const container = document.querySelector(`[data-block-id="${blockId}"]`);
        if (container) {
            const rawData = {
                platform: platform,
                url: url,
                embedId: null,
                viewType: document.getElementById(`${blockId}_viewtype`)?.value || 'normal',
                width: parseInt(document.getElementById(`${blockId}_width`)?.value) || 100
            };
            container.dataset.embedData = JSON.stringify(rawData);
        }
    }
}

// Update existing preview with new settings
function updateExistingPreview(blockId, embedData) {
    const previewContainer = document.getElementById(`${blockId}_preview`);
    if (!previewContainer || !embedData.embedId) return;
    
    const viewType = embedData.viewType || 'normal';
    const width = embedData.width || 100;
    
    const previewHtml = createEmbedPreviewHtml(embedData.platform, embedData.embedId, embedData.title, viewType, width);
    previewContainer.innerHTML = previewHtml;
    
    console.log('Updated existing preview for block', blockId, 'with settings:', { viewType, width });
}

// Quick width preset function (legacy - keeping for backward compatibility)
export function setEmbedWidth(blockId, width) {
    const widthInput = document.getElementById(`${blockId}_width`);
    if (widthInput) {
        widthInput.value = width;
        handleEmbedSettingsChange(blockId);
    }
}

// Make the functions globally accessible
window.handleEmbedUrlInput = handleEmbedUrlInput;
window.handleEmbedUrlInputWithPreview = handleEmbedUrlInputWithPreview;
window.handleEmbedUrlPaste = handleEmbedUrlPaste;
window.handleEmbedPlatformChangeWithPreview = handleEmbedPlatformChangeWithPreview;
window.handleEmbedSettingsChangeWithPreview = handleEmbedSettingsChangeWithPreview;
window.setEmbedWidthWithPreview = setEmbedWidthWithPreview;
window.initializeEmbedBlock = initializeEmbedBlock;
window.handleEmbedSettingsChange = handleEmbedSettingsChange;
window.setEmbedWidth = setEmbedWidth;