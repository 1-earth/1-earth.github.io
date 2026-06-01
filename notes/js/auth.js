import { supabase } from './supabase.js';
import { state } from './state.js';
import * as dom from './dom.js';
import * as config from './config.js';

export function isSignedIn() {
  return !!state.authUser;
}

export function canEdit() {
  return state.authUser?.email === config.OWNER_EMAIL;
}

function getRedirectUrl() {
  return window.location.href.split('#')[0];
}

function updateAuthUI() {
  if (!dom.authBtnEl) return;

  if (state.authUser) {
    const email = state.authUser.email || 'Signed in';
    dom.authUserLabelEl.textContent = canEdit() ? email : `${email} (view only)`;
    dom.authUserLabelEl.classList.remove('hidden');
    dom.authBtnEl.textContent = 'Sign out';
    dom.authBtnEl.classList.add('auth-btn-signed-in');
  } else {
    dom.authUserLabelEl.textContent = '';
    dom.authUserLabelEl.classList.add('hidden');
    dom.authBtnEl.textContent = 'Sign in with Google';
    dom.authBtnEl.classList.remove('auth-btn-signed-in');
  }
}

export function applyEditMode() {
  const editable = canEdit();
  dom.appEl.classList.toggle('read-only', !editable);

  dom.titleInputEl.readOnly = !editable;
  dom.contentInputEl.contentEditable = editable ? 'true' : 'false';

  const editButtons = [
    dom.newNoteBtnEl,
    dom.addFolderBtnEl,
    dom.importBtnEl,
    dom.deleteNoteBtnEl,
    dom.addDropdownTriggerEl
  ];

  editButtons.forEach(btn => {
    if (btn) btn.disabled = !editable;
  });

  dom.formatToolbarEl.querySelectorAll('[data-format]').forEach(btn => {
    btn.disabled = !editable;
  });

  if (!editable && dom.moveFolderTriggerEl) {
    dom.moveFolderTriggerEl.disabled = true;
  }
}

async function handleAuthClick() {
  if (state.authUser) {
    await supabase.auth.signOut();
    return;
  }

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: getRedirectUrl() }
  });

  if (error) {
    alert('Sign in failed: ' + error.message);
  }
}

export async function initAuth(onSessionChange) {
  const { data: { session } } = await supabase.auth.getSession();
  state.authUser = session?.user ?? null;
  updateAuthUI();

  supabase.auth.onAuthStateChange(async (_event, session) => {
    state.authUser = session?.user ?? null;
    updateAuthUI();
    applyEditMode();
    if (onSessionChange) await onSessionChange(session);
  });

  dom.authBtnEl.addEventListener('click', handleAuthClick);
  applyEditMode();
}
