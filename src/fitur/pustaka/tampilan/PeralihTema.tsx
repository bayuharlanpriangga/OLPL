'use client';

import type { ReactElement } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { ModeTema } from '@/inti';

interface PropertiPeralihTema {
  readonly tema: ModeTema;
  readonly padaUbahTema: () => void;
}

export function PeralihTema({ tema, padaUbahTema }: PropertiPeralihTema): ReactElement {
  const adalahGelap = tema === 'gelap';

  return (
    <button
      type="button"
      onClick={padaUbahTema}
      aria-label={adalahGelap ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-[var(--orias-garis)]/40 px-3 py-2 text-xs font-medium text-[var(--orias-teks)] transition-colors hover:border-[var(--orias-garis)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
    >
      {adalahGelap ? (
        <>
          <Sun className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">Mode Terang</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">Mode Gelap</span>
        </>
      )}
    </button>
  );
}
