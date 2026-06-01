import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Dagnachew Melknew — Full-Stack Software Engineer & DevOps Expert | Dubai',
  description: 'Dagnachew Melknew is a Full-Stack Software Engineer based in Dubai, specializing in Spring Boot, Angular, React, DevOps (Kubernetes, Docker, Jenkins), and Telecom VAS services. Founder of Afrolal Tech. Available for freelance projects.',
  keywords: 'Full-Stack Developer, Spring Boot, DevOps, Kubernetes, Docker, Freelance Developer, Dubai, Afrolal Tech, Ethio Telecom VAS',
  authors: [{ name: 'Dagnachew Melknew' }],
  openGraph: {
    title: 'Dagnachew Melknew — Full-Stack Software Engineer',
    description: 'Full-Stack Engineer & DevOps Expert. Available for freelance projects worldwide.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
