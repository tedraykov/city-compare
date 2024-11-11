// Databyte Quote [v0.0.4]

import { FC, PropsWithChildren } from 'react';
import { Flex } from './flex';
import { tv } from 'tailwind-variants';

const quoteStyles = tv({
  base: 'bg-brand min-w-1 rounded',
});

const Quote: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex row items="stretch" justify="start">
      <span className={quoteStyles()} />
      {children}
    </Flex>
  );
};

export { Quote };
