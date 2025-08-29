// js/storageService.js
let storageInstance = null;

function getStorageInstance() {
    if (!storageInstance) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        storageInstance = firebase.storage();
    }
    return storageInstance;
}

export function uploadFile(storagePath, file, onProgress, retryCount = 0) {
    const storage = getStorageInstance();
    
    // Ensure user is authenticated before attempting upload
    const auth = firebase.auth();
    if (!auth.currentUser) {
        return Promise.reject(new Error('User must be authenticated to upload files'));
    }
    
    // Debug logging
    console.log('Upload attempt:', {
        path: storagePath,
        user: auth.currentUser.uid,
        retry: retryCount,
        fileSize: file.size
    });
    
    const storageRef = storage.ref(storagePath);
    const contentType = file.type || 'application/octet-stream';
    // Force inline display for PDFs and generally safe for images/videos
    const metadata = {
        contentType: contentType,
        contentDisposition: (contentType === 'application/pdf') ? `inline; filename="${file.name}"` : undefined
    };
    const task = storageRef.put(file, metadata);

    return new Promise((resolve, reject) => {
        task.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (onProgress) onProgress(progress);
            },
            async (error) => {
                console.error("Upload failed for " + storagePath + ":", error);
                
                // Retry logic for permission errors (common on first attempt)
                if (error.code === 'storage/unauthorized' && retryCount < 2) {
                    console.log(`Retrying upload for ${storagePath} (attempt ${retryCount + 1})`);
                    // Wait a bit before retrying
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    try {
                        const retryResult = await uploadFile(storagePath, file, onProgress, retryCount + 1);
                        resolve(retryResult);
                    } catch (retryError) {
                        reject(retryError);
                    }
                } else {
                    reject(error);
                }
            },
            async () => {
                try {
                    const downloadURL = await task.snapshot.ref.getDownloadURL();
                    console.log("Upload successful for " + storagePath);
                    resolve({ downloadURL, storagePath: task.snapshot.ref.fullPath });
                } catch (error) {
                    console.error("Failed to get download URL for " + storagePath + ":", error);
                    reject(error);
                }
            }
        );
    });
}

export async function deleteFile(fullStoragePath) {
    const storage = getStorageInstance();
    if (!fullStoragePath || !fullStoragePath.startsWith('users/')) { // Basic safety
        console.warn("Invalid or unsafe path for deletion:", fullStoragePath);
        return Promise.resolve("Skipped deletion due to invalid path.");
    }
    const fileRef = storage.ref(fullStoragePath);
    try {
        await fileRef.delete();
        console.log("File deleted from storage:", fullStoragePath);
    } catch (error) {
        if (error.code === 'storage/object-not-found') {
            console.warn("File not found in storage, skipping deletion:", fullStoragePath);
        } else {
            console.error("Error deleting file from storage:", fullStoragePath, error);
            throw error; // Re-throw for handling upstream
        }
    }
}

export async function deleteFolderContents(folderPath) {
    const storage = getStorageInstance();
    const listRef = storage.ref(folderPath);
    try {
        const res = await listRef.listAll();
        const deletePromises = [];
        res.items.forEach((itemRef) => {
            deletePromises.push(itemRef.delete().catch(err => {
                // Log individual errors but don't let one failed delete stop others
                console.error(`Failed to delete ${itemRef.fullPath}:`, err);
            }));
        });
        // Also handle subfolders if necessary (not common for this structure but good to know)
        // res.prefixes.forEach((folderRef) => {
        //   deletePromises.push(deleteFolderContents(folderRef.fullPath));
        // });
        await Promise.all(deletePromises);
        console.log("All files in folder deleted (or attempted):", folderPath);
    } catch (error) {
        console.error("Error listing or deleting folder contents:", folderPath, error);
        // Decide if this should throw or just log
    }
}