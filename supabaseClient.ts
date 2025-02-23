import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; // .env.local'dan URL'yi al
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // .env.local'dan Anon Anahtarı'nı al

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 