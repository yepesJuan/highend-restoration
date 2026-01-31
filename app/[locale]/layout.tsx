import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/layout/FloatingCallButton';
import { company } from '@/lib/data/company';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://www.highendrestoration.org'),
    title: {
      default: t('home.title', { company: company.name }),
      template: `%s | ${company.name}`,
    },
    description: t('home.description'),
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
      locale: locale === 'es' ? 'es_US' : 'en_US',
      siteName: company.name,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.highendrestoration.org/${locale}`,
      languages: {
        en: 'https://www.highendrestoration.org/en',
        es: 'https://www.highendrestoration.org/es',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCallButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
