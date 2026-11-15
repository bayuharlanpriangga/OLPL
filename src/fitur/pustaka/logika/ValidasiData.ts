import { GalatPustaka } from '@/inti';
import {
  KODE_BAHASA_LIST,
  buatIdDokumen,
  type ButirNavigasi,
  type DokumenMentah,
  type InfoBahasa,
  type KodeBahasa,
  type SeksiNavigasi,
} from '../TipePustaka';

export interface KatalogValid {
  readonly bahasa: readonly InfoBahasa[];
  readonly seksiPerBahasa: Readonly<Record<KodeBahasa, readonly SeksiNavigasi[]>>;
}

function adalahRekaman(nilai: unknown): nilai is Record<string, unknown> {
  return typeof nilai === 'object' && nilai !== null && !Array.isArray(nilai);
}

export function adalahKodeBahasa(nilai: unknown): nilai is KodeBahasa {
  return typeof nilai === 'string' && (KODE_BAHASA_LIST as readonly string[]).includes(nilai);
}

function validasiArrayString(nilai: unknown, namaField: string): readonly string[] {
  if (!Array.isArray(nilai) || !nilai.every((item) => typeof item === 'string')) {
    throw new GalatPustaka('DATA_TIDAK_VALID', `Field ${namaField} harus berupa daftar teks`);
  }
  return nilai;
}

function validasiInfoBahasa(nilai: unknown): InfoBahasa {
  if (!adalahRekaman(nilai)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Entri bahasa harus berupa objek');
  }
  if (!adalahKodeBahasa(nilai.kode)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Kode bahasa tidak dikenal', String(nilai.kode));
  }
  if (typeof nilai.nama !== 'string' || !nilai.nama.trim()) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Nama bahasa wajib diisi', nilai.kode);
  }
  if (typeof nilai.ringkasan !== 'string') {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Ringkasan bahasa harus teks', nilai.kode);
  }
  return {
    kode: nilai.kode,
    nama: nilai.nama,
    ringkasan: nilai.ringkasan,
    konsepKunci: validasiArrayString(nilai.konsepKunci, 'konsepKunci'),
  };
}

function validasiButirNavigasi(
  nilai: unknown,
  idTersedia: ReadonlySet<string>,
): ButirNavigasi {
  if (!adalahRekaman(nilai)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Butir navigasi harus berupa objek');
  }
  if (typeof nilai.id !== 'string' || !nilai.id.trim()) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'ID butir navigasi wajib diisi');
  }
  if (typeof nilai.judul !== 'string' || !nilai.judul.trim()) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Judul butir navigasi wajib diisi', nilai.id);
  }
  const entri = typeof nilai.jumlahEntri === 'number' && nilai.jumlahEntri > 0 ? nilai.jumlahEntri : 1;
  return {
    id: buatIdDokumen(nilai.id),
    judul: nilai.judul,
    jumlahEntri: entri,
    tersedia: idTersedia.has(nilai.id),
  };
}

export function validasiKatalogMentah(
  dataMentah: unknown,
  idTersedia: ReadonlySet<string>,
): KatalogValid {
  if (!adalahRekaman(dataMentah)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Katalog harus berupa objek');
  }
  if (!Array.isArray(dataMentah.bahasa)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Field bahasa harus berupa daftar');
  }
  if (!adalahRekaman(dataMentah.seksiPerBahasa)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Field seksiPerBahasa harus berupa objek');
  }

  const bahasa = dataMentah.bahasa.map(validasiInfoBahasa);
  const seksiMap: Partial<Record<KodeBahasa, readonly SeksiNavigasi[]>> = {};

  for (const kode of KODE_BAHASA_LIST) {
    const daftarSeksi = dataMentah.seksiPerBahasa[kode];
    if (!Array.isArray(daftarSeksi)) {
      throw new GalatPustaka('DATA_TIDAK_VALID', 'Daftar seksi tidak ditemukan', kode);
    }
    seksiMap[kode] = daftarSeksi.map((seksi) => {
      if (!adalahRekaman(seksi) || typeof seksi.judul !== 'string' || !Array.isArray(seksi.butir)) {
        throw new GalatPustaka('DATA_TIDAK_VALID', 'Format seksi navigasi tidak valid', kode);
      }
      return {
        judul: seksi.judul,
        butir: seksi.butir.map((b) => validasiButirNavigasi(b, idTersedia)),
      };
    });
  }

  return {
    bahasa,
    seksiPerBahasa: seksiMap as Record<KodeBahasa, readonly SeksiNavigasi[]>,
  };
}

export function validasiKumpulanDokumen(
  dataMentah: unknown,
): ReadonlyMap<string, DokumenMentah> {
  if (!adalahRekaman(dataMentah) || !adalahRekaman(dataMentah.dokumen)) {
    throw new GalatPustaka('DATA_TIDAK_VALID', 'Kumpulan dokumen harus berupa objek');
  }

  const peta = new Map<string, DokumenMentah>();
  for (const [kunci, entri] of Object.entries(dataMentah.dokumen)) {
    if (!adalahRekaman(entri)) {
      throw new GalatPustaka('DATA_TIDAK_VALID', 'Entri dokumen tidak valid', kunci);
    }
    if (
      typeof entri.id !== 'string' ||
      typeof entri.judul !== 'string' ||
      typeof entri.bahasaNama !== 'string' ||
      !adalahKodeBahasa(entri.kodeBahasa) ||
      typeof entri.kontenHtml !== 'string'
    ) {
      throw new GalatPustaka('DATA_TIDAK_VALID', 'Field wajib dokumen tidak lengkap', kunci);
    }
    peta.set(kunci, {
      id: buatIdDokumen(entri.id),
      judul: entri.judul,
      bahasaNama: entri.bahasaNama,
      kodeBahasa: entri.kodeBahasa,
      daftarIsi: validasiArrayString(entri.daftarIsi, `daftarIsi:${kunci}`),
      kontenHtml: entri.kontenHtml,
    });
  }
  return peta;
}
