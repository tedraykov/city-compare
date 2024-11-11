// Databyte Select Native [v0.0.1]

import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cx, hasErrorInput } from 'lib/utils';

const selectNativeStyles = tv({
  base: [
    // base
    'cursor-pointer transition-outline',
    // background color
    'bg-white',
    // border
    'border-none',
    // text color
    'text-gray-900',
    // placeholder color
    'placeholder-gray-400',
    // hover
    'hover:bg-gray-50',
    // disabled
    'disabled:pointer-events-none',
    'disabled:bg-gray-100 disabled:text-gray-400',
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
    isPlaceholder: {
      true: 'text-gray-400',
    },
  },
});

interface SelectNativeProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectNativeStyles> {}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  (
    { className, hasError, value, ...props }: SelectNativeProps,
    forwardedRef
  ) => {
    const [isPlaceholder, setIsPlaceholder] = React.useState(true);

    return (
      <select
        ref={forwardedRef}
        className={cx(
          selectNativeStyles({ hasError, isPlaceholder }),
          className
        )}
        {...props}
        onChange={(e) => {
          setIsPlaceholder(e.target.value === 'default');
          props.onChange?.(e);
        }}
      />
    );
  }
);

SelectNative.displayName = 'SelectNative';

export { SelectNative, selectNativeStyles, type SelectNativeProps };
