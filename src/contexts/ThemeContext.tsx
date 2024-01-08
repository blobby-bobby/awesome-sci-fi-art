// ThemeContext.tsx
import { createContext, useState, useContext, FunctionComponent, SetStateAction, Dispatch, ReactNode } from 'react';

export interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
interface ThemeProviderProps {
    children: ReactNode;
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
