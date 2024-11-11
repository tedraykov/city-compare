// Databyte Nullable Text [v0.0.1]

import React from 'react';
import { Text, type TextProps } from 'components/ui/text';

const NullableText = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const { children, ...restProps } = props;
    if (children === null || children === undefined) {
      return (
        <Text ref={ref} disabled {...restProps}>
          N/A
        </Text>
      );
    }

    return (
      <Text ref={ref} {...restProps}>
        {children}
      </Text>
    );
  }
);

NullableText.displayName = 'NullableText';

export { NullableText };
