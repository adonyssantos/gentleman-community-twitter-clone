import { createClient } from '@supabase/supabase-js';

interface ISupabaseConfig {
  supabaseUrl: string;
  supabaseKey: string;
}
const supabaseConfig: ISupabaseConfig = {
  supabaseUrl: process.env.NEXT_PUBLIC_REACT_APP_SUPABASE_URL!,
  supabaseKey: process.env.NEXT_PUBLIC_REACT_APP_ANON_KEY!,
};

const supabase = createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseKey);

export default supabase;
