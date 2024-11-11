// Databyte Divider [v0.0.1]

import { tv } from 'tailwind-variants';

const divider = tv({
  slots: {
    root: '',
    element: '',
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full mx-auto flex justify-between items-center text-tremor-default text-tremor-content',
        element: 'w-full h-[1px] bg-tremor-border',
      },
      vertical: {
        root: 'flex justify-between items-stretch text-tremor-default text-tremor-content',
        element: 'h-full w-[1px] bg-tremor-border',
      },
    },
    hasSpacing: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      hasSpacing: true,
      class: {
        root: 'my-6',
      },
    },
    {
      orientation: 'vertical',
      hasSpacing: true,
      class: {
        root: 'mx-6',
      },
    },
  ],
});

type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  hasSpacing?: boolean;
};

function Divider({
  orientation = 'horizontal',
  hasSpacing = true,
}: DividerProps) {
  const { root, element } = divider({ orientation, hasSpacing });

  return (
    <div className={root()}>
      <span className={element()} />
    </div>
  );
}

export { Divider, type DividerProps };
