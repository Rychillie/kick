'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

export default async function signin() {
  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.BASE_URL}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });

  if (error) {
    redirect('/error');
  }

  redirect(data.url);
}
