import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cariTopikGlobal,
  hitungJumlahTopikSeksi,
  normalisasiKueri,
  saringRingkasanBahasa,
  saringSeksiBahasa,
} from './PencarianTopik';
import { hitungRingkasanBahasa } from './NavigasiPustaka';
import { validasiKatalogMentah, validasiKumpulanDokumen } from './ValidasiData';
import katalogMentahJson from '../data/dihasilkan/KatalogBahasa.json';
import kumpulanDokumenMentahJson from '../data/dihasilkan/KumpulanDokumen.json';

const dokumen = validasiKumpulanDokumen(kumpulanDokumenMentahJson as unknown);
const katalog = validasiKatalogMentah(katalogMentahJson as unknown, new Set(dokumen.keys()));

test('normalisasiKueri menghapus awalan komentar dan membatasi panjang', () => {
  assert.equal(normalisasiKueri('  // Flexbox  '), 'flexbox');
  assert.equal(normalisasiKueri('   '), '');
  assert.equal(normalisasiKueri('a'.repeat(200)).length, 120);
});

test('cariTopikGlobal menangani kueri kosong, tidak ditemukan, dan batas', () => {
  assert.deepEqual(cariTopikGlobal('', katalog.bahasa, katalog.seksiPerBahasa), []);
  assert.deepEqual(cariTopikGlobal('zzz_tidak_ada_123', katalog.bahasa, katalog.seksiPerBahasa), []);

  const hasilFlex = cariTopikGlobal('Flexbox', katalog.bahasa, katalog.seksiPerBahasa);
  assert.ok(hasilFlex.length >= 1);
  assert.equal(hasilFlex[0]?.id, 'css-flex');

  const hasilBatas = cariTopikGlobal('a', katalog.bahasa, katalog.seksiPerBahasa, 5);
  assert.equal(hasilBatas.length, 5);
});

test('saringSeksiBahasa menyaring seksi tanpa menyertakan seksi kosong', () => {
  const hasil = saringSeksiBahasa(katalog.seksiPerBahasa.html, 'dialog');
  assert.ok(hasil.length >= 1);
  assert.ok(hasil.every((s) => s.butir.length > 0));
});

test('hitungJumlahTopikSeksi dan saringRingkasanBahasa bekerja akurat', () => {
  assert.equal(hitungJumlahTopikSeksi([]), 0);
  assert.equal(hitungJumlahTopikSeksi(katalog.seksiPerBahasa.js), 17);

  const semuaRingkasan = katalog.bahasa.map((info) =>
    hitungRingkasanBahasa(info, katalog.seksiPerBahasa[info.kode]),
  );
  assert.equal(saringRingkasanBahasa(semuaRingkasan, '').length, 10);
  assert.deepEqual(saringRingkasanBahasa(semuaRingkasan, 'tidak_ada_999'), []);

  const hasilSql = saringRingkasanBahasa(semuaRingkasan, 'sql');
  assert.equal(hasilSql[0]?.info.kode, 'sql');

  const hasilRelasional = saringRingkasanBahasa(semuaRingkasan, 'database');
  assert.ok(hasilRelasional.some((r) => r.info.kode === 'sql'));
});
