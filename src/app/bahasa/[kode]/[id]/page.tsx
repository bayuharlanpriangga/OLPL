import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import {
  PembacaDokumen,
  StatusKosongModul,
  TataLetakPustaka,
  ambilDokumenTerstruktur,
  ambilInfoBahasa,
  ambilKatalogPustaka,
  ambilSeksiBahasa,
  cariButirNavigasi,
  cariDokumenTetangga,
} from '@/fitur/pustaka';

interface PropertiRuteDokumen {
  readonly params: Promise<{ readonly kode: string; readonly id: string }>;
}

export async function generateMetadata({
  params,
}: PropertiRuteDokumen): Promise<Metadata> {
  const { kode, id } = await params;
  const info = ambilInfoBahasa(kode);
  if (!info) return { title: 'Dokumen Tidak Ditemukan | OLPL' };

  const butir = cariButirNavigasi(info.kode, id);
  if (!butir) return { title: 'Dokumen Tidak Ditemukan | OLPL' };

  return {
    title: `${butir.judul} — ${info.nama} | OLPL`,
    description: `Referensi ${butir.judul} pada dokumentasi ${info.nama} di OLPL.`,
  };
}

export default async function RuteDokumen({
  params,
}: PropertiRuteDokumen): Promise<ReactElement> {
  const { kode, id } = await params;
  const info = ambilInfoBahasa(kode);
  if (!info) notFound();

  const butir = cariButirNavigasi(info.kode, id);
  if (!butir) notFound();

  const katalog = ambilKatalogPustaka();
  const seksiList = ambilSeksiBahasa(info.kode);
  const dokumen = ambilDokumenTerstruktur(id);

  const modulTersedia = seksiList
    .flatMap((seksi) => seksi.butir)
    .filter((item) => item.tersedia);

  return (
    <TataLetakPustaka
      daftarBahasa={katalog.bahasa}
      seksiPerBahasa={katalog.seksiPerBahasa}
      kodeBahasaAktif={info.kode}
      idDokumenAktif={butir.id}
      jejak={[
        { label: 'OLPL', tautan: '/' },
        { label: info.nama, tautan: `/bahasa/${info.kode}` },
        { label: butir.judul },
      ]}
    >
      {dokumen ? (
        <PembacaDokumen
          dokumen={dokumen}
          tetangga={cariDokumenTetangga(seksiList, dokumen.id)}
        />
      ) : (
        <StatusKosongModul
          bahasa={info}
          butirDiminta={butir}
          modulTersedia={modulTersedia}
        />
      )}
    </TataLetakPustaka>
  );
}
