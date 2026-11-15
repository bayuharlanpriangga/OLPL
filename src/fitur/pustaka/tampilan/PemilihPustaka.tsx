'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { ChevronsUpDown, Search, X } from 'lucide-react';
import type { KodeBahasa, RingkasanBahasa } from '../TipePustaka';

interface PropertiTombolPustaka {
  readonly bahasaAktif: RingkasanBahasa;
  readonly jumlahTotalBahasa: number;
  readonly terbuka: boolean;
  readonly padaToggle: () => void;
}

export function TombolPemilihPustaka({
  bahasaAktif,
  jumlahTotalBahasa,
  terbuka,
  padaToggle,
}: PropertiTombolPustaka): ReactElement {
  return (
    <div className="border-b border-[var(--orias-garis)]/25 px-3 py-2.5">
      <button
        type="button"
        onClick={padaToggle}
        aria-expanded={terbuka}
        aria-controls="panel-daftar-pustaka"
        aria-label={`Ganti pustaka bahasa, aktif saat ini ${bahasaAktif.info.nama}`}
        className={`flex min-h-11 w-full items-center justify-between gap-2 border px-3 py-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)] ${
          terbuka
            ? 'border-[var(--orias-emas)] bg-[color-mix(in_srgb,var(--orias-es)_14%,transparent)]'
            : 'border-[var(--orias-garis)]/35 bg-[var(--orias-latar)] hover:border-[var(--orias-garis)]'
        }`}
      >
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-[10px] tracking-widest text-[var(--orias-teks-sekunder)] uppercase">
            Pustaka ({jumlahTotalBahasa})
          </span>
          <span className="block truncate text-sm font-semibold text-[var(--orias-teks)]">
            {bahasaAktif.info.nama}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
            {bahasaAktif.modulTersedia}/{bahasaAktif.totalModul}
          </span>
          <ChevronsUpDown
            className={`h-4 w-4 transition-colors ${
              terbuka ? 'text-[var(--orias-teks)]' : 'text-[var(--orias-garis)]'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
}

interface PropertiDaftarPilihanPustaka {
  readonly daftarTersaring: readonly RingkasanBahasa[];
  readonly kodeBahasaAktif: KodeBahasa;
  readonly kueriBahasa: string;
  readonly padaUbahKueri: (nilai: string) => void;
  readonly padaPilihBahasa: () => void;
}

export function DaftarPilihanPustaka({
  daftarTersaring,
  kodeBahasaAktif,
  kueriBahasa,
  padaUbahKueri,
  padaPilihBahasa,
}: PropertiDaftarPilihanPustaka): ReactElement {
  return (
    <div id="panel-daftar-pustaka" className="flex flex-col">
      <div className="sticky top-0 z-10 border-b border-[var(--orias-garis)]/20 bg-[var(--orias-permukaan)] px-3 py-2.5">
        <label htmlFor="saring-daftar-pustaka" className="sr-only">
          Cari bahasa atau kategori pustaka
        </label>
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--orias-garis)]"
            aria-hidden="true"
          />
          <input
            id="saring-daftar-pustaka"
            type="search"
            value={kueriBahasa}
            onChange={(e) => padaUbahKueri(e.target.value)}
            placeholder="Cari bahasa atau kategori..."
            className="min-h-10 w-full border border-[var(--orias-garis)]/40 bg-[var(--orias-latar)] py-1.5 pr-9 pl-9 text-base text-[var(--orias-teks)] placeholder:text-[var(--orias-teks-sekunder)] focus:border-[var(--orias-emas)] focus:outline-none md:text-sm"
          />
          {kueriBahasa.length > 0 ? (
            <button
              type="button"
              onClick={() => padaUbahKueri('')}
              aria-label="Bersihkan pencarian bahasa"
              className="absolute right-1 inline-flex h-8 w-8 items-center justify-center text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>

      {daftarTersaring.length === 0 ? (
        <p className="px-4 py-6 text-sm text-[var(--orias-teks-sekunder)]">
          Tidak ada pustaka yang cocok dengan &ldquo;{kueriBahasa}&rdquo;.
        </p>
      ) : (
        <ul className="divide-y divide-[var(--orias-garis)]/15 px-2 py-1.5">
          {daftarTersaring.map((item) => {
            const aktif = item.info.kode === kodeBahasaAktif;
            return (
              <li key={item.info.kode}>
                <Link
                  href={`/bahasa/${item.info.kode}`}
                  onClick={padaPilihBahasa}
                  aria-current={aktif ? 'true' : undefined}
                  className={`flex min-h-11 items-center justify-between gap-2 px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--orias-emas)] ${
                    aktif
                      ? 'border-l-2 border-[var(--orias-emas)] bg-[color-mix(in_srgb,var(--orias-es)_16%,transparent)] font-semibold text-[var(--orias-teks)]'
                      : 'text-[var(--orias-teks-sekunder)] hover:bg-[var(--orias-latar)]/60 hover:text-[var(--orias-teks)]'
                  }`}
                >
                  <span className="min-w-0 truncate">
                    <span className="mr-2 font-mono text-[11px] uppercase text-[var(--orias-garis)]">
                      {item.info.kode}
                    </span>
                    <span>{item.info.nama}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                    {item.modulTersedia}/{item.totalModul}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
