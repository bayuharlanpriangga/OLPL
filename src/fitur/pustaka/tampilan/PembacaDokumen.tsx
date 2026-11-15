import type { ReactElement } from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Info,
  Lightbulb,
} from 'lucide-react';
import { PemisahFacet } from '@/bersama';
import type {
  BlokKonten,
  DokumenTerstruktur,
  JenisCatatan,
  SegmenInline,
} from '../TipePustaka';
import type { NavigasiTetangga } from '../logika/NavigasiPustaka';
import { BlokKode } from './BlokKode';
import { DaftarIsi } from './DaftarIsi';

interface PropertiPembacaDokumen {
  readonly dokumen: DokumenTerstruktur;
  readonly tetangga: NavigasiTetangga;
}

function renderSegmenInline(segmen: readonly SegmenInline[]): ReactElement[] {
  return segmen.map((item, indeks) => {
    switch (item.jenis) {
      case 'teks':
        return <span key={indeks}>{item.isi}</span>;
      case 'kode':
        return (
          <code
            key={indeks}
            className="border border-[var(--orias-garis)]/30 bg-[var(--orias-permukaan)] px-1.5 py-0.5 font-mono text-[0.875em] text-[var(--orias-teks)]"
          >
            {item.isi}
          </code>
        );
      case 'tebal':
        return (
          <strong key={indeks} className="font-semibold text-[var(--orias-teks)]">
            {item.isi}
          </strong>
        );
      case 'miring':
        return (
          <em key={indeks} className="italic">
            {item.isi}
          </em>
        );
    }
  });
}

function ikonCatatan(ragam: JenisCatatan): ReactElement {
  switch (ragam) {
    case 'tip':
      return <Lightbulb className="h-4 w-4 shrink-0 text-[var(--orias-sukses)]" aria-hidden="true" />;
    case 'info':
      return <Info className="h-4 w-4 shrink-0 text-[var(--orias-garis)]" aria-hidden="true" />;
    case 'warn':
      return (
        <AlertTriangle
          className="h-4 w-4 shrink-0 text-[var(--orias-peringatan)]"
          aria-hidden="true"
        />
      );
    case 'err':
      return <AlertCircle className="h-4 w-4 shrink-0 text-[var(--orias-galat)]" aria-hidden="true" />;
  }
}

const GAYA_CATATAN: Record<JenisCatatan, string> = {
  tip: 'border-l-2 border-[var(--orias-sukses)] bg-[color-mix(in_srgb,var(--orias-sukses)_7%,transparent)]',
  info: 'border-l-2 border-[var(--orias-garis)] bg-[color-mix(in_srgb,var(--orias-es)_14%,transparent)]',
  warn: 'border-l-2 border-[var(--orias-peringatan)] bg-[color-mix(in_srgb,var(--orias-peringatan)_7%,transparent)]',
  err: 'border-l-2 border-[var(--orias-galat)] bg-[color-mix(in_srgb,var(--orias-galat)_7%,transparent)]',
};

function renderBlok(blok: BlokKonten, indeks: number): ReactElement {
  switch (blok.jenis) {
    case 'judul':
      return (
        <h1
          key={indeks}
          className="text-2xl font-bold tracking-tight text-[var(--orias-teks)] md:text-4xl"
        >
          {blok.isi}
        </h1>
      );
    case 'ringkasan':
      return (
        <p
          key={indeks}
          className="mt-2 border-l-2 border-[var(--orias-garis)] pl-3 text-base leading-relaxed text-[var(--orias-teks-sekunder)]"
        >
          {blok.isi}
        </p>
      );
    case 'subjudul':
      return (
        <h2
          key={indeks}
          id={blok.idBagian}
          className="mt-10 mb-3 scroll-mt-6 border-b border-[var(--orias-garis)]/35 pb-2 text-xl font-semibold text-[var(--orias-teks)] md:text-2xl"
        >
          {blok.isi}
        </h2>
      );
    case 'paragraf':
      return (
        <p key={indeks} className="my-3.5 text-[15px] leading-7 text-[var(--orias-teks)] md:text-base">
          {renderSegmenInline(blok.segmen)}
        </p>
      );
    case 'tabel':
      return (
        <div key={indeks} className="my-5 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            {blok.kepala.length > 0 ? (
              <thead>
                <tr className="border-b-2 border-[var(--orias-garis)]/50">
                  {blok.kepala.map((sel, iSel) => (
                    <th
                      key={iSel}
                      className="py-2.5 pr-4 font-mono text-xs font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase"
                    >
                      {renderSegmenInline(sel)}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody className="divide-y divide-[var(--orias-garis)]/25">
              {blok.baris.map((baris, iBaris) => (
                <tr key={iBaris}>
                  {baris.map((sel, iSel) => (
                    <td
                      key={iSel}
                      className="py-2.5 pr-4 align-top text-sm leading-relaxed text-[var(--orias-teks)]"
                    >
                      {renderSegmenInline(sel)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'kode':
      return (
        <BlokKode
          key={indeks}
          bahasa={blok.bahasa}
          token={blok.token}
          teksSalin={blok.teksSalin}
        />
      );
    case 'catatan':
      return (
        <div key={indeks} className={`my-5 px-4 py-3 ${GAYA_CATATAN[blok.ragam]}`}>
          <div className="mb-1 flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--orias-teks)] uppercase">
            {ikonCatatan(blok.ragam)}
            <span>{blok.judul}</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--orias-teks)]">
            {renderSegmenInline(blok.segmen)}
          </p>
        </div>
      );
    case 'kisiKartu':
      return (
        <dl
          key={indeks}
          className="my-5 grid grid-cols-1 gap-x-8 gap-y-3 border-y border-[var(--orias-garis)]/30 py-4 sm:grid-cols-2"
        >
          {blok.item.map((item, iItem) => (
            <div key={iItem} className="py-1">
              <dt className="font-mono text-sm font-semibold text-[var(--orias-teks)]">
                {item.nama}
              </dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-[var(--orias-teks-sekunder)]">
                {item.deskripsi}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

export function PembacaDokumen({
  dokumen,
  tetangga,
}: PropertiPembacaDokumen): ReactElement {
  return (
    <div className="flex gap-10">
      <article className="min-w-0 flex-1 max-w-[72ch]">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[var(--orias-teks-sekunder)]">
          <Link
            href={`/bahasa/${dokumen.kodeBahasa}`}
            className="font-mono font-semibold text-[var(--orias-tautan)] hover:underline"
          >
            {dokumen.bahasaNama}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-mono">{dokumen.id}</span>
        </div>

        {dokumen.blok.map((blok, indeks) => renderBlok(blok, indeks))}

        <PemisahFacet />

        <nav
          aria-label="Navigasi antar modul"
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          {tetangga.sebelumnya ? (
            <Link
              href={`/bahasa/${dokumen.kodeBahasa}/${tetangga.sebelumnya.id}`}
              className="inline-flex min-h-11 items-center gap-2 border border-[var(--orias-garis)]/40 px-4 py-2 text-sm text-[var(--orias-teks)] transition-colors hover:border-[var(--orias-garis)]"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{tetangga.sebelumnya.judul}</span>
            </Link>
          ) : (
            <span />
          )}
          {tetangga.berikutnya ? (
            <Link
              href={`/bahasa/${dokumen.kodeBahasa}/${tetangga.berikutnya.id}`}
              className="inline-flex min-h-11 items-center justify-end gap-2 border border-[var(--orias-garis)]/40 px-4 py-2 text-sm text-[var(--orias-teks)] transition-colors hover:border-[var(--orias-garis)]"
            >
              <span>{tetangga.berikutnya.judul}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          ) : null}
        </nav>
      </article>

      <DaftarIsi daftarIsi={dokumen.daftarIsi} />
    </div>
  );
}
