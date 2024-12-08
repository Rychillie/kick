'use client';

import useMediaQuery from '@/lib/hooks/use-media-query';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Drawer } from 'vaul';

export default function Popover({
  children,
  content,
  align = 'center',
  openPopover,
  setOpenPopover
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: 'center' | 'start' | 'end';
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
  mobileOnly?: boolean;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={openPopover} onOpenChange={setOpenPopover}>
        <div className="sm:hidden">{children}</div>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100/10 backdrop-blur dark:bg-gray-800/10" />
        <Drawer.Portal>
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300 dark:bg-gray-800" />
            </div>
            <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white pb-8 align-middle shadow-xl dark:bg-black">
              {content}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <PopoverPrimitive.Root open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverPrimitive.Trigger className="hidden sm:inline-flex" asChild>
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={8}
          align={align}
          className="z-50 hidden animate-slide-up-fade items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block dark:border-gray-800 dark:bg-black"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
