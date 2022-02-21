import { COLORS } from '@themes/colors';

const RANDOM_COLORS = [
  COLORS.SUCCESS,
  COLORS.PINK,
  COLORS.WARNING,
  COLORS.BLUE,
];

export const getRandomColors = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return RANDOM_COLORS[Math.floor(Math.random() * (max - min + 1)) + min];
};

const colors = {
  blue: COLORS.BLUE,
  pink: COLORS.PINK,
  white: COLORS.WHITE,
  yellow: COLORS.QUATERNARY,
};

export const getColorByTest = (color: string) => {
  return (colors as any)[color];
};
