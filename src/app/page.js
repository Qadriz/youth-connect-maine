'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, Users, Award, GraduationCap, DollarSign, Heart,
  HandHeart, UserPlus, Building2, Sparkles,
} from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { Section, CTAButton, ProgramCard } from '@/components/ui/PageSections';
import YouthStories from '@/components/home/YouthStories';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';
import {
  PROGRAMS, STATS, QUOTES, GET_INVOLVED, TRUST_ITEMS,
} from '@/data/siteContent';

const ICON_MAP = { BookOpen, Users, Award, GraduationCap, DollarSign, Heart };

export default function HomePage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((i) => (i + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return null;

  const quote = QUOTES[quoteIdx];

  return (
    <ClientPageLayout>
      {/* Hero with video background — inspired by Youth Connekt Africa */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Maine-poster.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/Maine.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(7,20,40,.82) 0%, rgba(27,58,92,.65) 50%, rgba(93,188,176,.25) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '140px 32px 80px', width: '100%' }}>
          <p className="hero-a" style={{
            fontSize: 14, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
            color: '#8DD4CB', margin: '0 0 20px',
          }}>
            {STORE.tagline}
          </p>
          <h1 className="hero-a" style={{
            fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, lineHeight: 1.1,
            color: '#fff', margin: '0 0 24px', maxWidth: 700,
          }}>
            Supporting Maine Youth Through Mentorship &amp; Education
          </h1>
          <p className="hero-b" style={{
            fontSize: 18, color: 'rgba(255,255,255,.8)', lineHeight: 1.7, maxWidth: 560, margin: '0 0 36px',
          }}>
            Youth Connect Maine is a 501©(3) nonprofit empowering underserved and at-risk youth through academic support, mentorship, leadership development, and life skills.
          </p>
          <div className="hero-c" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/donate" style={{
              padding: '15px 30px', borderRadius: 100,
              background: `linear-gradient(135deg, #5DBCB0, #8DD4CB)`,
              color: '#071428', fontWeight: 700, fontSize: 15, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Support Our Mission <ArrowRight size={16} />
            </Link>
            <Link href="/get-involved#partner" style={{
              padding: '15px 30px', borderRadius: 100,
              border: '1.5px solid rgba(255,255,255,.4)', color: '#fff',
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{
        background: C.trustBar, padding: '14px 32px',
        display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 24px',
      }}>
        {TRUST_ITEMS.map((item, i) => (
          <span key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', fontWeight: 500 }}>
            {i > 0 && <span style={{ marginRight: 24, opacity: .3 }}>|</span>}
            {item}
          </span>
        ))}
      </div>

      {/* Stats — YCA style counters */}
      <section style={{ padding: '56px 32px', background: C.statsBg, borderBottom: `1px solid ${C.statsBdr}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="stack-mobile">
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.accent, fontFamily: 'Georgia, serif' }}>{value}</div>
              <div style={{ fontSize: 14, color: C.textSub, marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Youth photo stories */}
      <YouthStories C={C} />

      {/* What We Do */}
      <Section title="What We Do" subtitle="Comprehensive programs designed to empower Maine youth" C={C}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="stack-mobile">
          {PROGRAMS.map((p) => {
            const Icon = ICON_MAP[p.icon] || BookOpen;
            return <ProgramCard key={p.id} program={p} C={C} Icon={Icon} />;
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <CTAButton href="/programs" C={C}>View All Programs</CTAButton>
        </div>
      </Section>

      {/* Why It Matters */}
      <section style={{ padding: '72px 32px', background: C.bgSoft }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <Sparkles size={32} color={C.accent} style={{ marginBottom: 20 }} />
          <h2 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 20px' }}>Why It Matters</h2>
          <p style={{ fontSize: 18, color: C.textSub, lineHeight: 1.8, margin: 0 }}>
            Every young person deserves guidance, opportunity, and support. Youth Connect Maine exists to ensure young people across Maine have access to mentorship, education, and the tools they need to succeed.
          </p>
        </div>
      </section>

      {/* Pilot / Launch */}
      <Section title="Launching With Purpose" C={C} style={{ background: C.bg }}>
        <div className="stack-mobile" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
          padding: 40, borderRadius: 20, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
          boxShadow: C.cardShadow,
        }}>
          <div>
            <span style={{
              display: 'inline-block', padding: '5px 12px', borderRadius: 100,
              background: C.pill, border: `1px solid ${C.pillBdr}`, color: C.pillText,
              fontSize: 12, fontWeight: 700, marginBottom: 16,
            }}>Pilot Phase · {STORE.launchYear}</span>
            <h3 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 14px' }}>Building a Strong, Scalable Model</h3>
            <p style={{ fontSize: 15, color: C.textSub, lineHeight: 1.7, margin: 0 }}>
              Youth Connect Maine is beginning its pilot phase, working with small groups of youth to build a strong, scalable model focused on mentorship and education — ready for statewide growth.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {['Mentorship Sessions', 'Educational Workshops', 'Outcome Tracking', 'Community Partnerships'].map((item, i) => (
              <div key={item} style={{
                padding: 16, borderRadius: 12, background: C.bgSoft, border: `1px solid ${C.cardBdr}`,
                fontSize: 13, fontWeight: 600, color: C.text,
                borderLeft: `3px solid ${['#F47B20', '#8BC53F', '#C0399F', '#00B4D8'][i]}`,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quotes carousel — YCA style */}
      <section style={{ padding: '72px 32px', background: C.ctaBg, color: C.ctaText, textAlign: 'center' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: C.accent, margin: '0 0 32px' }}>
            Our Favorite Quotes
          </h2>
          <blockquote style={{ fontSize: 20, lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 24px', transition: 'opacity .4s' }}>
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: 16 }}>{quote.author}</p>
          <p style={{ color: C.ctaSub, fontSize: 14, margin: 0 }}>{quote.role}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
            {QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuoteIdx(i)}
                style={{
                  width: i === quoteIdx ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                  background: i === quoteIdx ? C.accent : 'rgba(255,255,255,.25)', transition: 'all .3s',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA boxes */}
      <Section title="How to Get Involved" subtitle="Don't just watch — start your journey. Join in!" C={C}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="stack-mobile">
          {GET_INVOLVED.map(({ id, title, description, href, color }) => {
            const icons = { donate: HandHeart, mentor: UserPlus, partner: Building2, volunteer: Users };
            const Icon = icons[id] || HandHeart;
            return (
              <Link key={id} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  padding: 28, borderRadius: 16, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
                  textAlign: 'center', transition: 'transform .2s, border-color .2s', height: '100%',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = color; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = C.cardBdr; }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', margin: '0 auto 16px',
                    background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={24} color={color} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
                  <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.6, margin: 0 }}>{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Final CTA — YCA opportunities style */}
      <section style={{
        padding: '72px 32px', textAlign: 'center',
        background: `linear-gradient(135deg, ${C.accentPale} 0%, ${C.bgSoft} 100%)`,
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 14px' }}>Get Unique Opportunities</h2>
          <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.7, margin: '0 0 28px' }}>
            Connect with mentors, streamline collaboration, and unlock success for Maine youth. Join now and redefine what community impact looks like.
          </p>
          <CTAButton href="/get-involved" C={C}>Get Started Now</CTAButton>
        </div>
      </section>
    </ClientPageLayout>
  );
}
