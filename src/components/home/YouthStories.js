'use client';
import Image from 'next/image';
import { BRAND } from '@/lib/theme';

export const YOUTH_STORIES = [
  {
    id: 'adventure',
    src: '/images/youth-canoe.jpg',
    eyebrow: 'Adventure · Teamwork',
    title: 'Discover Your Path on the Water',
    text: 'From Maine lakes to lifelong friendships — youth learn confidence, cooperation, and courage outdoors, paddle by paddle.',
    accent: BRAND.orange,
  },
  {
    id: 'leadership',
    src: '/images/youth-map.jpg',
    eyebrow: 'Leadership · Direction',
    title: 'Navigating the Future Together',
    text: 'When young people plan side by side, they build leadership, problem-solving, and the courage to choose their own path.',
    accent: BRAND.lime,
  },
  {
    id: 'empower',
    src: '/images/youth-sunset.jpg',
    eyebrow: 'Hope · Possibility',
    title: 'Reach Higher. Rise Together.',
    text: 'Every leap is a reminder: Maine youth are ready to soar — with mentorship, community, and a brighter horizon ahead.',
    accent: BRAND.magenta,
    featured: true,
  },
  {
    id: 'celebrate',
    src: '/images/youth-celebrate.jpg',
    eyebrow: 'Joy · Belonging',
    title: 'Diverse Youth. One Community.',
    text: 'Different colors, one movement — celebrating creativity, inclusion, and the energy that connects Maine’s next generation.',
    accent: BRAND.teal,
  },
];

export default function YouthStories({ C }) {
  const featured = YOUTH_STORIES.find((s) => s.featured);
  const others = YOUTH_STORIES.filter((s) => !s.featured);

  return (
    <section style={{ background: C.bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 32px 24px', textAlign: 'center' }}>
        <p style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
          color: C.accent, margin: '0 0 12px',
        }}>
          Made for Maine Youth
        </p>
        <h2 style={{ fontSize: 34, fontWeight: 700, margin: '0 0 12px' }}>
          Where Young People Connect, Grow &amp; Thrive
        </h2>
        <p style={{ fontSize: 16, color: C.textSub, maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Mentorship and education come alive through adventure, teamwork, and community — moments that shape who they become.
        </p>
      </div>

      {/* Featured full-bleed: sunset jump */}
      {featured && (
        <div style={{
          position: 'relative', margin: '40px 0 0', minHeight: 420,
          overflow: 'hidden',
        }}>
          <Image
            src={featured.src}
            alt={featured.title}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, rgba(7,20,40,.78) 0%, rgba(7,20,40,.35) 55%, rgba(16,64,103,.2) 100%)',
          }} />
          <div style={{
            position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto',
            padding: '80px 32px', minHeight: 420, display: 'flex', alignItems: 'center',
          }}>
            <div style={{ maxWidth: 480 }} className="hero-a">
              <span style={{
                display: 'inline-block', padding: '5px 12px', borderRadius: 100,
                background: 'rgba(102,194,209,.2)', border: '1px solid rgba(102,194,209,.45)',
                color: '#8DD4E0', fontSize: 12, fontWeight: 700, marginBottom: 16,
              }}>
                {featured.eyebrow}
              </span>
              <h3 style={{
                fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff',
                margin: '0 0 16px', lineHeight: 1.15,
              }}>
                {featured.title}
              </h3>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,.85)', lineHeight: 1.7, margin: 0 }}>
                {featured.text}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Alternating story rows */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px' }}>
        {others.map((story, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={story.id}
              className="stack-mobile"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 40,
                alignItems: 'center',
                marginBottom: i < others.length - 1 ? 56 : 0,
              }}
            >
              <div style={{ order: imageLeft ? 0 : 1, position: 'relative' }}>
                <div style={{
                  position: 'relative', borderRadius: 20, overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: C.cardShadow,
                  border: `1px solid ${C.cardBdr}`,
                }}>
                  <Image
                    src={story.src}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', left: 0, bottom: 0, right: 0, height: '40%',
                    background: `linear-gradient(transparent, ${story.accent}33)`,
                    pointerEvents: 'none',
                  }} />
                </div>
                <div style={{
                  position: 'absolute', top: 16, left: imageLeft ? 16 : 'auto', right: imageLeft ? 'auto' : 16,
                  width: 8, height: 64, borderRadius: 4, background: story.accent,
                }} />
              </div>

              <div style={{ order: imageLeft ? 1 : 0, padding: '8px 0' }}>
                <span style={{
                  display: 'inline-block', padding: '5px 12px', borderRadius: 100,
                  background: `${story.accent}18`, color: story.accent,
                  fontSize: 12, fontWeight: 700, marginBottom: 14,
                }}>
                  {story.eyebrow}
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 14px', lineHeight: 1.2 }}>
                  {story.title}
                </h3>
                <p style={{ fontSize: 16, color: C.textSub, lineHeight: 1.75, margin: 0 }}>
                  {story.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
