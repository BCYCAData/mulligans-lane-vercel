import { createClient } from '@supabase/supabase-js';

const supabaseConnection = createClient(
	import.meta.env.VITE_SUPABASE_URL.toString(),
	import.meta.env.VITE_SUPABASE_ANON_KEY.toString()
);

export default supabaseConnection;
