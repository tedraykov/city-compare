import { BaseColors } from './constants';
import { Color } from './inputTypes';

export const DEFAULT_COLOR: Color = 'gray';
export const WHITE = 'white';
export const TRANSPARENT = 'transparent';

export const colorPalette = {
  canvasBackground: 50,
  lightBackground: 100,
  background: 500,
  darkBackground: 600,
  darkestBackground: 800,
  lightBorder: 200,
  border: 500,
  darkBorder: 700,
  lightRing: 200,
  ring: 300,
  iconRing: 500,
  lightText: 400,
  text: 500,
  iconText: 600,
  darkText: 700,
  darkestText: 900,
  icon: 500,
};

export const themeColorRange: Color[] = [
  BaseColors.Blue as Color,
  BaseColors.Cyana as Color,
  BaseColors.Sky as Color,
  BaseColors.Indigo as Color,
  BaseColors.Violet as Color,
  BaseColors.Purple as Color,
  BaseColors.Fuchsia as Color,
  BaseColors.Slate as Color,
  BaseColors.Gray as Color,
  BaseColors.Zinc as Color,
  BaseColors.Neutral as Color,
  BaseColors.Stone as Color,
  BaseColors.Red as Color,
  BaseColors.Orange as Color,
  BaseColors.Amber as Color,
  BaseColors.Yellow as Color,
  BaseColors.Lime as Color,
  BaseColors.Green as Color,
  BaseColors.Emerald as Color,
  BaseColors.Teal as Color,
  BaseColors.Pink as Color,
  BaseColors.Rose as Color,
];
