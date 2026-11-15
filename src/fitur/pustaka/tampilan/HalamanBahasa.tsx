import type { ReactElement } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PemisahFacet, PenandaStatus } from '@/bersama';
import type { RingkasanBahasa, SeksiNavigasi } from '../TipePustaka';

interface PropertiHalamanBahasa {
  readonly ringkasan: RingkasanBahasa;
  readonly seksiList: readonly SeksiNavigasi[];
}

export function HalamanBahasa({
  ringkasan,
  seksiList,
}: PropertiHalamanBahasa): ReactElement {
  const { info, modulTersedia, totalModul, totalEntri } = ringkasan;
  const modulPertama = seksiList.flatMap((s) => s.butir).find((b) => b.tersedia);

  return (
    <div className="mx-auto max-w-4xl">
      <header className="pb-4">
        <p className="font-mono text-xs font-medium tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
          Ikhtisar Bahasa
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-[var(--orias-teks)] md:text-4xl">
          {info.nama}
        </h1>
        <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-[var(--orias-teks-sekunder)] md:text-base">
          {info.ringkasan}
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-y border-[var(--orias-garis)]/30 py-4">
          <div>
            <dt className="font-mono text-xs text-[var(--orias-teks-sekunder)] uppercase">
              Modul siap baca
            </dt>
            <dd className="mt-1 font-mono text-xl font-bold tabular-nums text-[var(--orias-teks)]">
              {modulTersedia} / {totalModul}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--orias-teks-sekunder)] uppercase">
              Total entri
            </dt>
            <dd className="mt-1 font-mono text-xl font-bold tabular-nums text-[var(--orias-teks)]">
              {totalEntri}
            </dd>
          </div>
          <div className="min-w-0 flex-1">
            <dt className="font-mono text-xs text-[var(--orias-teks-sekunder)] uppercase">
              Konsep inti
            </dt>
            <dd className="mt-1 text-sm text-[var(--orias-teks)]">
              {info.konsepKunci.join(', ')}
            </dd>
          </div>
        </dl>

        {modulPertama ? (
          <div className="mt-6">
            <Link
              href={`/bahasa/${info.kode}/${modulPertama.id}`}
              className="inline-flex min-h-11 items-center gap-2 bg-[var(--orias-emas)] px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
            >
              <span>Baca {modulPertama.judul}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </header>

      <PemisahFacet label="Daftar Modul" />

      <div className="space-y-8">
        {seksiList.map((seksi) => (
          <section key={seksi.judul} aria-label={seksi.judul}>
            <div className="mb-3 flex items-baseline justify-between border-b border-[var(--orias-garis)]/35 pb-2">
              <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
                {seksi.judul}
              </h2>
              <span className="font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                {seksi.butir.length} topik
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 divide-y divide-[var(--orias-garis)]/20 md:grid-cols-2">
              {seksi.butir.map((butir) => (
                <li key={butir.id}>
                  <Link
                    href={`/bahasa/${info.kode}/${butir.id}`}
                    className="flex min-h-11 items-center justify-between gap-3 py-2.5 text-sm transition-colors hover:text-[var(--orias-tautan)]"
                  >
                    <span
                      className={
                        butir.tersedia
                          ? 'font-medium text-[var(--orias-teks)]'
                          : 'text-[var(--orias-teks-sekunder)]'
                      }
                    >
                      {butir.judul}
                    </span>
                    {butir.tersedia ? (
                      <span className="shrink-0 font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                        {butir.jumlahEntri} entri
                      </span>
                    ) : (
                      <PenandaStatus jenis="peringatan" label="Draf" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
