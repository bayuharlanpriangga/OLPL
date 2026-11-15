import type { ReactElement } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { IkonFacet, PenandaStatus } from '@/bersama';

export default function HalamanTidakDitemukan(): ReactElement {
  return (
    <main className="flex min-h-[100dvh] flex-col items-start justify-center bg-[var(--orias-latar)] px-6 py-12 text-[var(--orias-teks)] md:px-16">
      <div className="max-w-lg">
        <div className="mb-4 flex items-center gap-3">
          <IkonFacet ukuran="sedang" />
          <PenandaStatus jenis="galat" label="404: Halaman tidak ditemukan" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Topik atau bahasa yang diminta tidak tersedia
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--orias-teks-sekunder)]">
          Periksa kembali alamat tautan, atau kembali ke indeks utama OLPL untuk menelusuri 10
          bahasa pemrograman yang tersedia.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 bg-[var(--orias-emas)] px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
