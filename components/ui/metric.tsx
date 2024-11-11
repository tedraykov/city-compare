// Databyte Metric [v0.0.1]

import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badgeVariants = tv(
  {
    base: 'text-metric',
    variants: {
      size: {
        sm: 'text-metric-sm',
        md: 'text-metric-md',
      },
      disabled: {
        true: 'text-gray-300',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
      size: 'md',
    },
  },
  {
    twMerge: false,
  }
);

interface MetricProps
  extends React.ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof badgeVariants> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

const Metric = React.forwardRef<HTMLParagraphElement, MetricProps>(
  ({ className, disabled, size, ...props }: MetricProps, forwardedRef) => {
    const Component = props.as || 'p';

    return (
      <Component
        ref={forwardedRef}
        className={badgeVariants({ disabled, size, className })}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Metric.displayName = 'Metric';

export { Metric, badgeVariants, type MetricProps };
