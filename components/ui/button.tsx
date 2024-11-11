// Databyte Button [v0.0.1]

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { RiLoader2Fill } from '@remixicon/react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cx, hoverInput } from 'lib/utils';

const buttonVariants = tv({
  base: [
    // base
    'relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium transition-all duration-100 ease-in-out',
    // disabled
    'disabled:pointer-events-none disabled:shadow-none',
  ],
  variants: {
    size: {
      sm: 'text-xs px-2 py-2',
      md: 'text-sm px-3 py-2',
      lg: 'text-base px-4 py-2.5',
    },
    variant: {
      primary: [
        // border
        'border-transparent',
        // text color
        'text-white',
        // background color
        'bg-tremor-brand',
        // hover color
        'hover:bg-tremor-brand-emphasis',
        // disabled
        'disabled:bg-gray-100',
        'disabled:bg-tremor-brand-muted',
      ],
      secondary: [
        // border
        'border-gray-300',
        // text color
        'text-gray-900',
        // background color
        ' bg-white',
        //hover color
        'hover:bg-gray-50',
        // disabled
        'disabled:text-gray-400',
      ],
      text: [
        // border
        'border-transparent',
        // text color
        'text-tremor-brand',
        // background color
        'bg-transparent',
        // hover color
        'disabled:text-gray-400',
        ...hoverInput,
      ],
      destructive: [
        // text color
        'text-white',
        // border
        'border-transparent',
        // background color
        'bg-red-600',
        // hover color
        'hover:bg-red-700',
        // disabled
        'disabled:bg-red-300 disabled:text-white',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      size,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : 'Loading'}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants, type ButtonProps };
