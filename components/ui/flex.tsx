// Databyte Flex [v0.0.3]

import React from 'react';

import { VariantProps, tv } from 'tailwind-variants';

const flexStyles = tv({
  base: 'flex flex-col',
  variants: {
    row: {
      true: 'flex-row',
    },
    items: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
      16: 'gap-16',
      20: 'gap-20',
      24: 'gap-24',
      32: 'gap-32',
      40: 'gap-40',
      48: 'gap-48',
      56: 'gap-56',
      64: 'gap-64',
    },
  },
  defaultVariants: {
    row: false,
    gap: 2,
  },
});

interface FlexProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'content'>,
    VariantProps<typeof flexStyles> {
  as?: 'div' | 'span';
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, as, row, items, justify, gap, ...props }, forwardedRef) => {
    const base = flexStyles({ row, items, justify, gap, className });

    const Component = as || 'div';
    return <Component ref={forwardedRef} className={base} {...props} />;
  }
);

Flex.displayName = 'Flex';

export { Flex, type FlexProps };
