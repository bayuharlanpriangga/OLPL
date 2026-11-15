'use client';

import { type ReactElement, useState } from 'react';
import { IkonFacet } from '@/bersama';

interface PropertiDaftarIsi {
  readonly daftarIsi: readonly string[];
}

export function DaftarIsi({ daftarIsi }: PropertiDaftarIsi): ReactElement | null {
  const [indeksAktif, setIndeksAktif] = useState<number>(0);

  if (daftarIsi.length === 0) return null;

  function lompatKeBagian(indeks: number): void {
    setIndeksAktif(indeks);
    const target = document.getElementById(`s${indeks}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <aside
      aria-label="Daftar isi halaman"
      className="hidden w-56 shrink-0 border-l border-[var(--orias-garis)]/30 pl-5 xl:block"
    >
      <div className="sticky top-8">
        <p className="mb-3 font-mono text-xs font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
          Di Halaman Ini
        </p>
        <nav className="flex flex-col gap-1">
          {daftarIsi.map((judul, indeks) => {
            const aktif = indeks === indeksAktif;
            return (
              <button
                key={`${judul}-${indeks}`}
                type="button"
                onClick={() => lompatKeBagian(indeks)}
                className={`flex min-h-9 items-center gap-2 border-l-2 py-1 pl-3 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)] ${
                  aktif
                    ? 'border-[var(--orias-emas)] font-medium text-[var(--orias-teks)]'
                    : 'border-transparent text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]'
                }`}
              >
                {aktif ? <IkonFacet ukuran="kecil" terbuka /> : null}
                <span>{judul}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
