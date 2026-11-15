import type { NextConfig } from 'next';

const adalahEksporStatis = process.env.NEXT_EXPORT === 'true';
const basisJalurMentah = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';
const basisJalur =
  basisJalurMentah.length > 0 && basisJalurMentah !== '/'
    ? basisJalurMentah
    : undefined;

const nextConfig: NextConfig = {
  output: adalahEksporStatis ? 'export' : 'standalone',
  ...(adalahEksporStatis ? { trailingSlash: true, images: { unoptimized: true } } : {}),
  ...(basisJalur !== undefined ? { basePath: basisJalur } : {}),
  devIndicators: false,
  webpack(konfigurasi: { watchOptions?: { ignored?: unknown } }) {
    const daftarAbaikan = Array.isArray(konfigurasi.watchOptions?.ignored)
      ? konfigurasi.watchOptions.ignored
      : [];
    konfigurasi.watchOptions = {
      ...konfigurasi.watchOptions,
      ignored: [
        ...daftarAbaikan,
        '**/.playwright-cli/**',
        '**/.next/**',
      ],
    };
    return konfigurasi;
  },
};

export default nextConfig;
