import { createClient } from '@supabase/supabase-js';


const supabaseURL = "https://qjfoypokbphqxocozpfj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZm95cG9rYnBocXhvY296cGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNzAzMjcsImV4cCI6MjAzNzc0NjMyN30.qgjLGB3AaZpE7hr3rHQKdqvPq--WHlGXTVW3D0WOVZc";

  export const supabase = createClient(supabaseURL, supabaseKey);
