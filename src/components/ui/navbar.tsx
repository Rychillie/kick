'use client';

import { Separator, Text } from '@/components/elements';
import c from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const routes = [
    { name: 'Invoices', path: '/invoices' },
    { name: 'Customers', path: '#' }
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full bg-white/50 shadow-navbar backdrop-blur-[20px] dark:border-b dark:border-neutral-900 dark:bg-black/50 dark:shadow-none">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/"
            className="cursor-pointer transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            <Text size="14" weight="semibold">
              Kick
            </Text>
          </Link>

          <Separator className="mx-2" vertical />

          <div className="flex gap-2 text-neutral-700 dark:text-neutral-400">
            {routes.map((route, index) => (
              <Link
                href={route.path}
                key={index}
                className={c(
                  'transition-all',
                  pathname === route.path
                    ? 'cursor-default text-neutral-900 dark:text-neutral-50'
                    : 'cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-200'
                )}
              >
                <Text size="14" weight="medium">
                  {route.name}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-800">
          <Text
            size="10"
            weight="medium"
            className="text-gray-900 dark:text-gray-100"
          >
            M
          </Text>
        </div>
      </div>
    </nav>
  );
}
