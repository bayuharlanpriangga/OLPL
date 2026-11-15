import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import {
  HalamanBahasa,
  KODE_BAHASA_LIST,
  TataLetakPustaka,
  ambilInfoBahasa,
  ambilKatalogPustaka,
  ambilSeksiBahasa,
  hitungRingkasanBahasa,
} from '@/fitur/pustaka';

interface PropertiRuteBahasa {
  readonly params: Promise<{ readonly kode: string }>;
}

export function generateStaticParams(): Array<{ readonly kode: string }> {
  return KODE_BAHASA_LIST.map((kode) => ({ kode }));
}

export async function generateMetadata({
  params,
}: PropertiRuteBahasa): Promise<Metadata> {
  const { kode } = await params;
  const info = ambilInfoBahasa(kode);
  if (!info) return { title: 'Bahasa Tidak Ditemukan | OLPL' };
  return {
    title: `${info.nama} | OLPL`,
    description: info.ringkasan,
  };
}

export default async function RuteBahasa({
  params,
}: PropertiRuteBahasa): Promise<ReactElement> {
  const { kode } = await params;
  const info = ambilInfoBahasa(kode);
  if (!info) notFound();

  const katalog = ambilKatalogPustaka();
  const seksiList = ambilSeksiBahasa(info.kode);
  const ringkasan = hitungRingkasanBahasa(info, seksiList);

  return (
    <TataLetakPustaka
      daftarBahasa={katalog.bahasa}
      seksiPerBahasa={katalog.seksiPerBahasa}
      kodeBahasaAktif={info.kode}
      jejak={[
        { label: 'OLPL', tautan: '/' },
        { label: info.nama },
      ]}
    >
      <HalamanBahasa ringkasan={ringkasan} seksiList={seksiList} />
    </TataLetakPustaka>
  );
}
