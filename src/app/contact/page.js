'use client';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Mail, MapPin, Send } from 'lucide-react';
import ClientPageLayout from '@/components/layout/ClientPageLayout';
import { PageHero, Section } from '@/components/ui/PageSections';
import { useTheme } from '@/contexts/ThemeContext';
import { LIGHT, DARK, STORE } from '@/lib/theme';

export default function ContactPage() {
  const { theme } = useTheme();
  const C = theme === 'dark' ? DARK : LIGHT;
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will be in touch soon.');
    setForm({ name: '', email: '', subject: 'general', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 14,
    background: C.inputBg, border: `1px solid ${C.inputBorder}`, color: C.text,
    outline: 'none', boxSizing: 'border-box',
  };

  return (
    <ClientPageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to explore partnerships, mentoring, volunteering, or funding support. Serving youth statewide in Maine."
        C={C}
      />

      <Section C={C}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 24px' }}>Get In Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <Mail size={20} color={C.accent} style={{ marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, margin: '0 0 4px', fontSize: 14 }}>Email</p>
                  <a href={`mailto:${STORE.email}`} style={{ color: C.accent, fontSize: 14, textDecoration: 'none' }}>{STORE.email}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <MapPin size={20} color={C.accent} style={{ marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 600, margin: '0 0 4px', fontSize: 14 }}>Location</p>
                  <p style={{ color: C.textSub, fontSize: 14, margin: 0 }}>Serving communities across {STORE.state}</p>
                </div>
              </div>
            </div>
            <div style={{
              marginTop: 32, padding: 24, borderRadius: 16, background: C.bgSoft,
              border: `1px solid ${C.cardBdr}`,
            }}>
              <p style={{ fontSize: 13, color: C.textSub, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: C.text }}>{STORE.status}</strong><br />
                Pilot-year launch planned for {STORE.launchYear}. We welcome inquiries from donors, mentors, schools, and community partners.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            padding: 36, borderRadius: 20, background: C.cardBg, border: `1px solid ${C.cardBdr}`,
            boxShadow: C.cardShadow,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Name</label>
                <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Email</label>
                <input required type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Subject</label>
                <select style={inputStyle} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  <option value="general">General Inquiry</option>
                  <option value="mentor">Become a Mentor</option>
                  <option value="partner">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donate">Donation</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Message</label>
                <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" style={{
                padding: '14px 28px', borderRadius: 100, border: 'none', cursor: 'pointer',
                background: `linear-gradient(135deg, ${C.accent}, ${C.accentViv})`,
                color: '#071428', fontWeight: 700, fontSize: 15,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
                Send Message <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </Section>
    </ClientPageLayout>
  );
}
