'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import type { ModeTema } from '@/inti';
import { PeralihTema } from './PeralihTema';

export interface JejakNavigasi {
  readonly label: string;
  readonly tautan?: string;
}

interface PropertiBilahAtas {
  readonly jejak: readonly JejakNavigasi[];
  readonly tema: ModeTema;
  readonly padaBukaMenu: () => void;
  readonly padaUbahTema: () => void;
}

export function BilahAtas({
  jejak,
  tema,
  padaBukaMenu,
  padaUbahTema,
}: PropertiBilahAtas): ReactElement {
  return (
    <header className="sticky top-0 z-30 flex min-h-14 shrink-0 items-center justify-between gap-3 border-b border-[var(--orias-garis)]/30 bg-[var(--orias-latar)] px-3 py-2 md:px-6">
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          type="button"
          onClick={padaBukaMenu}
          aria-label="Buka menu navigasi"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-[var(--orias-garis)]/40 text-[var(--orias-teks)] md:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 text-xs md:text-sm">
          {jejak.map((item, indeks) => {
            const terakhir = indeks === jejak.length - 1;
            return (
              <span key={`${item.label}-${indeks}`} className="flex min-w-0 items-center gap-1.5">
                {indeks > 0 ? (
                  <span aria-hidden="true" className="text-[var(--orias-garis)]">
                    /
                  </span>
                ) : null}
                {item.tautan && !terakhir ? (
                  <Link
                    href={item.tautan}
                    className="truncate font-mono text-[var(--orias-teks-sekunder)] hover:text-[var(--orias-teks)]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="truncate font-mono font-medium text-[var(--orias-teks)]">
                    {item.label}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>

      <PeralihTema tema={tema} padaUbahTema={padaUbahTema} />
    </header>
  );
}
