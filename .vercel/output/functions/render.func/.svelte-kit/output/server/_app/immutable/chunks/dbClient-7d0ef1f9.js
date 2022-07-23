import { createSupabaseClient } from "@supabase/auth-helpers-sveltekit";
const { supabaseClient } = createSupabaseClient("https://cdgkcqkycxetyqgdwqjh.supabase.co".toString(), "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZ2tjcWt5Y3hldHlxZ2R3cWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMTgxMTEsImV4cCI6MTk3MzY5NDExMX0.3UPYVLh64_9bFJKdG2rsOGjmGzffiVA2nhfUqRuPPNA".toString());
export {
  supabaseClient as s
};
