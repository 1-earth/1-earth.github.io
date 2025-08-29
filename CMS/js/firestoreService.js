// js/firestoreService.js
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

export async function getItemsByType(userId, dataType) {
    const db = getDbInstance();
    return db.collection('users').doc(userId).collection('items')
        .where('type', '==', dataType)
        .orderBy('createdAt', 'desc') // Or 'title' or 'updatedAt'
        .get();
}

export async function getItemById(userId, dataID) {
    const db = getDbInstance();
    return db.collection('users').doc(userId).collection('items').doc(dataID).get();
}

export async function deleteItem(userId, dataID) {
    const db = getDbInstance();
    return db.collection('users').doc(userId).collection('items').doc(dataID).delete();
}