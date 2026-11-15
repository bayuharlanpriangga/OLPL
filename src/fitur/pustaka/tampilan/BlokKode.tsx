'use client';

import { type ReactElement, useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { BATAS_SISTEM } from '@/inti';
import type { JenisTokenKode, TokenKode } from '../TipePustaka';

interface PropertiBlokKode {
  readonly bahasa: string;
  readonly token: readonly TokenKode[];
  readonly teksSalin: string;
}

const KELAS_TOKEN: Record<JenisTokenKode, string> = {
  biasa: 'text-[var(--orias-teks)]',
  kw: 'text-[var(--kode-kw)] font-medium',
  fn: 'text-[var(--kode-fn)]',
  str: 'text-[var(--kode-str)]',
  num: 'text-[var(--kode-num)]',
  cm: 'text-[var(--kode-cm)] italic',
  op: 'text-[var(--kode-op)]',
  cls: 'text-[var(--kode-cls)]',
  var: 'text-[var(--kode-var)]',
  at: 'text-[var(--kode-at)]',
  tag: 'text-[var(--kode-tag)] font-medium',
  attr: 'text-[var(--kode-attr)]',
  val: 'text-[var(--kode-val)]',
};

export function BlokKode({
  bahasa,
  token,
  teksSalin,
}: PropertiBlokKode): ReactElement {
  const [statusSalin, setStatusSalin] = useState<'siap' | 'tersalin' | 'gagal'>('siap');

  useEffect(() => {
    if (statusSalin === 'siap') return;
    const timer = window.setTimeout(() => setStatusSalin('siap'), BATAS_SISTEM.durasiSalinMs);
    return () => window.clearTimeout(timer);
  }, [statusSalin]);

  async function tanganiSalin(): Promise<void> {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      setStatusSalin('gagal');
      return;
    }
    try {
      await navigator.clipboard.writeText(teksSalin);
      setStatusSalin('tersalin');
    } catch {
      setStatusSalin('gagal');
    }
  }

  return (
    <div className="my-5 overflow-hidden border border-[var(--orias-garis)]/35 bg-[var(--orias-permukaan)]">
      <div className="flex items-center justify-between border-b border-[var(--orias-garis)]/25 px-3 py-1.5">
        <span className="font-mono text-xs font-medium tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
          {bahasa}
        </span>
        <button
          type="button"
          onClick={tanganiSalin}
          aria-label={`Salin kode ${bahasa}`}
          className="inline-flex min-h-9 items-center gap-1.5 px-2.5 py-1 font-mono text-xs text-[var(--orias-teks-sekunder)] transition-colors hover:text-[var(--orias-teks)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orias-emas)]"
        >
          {statusSalin === 'tersalin' ? (
            <>
              <Check className="h-3.5 w-3.5 text-[var(--orias-sukses)]" aria-hidden="true" />
              <span className="text-[var(--orias-sukses)]">Tersalin</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{statusSalin === 'gagal' ? 'Gagal menyalin' : 'Salin kode'}</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed">
        <code>
          {token.map((item, indeks) => (
            <span key={indeks} className={KELAS_TOKEN[item.jenis]}>
              {item.isi}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
