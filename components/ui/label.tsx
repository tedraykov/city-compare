// Databyte Label [v0.0.1]

import { VariantProps, tv } from 'tailwind-variants';

const label = tv(
  {
    base: 'text-content',
    variants: {
      size: {
        sm: 'text-label-sm',
        md: 'text-label-md',
        lg: 'text-label-lg',
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

interface LabelProps extends VariantProps<typeof label> {
  className?: string;
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}

function Label({ children, className, size, disabled, as }: LabelProps) {
  const Component = as || 'span';

  return (
    <Component className={label({ size, disabled, className })}>
      {children}
    </Component>
  );
}

export { Label, type LabelProps };
