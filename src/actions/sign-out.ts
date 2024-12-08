'use server';

import { createClient } from '@/lib/supabase/server';

export default async function signout() {
  const supabase = await createClient();

  return await supabase.auth.signOut();
}
