import katalogMentahJson from './dihasilkan/KatalogBahasa.json';
import kumpulanDokumenMentahJson from './dihasilkan/KumpulanDokumen.json';
import {
  buatIdDokumen,
  type ButirNavigasi,
  type DokumenMentah,
  type DokumenTerstruktur,
  type InfoBahasa,
  type KodeBahasa,
  type RingkasanBahasa,
  type SeksiNavigasi,
} from '../TipePustaka';
import { hitungRingkasanBahasa } from '../logika/NavigasiPustaka';
import { uraiKontenHtml } from '../logika/PenguraiKontenHtml';
import {
  adalahKodeBahasa,
  validasiKatalogMentah,
  validasiKumpulanDokumen,
  type KatalogValid,
} from '../logika/ValidasiData';

interface CachePustaka {
  readonly dokumenPeta: ReadonlyMap<string, DokumenMentah>;
  readonly katalog: KatalogValid;
}

let cachePustaka: CachePustaka | null = null;

function muatCachePustaka(): CachePustaka {
  if (cachePustaka !== null) return cachePustaka;

  const dokumenPeta = validasiKumpulanDokumen(kumpulanDokumenMentahJson as unknown);
  const idTersedia = new Set<string>(dokumenPeta.keys());
  const katalog = validasiKatalogMentah(katalogMentahJson as unknown, idTersedia);

  cachePustaka = { dokumenPeta, katalog };
  return cachePustaka;
}

export function ambilKatalogPustaka(): KatalogValid {
  return muatCachePustaka().katalog;
}

export function ambilSemuaRingkasanBahasa(): readonly RingkasanBahasa[] {
  const { katalog } = muatCachePustaka();
  return katalog.bahasa.map((info) =>
    hitungRingkasanBahasa(info, katalog.seksiPerBahasa[info.kode]),
  );
}

export function ambilInfoBahasa(kode: string): InfoBahasa | null {
  if (!adalahKodeBahasa(kode)) return null;
  const { katalog } = muatCachePustaka();
  return katalog.bahasa.find((item) => item.kode === kode) ?? null;
}

export function ambilSeksiBahasa(kode: KodeBahasa): readonly SeksiNavigasi[] {
  return muatCachePustaka().katalog.seksiPerBahasa[kode];
}

export function ambilDokumenTerstruktur(id: string): DokumenTerstruktur | null {
  const dokumen = muatCachePustaka().dokumenPeta.get(id);
  if (!dokumen) return null;

  return {
    id: dokumen.id,
    judul: dokumen.judul,
    bahasaNama: dokumen.bahasaNama,
    kodeBahasa: dokumen.kodeBahasa,
    daftarIsi: dokumen.daftarIsi,
    blok: uraiKontenHtml(dokumen.kontenHtml),
  };
}

export function cariButirNavigasi(kode: KodeBahasa, id: string): ButirNavigasi | null {
  const seksiList = ambilSeksiBahasa(kode);
  const targetId = buatIdDokumen(id);
  for (const seksi of seksiList) {
    const cocok = seksi.butir.find((item) => item.id === targetId);
    if (cocok) return cocok;
  }
  return null;
}
