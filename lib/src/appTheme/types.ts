import { ThemeProps } from './theme';

export type Resolver<T> = (props: ThemeProps) => T;

export type OmitThemeProp<Args extends any[]> = Args[3] extends ThemeProps
  ? [Args[0], Args[1], Args[2]]
  : Args[2] extends ThemeProps
  ? [Args[0], Args[1]]
  : [Args[0]];

export enum ColorMode {
  'light' = 'light',
  'dark' = 'dark',
}

export type SetColorMode = (_mode: keyof typeof ColorMode) => void;

export type ElevationValue = {
  shadowType: string;
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
  spread: number;
};
