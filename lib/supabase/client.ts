/**
 * Supabase Client Stub
 * -------------------------------------------------------------
 * This file is prepared for future Supabase integration.
 * Currently configured to run locally without connecting to any external database or credentials.
 * 
 * To connect Supabase in the future:
 * 1. Install @supabase/supabase-js
 * 2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 * 3. Initialize createClient<Database>(supabaseUrl, supabaseKey)
 */

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

// Client stub placeholder
export const getSupabaseClient = () => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  // Future Supabase client initialization will be returned here
  return null;
};
