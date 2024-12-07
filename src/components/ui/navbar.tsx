import { Text } from '@/components/elements';

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full bg-white/50 shadow-navbar backdrop-blur-[20px] dark:border-b dark:border-neutral-900 dark:bg-black/50 dark:shadow-none">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Text size="14" weight="medium">
          Invoicing
        </Text>

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
