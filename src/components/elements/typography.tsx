import { cva, type VariantProps } from 'class-variance-authority';
import c from 'clsx';
import React, { ElementType, ReactNode } from 'react';

// Font size definitions based on previous specifications
const FONT_SIZES = {
  '10': 'text-[10px] leading-[16px] tracking-[-0.5%]',
  '12': 'text-[12px] leading-[18px]',
  '14': 'text-sm',
  '16-22': 'text-[16px] leading-[22px] tracking-[-0.5%]',
  '16-24': 'text-base tracking-[-1%]',
  '18': 'text-[18px] leading-[26px] tracking-[-1.2%]',
  '20': 'text-xl tracking-[-1.5%]',
  '24': 'text-2xl tracking-[-1.8%]',
  '28': 'text-[28px] leading-[36px] tracking-[-2%]',
  '32': 'text-[32px] leading-[42px] tracking-[-2.5%]',
  '44': 'text-[44px] leading-[52px] tracking-[-3%]',
  '72': 'text-[72px] leading-[88px] tracking-[-3.5%]',
  '92': 'text-[92px] leading-[108px] tracking-[-4%]'
};

// Font weight definitions
const FONT_WEIGHTS = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold'
};

// Text variants configuration
const textVariants = cva([], {
  variants: {
    size: FONT_SIZES,
    weight: FONT_WEIGHTS
  },
  defaultVariants: {
    size: '16-22',
    weight: 'regular'
  }
});

// Component props interface
interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

// Text Component
const Text: React.FC<TextProps> = ({
  as: Component = 'span',
  children,
  className,
  size,
  weight,
  ...props
}) => {
  return (
    <Component
      className={c(
        textVariants({
          size,
          weight
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
