'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HandHeart, UserPlus, Building2, Users, ArrowRight } from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK } from '@/lib/theme';

const SECTIONS = [
  {
    id: 'donate',
    icon: HandHeart,
    color: '#F47B20',
    title: 'Donate',
    description: 'Support youth programs and mentorship initiatives across Maine. Your contribution directly funds education, mentor training, and measurable youth outcomes.',
    cta: 'Donate Now',
    href: '/donate',
  },
  {
    id: 'mentor',
    icon: UserPlus,
    color: '#8BC53F',
    title: 'Become a Mentor',
    description: 'Help guide and support young people on their journey. Mentors provide consistent encouragement, guidance, and positive role modeling for youth in our programs.',
    cta: 'Apply to Mentor',
    href: '/contact?subject=mentor',
  },
  {
    id: 'partner',
    icon: Building2,
    color: '#C0399F',
    title: 'Partner With Us',
    description: 'Schools, community organizations, and corporate sponsors — join our mission. Partnerships expand our reach and strengthen the support network for Maine youth.',
    cta: 'Explore Partnerships',
    href: '/contact?subject=partner',
  },
  {
    id: 'volunteer',
    icon: Users,
    color: '#00B4D8',
    title: 'Volunteer',
    description: 'Community involvement opportunities to make a direct impact. From event support to program assistance, volunteers are essential to our mission.',
    cta: 'Volunteer With Us',
    href: '/contact?subject=volunteer',
  },
];

export default function GetInvolvedPage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <ClientPageLayout>
      <PageHero
        title="Get Involved"
        subtitle="Join Youth Connect Maine as a mentor, volunteer, donor, or partner. Support Maine youth through education and mentorship programs launching statewide in 2026."
        C={C}
      />

      <Section C={C}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {SECTIONS.map(({ id, icon: Icon, color, title, description, cta, href }) => (
            <div key={id} id={id} style={{
              padding: 40, borderRadius: 20, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
              boxShadow: C.cardShadow, scrollMarginTop: 100,
            }}>
              <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={30} color={color} />
                </div>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 10px', color }}>{title}</h2>
                  <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7, margin: 0 }}>{description}</p>
                </div>
                <Link href={href} style={{
                  padding: '12px 24px', borderRadius: 100, whiteSpace: 'nowrap',
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </ClientPageLayout>
  );
}
