import test from 'node:test';
import assert from 'node:assert/strict';
import { sorotTeksKode } from './PenyorotKode';

test('sorotTeksKode mengembalikan array kosong untuk kode kosong', () => {
  assert.deepEqual(sorotTeksKode('', 'SQL'), []);
});

test('sorotTeksKode menjaga keutuhan teks asli saat token digabung', () => {
  const contohSql = "SELECT id, nama FROM pengguna WHERE aktif = 1 -- aktif saja";
  const token = sorotTeksKode(contohSql, 'SQL');
  assert.equal(token.map((t) => t.isi).join(''), contohSql);
  assert.ok(token.some((t) => t.jenis === 'kw' && t.isi === 'SELECT'));
  assert.ok(token.some((t) => t.jenis === 'cm'));
});

test('sorotTeksKode menangani bahasa yang belum punya aturan khusus sebagai token biasa', () => {
  const kode = 'const x = 1;';
  assert.deepEqual(sorotTeksKode(kode, 'Rust'), [{ jenis: 'biasa', isi: kode }]);
});
