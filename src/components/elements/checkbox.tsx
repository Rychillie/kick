'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import c from 'clsx';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef
} from 'react';
import Icon from './icon';

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={c(
      'h-4 w-4 shrink-0 rounded border border-transparents-400 bg-white text-transparent outline-none transition-all hover:border-gray-400 focus-visible:outline-none disabled:cursor-not-allowed data-[state=checked]:border-transparent data-[state=checked]:bg-blue-600 data-[state=checked]:text-white data-[state=checked]:hover:bg-blue-700 dark:border-neutral-700/50 dark:bg-neutral-900/50 dark:hover:border-neutral-600 dark:data-[state=checked]:hover:border-blue-500',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={c('flex items-center justify-center text-current')}
    >
      <Icon name="check" width={12} height={12} className="size-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
