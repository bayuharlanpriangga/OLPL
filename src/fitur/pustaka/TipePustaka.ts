export const KODE_BAHASA_LIST = [
  'js',
  'py',
  'css',
  'html',
  'ts',
  'react',
  'anim',
  'svg',
  'three',
  'sql',
] as const;

export type KodeBahasa = (typeof KODE_BAHASA_LIST)[number];

export type IdDokumen = string & { readonly __merek: 'IdDokumen' };

export function buatIdDokumen(nilai: string): IdDokumen {
  return nilai as IdDokumen;
}

export interface InfoBahasa {
  readonly kode: KodeBahasa;
  readonly nama: string;
  readonly ringkasan: string;
  readonly konsepKunci: readonly string[];
}

export interface ButirNavigasi {
  readonly id: IdDokumen;
  readonly judul: string;
  readonly jumlahEntri: number;
  readonly tersedia: boolean;
}

export interface SeksiNavigasi {
  readonly judul: string;
  readonly butir: readonly ButirNavigasi[];
}

export interface RingkasanBahasa {
  readonly info: InfoBahasa;
  readonly totalModul: number;
  readonly modulTersedia: number;
  readonly totalEntri: number;
}

export interface DokumenMentah {
  readonly id: IdDokumen;
  readonly judul: string;
  readonly bahasaNama: string;
  readonly kodeBahasa: KodeBahasa;
  readonly daftarIsi: readonly string[];
  readonly kontenHtml: string;
}

export type SegmenInline =
  | { readonly jenis: 'teks'; readonly isi: string }
  | { readonly jenis: 'kode'; readonly isi: string }
  | { readonly jenis: 'tebal'; readonly isi: string }
  | { readonly jenis: 'miring'; readonly isi: string };

export type JenisTokenKode =
  | 'biasa'
  | 'kw'
  | 'fn'
  | 'str'
  | 'num'
  | 'cm'
  | 'op'
  | 'cls'
  | 'var'
  | 'at'
  | 'tag'
  | 'attr'
  | 'val';

export interface TokenKode {
  readonly jenis: JenisTokenKode;
  readonly isi: string;
}

export type JenisCatatan = 'tip' | 'info' | 'warn' | 'err';

export interface ItemKartuKonsep {
  readonly nama: string;
  readonly deskripsi: string;
}

export type BlokKonten =
  | { readonly jenis: 'judul'; readonly isi: string }
  | { readonly jenis: 'ringkasan'; readonly isi: string }
  | {
      readonly jenis: 'subjudul';
      readonly idBagian: string;
      readonly isi: string;
    }
  | { readonly jenis: 'paragraf'; readonly segmen: readonly SegmenInline[] }
  | {
      readonly jenis: 'tabel';
      readonly kepala: readonly (readonly SegmenInline[])[];
      readonly baris: readonly (readonly (readonly SegmenInline[])[])[];
    }
  | {
      readonly jenis: 'kode';
      readonly bahasa: string;
      readonly token: readonly TokenKode[];
      readonly teksSalin: string;
    }
  | {
      readonly jenis: 'catatan';
      readonly ragam: JenisCatatan;
      readonly judul: string;
      readonly segmen: readonly SegmenInline[];
    }
  | {
      readonly jenis: 'kisiKartu';
      readonly item: readonly ItemKartuKonsep[];
    };

export interface DokumenTerstruktur {
  readonly id: IdDokumen;
  readonly judul: string;
  readonly bahasaNama: string;
  readonly kodeBahasa: KodeBahasa;
  readonly daftarIsi: readonly string[];
  readonly blok: readonly BlokKonten[];
}

export interface HasilPencarian {
  readonly id: IdDokumen;
  readonly judul: string;
  readonly kodeBahasa: KodeBahasa;
  readonly namaBahasa: string;
  readonly namaSeksi: string;
  readonly tersedia: boolean;
}
