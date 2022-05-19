import { createClient } from '@supabase/supabase-js';
// import electron from 'electron';
// const { app, session, BrowserWindow } = electron;

export const supabaseRedirectBase =
	import.meta.env.VITE_SUPABASE_REDIRECT_URL_BASE.toString();

export const db = createClient(
	import.meta.env.VITE_SUPABASE_URL.toString(),
	import.meta.env.VITE_SUPABASE_ANON_KEY.toString()
);
