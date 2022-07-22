import { createSupabaseClient } from "@supabase/auth-helpers-sveltekit";
const { supabaseClient } = createSupabaseClient("https://oiwbamoupmoudqwautha.supabase.co".toString(), "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pd2JhbW91cG1vdWRxd2F1dGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg5NTg2NDAsImV4cCI6MTk2NDUzNDY0MH0.2awNuDa8ez1mjEz9wwX6lGyz-5Z5SR6n_ejrMWHTees".toString());
export {
  supabaseClient as s
};
