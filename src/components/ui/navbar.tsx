import { Text } from '@/components/elements';

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full bg-white/50 pl-[220px] shadow-navbar backdrop-blur-[20px]">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5">
        <Text size="14" weight="medium">
          Invoicing
        </Text>

        <div className="flex size-6 items-center justify-center rounded-full bg-blue-200">
          <Text size="10" weight="medium" className="text-gray-900">
            M
          </Text>
        </div>
      </div>
    </nav>
  );
}