export const SUPABASE_URL = 'https://ratvpcbdcdxthbrjicyp.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdHZwY2JkY2R4dGhicmppY3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTkyNzEsImV4cCI6MjA5NTg5NTI3MX0.o9gjfs9laVORNo9sxT9Szic5otcKwD7WeX3KX8yNTus';
export const SUPABASE_NOTES_ROW_ID = 'main';
export const OWNER_EMAIL = 'symonds.george@gmail.com';

export const STORAGE_KEY = 'localNotesApp';
export const SESSION_KEY = 'localNotesAppSession';
export const BACKUP_REMINDER_KEY = 'localNotesAppLastBackup';
export const PENDING_SYNC_KEY = 'localNotesAppPendingSync';
export const LAST_CLOUD_SAVE_KEY = 'localNotesAppLastCloudSave';
export const SAVE_DEBOUNCE_MS = 400;
export const CLOUD_SAVE_TIMEOUT_MS = 20000;
export const CLOUD_SAVE_RETRY_MS = 2000;
export const ALL_NOTES_ID = '__all__';
export const IMAGE_MAX_WIDTH = 1200;
export const IMAGE_JPEG_QUALITY = 0.8;
export const IMAGE_DEFAULT_WIDTH = 400;
export const ALLOWED_IFRAME_ATTRS = [
  'src', 'width', 'height', 'style', 'frameborder', 'allow',
  'allowfullscreen', 'title', 'loading', 'referrerpolicy', 'name'
];
export const UNDO_LIMIT = 100;
export const UNDO_GROUP_MS = 600;
export const INLINE_FORMAT_TAGS = new Set([
  'B', 'STRONG', 'I', 'EM', 'U', 'S', 'STRIKE', 'DEL', 'A', 'SPAN', 'FONT', 'MARK', 'SUB', 'SUP', 'CODE', 'LABEL'
]);
export const BLOCK_FORMAT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BLOCKQUOTE', 'PRE']);
export const MAX_INDENT_LEVEL = 8;
