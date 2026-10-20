import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { site } from '@/content/site';
import { publicConfig } from '@/lib/config';
import './globals.css';

const displayFont = localFont({
  src: '../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-900-italic.woff2',
  weight: '900',
  style: 'italic',
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = localFont({
  src: '../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2',
  variable: '--font-body',
  display: 'swap',
  weight: '200 800',
});

export const metadata: Metadata = {
  title: {
    default: 'Zaustory | Fotografi olahraga & event',
    template: '%s | Zaustory',
  },
  description: site.description,
  applicationName: site.name,
  ...(publicConfig.origin
    ? {
        metadataBase: new URL(publicConfig.origin),
        alternates: { canonical: '/' },
      }
    : {}),
  openGraph: {
    title: 'Zaustory | Fotografi olahraga & event',
    description: site.description,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
    ...(publicConfig.origin
      ? { url: publicConfig.origin, images: [site.socialImage] }
      : {}),
  },
  twitter: {
    card: 'summary',
    title: site.name,
    description: site.description,
    ...(publicConfig.origin ? { images: [site.socialImage] } : {}),
  },
  robots: {
    index: publicConfig.allowIndexing,
    follow: publicConfig.allowIndexing,
  },
  icons: {
    icon: { url: '/brand/icon.png', type: 'image/png', sizes: '64x64' },
    apple: { url: '/brand/apple-touch-icon.png', sizes: '180x180' },
  },
};

export const viewport: Viewport = {
  themeColor: '#001233',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Lewati ke konten utama
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
