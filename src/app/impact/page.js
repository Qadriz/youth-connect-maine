'use client';
import { useEffect, useState } from 'react';
import { Target, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';
import { PILOT_GOALS } from '@/data/siteContent';

export default function ImpactPage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="Impact & Accountability"
        subtitle="We measure results through assessments, surveys, and engagement tracking to ensure transparency, evaluation, and donor accountability."
        C={C}
      />

      <Section title="Our Approach" subtitle="Mentorship + education combined for lasting impact" C={C}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { icon: Target, title: 'Youth-Centered', desc: 'Programs designed around the needs and aspirations of the youth we serve.' },
            { icon: TrendingUp, title: 'Evidence-Based', desc: 'Grounded in proven mentorship and education practices with measurable outcomes.' },
            { icon: BarChart3, title: 'Data-Driven', desc: 'Regular assessments and surveys to track progress and inform program improvements.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              padding: 28, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`, textAlign: 'center',
            }}>
              <Icon size={32} color={C.accent} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={`Pilot Goals (${STORE.launchYear})`} subtitle="Clear targets for our launch phase" C={C} style={{ background: C.bgSoft }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {PILOT_GOALS.map((goal) => (
            <div key={goal} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 0',
              borderBottom: `1px solid ${C.cardBdr}`,
            }}>
              <CheckCircle size={20} color={C.accent} style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: 16, color: C.text, lineHeight: 1.6 }}>{goal}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Long-Term Vision" C={C}>
        <p style={{ fontSize: 17, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          Our long-term vision is to scale Youth Connect Maine programs across the state — reaching underserved and at-risk youth in communities throughout Maine with consistent mentorship, education, and life skills development.
        </p>
      </Section>

      <Section title="Commitment to Measurement" C={C} style={{ background: C.bgSoft }}>
        <div style={{
          padding: 40, borderRadius: 20, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
          maxWidth: 760, margin: '0 auto', textAlign: 'center',
        }}>
          <BarChart3 size={40} color={C.accent} style={{ marginBottom: 20 }} />
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: 0 }}>
            We track outcomes, engagement, and youth development progress through regular assessments, participant surveys, and mentor feedback. This data informs program improvements and ensures accountability to our donors, partners, and the communities we serve.
          </p>
        </div>
      </Section>
    </ClientPageLayout>
  );
}
