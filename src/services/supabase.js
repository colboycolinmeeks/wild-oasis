import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vulaonaiagkwowcwblbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1bGFvbmFpYWdrd293Y3dibGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NjI1NjMsImV4cCI6MjA0MjQzODU2M30.ExB-rR-z_j9AKYP8E0jvKxVsfMQxsIkaoow2Q4UsAdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
