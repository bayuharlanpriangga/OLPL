import { BATAS_SISTEM } from '@/inti';
import type {
  HasilPencarian,
  InfoBahasa,
  KodeBahasa,
  RingkasanBahasa,
  SeksiNavigasi,
} from '../TipePustaka';

export function normalisasiKueri(kueriMentah: string): string {
  return kueriMentah
    .slice(0, BATAS_SISTEM.panjangKueriMaks)
    .toLowerCase()
    .replaceAll('//', '')
    .trim();
}

function hitungSkorKecocokan(judul: string, kueri: string): number {
  const judulKecil = judul.toLowerCase();
  if (judulKecil === kueri) return 3;
  if (judulKecil.startsWith(kueri)) return 2;
  if (judulKecil.includes(kueri)) return 1;
  return 0;
}

export function cariTopikGlobal(
  kueriMentah: string,
  bahasaList: readonly InfoBahasa[],
  seksiPerBahasa: Readonly<Record<KodeBahasa, readonly SeksiNavigasi[]>>,
  batas: number = BATAS_SISTEM.maksHasilPencarian,
): readonly HasilPencarian[] {
  const kueri = normalisasiKueri(kueriMentah);
  if (!kueri || batas <= 0) return [];

  const kandidat: Array<{ readonly skor: number; readonly hasil: HasilPencarian }> = [];

  for (const bahasa of bahasaList) {
    const daftarSeksi = seksiPerBahasa[bahasa.kode];
    for (const seksi of daftarSeksi) {
      for (const butir of seksi.butir) {
        const skor = hitungSkorKecocokan(butir.judul, kueri);
        const cocokBahasa = bahasa.nama.toLowerCase().includes(kueri);
        if (skor > 0 || cocokBahasa) {
          kandidat.push({
            skor: skor > 0 ? skor : 0.5,
            hasil: {
              id: butir.id,
              judul: butir.judul,
              kodeBahasa: bahasa.kode,
              namaBahasa: bahasa.nama,
              namaSeksi: seksi.judul,
              tersedia: butir.tersedia,
            },
          });
        }
      }
    }
  }

  kandidat.sort((a, b) => {
    if (b.skor !== a.skor) return b.skor - a.skor;
    if (a.hasil.tersedia !== b.hasil.tersedia) return a.hasil.tersedia ? -1 : 1;
    return a.hasil.judul.localeCompare(b.hasil.judul, 'id');
  });

  return kandidat.slice(0, batas).map((item) => item.hasil);
}

export function saringSeksiBahasa(
  seksiList: readonly SeksiNavigasi[],
  kueriMentah: string,
): readonly SeksiNavigasi[] {
  const kueri = normalisasiKueri(kueriMentah);
  if (!kueri) return seksiList;

  const hasil: SeksiNavigasi[] = [];
  for (const seksi of seksiList) {
    const butirCocok = seksi.butir.filter((butir) =>
      butir.judul.toLowerCase().includes(kueri),
    );
    if (butirCocok.length > 0) {
      hasil.push({ judul: seksi.judul, butir: butirCocok });
    }
  }
  return hasil;
}

export function hitungJumlahTopikSeksi(
  seksiList: readonly SeksiNavigasi[],
): number {
  let total = 0;
  for (const seksi of seksiList) {
    total += seksi.butir.length;
  }
  return total;
}

export function saringRingkasanBahasa(
  ringkasanList: readonly RingkasanBahasa[],
  kueriMentah: string,
): readonly RingkasanBahasa[] {
  const kueri = normalisasiKueri(kueriMentah);
  if (!kueri) return ringkasanList;

  const kandidat: Array<{
    readonly skor: number;
    readonly indeks: number;
    readonly item: RingkasanBahasa;
  }> = [];

  ringkasanList.forEach((item, indeks) => {
    const kode = item.info.kode.toLowerCase();
    const nama = item.info.nama.toLowerCase();
    const ringkas = item.info.ringkasan.toLowerCase();
    const konsepCocok = item.info.konsepKunci.some((k) =>
      k.toLowerCase().includes(kueri),
    );

    let skor = 0;
    if (kode === kueri || nama === kueri) skor = 4;
    else if (kode.startsWith(kueri) || nama.startsWith(kueri)) skor = 3;
    else if (nama.includes(kueri) || kode.includes(kueri)) skor = 2;
    else if (konsepCocok || ringkas.includes(kueri)) skor = 1;

    if (skor > 0) {
      kandidat.push({ skor, indeks, item });
    }
  });

  kandidat.sort((a, b) => {
    if (b.skor !== a.skor) return b.skor - a.skor;
    return a.indeks - b.indeks;
  });

  return kandidat.map((k) => k.item);
}
