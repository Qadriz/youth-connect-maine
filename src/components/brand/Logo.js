'use client';
import Image from 'next/image';
import Link from 'next/link';
import { STORE } from '@/lib/theme';

/** Vertical logo aspect ≈ 682×1024 */
export default function Logo({ height = 96, href = '/', padded = false }) {
  const width = Math.round(height * 0.67);
  const content = (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: 0,
      ...(padded ? {
        background: '#fff',
        borderRadius: 14,
        padding: '8px 12px',
      } : {}),
    }}>
      <Image
        src="/logo.png?v=2"
        alt={`${STORE.name} logo`}
        width={width}
        height={height}
        style={{
          height,
          width: 'auto',
          maxHeight: height,
          objectFit: 'contain',
          display: 'block',
        }}
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }
  return content;
}
