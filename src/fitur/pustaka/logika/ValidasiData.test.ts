import test from 'node:test';
import assert from 'node:assert/strict';
import { GalatPustaka } from '@/inti';
import {
  adalahKodeBahasa,
  validasiKatalogMentah,
  validasiKumpulanDokumen,
} from './ValidasiData';
import katalogMentahJson from '../data/dihasilkan/KatalogBahasa.json';
import kumpulanDokumenMentahJson from '../data/dihasilkan/KumpulanDokumen.json';

test('adalahKodeBahasa mengenali kode sah dan menolak nilai acak', () => {
  assert.equal(adalahKodeBahasa('js'), true);
  assert.equal(adalahKodeBahasa('three'), true);
  assert.equal(adalahKodeBahasa('rust'), false);
  assert.equal(adalahKodeBahasa(123), false);
});

test('validasiKumpulanDokumen menolak input bukan objek', () => {
  assert.throws(() => validasiKumpulanDokumen(null), GalatPustaka);
  assert.throws(() => validasiKumpulanDokumen({ dokumen: { x: { id: 1 } } }), GalatPustaka);
});

test('validasiKatalogMentah menolak kode bahasa tidak dikenal', () => {
  assert.throws(
    () =>
      validasiKatalogMentah(
        { bahasa: [{ kode: 'invalid', nama: 'X', ringkasan: '', konsepKunci: [] }], seksiPerBahasa: {} },
        new Set(),
      ),
    GalatPustaka,
  );
});

test('seluruh dataset OLPL hasil ekstraksi lolos validasi penuh', () => {
  const dokumen = validasiKumpulanDokumen(kumpulanDokumenMentahJson as unknown);
  assert.equal(dokumen.size, 273);

  const katalog = validasiKatalogMentah(
    katalogMentahJson as unknown,
    new Set(dokumen.keys()),
  );
  assert.equal(katalog.bahasa.length, 10);
});
