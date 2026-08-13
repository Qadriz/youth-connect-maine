'use client';
import { useEffect, useState } from 'react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';
import { CORE_VALUES } from '@/data/siteContent';

export default function AboutPage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="About Youth Connect Maine"
        subtitle="Empowering underserved youth through mentorship and education across the state of Maine."
        C={C}
      />

      <Section title="Our Mission" C={C}>
        <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          Supporting underserved youth through mentorship and education — ensuring every young person in Maine has access to guidance, opportunity, and the tools they need to succeed.
        </p>
      </Section>

      <Section title="Our Vision" C={C} style={{ background: C.bgSoft }}>
        <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          A Maine where every young person has access to guidance, opportunity, and support — regardless of background or circumstance.
        </p>
      </Section>

      <Section title="Core Values" subtitle="The principles that guide everything we do" C={C}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="stack-mobile">
          {CORE_VALUES.map(({ title, description }, i) => (
            <div key={title} style={{
              padding: 28, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
              borderTop: `3px solid ${['#F47B20', '#8BC53F', '#C0399F', '#00B4D8', '#5DBCB0'][i]}`,
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.65, margin: 0 }}>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Story" C={C} style={{ background: C.bgSoft }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: '0 0 20px' }}>
            Youth Connect Maine was founded in response to a clear need: too many young people across Maine lack access to consistent mentorship, academic support, and the life skills needed to thrive. We saw youth who were capable and driven, but without the guidance and resources to reach their full potential.
          </p>
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: '0 0 20px' }}>
            Maine&apos;s communities are strong, but underserved and at-risk youth need dedicated programs that meet them where they are. Youth Connect Maine was created to fill that gap — combining education and mentorship in a community-based model designed for accountability and measurable impact.
          </p>
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: 0 }}>
            With a pilot launch planned for {STORE.launchYear}, we are building thoughtfully, partnering with schools, community organizations, and mentors who share our commitment to Maine&apos;s youth.
          </p>
        </div>
      </Section>

      <Section title="Leadership & Governance" C={C}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ padding: 32, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}` }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>Founder / Executive Director</h3>
            <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.7, margin: 0 }}>
              Youth Connect Maine is led by a dedicated founder committed to building an organization rooted in transparency, community trust, and youth-centered impact.
            </p>
          </div>
          <div style={{ padding: 32, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}` }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>Board of Directors</h3>
            <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.7, margin: 0 }}>
              Board development is in progress. We are assembling a diverse board of community leaders, educators, and youth advocates to ensure accountable governance. <a href="/governance" style={{ color: C.accent }}>Learn more →</a>
            </p>
          </div>
        </div>
      </Section>

      <Section title="Accountability" C={C} style={{ background: C.bgSoft }}>
        <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          We are committed to transparency, measurable impact, and responsible stewardship of resources. As a {STORE.status}, Youth Connect Maine operates with the highest standards of nonprofit accountability. <a href="/impact" style={{ color: C.accent, fontWeight: 600 }}>View our impact approach →</a>
        </p>
      </Section>
    </ClientPageLayout>
  );
}
