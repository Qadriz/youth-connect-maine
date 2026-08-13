'use client';
import { useEffect, useState } from 'react';
import { Shield, FileText, Users, Scale } from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';

export default function GovernancePage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="Governance & Transparency"
        subtitle="Youth Connect Maine is board-governed and committed to transparency, accountability, and responsible nonprofit leadership."
        C={C}
      />

      <Section title="Organizational Structure" C={C}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { icon: Users, title: 'Board of Directors', desc: 'Board development is in progress. We are assembling community leaders, educators, and youth advocates to provide strategic oversight and governance.' },
            { icon: Scale, title: 'Executive Leadership', desc: 'Led by a dedicated founder/executive director committed to building an organization rooted in transparency and youth-centered impact.' },
            { icon: FileText, title: 'Policies & Procedures', desc: 'We are developing comprehensive policies covering conflict of interest, financial management, volunteer screening, and youth safety.' },
            { icon: Shield, title: 'Compliance', desc: `As a ${STORE.status}, we adhere to all federal and state nonprofit regulations and maintain transparent financial reporting.` },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              padding: 28, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
            }}>
              <Icon size={24} color={C.accent} style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{title}</h3>
              <p style={{ fontSize: 14, color: C.textSub, lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Strategic Planning" C={C} style={{ background: C.bgSoft }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, margin: '0 0 20px' }}>
            Youth Connect Maine is in its formative stage, with a strategic plan focused on a successful {STORE.launchYear} pilot year followed by measured statewide expansion. Our planning priorities include:
          </p>
          <ul style={{ fontSize: 15, color: C.textSub, lineHeight: 2, paddingLeft: 20 }}>
            <li>Launch pilot programs serving 10–15 youth</li>
            <li>Establish board governance and advisory structures</li>
            <li>Develop mentor training and screening protocols</li>
            <li>Implement outcome measurement and reporting systems</li>
            <li>Build partnerships with schools and community organizations</li>
            <li>Secure sustainable funding for program expansion</li>
          </ul>
        </div>
      </Section>

      <Section title="Financial Transparency" C={C}>
        <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.8, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          We are committed to responsible stewardship of all resources. Financial reports and annual filings will be made available as our organization grows. For questions about governance or financial transparency, please <a href="/contact" style={{ color: C.accent, fontWeight: 600 }}>contact us</a>.
        </p>
      </Section>
    </ClientPageLayout>
  );
}
