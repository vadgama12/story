import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from './theme';

import {
  getColor,
  getSpace,
  getCommon,
  getBorderRadius,
  getElevation,
} from './getters';
import { OmitThemeProp, SetColorMode } from './types';
import { useTheme as useColorMode } from 'next-themes';

function partialGetter<T extends (...args: any) => any>(
  getter: T,
  props: ThemeProps
) {
  return function x(...args: OmitThemeProp<Parameters<T>>): ReturnType<T> {
    return getter(...args, props);
  };
}

export default function useTheme() {
  // use useColorMode from 'next-themes' only for toggling, setting, and injecting the script
  const { resolvedTheme: colorMode, setTheme } = useColorMode();

  const setColorMode = setTheme as SetColorMode;

  const theme = useContext(ThemeContext);

  return useMemo(() => {
    const themeProps = { theme };

    return {
      color: partialGetter(getColor, themeProps),
      spacing: partialGetter(getSpace, themeProps),
      borderRadius: partialGetter(getBorderRadius, themeProps),
      elevation: partialGetter(getElevation, themeProps),
      common: partialGetter(getCommon, themeProps),
      setColorMode,
      colorMode,
    };
  }, [theme, setColorMode, colorMode]);
}
