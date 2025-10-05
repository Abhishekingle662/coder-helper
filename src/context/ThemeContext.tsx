import React, { createContext, useState, useContext, useEffect } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('auto');

  const isDark = theme === 'auto' 
    ? systemColorScheme === 'dark' 
    : theme === 'dark';

  const lightColors = {
    background: '#f5f5f5',
    surface: '#ffffff',
    primary: '#6200ee',
    secondary: '#03dac6',
    text: '#000000',
    textSecondary: '#666666',
    border: '#e0e0e0',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
  };

  const darkColors = {
    background: '#121212',
    surface: '#1e1e1e',
    primary: '#bb86fc',
    secondary: '#03dac6',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    border: '#2c2c2c',
    success: '#4caf50',
    error: '#cf6679',
    warning: '#ff9800',
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
