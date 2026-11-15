'use client';

import { type ReactElement, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, X } from 'lucide-react';
import { IkonFacet, PemisahFacet, PenandaStatus } from '@/bersama';
import type {
  InfoBahasa,
  KodeBahasa,
  RingkasanBahasa,
  SeksiNavigasi,
} from '../TipePustaka';
import { cariTopikGlobal } from '../logika/PencarianTopik';

interface PropertiHalamanBeranda {
  readonly ringkasanBahasa: readonly RingkasanBahasa[];
  readonly daftarBahasa: readonly InfoBahasa[];
  readonly seksiPerBahasa: Readonly<Record<KodeBahasa, readonly SeksiNavigasi[]>>;
}

export function HalamanBeranda({
  ringkasanBahasa,
  daftarBahasa,
  seksiPerBahasa,
}: PropertiHalamanBeranda): ReactElement {
  const [kueriGlobal, setKueriGlobal] = useState<string>('');

  const totalTersedia = useMemo(
    () => ringkasanBahasa.reduce((acc, item) => acc + item.modulTersedia, 0),
    [ringkasanBahasa],
  );
  const totalTopik = useMemo(
    () => ringkasanBahasa.reduce((acc, item) => acc + item.totalModul, 0),
    [ringkasanBahasa],
  );

  const hasilPencarian = useMemo(
    () => cariTopikGlobal(kueriGlobal, daftarBahasa, seksiPerBahasa),
    [kueriGlobal, daftarBahasa, seksiPerBahasa],
  );

  const sedangMencari = kueriGlobal.trim().length > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <section className="pb-6">
        <div className="mb-3 flex items-center gap-2.5">
          <IkonFacet ukuran="kecil" />
          <span className="font-mono text-xs font-medium tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
            Orias Library Programming Language
          </span>
        </div>

        <h1 className="max-w-2xl text-2xl leading-tight font-bold tracking-tight text-[var(--orias-teks)] md:text-4xl">
          Pustaka referensi pemrograman dan teknologi web
        </h1>

        <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-[var(--orias-teks-sekunder)] md:text-base">
          Rujukan sintaks, struktur data, dan contoh kode terkurasi untuk{' '}
          <span className="tabular-nums font-medium text-[var(--orias-teks)]">
            {ringkasanBahasa.length}
          </span>{' '}
          bahasa dengan{' '}
          <span className="tabular-nums font-medium text-[var(--orias-teks)]">
            {totalTersedia}
          </span>{' '}
          modul siap baca dari{' '}
          <span className="tabular-nums font-medium text-[var(--orias-teks)]">
            {totalTopik}
          </span>{' '}
          topik terindeks.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href="/bahasa/js"
            className="inline-flex min-h-11 items-center gap-2 bg-[var(--orias-emas)] px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
          >
            <span>Mulai dari JavaScript</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/bahasa/html"
            className="inline-flex min-h-11 items-center border border-[var(--orias-garis)]/45 px-4 py-2.5 text-sm font-medium text-[var(--orias-teks)] transition-colors hover:border-[var(--orias-garis)]"
          >
            Referensi HTML
          </Link>
        </div>
      </section>

      <section aria-label="Pencarian global topik" className="py-4">
        <label
          htmlFor="cari-topik-beranda"
          className="mb-2 block font-mono text-xs font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase"
        >
          Cari di seluruh {totalTopik} topik
        </label>
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-3.5 h-4 w-4 text-[var(--orias-garis)]"
            aria-hidden="true"
          />
          <input
            id="cari-topik-beranda"
            type="search"
            value={kueriGlobal}
            onChange={(e) => setKueriGlobal(e.target.value)}
            placeholder="Cari topik, mis. Flexbox, Array, Promise, SELECT, <div>..."
            className="min-h-11 w-full border border-[var(--orias-garis)]/45 bg-[var(--orias-permukaan)] py-2.5 pr-11 pl-10 text-base text-[var(--orias-teks)] placeholder:text-[var(--orias-teks-sekunder)] focus:border-[var(--orias-emas)] focus:outline-none md:text-sm"
          />
          {sedangMencari ? (
            <button
              type="button"
              onClick={() => setKueriGlobal('')}
              aria-label="Hapus kata kunci pencarian"
              className="absolute right-1 inline-flex h-10 w-10 items-center justify-center text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {sedangMencari ? (
          <div className="mt-4 border-t border-[var(--orias-garis)]/30 pt-3">
            {hasilPencarian.length === 0 ? (
              <p className="py-4 text-sm text-[var(--orias-teks-sekunder)]">
                Tidak ada topik yang cocok dengan &ldquo;{kueriGlobal}&rdquo;. Coba kata kunci
                lain seperti Array, Flexbox, atau SELECT.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--orias-garis)]/25">
                {hasilPencarian.map((item) => (
                  <li key={`${item.kodeBahasa}-${item.id}`}>
                    <Link
                      href={`/bahasa/${item.kodeBahasa}/${item.id}`}
                      className="flex min-h-11 items-center justify-between gap-4 py-2.5 transition-colors hover:bg-[var(--orias-permukaan)] px-2"
                    >
                      <div className="min-w-0">
                        <span className="block truncate text-sm font-medium text-[var(--orias-teks)]">
                          {item.judul}
                        </span>
                        <span className="block font-mono text-xs text-[var(--orias-teks-sekunder)]">
                          {item.namaBahasa} / {item.namaSeksi}
                        </span>
                      </div>
                      {item.tersedia ? (
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-[var(--orias-garis)]"
                          aria-hidden="true"
                        />
                      ) : (
                        <PenandaStatus jenis="peringatan" label="Draf" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </section>

      <PemisahFacet label="Indeks Bahasa" />

      <section aria-label="Daftar bahasa pemrograman">
        <ol className="divide-y divide-[var(--orias-garis)]/30 border-t border-b border-[var(--orias-garis)]/30">
          {ringkasanBahasa.map((item, indeks) => {
            const nomor = String(indeks + 1).padStart(2, '0');
            return (
              <li key={item.info.kode}>
                <Link
                  href={`/bahasa/${item.info.kode}`}
                  className="group flex flex-col gap-2 py-4 transition-colors hover:bg-[var(--orias-permukaan)] px-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex min-w-0 items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                      {nomor}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold text-[var(--orias-teks)] group-hover:text-[var(--orias-tautan)]">
                        {item.info.nama}
                      </h2>
                      <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-[var(--orias-teks-sekunder)]">
                        {item.info.ringkasan}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 pl-8 sm:pl-0">
                    <span className="font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                      {item.modulTersedia}/{item.totalModul} modul
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-[var(--orias-garis)] transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
