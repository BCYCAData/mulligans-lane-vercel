import { skHelper } from '@supabase/auth-helpers-sveltekit';

export const supabaseRedirectBase = import.meta.env.VITE_SUPABASE_REDIRECT_URL_BASE.toString();
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY.toString();
export const supabaseURL = import.meta.env.VITE_SUPABASE_URL.toString();

export const { supabaseClient } = skHelper(
	import.meta.env.VITE_SUPABASE_URL.toString(),
	import.meta.env.VITE_SUPABASE_ANON_KEY.toString()
);
