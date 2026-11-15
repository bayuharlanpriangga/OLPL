import type { ReactElement } from 'react';

interface PropertiIkonFacet {
  readonly ukuran?: 'kecil' | 'sedang' | 'besar';
  readonly terbuka?: boolean;
}

const UKURAN_KELAS: Record<NonNullable<PropertiIkonFacet['ukuran']>, string> = {
  kecil: 'h-3.5 w-3.5',
  sedang: 'h-6 w-6',
  besar: 'h-9 w-9',
};

/**
 * Geometri facet kristal Orias tiga tingkat terang-gelap (Tinta, Es, Perak).
 * Menggunakan potongan poligon CSS tanpa gradien atau SVG kustom.
 */
export function IkonFacet({
  ukuran = 'sedang',
  terbuka = false,
}: PropertiIkonFacet): ReactElement {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block shrink-0 transition-transform duration-200 ${UKURAN_KELAS[ukuran]} ${
        terbuka ? 'rotate-45' : 'rotate-0'
      }`}
    >
      <span
        className="absolute inset-0 bg-[var(--orias-es)]"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
      <span
        className="absolute inset-0 bg-[var(--orias-perak-kuat)] opacity-85"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 50%)' }}
      />
      <span
        className="absolute inset-0 bg-[var(--orias-tinta-kuat)] opacity-75"
        style={{ clipPath: 'polygon(50% 50%, 100% 50%, 50% 100%)' }}
      />
    </span>
  );
}

interface PropertiPemisahFacet {
  readonly label?: string;
}

export function PemisahFacet({ label }: PropertiPemisahFacet): ReactElement {
  return (
    <div className="my-6 flex items-center gap-3" aria-hidden={label ? undefined : true}>
      <span className="h-px flex-1 bg-[var(--orias-garis)] opacity-45" />
      <IkonFacet ukuran="kecil" />
      {label ? (
        <span className="font-mono text-xs font-medium tracking-wider text-[var(--orias-teks-sekunder)] uppercase">
          {label}
        </span>
      ) : null}
      <span className="h-px flex-1 bg-[var(--orias-garis)] opacity-45" />
    </div>
  );
}
