// js/auth.js
let authInstance = null;

export function initAuthModule(onUserSignedIn, onUserSignedOut) {
    if (!firebase.apps.length) {
        console.log("Firebase app not initialized. Initializing now in auth.js...");
        firebase.initializeApp(firebaseConfig); // Ensure Firebase is initialized
    } else {
        console.log("Firebase app already initialized.");
    }
    authInstance = firebase.auth();

    authInstance.onAuthStateChanged(user => {
        if (user) {
            onUserSignedIn(user);
        } else {
            onUserSignedOut();
        }
    });
}

export function signInWithGoogle() {
    if (!authInstance) throw new Error("Auth module not initialized.");
    const provider = new firebase.auth.GoogleAuthProvider();
    return authInstance.signInWithPopup(provider);
}

export function signOutUser() {
    if (!authInstance) throw new Error("Auth module not initialized.");
    return authInstance.signOut();
}

export function getCurrentUser() {
    if (!authInstance) {
        // console.warn("Auth module not initialized or called too early for getCurrentUser.");
        return null; // Can happen during initial load before onAuthStateChanged fires
    }
    return authInstance.currentUser;
}