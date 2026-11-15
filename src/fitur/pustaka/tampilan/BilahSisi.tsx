'use client';

import { type ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, X } from 'lucide-react';
import { IkonFacet } from '@/bersama';
import type {
  IdDokumen,
  InfoBahasa,
  KodeBahasa,
  SeksiNavigasi,
} from '../TipePustaka';
import {
  hitungJumlahTopikSeksi,
  saringRingkasanBahasa,
  saringSeksiBahasa,
} from '../logika/PencarianTopik';
import {
  hitungRingkasanBahasa,
  tentukanStatusSeksiTerbuka,
} from '../logika/NavigasiPustaka';
import {
  DaftarPilihanPustaka,
  TombolPemilihPustaka,
} from './PemilihPustaka';

interface PropertiBilahSisi {
  readonly daftarBahasa: readonly InfoBahasa[];
  readonly seksiPerBahasa: Readonly<Record<KodeBahasa, readonly SeksiNavigasi[]>>;
  readonly kodeBahasaAktif: KodeBahasa;
  readonly idDokumenAktif?: IdDokumen;
  readonly terbukaDiPonsel: boolean;
  readonly padaTutupPonsel: () => void;
}

const LABEL_RINGKAS_BAHASA: Readonly<Record<KodeBahasa, string>> = {
  js: 'JS',
  py: 'PY',
  css: 'CSS',
  html: 'HTML',
  ts: 'TS',
  react: 'React',
  anim: 'Animasi',
  svg: 'SVG',
  three: 'Three.js',
  sql: 'SQL',
};

export function BilahSisi({
  daftarBahasa,
  seksiPerBahasa,
  kodeBahasaAktif,
  idDokumenAktif,
  terbukaDiPonsel,
  padaTutupPonsel,
}: PropertiBilahSisi): ReactElement {
  const [pemilihTerbuka, setPemilihTerbuka] = useState<boolean>(false);
  const [kueriBahasa, setKueriBahasa] = useState<string>('');
  const [kueri, setKueri] = useState<string>('');
  const [statusSeksi, setStatusSeksi] = useState<Readonly<Record<string, boolean>>>({});
  const elemenAktifRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    elemenAktifRef.current?.scrollIntoView({ block: 'nearest' });
  }, [idDokumenAktif]);

  useEffect(() => {
    if (!terbukaDiPonsel) return;
    function tanganiTombol(acara: KeyboardEvent): void {
      if (acara.key === 'Escape') {
        padaTutupPonsel();
      }
    }
    window.addEventListener('keydown', tanganiTombol);
    return () => window.removeEventListener('keydown', tanganiTombol);
  }, [terbukaDiPonsel, padaTutupPonsel]);

  const semuaRingkasan = useMemo(
    () =>
      daftarBahasa.map((info) =>
        hitungRingkasanBahasa(info, seksiPerBahasa[info.kode]),
      ),
    [daftarBahasa, seksiPerBahasa],
  );

  const ringkasanAktif = useMemo(
    () =>
      semuaRingkasan.find((item) => item.info.kode === kodeBahasaAktif) ??
      semuaRingkasan[0],
    [semuaRingkasan, kodeBahasaAktif],
  );

  const daftarBahasaTersaring = useMemo(
    () => saringRingkasanBahasa(semuaRingkasan, kueriBahasa),
    [semuaRingkasan, kueriBahasa],
  );

  const seksiTersaring = useMemo(() => {
    const seksiBahasa = seksiPerBahasa[kodeBahasaAktif];
    return saringSeksiBahasa(seksiBahasa, kueri);
  }, [seksiPerBahasa, kodeBahasaAktif, kueri]);

  const sedangMencari = kueri.trim().length > 0;

  const jumlahCocokLokal = useMemo(
    () => hitungJumlahTopikSeksi(seksiTersaring),
    [seksiTersaring],
  );

  function ubahStatusSeksi(judulSeksi: string, statusSaatIni: boolean): void {
    const kunci = `${kodeBahasaAktif}::${judulSeksi}`;
    setStatusSeksi((sebelumnya) => ({ ...sebelumnya, [kunci]: !statusSaatIni }));
  }

  function tutupSemuaPanel(): void {
    setPemilihTerbuka(false);
    setKueriBahasa('');
    padaTutupPonsel();
  }

  return (
    <>
      {terbukaDiPonsel ? (
        <div
          aria-hidden="true"
          onClick={padaTutupPonsel}
          className="fixed inset-0 z-40 bg-[#0D0D0D]/55 md:hidden"
        />
      ) : null}

      <aside
        aria-label="Navigasi pustaka bahasa pemrograman"
        className={`fixed inset-y-0 left-0 z-50 flex h-[100dvh] w-[min(19rem,calc(100vw-2.5rem))] shrink-0 flex-col border-r border-[var(--orias-garis)]/35 bg-[var(--orias-permukaan)] transition-transform duration-200 md:sticky md:top-0 md:z-auto md:w-72 md:translate-x-0 ${
          terbukaDiPonsel ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex shrink-0 items-center border-b border-[var(--orias-garis)]/25 px-4 py-3">
          <Link
            href="/"
            onClick={tutupSemuaPanel}
            className="flex min-h-11 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
          >
            <IkonFacet ukuran="sedang" />
            <div>
              <span className="block text-base font-bold tracking-tight text-[var(--orias-teks)]">
                OLPL
              </span>
              <span className="block font-mono text-[11px] text-[var(--orias-teks-sekunder)]">
                Pustaka Orias
              </span>
            </div>
          </Link>
        </div>

        {ringkasanAktif ? (
          <TombolPemilihPustaka
            bahasaAktif={ringkasanAktif}
            jumlahTotalBahasa={daftarBahasa.length}
            terbuka={pemilihTerbuka}
            padaToggle={() => {
              setPemilihTerbuka((sebelumnya) => !sebelumnya);
              setKueriBahasa('');
            }}
          />
        ) : null}

        {!pemilihTerbuka ? (
          <div className="shrink-0 border-b border-[var(--orias-garis)]/25 px-3 py-2.5">
            <label htmlFor="cari-topik-bilah-sisi" className="sr-only">
              Cari topik di bahasa aktif
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--orias-garis)]"
                aria-hidden="true"
              />
              <input
                id="cari-topik-bilah-sisi"
                type="search"
                value={kueri}
                onChange={(e) => setKueri(e.target.value)}
                placeholder={`Saring topik ${LABEL_RINGKAS_BAHASA[kodeBahasaAktif]}...`}
                className="min-h-10 w-full border border-[var(--orias-garis)]/40 bg-[var(--orias-latar)] py-1.5 pr-9 pl-9 text-base text-[var(--orias-teks)] placeholder:text-[var(--orias-teks-sekunder)] focus:border-[var(--orias-emas)] focus:outline-none md:text-sm"
              />
              {sedangMencari ? (
                <button
                  type="button"
                  onClick={() => setKueri('')}
                  aria-label="Bersihkan pencarian topik"
                  className="absolute right-1 inline-flex h-8 w-8 items-center justify-center text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="min-h-0 flex-1 overflow-y-auto">
          {pemilihTerbuka ? (
            <DaftarPilihanPustaka
              daftarTersaring={daftarBahasaTersaring}
              kodeBahasaAktif={kodeBahasaAktif}
              kueriBahasa={kueriBahasa}
              padaUbahKueri={setKueriBahasa}
              padaPilihBahasa={tutupSemuaPanel}
            />
          ) : (
            <div className="px-2 py-2.5">
              {sedangMencari && seksiTersaring.length > 0 ? (
                <p className="px-2.5 pb-2 font-mono text-[11px] text-[var(--orias-teks-sekunder)]">
                  {jumlahCocokLokal} topik cocok di {LABEL_RINGKAS_BAHASA[kodeBahasaAktif]}
                </p>
              ) : null}

              {seksiTersaring.length === 0 ? (
                <p className="px-3 py-6 text-sm text-[var(--orias-teks-sekunder)]">
                  Tidak ada topik di {LABEL_RINGKAS_BAHASA[kodeBahasaAktif]} untuk &ldquo;
                  {kueri}&rdquo;.
                </p>
              ) : (
                <div className="space-y-1.5">
                  {seksiTersaring.map((seksi) => {
                    const kunci = `${kodeBahasaAktif}::${seksi.judul}`;
                    const terbuka = tentukanStatusSeksiTerbuka({
                      seksi,
                      sedangMencari,
                      ...(idDokumenAktif !== undefined ? { idDokumenAktif } : {}),
                      ...(statusSeksi[kunci] !== undefined
                        ? { statusTersimpan: statusSeksi[kunci] }
                        : {}),
                    });

                    return (
                      <div key={seksi.judul}>
                        <button
                          type="button"
                          aria-expanded={terbuka}
                          onClick={() => ubahStatusSeksi(seksi.judul, terbuka)}
                          className="flex min-h-10 w-full items-center justify-between gap-2 px-2 py-1.5 text-left font-mono text-xs font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase hover:text-[var(--orias-teks)]"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <ChevronRight
                              className={`h-3.5 w-3.5 shrink-0 text-[var(--orias-garis)] transition-transform duration-150 ${
                                terbuka ? 'rotate-90' : 'rotate-0'
                              }`}
                              aria-hidden="true"
                            />
                            <span className="truncate">{seksi.judul}</span>
                          </span>
                          <span className="shrink-0 font-normal text-[11px] tabular-nums">
                            {seksi.butir.length}
                          </span>
                        </button>

                        {terbuka ? (
                          <ul className="mt-0.5 ml-3.5 space-y-0.5 border-l border-[var(--orias-garis)]/30 pl-2">
                            {seksi.butir.map((butir) => {
                              const aktif = butir.id === idDokumenAktif;
                              return (
                                <li key={butir.id}>
                                  <Link
                                    ref={aktif ? elemenAktifRef : undefined}
                                    href={`/bahasa/${kodeBahasaAktif}/${butir.id}`}
                                    onClick={tutupSemuaPanel}
                                    aria-current={aktif ? 'page' : undefined}
                                    className={`flex min-h-9 items-center justify-between gap-2 px-2.5 py-1.5 text-sm transition-colors ${
                                      aktif
                                        ? 'border-l-2 border-[var(--orias-emas)] bg-[color-mix(in_srgb,var(--orias-es)_16%,transparent)] font-medium text-[var(--orias-teks)]'
                                        : butir.tersedia
                                          ? 'text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]'
                                          : 'text-[var(--orias-teks-sekunder)]/65 hover:text-[var(--orias-teks-sekunder)]'
                                    }`}
                                  >
                                    <span className="truncate">{butir.judul}</span>
                                    {!butir.tersedia ? (
                                      <span className="shrink-0 font-mono text-[10px] uppercase">
                                        Draf
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between border-t border-[var(--orias-garis)]/25 px-3 py-2 font-mono text-xs">
          <Link
            href={`/bahasa/${kodeBahasaAktif}`}
            onClick={tutupSemuaPanel}
            className="text-[var(--orias-tautan)] hover:underline"
          >
            Indeks {LABEL_RINGKAS_BAHASA[kodeBahasaAktif]}
          </Link>
          <Link
            href="/"
            onClick={tutupSemuaPanel}
            className="text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]"
          >
            Semua ({daftarBahasa.length})
          </Link>
        </div>
      </aside>
    </>
  );
}
