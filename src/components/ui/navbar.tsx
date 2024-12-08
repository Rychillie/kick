'use client';

import { Button, Separator, Text } from '@/components/elements';
import { User } from '@supabase/supabase-js';
import c from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSignInModal } from './sign-in-modal';
import UserDropdown from './user-dropdown';

export default function NavBar({ user }: { user: User | null }) {
  const pathname = usePathname();

  const { SignInModal, setShowSignInModal } = useSignInModal();

  console.log(user);

  const routes = [
    { name: 'Invoices', path: '/invoices' },
    { name: 'Customers', path: '#' }
  ];

  return (
    <>
      <SignInModal />
      <nav className="fixed inset-x-0 top-0 z-40 w-full bg-white/50 shadow-navbar backdrop-blur-[20px] dark:border-b dark:border-gray-900 dark:bg-black/50 dark:shadow-none">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="cursor-pointer transition-colors hover:text-gray-800 dark:hover:text-gray-200"
            >
              <Text size="14" weight="semibold">
                Kick
              </Text>
            </Link>

            <Separator className="mx-2" vertical />

            <div className="flex gap-2 text-gray-700 dark:text-gray-400">
              {routes.map((route, index) => (
                <Link
                  href={route.path}
                  key={index}
                  className={c(
                    'transition-all',
                    pathname === route.path
                      ? 'cursor-default text-gray-900 dark:text-gray-50'
                      : 'cursor-pointer hover:text-gray-800 dark:hover:text-gray-200'
                  )}
                >
                  <Text size="14" weight="medium">
                    {route.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>

          <div>
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <Button intent="primary" onClick={() => setShowSignInModal(true)}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
