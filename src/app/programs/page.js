'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Users, Award, GraduationCap, DollarSign, Heart, ArrowRight,
} from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK } from '@/lib/theme';
import { PROGRAMS } from '@/data/siteContent';

const ICON_MAP = { BookOpen, Users, Award, GraduationCap, DollarSign, Heart };

export default function ProgramsPage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="Our Programs"
        subtitle="Comprehensive youth development programs designed to empower, educate, and connect Maine's young people."
        C={C}
      />

      <Section C={C}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {PROGRAMS.map((program, i) => {
            const Icon = ICON_MAP[program.icon] || BookOpen;
            return (
              <div key={program.id} className="stack-mobile" style={{
                display: 'grid', gridTemplateColumns: i % 2 === 0 ? '80px 1fr' : '1fr 80px',
                gap: 28, alignItems: 'start', padding: 36, borderRadius: 20,
                background: C.cardBg, border: `1px solid ${C.cardBdr}`, boxShadow: C.cardShadow,
              }}>
                {i % 2 === 0 && (
                  <div style={{
                    width: 80, height: 80, borderRadius: 16, background: `${program.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={36} color={program.color} />
                  </div>
                )}
                <div style={{ order: i % 2 === 0 ? 0 : -1 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 12px', color: program.color }}>{program.title}</h2>
                  <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.75, margin: 0 }}>{program.description}</p>
                </div>
                {i % 2 !== 0 && (
                  <div style={{
                    width: 80, height: 80, borderRadius: 16, background: `${program.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={36} color={program.color} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <section style={{ padding: '64px 32px', background: C.ctaBg, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: C.ctaText, margin: '0 0 14px' }}>
            Interested in partnering or supporting a program?
          </h2>
          <p style={{ color: C.ctaSub, fontSize: 16, margin: '0 0 28px' }}>
            We welcome schools, organizations, and community partners who want to make a difference for Maine youth.
          </p>
          <Link href="/get-involved#partner" style={{
            padding: '14px 28px', borderRadius: 100,
            background: `linear-gradient(135deg, ${C.accent}, ${C.accentViv})`,
            color: '#071428', fontWeight: 700, fontSize: 15, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </ClientPageLayout>
  );
}
