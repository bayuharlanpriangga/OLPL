import test from 'node:test';
import assert from 'node:assert/strict';
import {
  bersihkanEmojiDekoratif,
  dekodeEntitasHtml,
  uraiKontenHtml,
} from './PenguraiKontenHtml';
import { validasiKumpulanDokumen } from './ValidasiData';
import kumpulanDokumenMentahJson from '../data/dihasilkan/KumpulanDokumen.json';

test('dekodeEntitasHtml mengonversi entitas umum dengan benar', () => {
  assert.equal(dekodeEntitasHtml('&lt;div&gt; &amp; &quot;ok&quot;'), '<div> & "ok"');
  assert.equal(dekodeEntitasHtml(''), '');
});

test('bersihkanEmojiDekoratif menghapus emoji hiasan tanpa merusak teks', () => {
  assert.equal(bersihkanEmojiDekoratif('💡 const ≠ immutable'), 'const ≠ immutable');
  assert.equal(bersihkanEmojiDekoratif('ℹ️ Kategori'), 'Kategori');
  assert.equal(bersihkanEmojiDekoratif('✅ Default'), 'Default');
});

test('uraiKontenHtml menangani input kosong dan dokumen lengkap', () => {
  assert.deepEqual(uraiKontenHtml(''), []);

  const contoh = `
    <h1 class="dt">&lt;div&gt;</h1>
    <p class="ds">// Text Content</p>
    <h2 class="st" id="s0">Deskripsi</h2>
    <p>Kontainer <code>&lt;div&gt;</code> tanpa <strong>makna</strong>.</p>
    <table><tr><th>Tag</th><th>Pakai?</th></tr><tr><td><code>div</code></td><td>✅ Default</td></tr><tr><td><code>var</code></td><td>❌ Hindari</td></tr></table>
    <pre data-lang="HTML"><code>&lt;div&gt;isi&lt;/div&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
    <div class="cb tip"><div class="cbt">💡 const ≠ immutable</div><code>const</code> berarti referensi tidak berubah.</div>
    <div class="cg"><div class="card"><div class="ci">🔢</div><div class="cn">Number</div><div class="cd">Angka</div></div></div>
  `;

  const blok = uraiKontenHtml(contoh);
  assert.equal(blok.length, 8);
  assert.deepEqual(blok[0], { jenis: 'judul', isi: '<div>' });
  assert.deepEqual(blok[1], { jenis: 'ringkasan', isi: 'Text Content' });
  assert.deepEqual(blok[2], { jenis: 'subjudul', idBagian: 's0', isi: 'Deskripsi' });
  assert.equal(blok[4]?.jenis, 'tabel');
  if (blok[4]?.jenis === 'tabel') {
    assert.deepEqual(blok[4].baris[0]?.[1], [{ jenis: 'teks', isi: 'Default' }]);
    assert.deepEqual(blok[4].baris[1]?.[1], [{ jenis: 'teks', isi: 'Hindari' }]);
  }
  assert.equal(blok[5]?.jenis, 'kode');
  if (blok[5]?.jenis === 'kode') {
    assert.equal(blok[5].teksSalin, '<div>isi</div>');
    assert.ok(blok[5].token.some((t) => t.jenis === 'tag'));
  }
  assert.equal(blok[6]?.jenis, 'catatan');
  if (blok[6]?.jenis === 'catatan') {
    assert.equal(blok[6].judul, 'const ≠ immutable');
    assert.equal(blok[6].ragam, 'tip');
    assert.deepEqual(blok[6].segmen, [
      { jenis: 'kode', isi: 'const' },
      { jenis: 'teks', isi: ' berarti referensi tidak berubah.' },
    ]);
  }
  assert.equal(blok[7]?.jenis, 'kisiKartu');
  if (blok[7]?.jenis === 'kisiKartu') {
    assert.deepEqual(blok[7].item, [{ nama: 'Number', deskripsi: 'Angka' }]);
  }
});

test('seluruh 273 dokumen asli dapat diurai menjadi AST tanpa blok kosong maupun catatan kosong', () => {
  const dokumen = validasiKumpulanDokumen(kumpulanDokumenMentahJson as unknown);
  for (const [id, item] of dokumen.entries()) {
    const blok = uraiKontenHtml(item.kontenHtml);
    assert.ok(blok.length > 0, `Dokumen ${id} gagal menghasilkan blok`);
    for (const b of blok) {
      if (b.jenis === 'catatan') {
        assert.ok(b.segmen.length > 0, `Catatan pada ${id} kehilangan isi`);
        assert.ok(!/[\p{Extended_Pictographic}\u2600-\u27BF\u2139]/u.test(b.judul), `Judul catatan ${id} masih memuat emoji`);
      }
    }
  }
});
