// Databyte Badge Delta [v0.0.1]
import React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { DeltaType, DeltaTypes, Size, Sizes } from 'lib';
import { badgeVariants } from './badge';
import {
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/solid';

export const deltaIcons: { [key: string]: React.ElementType } = {
  [DeltaTypes.Increase]: ArrowUpIcon,
  [DeltaTypes.ModerateIncrease]: ArrowUpRightIcon,
  [DeltaTypes.Decrease]: ArrowDownIcon,
  [DeltaTypes.ModerateDecrease]: ArrowDownRightIcon,
  [DeltaTypes.Unchanged]: ArrowRightIcon,
};

interface BadgeDeltaProps
  extends React.ComponentPropsWithoutRef<'span'>,
  VariantProps<typeof badgeVariants> {
  deltaType?: DeltaType;
  isIncreasePositive?: boolean;
  size?: Size;
  tooltip?: string;
}

const mappedDeltaTypeVariant = (
  deltaType: DeltaType,
  isIncreasePositive: boolean
): VariantProps<typeof badgeVariants>['variant'] => {
  if (deltaType === DeltaTypes.Unchanged) {
    return 'neutral';
  }

  if (
    deltaType === DeltaTypes.Increase ||
    deltaType === DeltaTypes.ModerateIncrease
  ) {
    return isIncreasePositive ? 'success' : 'error';
  }

  if (
    deltaType === DeltaTypes.Decrease ||
    deltaType === DeltaTypes.ModerateDecrease
  ) {
    return isIncreasePositive ? 'error' : 'success';
  }
};

const BadgeDelta = React.forwardRef<HTMLSpanElement, BadgeDeltaProps>(
  (props, ref) => {
    const {
      deltaType = DeltaTypes.Increase,
      isIncreasePositive = true,
      size = Sizes.MD,
      children,
      className,
      ...other
    } = props;

    const Icon = deltaIcons[deltaType as DeltaType] as React.ElementType;
    return (
      <span
        ref={ref}
        className={badgeVariants({
          variant: mappedDeltaTypeVariant(deltaType, isIncreasePositive),
          size,
          className,
        })}
        {...other}
      >
        <Icon className="shrink-0 -ml-1 mr-1 w-4" />
        {children ? <span>{children}</span> : null}
      </span>
    );
  }
);

BadgeDelta.displayName = 'BadgeDelta';

export { BadgeDelta, badgeVariants, type BadgeDeltaProps };
