import { ThemeProps } from './theme';

import {
  getColor,
  getSpace,
  getCommon,
  getBorderRadius,
  getElevation,
} from './getters';

import { OmitThemeProp, Resolver } from './types';

function createSelector<T extends (...args: any) => any>(getter: T) {
  function x(...args: OmitThemeProp<Parameters<T>>): Resolver<ReturnType<T>>;
  function x(...args: Parameters<T>): ReturnType<T>;
  function x(...args: any): any {
    if (args.length === getter.length) {
      return getter(...args);
    }

    return (props: ThemeProps) => getter(...args, props);
  }

  return x;
}

export const color = createSelector(getColor);
export const spacing = createSelector(getSpace);
export const borderRadius = createSelector(getBorderRadius);
export const elevation = createSelector(getElevation);
export const common = createSelector(getCommon);
