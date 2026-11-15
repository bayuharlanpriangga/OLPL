import type { ReactElement } from 'react';
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';

export type JenisStatus = 'sukses' | 'peringatan' | 'galat' | 'info';

interface PropertiPenandaStatus {
  readonly jenis: JenisStatus;
  readonly label: string;
}

const GAYA_STATUS: Record<JenisStatus, string> = {
  sukses:
    'border-[var(--orias-sukses)] text-[var(--orias-sukses)] bg-[color-mix(in_srgb,var(--orias-sukses)_8%,transparent)]',
  peringatan:
    'border-[var(--orias-peringatan)] text-[var(--orias-peringatan)] bg-[color-mix(in_srgb,var(--orias-peringatan)_8%,transparent)]',
  galat:
    'border-[var(--orias-galat)] text-[var(--orias-galat)] bg-[color-mix(in_srgb,var(--orias-galat)_8%,transparent)]',
  info:
    'border-[var(--orias-garis)] text-[var(--orias-teks-sekunder)] bg-[color-mix(in_srgb,var(--orias-es)_16%,transparent)]',
};

function IkonUntukStatus({ jenis }: { readonly jenis: JenisStatus }): ReactElement {
  switch (jenis) {
    case 'sukses':
      return <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    case 'peringatan':
      return <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    case 'galat':
      return <XCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    case 'info':
      return <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
  }
}

export function PenandaStatus({ jenis, label }: PropertiPenandaStatus): ReactElement {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium ${GAYA_STATUS[jenis]}`}
    >
      <IkonUntukStatus jenis={jenis} />
      <span>{label}</span>
    </span>
  );
}
