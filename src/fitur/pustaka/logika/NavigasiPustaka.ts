import { BATAS_SISTEM } from '@/inti';
import type {
  ButirNavigasi,
  IdDokumen,
  InfoBahasa,
  RingkasanBahasa,
  SeksiNavigasi,
} from '../TipePustaka';

export function hitungRingkasanBahasa(
  info: InfoBahasa,
  seksiList: readonly SeksiNavigasi[],
): RingkasanBahasa {
  let totalModul = 0;
  let modulTersedia = 0;
  let totalEntri = 0;

  for (const seksi of seksiList) {
    for (const butir of seksi.butir) {
      totalModul += 1;
      if (butir.tersedia) modulTersedia += 1;
      totalEntri += butir.jumlahEntri;
    }
  }

  return { info, totalModul, modulTersedia, totalEntri };
}

export function tentukanStatusSeksiTerbuka(params: {
  readonly seksi: SeksiNavigasi;
  readonly idDokumenAktif?: IdDokumen;
  readonly statusTersimpan?: boolean;
  readonly sedangMencari: boolean;
}): boolean {
  if (params.sedangMencari) return true;
  if (
    params.idDokumenAktif !== undefined &&
    params.seksi.butir.some((butir) => butir.id === params.idDokumenAktif)
  ) {
    return true;
  }
  if (params.statusTersimpan !== undefined) return params.statusTersimpan;
  return params.seksi.butir.length <= BATAS_SISTEM.batasSeksiTerbukaDefault;
}

export interface NavigasiTetangga {
  readonly sebelumnya: ButirNavigasi | null;
  readonly berikutnya: ButirNavigasi | null;
}

export function cariDokumenTetangga(
  seksiList: readonly SeksiNavigasi[],
  idDokumenAktif: IdDokumen,
): NavigasiTetangga {
  const semuaTersedia = seksiList.flatMap((seksi) =>
    seksi.butir.filter((butir) => butir.tersedia),
  );
  const indeks = semuaTersedia.findIndex((butir) => butir.id === idDokumenAktif);
  if (indeks < 0) {
    return { sebelumnya: null, berikutnya: null };
  }
  return {
    sebelumnya: semuaTersedia[indeks - 1] ?? null,
    berikutnya: semuaTersedia[indeks + 1] ?? null,
  };
}
