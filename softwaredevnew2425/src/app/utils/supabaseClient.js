import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aqvofxptqkfqcengorpb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxdm9meHB0cWtmcWNlbmdvcnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyODkzOTAsImV4cCI6MjA1Mzg2NTM5MH0.IH5y175wH9BMjWOqVmV2m-JiDlcwiigLiY9FdKo9M9I';

export const supabase = createClient(supabaseUrl, supabaseKey);