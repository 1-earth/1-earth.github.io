// js/firestoreService.js
import * as storageService from './storageService.js';

let dbInstance = null;

function getDbInstance() {
    if (!dbInstance) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        dbInstance = firebase.firestore();
    }
    return dbInstance;
}

// Helper to get next sequential number for dataID using a transaction
async function _getAndUpdateCounter(userId, dataType) {
    const db = getDbInstance();
    const counterRef = db.collection('users').doc(userId).collection('_counters').doc(dataType);
    let newCount = 1;

    try {
        await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(counterRef);
            if (!doc.exists) {
                transaction.set(counterRef, { count: 1 });
                newCount = 1;
            } else {
                newCount = doc.data().count + 1;
                transaction.update(counterRef, { count: newCount });
            }
        });
        return newCount;
    } catch (e) {
        console.error("Counter transaction failed, falling back to query:", e);
        // Fallback: query for max existing number (less robust for concurrent creations)
        const querySnapshot = await db.collection('users').doc(userId).collection('items')
            .where('type', '==', dataType)
            .orderBy('sequenceNumber', 'desc')
            .limit(1)
            .get();
        if (querySnapshot.empty) return 1;
        return querySnapshot.docs[0].data().sequenceNumber + 1;
    }
}

export async function generateNewDataID(userId, dataType) {
    const number = await _getAndUpdateCounter(userId, dataType);
    return `${userId}-${dataType}-${number}`;
}

export async function saveItem(userId, dataID, itemData) {
    const db = getDbInstance();
    const itemRef = db.collection('users').doc(userId).collection('items').doc(dataID);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    const parts = dataID.split('-');
    const sequenceNumber = parseInt(parts[parts.length - 1]);

    const dataToSave = {
        ...itemData,
        dataID: dataID, // Store it explicitly if needed, though doc ID is the source
        sequenceNumber: sequenceNumber,
        updatedAt: timestamp,
    };

    // Add createdAt only if it's a new document (or if you want to overwrite)
    // A simple way to check if it's new is if existingData wasn't passed or itemData doesn't have createdAt
    // However, set with merge handles this well.
    const doc = await itemRef.get();
    if (!doc.exists) {
        dataToSave.createdAt = timestamp;
    }

    return itemRef.set(dataToSave, { merge: true });
}

/** @returns {number|null} epoch ms */
function timestampToMillis(ts) {
    if (ts == null) return null;
    if (typeof ts.toMillis === 'function') return ts.toMillis();
    if (typeof ts.seconds === 'number') {
        return ts.seconds * 1000 + Math.floor((ts.nanoseconds || 0) / 1e6);
    }
    return null;
}

function blogListSortMillis(data) {
    if (!data) return 0;
    const posted = timestampToMillis(data.datePosted);
    if (posted != null) return posted;
    const created = timestampToMillis(data.createdAt);
    if (created != null) return created;
    return 0;
}

/**
 * Wrap sorted docs so callers can keep using .forEach() like a QuerySnapshot.
 * @param {firebase.firestore.QueryDocumentSnapshot[]} sortedDocs
 */
function asIterableSnapshot(sortedDocs) {
    return {
        forEach(callback) {
            sortedDocs.forEach((doc) => callback(doc));
        },
        get docs() {
            return sortedDocs;
        },
        get empty() {
            return sortedDocs.length === 0;
        },
        get size() {
            return sortedDocs.length;
        }
    };
}

export async function getItemsByType(userId, dataType) {
    const db = getDbInstance();
    const base = db.collection('users').doc(userId).collection('items')
        .where('type', '==', dataType);

    if (dataType === 'blog') {
        const snap = await base.get();
        const sortedDocs = snap.docs.slice().sort((a, b) => {
            return blogListSortMillis(b.data()) - blogListSortMillis(a.data());
        });
        return asIterableSnapshot(sortedDocs);
    }

    return base.orderBy('createdAt', 'desc').get();
}

export async function getItemById(userId, dataID) {
    const db = getDbInstance();
    return db.collection('users').doc(userId).collection('items').doc(dataID).get();
}

/**
 * Returns the document ID of another page (type blog) with the same title after trim,
 * compared case-insensitively, or null if the title is unique for this user.
 * @param {string} excludeDataID - Current item when editing; omit for new items.
 */
export async function findDuplicatePageTitle(userId, title, excludeDataID) {
    const normalized = String(title || '').trim().toLowerCase();
    if (!normalized) return null;
    const snap = await getItemsByType(userId, 'blog');
    let conflictId = null;
    snap.forEach((doc) => {
        if (conflictId) return;
        if (excludeDataID && doc.id === excludeDataID) return;
        const t = String((doc.data() && doc.data().title) || '').trim().toLowerCase();
        if (t === normalized) conflictId = doc.id;
    });
    return conflictId;
}

function escapeRegex(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Strip trailing " #123" for duplicate title grouping. */
function stemPageTitle(title) {
    return String(title || '').replace(/\s*#\d+\s*$/i, '').trim();
}

/**
 * Next unique title for a duplicate: "My Page" -> "My Page #2", then "#3", etc.
 */
export async function computeNextDuplicateBlogTitle(userId, sourceTitle) {
    const snap = await getItemsByType(userId, 'blog');
    const titles = [];
    snap.forEach((doc) => {
        titles.push(String((doc.data() && doc.data().title) || '').trim());
    });
    let stem = stemPageTitle(sourceTitle);
    if (!stem) stem = 'Untitled';
    const exactStem = new RegExp('^' + escapeRegex(stem) + '$', 'i');
    const numbered = new RegExp('^' + escapeRegex(stem) + '\\s*#(\\d+)\\s*$', 'i');
    let maxIdx = 0;
    for (let i = 0; i < titles.length; i++) {
        const t = titles[i];
        if (!t) continue;
        if (exactStem.test(t)) maxIdx = Math.max(maxIdx, 1);
        const m = t.match(numbered);
        if (m) maxIdx = Math.max(maxIdx, parseInt(m[1], 10) || 0);
    }
    return stem + ' #' + (maxIdx + 1);
}

/**
 * Deep-copy a blog/page item to a new document id and sequenced title (#2, #3, …).
 * @returns {Promise<string>} new document id
 */
export async function duplicateBlogFromSource(userId, sourceDataID) {
    const snap = await getItemById(userId, sourceDataID);
    if (!snap.exists) throw new Error('Source page not found');
    const d = snap.data() || {};
    if (d.type !== 'blog') throw new Error('Not a page item');

    const newTitle = await computeNextDuplicateBlogTitle(userId, d.title || '');
    const conflict = await findDuplicatePageTitle(userId, newTitle, null);
    if (conflict) throw new Error('Could not assign a unique title; try again.');

    const newId = await generateNewDataID(userId, 'blog');

    let featuredMedia = d.featuredMedia;
    if (!featuredMedia && d.featuredImage) {
        featuredMedia = { url: d.featuredImage, poster: '' };
    }
    if (featuredMedia && typeof featuredMedia === 'object') {
        featuredMedia = { url: featuredMedia.url || '', poster: featuredMedia.poster || '' };
    }

    const itemData = {
        type: 'blog',
        title: newTitle,
        author: d.author != null ? d.author : '',
        category: d.category != null ? d.category : '',
        excerpt: d.excerpt != null ? d.excerpt : '',
        featuredMedia: featuredMedia && (featuredMedia.url || featuredMedia.poster) ? featuredMedia : null,
        tags: d.tags != null ? d.tags : '',
        datePosted: d.datePosted,
        sections: d.sections ? JSON.parse(JSON.stringify(d.sections)) : [],
    };
    if (d.content) itemData.content = d.content;

    await saveItem(userId, newId, itemData);
    return newId;
}

/**
 * Returns another media item id with the same title (trimmed, case-insensitive), or null.
 */
export async function findDuplicateMediaTitle(userId, title, excludeDataID) {
    const normalized = String(title || '').trim().toLowerCase();
    if (!normalized) return null;
    const snap = await getItemsByType(userId, 'media');
    let conflictId = null;
    snap.forEach((doc) => {
        if (conflictId) return;
        if (excludeDataID && doc.id === excludeDataID) return;
        const t = String((doc.data() && doc.data().title) || '').trim().toLowerCase();
        if (t === normalized) conflictId = doc.id;
    });
    return conflictId;
}

export async function computeNextDuplicateMediaTitle(userId, sourceTitle) {
    const snap = await getItemsByType(userId, 'media');
    const titles = [];
    snap.forEach((doc) => {
        titles.push(String((doc.data() && doc.data().title) || '').trim());
    });
    let stem = stemPageTitle(sourceTitle);
    if (!stem) stem = 'Untitled';
    const exactStem = new RegExp('^' + escapeRegex(stem) + '$', 'i');
    const numbered = new RegExp('^' + escapeRegex(stem) + '\\s*#(\\d+)\\s*$', 'i');
    let maxIdx = 0;
    for (let i = 0; i < titles.length; i++) {
        const t = titles[i];
        if (!t) continue;
        if (exactStem.test(t)) maxIdx = Math.max(maxIdx, 1);
        const m = t.match(numbered);
        if (m) maxIdx = Math.max(maxIdx, parseInt(m[1], 10) || 0);
    }
    return stem + ' #' + (maxIdx + 1);
}

/**
 * Copy a media item: clones Storage files into the new item folder and saves Firestore.
 * @returns {Promise<string>} new document id
 */
export async function duplicateMediaFromSource(userId, sourceDataID) {
    const snap = await getItemById(userId, sourceDataID);
    if (!snap.exists) throw new Error('Source media not found');
    const d = snap.data() || {};
    if (d.type !== 'media') throw new Error('Not a media item');

    const newTitle = await computeNextDuplicateMediaTitle(userId, d.title || '');
    const conflict = await findDuplicateMediaTitle(userId, newTitle, null);
    if (conflict) throw new Error('Could not assign a unique title; try again.');

    const newId = await generateNewDataID(userId, 'media');
    const mediaType = d.mediaType || 'photo';
    const files = Array.isArray(d.files) ? d.files : [];
    const newFiles = [];

    for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const oldPath = f.storagePath;
        if (!oldPath || typeof oldPath !== 'string') {
            console.warn('duplicateMediaFromSource: skip file without storagePath', f);
            continue;
        }
        const extFrom = (f.filename || oldPath).split('.').pop() || 'bin';
        const ext = String(extFrom).split('?')[0];
        let newFileName;
        if (mediaType === 'photoGallery') {
            newFileName = `${newId}_${i + 1}.${ext}`;
        } else {
            newFileName = `${newId}.${ext}`;
        }
        const destPath = `users/${userId}/media/${newId}/${newFileName}`;
        const result = await storageService.copyFileToNewPath(oldPath, destPath, null);
        newFiles.push({
            url: result.downloadURL,
            storagePath: result.storagePath,
            filename: newFileName,
            originalFilename: f.originalFilename || f.filename || newFileName,
            caption: f.caption != null ? f.caption : '',
            type: f.type || ''
        });
    }

    const itemData = {
        type: 'media',
        title: newTitle,
        mediaType,
        files: newFiles
    };

    await saveItem(userId, newId, itemData);
    return newId;
}

export async function deleteItem(userId, dataID) {
    const db = getDbInstance();
    return db.collection('users').doc(userId).collection('items').doc(dataID).delete();
}

// --- User Directory Helpers (for admin user selection) ---
export async function upsertUserDirectory(userInfo) {
    if (!userInfo || !userInfo.uid) return;
    const db = getDbInstance();
    const ref = db.collection('userDirectory').doc(userInfo.uid);
    const now = firebase.firestore.FieldValue.serverTimestamp();
    const payload = {
        email: userInfo.email || '',
        displayName: userInfo.displayName || '',
        updatedAt: now
    };
    // Create if missing with createdAt
    const snap = await ref.get();
    if (!snap.exists) {
        payload.createdAt = now;
    }
    return ref.set(payload, { merge: true });
}

export async function listUserDirectory() {
    const db = getDbInstance();
    return db.collection('userDirectory').get();
}