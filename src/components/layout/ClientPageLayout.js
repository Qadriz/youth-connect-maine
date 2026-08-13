'use client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK } from '@/lib/theme';

export default function ClientPageLayout({ children, style = {}, mainStyle = {} }) {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: C.bg,
      color: C.text,
      fontFamily: 'Inter, system-ui, sans-serif',
      transition: 'background .3s, color .3s',
      ...style,
    }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', ...mainStyle }}>
        {children}
      </main>
      <div style={{ flexShrink: 0, marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}
