import type { ReactElement } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PenandaStatus } from '@/bersama';
import type { ButirNavigasi, InfoBahasa } from '../TipePustaka';

interface PropertiStatusKosongModul {
  readonly bahasa: InfoBahasa;
  readonly butirDiminta: ButirNavigasi;
  readonly modulTersedia: readonly ButirNavigasi[];
}

export function StatusKosongModul({
  bahasa,
  butirDiminta,
  modulTersedia,
}: PropertiStatusKosongModul): ReactElement {
  return (
    <section className="max-w-2xl py-4">
      <div className="mb-4">
        <PenandaStatus jenis="peringatan" label="Sedang disusun" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-[var(--orias-teks)] md:text-3xl">
        {butirDiminta.judul}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[var(--orias-teks-sekunder)]">
        Materi untuk topik ini pada bagian {bahasa.nama} belum tersedia di pustaka saat ini.
        Anda dapat membaca modul {bahasa.nama} lainnya yang sudah lengkap di bawah ini.
      </p>

      <div className="mt-6">
        <Link
          href={`/bahasa/${bahasa.kode}`}
          className="inline-flex min-h-11 items-center gap-2 bg-[var(--orias-emas)] px-5 py-2.5 text-sm font-semibold text-[#0D0D0D] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
        >
          <span>Lihat semua modul {bahasa.nama}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      {modulTersedia.length > 0 ? (
        <div className="mt-10 border-t border-[var(--orias-garis)]/30 pt-6">
          <h2 className="mb-4 text-sm font-semibold tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
            Modul {bahasa.nama} yang tersedia
          </h2>
          <ul className="divide-y divide-[var(--orias-garis)]/25">
            {modulTersedia.slice(0, 8).map((butir) => (
              <li key={butir.id}>
                <Link
                  href={`/bahasa/${bahasa.kode}/${butir.id}`}
                  className="flex min-h-11 items-center justify-between gap-4 py-2.5 text-sm text-[var(--orias-teks)] transition-colors hover:text-[var(--orias-tautan)]"
                >
                  <span>{butir.judul}</span>
                  <span className="font-mono text-xs tabular-nums text-[var(--orias-teks-sekunder)]">
                    {butir.jumlahEntri} entri
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
