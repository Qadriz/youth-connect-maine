'use client';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggleButton from '@/components/layout/ThemeToggleButton';
import Logo from '@/components/brand/Logo';
import { NAV_LINKS } from '@/data/siteContent';
import { LIGHT, DARK, BRAND } from '@/lib/theme';

export default function Navbar() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '8px 28px', minHeight: 110, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        // White / soft frost — best match for logo (black text + teal circle)
        background: C.nav,
        backdropFilter: 'blur(14px)',
        borderBottom: `2px solid ${BRAND.teal}`,
        boxShadow: C.navShadow,
        transition: 'background .3s',
      }}
    >
      <Logo height={96} href="/" />

      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: 14, color: C.linkColor,
              textDecoration: 'none', fontWeight: 500,
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = BRAND.orange; }}
            onMouseOut={(e) => { e.currentTarget.style.color = C.linkColor; }}
          >
            {label}
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <ThemeToggleButton iconColor={BRAND.navy} />
        <Link
          href="/donate"
          style={{
            padding: '9px 20px', borderRadius: 100,
            background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.tealLight})`,
            color: BRAND.navyDark, fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}
        >
          Donate
        </Link>
      </div>
    </nav>
  );
}
