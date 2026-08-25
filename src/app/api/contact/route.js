import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@youth-connect-maine.org';
const FROM_EMAIL = process.env.EMAIL_FROM || 'Youth Connect Maine <onboarding@resend.dev>';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';

const SUBJECTS = {
  general: 'General Inquiry',
  mentor: 'Become a Mentor',
  partner: 'Partnership',
  volunteer: 'Volunteer',
  donate: 'Donation',
};

const hits = new Map();

function clientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  if (recent.length >= 8) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function mailtoLink({ name, email, subjectLabel, message }) {
  const subject = `Youth Connect Maine — ${subjectLabel}`;
  const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subjectLabel}\n\n${message}`;
  return `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request) {
  try {
    const ip = clientIp(request);
    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const subject = String(body?.subject || 'general').trim();
    const message = String(body?.message || '').trim();
    const honeypot = String(body?.company || '').trim();

    if (honeypot) {
      return NextResponse.json({ ok: true, message: 'Thank you! We will be in touch soon.' });
    }
    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    }
    if (!isEmail(email) || email.length > 160) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!SUBJECTS[subject]) {
      return NextResponse.json({ error: 'Please choose a subject.' }, { status: 400 });
    }
    if (message.length < 10 || message.length > 4000) {
      return NextResponse.json({ error: 'Please enter a message (at least 10 characters).' }, { status: 400 });
    }

    const subjectLabel = SUBJECTS[subject];
    const text = [
      'New message from the Youth Connect Maine website',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subjectLabel}`,
      '',
      message,
    ].join('\n');

    if (!RESEND_API_KEY) {
      return NextResponse.json({
        ok: true,
        fallback: 'mailto',
        mailto: mailtoLink({ name, email, subjectLabel, message }),
        message: 'Opening your email app to send this to info@youth-connect-maine.org.',
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Youth Connect Maine — ${subjectLabel}`,
        text,
      }),
      signal: AbortSignal.timeout(20000),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      console.error('Resend error', res.status, errText.slice(0, 300));
      return NextResponse.json({
        ok: true,
        fallback: 'mailto',
        mailto: mailtoLink({ name, email, subjectLabel, message }),
        message: 'Opening your email app to send this to info@youth-connect-maine.org.',
      });
    }

    return NextResponse.json({
      ok: true,
      message: 'Thank you! We will be in touch soon.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please email us directly.' },
      { status: 500 },
    );
  }
}
