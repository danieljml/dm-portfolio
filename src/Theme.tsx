import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';

const generiColors = {
  // Otros colores genéricos
  accent: '#FFA500',
  success: '#00C853',
  error: '#FF3B30',
};

const lightTheme = {
 colors: {
    primary: '#000',
    secondary: '#fff',
    alternative: '#fcfcfc',
    backgroundPrimary: '#232323',
    backgroundSecondary: '#1a1a1ae3',
    backgroundDefault: '#1a1a1ae3',
    backgroundBody: '#EEEEEE', 
    ...generiColors,
  },
};

const darkTheme = {
  colors: {
    primary: '#fff',
    secondary: '#000',
    alternative: '#232323',
    backgroundPrimary: '#fcfcfc',
    backgroundSecondary: '#fff',
    backgroundDefault: '#000',
    backgroundBody: '#393939',
    ...generiColors,
  },
};

const Theme = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode();
  const selectedTheme = isDarkMode ? darkTheme : lightTheme ;
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default Theme;
