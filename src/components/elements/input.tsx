import c from 'clsx';
import * as React from 'react';
import Icon, { type IconName } from './icon';

type InputProps = {
  height?: 'sm' | 'base';
  icon?: IconName;
  iconPosition?: 'left' | 'right';
} & React.ComponentProps<'input'>;

export default function Input(
  {
    className,
    height = 'sm',
    type,
    icon,
    iconPosition = 'left',
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className="relative text-gray-900">
      {icon && iconPosition === 'left' && (
        <Icon
          name={icon}
          width={16}
          height={16}
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2"
        />
      )}
      <input
        type={type}
        className={c(
          'rounded-lg border text-sm shadow-transparent transition-all',
          'border-transparents-400 bg-white text-gray-900 placeholder-gray-500',
          'outline-none hover:border-gray-400 focus:outline-none',
          'focus:border-blue-400 focus:shadow-input',
          !icon ? 'px-3' : iconPosition === 'left' ? 'pl-9 pr-3' : 'pl-3 pr-9',
          height === 'sm' && 'h-8 py-1.5',
          height === 'base' && 'h-10 py-1.5',
          className
        )}
        ref={ref}
        {...props}
      />
      {icon && iconPosition === 'right' && (
        <Icon
          name={icon}
          width={16}
          height={16}
          className="absolute right-3 top-1/2 size-4 -translate-y-1/2"
        />
      )}
    </div>
  );
}

Input.displayName = 'Input';
