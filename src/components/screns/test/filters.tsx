'use client';

import { Button, Input } from '@/components/elements';
import { useMediaQuery } from '@/lib/hooks';

export default function Filters() {
  const { isDesktop, device } = useMediaQuery();

  if (device === null) {
    return (
      <div className="flex h-[154px] w-full animate-pulse rounded-xl bg-neutral-200/40 lg:h-[66px] dark:bg-neutral-900/50" />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-transparents-400 p-4 lg:flex-row lg:justify-between dark:border-neutral-900">
      {isDesktop ? (
        <>
          <div className="flex items-center justify-center gap-3">
            <Input icon="search" placeholder="Search..." />
            <Button icon="filter" intent="secondary">
              Add filter
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button icon="chevron-down" iconPosition="right" intent="secondary">
              5 entities
            </Button>
            <Button>Create Invoice</Button>
          </div>
        </>
      ) : (
        <>
          <Input icon="search" placeholder="Search..." className="w-full" />
          <div className="grid w-full grid-cols-2 items-center justify-center gap-3">
            <Button icon="filter" intent="secondary" className="w-full">
              Add filter
            </Button>
            <Button
              icon="chevron-down"
              iconPosition="right"
              intent="secondary"
              className="w-full"
            >
              5 entities
            </Button>
          </div>

          <Button className="w-full">Create Invoice</Button>
        </>
      )}
    </div>
  );
}
