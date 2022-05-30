import React from 'react';
import { useTheme as useColorMode } from 'next-themes';
import { ThemeProvider as ColorModeProvider } from 'next-themes';
import { ThemeProvider } from 'styled-components';
import defaultAppTheme, { darkMode, lightMode } from '../../appTheme/theme';
import { GlobalStyle } from './AppThemeProvider.styles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const Main = ({ children }: ThemeProviderProps) => {
  // use useColorMode from 'next-themes' only for toggling, setting, and injecting the script
  const { resolvedTheme: colorMode } = useColorMode();

  const colors = colorMode === 'dark' ? darkMode : lightMode;

  const appTheme = {
    ...defaultAppTheme,
    ...colors,
  };

  return (
    <ThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default React.memo(({ children }) => (
  <ColorModeProvider>
    <Main>{children}</Main>
  </ColorModeProvider>
));
