'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

function readSavedTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('ycm-theme-v2');
  return saved === 'dark' || saved === 'light' ? saved : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(readSavedTheme());
    setReady(true);
    const sync = () => setTheme(readSavedTheme());
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? '#071428' : '#ffffff';
    document.body.style.color = theme === 'dark' ? '#E8ECF2' : '#0F2540';
  }, [theme, ready]);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : 'light';
      localStorage.setItem('ycm-theme-v2', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
