import {
  Color,
  HorizontalPosition,
  Size,
  VerticalPosition,
} from './inputTypes';

export const DeltaTypes = {
  Increase: 'increase',
  ModerateIncrease: 'moderateIncrease',
  Decrease: 'decrease',
  ModerateDecrease: 'moderateDecrease',
  Unchanged: 'unchanged',
} as const;

export const BaseColors: { [key: string]: Color } = {
  Slate: 'slate',
  Gray: 'gray',
  Zinc: 'zinc',
  Neutral: 'neutral',
  Stone: 'stone',
  Red: 'red',
  Orange: 'orange',
  Amber: 'amber',
  Yellow: 'yellow',
  Lime: 'lime',
  Green: 'green',
  Emerald: 'emerald',
  Teal: 'teal',
  Cyan: 'cyan',
  Sky: 'sky',
  Blue: 'blue',
  Indigo: 'indigo',
  Violet: 'violet',
  Purple: 'purple',
  Fuchsia: 'fuchsia',
  Pink: 'pink',
  Rose: 'rose',
};

export const Sizes: { [key: string]: Size } = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

export const HorizontalPositions: { [key: string]: HorizontalPosition } = {
  Left: 'left',
  Right: 'right',
};

export const VerticalPositions: { [key: string]: VerticalPosition } = {
  Top: 'top',
  Bottom: 'bottom',
};
