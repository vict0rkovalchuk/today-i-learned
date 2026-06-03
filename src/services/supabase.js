import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://vngxkdbsmjqhwzofkppf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZ3hrZGJzbWpxaHd6b2ZrcHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTU3MzEsImV4cCI6MjA5NTg5MTczMX0.E7lfae5gFEiH07qTlP2-M1Atr2zyHPjMjAD-y0Olnco';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;