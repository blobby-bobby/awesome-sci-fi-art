// ThemeContext.tsx
import React, { createContext, useState, useContext, FunctionComponent } from 'react';

export interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
interface ThemeProviderProps {
    children: React.ReactNode; // Ajoutez cette ligne pour indiquer que ThemeProvider a la propriété children
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState('dark');

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
