// Databyte Input Label [v0.0.1]

import React from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import { cx } from 'lib/utils';

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  disabled?: boolean;
}

const InputLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitives.Root>, LabelProps>(
  ({ className, disabled, ...props }, forwardedRef) => (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cx(
        // base
        'mb-1 text-sm font-medium leading-none',
        // text color
        'text-zinc-600 dark:text-zinc-300',
        // disabled
        {
          'text-zinc-400 dark:text-zinc-700': disabled
        },
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
);

InputLabel.displayName = 'InputLabel';

export { InputLabel };
