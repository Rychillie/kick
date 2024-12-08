import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import c from 'clsx';
import * as React from 'react';
import Icon, { type IconName } from './icon';
import Text from './typography';

export const buttonVariants = cva(
  'flex items-center justify-center gap-2 rounded-lg transition-all',
  {
    variants: {
      intent: {
        primary: [
          'bg-gray-900',
          'text-white',
          'hover:bg-gray-800',
          'active:bg-gray-700',
          'disabled:bg-gray-300',
          'disabled:text-gray-500'
        ],
        action: [
          'bg-blue-600',
          'text-white',
          'hover:bg-blue-700',
          'active:bg-blue-800',
          'disabled:bg-gray-300',
          'disabled:text-gray-500'
        ],
        secondary: [
          'border',
          'bg-white',
          'text-gray-900',
          'border-transparents-400',
          'hover:border-gray-400',
          'active:border-gray-400',
          'active:bg-gray-50',
          'disabled:bg-white',
          'disabled:text-gray-400',
          'disabled:border-transparents-400'
        ],
        tertiary: [
          'text-gray-900',
          'hover:bg-transparents-200',
          'active:text-gray-700',
          'active:bg-transparents-300'
        ]
      },
      size: {
        sm: ['h-6', 'px-2', 'py-1.5'],
        base: ['h-8', 'px-3', 'py-1.5'],
        lg: ['h-10', 'px-4', 'py-1.5']
      }
    },
    defaultVariants: {
      size: 'base',
      intent: 'primary'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  onlyIcon?: boolean;
}

export default function Button(
  {
    className,
    size,
    asChild = false,
    icon,
    iconPosition = 'left',
    children,
    intent,
    onlyIcon,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={c(
        buttonVariants({ size, intent, className }),
        onlyIcon && 'aspect-square !px-0'
      )}
      ref={ref}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} width={16} height={16} className="size-4" />
      )}
      {!onlyIcon && (
        <Text size="14" weight="medium">
          {children}
        </Text>
      )}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} width={16} height={16} className="size-4" />
      )}
    </Comp>
  );
}

Button.displayName = 'Button';
