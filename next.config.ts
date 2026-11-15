import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
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
