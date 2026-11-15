import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactElement, ReactNode } from 'react';
import { INFORMASI_APLIKASI } from '@/inti';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const basisJalur =
  process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH !== '/'
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '';

export const metadata: Metadata = {
  title: `${INFORMASI_APLIKASI.nama}: ${INFORMASI_APLIKASI.namaLengkap}`,
  description: INFORMASI_APLIKASI.deskripsi,
  manifest: `${basisJalur}/manifest.json`,
  icons: {
    icon: `${basisJalur}/icon-192.png`,
    apple: `${basisJalur}/icon-192.png`,
  },
  openGraph: {
    title: `${INFORMASI_APLIKASI.nama}: ${INFORMASI_APLIKASI.namaLengkap}`,
    description: INFORMASI_APLIKASI.deskripsi,
    type: 'website',
    locale: 'id_ID',
  },
};

export const viewport: Viewport = {
  themeColor: '#D4A72C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <html
      lang="id"
      data-tema="terang"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
