// Databyte Badge [v0.0.1]
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cx } from 'lib/utils';

const badgeVariants = tv({
  base: cx(
    'inline-flex items-center gap-x-1 whitespace-nowrap rounded-md  text-xs font-medium'
  ),
  variants: {
    variant: {
      default: ['bg-brand-50 text-brand-600'],
      neutral: ['bg-gray-50 text-gray-600'],
      success: ['bg-emerald-50 text-emerald-600 '],
      error: [
        'bg-red-50 text-red-600 ring-red-600/20',
        'dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
      ],
      warning: [
        'bg-yellow-50 text-yellow-600 ring-yellow-600/30',
        'dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
      ],
    },
    size: {
      sm: 'p-1 text-xs',
      md: 'px-2 py-1 text-sm',
      lg: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface BadgeProps
  extends React.ComponentPropsWithoutRef<'span'>,
  VariantProps<typeof badgeVariants> { }

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={badgeVariants({ variant, size, className })}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants, type BadgeProps };
