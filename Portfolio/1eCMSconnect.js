 // Initialize Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyBLhjeaX_vl5-7_I9xT1Ae9JMQnLlKCpX4", // Replace with your actual API key
    authDomain: "one-earth-cms.firebaseapp.com",
    projectId: "one-earth-cms",
    storageBucket: "one-earth-cms.appspot.com",
    messagingSenderId: "649151856539",
    appId: "1:649151856539:web:3c5b6a1fe176a4f31ed347"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const DEBUG = true;
const USER_ID = 'aMymkMkPaedegpiz0rfmsACaRG23'; // Your specific user ID

// Generic function to render content based on type
function renderContent(element, data) {
    if (!data || !data.type) {
        element.innerHTML = 'Invalid data or missing type.';
        return;
    }

    // Keep the title rendering here, but the main content will be handled by type-specific functions
    // or by displayInteractiveCalendar for calendars.
    let initialHtml = `<h3>${data.title || 'Untitled'}</h3>`;
    
    switch (data.type) {
        case 'text':
            element.innerHTML = initialHtml + `<div class="text-content">${data.content || ''}</div>`;
            break;
        case 'media':
            let mediaHtml = initialHtml;
            if (data.files && data.files.length > 0) {
                data.files.forEach(file => {
                    mediaHtml += `
                        <div class="image-item">
                            <img src="${file.url}" alt="${file.caption || data.title || 'Image'}">
                            ${file.caption ? `<p class="caption">${file.caption}</p>` : ''}
                        </div>
                    `;
                });
            } else {
                mediaHtml += '<p>No media files found.</p>';
            }
            element.innerHTML = mediaHtml;
            break;
        case 'calendar':
            // For calendar, we set the title first, then let displayInteractiveCalendar build the rest
            element.innerHTML = initialHtml; // Render title H3
            displayInteractiveCalendar(element, data); // Pass the main element and data
            break;
        default:
            element.innerHTML = initialHtml + '<p>Unsupported content type.</p>';
            if (DEBUG) console.warn('Unsupported content type:', data.type, data);
            break;
    }
}

// --- Frontend Interactive Calendar Functions ---
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function renderFrontendMonth(year, month, events, gridEl, monthDisplayEl) {
    const today = new Date(); // Get current date to check for 'today'
    if (DEBUG) {
        console.log(`renderFrontendMonth: Rendering for view date ${year}-${month + 1}. Actual current date is ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
    }
    monthDisplayEl.textContent = `${monthNames[month]} ${year}`;
    gridEl.innerHTML = ''; // Clear previous month's days

    // Add weekday headers
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(dayName => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('frontend-calendar-weekday-header');
        headerCell.textContent = dayName;
        gridEl.appendChild(headerCell);
    });

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Day of the week for the first day (0 = Monday, 6 = Sunday)
    let startDayOfWeek = firstDayOfMonth.getDay() -1;
    if (startDayOfWeek < 0) startDayOfWeek = 6; // Adjust Sunday (0) to be 6

    // Days from previous month
    const prevMonthEndDate = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthEndDate - i;
        const dayCell = document.createElement('div');
        dayCell.classList.add('frontend-calendar-day', 'other-month');
        const dayNumberEl = document.createElement('span');
        dayNumberEl.classList.add('day-number');
        dayNumberEl.textContent = day;
        dayCell.appendChild(dayNumberEl);
        gridEl.appendChild(dayCell);
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('frontend-calendar-day');
        
        const isCurrentYear = (year === today.getFullYear());
        const isCurrentMonth = (month === today.getMonth());
        const isCurrentDay = (day === today.getDate());

        if (isCurrentYear && isCurrentMonth && isCurrentDay) {
            if (DEBUG) {
                console.log(`   FOUND TODAY: Day ${day}/${month + 1}/${year}. Adding 'today' class. Current classList before: "${dayCell.className}"`);
            }
            dayCell.classList.add('today');
            if (DEBUG) {
                console.log(`   ClassList after adding 'today': "${dayCell.className}"`);
            }
        } else {
            if (DEBUG && isCurrentMonth && isCurrentDay && !isCurrentYear) {
                console.log(`   Day ${day}/${month+1} matches today's day/month, but year (${year}) doesn't match current year (${today.getFullYear()}). No 'today' class.`);
            }
        }

        const dayNumberEl = document.createElement('span');
        dayNumberEl.classList.add('day-number');
        dayNumberEl.textContent = day;
        dayCell.appendChild(dayNumberEl);

        const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = events.filter(event => event.date === currentDateStr);
        
        dayEvents.sort((a,b) => {
            if (a.time === 'All day') return -1;
            if (b.time === 'All day') return 1;
            return (a.time || '').localeCompare(b.time || '');
        });

        dayEvents.forEach(event => {
            const eventEl = document.createElement('div');
            eventEl.classList.add('frontend-calendar-event', `event-type-${event.type || 'event'}`);
            eventEl.textContent = event.title || 'Event';
            dayCell.appendChild(eventEl);
        });
        gridEl.appendChild(dayCell);
    }
    
    // Days from next month
    const totalCells = startDayOfWeek + daysInMonth;
    const remainingCells = (totalCells % 7 === 0) ? 0 : 7 - (totalCells % 7);

    for (let i = 1; i <= remainingCells; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('frontend-calendar-day', 'other-month');
        const dayNumberEl = document.createElement('span');
        dayNumberEl.classList.add('day-number');
        dayNumberEl.textContent = i;
        dayCell.appendChild(dayNumberEl);
        gridEl.appendChild(dayCell);
    }
}

function displayInteractiveCalendar(containerElement, calendarData) {
    if (DEBUG) console.log('Displaying interactive calendar for:', calendarData.title);

    const events = calendarData.events || [];
    // Always start with the actual current month/year for the frontend display
    let currentDate = new Date(); 
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Log the decision for initial month/year
    if (DEBUG) {
        console.log(`displayInteractiveCalendar: Initializing to actual current month/year: ${currentYear}-${currentMonth + 1}`);
        if (calendarData.lastViewedMonth !== undefined && calendarData.lastViewedYear !== undefined) {
            console.log(`   (Ignoring stored lastViewedMonth: ${calendarData.lastViewedMonth}, lastViewedYear: ${calendarData.lastViewedYear})`);
        }
    }

    // Create calendar structure if it doesn't exist (append to existing H3 title)
    const calendarWrapper = document.createElement('div');
    calendarWrapper.classList.add('frontend-calendar-wrapper');

    const headerEl = document.createElement('div');
    headerEl.classList.add('frontend-calendar-header');

    const prevButton = document.createElement('button');
    prevButton.textContent = '< Prev';
    
    const monthDisplayEl = document.createElement('span');
    monthDisplayEl.classList.add('frontend-calendar-month-display');

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next >';

    headerEl.appendChild(prevButton);
    headerEl.appendChild(monthDisplayEl);
    headerEl.appendChild(nextButton);

    const gridEl = document.createElement('div');
    gridEl.classList.add('frontend-calendar-grid');

    calendarWrapper.appendChild(headerEl);
    calendarWrapper.appendChild(gridEl);
    
    // Append the new calendar structure after the H3 title already rendered by renderContent
    containerElement.appendChild(calendarWrapper);

    // Event Listeners for navigation
    prevButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderFrontendMonth(currentYear, currentMonth, events, gridEl, monthDisplayEl);
    });

    nextButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderFrontendMonth(currentYear, currentMonth, events, gridEl, monthDisplayEl);
    });

    // Initial render
    renderFrontendMonth(currentYear, currentMonth, events, gridEl, monthDisplayEl);
}

// Function to load a single dynamic content item
function loadDynamicItem(element) {
    const dataId = element.getAttribute('data-id');
    if (!dataId) {
        element.innerHTML = 'Missing data-id attribute.';
        element.classList.remove('loading');
        return;
    }

    if (DEBUG) console.log(`Loading dynamic content for data-id: ${dataId}`);

    db.collection('users').doc(USER_ID)
      .collection('items').doc(dataId)
      .get()
      .then((doc) => {
          if (doc.exists) {
              const data = doc.data();
              if (DEBUG) console.log('Found data:', data);
              renderContent(element, data);
          } else {
              if (DEBUG) console.log(`Document not found: users/${USER_ID}/items/${dataId}`);
              element.innerHTML = 'Content not found.';
          }
      })
      .catch((error) => {
          console.error(`Error loading content for ${dataId}:`, error);
          element.innerHTML = 'Error loading content.';
      })
      .finally(() => {
          element.classList.remove('loading');
      });
}

// Function to render modular blog content
async function renderModularBlogContent(blog) {
    if (!blog.sections || blog.sections.length === 0) {
        // Fallback to old format
        return blog.content || '';
    }

    let blogContentHtml = '';
    
    // Sort sections by order
    const sortedSections = blog.sections.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    for (const section of sortedSections) {
        // Handle both old format (blocks) and new format (items)
        const items = section.items || section.blocks || [];
        if (items.length === 0) continue;
        
        blogContentHtml += '<div class="blog-section-frontend">';
        
        // Sort items by order
        const sortedItems = items.sort((a, b) => (a.order || 0) - (b.order || 0));
        
        for (const item of sortedItems) {
            if (item.type === 'column-group') {
                // Handle column group
                blogContentHtml += await renderColumnGroup(item);
            } else {
                // Handle single block (either new format or old format)
                const blockData = item.blockType ? 
                    { ...item, type: item.blockType } : // New format: blockType is the actual block type
                    item; // Old format: type is the block type
                
                if (blockData.layout === 'full') {
                    blogContentHtml += await renderSingleBlock(blockData);
                } else {
                    // For split layout single blocks, render as row
                    blogContentHtml += await renderBlockRow([blockData]);
                }
            }
        }
        
        blogContentHtml += '</div>';
    }
    
    return blogContentHtml;
}

function escapeAttr(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function sanitizeMediaLink(value) {
    if (typeof value === 'string') return value.trim();
    if (value && typeof value.url === 'string') return value.url.trim();
    return '';
}

function isValidMediaLink(value) {
    const trimmed = sanitizeMediaLink(value);
    if (!trimmed) return false;
    if (/^\s*javascript:/i.test(trimmed)) return false;
    try {
        const parsed = new URL(trimmed, window.location.origin);
        const hasProtocol = /^[a-z][a-z0-9+.-]*:/i.test(trimmed);
        if (!hasProtocol) return true;
        return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol);
    } catch (_) {
        return false;
    }
}

function normalizeMediaSettings(settings = {}, fileCount = 0) {
    const source = settings || {};
    const links = Array.isArray(source.imageLinks) ? source.imageLinks : [];
    const normalizedLinks = [];
    for (let i = 0; i < Math.max(fileCount, links.length); i += 1) {
        normalizedLinks.push(sanitizeMediaLink(links[i]));
    }

    return {
        showCaptions: source.showCaptions !== false,
        clickAction: source.clickAction === 'link' ? 'link' : 'preview',
        openLinksInNewTab: !!source.openLinksInNewTab,
        imageLinks: fileCount > 0 ? normalizedLinks.slice(0, fileCount) : normalizedLinks,
        galleryMinColumns: Number(source.galleryMinColumns) || 1,
        galleryMaxColumns: Number(source.galleryMaxColumns) || 3,
        aspectRatio: source.aspectRatio || null,
        aspectRatioCustom: source.aspectRatioCustom || null,
        videoPosterUrl: source.videoPosterUrl ? String(source.videoPosterUrl).trim() : ''
    };
}

function mediaAspectStyle(settings) {
    if (!settings || !settings.aspectRatio) return '';
    let ratio = '';
    if (settings.aspectRatio === 'custom' && settings.aspectRatioCustom) {
        const w = Number(settings.aspectRatioCustom.w || settings.aspectRatioCustom.width);
        const h = Number(settings.aspectRatioCustom.h || settings.aspectRatioCustom.height);
        if (w > 0 && h > 0) ratio = `${w} / ${h}`;
    } else if (String(settings.aspectRatio).includes(':')) {
        ratio = String(settings.aspectRatio).replace(':', ' / ');
    }
    return ratio ? ` style="aspect-ratio:${escapeAttr(ratio)};"` : '';
}

function mediaGalleryStyle(settings) {
    if (!settings) return '';
    const minCols = Math.max(1, Math.min(6, Math.round(settings.galleryMinColumns || 1)));
    const maxCols = Math.max(minCols, Math.min(6, Math.round(settings.galleryMaxColumns || 3)));
    return ` style="--media-gallery-min-cols:${minCols}; --media-gallery-max-cols:${maxCols};"`;
}

function maybeWrapLinkedMedia(innerHtml, file, fileIndex, settings, className = 'blog-media-link') {
    const link = settings && settings.clickAction === 'link' ? sanitizeMediaLink(settings.imageLinks[fileIndex]) : '';
    const fileIsImage = file && file.type && file.type.startsWith('image/');
    if (!fileIsImage || !isValidMediaLink(link)) return innerHtml;
    const targetAttr = settings.openLinksInNewTab ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${className}" href="${escapeAttr(link)}"${targetAttr}>${innerHtml}</a>`;
}

const portfolioGalleryStore = window.portfolioGalleryStore || {};
window.portfolioGalleryStore = portfolioGalleryStore;

function isImageMediaFile(file) {
    const type = String((file && file.type) || '').toLowerCase();
    const url = String((file && file.url) || '').split('?')[0].toLowerCase();
    return type.startsWith('image/') || /\.(png|jpe?g|webp|gif|avif|svg)$/.test(url);
}

function isVideoMediaFile(file) {
    const type = String((file && file.type) || '').toLowerCase();
    const url = String((file && file.url) || '').split('?')[0].toLowerCase();
    return type.startsWith('video/') || /\.(mp4|webm|ogg|mov|m4v|avi)$/.test(url);
}

function galleryColumnStyle(settings) {
    const minCols = Math.max(1, Math.min(6, Math.round(settings.galleryMinColumns || 1)));
    const maxCols = Math.max(minCols, Math.min(6, Math.round(settings.galleryMaxColumns || 3)));
    const midCols = Math.max(minCols, Math.min(maxCols, Math.round((minCols + maxCols) / 2)));
    return ` style="--portfolio-gallery-min-cols:${minCols}; --portfolio-gallery-mid-cols:${midCols}; --portfolio-gallery-max-cols:${maxCols};"`;
}

function buildPortfolioGalleryItems(files, fallbackTitle, settings) {
    return (files || []).reduce((items, file, sourceIndex) => {
        if (!file || !file.url) return items;
        const isImage = isImageMediaFile(file);
        const isVideo = isVideoMediaFile(file);
        if (!isImage && !isVideo) return items;

        items.push({
            url: file.url,
            thumb: file.poster || file.url,
            caption: file.caption || '',
            alt: file.caption || fallbackTitle || (isVideo ? 'Gallery video' : 'Gallery image'),
            sourceIndex,
            isVideo,
            linkHref: sanitizeMediaLink(settings.imageLinks[sourceIndex] || '')
        });
        return items;
    }, []);
}

function registerPortfolioGallery(items) {
    const galleryId = `portfolio_gallery_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    portfolioGalleryStore[galleryId] = items;
    return galleryId;
}

function renderPortfolioGalleryItemInner(item, settings) {
    const aspectStyle = mediaAspectStyle(settings);
    const cropClass = aspectStyle ? ' portfolio-gallery-item-crop--user' : '';
    const cropOpen = `<div class="portfolio-gallery-item-crop${cropClass}"${aspectStyle}>`;
    const mediaHtml = item.isVideo
        ? `<video class="portfolio-gallery-item-media" src="${escapeAttr(item.url)}"${item.thumb && item.thumb !== item.url ? ` poster="${escapeAttr(item.thumb)}"` : ''} muted playsinline preload="metadata"></video>`
        : `<img class="portfolio-gallery-item-media" loading="lazy" src="${escapeAttr(item.thumb)}" alt="${escapeAttr(item.alt)}">`;
    const captionHtml = settings.showCaptions && item.caption
        ? `<p class="portfolio-gallery-caption">${escapeAttr(item.caption)}</p>`
        : '';

    return `${cropOpen}${mediaHtml}</div>${captionHtml}`;
}

function renderPortfolioImageGallery(files, fallbackTitle, settings) {
    const items = buildPortfolioGalleryItems(files, fallbackTitle, settings);
    if (items.length === 0) {
        return '<div class="blog-media-placeholder">Media preview not available</div>';
    }

    if (items.length === 1) {
        const one = items[0];
        const safeUrl = escapeAttr(one.url);
        const safeAlt = escapeAttr(one.alt);
        const aspectStyle = mediaAspectStyle(settings);
        let singleHtml = `<div class="blog-media-frontend"${aspectStyle}>`;
        if (one.isVideo) {
            singleHtml += `<video src="${safeUrl}" controls class="blog-media-video"${one.thumb && one.thumb !== one.url ? ` poster="${escapeAttr(one.thumb)}"` : ''}></video>`;
        } else {
            const imgHtml = `<img src="${safeUrl}" alt="${safeAlt}" class="blog-media-img" loading="lazy">`;
            singleHtml += maybeWrapLinkedMedia(imgHtml, files[one.sourceIndex], one.sourceIndex, settings);
        }
        if (settings.showCaptions && one.caption) {
            singleHtml += `<p class="blog-media-caption">${escapeAttr(one.caption)}</p>`;
        }
        singleHtml += '</div>';
        return singleHtml;
    }

    let mediaHtml = `<div class="blog-media-frontend blog-media-gallery-frontend">`;
    const gridStyle = galleryColumnStyle(settings);

    if (settings.clickAction === 'link') {
        mediaHtml += `<div class="portfolio-gallery-grid"${gridStyle}>`;
        items.forEach((item, index) => {
            const targetAttr = settings.openLinksInNewTab ? ' target="_blank" rel="noopener"' : '';
            if (isValidMediaLink(item.linkHref)) {
                mediaHtml += `<a class="portfolio-gallery-item portfolio-gallery-link" href="${escapeAttr(item.linkHref)}"${targetAttr} aria-label="Open linked page for gallery item ${index + 1}">${renderPortfolioGalleryItemInner(item, settings)}</a>`;
            } else {
                mediaHtml += `<div class="portfolio-gallery-item portfolio-gallery-static">${renderPortfolioGalleryItemInner(item, settings)}</div>`;
            }
        });
    } else {
        const galleryId = registerPortfolioGallery(items);
        mediaHtml += `<div class="portfolio-gallery-grid" data-portfolio-gallery-id="${galleryId}"${gridStyle}>`;
        items.forEach((item, index) => {
            mediaHtml += `<button class="portfolio-gallery-item portfolio-gallery-trigger" type="button" data-portfolio-gallery-id="${galleryId}" data-portfolio-gallery-index="${index}" aria-label="Open gallery item ${index + 1} of ${items.length}">${renderPortfolioGalleryItemInner(item, settings)}</button>`;
        });
    }

    mediaHtml += '</div>';
    if (settings.showCaptions) {
        mediaHtml += `<p class="blog-media-gallery-indicator">Gallery (${items.length} items)</p>`;
    }
    mediaHtml += '</div>';
    return mediaHtml;
}

function normalizeColumnGroupColumns(columnGroup) {
    if (Array.isArray(columnGroup.columns) && columnGroup.columns.length > 0) {
        return columnGroup.columns
            .slice()
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((column, index) => ({
                id: column.id || `column_${index}`,
                width: Number(column.width) || (100 / columnGroup.columns.length),
                blocks: Array.isArray(column.blocks) ? column.blocks : [],
                order: index
            }));
    }

    const leftRatio = columnGroup.columnRatio ? columnGroup.columnRatio.left : 50;
    const rightRatio = columnGroup.columnRatio ? columnGroup.columnRatio.right : 50;
    return [
        { id: 'left', width: leftRatio, blocks: columnGroup.leftColumn || [], order: 0 },
        { id: 'right', width: rightRatio, blocks: columnGroup.rightColumn || [], order: 1 }
    ];
}

async function renderColumnGroup(columnGroup) {
    const columns = normalizeColumnGroupColumns(columnGroup);
    let columnGroupHtml = `<div class="blog-column-group-frontend" style="--cms-column-count:${columns.length};">`;

    for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 1) {
        const column = columns[columnIndex];
        const width = Number(column.width) || (100 / columns.length);
        const columnClass = columnIndex === 0 ? 'blog-column-left' : (columnIndex === 1 ? 'blog-column-right' : 'blog-column-extra');
        columnGroupHtml += `<div class="blog-column-frontend ${columnClass}" style="width: calc(${width}% - 10px);">`;

        const sortedBlocks = (column.blocks || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
        for (const block of sortedBlocks) {
            const blockContent = await getBlockContent(block);
            columnGroupHtml += `<div class="blog-block-frontend blog-block-column">${blockContent}</div>`;
        }

        columnGroupHtml += '</div>';
    }

    columnGroupHtml += '</div>';
    return columnGroupHtml;
}

async function renderSingleBlock(block) {
    const blockContent = await getBlockContent(block);
    return `<div class="blog-block-frontend blog-block-full">${blockContent}</div>`;
}

async function renderBlockRow(blocks) {
    let rowHtml = '<div class="blog-block-row-frontend">';
    
    for (const block of blocks) {
        const blockContent = await getBlockContent(block);
        const width = block.layoutRatio || 50;
        rowHtml += `<div class="blog-block-frontend blog-block-split" style="width: ${width}%;">${blockContent}</div>`;
    }
    
    rowHtml += '</div>';
    return rowHtml;
}

async function getBlockContent(block) {
    switch (block.type) {
        case 'subtitle':
            return `<div class="blog-subtitle-frontend">${block.content || ''}</div>`;
        case 'body':
            return `<div class="blog-body-frontend">${block.content || ''}</div>`;
        case 'media':
            if (block.mediaId) {
                try {
                    const mediaDoc = await db.collection('users').doc(USER_ID).collection('items').doc(block.mediaId).get();
                    if (mediaDoc.exists) {
                        const mediaData = mediaDoc.data();
                        const blockMediaSettings = block.mediaSettings || block.slideshowSettings || null;
                        return renderMediaBlock(mediaData, blockMediaSettings);
                    }
                } catch (error) {
                    console.error('Error loading media for block:', error);
                }
            }
            return '<div class="blog-media-placeholder">Media not available</div>';
        case 'embed':
            return renderEmbedBlock(block);
        default:
            return '<div class="blog-unknown-block">Unknown block type</div>';
    }
}

function renderMediaBlock(mediaData, blockMediaSettings = null) {
    if (!mediaData.files || mediaData.files.length === 0) {
        return '<div class="blog-media-placeholder">No media files</div>';
    }

    const settings = normalizeMediaSettings(blockMediaSettings || {}, mediaData.files.length);
    const aspectStyle = mediaAspectStyle(settings);
    const blockPosterAttr = settings.videoPosterUrl ? ` poster="${escapeAttr(settings.videoPosterUrl)}"` : '';

    // If only one file, render simple media block
    if (mediaData.files.length === 1) {
        const primaryFile = mediaData.files[0];
        const isImage = primaryFile.type && primaryFile.type.startsWith('image/');
        const isVideo = primaryFile.type && primaryFile.type.startsWith('video/');
        const isPdf = primaryFile.type === 'application/pdf' || (primaryFile.url && primaryFile.url.toLowerCase().endsWith('.pdf'));
        const safeUrl = escapeAttr(primaryFile.url);
        const safeAlt = escapeAttr(primaryFile.caption || mediaData.title || 'Image');

        let mediaHtml = `<div class="blog-media-frontend"${aspectStyle}>`;
        
        if (isImage) {
            const imgHtml = `<img src="${safeUrl}" alt="${safeAlt}" class="blog-media-img">`;
            mediaHtml += maybeWrapLinkedMedia(imgHtml, primaryFile, 0, settings);
        } else if (isVideo) {
            mediaHtml += `<video src="${safeUrl}" controls class="blog-media-video"${blockPosterAttr}></video>`;
        } else if (isPdf) {
            mediaHtml += `
                <div class="pdf-inline-embed">
                    <iframe class="pdf-iframe" src="${safeUrl}#view=FitH" style="width:100%; height:400px; border:0;"></iframe>
                    <div class="pdf-controls">
                        <a class="pdf-download" href="${safeUrl}" target="_blank" rel="noopener">Download</a>
                        <button class="pdf-open-modal-btn" data-url="${safeUrl}" onclick="openPdfModal(this.getAttribute('data-url'))">Open</button>
                    </div>
                </div>
            `;
        } else {
            mediaHtml += `<div class="blog-media-placeholder">Media preview not available</div>`;
        }
        
        // Add caption if available
        if (settings.showCaptions && primaryFile.caption) {
            mediaHtml += `<p class="blog-media-caption">${primaryFile.caption}</p>`;
        }
        
        mediaHtml += '</div>';
        return mediaHtml;
    }
    
    return renderPortfolioImageGallery(mediaData.files, mediaData.title || 'Gallery', settings);
}

// Lazy-load PDF.js and initialize any inline viewers within a container selector
function initializePdfViewers(containerSelector = 'body') {
    // PDF.js viewer disabled to avoid CORS; inline embeds are iframes now.
    return;
}

function openPdfModal(url) {
    const modal = document.createElement('div');
    modal.className = 'pdf-modal-overlay';
    modal.innerHTML = `
        <div class="pdf-modal-content">
            <div class="pdf-modal-header">
                <button class="pdf-modal-close">×</button>
            </div>
            <div class="pdf-modal-body">
                <iframe class="pdf-iframe" src="${url}#view=FitH" style="width:100%; height:85vh; border:0;"></iframe>
                <div class="pdf-fallback-controls" style="margin-top:8px;">
                    <a class="pdf-download" href="${url}" target="_blank" rel="noopener">Download</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector('.pdf-modal-close');
    function close() {
        modal.remove();
    }
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', function(e) { if (e.target === modal) close(); });
}

function renderEmbedBlock(block) {
    if (!block.content) {
        return '<div class="blog-embed-placeholder">No embed content available</div>';
    }
    
    let embedData;
    try {
        embedData = typeof block.content === 'string' ? JSON.parse(block.content) : block.content;
    } catch (e) {
        console.error('Error parsing embed data:', e);
        return '<div class="blog-embed-error">Invalid embed data</div>';
    }
    
    if (!embedData || !embedData.platform || !embedData.embedId) {
        return '<div class="blog-embed-placeholder">Invalid embed configuration</div>';
    }
    
    const { platform, embedId, originalUrl, viewType = 'normal', width = 100 } = embedData;
    const widthStyle = width < 100 ? `style="width: ${width}%; margin: 0 auto;"` : '';
    
    switch (platform) {
        case 'youtube':
            return `
                <div class="blog-embed-frontend youtube-embed-frontend" ${widthStyle}>
                    <div class="embed-container">
                        <iframe src="https://www.youtube.com/embed/${embedId}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
        case 'spotify':
            const spotifyHeight = viewType === 'compact' ? '80px' : '152px';
            const spotifyTheme = viewType === 'compact' ? '&theme=0' : '';
            return `
                <div class="blog-embed-frontend spotify-embed-frontend spotify-${viewType}" ${widthStyle}>
                    <div class="embed-container">
                        <iframe src="https://open.spotify.com/embed/${embedId}?utm_source=generator&theme=0${spotifyTheme}" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media"
                                style="height: ${spotifyHeight};">
                        </iframe>
                    </div>
                </div>
            `;
        case 'soundcloud':
            return `
                <div class="blog-embed-frontend soundcloud-embed-frontend" ${widthStyle}>
                    <div class="embed-container">
                        <iframe src="https://w.soundcloud.com/player/?url=${encodeURIComponent('https://soundcloud.com/' + embedId)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
                                frameborder="0" 
                                allow="autoplay">
                        </iframe>
                    </div>
                </div>
            `;
        default:
            return `<div class="blog-embed-error">Unsupported embed platform: ${platform}</div>`;
    }
}

const PORTFOLIO_CATEGORY_ORDER = [
    'Design Portfolio',
    'Photography',
    'Videography',
    'Computation',
    'Research & Forward Thinking'
];

let allPortfolioPosts = [];
const PORTFOLIO_CACHE_KEY = `portfolioPosts:${USER_ID}:v1`;
const PORTFOLIO_CACHE_MAX_AGE_MS = 1000 * 60 * 60 * 24;

function getCachedPortfolioPosts() {
    try {
        const cached = localStorage.getItem(PORTFOLIO_CACHE_KEY);
        if (!cached) return null;

        const parsed = JSON.parse(cached);
        if (!parsed || !Array.isArray(parsed.posts)) return null;

        const cachedAt = Number(parsed.cachedAt || 0);
        if (!cachedAt || Date.now() - cachedAt > PORTFOLIO_CACHE_MAX_AGE_MS) {
            return null;
        }

        return parsed.posts;
    } catch (error) {
        if (DEBUG) console.warn('Could not read portfolio cache:', error);
        return null;
    }
}

function setCachedPortfolioPosts(posts) {
    try {
        localStorage.setItem(PORTFOLIO_CACHE_KEY, JSON.stringify({
            cachedAt: Date.now(),
            posts
        }));
    } catch (error) {
        if (DEBUG) console.warn('Could not save portfolio cache:', error);
    }
}

function renderPortfolioPosts(blogPosts) {
    const portfolioElement = document.getElementById('portfolio-sections');
    if (!portfolioElement) return;

    const allTags = new Set();
    const allCategories = new Set();

    blogPosts.forEach(blog => {
        if (blog.tags) {
            blog.tags.split(',').forEach(tag => {
                const trimmedTag = tag.trim();
                if (trimmedTag) allTags.add(trimmedTag);
            });
        }

        if (blog.category) {
            allCategories.add(blog.category);
        }
    });

    updateFilterDropdowns(allTags, allCategories);

    allPortfolioPosts = blogPosts;
    portfolioElement.innerHTML = renderPortfolioSectionsForPosts(blogPosts);
    syncPortfolioCardsAfterRender();
    portfolioElement.classList.remove('loading');
}

async function fetchPortfolioPostsFromFirestore() {
    const querySnapshot = await db.collection('users').doc(USER_ID)
        .collection('items')
        .where('type', '==', 'blog')
        .orderBy('datePosted', 'desc')
        .get();

    if (querySnapshot.empty) return [];

    const blogPosts = [];

    // Collect all blog posts and normalize old/new media formats.
    for (const doc of querySnapshot.docs) {
        const blog = { id: doc.id, ...doc.data() };

        if (!blog.excerpt && blog.sections) {
            blog.excerpt = generateExcerpt(blog);
        }

        if (!blog.featuredMedia && blog.featuredImage) {
            blog.featuredMedia = { url: blog.featuredImage };
        }

        if (!blog.featuredMedia && blog.sections) {
            const fallbackImage = await getFirstMediaUrlFromSections(blog.sections);
            if (fallbackImage) {
                blog.featuredMedia = { url: fallbackImage };
            }
        }

        blogPosts.push(blog);
    }

    return blogPosts;
}

// Function to load blog posts (updated for modular format)
async function loadPortfolio() {
    const portfolioElement = document.getElementById('portfolio-sections');
    if (!portfolioElement) return;

    if (DEBUG) console.log('Loading portfolio for user:', USER_ID);

    const cachedPosts = getCachedPortfolioPosts();
    if (cachedPosts && cachedPosts.length > 0) {
        renderPortfolioPosts(cachedPosts);

        fetchPortfolioPostsFromFirestore()
            .then(blogPosts => {
                if (blogPosts.length === 0) return;
                setCachedPortfolioPosts(blogPosts);
                renderPortfolioPosts(blogPosts);
            })
            .catch(error => {
                console.error("Error refreshing portfolio cache:", error);
            });
        return;
    }

    try {
        const blogPosts = await fetchPortfolioPostsFromFirestore();
        if (blogPosts.length > 0) {
            setCachedPortfolioPosts(blogPosts);
            renderPortfolioPosts(blogPosts);
        } else {
            portfolioElement.innerHTML = '<div class="loading">No portfolio items found.</div>';
            portfolioElement.classList.remove('loading');
        }
    } catch (error) {
        console.error("Error loading portfolio:", error);
        portfolioElement.innerHTML = '<div class="loading">Error loading portfolio.</div>';
        portfolioElement.classList.remove('loading');
    }
}

function renderPortfolioSectionsForPosts(posts) {
    if (!posts || posts.length === 0) {
        return '<div class="loading">No portfolio items found for this filter.</div>';
    }

    const categorizedPosts = groupPostsByCategory(posts);
    let portfolioHtml = '';
    
    // First, render categories in the specified order
    for (const category of PORTFOLIO_CATEGORY_ORDER) {
        if (categorizedPosts[category]) {
            portfolioHtml += renderPortfolioSection(category, categorizedPosts[category]);
        }
    }
    
    // Then render any remaining categories that aren't in the predefined order
    for (const [category, categoryPosts] of Object.entries(categorizedPosts)) {
        if (!PORTFOLIO_CATEGORY_ORDER.includes(category)) {
            portfolioHtml += renderPortfolioSection(category, categoryPosts);
        }
    }

    return portfolioHtml;
}

function renderKeywordPortfolioSection(keywordLabel, posts) {
    const cardsHtml = posts && posts.length
        ? posts.map(post => renderPortfolioCard(post)).join('')
        : '<div class="coming-soon">No work found for this filter.</div>';

    return `
        <section class="portfolio-section expanded keyword-results-section" id="${categoryToAnchorId(keywordLabel)}" data-category="${keywordLabel}">
            <div class="section-header">
                <h2 class="section-title">${keywordLabel}</h2>
                <button class="expand-btn" aria-expanded="true">+</button>
            </div>
            <div class="cards-container">
                <div class="cards-grid">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}

function syncPortfolioCardsAfterRender(expandAll = false) {
    const portfolioElement = document.getElementById('portfolio-sections');
    if (!portfolioElement) return;

    allCards = Array.from(portfolioElement.querySelectorAll('.portfolio-card'));
    setupCardClickHandlers();
    setupCardVideoAutoplayObserver();
    findAndPrepareCardVideos(portfolioElement);

    const shouldExpand = expandAll || window.matchMedia('(max-width: 768px)').matches;
    portfolioElement.querySelectorAll('.portfolio-section').forEach(section => {
        const btn = section.querySelector('.expand-btn');
        if (shouldExpand) {
            section.classList.add('expanded');
            if (btn) btn.setAttribute('aria-expanded', 'true');
        } else if (btn) {
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

function generateExcerpt(blog) {
    let textContent = '';

    function collectTextFromItem(item) {
        if (!item) return;
        if ((item.type === 'body' || item.blockType === 'body') && item.content) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.content;
            textContent += tempDiv.textContent || tempDiv.innerText || '';
            return;
        }

        if (item.type === 'column-group') {
            const columns = normalizeColumnGroupColumns(item);
            for (const column of columns) {
                const blocks = (column.blocks || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
                for (const block of blocks) {
                    collectTextFromItem(block);
                    if (textContent.length > 100) return;
                }
            }
        }
    }
    
    if (blog.sections && blog.sections.length > 0) {
        for (const section of blog.sections) {
            if (section.items || section.blocks) {
                const items = section.items || section.blocks;
                for (const item of items) {
                    collectTextFromItem(item);
                    if (textContent.length > 100) break;
                }
                if (textContent.length > 100) break;
            }
        }
    }
    
    return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
}

async function getFirstMediaUrlFromSections(sections) {
    if (!sections || sections.length === 0) return null;

    async function getFromItem(item) {
        if (!item) return null;
        if ((item.type === 'media' || item.blockType === 'media') && item.mediaId) {
            try {
                const mediaDoc = await db.collection('users').doc(USER_ID)
                    .collection('items').doc(item.mediaId).get();
                if (mediaDoc.exists) {
                    const mediaData = mediaDoc.data();
                    if (mediaData.files && mediaData.files.length > 0) {
                        return mediaData.files[0].url;
                    }
                }
            } catch (error) {
                console.error('Error fetching media:', error);
            }
        }
        if (item.type === 'column-group') {
            const columns = normalizeColumnGroupColumns(item);
            for (const column of columns) {
                const blocks = (column.blocks || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
                for (const block of blocks) {
                    const url = await getFromItem(block);
                    if (url) return url;
                }
            }
        }
        return null;
    }

    for (const section of sections) {
        const items = section.items || section.blocks || [];
        for (const item of items) {
            const url = await getFromItem(item);
            if (url) return url;
        }
    }
    return null;
}

// Optimized synchronous function to find first image without additional Firestore queries
function getFirstImageFromSectionsSync(sections) {
    if (!sections || sections.length === 0) return null;
    
    // Only check first 3 sections for performance
    const sectionsToCheck = sections.slice(0, 3);
    
    for (const section of sectionsToCheck) {
        if (section.items || section.blocks) {
            const items = section.items || section.blocks;
            for (const item of items) {
                // Look for media blocks with cached media URLs (if available)
                if ((item.type === 'media' || item.blockType === 'media') && item.cachedMediaUrl) {
                    return item.cachedMediaUrl;
                }
            }
        }
    }
    
    return null;
}

// Keep the async version for when we really need it (legacy support)
async function getFirstMediaFromSections(sections) {
    if (!sections || sections.length === 0) return null;
    
    for (const section of sections) {
        if (section.items || section.blocks) {
            const items = section.items || section.blocks;
            for (const item of items) {
                if ((item.type === 'media' || item.blockType === 'media') && item.mediaId) {
                    try {
                        const mediaDoc = await db.collection('users').doc(USER_ID)
                            .collection('items').doc(item.mediaId).get();
                        if (mediaDoc.exists) {
                            const mediaData = mediaDoc.data();
                            if (mediaData.files && mediaData.files.length > 0) {
                                return mediaData.files[0].url;
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching media:', error);
                    }
                }
            }
        }
    }
    return null;
}

function groupPostsByCategory(posts) {
    const grouped = {};
    
    posts.forEach(post => {
        const category = post.category || 'Uncategorized';
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(post);
    });
    
    return grouped;
}

// Return the display name used for section headers
function getPortfolioCategoryDisplayName(category) {
    const key = String(category || '').toLowerCase();
    switch (key) {
        case 'computation':
            return 'Coding & Computation';
        case 'design portfolio':
            return 'Design Portfolio';
        case 'research & forward thinking':
            return 'Research & Forward Thinking';
        default:
            return category;
    }
}

// Map portfolio categories to anchor IDs used by modal links
function categoryToAnchorId(category) {
    if (!category) return '';
    const map = {
        'design portfolio': 'design',
        'photography': 'photography',
        'videography': 'videography',
        'computation': 'computation',
        'coding & computation': 'computation',
        'research & forward thinking': 'research',
        'research and forward thinking': 'research'
    };
    const key = String(category).toLowerCase().trim();
    if (map[key]) return map[key];
    // Fallback: sanitize to a slug
    return key.replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function renderPortfolioSection(category, posts) {
    if (posts.length === 0) {
        return `
            <section class="portfolio-section" id="${categoryToAnchorId(category)}" data-category="${category}">
                <div class="section-header">
                    <h2 class="section-title">${getPortfolioCategoryDisplayName(category)}</h2>
                    <button class="expand-btn">+</button>
                </div>
                <div class="coming-soon">Work coming soon</div>
            </section>
        `;
    }
    
    const cardsHtml = posts.map(post => renderPortfolioCard(post)).join('');
    
    return `
        <section class="portfolio-section" id="${categoryToAnchorId(category)}" data-category="${category}">
            <div class="section-header">
                <h2 class="section-title">${getPortfolioCategoryDisplayName(category)}</h2>
                <button class="expand-btn">+</button>
            </div>
            <div class="cards-container">
                <div class="cards-grid">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}

// Helper function to create appropriate media element for portfolio cards
function createCardMediaElement(featuredMedia, title) {
    if (!featuredMedia || !featuredMedia.url) {
        return `<div class="card-image">No Image</div>`;
    }
    
    const mediaUrl = featuredMedia.url;
    const posterUrl = featuredMedia.poster;
    
    // Check if the URL indicates a video file
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    const isVideo = videoExtensions.some(ext => mediaUrl.toLowerCase().includes(ext));
    
    if (isVideo) {
        // Use poster attribute for instant loading, fallback to autoplay video
        const posterAttr = posterUrl ? `poster="${posterUrl}"` : '';
        return `<video src="${mediaUrl}" ${posterAttr} class="card-image" autoplay muted loop playsinline></video>`;
    } else {
        return `<img src="${mediaUrl}" alt="${title}" class="card-image">`;
    }
}

function slugifyPortfolioTitle(title) {
    return String(title || '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^A-Za-z0-9-]/g, '')
        .replace(/-+/g, '-');
}

function buildPortfolioWorkHref(postOrTitle, options = {}) {
    const title = typeof postOrTitle === 'string'
        ? postOrTitle
        : ((postOrTitle && postOrTitle.title) || '');
    const slug = slugifyPortfolioTitle(title);
    const hash = options && options.lucky ? '#lucky' : '';
    return `/Portfolio/work/${slug ? `?${encodeURIComponent(slug)}` : ''}${hash}`;
}

window.slugifyPortfolioTitle = slugifyPortfolioTitle;
window.buildPortfolioWorkHref = buildPortfolioWorkHref;

function renderPortfolioCard(post) {
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [];
    const tagsHtml = tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
    
    // Handle both old (featuredImage) and new (featuredMedia) formats
    const featuredMedia = post.featuredMedia || (post.featuredImage ? { url: post.featuredImage } : null);
    const mediaHtml = createCardMediaElement(featuredMedia, post.title);
    
    const excerpt = post.excerpt || 'No description available';
    const postSlug = slugifyPortfolioTitle(post.title);
    
    return `
        <div class="portfolio-card related-work-card" data-post-id="${post.id}" data-post-slug="${postSlug}" data-tags="${tags.join(',')}" data-category="${post.category || ''}" data-content="${excerpt}">
            <div class="card-image-container">
                ${mediaHtml}
                <div class="card-tags">${tagsHtml}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${post.title || 'Untitled'}</h3>
                <p class="card-description">${excerpt}</p>
            </div>
        </div>
    `;
}

function updateFilterDropdowns(tags, categories) {
    const keywordsFilter = document.getElementById('keywordsFilter');
    const practiceFilter = document.getElementById('practiceFilter');
    
    if (keywordsFilter) {
        keywordsFilter.innerHTML = '<option value="">KEYWORDS</option>';
        tags.forEach(tag => {
            keywordsFilter.innerHTML += `<option value="${tag}">${tag}</option>`;
        });
    }
    
    if (practiceFilter) {
        practiceFilter.innerHTML = '<option value="">PRACTICE</option>';
        categories.forEach(category => {
            practiceFilter.innerHTML += `<option value="${category}">${category}</option>`;
        });
    }
}

function setupCardClickHandlers() {
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const postSlug = card.dataset.postSlug || '';
            window.location.href = buildPortfolioWorkHref(postSlug);
        });
    });
}

// --- Related Work Loader ---
function parseTagsCSV(csv) {
    if (!csv) return [];
    return csv.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
}

function getDateSeconds(item) {
    if (!item) return 0;
    const dp = item.datePosted;
    if (!dp) return 0;
    const secs = dp.seconds;
    return typeof secs === 'number' ? secs : 0;
}

async function loadRelatedWork(currentWork, currentId, maxItems = 8) {
    const grid = document.getElementById('related-work-grid');
    const container = document.querySelector('.related-work-container');
    if (!grid || !container || !currentWork) return;

    try {
        // 1) Same-category posts
        const category = currentWork.category || '';
        let sameCategory = [];
        if (category) {
            const catSnap = await db.collection('users').doc(USER_ID)
                .collection('items')
                .where('type', '==', 'blog')
                .where('category', '==', category)
                .get();

            catSnap.forEach(doc => {
                if (doc.id !== currentId) {
                    sameCategory.push({ id: doc.id, ...doc.data() });
                }
            });

            sameCategory.sort((a, b) => getDateSeconds(b) - getDateSeconds(a));
        }

        let results = sameCategory.slice(0, maxItems);

        // 2) Backfill by shared tags if needed
        if (results.length < maxItems) {
            const need = maxItems - results.length;
            const currentTags = new Set(parseTagsCSV(currentWork.tags));

            if (currentTags.size > 0) {
                const allSnap = await db.collection('users').doc(USER_ID)
                    .collection('items')
                    .where('type', '==', 'blog')
                    .get();

                const existingIds = new Set(results.map(p => p.id).concat([currentId]));
                const tagMatches = [];

                allSnap.forEach(doc => {
                    if (existingIds.has(doc.id)) return;
                    const data = doc.data();
                    const tags = parseTagsCSV(data.tags);
                    const overlap = tags.some(t => currentTags.has(t));
                    if (overlap) tagMatches.push({ id: doc.id, ...data });
                });

                tagMatches.sort((a, b) => getDateSeconds(b) - getDateSeconds(a));
                results = results.concat(tagMatches.slice(0, need));
            }
        }

        if (results.length === 0) {
            container.style.display = 'none';
            return;
        }

        // 3) Render cards using existing generator
        const cardsHtml = results.map(post => {
            let html = renderPortfolioCard(post);
            // Add lazy loading to images
            html = html.replace(/<img /g, '<img loading="lazy" ');
            return html;
        }).join('');

        grid.innerHTML = cardsHtml;

        // 4) Click handlers
        setupCardClickHandlers();

        // 5) Ensure related card videos autoplay on mobile
        findAndPrepareCardVideos(grid);

        // Lightweight reveal for related cards using IntersectionObserver with horizontal root
        (function() {
            const containerEl = document.querySelector('.cards-container.related-work-container');
            const cardSelector = '.related-work-container .portfolio-card';
            const cards = Array.from(document.querySelectorAll(cardSelector));
            if (cards.length === 0) return;

            cards.forEach(el => el.classList.add('reveal-once'));

            if ('IntersectionObserver' in window) {
                const opts = containerEl ? { root: containerEl, rootMargin: '0px 10% 0px 10%', threshold: 0.05 } : { root: null, threshold: 0.05 };
                const obs = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, opts);
                cards.forEach(el => obs.observe(el));
            } else {
                cards.forEach(el => el.classList.add('visible'));
            }
        })();
    } catch (e) {
        console.error('Error loading related work:', e);
        container.style.display = 'none';
    }
}

// Filter functionality
let allCards = [];

function setupFiltering() {
    allCards = Array.from(document.querySelectorAll('.portfolio-card'));
    
    const keywordsFilter = document.getElementById('keywordsFilter');
    const practiceFilter = document.getElementById('practiceFilter');
    
    if (keywordsFilter) {
        keywordsFilter.addEventListener('change', applyFilters);
    }
    
    if (practiceFilter) {
        practiceFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const portfolioElement = document.getElementById('portfolio-sections');
    const keywordsFilter = document.getElementById('keywordsFilter');
    const practiceFilterEl = document.getElementById('practiceFilter');
    if (!portfolioElement || !keywordsFilter || !practiceFilterEl) return;

    const keywordFilter = keywordsFilter.value.toLowerCase();
    const practiceFilter = practiceFilterEl.value.toLowerCase();

    const filteredPosts = allPortfolioPosts.filter(post => {
        const tags = String(post.tags || '').toLowerCase();
        const category = String(post.category || '').toLowerCase();
        const content = String(post.excerpt || '').toLowerCase();

        const matchesKeyword = !keywordFilter || 
            tags.includes(keywordFilter) || 
            content.includes(keywordFilter);
            
        const matchesPractice = !practiceFilter || 
            category.includes(practiceFilter);

        return matchesKeyword && matchesPractice;
    });

    if (keywordFilter) {
        const selectedOption = keywordsFilter.options[keywordsFilter.selectedIndex];
        const keywordLabel = selectedOption ? selectedOption.textContent : keywordsFilter.value;
        portfolioElement.innerHTML = renderKeywordPortfolioSection(keywordLabel, filteredPosts);
        syncPortfolioCardsAfterRender(true);
        return;
    }

    portfolioElement.innerHTML = renderPortfolioSectionsForPosts(filteredPosts);
    syncPortfolioCardsAfterRender();
}

// Debug function (optional, can be removed for production)
function debugFirestorePaths() {
    if (DEBUG) {
        console.log('--- Firestore Debug --- ');
        document.querySelectorAll('.firestore-dynamic-content').forEach(el => {
            console.log(`Path for ${el.id || 'element'} (data-id: ${el.getAttribute('data-id')}): users/${USER_ID}/items/${el.getAttribute('data-id')}`);
        });
        console.log(`Blog collection path: users/${USER_ID}/items (filtered by type="blog")`);
        
        db.collection('users').doc(USER_ID).collection('items').limit(5).get()
          .then(snapshot => {
              if (!snapshot.empty) {
                  console.log('Sample documents in items collection:');
                  snapshot.forEach(doc => console.log(` - ID: ${doc.id}, Type: ${doc.data().type || 'N/A'}, Title: ${doc.data().title || 'N/A'}`));
              } else {
                  console.log('No documents found in items collection for this user.');
              }
          }).catch(err => console.error("Error fetching sample items:", err));
    }
}

// Slideshow functionality
const slideshows = new Map();

function initializeSlideshow(slideshowId) {
    if (DEBUG) console.log('Initializing slideshow:', slideshowId);
    
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) {
        console.error('Slideshow element not found:', slideshowId);
        return;
    }
    
    const slides = slideshow.querySelectorAll('.slide');
    const indicators = slideshow.querySelectorAll('.indicator');
    
    if (DEBUG) console.log('Slideshow slides found:', slides.length);
    
    if (slides.length === 0) {
        console.error('No slides found in slideshow:', slideshowId);
        return;
    }
    
    // Store slideshow data
    slideshows.set(slideshowId, {
        currentSlide: 0,
        totalSlides: slides.length,
        autoPlayInterval: null,
        isPaused: false,
        firstAspectRatio: null,
        resizeHandler: null
    });

    // Fix container height to first image's aspect ratio
    const applyFixedHeight = (ratio) => {
        const data = slideshows.get(slideshowId);
        if (!data) return;
        data.firstAspectRatio = ratio;
        // Measure based on the first slide's actual width (accounts for 70% rule on desktop)
        const firstSlide = slides[0];
        const measurementEl = firstSlide || slideshow;
        const slideWidth = measurementEl.getBoundingClientRect().width || slideshow.clientWidth;
        if (!slideWidth || !ratio) return;
        const targetHeight = Math.round(slideWidth * ratio);
        // Apply fixed height to container and all slides
        slideshow.style.height = targetHeight + 'px';
        slides.forEach(s => { s.style.height = targetHeight + 'px'; });
    };

    const setupFixedHeight = () => {
        const firstMedia = slides[0] ? slides[0].querySelector('.slide-media') : null;
        if (!firstMedia) return;
        if (firstMedia.tagName === 'IMG') {
            const img = firstMedia;
            const setFromImg = () => {
                const naturalW = img.naturalWidth;
                const naturalH = img.naturalHeight;
                if (naturalW && naturalH) {
                    const ratio = naturalH / naturalW;
                    // Use rAF to ensure layout is settled before measuring widths
                    requestAnimationFrame(() => applyFixedHeight(ratio));
                }
            };
            if (img.complete) {
                setFromImg();
            } else {
                img.addEventListener('load', setFromImg, { once: true });
            }
        }
    };
    setupFixedHeight();

    // Recalculate on resize using stored ratio
    const onResize = () => {
        const data = slideshows.get(slideshowId);
        if (data && data.firstAspectRatio) {
            applyFixedHeight(data.firstAspectRatio);
        } else {
            setupFixedHeight();
        }
    };
    window.addEventListener('resize', onResize);
    const dataRef = slideshows.get(slideshowId);
    if (dataRef) dataRef.resizeHandler = onResize;
    
    // Add hover event listeners to pause/resume auto-play
    slideshow.addEventListener('mouseenter', () => {
        const data = slideshows.get(slideshowId);
        if (data) {
            data.isPaused = true;
            stopAutoPlay(slideshowId);
        }
    });
    
    slideshow.addEventListener('mouseleave', () => {
        const data = slideshows.get(slideshowId);
        if (data) {
            data.isPaused = false;
            startAutoPlay(slideshowId);
        }
    });
    
    // Ensure initial state shows neighbors
    try {
        goToSlide(slideshowId, 0);
    } catch (e) {
        console.warn('goToSlide(0) during init failed:', e);
    }

    // Start auto-play
    if (DEBUG) console.log('Starting auto-play for slideshow:', slideshowId);
    startAutoPlay(slideshowId);
}

function changeSlide(slideshowId, direction) {
    if (DEBUG) console.log('changeSlide called:', slideshowId, 'direction:', direction);
    
    const slideshowData = slideshows.get(slideshowId);
    if (!slideshowData) {
        console.error('Slideshow data not found:', slideshowId);
        return;
    }
    
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) {
        console.error('Slideshow element not found:', slideshowId);
        return;
    }
    
    // Calculate new slide index
    let newSlide = slideshowData.currentSlide + direction;
    if (newSlide >= slideshowData.totalSlides) newSlide = 0;
    if (newSlide < 0) newSlide = slideshowData.totalSlides - 1;
    
    if (DEBUG) console.log('Changing from slide', slideshowData.currentSlide, 'to slide', newSlide);
    
    goToSlide(slideshowId, newSlide);
    
    // If this was called by user interaction, restart auto-play
    if (slideshowData.autoPlayInterval) {
        stopAutoPlay(slideshowId);
        setTimeout(() => startAutoPlay(slideshowId), 3000);
    }
}

function goToSlide(slideshowId, slideIndex) {
    if (DEBUG) console.log('goToSlide called:', slideshowId, 'slideIndex:', slideIndex);
    
    const slideshowData = slideshows.get(slideshowId);
    if (!slideshowData) {
        console.error('Slideshow data not found in goToSlide:', slideshowId);
        return;
    }
    
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) {
        console.error('Slideshow element not found in goToSlide:', slideshowId);
        return;
    }
    
    const slides = slideshow.querySelectorAll('.slide');
    const indicators = slideshow.querySelectorAll('.indicator');
    
    if (DEBUG) console.log('Found slides:', slides.length, 'indicators:', indicators.length);
    
    // Remove state classes from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
        if (DEBUG) console.log('Activated slide:', slideIndex);
    } else {
        console.error('Slide not found at index:', slideIndex);
    }
    if (indicators[slideIndex]) {
        indicators[slideIndex].classList.add('active');
    }
    
    // Ensure active indicator is visible only within indicators container without scrolling the page
    const indicatorsContainer = slideshow.querySelector('.slideshow-indicators');
    const activeIndicator = indicatorsContainer ? indicatorsContainer.querySelector('.indicator.active') : null;
    if (indicatorsContainer && activeIndicator) {
        try {
            const cRect = indicatorsContainer.getBoundingClientRect();
            const iRect = activeIndicator.getBoundingClientRect();
            const overflowX = iRect.left < cRect.left || iRect.right > cRect.right;
            if (overflowX) {
                const delta = iRect.left < cRect.left ? (iRect.left - cRect.left) : (iRect.right - cRect.right);
                indicatorsContainer.scrollLeft += delta;
            }
        } catch (_) {}
    }

    // Tag neighbor slides for peek effect (wrap-around)
    if (slides.length > 1) {
        const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
        const nextIndex = (slideIndex + 1) % slides.length;
        if (slides[prevIndex]) slides[prevIndex].classList.add('prev');
        if (slides[nextIndex]) slides[nextIndex].classList.add('next');
    }

    // Update current slide
    slideshowData.currentSlide = slideIndex;
}

function startAutoPlay(slideshowId) {
    if (DEBUG) console.log('startAutoPlay called for:', slideshowId);
    
    const slideshowData = slideshows.get(slideshowId);
    if (!slideshowData) {
        console.error('Slideshow data not found in startAutoPlay:', slideshowId);
        return;
    }
    
    if (DEBUG) console.log('Slideshow data:', slideshowData);
    
    // Only start auto-play if there are multiple slides and not paused
    if (slideshowData.totalSlides <= 1) {
        if (DEBUG) console.log('Not starting auto-play: only', slideshowData.totalSlides, 'slides');
        return;
    }
    
    if (slideshowData.isPaused) {
        if (DEBUG) console.log('Not starting auto-play: slideshow is paused');
        return;
    }
    
    stopAutoPlay(slideshowId); // Clear any existing interval
    
    if (DEBUG) console.log('Starting auto-play interval for:', slideshowId);
    
    slideshowData.autoPlayInterval = setInterval(() => {
        if (DEBUG) console.log('Auto-play tick for:', slideshowId);
        // Double-check pause state before changing slide
        if (!slideshowData.isPaused) {
            changeSlide(slideshowId, 1);
        }
    }, 4000); // Change slide every 4 seconds
}

function stopAutoPlay(slideshowId) {
    const slideshowData = slideshows.get(slideshowId);
    if (!slideshowData) return;
    
    if (slideshowData.autoPlayInterval) {
        clearInterval(slideshowData.autoPlayInterval);
        slideshowData.autoPlayInterval = null;
    }
}

// Make slideshow functions global so onclick handlers can access them
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;

// Load all content when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (DEBUG) console.log('Document loaded, initializing portfolio...');
    
    debugFirestorePaths(); // Optional: for debugging paths

    // Load Firestore dynamic content
    document.querySelectorAll('.firestore-dynamic-content').forEach(el => {
        loadDynamicItem(el);
    });

    // Load portfolio
    loadPortfolio().then(() => {
        // Setup filtering after portfolio loads
        setupFiltering();
        // Setup expand/collapse toggles for sections
        setupExpandToggles();
    });
});

// Expand/collapse portfolio sections with smooth scroll and highlight
function setupExpandToggles() {
    const container = document.getElementById('portfolio-sections');
    if (!container) return;

    const isMobilePortfolio = window.matchMedia('(max-width: 768px)').matches;
    if (isMobilePortfolio) {
        container.querySelectorAll('.portfolio-section').forEach(section => {
            section.classList.add('expanded');
            const btn = section.querySelector('.expand-btn');
            if (btn) btn.setAttribute('aria-expanded', 'true');
        });
    }

    container.addEventListener('click', function(e) {
        const btn = e.target.closest('.expand-btn');
        if (!btn) return;
        const section = btn.closest('.portfolio-section');
        if (!section) return;

        const willExpand = !section.classList.contains('expanded');
        section.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', willExpand ? 'true' : 'false');

        if (willExpand) {
            // Smooth scroll the section header into view (account for fixed header)
            const headerEl = section.querySelector('.section-header') || section;
            const headerRect = headerEl.getBoundingClientRect();
            const fixedHeader = document.querySelector('.portfolio-header');
            const fixedHeaderH = fixedHeader ? fixedHeader.getBoundingClientRect().height : 90;
            const offsetTop = window.scrollY + headerRect.top - fixedHeaderH - 10; // small extra margin
            window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });

            // Brief highlight pulse
            section.classList.add('highlight-pulse');
            setTimeout(() => section.classList.remove('highlight-pulse'), 1300);
        }
    });
}

// --- Mobile autoplay enforcement for card videos ---
let cardVideoObserver = null;

function setupCardVideoAutoplayObserver() {
    if (cardVideoObserver || !('IntersectionObserver' in window)) return;
    cardVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (!(video instanceof HTMLVideoElement)) return;
            if (entry.isIntersecting) {
                // Ensure attributes each time before playing
                try {
                    video.muted = true;
                    video.loop = true;
                    video.autoplay = true;
                    video.playsInline = true;
                    video.setAttribute('muted', '');
                    video.setAttribute('playsinline', '');
                    video.setAttribute('webkit-playsinline', '');
                    video.removeAttribute('controls');
                    video.preload = 'auto';
                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch(() => {/* ignore autoplay rejections */});
                    }
                } catch (_e) {}
            } else {
                try { video.pause(); } catch (_e) {}
            }
        });
    }, { threshold: 0.25 });
}

function findAndPrepareCardVideos(root = document) {
    if (!root) return;
    const selector = '.portfolio-card video.card-image, .related-work-card video.card-image';
    const videos = Array.from(root.querySelectorAll(selector));
    if (videos.length === 0) return;

    videos.forEach(video => {
        try {
            // Set critical attributes/properties early
            video.muted = true;
            video.loop = true;
            video.autoplay = true;
            video.playsInline = true;
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.removeAttribute('controls');
            video.preload = 'auto';
        } catch (_e) {}

        if (cardVideoObserver) {
            cardVideoObserver.observe(video);
        } else {
            // Fallback: attempt immediate play
            try { video.play(); } catch (_e) {}
        }
    });
}