import { useState, useEffect } from 'react';

export function useTheme() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('darius-theme-mode') || 'dark';
  });

  useEffect(() => {
    if (mode === 'light') {
      document.documentElement.setAttribute('data-mode', 'light');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
    localStorage.setItem('darius-theme-mode', mode);
  }, [mode]);

  const toggle = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return { mode, toggle };
}
