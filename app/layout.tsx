import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { company } from '@/lib/data/company';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.highendrestoration.org'),
  title: {
    default: `${company.name} | Water Damage, Fire & Mold Restoration in South Florida`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    'water damage restoration',
    'fire restoration',
    'mold remediation',
    'emergency restoration',
    'South Florida',
    'Broward County',
    'Palm Beach',
    'West Palm Beach',
    '24/7 emergency service',
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: company.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
