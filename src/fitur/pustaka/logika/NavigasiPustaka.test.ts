import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cariDokumenTetangga,
  hitungRingkasanBahasa,
  tentukanStatusSeksiTerbuka,
} from './NavigasiPustaka';
import { validasiKatalogMentah, validasiKumpulanDokumen } from './ValidasiData';
import { buatIdDokumen } from '../TipePustaka';
import katalogMentahJson from '../data/dihasilkan/KatalogBahasa.json';
import kumpulanDokumenMentahJson from '../data/dihasilkan/KumpulanDokumen.json';

const dokumen = validasiKumpulanDokumen(kumpulanDokumenMentahJson as unknown);
const katalog = validasiKatalogMentah(katalogMentahJson as unknown, new Set(dokumen.keys()));

test('hitungRingkasanBahasa menghitung modul tersedia dan total secara akurat', () => {
  const infoJs = katalog.bahasa.find((b) => b.kode === 'js');
  assert.ok(infoJs);
  const ringkasan = hitungRingkasanBahasa(infoJs, katalog.seksiPerBahasa.js);
  assert.equal(ringkasan.totalModul, 17);
  assert.equal(ringkasan.modulTersedia, 17);
  assert.ok(ringkasan.totalEntri > 400);
});

test('tentukanStatusSeksiTerbuka menutup seksi besar kecuali sedang aktif atau mencari', () => {
  const seksiElemen = katalog.seksiPerBahasa.html.find((s) => s.judul === 'ELEMENTS');
  assert.ok(seksiElemen);

  assert.equal(
    tentukanStatusSeksiTerbuka({ seksi: seksiElemen, sedangMencari: false }),
    false,
  );
  assert.equal(
    tentukanStatusSeksiTerbuka({
      seksi: seksiElemen,
      idDokumenAktif: buatIdDokumen('html-e-div'),
      sedangMencari: false,
    }),
    true,
  );
  assert.equal(
    tentukanStatusSeksiTerbuka({ seksi: seksiElemen, sedangMencari: true }),
    true,
  );
});

test('cariDokumenTetangga hanya mengembalikan modul yang tersedia', () => {
  const tetangga = cariDokumenTetangga(katalog.seksiPerBahasa.js, buatIdDokumen('js-var'));
  assert.equal(tetangga.sebelumnya, null);
  assert.equal(tetangga.berikutnya?.id, 'js-op');
});
