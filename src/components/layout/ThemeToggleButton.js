'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggleButton({ iconColor }) {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isNight ? 'Switch to daylight' : 'Switch to night'}
      aria-label={isNight ? 'Switch to daylight' : 'Switch to night'}
      style={{
        width: 36, height: 36, borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: 'rgba(16,64,103,.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {isNight ? <Sun size={16} color={iconColor} /> : <Moon size={16} color={iconColor} />}
    </button>
  );
}
