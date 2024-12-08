import { createClient } from '@/lib/supabase/server';
import NavBar from './navbar';

export default async function Nav() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return <NavBar user={data?.user} />;
}
