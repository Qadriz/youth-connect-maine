import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Youth Connect Maine | Education & Mentorship for Maine Youth (501©(3))',
  description: 'Youth Connect Maine is a 501©(3) nonprofit launching in 2026 to support underserved and at-risk youth statewide through education and mentorship.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <Toaster position="top-right" toastOptions={{ style: { borderRadius: 8, fontSize: 14 } }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
