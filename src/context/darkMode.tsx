import React, { createContext, ReactNode, useState, useMemo } from 'react';

type DarkModeType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeContext = createContext<DarkModeType | null>(null);
const darkModeValue = localStorage.getItem('darkmode');

const initialTheme = darkModeValue ? JSON.parse(darkModeValue) : false;

const ProviderDarkMode = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  const contextValue = useMemo(() => ({ isDarkMode, setIsDarkMode }), [isDarkMode, setIsDarkMode]);
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, ProviderDarkMode };
