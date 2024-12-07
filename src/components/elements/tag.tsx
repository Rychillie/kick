import { cva, type VariantProps } from 'class-variance-authority';
import c from 'clsx';
import type { ReactNode } from 'react';
import Icon, { type IconName } from './icon';

const tagVariants = cva(
  'flex w-fit cursor-default select-none items-center justify-center gap-2.5 border',
  {
    variants: {
      indent: {
        'Filled-Blue':
          'border-blue-200 bg-blue-200 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-200',
        'Outline-Blue':
          'border-blue-300 text-blue-600 dark:border-blue-600 dark:text-blue-300',
        'Filled-Red':
          'border-red-200 bg-red-200 text-red-700 dark:border-red-700 dark:bg-red-700 dark:text-red-200',
        'Outline-Red':
          'border-red-300 text-red-600 dark:border-red-600 dark:text-red-300',
        'Filled-Yellow':
          'border-yellow-200 bg-yellow-200 text-yellow-700 dark:border-yellow-700 dark:bg-yellow-700 dark:text-yellow-200',
        'Outline-Yellow':
          'border-yellow-300 text-yellow-600 dark:border-yellow-600 dark:text-yellow-300',
        'Filled-Gray':
          'border-gray-200 bg-gray-200 text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200',
        'Outline-Gray':
          'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300',
        'Filled-Disabled':
          'border-transparent bg-transparents-200 text-gray-500 dark:bg-transparents-200 dark:text-gray-500',
        'Outline-Disabled':
          'border-transparents-400 text-gray-500 dark:border-transparents-100 dark:text-gray-500'
      },
      size: {
        sm: 'text-[10px] font-semibold leading-4',
        md: 'h-6 px-2 py-[3px] text-xs font-medium leading-[18px]'
      },
      rounded: {
        true: 'aspect-square rounded-full !p-0',
        false: ' rounded-lg'
      }
    },
    defaultVariants: {
      size: 'md',
      indent: 'Filled-Blue',
      rounded: false
    }
  }
);

interface TagProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tagVariants> {
  children: ReactNode;
  className?: string;
  icon?: IconName;
}

export default function Tag({
  indent,
  rounded,
  size,
  children,
  icon,
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={c(tagVariants({ size, indent, rounded }), className)}
      {...props}
    >
      {icon && size === 'md' && (
        <Icon name={icon} width={16} height={16} className="size-4" />
      )}
      {children}
    </span>
  );
}
