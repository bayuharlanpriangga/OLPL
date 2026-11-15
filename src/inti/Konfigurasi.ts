export const INFORMASI_APLIKASI = {
  nama: 'OLPL',
  namaLengkap: 'Orias Library Programming Language',
  deskripsi:
    'Pustaka referensi 10 bahasa pemrograman dan teknologi web dalam antarmuka editorial Perak–Emas.',
  bahasaDokumen: 'id',
} as const;

export const PALET_ORIAS = {
  tinta: '#0D0D0D',
  perak: '#EEF1F4',
  es: '#A9C6DC',
  emas: '#D4A72C',
  modeTerang: {
    latar: '#EEF1F4',
    permukaan: '#F7F9FB',
    teksUtama: '#0D0D0D',
    teksSekunder: '#4A5663',
    garisFungsional: '#4F7A99',
    tautanAksen: '#7A5C00',
    sukses: '#2F7048',
    peringatan: '#A8530E',
    galat: '#A93226',
  },
  modeGelap: {
    latar: '#0D0D0D',
    permukaan: '#14171A',
    teksUtama: '#EEF1F4',
    teksSekunder: 'rgba(238, 241, 244, 0.72)',
    garisFungsional: '#A9C6DC',
    tautanAksen: '#D4A72C',
    sukses: '#4E9A6B',
    peringatan: '#D9772B',
    galat: '#D4564A',
  },
} as const;

export const BATAS_SISTEM = {
  batasSeksiTerbukaDefault: 12,
  maksHasilPencarian: 30,
  panjangKueriMaks: 120,
  durasiSalinMs: 1800,
} as const;

export type ModeTema = 'terang' | 'gelap';
