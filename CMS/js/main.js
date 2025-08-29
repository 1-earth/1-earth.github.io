// js/main.js
import { initAuthModule, signInWithGoogle, signOutUser, getCurrentUser } from './auth.js';
import * as fsService from './firestoreService.js';
import * as storageService from './storageService.js';
import * as ui from './uiService.js';

// --- State Variables ---
let currentUser = null;
let selectedDataType = null; // 'text', 'media', 'blog'
let currentOpenItemDataID = null; // dataID of the item currently open in the dashboard
let currentItemDataCache = null; // Cache of the currently open item's data
let mediaFilesToUpload = []; // For media dashboard: array of File objects
let existingMediaFiles = []; // For media dashboard: array of {url, caption, filename, storagePath}
let mediaUploadsInProgress = []; // [{file, progress, uploadTask, uploadedUrl, storagePath, error, isCompressed, isDone}]

// --- DOM Elements ---
const dataTypesNav = document.getElementById('dataTypesNav');
const createNewItemBtn = document.getElementById('createNewItemBtn');
const itemsListUl = document.getElementById('itemsList');
const dashboardContentEl = document.getElementById('dashboardContent'); // uiService also uses this
const logoutButton = document.getElementById('logoutButton');
const welcomeMessageEl = document.getElementById('welcomeMessage');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initAuthModule(handleUserSignedIn, handleUserSignedOut);
    setupEventListeners();
    initColumnResizing();
});

function handleUserSignedIn(user) {
    currentUser = user;
    if (welcomeMessageEl) welcomeMessageEl.textContent = `Welcome, ${user.displayName || user.email}!`;
    if (logoutButton) logoutButton.style.display = 'inline-block';
    ui.showLoading(false); // Hide loading if it was shown during auth check
    // If a data type was previously selected, load its items, or prompt user
    if (selectedDataType) {
        loadItemsForType(selectedDataType);
    } else {
        ui.updateItemsListTitle("Select Data Type");
        itemsListUl.innerHTML = '<li class="placeholder-text">Select a data type to see items.</li>';
        ui.hideNewItemButton();
        ui.clearDashboard("Select a data type from the left.");
    }
}

function handleUserSignedOut() {
    currentUser = null;
    // Redirect to login page
    if (!window.location.pathname.endsWith('login.html')) {
        window.location.href = 'login.html';
    }
}

function setupEventListeners() {
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            ui.showLoading(true);
            signOutUser().catch(err => {
                console.error("Sign out error", err);
                ui.showPopup("Error signing out: " + err.message);
            }).finally(() => ui.showLoading(false));
        });
    }

    if (dataTypesNav) {
        dataTypesNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('data-type-btn')) {
                if (!currentUser) { ui.showPopup("Please wait, authenticating..."); return; }

                document.querySelectorAll('.data-type-btn.active').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                selectedDataType = e.target.dataset.type;
                currentOpenItemDataID = null; // Clear open item when changing type
                currentItemDataCache = null;

                const typeLabel = selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1);
                ui.updateItemsListTitle(`${typeLabel} Items`);
                ui.setNewItemButtonText(typeLabel);
                ui.clearDashboard(`Select a ${selectedDataType} item or create a new one.`);
                loadItemsForType(selectedDataType);
            }
        });
    }

    if (createNewItemBtn) {
        createNewItemBtn.addEventListener('click', handleCreateNewItem);
    }

    // Event delegation for dashboard actions (save, delete, media uploads etc.)
    if (dashboardContentEl) {
        dashboardContentEl.addEventListener('click', handleDashboardActions);
        dashboardContentEl.addEventListener('change', handleDashboardChanges);
    }
}

// --- Dashboard Change Events (for form elements) ---
function handleDashboardChanges(e) {
    if (!currentUser || !currentOpenItemDataID) {
        return;
    }

    // Block type changes
    if (e.target.classList.contains('block-type-select')) {
        handleBlockTypeChange(e.target);
    }
    // Column ratio changes
    else if (e.target.classList.contains('column-ratio-slider')) {
        handleColumnRatioChange(e.target);
    }

}

// --- Data Loading and Display ---
async function loadItemsForType(dataType) {
    if (!currentUser || !dataType) return;
    ui.showLoading(true);
    try {
        const querySnapshot = await fsService.getItemsByType(currentUser.uid, dataType);
        const items = [];
        querySnapshot.forEach(doc => {
            items.push({ dataID: doc.id, ...doc.data() });
        });
        ui.displayItemsList(items, currentOpenItemDataID, handleItemSelected);
    } catch (error) {
        console.error(`Error loading ${dataType} items:`, error);
        ui.showPopup(`Error loading ${dataType} items: ${error.message}`);
        itemsListUl.innerHTML = `<li class="placeholder-text">Error loading items.</li>`;
    } finally {
        ui.showLoading(false);
    }
}

async function handleItemSelected(dataID) {
    if (!currentUser) return;
    ui.showLoading(true);
    currentOpenItemDataID = dataID;
    mediaFilesToUpload = []; // Reset for media
    existingMediaFiles = []; // Reset for media

    try {
        const docSnap = await fsService.getItemById(currentUser.uid, dataID);
        if (docSnap.exists) {
            currentItemDataCache = { dataID: docSnap.id, ...docSnap.data() };
            const item = currentItemDataCache;
            ui.updateDashboardTitle(`Edit: ${item.title || 'Untitled'}`);

            if (item.type === 'text') {
                ui.renderTextDashboard(item.dataID, item);
            } else if (item.type === 'media') {
                existingMediaFiles = item.files ? [...item.files] : [];
                ui.renderMediaDashboard(item.dataID, item, currentUser.uid);
                setupMediaDashboardControls(item.dataID, item);
            } else if (item.type === 'blog') {
                ui.renderBlogDashboard(item.dataID, item);
            } else if (item.type === 'calendar') {
                ui.renderCalendarDashboard(item.dataID, item);
            }
             ui.setActiveItemInList(dataID); // Ensure list reflects selection
        } else {
            console.error("Document not found:", dataID);
            ui.showPopup("Error: Item not found. It may have been deleted.");
            ui.clearDashboard();
            currentOpenItemDataID = null;
            currentItemDataCache = null;
            loadItemsForType(selectedDataType); // Refresh list
        }
    } catch (error) {
        console.error("Error loading item into dashboard:", error);
        ui.showPopup("Error loading item: " + error.message);
    } finally {
        ui.showLoading(false);
    }
}

async function handleCreateNewItem() {
    if (!currentUser || !selectedDataType) return;
    ui.showLoading(true);
    currentOpenItemDataID = null; // Important: indicates a new item
    currentItemDataCache = null;
    mediaFilesToUpload = [];
    existingMediaFiles = [];

    try {
        const newId = await fsService.generateNewDataID(currentUser.uid, selectedDataType);
        currentOpenItemDataID = newId; // Set for saving
        const typeLabel = selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1);
        ui.updateDashboardTitle(`New ${typeLabel}`);
        ui.setActiveItemInList(null); // Deselect any active item in list

        if (selectedDataType === 'text') {
            ui.renderTextDashboard(newId, null);
        } else if (selectedDataType === 'media') {
            ui.renderMediaDashboard(newId, null, currentUser.uid);
            setupMediaDashboardControls(newId, null);
        } else if (selectedDataType === 'blog') {
            ui.renderBlogDashboard(newId, null);
        } else if (selectedDataType === 'calendar') {
            ui.renderCalendarDashboard(newId, null);
        }
    } catch (error) {
        console.error("Error preparing new item:", error);
        ui.showPopup("Error preparing new item: " + error.message);
    } finally {
        ui.showLoading(false);
    }
}

// --- Dashboard Actions (Event Delegation) ---
function handleDashboardActions(e) {
    if (!currentUser || !currentOpenItemDataID) {
        // Potentially show a message if trying to act without context
        // console.warn("No user or open item for dashboard action.");
        // return;
    }

    // Save Buttons
    if (e.target.id === 'saveTextBtn') handleSaveText();
    else if (e.target.id === 'saveMediaBtn') handleSaveMedia();
    else if (e.target.id === 'saveBlogBtn') handleSaveBlog();
    else if (e.target.id === 'saveCalendarBtn') handleSaveCalendar();

    // Delete Buttons
    else if (e.target.id === 'deleteTextBtn') handleDeleteItem('text');
    else if (e.target.id === 'deleteMediaBtn') handleDeleteItem('media');
    else if (e.target.id === 'deleteBlogBtn') handleDeleteItem('blog');
    else if (e.target.id === 'deleteCalendarBtn') handleDeleteItem('calendar');

    // Blog Section Management
    else if (e.target.id === 'addBlogSectionBtn') handleAddBlogSection();
    else if (e.target.classList.contains('add-block-btn')) handleAddBlogBlock(e.target);
    else if (e.target.classList.contains('add-column-group-btn')) handleAddColumnGroup(e.target);
    else if (e.target.classList.contains('remove-section-btn')) handleRemoveBlogSection(e.target);
    else if (e.target.classList.contains('move-section-up-btn')) handleMoveBlogSection(e.target, 'up');
    else if (e.target.classList.contains('move-section-down-btn')) handleMoveBlogSection(e.target, 'down');

    // Blog Block Management
    else if (e.target.classList.contains('remove-block-btn')) handleRemoveBlogBlock(e.target);
    else if (e.target.classList.contains('move-block-up-btn')) handleMoveBlogBlock(e.target, 'up');
    else if (e.target.classList.contains('move-block-down-btn')) handleMoveBlogBlock(e.target, 'down');
    else if (e.target.classList.contains('duplicate-block-btn')) handleDuplicateBlogBlock(e.target);
    else if (e.target.classList.contains('select-media-btn')) handleSelectMediaForBlock(e.target);
    else if (e.target.classList.contains('select-featured-media-btn')) handleSelectFeaturedMedia(e.target);
    else if (e.target.classList.contains('select-poster-image-btn')) handleSelectPosterImage(e.target);
    // Legacy support
    else if (e.target.classList.contains('select-featured-image-btn')) handleSelectFeaturedMedia(e.target);
    else if (e.target.classList.contains('layout-toggle-btn')) handleBlockLayoutToggle(e.target);
    
    // Embed Block Management  
    else if (e.target.classList.contains('embed-retry-btn')) handleEmbedRetry(e.target);
    
    // Column Group Management
    else if (e.target.classList.contains('ungroup-btn')) handleUngroupColumn(e.target);
    else if (e.target.classList.contains('add-left-block-btn')) handleAddColumnBlock(e.target, 'left');
    else if (e.target.classList.contains('add-right-block-btn')) handleAddColumnBlock(e.target, 'right');

    // Media Specific
    else if (e.target.id === 'mediaUploadDropzone' || e.target.closest('#mediaUploadDropzone')) {
        document.getElementById('mediaFileUpload').click();
    }
    else if (e.target.classList.contains('remove-media-file-btn')) {
        const index = parseInt(e.target.dataset.fileIndex);
        handleRemoveMediaFile(index, e.target.closest('.media-preview-item'));
    }
    else if (e.target.id === 'mediaFileUpload') { // The actual file input
        e.target.addEventListener('change', handleMediaFileSelection);
    }
    else if (e.target.id === 'mediaTypeSelect'){
        handleMediaTypeChange(e.target.value);
    }
    
    // Image editing buttons (only for new uploads)
    else if (e.target.classList.contains('crop-btn')) {
        const fileIndex = parseInt(e.target.dataset.fileIndex);
        openCropModal(fileIndex);
    }
    else if (e.target.classList.contains('compress-btn')) {
        const fileIndex = parseInt(e.target.dataset.fileIndex);
        openCompressModal(fileIndex);
    }
    else if (e.target.classList.contains('resize-btn')) {
        const fileIndex = parseInt(e.target.dataset.fileIndex);
        const file = mediaFilesToUpload[fileIndex];
        if (file && file.type.startsWith('image/')) {
            openResizeModal(fileIndex);
        } else if (file && file.type.startsWith('video/')) {
            openVideoResizeModal(fileIndex);
        }
    }
}

// --- Save Logic ---
function validateField(elementId, fieldName) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Validation Error: Element ${elementId} not found.`);
        ui.showPopup(`Internal error: Missing field ${fieldName}.`);
        return null; // Or throw error
    }
    ui.clearErrorNearElement(element);
    if (!element.value.trim()) {
        ui.displayErrorNearElement(element, `${fieldName} cannot be empty.`);
        return null;
    }
    return element.value.trim();
}


async function handleSaveText() {
    const title = validateField('textTitle', 'Title');
    if (!title) return;

    const content = ui.getQuillEditorContent('textEditorContainer'); // Raw HTML

    const itemData = {
        type: 'text',
        title: title,
        content: content,
    };
    _saveItemToFirestore(itemData);
}

async function handleSaveBlog() {
    const title = validateField('blogTitle', 'Title');
    if (!title) return;

    const author = document.getElementById('blogAuthor').value.trim();
    const category = document.getElementById('blogCategory').value.trim();
    const excerpt = document.getElementById('blogExcerpt').value.trim();
    const featuredMediaUrlInput = document.getElementById('blogFeaturedMediaUrl');
    const featuredMediaPosterInput = document.getElementById('blogFeaturedMediaPoster');
    
    const featuredMediaUrl = featuredMediaUrlInput ? featuredMediaUrlInput.value.trim() : '';
    const featuredMediaPoster = featuredMediaPosterInput ? featuredMediaPosterInput.value.trim() : '';
    
    // Create featuredMedia object
    const featuredMedia = featuredMediaUrl ? {
        url: featuredMediaUrl,
        poster: featuredMediaPoster || ''
    } : null;
    const tags = document.getElementById('blogTags').value.trim();
    const datePostedStr = document.getElementById('blogDatePosted').value;
    let datePosted = null;
    if (datePostedStr) {
        datePosted = firebase.firestore.Timestamp.fromDate(new Date(datePostedStr));
    } else {
        ui.displayErrorNearElement(document.getElementById('blogDatePosted'), "Date posted cannot be empty.");
        return;
    }

    // Collect all sections and blocks data
    const sections = collectBlogSectionsData();
    if (!sections || sections.length === 0) {
        ui.showPopup("Please add at least one section with content to your blog post.");
        return;
    }

    const itemData = {
        type: 'blog',
        title: title,
        author: author,
        category: category,
        excerpt: excerpt,
        featuredMedia: featuredMedia,
        tags: tags, // Store as string, split on client if needed
        datePosted: datePosted,
        sections: sections,
    };
    _saveItemToFirestore(itemData);
}

function collectBlogSectionsData() {
    const sections = [];
    const sectionElements = document.querySelectorAll('.blog-section');
    
    sectionElements.forEach((sectionEl, sectionIndex) => {
        const sectionId = sectionEl.dataset.sectionId;
        const items = [];
        
        // Collect both single blocks and column groups (but exclude blocks inside column groups)
        const itemElements = sectionEl.querySelectorAll('.section-blocks > .blog-block, .section-blocks > .column-group');
        itemElements.forEach((itemEl, itemIndex) => {
            if (itemEl.classList.contains('column-group')) {
                // Handle column group
                const groupId = itemEl.dataset.groupId;
                const columnRatio = {
                    left: parseFloat(itemEl.dataset.leftRatio || '50'),
                    right: parseFloat(itemEl.dataset.rightRatio || '50')
                };
                
                const leftColumn = [];
                const rightColumn = [];
                
                // Collect left column blocks
                const leftBlocks = itemEl.querySelectorAll('.left-column .blog-block');
                leftBlocks.forEach((blockEl, blockIndex) => {
                    leftColumn.push(extractBlockData(blockEl, blockIndex));
                });
                
                // Collect right column blocks
                const rightBlocks = itemEl.querySelectorAll('.right-column .blog-block');
                rightBlocks.forEach((blockEl, blockIndex) => {
                    rightColumn.push(extractBlockData(blockEl, blockIndex));
                });
                
                items.push({
                    id: groupId,
                    type: 'column-group',
                    columnRatio: columnRatio,
                    leftColumn: leftColumn,
                    rightColumn: rightColumn,
                    order: itemIndex
                });
            } else {
                // Handle single block
                const blockData = extractBlockData(itemEl, itemIndex);
                items.push({
                    ...blockData,
                    type: 'single-block',
                    blockType: blockData.type,
                    order: itemIndex
                });
            }
        });
        
        sections.push({
            id: sectionId,
            items: items,
            order: sectionIndex
        });
    });
    
    return sections;
}

function extractBlockData(blockEl, index) {
    const blockId = blockEl.dataset.blockId;
    const blockType = blockEl.dataset.blockType;
    const layout = blockEl.dataset.layout || 'full';
    const layoutRatio = blockEl.dataset.layoutRatio || '50';
    
    let content = '';
    let mediaId = null;
    let embedData = null;
    
    if (blockType === 'subtitle' || blockType === 'body') {
        const editorContainer = blockEl.querySelector('.block-editor-container');
        if (editorContainer) {
            content = ui.getQuillEditorContent(editorContainer.id);
        }
    } else if (blockType === 'media') {
        const mediaElement = blockEl.querySelector('[data-media-id]');
        if (mediaElement) {
            mediaId = mediaElement.dataset.mediaId;
        }
    } else if (blockType === 'embed') {
        // Get both the previewed embed data and the raw URL input
        embedData = ui.getEmbedBlockData(blockId);
        const urlInput = document.getElementById(`${blockId}_url`);
        const platformSelect = document.getElementById(`${blockId}_platform`);
        
        console.log('Extracting embed data for block', blockId, '- Retrieved:', embedData);
        
        if (embedData) {
            content = JSON.stringify(embedData);
            console.log('Using existing embed data for block', blockId);
        } else if (urlInput && urlInput.value.trim()) {
            // If no previewed data but there's a URL, save it with platform info
            const rawEmbedData = {
                platform: platformSelect ? platformSelect.value : 'youtube',
                url: urlInput.value.trim(),
                embedId: null // Will be populated when previewed
            };
            content = JSON.stringify(rawEmbedData);
            console.log('Using raw URL data for block', blockId, ':', rawEmbedData);
        } else {
            console.log('No embed data found for block', blockId);
        }
    }
    
    return {
        id: blockId,
        type: blockType,
        content: content,
        mediaId: mediaId,
        embedData: embedData,
        layout: layout,
        layoutRatio: parseFloat(layoutRatio),
        order: index
    };
}

// --- BLOG SECTION MANAGEMENT ---
function handleAddBlogSection() {
    const sectionsContainer = document.getElementById('blogSectionsContainer');
    if (!sectionsContainer) return;
    
    // Remove no-sections message if present
    const noSectionsMessage = sectionsContainer.querySelector('.no-sections-message');
    if (noSectionsMessage) {
        noSectionsMessage.remove();
    }
    
    const sectionId = 'section_' + Date.now();
    const sectionHtml = ui.createBlogSectionHtml(sectionId, []);
    sectionsContainer.insertAdjacentHTML('beforeend', sectionHtml);
    
    // Make the new section draggable
    const newSection = sectionsContainer.querySelector(`[data-section-id="${sectionId}"]`);
    if (newSection) {
        makeSectionDraggable(newSection);
    }
}

function handleRemoveBlogSection(target) {
    const sectionEl = target.closest('.blog-section');
    if (!sectionEl) return;
    
    ui.showPopup('Are you sure you want to remove this section and all its blocks?', 'confirm', () => {
        sectionEl.remove();
    });
}

function handleMoveBlogSection(target, direction) {
    const sectionEl = target.closest('.blog-section');
    if (!sectionEl) return;
    
    const sibling = direction === 'up' ? sectionEl.previousElementSibling : sectionEl.nextElementSibling;
    if (!sibling) return;
    
    if (direction === 'up') {
        sectionEl.parentNode.insertBefore(sectionEl, sibling);
    } else {
        sectionEl.parentNode.insertBefore(sibling, sectionEl);
    }
}

// --- BLOG BLOCK MANAGEMENT ---
function handleAddBlogBlock(target) {
    const sectionEl = target.closest('.blog-section');
    if (!sectionEl) return;
    
    const blocksContainer = sectionEl.querySelector('.section-blocks');
    if (!blocksContainer) return;
    
    const blockId = 'block_' + Date.now();
    const blockHtml = ui.createBlogBlockHtml(blockId, 'body', '', null, 'full', 50);
    blocksContainer.insertAdjacentHTML('beforeend', blockHtml);
    
    // Make the new block draggable
    const newBlock = blocksContainer.querySelector(`[data-block-id="${blockId}"]`);
    if (newBlock) {
        makeBlockDraggable(newBlock);
    }
    
    // Initialize Quill editor for the new block
    const editorContainer = blocksContainer.querySelector(`#${blockId}_editor`);
    if (editorContainer) {
        ui.initQuillEditor(editorContainer.id, undefined, '');
    }
}

function handleRemoveBlogBlock(target) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    ui.showPopup('Are you sure you want to remove this block?', 'confirm', () => {
        blockEl.remove();
    });
}

function handleMoveBlogBlock(target, direction) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    const sibling = direction === 'up' ? blockEl.previousElementSibling : blockEl.nextElementSibling;
    if (!sibling) return;
    
    if (direction === 'up') {
        blockEl.parentNode.insertBefore(blockEl, sibling);
    } else {
        blockEl.parentNode.insertBefore(sibling, blockEl);
    }
}

function handleDuplicateBlogBlock(target) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    const newBlockId = 'block_' + Date.now();
    const blockType = blockEl.dataset.blockType;
    const layout = blockEl.dataset.layout || 'full';
    const layoutRatio = blockEl.dataset.layoutRatio || '50';
    
    let content = '';
    let mediaId = null;
    
    if (blockType === 'subtitle' || blockType === 'body') {
        const editorContainer = blockEl.querySelector('.block-editor-container');
        if (editorContainer) {
            content = ui.getQuillEditorContent(editorContainer.id);
        }
    } else if (blockType === 'media') {
        const mediaElement = blockEl.querySelector('[data-media-id]');
        if (mediaElement) {
            mediaId = mediaElement.dataset.mediaId;
        }
    }
    
    const blockHtml = ui.createBlogBlockHtml(newBlockId, blockType, content, mediaId, layout, layoutRatio);
    blockEl.insertAdjacentHTML('afterend', blockHtml);
    
    // Initialize Quill editor for the duplicated block if needed
    if (blockType === 'subtitle' || blockType === 'body') {
        const editorContainer = document.getElementById(`${newBlockId}_editor`);
        if (editorContainer) {
            ui.initQuillEditor(editorContainer.id, undefined, content);
        }
    }
}

function handleBlockTypeChange(target) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    const newType = target.value;
    const blockId = blockEl.dataset.blockId;
    const layout = blockEl.dataset.layout || 'full';
    const layoutRatio = blockEl.dataset.layoutRatio || '50';
    
    // Replace the block content area with the new type
    const blockHtml = ui.createBlogBlockHtml(blockId, newType, '', null, layout, layoutRatio);
    blockEl.outerHTML = blockHtml;
    
    // Initialize Quill editor if needed
    if (newType === 'subtitle' || newType === 'body') {
        const editorContainer = document.getElementById(`${blockId}_editor`);
        if (editorContainer) {
            ui.initQuillEditor(editorContainer.id, undefined, '');
        }
    }
}

async function handleSelectMediaForBlock(target) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    try {
        const mediaItems = await getAvailableMediaItems();
        ui.showMediaSelector(mediaItems, async (selectedMedia) => {
            const mediaContainer = blockEl.querySelector('.block-media-container');
            if (mediaContainer) {
                // Update the media container structure to match the expected format
                const blockId = blockEl.dataset.blockId;
                mediaContainer.innerHTML = `
                    <div class="media-content-preview" id="media-preview-${blockId}">
                        <div class="media-placeholder">Loading media...</div>
                    </div>
                    <button class="btn btn-sm btn-secondary select-media-btn">Change Media</button>
                `;
                mediaContainer.dataset.mediaId = selectedMedia.dataID;
                
                // Load the actual media content
                await ui.loadMediaIntoBlock(blockId, selectedMedia.dataID, currentUser.uid);
            }
        });
    } catch (error) {
        ui.showPopup('Error loading media: ' + error.message);
    }
}

async function handleSelectFeaturedMedia(target) {
    try {
        const mediaItems = await getAvailableMediaItems();
        ui.showMediaSelector(mediaItems, async (selectedMedia) => {
            const featuredMediaContainer = document.getElementById('featuredMediaContainer');
            const posterImageContainer = document.getElementById('posterImageContainer');
            const featuredMediaUrlInput = document.getElementById('blogFeaturedMediaUrl');
            
            if (featuredMediaContainer && featuredMediaUrlInput) {
                // Get the media URL from the files array (most likely location)
                let mediaURL = '';
                if (selectedMedia.files && selectedMedia.files.length > 0) {
                    mediaURL = selectedMedia.files[0].url;
                } else if (selectedMedia.mediaURL) {
                    mediaURL = selectedMedia.mediaURL;
                }
                
                featuredMediaUrlInput.value = mediaURL;
                

                
                // Create appropriate preview element based on media type
                let previewElement = '';
                let isVideo = false;
                
                if (selectedMedia.files && selectedMedia.files.length > 0) {
                    const firstFile = selectedMedia.files[0];
                    isVideo = firstFile.type && firstFile.type.startsWith('video/');
                    
                    if (isVideo) {
                        previewElement = `<video src="${mediaURL}" controls style="max-width: 200px; max-height: 100px; object-fit: cover;"></video>`;
                    } else {
                        previewElement = `<img src="${mediaURL}" alt="Featured Media" style="max-width: 200px; max-height: 100px; object-fit: cover;">`;
                    }
                } else {
                    // Fallback to URL-based detection
                    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
                    isVideo = videoExtensions.some(ext => mediaURL.toLowerCase().includes(ext));
                    
                    if (isVideo) {
                        previewElement = `<video src="${mediaURL}" controls style="max-width: 200px; max-height: 100px; object-fit: cover;"></video>`;
                    } else {
                        previewElement = `<img src="${mediaURL}" alt="Featured Media" style="max-width: 200px; max-height: 100px; object-fit: cover;">`;
                    }
                }
                
                // Update the container to show the selected media
                featuredMediaContainer.innerHTML = `
                    <div class="featured-media-preview">
                        ${previewElement}
                    </div>
                    <button class="btn btn-sm btn-secondary select-featured-media-btn">Change Featured Media</button>
                `;
                
                // Show/hide poster image selection based on whether it's a video
                if (posterImageContainer) {
                    if (isVideo) {
                        posterImageContainer.style.display = 'block';
                    } else {
                        posterImageContainer.style.display = 'none';
                        // Clear poster image if switching from video to image
                        const posterInput = document.getElementById('blogFeaturedMediaPoster');
                        if (posterInput) posterInput.value = '';
                    }
                }
            }
        });
    } catch (error) {
        ui.showPopup('Error loading media: ' + error.message);
    }
}

async function handleSelectPosterImage(target) {
    try {
        const mediaItems = await getAvailableMediaItems();
        // Filter to only show images for poster selection
        const imageItems = mediaItems.filter(item => {
            if (item.files && item.files.length > 0) {
                const firstFile = item.files[0];
                return firstFile.type && firstFile.type.startsWith('image/');
            }
            return false;
        });
        
        ui.showMediaSelector(imageItems, async (selectedMedia) => {
            const posterImageContainer = document.getElementById('posterImageContainer');
            const posterImageInput = document.getElementById('blogFeaturedMediaPoster');
            
            if (posterImageContainer && posterImageInput) {
                // Get the poster URL from the files array
                let posterURL = '';
                if (selectedMedia.files && selectedMedia.files.length > 0) {
                    posterURL = selectedMedia.files[0].url;
                } else if (selectedMedia.mediaURL) {
                    posterURL = selectedMedia.mediaURL;
                }
                posterImageInput.value = posterURL;
                
                // Update the poster preview
                const posterPreviewHtml = `
                    <div class="poster-image-preview">
                        <img src="${posterURL}" alt="Poster Image" style="max-width: 200px; max-height: 100px; object-fit: cover;">
                    </div>
                    <button class="btn btn-sm btn-secondary select-poster-image-btn">Change Poster Image</button>
                `;
                
                // Find and update just the poster content within the container
                const existingLabel = posterImageContainer.querySelector('label');
                posterImageContainer.innerHTML = '';
                if (existingLabel) {
                    posterImageContainer.appendChild(existingLabel);
                }
                posterImageContainer.insertAdjacentHTML('beforeend', posterPreviewHtml);
            }
        });
    } catch (error) {
        ui.showPopup('Error loading media: ' + error.message);
    }
}

function handleBlockLayoutToggle(target) {
    const blockEl = target.closest('.blog-block');
    if (!blockEl) return;
    
    const currentLayout = blockEl.dataset.layout || 'full';
    
    if (currentLayout === 'full') {
        // Switch to split layout
        blockEl.dataset.layout = 'left';
        blockEl.dataset.layoutRatio = '50';
        target.textContent = 'Full Width';
        
        // Add ratio controls
        const blockHeader = blockEl.querySelector('.block-header');
        const ratioControls = document.createElement('div');
        ratioControls.className = 'layout-ratio-controls';
        ratioControls.innerHTML = `
            <label for="${blockEl.dataset.blockId}_ratio">Width: </label>
            <input type="range" id="${blockEl.dataset.blockId}_ratio" class="ratio-slider" 
                   min="20" max="80" value="50" 
                   data-block-id="${blockEl.dataset.blockId}">
            <span class="ratio-display">50%</span>
        `;
        blockHeader.appendChild(ratioControls);
        
        // Add event listener for ratio changes
        const ratioSlider = ratioControls.querySelector('.ratio-slider');
        const ratioDisplay = ratioControls.querySelector('.ratio-display');
        ratioSlider.addEventListener('input', (e) => {
            const newRatio = e.target.value;
            blockEl.dataset.layoutRatio = newRatio;
            blockEl.style.width = newRatio + '%';
            ratioDisplay.textContent = newRatio + '%';
        });
        
    } else {
        // Switch to full layout
        blockEl.dataset.layout = 'full';
        target.textContent = 'Split Layout';
        
        // Remove ratio controls
        const ratioControls = blockEl.querySelector('.layout-ratio-controls');
        if (ratioControls) {
            ratioControls.remove();
        }
    }
    
    // Update block styling
    ui.updateBlockLayoutDisplay(blockEl, blockEl.dataset.layout);
}

// --- EMBED BLOCK MANAGEMENT ---
function handleEmbedRetry(target) {
    const blockId = target.dataset.blockId;
    if (!blockId) return;
    
    // Clear the error and try to auto-preview again
    const errorContainer = document.getElementById(`${blockId}_error`);
    if (errorContainer) {
        errorContainer.style.display = 'none';
    }
    
    // Try auto-preview again
    const urlInput = document.getElementById(`${blockId}_url`);
    if (urlInput && urlInput.value.trim()) {
        ui.handleEmbedUrlInputWithPreview(blockId);
    }
}

async function getAvailableMediaItems() {
    if (!currentUser) return [];
    
    const querySnapshot = await fsService.getItemsByType(currentUser.uid, 'media');
    const mediaItems = [];
    querySnapshot.forEach(doc => {
        mediaItems.push({ dataID: doc.id, ...doc.data() });
    });
    return mediaItems;
}

// --- COLUMN GROUP MANAGEMENT ---
function handleAddColumnGroup(target) {
    const sectionEl = target.closest('.blog-section');
    if (!sectionEl) return;
    
    const blocksContainer = sectionEl.querySelector('.section-blocks');
    if (!blocksContainer) return;
    
    const groupId = 'group_' + Date.now();
    const columnGroupHtml = ui.createColumnGroupHtml(groupId, [], [], 50, 50);
    blocksContainer.insertAdjacentHTML('beforeend', columnGroupHtml);
    
    // Initialize drag and drop for the new column group
    const newGroup = blocksContainer.querySelector(`[data-group-id="${groupId}"]`);
    if (newGroup) {
        ui.initializeColumnGroupDragDrop(newGroup);
    }
}

function handleAddColumnBlock(target, columnSide) {
    const columnGroup = target.closest('.column-group');
    if (!columnGroup) return;
    
    const column = columnGroup.querySelector(`.${columnSide}-column`);
    if (!column) return;
    
    const blockId = 'block_' + Date.now();
    const blockHtml = ui.createBlogBlockHtml(blockId, 'body', '', null, 'full', 50);
    column.insertAdjacentHTML('beforeend', blockHtml);
    
    // Make the new block draggable
    const newBlock = column.querySelector(`[data-block-id="${blockId}"]`);
    if (newBlock) {
        makeBlockDraggable(newBlock);
    }
    
    // Initialize Quill editor for the new block
    const editorContainer = column.querySelector(`#${blockId}_editor`);
    if (editorContainer) {
        ui.initQuillEditor(editorContainer.id, undefined, '');
    }
}

function handleUngroupColumn(target) {
    const columnGroup = target.closest('.column-group');
    if (!columnGroup) return;
    
    ui.showPopup('Are you sure you want to ungroup this column layout? All blocks will become individual blocks.', 'confirm', () => {
        const sectionBlocks = columnGroup.closest('.section-blocks');
        if (!sectionBlocks) return;
        
        // Extract all blocks from both columns
        const allBlocks = columnGroup.querySelectorAll('.blog-block');
        
        // Insert each block as individual block before the column group
        allBlocks.forEach(block => {
            sectionBlocks.insertBefore(block, columnGroup);
            makeBlockDraggable(block);
        });
        
        // Remove the column group
        columnGroup.remove();
    });
}

function handleColumnRatioChange(target) {
    const columnGroup = target.closest('.column-group');
    if (!columnGroup) return;
    
    const leftRatio = parseFloat(target.value);
    const rightRatio = 100 - leftRatio;
    
    // Update data attributes
    columnGroup.dataset.leftRatio = leftRatio;
    columnGroup.dataset.rightRatio = rightRatio;
    
    // Update visual layout
    const leftColumn = columnGroup.querySelector('.left-column');
    const rightColumn = columnGroup.querySelector('.right-column');
    const ratioDisplay = columnGroup.querySelector('.ratio-display');
    
    if (leftColumn) leftColumn.style.width = leftRatio + '%';
    if (rightColumn) rightColumn.style.width = rightRatio + '%';
    if (ratioDisplay) ratioDisplay.textContent = `${leftRatio}% / ${rightRatio}%`;
}

// Note: Drag and drop functionality is now handled in uiService.js

// Add drag attributes to sections and blocks when they're created
function makeSectionDraggable(sectionElement) {
    sectionElement.draggable = true;
    sectionElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.sectionId);
        e.dataTransfer.effectAllowed = 'move';
        e.target.classList.add('dragging');
    });
    sectionElement.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
}

function makeBlockDraggable(blockElement) {
    blockElement.draggable = true;
    blockElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.blockId);
        e.dataTransfer.effectAllowed = 'move';
        e.target.classList.add('dragging');
    });
    blockElement.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
}

async function handleSaveCalendar() {
    const title = validateField('calendarTitle', 'Title');
    if (!title) return;

    // Get the current displayed month/year from the calendar
    const currentMonthDisplay = document.getElementById('currentMonthDisplay');
    let currentViewDate = new Date();
    
    if (currentMonthDisplay) {
        const monthYearText = currentMonthDisplay.textContent;
        try {
            // Parse the displayed month/year text (e.g., "May 2025")
            const [monthName, yearStr] = monthYearText.split(' ');
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const monthIndex = monthNames.indexOf(monthName);
            const year = parseInt(yearStr);
            
            if (monthIndex !== -1 && !isNaN(year)) {
                currentViewDate = new Date(year, monthIndex, 1);
            }
        } catch (e) {
            console.error("Error parsing calendar date:", e);
        }
    }

    // Find all events in the calendar
    let events = [];
    
    // If we're editing an existing calendar, we already have events from Firestore
    if (currentItemDataCache && currentItemDataCache.events) {
        events = [...currentItemDataCache.events]; // Copy existing events
    }
    
    // Otherwise, gather events from the DOM (in case they've been added but not saved)
    if (events.length === 0) {
        const eventMarkers = document.querySelectorAll('.event-marker');
        eventMarkers.forEach(marker => {
            const eventId = marker.dataset.eventId;
            if (eventId) {
                // Try to extract event data based on the marker
                // This is a fallback in case we don't have events in currentItemDataCache
                const event = {
                    id: eventId,
                    title: marker.textContent,
                    type: marker.classList.contains('event-type-blocked') ? 'blocked' : 'event',
                    // We would need more complex logic to extract date/time/info
                    // This is just a fallback, not needed if using currentItemDataCache
                };
                events.push(event);
            }
        });
    }

    const itemData = {
        type: 'calendar',
        title: title,
        lastViewedMonth: currentViewDate.getMonth(),
        lastViewedYear: currentViewDate.getFullYear(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        events: events
    };
    _saveItemToFirestore(itemData);
}

async function _saveItemToFirestore(itemData) {
    if (!currentUser || !currentOpenItemDataID) {
        ui.showPopup("Error: No item context to save.");
        return;
    }
    ui.showLoading(true);
    try {
        await fsService.saveItem(currentUser.uid, currentOpenItemDataID, itemData);
        ui.showPopup(`${itemData.type.charAt(0).toUpperCase() + itemData.type.slice(1)} saved successfully!`, 'alert', () => {
            loadItemsForType(selectedDataType); // Refresh list in column 2
             // Update dashboard title if it was a new item or title changed
            if (itemData.title !== (currentItemDataCache ? currentItemDataCache.title : '')) {
                ui.updateDashboardTitle(`Edit: ${itemData.title}`);
            }
            // Update the item in the list to reflect its saved state (e.g. if it was new)
            handleItemSelected(currentOpenItemDataID); // Reload the saved item into dashboard
        });
        currentItemDataCache = { ...itemData, dataID: currentOpenItemDataID }; // Update cache
    } catch (error) {
        console.error("Error saving item:", error);
        ui.showPopup("Error saving: " + error.message);
    } finally {
        ui.showLoading(false);
    }
}

// --- Delete Logic ---
async function handleDeleteItem(itemType) {
    if (!currentUser || !currentOpenItemDataID) return;

    ui.showPopup(
        `Are you sure you want to delete this ${itemType}? This action cannot be undone.`,
        'confirm',
        async () => { // onConfirm
            ui.showLoading(true);
            try {
                // Specific cleanup for media files in Storage
                if (itemType === 'media' && currentItemDataCache && currentItemDataCache.files) {
                    // Option 1: Delete folder (simpler if all files are in one dataID folder)
                    const folderPath = `users/${currentUser.uid}/media/${currentOpenItemDataID}`;
                    await storageService.deleteFolderContents(folderPath);

                    // Option 2: Delete individual files (if paths are stored and more granular)
                    // const deletePromises = currentItemDataCache.files.map(file => {
                    //     if (file.storagePath) return storageService.deleteFile(file.storagePath);
                    //     return Promise.resolve();
                    // });
                    // await Promise.all(deletePromises);
                }

                await fsService.deleteItem(currentUser.uid, currentOpenItemDataID);
                ui.showPopup(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully!`, 'alert', () => {
                    currentOpenItemDataID = null;
                    currentItemDataCache = null;
                    ui.clearDashboard();
                    loadItemsForType(selectedDataType); // Refresh list
                });
            } catch (error) {
                console.error("Error deleting item:", error);
                ui.showPopup("Error deleting: " + error.message);
            } finally {
                ui.showLoading(false);
            }
        }
        // onCancel for popup is handled by uiService internally
    );
}


// --- MEDIA DASHBOARD SPECIFIC LOGIC ---
function setupMediaDashboardControls(dataID, existingItemData) {
    const mediaTypeSelect = document.getElementById('mediaTypeSelect');
    const fileInput = document.getElementById('mediaFileUpload'); // This is now handled by delegation

    if (mediaTypeSelect) {
        updateMediaUploadButtonVisibility(mediaTypeSelect.value, existingItemData ? (existingItemData.files || []).length : 0);
        // Listener already on dashboardContentEl via delegation
        // Ensure accept filter reflects current selection
        handleMediaTypeChange(mediaTypeSelect.value);
    }
    // fileInput listener also handled by delegation

    // Initialize PDF thumbnails for existing saved PDFs
    initAdminPdfThumbnails();
}

function handleMediaTypeChange(selectedType) {
    // existingMediaFiles is the current state of files shown in UI
    updateMediaUploadButtonVisibility(selectedType, existingMediaFiles.length);
    const fileInput = document.getElementById('mediaFileUpload');
    if (fileInput) {
        if (selectedType === 'photo' || selectedType === 'photoGallery') {
            fileInput.accept = 'image/*';
        } else if (selectedType === 'video') {
            fileInput.accept = 'video/*';
        } else if (selectedType === 'pdf') {
            fileInput.accept = 'application/pdf';
        } else {
            fileInput.accept = '';
        }
    }
}

function updateMediaUploadButtonVisibility(type, currentFileCount) {
    const uploadDropzone = document.getElementById('mediaUploadDropzone');
    if (!uploadDropzone) return;

    if (type === 'photoGallery') {
        uploadDropzone.style.display = 'block';
    } else { // 'photo' or 'video' or 'pdf'
        uploadDropzone.style.display = currentFileCount > 0 ? 'none' : 'block';
    }
}

function handleMediaFileSelection(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    const mediaType = document.getElementById('mediaTypeSelect').value;
    if (mediaType !== 'photoGallery' && (existingMediaFiles.length > 0 || files.length > 1)) {
        ui.showPopup("For Single Photo/Video/PDF type, only one file can be uploaded. Please remove existing or select one file.");
        event.target.value = ''; // Clear selection
        return;
    }

    files.forEach((file) => {
        mediaFilesToUpload.push(file);
        if (file.type.startsWith('video/')) {
            // Start upload immediately
            const index = mediaFilesToUpload.length - 1;
            const userID = currentUser && currentUser.uid ? currentUser.uid : 'anonymous';
            const itemDataID = currentOpenItemDataID || 'temp';
            const extension = file.name.split('.').pop();
            const fileNameInStorage = `${itemDataID}_${Date.now()}.${extension}`;
            const storagePath = `users/${userID}/media/${itemDataID}/${fileNameInStorage}`;
            let uploadObj = {
                file,
                progress: 0,
                uploadTask: null,
                uploadedUrl: null,
                storagePath,
                error: null,
                isCompressed: false,
                isDone: false,
                cancelUpload: null
            };
            mediaUploadsInProgress[index] = uploadObj;
            // Start upload
            const uploadPromise = storageService.uploadFile(storagePath, file, (progress) => {
                uploadObj.progress = progress;
                renderMediaPreviewsFromQueue();
            });
            uploadObj.uploadTask = uploadPromise;
            uploadObj.cancelUpload = () => {
                // Firebase JS SDK does not support true cancel, but we can ignore the result
                uploadObj.error = 'cancelled';
            };
            uploadPromise.then(({ downloadURL, storagePath }) => {
                uploadObj.uploadedUrl = downloadURL;
                uploadObj.storagePath = storagePath;
                uploadObj.isDone = true;
                renderMediaPreviewsFromQueue();
            }).catch((err) => {
                uploadObj.error = err;
                renderMediaPreviewsFromQueue();
            });
        }
    });
    renderMediaPreviewsFromQueue(event.target); // Pass input to clear it
    event.target.value = '';
}

function renderMediaPreviewsFromQueue(fileInputElement = null) {
    const previewsContainer = document.getElementById('mediaPreviewsContainer');
    if (!previewsContainer) return;
    previewsContainer.innerHTML = '';
    mediaFilesToUpload.forEach((file, indexOffset) => {
        const fileIndex = existingMediaFiles.length + indexOffset;
        const previewItem = document.createElement('div');
        previewItem.className = 'media-preview-item';
        previewItem.dataset.newFileIndex = indexOffset;
        const reader = new FileReader();
        let previewElement;
        if (file.type.startsWith('image/')) {
            previewElement = document.createElement('img');
            reader.onload = async (e) => {
                previewElement.src = e.target.result;
                previewElement.onload = () => {
                    const { width, height } = previewElement;
                    updateImageInfo(previewItem, file, width, height);
                };
            };
        } else if (file.type.startsWith('video/')) {
            previewElement = document.createElement('div');
            previewElement.style.position = 'relative';
            previewElement.style.width = '200px';
            previewElement.style.height = '100px';
            const video = document.createElement('video');
            video.controls = true;
            video.style.maxWidth = '200px';
            video.style.maxHeight = '100px';
            video.style.objectFit = 'cover';
            video.preload = 'auto';
            // Show preview from local file until uploaded
            reader.onload = (e) => {
                video.src = e.target.result;
                video.onloadedmetadata = () => {
                    const { videoWidth, videoHeight } = video;
                    updateImageInfo(previewItem, file, videoWidth, videoHeight);
                };
            };
            if (previewElement.src !== undefined) {
                reader.readAsDataURL(file);
            }
            previewElement.appendChild(video);
            // Upload progress bar
            const uploadObj = mediaUploadsInProgress[indexOffset];
            if (uploadObj && !uploadObj.isDone) {
                const progressBarContainer = document.createElement('div');
                progressBarContainer.className = 'video-progress-bar-container';
                const progressBar = document.createElement('div');
                progressBar.className = 'video-progress-bar';
                progressBar.style.width = (uploadObj.progress || 0) + '%';
                progressBarContainer.appendChild(progressBar);
                previewElement.appendChild(progressBarContainer);
            }
            if (uploadObj && uploadObj.error) {
                const errorMsg = document.createElement('div');
                errorMsg.className = 'video-upload-error';
                errorMsg.textContent = 'Upload failed: ' + uploadObj.error;
                previewElement.appendChild(errorMsg);
            }
        } else if (file.type === 'application/pdf') {
            previewElement = document.createElement('div');
            previewElement.style.position = 'relative';
            const canvas = document.createElement('canvas');
            canvas.style.maxWidth = '200px';
            canvas.style.maxHeight = '260px';
            previewElement.appendChild(canvas);
            // Render first page using PDF.js
            (async () => {
                try {
                    const arrayBuffer = await file.arrayBuffer();
                    if (window.pdfjsLib && window.pdfjsLib.getDocument) {
                        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                        const page = await pdf.getPage(1);
                        const viewport = page.getViewport({ scale: 1 });
                        const scale = Math.min(200 / viewport.width, 260 / viewport.height);
                        const scaledViewport = page.getViewport({ scale: scale });
                        const context = canvas.getContext('2d');
                        canvas.width = scaledViewport.width;
                        canvas.height = scaledViewport.height;
                        await page.render({ canvasContext: context, viewport: scaledViewport }).promise;
                    } else {
                        previewElement.innerHTML = '<div>PDF preview unavailable</div>';
                    }
                } catch (err) {
                    console.error('Error rendering PDF preview:', err);
                    previewElement.innerHTML = '<div>PDF preview error</div>';
                }
            })();
            // No dimensions info for PDFs
        } else {
            previewElement = document.createElement('p');
            previewElement.textContent = `Preview not available for ${file.name}`;
        }
        if (file.type.startsWith('image/')) {
            if (previewElement.src !== undefined) {
                reader.readAsDataURL(file);
            }
        }
        previewItem.appendChild(previewElement);
        const infoDiv = document.createElement('div');
        infoDiv.className = 'media-preview-item-info';
        let infoHtml = `
            <div class="form-group">
                <label for="newMediaFileCaption_${fileIndex}">Caption/Alt Text:</label>
                <input type="text" id="newMediaFileCaption_${fileIndex}" class="media-file-caption new-media-caption" placeholder="Enter caption">
            </div>
            <p class="media-filename">Filename: ${ui.escapeHTML(file.name)}</p>
        `;
        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
            infoHtml += `
                <div class="image-info" id="imageInfo_${indexOffset}">
                    <p class="image-specs">Loading dimensions...</p>
                </div>
                <div class="media-controls">
                    <button class="btn btn-sm btn-secondary crop-btn" data-file-index="${indexOffset}" type="button" style="${file.type.startsWith('image/') ? '' : 'display:none;'}">Crop</button>
                    <button class="btn btn-sm btn-secondary resize-btn" data-file-index="${indexOffset}" type="button">Resize</button>
                    <button class="btn btn-sm btn-secondary compress-btn" data-file-index="${indexOffset}" type="button">Compress</button>
                </div>
            `;
        }
        infoDiv.innerHTML = infoHtml;
        // Add event listeners for controls
        const cropBtn = infoDiv.querySelector('.crop-btn');
        if (cropBtn) {
            cropBtn.addEventListener('click', () => openCropModal(indexOffset));
        }
        const compressBtn = infoDiv.querySelector('.compress-btn');
        if (compressBtn) {
            // Replace the button to remove all old event listeners
            const newCompressBtn = compressBtn.cloneNode(true);
            compressBtn.parentNode.replaceChild(newCompressBtn, compressBtn);
            // Disable compress button for videos until upload is done
            if (file.type.startsWith('video/')) {
                const uploadObj = mediaUploadsInProgress[indexOffset];
                newCompressBtn.disabled = !(uploadObj && uploadObj.isDone);
                newCompressBtn.textContent = (uploadObj && !uploadObj.isDone) ? 'Uploading...' : 'Compress';
                newCompressBtn.addEventListener('click', () => {
                    if (file.type.startsWith('video/')) {
                        openVideoCompressModal(indexOffset);
                    } else {
                        openCompressModal(indexOffset);
                    }
                });
            } else {
                newCompressBtn.addEventListener('click', () => openCompressModal(indexOffset));
            }
        }
        const resizeBtn = infoDiv.querySelector('.resize-btn');
        if (resizeBtn) {
            resizeBtn.addEventListener('click', () => {
                if (file.type.startsWith('image/')) {
                    openResizeModal(indexOffset);
                } else if (file.type.startsWith('video/')) {
                    openVideoResizeModal(indexOffset);
                }
            });
        }
        previewItem.appendChild(infoDiv);
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm remove-media-file-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.dataset.newFileIndex = indexOffset;
        removeBtn.addEventListener('click', () => handleRemoveMediaFile(indexOffset, previewItem));
        previewItem.appendChild(removeBtn);
        previewsContainer.appendChild(previewItem);
    });
    const mediaType = document.getElementById('mediaTypeSelect').value;
    updateMediaUploadButtonVisibility(mediaType, existingMediaFiles.length + mediaFilesToUpload.length);
}

// --- IMAGE EDITING FUNCTIONS ---

function updateImageInfo(previewItem, file, width, height) {
    const fileIndex = previewItem.dataset.newFileIndex;
    const imageInfoDiv = document.getElementById(`imageInfo_${fileIndex}`);
    if (imageInfoDiv) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        imageInfoDiv.querySelector('.image-specs').textContent = `${width} × ${height} • ${fileSizeMB} MB`;
    }
}

// --- ADMIN PDF THUMBNAILS FOR EXISTING FILES ---
function initAdminPdfThumbnails() {
    const canvases = document.querySelectorAll('.pdf-thumb-canvas');
    if (!canvases || canvases.length === 0) return;
    canvases.forEach((canvas) => {
        if (canvas.dataset.rendered === '1') return;
        const url = canvas.getAttribute('data-pdf-url');
        if (!url) return;
        if (!(window.pdfjsLib && window.pdfjsLib.getDocument)) return; // PDF.js not loaded yet
        window.pdfjsLib.getDocument(url).promise.then((pdf) => {
            return pdf.getPage(1).then((page) => {
                const viewport = page.getViewport({ scale: 1 });
                const maxW = 200, maxH = 260;
                const scale = Math.min(maxW / viewport.width, maxH / viewport.height);
                const vp = page.getViewport({ scale });
                canvas.width = vp.width;
                canvas.height = vp.height;
                const ctx = canvas.getContext('2d');
                return page.render({ canvasContext: ctx, viewport: vp }).promise;
            });
        }).then(() => {
            canvas.dataset.rendered = '1';
        }).catch((err) => {
            console.error('Failed to render admin PDF thumbnail', err);
            const parent = canvas.parentNode;
            if (parent) parent.innerHTML = '<div>PDF preview not available</div>';
        });
    });
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function openCropModal(fileIndex) {
    // Remove any existing image editor modal
    const existingModal = document.querySelector('.image-editor-modal');
    if (existingModal) existingModal.remove();
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('image/')) return;
    
    const modal = document.createElement('div');
    modal.className = 'image-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Crop Image</h3>
                <button class="modal-close-btn" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="crop-controls">
                    <label>Aspect Ratio:</label>
                    <select class="aspect-ratio-select">
                        <option value="free">Free</option>
                        <option value="1:1">Square (1:1)</option>
                        <option value="4:3">Standard (4:3)</option>
                        <option value="16:9">Widescreen (16:9)</option>
                    </select>
                </div>
                <div class="crop-canvas-container">
                    <canvas id="cropCanvas"></canvas>
                    <div class="crop-overlay">
                        <div class="crop-selection">
                            <div class="crop-handle nw"></div>
                            <div class="crop-handle ne"></div>
                            <div class="crop-handle sw"></div>
                            <div class="crop-handle se"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary cancel-crop" type="button">Cancel</button>
                <button class="btn btn-primary apply-crop" type="button">Apply Crop</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeCropModal(modal, file, fileIndex);
}

function openCompressModal(fileIndex) {
    // Remove any existing image editor modal
    const existingModal = document.querySelector('.image-editor-modal');
    if (existingModal) existingModal.remove();
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('image/')) return;
    
    const modal = document.createElement('div');
    modal.className = 'image-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Compress Image</h3>
                <button class="modal-close-btn" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="compress-controls">
                    <div class="quality-control">
                        <label>Quality: <span class="quality-value">80%</span></label>
                        <input type="range" class="quality-slider" min="10" max="100" value="80" step="5">
                    </div>
                    <div class="size-comparison">
                        <div class="size-info">
                            <span class="original-size">Original: ${formatFileSize(file.size)}</span>
                            <span class="compressed-size">Compressed: Calculating...</span>
                        </div>
                    </div>
                </div>
                <div class="compress-preview-container">
                    <canvas id="compressCanvas"></canvas>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary cancel-compress" type="button">Cancel</button>
                <button class="btn btn-primary apply-compress" type="button">Apply Compression</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeCompressModal(modal, file, fileIndex);
}

function openResizeModal(fileIndex) {
    // Remove any existing image editor modal
    const existingModal = document.querySelector('.image-editor-modal');
    if (existingModal) existingModal.remove();
    const file = mediaFilesToUpload[fileIndex];
    if (!file || (!file.type.startsWith('image/') && !file.type.startsWith('video/'))) return;
    
    const modal = document.createElement('div');
    modal.className = 'image-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Resize Image</h3>
                <button class="modal-close-btn" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="resize-controls">
                    <div class="current-size">
                        <span class="size-label">Current Size:</span>
                        <span class="current-dimensions">Loading...</span>
                    </div>
                    
                    <div class="resize-options">
                        <div class="resize-presets">
                            <label>Quick Resize:</label>
                            <div class="preset-buttons">
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="50">50%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="75">75%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="125">125%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="150">150%</button>
                            </div>
                        </div>
                        
                        <div class="size-presets">
                            <label>Common Sizes:</label>
                            <select class="size-preset-select">
                                <option value="">Custom</option>
                                <option value="320,240">320×240 (QVGA)</option>
                                <option value="640,480">640×480 (VGA)</option>
                                <option value="800,600">800×600 (SVGA)</option>
                                <option value="1024,768">1024×768 (XGA)</option>
                                <option value="1280,720">1280×720 (HD)</option>
                                <option value="1920,1080">1920×1080 (Full HD)</option>
                                <option value="2560,1440">2560×1440 (QHD)</option>
                            </select>
                        </div>
                        
                        <div class="custom-dimensions">
                            <div class="dimension-inputs">
                                <div class="input-group">
                                    <label>Width:</label>
                                    <input type="number" class="width-input" min="1" placeholder="Width">
                                    <span class="unit">px</span>
                                </div>
                                <div class="aspect-ratio-lock">
                                    <input type="checkbox" class="maintain-aspect" id="maintainAspect" checked>
                                    <label for="maintainAspect">🔗</label>
                                </div>
                                <div class="input-group">
                                    <label>Height:</label>
                                    <input type="number" class="height-input" min="1" placeholder="Height">
                                    <span class="unit">px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="size-comparison">
                        <div class="size-info">
                            <span class="original-size-display">Original: Loading...</span>
                            <span class="new-size-display">New: Not calculated</span>
                        </div>
                    </div>
                </div>
                
                <div class="resize-preview-container">
                    <canvas id="resizeCanvas"></canvas>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary cancel-resize" type="button">Cancel</button>
                <button class="btn btn-primary apply-resize" type="button" disabled>Apply Resize</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeResizeModal(modal, file, fileIndex);
}

function initializeCropModal(modal, file, fileIndex) {
    const canvas = modal.querySelector('#cropCanvas');
    const ctx = canvas.getContext('2d');
    const aspectRatioSelect = modal.querySelector('.aspect-ratio-select');
    const cropOverlay = modal.querySelector('.crop-overlay');
    const cropSelection = modal.querySelector('.crop-selection');
    
    let img = new Image();
    let cropData = { x: 0, y: 0, width: 0, height: 0 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    
    img.onload = () => {
        // Set canvas size
        const maxWidth = 600;
        const maxHeight = 400;
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height, 1);
        
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Initialize crop selection (25% margin)
        const margin = 0.125;
        cropData = {
            x: canvas.width * margin,
            y: canvas.height * margin,
            width: canvas.width * (1 - 2 * margin),
            height: canvas.height * (1 - 2 * margin)
        };
        
        updateCropSelection();
    };
    
    img.src = URL.createObjectURL(file);
    
    function updateCropSelection() {
        cropSelection.style.left = cropData.x + 'px';
        cropSelection.style.top = cropData.y + 'px';
        cropSelection.style.width = cropData.width + 'px';
        cropSelection.style.height = cropData.height + 'px';
    }
    
    function applyAspectRatio(ratio) {
        if (ratio === 'free') return;
        
        const [w, h] = ratio.split(':').map(Number);
        const aspectRatio = w / h;
        
        // Adjust crop dimensions to maintain aspect ratio
        const currentRatio = cropData.width / cropData.height;
        
        if (currentRatio > aspectRatio) {
            cropData.width = cropData.height * aspectRatio;
        } else {
            cropData.height = cropData.width / aspectRatio;
        }
        
        // Keep within bounds
        if (cropData.x + cropData.width > canvas.width) {
            cropData.x = canvas.width - cropData.width;
        }
        if (cropData.y + cropData.height > canvas.height) {
            cropData.y = canvas.height - cropData.height;
        }
        
        updateCropSelection();
    }
    
    // Event handlers
    aspectRatioSelect.addEventListener('change', (e) => {
        applyAspectRatio(e.target.value);
    });
    
    // Simple drag functionality for crop selection
    cropSelection.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStart = { x: e.clientX, y: e.clientY };
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        
        cropData.x = Math.max(0, Math.min(canvas.width - cropData.width, cropData.x + deltaX));
        cropData.y = Math.max(0, Math.min(canvas.height - cropData.height, cropData.y + deltaY));
        
        updateCropSelection();
        dragStart = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Modal actions
    modal.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.cancel-crop').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.apply-crop').addEventListener('click', () => {
        applyCrop(fileIndex, cropData, canvas, img);
        modal.remove();
    });
}

function initializeCompressModal(modal, file, fileIndex) {
    const canvas = modal.querySelector('#compressCanvas');
    const ctx = canvas.getContext('2d');
    const qualitySlider = modal.querySelector('.quality-slider');
    const qualityValue = modal.querySelector('.quality-value');
    const compressedSize = modal.querySelector('.compressed-size');
    
    let img = new Image();
    let currentQuality = 0.8;
    
    img.onload = () => {
        // Set canvas size
        const maxWidth = 500;
        const maxHeight = 400;
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height, 1);
        
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Initial compression preview
        updateCompressionPreview();
    };
    
    img.src = URL.createObjectURL(file);
    
    function updateCompressionPreview() {
        // Create a temporary canvas with original dimensions for compression test
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);
        
        // Convert to blob to estimate compressed size and update preview
        tempCanvas.toBlob((blob) => {
            compressedSize.textContent = `Compressed: ${formatFileSize(blob.size)}`;
            
            // Update the preview canvas with compressed image
            const reader = new FileReader();
            reader.onload = (e) => {
                const compressedImg = new Image();
                compressedImg.onload = () => {
                    // Clear and redraw the preview canvas with compressed image
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(compressedImg, 0, 0, canvas.width, canvas.height);
                };
                compressedImg.src = e.target.result;
            };
            reader.readAsDataURL(blob);
        }, 'image/jpeg', currentQuality);
    }
    
    // Event handlers
    qualitySlider.addEventListener('input', (e) => {
        currentQuality = e.target.value / 100;
        qualityValue.textContent = `${e.target.value}%`;
        updateCompressionPreview();
    });
    
    // Modal actions
    modal.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.cancel-compress').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.apply-compress').addEventListener('click', () => {
        applyCompression(fileIndex, currentQuality);
        modal.remove();
    });
}

function applyCrop(fileIndex, cropData, previewCanvas, originalImg) {
    // Calculate scale factor between preview canvas and original image
    const scaleX = originalImg.width / previewCanvas.width;
    const scaleY = originalImg.height / previewCanvas.height;
    
    // Create canvas with cropped dimensions
    const croppedCanvas = document.createElement('canvas');
    const ctx = croppedCanvas.getContext('2d');
    
    croppedCanvas.width = cropData.width * scaleX;
    croppedCanvas.height = cropData.height * scaleY;
    
    // Draw cropped portion
    ctx.drawImage(
        originalImg,
        cropData.x * scaleX, cropData.y * scaleY,
        cropData.width * scaleX, cropData.height * scaleY,
        0, 0,
        croppedCanvas.width, croppedCanvas.height
    );
    
    // Convert to blob and replace file
    croppedCanvas.toBlob((blob) => {
        const newFile = new File([blob], mediaFilesToUpload[fileIndex].name, {
            type: 'image/jpeg',
            lastModified: Date.now()
        });
        
        mediaFilesToUpload[fileIndex] = newFile;
        
        // Update preview
        const previewItem = document.querySelector(`[data-new-file-index="${fileIndex}"]`);
        const imgElement = previewItem.querySelector('img');
        if (imgElement) {
            imgElement.src = URL.createObjectURL(newFile);
            imgElement.onload = () => {
                updateImageInfo(previewItem, newFile, imgElement.width, imgElement.height);
            };
        }
    }, 'image/jpeg', 0.9);
}

function applyCompression(fileIndex, quality) {
    const file = mediaFilesToUpload[fileIndex];
    const img = new Image();
    
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
            const newFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now()
            });
            
            mediaFilesToUpload[fileIndex] = newFile;
            
            // Update preview
            const previewItem = document.querySelector(`[data-new-file-index="${fileIndex}"]`);
            const imgElement = previewItem.querySelector('img');
            if (imgElement) {
                imgElement.src = URL.createObjectURL(newFile);
                imgElement.onload = () => {
                    updateImageInfo(previewItem, newFile, imgElement.width, imgElement.height);
                };
            }
        }, 'image/jpeg', quality);
    };
    
    img.src = URL.createObjectURL(file);
}

function initializeResizeModal(modal, file, fileIndex) {
    const canvas = modal.querySelector('#resizeCanvas');
    const ctx = canvas.getContext('2d');
    const widthInput = modal.querySelector('.width-input');
    const heightInput = modal.querySelector('.height-input');
    const maintainAspectCheckbox = modal.querySelector('.maintain-aspect');
    const currentDimensions = modal.querySelector('.current-dimensions');
    const originalSizeDisplay = modal.querySelector('.original-size-display');
    const newSizeDisplay = modal.querySelector('.new-size-display');
    const applyBtn = modal.querySelector('.apply-resize');
    const sizePresetSelect = modal.querySelector('.size-preset-select');
    
    let img = new Image();
    let originalWidth, originalHeight, originalAspectRatio;
    let targetWidth, targetHeight;
    
    img.onload = () => {
        originalWidth = img.width;
        originalHeight = img.height;
        originalAspectRatio = originalWidth / originalHeight;
        
        // Set initial values
        widthInput.value = originalWidth;
        heightInput.value = originalHeight;
        targetWidth = originalWidth;
        targetHeight = originalHeight;
        
        // Update display
        currentDimensions.textContent = `${originalWidth} × ${originalHeight}`;
        originalSizeDisplay.textContent = `Original: ${originalWidth} × ${originalHeight} • ${formatFileSize(file.size)}`;
        updatePreview();
    };
    
    function updatePreview() {
        if (!targetWidth || !targetHeight || targetWidth <= 0 || targetHeight <= 0) {
            applyBtn.disabled = true;
            return;
        }
        
        // Set canvas display size (scaled down for preview)
        const maxPreviewWidth = 500;
        const maxPreviewHeight = 400;
        const previewScale = Math.min(maxPreviewWidth / targetWidth, maxPreviewHeight / targetHeight, 1);
        
        canvas.width = targetWidth * previewScale;
        canvas.height = targetHeight * previewScale;
        
        // Draw resized image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Create temp canvas to estimate file size
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = targetWidth;
        tempCanvas.height = targetHeight;
        tempCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
        
        tempCanvas.toBlob((blob) => {
            newSizeDisplay.textContent = `New: ${targetWidth} × ${targetHeight} • ${formatFileSize(blob.size)}`;
        }, 'image/jpeg', 0.9);
        
        applyBtn.disabled = false;
    }
    
    function updateDimensions(newWidth, newHeight) {
        targetWidth = newWidth;
        targetHeight = newHeight;
        updatePreview();
    }
    
    // Event handlers
    widthInput.addEventListener('input', (e) => {
        const newWidth = parseInt(e.target.value);
        if (newWidth && newWidth > 0) {
            if (maintainAspectCheckbox.checked) {
                const newHeight = Math.round(newWidth / originalAspectRatio);
                heightInput.value = newHeight;
                updateDimensions(newWidth, newHeight);
            } else {
                updateDimensions(newWidth, targetHeight);
            }
        }
    });
    
    heightInput.addEventListener('input', (e) => {
        const newHeight = parseInt(e.target.value);
        if (newHeight && newHeight > 0) {
            if (maintainAspectCheckbox.checked) {
                const newWidth = Math.round(newHeight * originalAspectRatio);
                widthInput.value = newWidth;
                updateDimensions(newWidth, newHeight);
            } else {
                updateDimensions(targetWidth, newHeight);
            }
        }
    });
    
    // Preset percentage buttons
    modal.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const percentage = parseInt(e.target.dataset.preset);
            const newWidth = Math.round(originalWidth * percentage / 100);
            const newHeight = Math.round(originalHeight * percentage / 100);
            
            widthInput.value = newWidth;
            heightInput.value = newHeight;
            updateDimensions(newWidth, newHeight);
        });
    });
    
    // Size preset dropdown
    sizePresetSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            const [width, height] = e.target.value.split(',').map(Number);
            widthInput.value = width;
            heightInput.value = height;
            updateDimensions(width, height);
        }
    });
    
    // Modal actions
    modal.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.cancel-resize').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.apply-resize').addEventListener('click', () => {
        applyResize(fileIndex, targetWidth, targetHeight);
        modal.remove();
    });
    
    img.src = URL.createObjectURL(file);
}

function applyResize(fileIndex, newWidth, newHeight) {
    const file = mediaFilesToUpload[fileIndex];
    const img = new Image();
    
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        canvas.style.display = 'none';
        document.body.appendChild(canvas); // Attach canvas to DOM (hidden)
        const ctx = canvas.getContext('2d');
        const stream = canvas.captureStream();
        
        // Draw resized image
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        
        canvas.toBlob((blob) => {
            const newFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now()
            });
            
            mediaFilesToUpload[fileIndex] = newFile;
            
            // Update preview
            const previewItem = document.querySelector(`[data-new-file-index="${fileIndex}"]`);
            const imgElement = previewItem.querySelector('img');
            if (imgElement) {
                imgElement.src = URL.createObjectURL(newFile);
                imgElement.onload = () => {
                    updateImageInfo(previewItem, newFile, imgElement.width, imgElement.height);
                };
            }
            document.body.removeChild(canvas); // Clean up canvas (moved here)
        }, 'image/jpeg', 0.9);
    };
    
    img.src = URL.createObjectURL(file);
    // document.body.removeChild(canvas); // Clean up canvas (removed from here)
}

// --- EXISTING IMAGE EDITING FUNCTIONS --- 
// Note: Editing existing images disabled due to CORS restrictions with Firebase Storage
// Functions removed to reduce code size and prevent confusion

function handleRemoveMediaFile(index, itemElement) {
    const isNewFile = itemElement.dataset.newFileIndex !== undefined;

    if (isNewFile) {
        const newFileIdx = parseInt(itemElement.dataset.newFileIndex);
        mediaFilesToUpload.splice(newFileIdx, 1); // Remove from upload queue
        itemElement.remove();
        // Re-render or re-index data-new-file-index for subsequent new files if necessary
        // For simplicity, current approach might leave gaps in newFileIndex if multiple are added then one removed.
        // A better way is to re-render all new previews.
        // Quick fix: just remove and let save handle current queue.
        document.querySelectorAll('.media-preview-item[data-new-file-index]').forEach((el, i) => {
            el.dataset.newFileIndex = i; // Re-index
            el.querySelector('.remove-media-file-btn').dataset.newFileIndex = i;
        });

    } else { // Existing file
        const filename = itemElement.dataset.filename;
        ui.showPopup(`Are you sure you want to remove "${filename}"? It will be deleted from storage on save.`, 'confirm',
            () => {
                const existingFileIndex = existingMediaFiles.findIndex(f => f.filename === filename && f.storagePath === itemElement.dataset.storagePath); // More robust check with storagePath
                if (existingFileIndex > -1) {
                    // Mark for deletion on save, or delete immediately if preferred (more complex)
                    // For now, we remove from UI and handle deletion from storage during save (by not including it)
                    // or by having a 'deletedFiles' array.
                    // Simple: remove from existingMediaFiles and re-render (or just remove element)
                    const removedFile = existingMediaFiles.splice(existingFileIndex, 1)[0];
                    // Add to a 'toBeDeletedFromStorage' list if you want to explicitly delete on save.
                    // For now, just removing from 'existingMediaFiles' means it won't be in the next save's 'files' array.
                    // The main delete of the *whole media item* handles folder cleanup.
                    // Individual file deletion from storage on *item save* needs explicit handling.
                    // For now, this just removes it from the list to be saved.
                    // Actual deletion from storage needs to happen here or on save.
                    if (removedFile && removedFile.storagePath) {
                        // Add to a list of files to be deleted from storage when "Save Media" is clicked
                        if (!currentItemDataCache.filesToDelete) currentItemDataCache.filesToDelete = [];
                        currentItemDataCache.filesToDelete.push(removedFile.storagePath);
                    }
                }
                itemElement.remove();
                // Update visibility
                const mediaType = document.getElementById('mediaTypeSelect').value;
                updateMediaUploadButtonVisibility(mediaType, existingMediaFiles.length + mediaFilesToUpload.length);
            }
        );
    }
     // Update visibility of upload button
    const mediaType = document.getElementById('mediaTypeSelect').value;
    updateMediaUploadButtonVisibility(mediaType, existingMediaFiles.length + mediaFilesToUpload.length);
}


async function handleSaveMedia() {
    const title = validateField('mediaTitle', 'Collection Title');
    if (!title) return;

    const mediaType = document.getElementById('mediaTypeSelect').value;
    const itemDataID = currentOpenItemDataID; // This is the ID for the media item itself
    const userID = currentUser.uid;

    ui.showLoading(true);
    const uploadProgressContainer = document.getElementById('uploadProgressContainer');
    const uploadProgressText = document.getElementById('uploadProgressText');
    const uploadProgressBar = document.getElementById('uploadProgressBar');

    if (uploadProgressContainer) uploadProgressContainer.style.display = 'block';
    if (uploadProgressText) uploadProgressText.textContent = 'Preparing uploads...';
    if (uploadProgressBar) uploadProgressBar.value = 0;

    let uploadedFileDetails = [...existingMediaFiles]; // Start with existing files

    // Handle deletion of marked files from storage
    if (currentItemDataCache && currentItemDataCache.filesToDelete) {
        for (const path of currentItemDataCache.filesToDelete) {
            try {
                await storageService.deleteFile(path);
                 console.log("Successfully deleted from storage:", path);
            } catch (err) {
                console.error("Failed to delete marked file from storage:", path, err);
                // Optionally, inform user, but continue for now
            }
        }
        currentItemDataCache.filesToDelete = []; // Clear the list
    }


    try {
        for (let i = 0; i < mediaFilesToUpload.length; i++) {
            const file = mediaFilesToUpload[i];
            const suffixNumber = existingMediaFiles.length + i + 1; // For gallery naming
            let fileNameInStorage;

            if (mediaType === 'photoGallery') {
                const extension = file.name.split('.').pop();
                fileNameInStorage = `${itemDataID}_${suffixNumber}.${extension}`;
            } else { // Single photo or video
                const extension = file.name.split('.').pop();
                fileNameInStorage = `${itemDataID}.${extension}`; // Overwrites if re-uploading single
            }

            const storagePath = `users/${userID}/media/${itemDataID}/${fileNameInStorage}`;

            if (uploadProgressText) uploadProgressText.textContent = `Uploading ${file.name}... (${i + 1}/${mediaFilesToUpload.length})`;

            const uploadResult = await storageService.uploadFile(storagePath, file, (progress) => {
                if (uploadProgressBar) uploadProgressBar.value = progress;
            });

            // Get caption for this newly uploaded file
            const captionInput = document.querySelector(`.media-preview-item[data-new-file-index="${i}"] .new-media-caption`);
            const caption = captionInput ? captionInput.value.trim() : '';

            uploadedFileDetails.push({
                url: uploadResult.downloadURL,
                storagePath: uploadResult.storagePath, // Full path from storage service
                filename: fileNameInStorage, // The name we gave it in storage
                originalFilename: file.name, // Keep original for reference if needed
                caption: caption,
                type: file.type
            });
        }

        mediaFilesToUpload = []; // Clear queue after successful uploads

        // Update captions for existing files
        document.querySelectorAll('.media-preview-item:not([data-new-file-index])').forEach(itemEl => {
            const fileIndex = parseInt(itemEl.dataset.fileIndex); // index in original 'files' array
            const captionInput = itemEl.querySelector('.media-file-caption');
            if (captionInput && uploadedFileDetails[fileIndex]) { // Check if file still exists in our details array
                uploadedFileDetails[fileIndex].caption = captionInput.value.trim();
            }
        });


        const itemData = {
            type: 'media',
            title: title,
            mediaType: mediaType,
            files: uploadedFileDetails
        };
        if (uploadProgressContainer) uploadProgressContainer.style.display = 'none';
        await _saveItemToFirestore(itemData);
        // After save, re-render the media dashboard with the new state of files
        // The _saveItemToFirestore calls handleItemSelected which will re-render.

    } catch (error) {
        console.error("Error during media save/upload:", error);
        ui.showPopup("Error saving media: " + error.message);
        if (uploadProgressContainer) uploadProgressContainer.style.display = 'none';
        ui.showLoading(false);
    }
    // ui.showLoading(false) is called in _saveItemToFirestore's finally block
}

// --- COLUMN RESIZING FUNCTIONALITY ---
function initColumnResizing() {
    const resizeHandles = document.querySelectorAll('.column-resize-handle');
    
    resizeHandles.forEach(handle => {
        handle.addEventListener('mousedown', initResize);
    });
}

function initResize(e) {
    e.preventDefault();
    
    const handle = e.target;
    const targetId = handle.getAttribute('data-resize-target');
    const targetColumn = document.getElementById(targetId);
    
    if (!targetColumn) return;
    
    const startX = e.clientX;
    const startWidth = targetColumn.getBoundingClientRect().width;
    
    // Add visual feedback
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    
    function doResize(e) {
        const deltaX = e.clientX - startX;
        let newWidth = startWidth + deltaX;
        
        // Get constraints from CSS
        const computedStyle = window.getComputedStyle(targetColumn);
        const minWidth = parseInt(computedStyle.minWidth) || 150;
        const maxWidth = parseInt(computedStyle.maxWidth) || 500;
        
        // Apply constraints
        newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
        
        // Update the column width
        targetColumn.style.flexBasis = newWidth + 'px';
        targetColumn.style.width = newWidth + 'px';
    }
    
    function stopResize() {
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        
        document.removeEventListener('mousemove', doResize);
        document.removeEventListener('mouseup', stopResize);
        
        // Store the new width in localStorage for persistence
        const targetId = handle.getAttribute('data-resize-target');
        const currentWidth = targetColumn.getBoundingClientRect().width;
        localStorage.setItem(`column-width-${targetId}`, currentWidth);
    }
    
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);
}

// Restore column widths from localStorage on page load
function restoreColumnWidths() {
    const columns = ['dataTypesNav', 'itemsListSection'];
    
    columns.forEach(columnId => {
        const savedWidth = localStorage.getItem(`column-width-${columnId}`);
        if (savedWidth) {
            const column = document.getElementById(columnId);
            if (column) {
                column.style.flexBasis = savedWidth + 'px';
                column.style.width = savedWidth + 'px';
            }
        }
    });
}

// Call restore function after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure styles are applied
    setTimeout(restoreColumnWidths, 100);
});

function openVideoCompressModal(fileIndex) {
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('video/')) return;
    
    const modal = document.createElement('div');
    modal.className = 'video-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Compress Video</h3>
                <button class="modal-close-btn" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="video-preview">
                    <video id="videoPreview" controls style="max-width: 100%; max-height: 300px;">
                        <source src="${URL.createObjectURL(file)}" type="${file.type}">
                    </video>
                </div>
                <div class="compress-controls">
                    <div class="bitrate-control">
                        <label>Bitrate: <span class="bitrate-value">2 Mbps</span></label>
                        <select class="bitrate-select">
                            <option value="8000000">8 Mbps (High Quality)</option>
                            <option value="5000000">5 Mbps (Good Quality)</option>
                            <option value="2000000" selected>2 Mbps (Medium Quality)</option>
                            <option value="1000000">1 Mbps (Low Quality)</option>
                            <option value="500000">0.5 Mbps (Very Low Quality)</option>
                        </select>
                    </div>
                    <div class="size-comparison">
                        <div class="size-info">
                            <span class="original-size">Original: ${formatFileSize(file.size)}</span>
                            <span class="compressed-size">Compressed: Calculating...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary cancel-compress" type="button">Cancel</button>
                <button class="btn btn-primary apply-compress" type="button">Apply Compression</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeVideoCompressModal(modal, file, fileIndex);
}

function initializeVideoCompressModal(modal, file, fileIndex) {
    const closeBtn = modal.querySelector('.modal-close-btn');
    const cancelBtn = modal.querySelector('.cancel-compress');
    const applyBtn = modal.querySelector('.apply-compress');
    const bitrateSelect = modal.querySelector('.bitrate-select');
    const bitrateValue = modal.querySelector('.bitrate-value');
    const compressedSizeSpan = modal.querySelector('.compressed-size');
    const video = modal.querySelector('#videoPreview');
    let lastBitrate = parseInt(bitrateSelect.value);
    let isCompressing = false;

    // Clean up function
    const cleanup = () => {
        URL.revokeObjectURL(video.src);
        modal.remove();
    };

    // Event listeners
    closeBtn.addEventListener('click', cleanup);
    cancelBtn.addEventListener('click', cleanup);

    bitrateSelect.addEventListener('change', () => {
        const bitrate = parseInt(bitrateSelect.value);
        bitrateValue.textContent = `${(bitrate / 1000000).toFixed(1)} Mbps`;
        updateEstimate();
    });

    async function updateEstimate() {
        if (isCompressing) return;
        isCompressing = true;
        compressedSizeSpan.textContent = 'Compressed: Calculating...';
        const bitrate = parseInt(bitrateSelect.value);
        // Simulate compression to estimate size (use duration * bitrate)
        const duration = video.duration || 1;
        const estimatedSize = Math.round((bitrate / 8) * duration); // bytes
        compressedSizeSpan.textContent = `Compressed: ${formatFileSize(estimatedSize)}`;
        lastBitrate = bitrate;
        isCompressing = false;
    }

    updateEstimate();

    applyBtn.addEventListener('click', async () => {
        applyBtn.disabled = true;
        applyBtn.textContent = 'Compressing...';
        try {
            await applyVideoCompression(fileIndex, {
                quality: 1, // Always 1 for video
                bitrate: lastBitrate
            });
            cleanup();
        } catch (error) {
            console.error('Error compressing video:', error);
            ui.showPopup('Error compressing video. Please try again.');
            applyBtn.disabled = false;
            applyBtn.textContent = 'Apply Compression';
        }
    });
}

async function applyVideoCompression(fileIndex, options) {
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('video/')) return;

    // Create MediaRecorder with specified bitrate
    const stream = await createVideoStream(file);
    const chunks = [];
    
    const recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp8,opus',
        videoBitsPerSecond: options.bitrate
    });
    
    recorder.ondataavailable = (e) => chunks.push(e.data);
    
    recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        
        // Update the file in the upload queue
        const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, '') + '_compressed.webm', {
            type: 'video/webm'
        });
        
        mediaFilesToUpload[fileIndex] = compressedFile;
        
        // Update the preview
        const previewItem = document.querySelector(`[data-new-file-index="${fileIndex}"]`);
        if (previewItem) {
            const video = previewItem.querySelector('video');
            if (video) {
                const oldSrc = video.src;
                video.src = URL.createObjectURL(compressedFile);
                URL.revokeObjectURL(oldSrc);
            }
            
            // Update file info
            const sizeInfo = previewItem.querySelector('.file-info');
            if (sizeInfo) {
                sizeInfo.textContent = `${compressedFile.name} (${formatFileSize(compressedFile.size)})`;
            }
        }
    };
    
    // Start recording the video stream
    recorder.start();
    
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    await new Promise((resolve) => {
        video.onloadedmetadata = () => {
            video.currentTime = 0;
            video.play();
            resolve();
        };
    });
    
    // Record the entire video
    await new Promise((resolve) => {
        video.onended = () => {
            recorder.stop();
            stream.getTracks().forEach(track => track.stop());
            resolve();
        };
    });
}

async function createVideoStream(file) {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    await new Promise((resolve) => {
        video.onloadedmetadata = () => {
            video.currentTime = 0;
            resolve();
        };
    });
    
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    
    // Create a stream from the canvas
    const stream = canvas.captureStream();
    
    // Add audio track if present
    const audioTracks = (await createMediaStreamFromFile(file)).getAudioTracks();
    audioTracks.forEach(track => stream.addTrack(track));
    
    // Start the video processing loop
    video.play();
    function processFrame() {
        if (!video.paused && !video.ended) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(processFrame);
        }
    }
    processFrame();
    
    return stream;
}

async function createMediaStreamFromFile(file) {
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(file);
    await new Promise((resolve) => {
        audio.onloadedmetadata = resolve;
    });
    const stream = audio.captureStream();
    const tracks = stream ? stream.getAudioTracks() : [];
    if (tracks.length > 0) {
        return new MediaStream([tracks[0]]);
    } else {
        return new MediaStream(); // No audio track
    }
}

function openVideoResizeModal(fileIndex) {
    // Remove any existing video editor modal
    const existingModal = document.querySelector('.video-editor-modal');
    if (existingModal) existingModal.remove();
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('video/')) return;
    const modal = document.createElement('div');
    modal.className = 'video-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Resize Video</h3>
                <button class="modal-close-btn" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="resize-controls">
                    <div class="current-size">
                        <span class="size-label">Current Size:</span>
                        <span class="current-dimensions">Loading...</span>
                    </div>
                    <div class="resize-options">
                        <div class="resize-presets">
                            <label>Quick Resize:</label>
                            <div class="preset-buttons">
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="50">50%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="75">75%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="125">125%</button>
                                <button class="btn btn-sm btn-outline preset-btn" data-preset="150">150%</button>
                            </div>
                        </div>
                        <div class="size-presets">
                            <label>Common Sizes:</label>
                            <select class="size-preset-select">
                                <option value="">Custom</option>
                                <option value="320,240">320×240 (QVGA)</option>
                                <option value="640,480">640×480 (VGA)</option>
                                <option value="800,600">800×600 (SVGA)</option>
                                <option value="1024,768">1024×768 (XGA)</option>
                                <option value="1280,720">1280×720 (HD)</option>
                                <option value="1920,1080">1920×1080 (Full HD)</option>
                                <option value="2560,1440">2560×1440 (QHD)</option>
                            </select>
                        </div>
                        <div class="custom-dimensions">
                            <div class="dimension-inputs">
                                <div class="input-group">
                                    <label>Width:</label>
                                    <input type="number" class="width-input" min="1" placeholder="Width">
                                    <span class="unit">px</span>
                                </div>
                                <div class="aspect-ratio-lock">
                                    <input type="checkbox" class="maintain-aspect" id="maintainAspectVideo" checked>
                                    <label for="maintainAspectVideo">🔗</label>
                                </div>
                                <div class="input-group">
                                    <label>Height:</label>
                                    <input type="number" class="height-input" min="1" placeholder="Height">
                                    <span class="unit">px</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="size-comparison">
                        <div class="size-info">
                            <span class="original-size-display">Original: Loading...</span>
                            <span class="new-size-display">New: Not calculated</span>
                        </div>
                    </div>
                </div>
                <div class="resize-preview-container">
                    <video id="resizeVideoPreview" controls style="max-width: 100%; max-height: 200px;"></video>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary cancel-resize" type="button">Cancel</button>
                <button class="btn btn-primary apply-resize" type="button" disabled>Apply Resize</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    initializeVideoResizeModal(modal, file, fileIndex);
}

function initializeVideoResizeModal(modal, file, fileIndex) {
    const closeBtn = modal.querySelector('.modal-close-btn');
    const cancelBtn = modal.querySelector('.cancel-resize');
    const applyBtn = modal.querySelector('.apply-resize');
    const widthInput = modal.querySelector('.width-input');
    const heightInput = modal.querySelector('.height-input');
    const maintainAspect = modal.querySelector('.maintain-aspect');
    const presetBtns = modal.querySelectorAll('.preset-btn');
    const sizePresetSelect = modal.querySelector('.size-preset-select');
    const currentDimensions = modal.querySelector('.current-dimensions');
    const originalSizeDisplay = modal.querySelector('.original-size-display');
    const newSizeDisplay = modal.querySelector('.new-size-display');
    const videoPreview = modal.querySelector('#resizeVideoPreview');
    let originalWidth = 0;
    let originalHeight = 0;
    let aspectRatio = 1;

    // Clean up
    const cleanup = () => {
        URL.revokeObjectURL(videoPreview.src);
        modal.remove();
    };
    closeBtn.addEventListener('click', cleanup);
    cancelBtn.addEventListener('click', cleanup);

    // Load video and set initial dimensions
    videoPreview.src = URL.createObjectURL(file);
    videoPreview.onloadedmetadata = () => {
        originalWidth = videoPreview.videoWidth;
        originalHeight = videoPreview.videoHeight;
        aspectRatio = originalWidth / originalHeight;
        widthInput.value = originalWidth;
        heightInput.value = originalHeight;
        currentDimensions.textContent = `${originalWidth} × ${originalHeight}`;
        originalSizeDisplay.textContent = `Original: ${originalWidth} × ${originalHeight}`;
        updateNewSizeDisplay();
        applyBtn.disabled = false;
    };

    function updateNewSizeDisplay() {
        const w = parseInt(widthInput.value) || 0;
        const h = parseInt(heightInput.value) || 0;
        newSizeDisplay.textContent = `New: ${w} × ${h}`;
    }

    widthInput.addEventListener('input', () => {
        if (maintainAspect.checked) {
            heightInput.value = Math.round((parseInt(widthInput.value) || 1) / aspectRatio);
        }
        updateNewSizeDisplay();
    });
    heightInput.addEventListener('input', () => {
        if (maintainAspect.checked) {
            widthInput.value = Math.round((parseInt(heightInput.value) || 1) * aspectRatio);
        }
        updateNewSizeDisplay();
    });
    maintainAspect.addEventListener('change', () => {
        if (maintainAspect.checked) {
            heightInput.value = Math.round((parseInt(widthInput.value) || 1) / aspectRatio);
            updateNewSizeDisplay();
        }
    });
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const percent = parseInt(btn.dataset.preset);
            widthInput.value = Math.round(originalWidth * percent / 100);
            heightInput.value = Math.round(originalHeight * percent / 100);
            updateNewSizeDisplay();
        });
    });
    sizePresetSelect.addEventListener('change', () => {
        const val = sizePresetSelect.value;
        if (val) {
            const [w, h] = val.split(',').map(Number);
            widthInput.value = w;
            heightInput.value = h;
            updateNewSizeDisplay();
        }
    });

    applyBtn.addEventListener('click', async () => {
        applyBtn.disabled = true;
        applyBtn.textContent = 'Resizing...';
        const newWidth = parseInt(widthInput.value);
        const newHeight = parseInt(heightInput.value);
        await applyVideoResize(fileIndex, newWidth, newHeight);
        cleanup();
    });
}

async function applyVideoResize(fileIndex, newWidth, newHeight) {
    const file = mediaFilesToUpload[fileIndex];
    if (!file || !file.type.startsWith('video/')) return;
    console.log('[Resize] Starting video resize for', file.name, 'to', newWidth, 'x', newHeight);
    const video = document.createElement('video');
    video.src = URL.createObjectURL(file);
    video.crossOrigin = 'anonymous';
    video.style.display = 'none';
    document.body.appendChild(video); // Attach to DOM (hidden)

    await new Promise((resolve, reject) => {
        video.onloadedmetadata = () => {
            console.log('[Resize] Video loaded, duration:', video.duration, 'dimensions:', video.videoWidth, video.videoHeight);
            video.currentTime = 0;
            resolve();
        };
        video.onerror = (e) => {
            console.error('[Resize] Error loading video', e);
            alert('Error loading video for resize.');
            reject(e);
        };
    });

    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;
    canvas.style.display = 'none';
    document.body.appendChild(canvas); // Attach canvas to DOM (hidden)
    const ctx = canvas.getContext('2d');
    const stream = canvas.captureStream();
    // Add audio track if present
    const audioTracks = (await createMediaStreamFromFile(file)).getAudioTracks();
    audioTracks.forEach(track => stream.addTrack(track));
    const chunks = [];
    let recordingStopped = false;
    let blobReady = false;
    let finalBlob = null;
    let recorder;
    let frameCount = 0;
    let drawError = null;
    try {
        recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp8,opus',
            videoBitsPerSecond: 2000000 // Default bitrate, or make adjustable
        });
    } catch (err) {
        console.error('[Resize] MediaRecorder error:', err);
        alert('MediaRecorder is not supported or the codec is not available in this browser.');
        document.body.removeChild(video);
        document.body.removeChild(canvas); // Clean up canvas
        return;
    }
    recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
            chunks.push(e.data);
            console.log('[Resize] Data available, chunk size:', e.data.size);
        }
    };
    recorder.onstop = () => {
        if (recordingStopped) return;
        recordingStopped = true;
        const blob = new Blob(chunks, { type: 'video/webm' });
        finalBlob = blob;
        blobReady = true;
        console.log('[Resize] Recorder stopped, final blob size:', blob.size);
    };
    // Ensure video is playing before starting frame loop
    await new Promise((resolve) => {
        video.onplay = () => {
            console.log('[Resize] Video started playing');
            resolve();
        };
        video.play().catch(() => {
            alert('Autoplay is blocked. Please interact with the page to allow video playback.');
            document.body.removeChild(video);
        });
    });
    recorder.start();
    console.log('[Resize] Recorder started');
    function processFrame() {
        if (!video.paused && !video.ended) {
            try {
                ctx.drawImage(video, 0, 0, newWidth, newHeight);
                frameCount++;
                if (frameCount % 30 === 0) {
                    console.log(`[Resize] Frame ${frameCount} drawn`);
                }
            } catch (err) {
                drawError = err;
                console.error('[Resize] Error drawing video frame to canvas:', err);
            }
            requestAnimationFrame(processFrame);
        }
    }
    processFrame();
    await new Promise((resolve) => {
        video.onended = () => {
            console.log('[Resize] Video ended');
            setTimeout(() => {
                recorder.stop();
                stream.getTracks().forEach(track => track.stop());
                (function waitForBlob() {
                    if (blobReady && finalBlob) {
                        resolve();
                    } else {
                        setTimeout(waitForBlob, 50);
                    }
                })();
            }, 100);
        };
    });
    document.body.removeChild(video); // Clean up
    document.body.removeChild(canvas); // Clean up canvas
    // Try to read canvas pixel data to check for taint
    let canvasTainted = false;
    try {
        ctx.getImageData(0, 0, 1, 1);
    } catch (e) {
        canvasTainted = true;
        console.error('[Resize] Canvas is tainted and cannot be read:', e);
    }
    if (drawError) {
        alert('Error drawing video frames to canvas: ' + drawError);
    } else if (canvasTainted) {
        alert('Cannot process this video: the canvas is tainted (CORS/security restriction). Try a different file or browser.');
    } else if (frameCount === 0) {
        alert('No video frames were drawn to the canvas. The video may not be decodable by the browser.');
    }
    if (finalBlob && finalBlob.size > 0) {
        console.log('[Resize] Creating resized file, size:', finalBlob.size, 'Total frames drawn:', frameCount);
        const resizedFile = new File([finalBlob], file.name.replace(/\.[^/.]+$/, '') + `_resized_${newWidth}x${newHeight}.webm`, {
            type: 'video/webm'
        });
        mediaFilesToUpload[fileIndex] = resizedFile;
        // Update preview
        const previewItem = document.querySelector(`[data-new-file-index="${fileIndex}"]`);
        if (previewItem) {
            const video = previewItem.querySelector('video');
            if (video) {
                const oldSrc = video.src;
                video.src = URL.createObjectURL(resizedFile);
                URL.revokeObjectURL(oldSrc);
            }
            // Update file info
            const sizeInfo = previewItem.querySelector('.file-info');
            if (sizeInfo) {
                sizeInfo.textContent = `${resizedFile.name} (${formatFileSize(resizedFile.size)})`;
            }
        }
    } else {
        console.error('[Resize] Final blob is empty or invalid. Total frames drawn:', frameCount, 'Canvas tainted:', canvasTainted, 'Draw error:', drawError);
        alert('Video resize failed: output file is empty or invalid.');
    }
}