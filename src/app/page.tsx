import type { ReactElement } from 'react';
import {
  HalamanBeranda,
  TataLetakPustaka,
  ambilKatalogPustaka,
  ambilSemuaRingkasanBahasa,
} from '@/fitur/pustaka';

export default function HalamanUtama(): ReactElement {
  const katalog = ambilKatalogPustaka();
  const ringkasanBahasa = ambilSemuaRingkasanBahasa();

  return (
    <TataLetakPustaka
      daftarBahasa={katalog.bahasa}
      seksiPerBahasa={katalog.seksiPerBahasa}
      kodeBahasaAktif="js"
      jejak={[{ label: 'OLPL' }, { label: 'Beranda' }]}
    >
      <HalamanBeranda
        ringkasanBahasa={ringkasanBahasa}
        daftarBahasa={katalog.bahasa}
        seksiPerBahasa={katalog.seksiPerBahasa}
      />
    </TataLetakPustaka>
  );
}
