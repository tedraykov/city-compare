// Databyte Card [v0.0.2]

import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { VariantProps, tv } from 'tailwind-variants';

const cardStyles = tv({
  base: 'flex flex-col gap-4 rounded-lg p-6 text-left w-full',
  variants: {
    outlined: {
      true: 'border bg-tremor-background',
      false: {},
    },
    elevated: {
      true: 'shadow-lg shadow-tremor-content/10 bg-tremor-background',
      false: {},
    },
    hover: {
      true: 'transition-colors hover:bg-zinc-500/5 dark:hover:bg-zinc-800',
      false: {},
    },
  },
  defaultVariants: {
    elevated: true,
  },
});

interface CardProps
  extends React.ComponentPropsWithoutRef<'div'>,
  VariantProps<typeof cardStyles> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, asChild, outlined, elevated, hover, ...props },
    forwardedRef
  ) => {
    const base = cardStyles({ outlined, elevated, hover, className });

    const Component = asChild ? Slot : 'div';
    return <Component ref={forwardedRef} className={base} {...props} />;
  }
);

Card.displayName = 'Card';

export { Card, type CardProps };
