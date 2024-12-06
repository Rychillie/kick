import { Icon, Text } from '@/components/elements';
import Image from 'next/image';

export default function SideBar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex h-svh w-full max-w-[220px] items-start justify-start border-r border-transparents-300 bg-gray-50">
      <div className="flex w-full flex-1 items-center border-b border-transparents-300 px-3 py-4">
        <div className="flex w-full items-center gap-3.5 px-2.5 py-1.5">
          <Image
            src="/company-Icon.png"
            alt="Company Icon"
            className="size-5 rounded"
            width={20}
            height={20}
          />
          <Text size="14" weight="medium" className="line-clamp-1 w-full">
            Matt Peterson
          </Text>

          <div className="flex aspect-square size-full max-w-2.5 items-center justify-center">
            <Icon name="chevron-down" className="w-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
