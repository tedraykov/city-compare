// Databyte Text [v0.0.1]

import React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const heading = tv(
  {
    base: ['text-content-strong'],
    variants: {
      size: {
        sm: 'text-base-sm',
        md: 'text-base-md',
        lg: 'text-base-lg',
      },
      disabled: {
        true: 'text-gray-300',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  },
  {
    twMerge: false,
  }
);

interface TextProps extends VariantProps<typeof heading> {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { className, children, as, size, disabled } = props;
  const Component = as || 'p';

  return (
    <Component ref={ref} className={heading({ size, disabled, className })}>
      {children}
    </Component>
  );
});

Text.displayName = 'Text';

export { Text, type TextProps };
