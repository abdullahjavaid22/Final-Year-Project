// Shared Supabase client for DigiSolutions (CDN-based, no bundler)
(function () {
  var SUPABASE_URL = 'https://nxufdvaffsygzutcztzr.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dWZkdmFmZnN5Z3p1dGN6dHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNDYyMTQsImV4cCI6MjA5MzYyMjIxNH0.pEBD3mLOCyb5n86w1WkxC05iymYUzrGtbS5Q4qWW_MU';

  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase CDN is missing. Include https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2 first.');
    return;
  }

  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
