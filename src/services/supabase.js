import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pxdwbyynxirzalbnqbgy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZHdieXlueGlyemFsYm5xYmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjE3ODYsImV4cCI6MjA4ODgzNzc4Nn0.7L4Pmq_85yBeI3czuTJvNRPhbnTb4tMS8OIKC9RBbFs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
