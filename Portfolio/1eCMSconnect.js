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

async function renderColumnGroup(columnGroup) {
    const leftRatio = columnGroup.columnRatio ? columnGroup.columnRatio.left : 50;
    const rightRatio = columnGroup.columnRatio ? columnGroup.columnRatio.right : 50;
    
    let columnGroupHtml = '<div class="blog-column-group-frontend">';
    
    // Left column - subtract half the gap (10px) to account for the 20px flex gap
    columnGroupHtml += `<div class="blog-column-frontend blog-column-left" style="width: calc(${leftRatio}% - 10px);">`;
    if (columnGroup.leftColumn && columnGroup.leftColumn.length > 0) {
        const sortedLeftBlocks = columnGroup.leftColumn.sort((a, b) => (a.order || 0) - (b.order || 0));
        for (const block of sortedLeftBlocks) {
            const blockContent = await getBlockContent(block);
            columnGroupHtml += `<div class="blog-block-frontend blog-block-column">${blockContent}</div>`;
        }
    }
    columnGroupHtml += '</div>';
    
    // Right column - subtract half the gap (10px) to account for the 20px flex gap
    columnGroupHtml += `<div class="blog-column-frontend blog-column-right" style="width: calc(${rightRatio}% - 10px);">`;
    if (columnGroup.rightColumn && columnGroup.rightColumn.length > 0) {
        const sortedRightBlocks = columnGroup.rightColumn.sort((a, b) => (a.order || 0) - (b.order || 0));
        for (const block of sortedRightBlocks) {
            const blockContent = await getBlockContent(block);
            columnGroupHtml += `<div class="blog-block-frontend blog-block-column">${blockContent}</div>`;
        }
    }
    columnGroupHtml += '</div>';
    
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
                        return renderMediaBlock(mediaData);
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

function renderMediaBlock(mediaData) {
    if (!mediaData.files || mediaData.files.length === 0) {
        return '<div class="blog-media-placeholder">No media files</div>';
    }
    
    // If only one file, render simple media block
    if (mediaData.files.length === 1) {
        const primaryFile = mediaData.files[0];
        const isImage = primaryFile.type && primaryFile.type.startsWith('image/');
        const isVideo = primaryFile.type && primaryFile.type.startsWith('video/');
        const isPdf = primaryFile.type === 'application/pdf' || (primaryFile.url && primaryFile.url.toLowerCase().endsWith('.pdf'));
        
        let mediaHtml = '<div class="blog-media-frontend">';
        
        if (isImage) {
            mediaHtml += `<img src="${primaryFile.url}" alt="${primaryFile.caption || mediaData.title || 'Image'}" class="blog-media-img">`;
        } else if (isVideo) {
            mediaHtml += `<video src="${primaryFile.url}" controls class="blog-media-video"></video>`;
        } else if (isPdf) {
            mediaHtml += `
                <div class="pdf-inline-embed">
                    <iframe class="pdf-iframe" src="${primaryFile.url}#view=FitH" style="width:100%; height:400px; border:0;"></iframe>
                    <div class="pdf-controls">
                        <a class="pdf-download" href="${primaryFile.url}" target="_blank" rel="noopener">Download</a>
                        <button class="pdf-open-modal-btn" data-url="${primaryFile.url}" onclick="openPdfModal(this.getAttribute('data-url'))">Open</button>
                    </div>
                </div>
            `;
        } else {
            mediaHtml += `<div class="blog-media-placeholder">Media preview not available</div>`;
        }
        
        // Add caption if available
        if (primaryFile.caption) {
            mediaHtml += `<p class="blog-media-caption">${primaryFile.caption}</p>`;
        }
        
        mediaHtml += '</div>';
        return mediaHtml;
    }
    
    // Multiple files - create slideshow
    const slideshowId = `slideshow_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    let mediaHtml = '<div class="blog-media-frontend">';
    
    mediaHtml += `<div class="media-slideshow" id="${slideshowId}">`;
    
    // Add all slides
    mediaData.files.forEach((file, index) => {
        const isImage = file.type && file.type.startsWith('image/');
        const isVideo = file.type && file.type.startsWith('video/');
        const isPdf = file.type === 'application/pdf' || (file.url && file.url.toLowerCase().endsWith('.pdf'));
        const isActive = index === 0 ? 'active' : '';
        
        mediaHtml += `<div class="slide ${isActive}" data-slide="${index}">`;
        
        if (isImage) {
            mediaHtml += `<img src="${file.url}" alt="${file.caption || mediaData.title || 'Image'}" class="slide-media">`;
        } else if (isVideo) {
            mediaHtml += `<video src="${file.url}" controls class="slide-media"></video>`;
        } else if (isPdf) {
            mediaHtml += `
                <div class="pdf-inline-embed">
                    <iframe class="pdf-iframe" src="${file.url}#view=FitH" style="width:100%; height:600px; border:0;"></iframe>
                    <div class="pdf-controls">
                        <a class="pdf-download" href="${file.url}" target="_blank" rel="noopener">Download</a>
                        <button class="pdf-open-modal-btn" data-url="${file.url}" onclick="openPdfModal(this.getAttribute('data-url'))">Open</button>
                    </div>
                </div>
            `;
        } else {
            mediaHtml += `<div class="blog-media-placeholder">Media preview not available</div>`;
        }
        
        // Add caption if available
        if (file.caption) {
            mediaHtml += `<p class="slide-caption">${file.caption}</p>`;
        }
        
        mediaHtml += '</div>';
    });
    
    // Add navigation arrows
    mediaHtml += `
        <button class="slideshow-arrow slideshow-arrow-left" onclick="changeSlide('${slideshowId}', -1)">&#8249;</button>
        <button class="slideshow-arrow slideshow-arrow-right" onclick="changeSlide('${slideshowId}', 1)">&#8250;</button>
    `;
    
    // Add slide indicators
    mediaHtml += '<div class="slideshow-indicators">';
    for (let i = 0; i < mediaData.files.length; i++) {
        const activeClass = i === 0 ? 'active' : '';
        mediaHtml += `<span class="indicator ${activeClass}" onclick="goToSlide('${slideshowId}', ${i})"></span>`;
    }
    mediaHtml += '</div>';
    
    mediaHtml += '</div>'; // Close slideshow
    
    // Add gallery indicator
    mediaHtml += `<p class="blog-media-gallery-indicator">Gallery (${mediaData.files.length} items)</p>`;
    
    mediaHtml += '</div>'; // Close blog-media-frontend
    
    // Initialize slideshow after DOM update
    setTimeout(() => {
        initializeSlideshow(slideshowId);
    }, 100);
    
    return mediaHtml;
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

// Function to load blog posts (updated for modular format)
async function loadPortfolio() {
    const portfolioElement = document.getElementById('portfolio-sections');
    if (!portfolioElement) return;

    if (DEBUG) console.log('Loading portfolio for user:', USER_ID);

    try {
        const querySnapshot = await db.collection('users').doc(USER_ID)
            .collection('items')
            .where('type', '==', 'blog')
            .orderBy('datePosted', 'desc')
            .get();

        if (!querySnapshot.empty) {
            const blogPosts = [];
            const allTags = new Set();
            const allCategories = new Set();
            
            // Collect all blog posts and extract unique tags/categories
            for (const doc of querySnapshot.docs) {
                const blog = { id: doc.id, ...doc.data() };
                
                // Generate excerpt if not provided
                if (!blog.excerpt && blog.sections) {
                    blog.excerpt = generateExcerpt(blog);
                }
                
                // Handle backwards compatibility for featuredImage vs featuredMedia
                if (!blog.featuredMedia && blog.featuredImage) {
                    // Convert old format to new format
                    blog.featuredMedia = { url: blog.featuredImage };
                }
                
                // Only get fallback image if no featured media at all
                if (!blog.featuredMedia && blog.sections) {
                    const fallbackImage = getFirstImageFromSectionsSync(blog.sections);
                    if (fallbackImage) {
                        blog.featuredMedia = { url: fallbackImage };
                    }
                }
                
                blogPosts.push(blog);
                
                // Collect tags for filtering
                if (blog.tags) {
                    blog.tags.split(',').forEach(tag => {
                        const trimmedTag = tag.trim();
                        if (trimmedTag) allTags.add(trimmedTag);
                    });
                }
                
                // Collect categories
                if (blog.category) {
                    allCategories.add(blog.category);
                }
            }
            
            // Update filter dropdowns
            updateFilterDropdowns(allTags, allCategories);
            
            // Group posts by category
            const categorizedPosts = groupPostsByCategory(blogPosts);
            
            // Define the desired category order
            const categoryOrder = [
                'Design Portfolio',
                'Photography', 
                'Videography',
                'Computation',
                'Research & Forward Thinking'
            ];
            
            // Render portfolio sections in the specified order
            let portfolioHtml = '';
            
            // First, render categories in the specified order
            for (const category of categoryOrder) {
                if (categorizedPosts[category]) {
                    portfolioHtml += renderPortfolioSection(category, categorizedPosts[category]);
                }
            }
            
            // Then render any remaining categories that aren't in the predefined order
            for (const [category, posts] of Object.entries(categorizedPosts)) {
                if (!categoryOrder.includes(category)) {
                    portfolioHtml += renderPortfolioSection(category, posts);
                }
            }
            
            portfolioElement.innerHTML = portfolioHtml;
            
            // Setup click handlers for cards
            setupCardClickHandlers();
            
        } else {
            portfolioElement.innerHTML = '<div class="loading">No portfolio items found.</div>';
        }
    } catch (error) {
        console.error("Error loading portfolio:", error);
        portfolioElement.innerHTML = '<div class="loading">Error loading portfolio.</div>';
    } finally {
        portfolioElement.classList.remove('loading');
    }
}

function generateExcerpt(blog) {
    let textContent = '';
    
    if (blog.sections && blog.sections.length > 0) {
        for (const section of blog.sections) {
            if (section.items || section.blocks) {
                const items = section.items || section.blocks;
                for (const item of items) {
                    if ((item.type === 'body' || item.blockType === 'body') && item.content) {
                        // Strip HTML tags and get plain text
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.content;
                        textContent += tempDiv.textContent || tempDiv.innerText || '';
                        if (textContent.length > 100) break;
                    }
                }
                if (textContent.length > 100) break;
            }
        }
    }
    
    return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
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

function renderPortfolioSection(category, posts) {
    if (posts.length === 0) {
        return `
            <section class="portfolio-section" data-category="${category}">
                <div class="section-header">
                    <h2 class="section-title">${category}</h2>
                    <button class="expand-btn">+</button>
                </div>
                <div class="coming-soon">Work coming soon</div>
            </section>
        `;
    }
    
    const cardsHtml = posts.map(post => renderPortfolioCard(post)).join('');
    
    return `
        <section class="portfolio-section" data-category="${category}">
            <div class="section-header">
                <h2 class="section-title">${category}</h2>
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

function renderPortfolioCard(post) {
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [];
    const tagsHtml = tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
    
    // Handle both old (featuredImage) and new (featuredMedia) formats
    const featuredMedia = post.featuredMedia || (post.featuredImage ? { url: post.featuredImage } : null);
    const mediaHtml = createCardMediaElement(featuredMedia, post.title);
    
    const excerpt = post.excerpt || 'No description available';
    
    return `
        <div class="portfolio-card related-work-card" data-post-id="${post.id}" data-tags="${tags.join(',')}" data-category="${post.category || ''}" data-content="${excerpt}">
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
            const postId = card.dataset.postId;
            window.location.href = `Portfolio/work.html?id=${postId}`;
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
    const keywordFilter = document.getElementById('keywordsFilter').value.toLowerCase();
    const practiceFilter = document.getElementById('practiceFilter').value.toLowerCase();
    
    allCards.forEach(card => {
        const tags = card.dataset.tags.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        const content = card.dataset.content.toLowerCase();
        
        const matchesKeyword = !keywordFilter || 
            tags.includes(keywordFilter) || 
            content.includes(keywordFilter);
            
        const matchesPractice = !practiceFilter || 
            category.includes(practiceFilter);
        
        const shouldShow = matchesKeyword && matchesPractice;
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
    
    // Hide empty sections
    document.querySelectorAll('.portfolio-section').forEach(section => {
        const visibleCards = section.querySelectorAll('.portfolio-card[style="display: block"], .portfolio-card:not([style*="display: none"])');
        const hasComingSoon = section.querySelector('.coming-soon');
        
        if (visibleCards.length === 0 && !hasComingSoon) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
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
    
    // Ensure active indicator is visible by scrolling indicators container
    const indicatorsContainer = slideshow.querySelector('.slideshow-indicators');
    const activeIndicator = indicatorsContainer ? indicatorsContainer.querySelector('.indicator.active') : null;
    if (indicatorsContainer && activeIndicator && typeof activeIndicator.scrollIntoView === 'function') {
        activeIndicator.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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