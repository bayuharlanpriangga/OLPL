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

test('sorotTeksKode mendukung JS, TS, JSX, SVG, dan bash dengan keutuhan karakter penuh', () => {
  const sampel: ReadonlyArray<readonly [string, string]> = [
    ['JS', 'const x = await fetch("/api"); // ambil'],
    ['TS', 'interface User { id: number; }'],
    ['JSX', 'return <Button label="Simpan" />;'],
    ['SVG', '<circle cx="50" cy="50" r="24" fill="#C9A227" />'],
    ['CSS', 'background: url("https://contoh.id/a.png");'],
    ['bash', 'npm install three --save'],
  ];

  for (const [bahasa, kode] of sampel) {
    const token = sorotTeksKode(kode, bahasa);
    assert.equal(token.map((t) => t.isi).join(''), kode, `Paritas karakter gagal untuk ${bahasa}`);
    assert.ok(
      token.some((t) => t.jenis !== 'biasa'),
      `Bahasa ${bahasa} tidak menghasilkan token sorotan sama sekali`,
    );
  }
});

test('sorotTeksKode menangani bahasa yang belum punya aturan khusus sebagai token biasa', () => {
  const kode = 'const x = 1;';
  assert.deepEqual(sorotTeksKode(kode, 'Rust'), [{ jenis: 'biasa', isi: kode }]);
});
