'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';

const GIVING_OPTIONS = [
  { icon: Users, title: 'Support One Youth', desc: 'Fund mentorship and educational support for an individual young person.', amount: '$50/month' },
  { icon: Heart, title: 'Support a Program', desc: 'Help launch and sustain one of our six core youth development programs.', amount: '$500' },
  { icon: TrendingUp, title: 'Support Expansion', desc: 'Invest in scaling Youth Connect Maine across communities statewide.', amount: 'Custom' },
];

export default function DonatePage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="Donate to Support Maine Youth"
        subtitle="Your gift supports education, mentorship training, and measurable youth outcomes statewide. Help us launch pilot-year programs in 2026."
        C={C}
      />

      <Section title="Why Support Youth Connect Maine?" C={C}>
        <p style={{ fontSize: 17, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto 40px', textAlign: 'center' }}>
          Your support creates access to mentorship, education, and opportunity for underserved and at-risk youth across Maine. Every contribution helps us build a stronger, more equitable future for the next generation.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="stack-mobile">
          {GIVING_OPTIONS.map(({ icon: Icon, title, desc, amount }) => (
            <div key={title} style={{
              padding: 32, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
              textAlign: 'center', boxShadow: C.cardShadow,
            }}>
              <Icon size={32} color={C.accent} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.65, margin: '0 0 16px' }}>{desc}</p>
              <div style={{ fontSize: 22, fontWeight: 800, color: C.accent, fontFamily: 'Georgia, serif' }}>{amount}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Trust & Transparency" C={C} style={{ background: C.bgSoft }}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { icon: Shield, title: STORE.status, desc: 'All donations are tax-deductible to the extent allowed by law.' },
            { icon: TrendingUp, title: 'Measurable Impact', desc: 'We track outcomes and report on program effectiveness.' },
            { icon: Heart, title: 'Community Focus', desc: '100% of support goes toward youth programs and mentorship.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ textAlign: 'center', padding: 24 }}>
              <Icon size={28} color={C.accent} style={{ marginBottom: 12 }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section style={{ padding: '72px 32px', textAlign: 'center', background: C.ctaBg }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.ctaText, margin: '0 0 14px' }}>Ready to Make a Difference?</h2>
          <p style={{ color: C.ctaSub, fontSize: 16, margin: '0 0 28px' }}>
            Online donation processing coming soon. Contact us to discuss giving options for the {STORE.launchYear} pilot year.
          </p>
          <Link href="/contact?subject=donate" style={{
            padding: '14px 28px', borderRadius: 100,
            background: `linear-gradient(135deg, ${C.accent}, ${C.accentViv})`,
            color: '#071428', fontWeight: 700, fontSize: 15, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Contact Us to Donate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ClientPageLayout>
  );
}
