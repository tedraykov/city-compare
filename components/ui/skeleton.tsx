// Databyte Skeleton [v0.0.1]

import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const skeletonVariants = tv({
  base: 'inline-block bg-gray-200 rounded-md animate-pulse',
  variants: {
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
  },
  defaultVariants: {
    rounded: false,
  },
});

interface SkeletonProps
  extends React.ComponentPropsWithoutRef<'span'>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ className, rounded, ...props }: SkeletonProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={skeletonVariants({ rounded, className })}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton, skeletonVariants, type SkeletonProps };
