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

  console.log(pathname.split('/')[1]);

  const { SignInModal, setShowSignInModal } = useSignInModal();

  const routes = [
    { name: 'Invoices', path: '/invoices' },
    { name: 'Customers', path: '/customers' }
  ];

  return (
    <>
      <SignInModal />
      <nav className="fixed inset-x-0 top-0 z-40 w-full bg-white/50 shadow-navbar backdrop-blur-[20px]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="cursor-pointer transition-colors hover:text-gray-800"
            >
              <Text size="14" weight="semibold">
                Kick
              </Text>
            </Link>

            <Separator className="mx-2" vertical />

            <div className="flex gap-2 text-gray-700">
              {routes.map((route, index) => (
                <Link
                  href={route.path}
                  key={index}
                  className={c(
                    'transition-all',
                    `/${pathname.split('/')[1]}` === route.path
                      ? 'cursor-default text-gray-900'
                      : 'cursor-pointer hover:text-gray-800'
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
              <Button
                size="sm"
                intent="primary"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
