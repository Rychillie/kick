'use client';

import { signout } from '@/actions';
import { useState } from 'react';
// import { LayoutDashboard, LogOut } from "lucide-react";
import { Button } from '@/components/elements';
import Popover from '@/components/elements/popover';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';

export default function UserDropdown({ user }: { user: User | null }) {
  const [openPopover, setOpenPopover] = useState(false);

  if (!user) return null;

  return (
    <div className="relative flex items-center justify-center text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <div className="p-2">
              {user.user_metadata.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  {user.user_metadata.name}
                </p>
              )}
              <p className="truncate text-sm text-gray-500">
                {user.user_metadata.email}
              </p>
            </div>
            <Button
              intent="tertiary"
              className="w-full !justify-start"
              disabled
            >
              {/* <LayoutDashboard className="size-4" /> */}
              <p className="text-sm">Dashboard</p>
            </Button>
            <Button
              intent="tertiary"
              className="w-full !justify-start"
              onClick={() => signout()}
            >
              {/* <LogOut className="size-4" /> */}
              <p className="text-sm">Logout</p>
            </Button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex size-6 items-center justify-center overflow-hidden rounded-full border border-gray-300 outline-none transition-all duration-75 active:scale-95 sm:size-6"
        >
          <Image
            alt={user.user_metadata.name}
            src={
              user.user_metadata.picture ||
              `https://avatars.dicebear.com/api/micah/${user.user_metadata.email}.svg`
            }
            width={24}
            height={24}
          />
        </button>
      </Popover>
    </div>
  );
}
