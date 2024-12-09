import { signout } from '@/actions';
import { Button, Text } from '@/components/elements';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';

export default async function AuthenticatedLayout({
  children
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/');
  }

  const routes = [
    { name: 'Invoices', path: '/invoices' },
    { name: 'Customers', path: '/customers' }
  ];

  return (
    <div className="pl-60">
      <aside className="fixed inset-y-0 left-0 flex w-60 flex-col justify-between border-r border-transparents-200 bg-gray-100 p-6">
        <div className="flex flex-col gap-3">
          {routes.map((route, index) => (
            <Link href={route.path} key={index}>
              <Text size="14" weight="medium">
                {route.name}
              </Text>
            </Link>
          ))}
        </div>

        <Button onClick={signout}>Sign Out</Button>
      </aside>
      <main className="mx-auto size-full max-w-7xl">{children}</main>
    </div>
  );
}
