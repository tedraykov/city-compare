// Databyte Heading [v0.0.1]

import { VariantProps, tv } from 'tailwind-variants';

const heading = tv({
  base: ['text-tremor-headline'],
  variants: {
    size: {
      sm: 'text-heading-sm',
      md: 'text-heading-md',
      lg: 'text-heading-lg',
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
});

interface HeadingProps extends VariantProps<typeof heading> {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

function Heading({ children, className, size, disabled, as }: HeadingProps) {
  const Component = as || 'h2';
  return (
    <Component className={heading({ size, disabled, className })}>
      {children}
    </Component>
  );
}

export { Heading, type HeadingProps };
