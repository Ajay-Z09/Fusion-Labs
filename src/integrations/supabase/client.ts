// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nquruovexehsqyluwvqk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdXJ1b3ZleGVoc3F5bHV3dnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNTI4OTYsImV4cCI6MjA1NDcyODg5Nn0.WrBL-JWE0MPWoQzRQXcZN8M_YPqBo4Y5ZVHSRzOq7mU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);