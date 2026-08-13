'use client';
import Link from 'next/link';
import { BRAND, STORE } from '@/lib/theme';
import { FOOTER_LINKS, SOCIAL } from '@/data/siteContent';
import Logo from '@/components/brand/Logo';

export default function Footer() {
  return (
    <footer style={{ background: BRAND.navyDeep, borderTop: '1px solid rgba(255,255,255,.07)', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 32px 32px' }}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo height={110} href="/" padded />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(245,240,232,.5)', lineHeight: 1.7, maxWidth: 300, margin: '0 0 12px' }}>
              {STORE.tagline} Empowering underserved and at-risk youth across Maine through mentorship, education, and community-based programs.
            </p>
            <p style={{ fontSize: 12, color: BRAND.tealLight, fontWeight: 600, margin: '0 0 4px' }}>{STORE.status}</p>
            <p style={{ fontSize: 12, color: 'rgba(245,240,232,.35)', margin: 0 }}>{STORE.email}</p>
            <p style={{ fontSize: 12, color: 'rgba(245,240,232,.35)', margin: '4px 0 0' }}>Serving communities across {STORE.state}</p>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(245,240,232,.9)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FOOTER_LINKS.quick.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: 13.5, color: 'rgba(245,240,232,.4)', textDecoration: 'none' }}
                    onMouseOver={(e) => { e.currentTarget.style.color = BRAND.tealLight; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(245,240,232,.4)'; }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(245,240,232,.9)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>About</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FOOTER_LINKS.about.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ fontSize: 13.5, color: 'rgba(245,240,232,.4)', textDecoration: 'none' }}
                    onMouseOver={(e) => { e.currentTarget.style.color = BRAND.tealLight; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(245,240,232,.4)'; }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'rgba(245,240,232,.9)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 16 }}>Stay Connected</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SOCIAL.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ fontSize: 13.5, color: 'rgba(245,240,232,.4)', textDecoration: 'none' }}
                    onMouseOver={(e) => { e.currentTarget.style.color = BRAND.tealLight; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(245,240,232,.4)'; }}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12.5, color: 'rgba(245,240,232,.3)', margin: 0 }}>
            © {new Date().getFullYear()} {STORE.name}. All Rights Reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(245,240,232,.25)', margin: 0 }}>
            {STORE.status} · Pilot Launch {STORE.launchYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
