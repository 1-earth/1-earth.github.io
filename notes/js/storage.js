import * as config from './config.js';
import { state } from './state.js';
import { setSaveStatus, formatLastSaved } from './utils.js';
import { supabase } from './supabase.js';
import { canEdit, isSignedIn } from './auth.js';

function getDataRevision(data) {
  if (!data?.notes?.length) return 0;
  return data.notes.reduce((latest, note) => {
    const ts = note.updatedAt ? new Date(note.updatedAt).getTime() : 0;
    return Math.max(latest, ts);
  }, 0);
}

function loadLocalCache() {
  try {
    const stored = localStorage.getItem(config.STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

function loadPendingSync() {
  try {
    const stored = localStorage.getItem(config.PENDING_SYNC_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

function markPendingSync(reason) {
  localStorage.setItem(config.PENDING_SYNC_KEY, JSON.stringify({
    data: state.data,
    savedAt: new Date().toISOString(),
    reason
  }));
}

function clearPendingSync() {
  localStorage.removeItem(config.PENDING_SYNC_KEY);
}

function hasPendingSync() {
  return !!localStorage.getItem(config.PENDING_SYNC_KEY);
}

function loadLastCloudSavedAt() {
  return localStorage.getItem(config.LAST_CLOUD_SAVE_KEY);
}

function rememberCloudSave(iso) {
  state.lastCloudSavedAt = iso;
  localStorage.setItem(config.LAST_CLOUD_SAVE_KEY, iso);
}

function writeLocalCache() {
  saveSession();
  localStorage.setItem(config.STORAGE_KEY, JSON.stringify(state.data));
}

function pickNewestData(cloudData, localData, pendingSync) {
  const candidates = [];

  if (cloudData) {
    candidates.push({ data: cloudData, revision: getDataRevision(cloudData), source: 'cloud' });
  }
  if (localData) {
    candidates.push({ data: localData, revision: getDataRevision(localData), source: 'local' });
  }
  if (pendingSync?.data) {
    const pendingRevision = Math.max(
      getDataRevision(pendingSync.data),
      pendingSync.savedAt ? new Date(pendingSync.savedAt).getTime() : 0
    );
    candidates.push({ data: pendingSync.data, revision: pendingRevision, source: 'pending' });
  }

  if (!candidates.length) return null;

  candidates.sort((a, b) => b.revision - a.revision);
  return candidates[0];
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(message)), ms);
    })
  ]);
}

async function uploadToCloud(data) {
  const request = supabase
    .from('notes_data')
    .update({
      data,
      updated_at: new Date().toISOString()
    })
    .eq('id', config.SUPABASE_NOTES_ROW_ID);

  const { error } = await withTimeout(
    request,
    config.CLOUD_SAVE_TIMEOUT_MS,
    'Save timed out'
  );

  if (error) throw error;
}

async function attemptCloudSave(showFeedback, attempt = 1) {
  if (!canEdit()) return false;
  if (!navigator.onLine) {
    markPendingSync('offline');
    if (showFeedback) {
      setSaveStatus('pending', 'Offline — saved locally, queued to sync');
    }
    return false;
  }

  try {
    await uploadToCloud(state.data);
    const savedAt = new Date().toISOString();
    rememberCloudSave(savedAt);
    clearPendingSync();
    if (showFeedback) {
      setSaveStatus('saved', `Last saved at ${formatLastSaved(savedAt)}`);
    }
    return true;
  } catch (e) {
    if (attempt === 1) {
      await new Promise(resolve => setTimeout(resolve, config.CLOUD_SAVE_RETRY_MS));
      return attemptCloudSave(showFeedback, 2);
    }

    markPendingSync('failed');
    if (showFeedback) {
      setSaveStatus('pending', `Sync failed — saved locally (${e.message || 'unknown error'})`);
    }
    return false;
  }
}

async function runCloudSave(showFeedback) {
  if (!canEdit()) return;

  if (state.cloudSaveInFlight) {
    state.cloudSaveQueued = true;
    return;
  }

  state.cloudSaveInFlight = true;
  if (showFeedback) setSaveStatus('saving', 'Saving…');

  try {
    await attemptCloudSave(showFeedback);
  } finally {
    state.cloudSaveInFlight = false;

    if (state.cloudSaveQueued) {
      state.cloudSaveQueued = false;
      await runCloudSave(showFeedback);
    } else if (showFeedback && state.lastCloudSavedAt && !hasPendingSync()) {
      setSaveStatus('saved', `Last saved at ${formatLastSaved(state.lastCloudSavedAt)}`);
    }
  }
}

export function refreshSaveStatus() {
  if (!isSignedIn()) {
    setSaveStatus('', 'View only — sign in to edit');
    return;
  }

  if (!canEdit()) {
    setSaveStatus('', 'View only — read access');
    return;
  }

  if (state.cloudSaveInFlight) {
    setSaveStatus('saving', 'Saving…');
    return;
  }

  if (state.saveTimer) {
    setSaveStatus('', 'Unsaved changes');
    return;
  }

  if (hasPendingSync()) {
    if (!navigator.onLine) {
      setSaveStatus('pending', 'Offline — saved locally, queued to sync');
    } else {
      setSaveStatus('pending', 'Sync pending — saved locally');
    }
    return;
  }

  if (state.lastCloudSavedAt) {
    setSaveStatus('saved', `Last saved at ${formatLastSaved(state.lastCloudSavedAt)}`);
    return;
  }

  setSaveStatus('', 'Ready');
}

export async function flushPendingCloudSync(showFeedback = true) {
  if (!canEdit() || !hasPendingSync()) return;
  await runCloudSave(showFeedback);
}

export function saveSession() {
  localStorage.setItem(config.SESSION_KEY, JSON.stringify({
    activeFolderId: state.activeFolderId,
    activeNoteId: state.activeNoteId,
    sortOrder: state.sortOrder
  }));
}

export function loadSession() {
  try {
    const session = JSON.parse(localStorage.getItem(config.SESSION_KEY));
    if (!session) return;
    if (session.sortOrder) state.sortOrder = session.sortOrder;
    if (session.activeFolderId) state.activeFolderId = session.activeFolderId;
    if (session.activeNoteId && state.data.notes.some(n => n.id === session.activeNoteId)) {
      state.activeNoteId = session.activeNoteId;
    }
  } catch (e) {
    console.warn('Could not restore session');
  }
}

async function loadCloudData() {
  const { data, error } = await supabase
    .from('notes_data')
    .select('data')
    .eq('id', config.SUPABASE_NOTES_ROW_ID)
    .single();

  if (error) throw error;
  return data?.data ?? null;
}

export async function loadData() {
  state.lastCloudSavedAt = loadLastCloudSavedAt();

  const localData = loadLocalCache();
  const pendingSync = loadPendingSync();
  let cloudData = null;

  try {
    cloudData = await loadCloudData();
  } catch (e) {
    console.warn('Supabase load failed:', e.message);
  }

  const winner = pickNewestData(cloudData, localData, pendingSync);

  if (winner?.data) {
    state.data = winner.data;
    writeLocalCache();

    if (winner.source === 'cloud') {
      clearPendingSync();
    } else if (canEdit()) {
      markPendingSync(winner.source === 'pending' ? (pendingSync?.reason || 'pending') : 'local-newer');
    }
    return;
  }

  if (localData) {
    state.data = localData;
    return;
  }

  try {
    const res = await fetch('notes/notes.json');
    if (res.ok) {
      state.data = await res.json();
      writeLocalCache();
      if (canEdit()) markPendingSync('import');
    }
  } catch (e) {
    state.data = {
      folders: [{ id: 'general', name: 'General', order: 0 }],
      notes: []
    };
  }
}

export async function persistData(showFeedback) {
  writeLocalCache();

  if (canEdit()) {
    await runCloudSave(showFeedback !== false);
    return;
  }

  if (showFeedback !== false) {
    setSaveStatus('', 'View only — sign in to save');
  }
}

export function scheduleSave() {
  if (!canEdit()) return;

  writeLocalCache();
  markPendingSync('pending');
  clearTimeout(state.saveTimer);
  setSaveStatus('', 'Unsaved changes');

  state.saveTimer = setTimeout(async () => {
    state.saveTimer = null;
    await runCloudSave(true);
  }, config.SAVE_DEBOUNCE_MS);
}

export async function forceSave() {
  if (!state.authUser) {
    setSaveStatus('', 'View only — sign in to save');
    return;
  }

  clearTimeout(state.saveTimer);
  state.saveTimer = null;
  writeLocalCache();
  markPendingSync('pending');
  await runCloudSave(true);
}

export function isSavePending() {
  return state.saveTimer !== null || state.cloudSaveInFlight || hasPendingSync();
}

export function markJsonBackedUp() {
  localStorage.setItem(config.BACKUP_REMINDER_KEY, Date.now().toString());
}

export function needsBackupReminder() {
  if (!state.data.notes.length) return false;
  const last = localStorage.getItem(config.BACKUP_REMINDER_KEY);
  if (!last) return true;
  const daysSince = (Date.now() - parseInt(last, 10)) / (1000 * 60 * 60 * 24);
  return daysSince >= 7;
}

export function flushSaveSync() {
  if (!canEdit()) return;

  clearTimeout(state.saveTimer);
  state.saveTimer = null;
  writeLocalCache();
  markPendingSync('pending');
}

export function setupUnloadGuards() {
  window.addEventListener('pagehide', flushSaveSync);

  window.addEventListener('online', () => {
    flushPendingCloudSync(true);
  });

  window.addEventListener('beforeunload', (e) => {
    const pending = isSavePending();
    const backupNeeded = needsBackupReminder();

    if (pending) flushSaveSync();

    if (pending || backupNeeded) {
      e.preventDefault();
      e.returnValue = pending
        ? 'Changes are saved locally and will sync to the cloud when possible.'
        : 'Remember to export JSON and backup your notes file.';
    }
  });
}
