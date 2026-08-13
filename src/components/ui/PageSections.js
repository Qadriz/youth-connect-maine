'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PageHero({ title, subtitle, C, children }) {
  return (
    <section style={{
      paddingTop: 150, paddingBottom: 64, paddingLeft: 32, paddingRight: 32,
      background: C.ctaBg, color: C.ctaText, textAlign: 'center',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 16px', lineHeight: 1.15 }}>{title}</h1>
        {subtitle && (
          <p style={{ fontSize: 17, color: C.ctaSub, lineHeight: 1.7, margin: '0 0 24px' }}>{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export function Section({ title, subtitle, children, C, style = {} }) {
  return (
    <section style={{ padding: '64px 32px', ...style }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {(title || subtitle) && (
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            {title && <h2 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 10px' }}>{title}</h2>}
            {subtitle && <p style={{ color: C.textSub, fontSize: 16, margin: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function CTAButton({ href, children, variant = 'primary', C }) {
  const styles = variant === 'primary'
    ? { background: `linear-gradient(135deg, ${C.accent}, ${C.accentViv})`, color: '#071428', border: 'none' }
    : { background: 'transparent', color: C.text, border: `1.5px solid ${C.accentBdr}` };

  return (
    <Link href={href} style={{
      padding: '14px 28px', borderRadius: 100, fontWeight: 700, fontSize: 15,
      textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
      ...styles,
    }}>
      {children} {variant === 'primary' && <ArrowRight size={16} />}
    </Link>
  );
}

export function ProgramCard({ program, C, Icon }) {
  return (
    <div style={{
      padding: 28, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
      boxShadow: C.cardShadow, transition: 'transform .2s, border-color .2s',
    }}
      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = program.color; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = C.cardBdr; }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12, marginBottom: 16,
        background: `${program.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={22} color={program.color} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{program.title}</h3>
      <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.65, margin: '0 0 16px' }}>{program.description}</p>
      <Link href="/programs" style={{ fontSize: 13, color: program.color, fontWeight: 600, textDecoration: 'none' }}>
        Learn More →
      </Link>
    </div>
  );
}
