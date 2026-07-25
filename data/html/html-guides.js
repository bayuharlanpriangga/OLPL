// ═══ OLPL Data — HTML Guides ═══
// Terinspirasi dari struktur "HTML / Guides" di devdocs.io
// 9 modules

// ─── html-g-cheatsheet ───
D["html-g-cheatsheet"]={t:"Cheatsheet",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Struktur Dokumen","Elemen Umum","Atribut Global","Referensi Cepat"],
html:`<h1 class="dt">HTML Cheatsheet</h1><p class="ds">// Rangkuman satu halaman — elemen, atribut, dan pola yang paling sering dipakai.</p>
<h2 class="st" id="s0">Struktur Dokumen Minimal</h2>
<p>Setiap halaman HTML valid dimulai dari kerangka ini. Semua konten lain dibangun di atas fondasi ini.</p>
<pre data-lang="HTML"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Judul Halaman&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  ...
&lt;/body&gt;
&lt;/html&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Elemen yang Paling Sering Dipakai</h2>
<p>Daftar elemen yang hampir selalu muncul di proyek nyata, dikelompokkan berdasarkan fungsinya.</p>
<pre data-lang="HTML"><code>&lt;!-- Struktur --&gt;
&lt;header&gt; &lt;nav&gt; &lt;main&gt; &lt;section&gt; &lt;article&gt; &lt;aside&gt; &lt;footer&gt;

&lt;!-- Teks --&gt;
&lt;h1&gt;-&lt;h6&gt; &lt;p&gt; &lt;span&gt; &lt;strong&gt; &lt;em&gt; &lt;small&gt; &lt;blockquote&gt;

&lt;!-- Daftar --&gt;
&lt;ul&gt; &lt;ol&gt; &lt;li&gt; &lt;dl&gt; &lt;dt&gt; &lt;dd&gt;

&lt;!-- Media --&gt;
&lt;img&gt; &lt;picture&gt; &lt;video&gt; &lt;audio&gt; &lt;figure&gt; &lt;figcaption&gt;

&lt;!-- Form --&gt;
&lt;form&gt; &lt;input&gt; &lt;label&gt; &lt;select&gt; &lt;textarea&gt; &lt;button&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Atribut Global Penting</h2>
<p>Atribut ini bisa dipasang di hampir semua elemen HTML, tidak terikat pada tag tertentu.</p>
<pre data-lang="HTML"><code>id="..."          &lt;!-- pengenal unik --&gt;
class="..."       &lt;!-- untuk styling / JS hook --&gt;
style="..."       &lt;!-- inline CSS --&gt;
title="..."       &lt;!-- tooltip saat hover --&gt;
data-*="..."      &lt;!-- data kustom, dibaca lewat dataset --&gt;
hidden            &lt;!-- sembunyikan elemen --&gt;
tabindex="0"      &lt;!-- urutan fokus keyboard --&gt;
contenteditable   &lt;!-- konten bisa diedit user --&gt;
draggable="true"  &lt;!-- elemen bisa di-drag --&gt;
lang="id"         &lt;!-- bahasa konten elemen --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Cara pakai cheatsheet ini</div>Gunakan halaman ini sebagai referensi cepat saat ngoding, lalu buka modul spesifik (Semantic HTML5, Form & Input, dsb.) di sidebar kalau butuh penjelasan lebih dalam.</div>`};

// ─── html-g-comments ───
D["html-g-comments"]={t:"Comments",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Sintaks Komentar","Aturan Penulisan","Kegunaan Praktis"],
html:`<h1 class="dt">HTML Comments</h1><p class="ds">// Menyisipkan catatan di source code yang tidak dirender browser.</p>
<h2 class="st" id="s0">Sintaks Dasar</h2>
<p>Komentar HTML diapit oleh <code>&lt;!--</code> dan <code>--&gt;</code>. Semua teks di antaranya diabaikan oleh browser saat merender halaman, tapi tetap terlihat siapa pun yang membuka "View Source".</p>
<pre data-lang="HTML"><code>&lt;!-- Ini komentar satu baris --&gt;
&lt;p&gt;Konten ini tetap tampil normal.&lt;/p&gt;

&lt;!--
  Ini komentar
  yang menyebar
  beberapa baris
--&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Aturan yang Perlu Diingat</h2>
<p>Komentar HTML punya beberapa batasan yang sering bikin bingung pemula.</p>
<pre data-lang="HTML"><code>&lt;!-- Tidak boleh nested / bersarang --&gt;
&lt;!-- Luar &lt;!-- Dalam --&gt; Error! --&gt;

&lt;!-- Tidak boleh diawali karakter '&gt;' atau '-&gt;' setelah &lt;!-- --&gt;

&lt;!-- Komentar tidak bisa dipakai di dalam atribut tag --&gt;
&lt;div class="box" &lt;!-- ini tidak valid --&gt;&gt;&lt;/div&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Kegunaan Praktis</h2>
<p>Komentar sering dipakai untuk menandai bagian kode, menonaktifkan sementara sebuah blok (debugging), atau meninggalkan catatan untuk developer lain.</p>
<pre data-lang="HTML"><code>&lt;!-- ===== HEADER ===== --&gt;
&lt;header&gt;...&lt;/header&gt;

&lt;!-- ===== MAIN CONTENT ===== --&gt;
&lt;main&gt;
  &lt;!-- TODO: ganti placeholder image setelah asset final siap --&gt;
  &lt;img src="placeholder.jpg" alt=""&gt;
&lt;/main&gt;

&lt;!-- &lt;section class="promo"&gt;...&lt;/section&gt; --&gt; &lt;!-- dinonaktifkan sementara --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb warn"><div class="cbt">⚠️ Jangan simpan data sensitif</div>Komentar tetap terkirim ke browser dan bisa dilihat lewat "View Source". Jangan pernah menaruh API key, password, atau catatan internal yang sensitif di dalamnya.</div>`};

// ─── html-g-validation ───
D["html-g-validation"]={t:"Constraint Validation",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Atribut Validasi","Pseudo-class CSS","Constraint Validation API","Pesan Kustom"],
html:`<h1 class="dt">Constraint Validation</h1><p class="ds">// Validasi form bawaan browser tanpa menulis satu baris pun JavaScript.</p>
<p>HTML5 menyediakan sistem validasi form built-in lewat kombinasi atribut, pseudo-class CSS, dan sebuah API JavaScript untuk kontrol yang lebih detail.</p>
<h2 class="st" id="s0">Atribut Validasi</h2>
<p>Atribut ini dipasang langsung pada elemen form dan otomatis dicek browser sebelum form di-submit.</p>
<pre data-lang="HTML"><code>&lt;input required&gt;                 &lt;!-- wajib diisi --&gt;
&lt;input type="email"&gt;             &lt;!-- harus format email valid --&gt;
&lt;input type="number" min="1" max="10"&gt;
&lt;input minlength="3" maxlength="20"&gt;
&lt;input pattern="[A-Za-z]{3,}"&gt;   &lt;!-- validasi regex --&gt;
&lt;input type="url"&gt;               &lt;!-- harus format URL valid --&gt;
&lt;form novalidate&gt;                &lt;!-- matikan validasi bawaan browser --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Pseudo-class CSS untuk Styling</h2>
<p>Browser otomatis menandai elemen form dengan pseudo-class berdasarkan status validasinya, sehingga bisa di-styling langsung dengan CSS tanpa JavaScript.</p>
<pre data-lang="HTML"><code>input:valid   { border-color: green; }
input:invalid { border-color: red; }
input:required { background: #fffbe6; }
input:optional { opacity: 0.8; }
input:in-range { border-color: green; }
input:out-of-range { border-color: red; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Constraint Validation API</h2>
<p>Untuk kontrol lebih lanjut, elemen form punya method dan properti JavaScript bawaan lewat Constraint Validation API.</p>
<pre data-lang="HTML"><code>const input = document.querySelector('input');

input.checkValidity();       // true / false
input.reportValidity();      // tampilkan popup error bawaan browser
input.validity.valueMissing; // true jika required tapi kosong
input.validity.typeMismatch; // true jika format salah (mis. email)
input.validity.patternMismatch;
input.setCustomValidity('Nomor HP harus 10-13 digit');</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Pesan Error Kustom</h2>
<p>Method <code>setCustomValidity()</code> memungkinkan menampilkan pesan error sendiri, menggantikan pesan bawaan browser.</p>
<pre data-lang="HTML"><code>const hp = document.querySelector('#hp');
hp.addEventListener('input', () =&gt; {
  if (hp.validity.patternMismatch) {
    hp.setCustomValidity('Format nomor HP tidak valid');
  } else {
    hp.setCustomValidity(''); &lt;!-- kosongkan supaya valid lagi --&gt;
  }
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Selalu validasi ulang di server</div>Validasi HTML5 hanya mencegah kesalahan input di sisi user secara UX. Karena bisa dilewati (mis. lewat DevTools atau request langsung), validasi di server tetap wajib.</div>`};

// ─── html-g-categories ───
D["html-g-categories"]={t:"Content Categories",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Apa itu Content Category","Kategori Utama","Contoh Elemen per Kategori"],
html:`<h1 class="dt">Content Categories</h1><p class="ds">// Cara spesifikasi HTML mengelompokkan elemen berdasarkan perilaku dan konteksnya.</p>
<h2 class="st" id="s0">Apa itu Content Category?</h2>
<p>Content category adalah pengelompokan elemen HTML berdasarkan karakteristik yang mereka bagi bersama — bukan berdasarkan tampilan, tapi berdasarkan aturan di mana elemen itu boleh diletakkan dan elemen apa yang boleh ada di dalamnya. Satu elemen bisa masuk ke lebih dari satu kategori sekaligus.</p>
<h2 class="st" id="s1">Kategori Utama</h2>
<pre data-lang="HTML"><code>Metadata content   &lt;!-- head, title, style, meta, link, script --&gt;
Flow content       &lt;!-- hampir semua elemen yang tampil di body --&gt;
Sectioning content &lt;!-- article, aside, nav, section --&gt;
Heading content    &lt;!-- h1-h6, hgroup --&gt;
Phrasing content   &lt;!-- teks & elemen inline: span, a, strong, img --&gt;
Embedded content   &lt;!-- img, video, audio, iframe, canvas, svg --&gt;
Interactive content&lt;!-- a, button, input, select, textarea, details --&gt;
Palpable content   &lt;!-- elemen yang punya konten "nyata", bukan kosong/hidden --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Kenapa Ini Penting?</h2>
<p>Kategori ini menentukan aturan valid-tidaknya markup. Misalnya <code>&lt;a&gt;</code> tergolong <em>flow content</em> dan <em>phrasing content</em> sekaligus, sehingga bisa dipakai di banyak tempat — sementara <code>&lt;li&gt;</code> hanya boleh diletakkan langsung di dalam <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, atau <code>&lt;menu&gt;</code> karena bukan bagian dari flow content biasa.</p>
<pre data-lang="HTML"><code>&lt;!-- Valid: a termasuk flow content, boleh di dalam p --&gt;
&lt;p&gt;Kunjungi &lt;a href="/"&gt;beranda&lt;/a&gt; kami.&lt;/p&gt;

&lt;!-- Tidak valid: li hanya boleh berada langsung di dalam ul/ol/menu --&gt;
&lt;div&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/div&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb info"><div class="cbt">ℹ️ Palpable content</div>Elemen yang kosong, memiliki <code>hidden</code>, atau hanya berisi elemen script/template dianggap bukan palpable content — browser dan screen reader menganggapnya tidak punya konten yang perlu diumumkan.</div>`};

// ─── html-g-datetime ───
D["html-g-datetime"]={t:"Date and Time Formats",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Format Tanggal (date)","Format Waktu (time)","Format Gabungan","Elemen time"],
html:`<h1 class="dt">Date and Time Formats</h1><p class="ds">// Format string tanggal/waktu yang dikenali atribut HTML seperti datetime, min, max, dan value.</p>
<p>Beberapa elemen dan atribut HTML — seperti <code>&lt;time datetime&gt;</code> atau <code>&lt;input type="date"&gt;</code> — mengharuskan format string yang mengikuti standar <strong>ISO 8601</strong> agar bisa diparse dengan benar oleh browser.</p>
<h2 class="st" id="s0">Format Tanggal</h2>
<pre data-lang="HTML"><code>2025-01-31          &lt;!-- yyyy-mm-dd, dipakai input type="date" --&gt;
2025-W05             &lt;!-- yyyy-Www, minggu ke-5, input type="week" --&gt;
2025-01              &lt;!-- yyyy-mm, input type="month" --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Format Waktu</h2>
<pre data-lang="HTML"><code>14:30                &lt;!-- HH:mm, input type="time" --&gt;
14:30:00              &lt;!-- HH:mm:ss dengan detik --&gt;
14:30:00.500          &lt;!-- dengan milidetik --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Format Gabungan (Date + Time)</h2>
<pre data-lang="HTML"><code>2025-01-31T14:30         &lt;!-- local, input type="datetime-local" --&gt;
2025-01-31T14:30:00Z     &lt;!-- UTC, huruf Z di akhir --&gt;
2025-01-31T14:30:00+07:00 &lt;!-- dengan offset zona waktu WIB --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Elemen &lt;time&gt;</h2>
<p>Atribut <code>datetime</code> pada elemen <code>&lt;time&gt;</code> memberi mesin (browser, search engine, screen reader) versi yang bisa dibaca komputer, terpisah dari teks yang tampil ke pengguna.</p>
<pre data-lang="HTML"><code>&lt;p&gt;Acara dimulai &lt;time datetime="2025-08-17T09:00:00+07:00"&gt;
  17 Agustus 2025, jam 9 pagi
&lt;/time&gt;&lt;/p&gt;

&lt;p&gt;Ditulis &lt;time datetime="2025-01-31"&gt;akhir Januari&lt;/time&gt; lalu.&lt;/p&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Kenapa harus ISO 8601?</div>Format ini tidak ambigu antar-lokal (tidak seperti "01/02/2025" yang bisa berarti 1 Feb atau 2 Jan tergantung negara), sehingga browser, database, dan API bisa saling bertukar tanggal tanpa salah tafsir.</div>`};

// ─── html-g-microdata ───
D["html-g-microdata"]={t:"Microdata",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Atribut Microdata","Contoh Struktur","Kegunaan untuk SEO"],
html:`<h1 class="dt">Microdata</h1><p class="ds">// Menandai data terstruktur langsung di dalam markup HTML biasa.</p>
<p>Microdata adalah spesifikasi WHATWG untuk menyematkan data terstruktur (seperti nama produk, harga, rating) langsung ke elemen HTML yang sudah ada, biasanya mengikuti kosakata dari <strong>schema.org</strong>.</p>
<h2 class="st" id="s0">Atribut Utama</h2>
<pre data-lang="HTML"><code>itemscope           &lt;!-- menandai elemen sebagai "item" data --&gt;
itemtype="URL"      &lt;!-- tipe item, biasanya URL schema.org --&gt;
itemprop="nama"     &lt;!-- nama properti dari item tersebut --&gt;
itemid="URL"        &lt;!-- ID unik global untuk item --&gt;
itemref="id1 id2"   &lt;!-- rujuk properti tambahan di elemen lain --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Contoh: Menandai Sebuah Produk</h2>
<pre data-lang="HTML"><code>&lt;div itemscope itemtype="https://schema.org/Product"&gt;
  &lt;h2 itemprop="name"&gt;Keyboard Mekanikal RGB&lt;/h2&gt;
  &lt;img itemprop="image" src="keyboard.jpg" alt="Keyboard mekanikal"&gt;
  &lt;p itemprop="description"&gt;Keyboard mekanikal dengan switch hot-swap.&lt;/p&gt;
  &lt;div itemprop="offers" itemscope itemtype="https://schema.org/Offer"&gt;
    &lt;span itemprop="priceCurrency" content="IDR"&gt;Rp&lt;/span&gt;
    &lt;span itemprop="price" content="850000"&gt;850.000&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Kegunaan untuk SEO & Rich Results</h2>
<p>Search engine seperti Google membaca microdata untuk menampilkan <em>rich results</em> — misalnya rating bintang, harga, atau info resep langsung di halaman hasil pencarian, tanpa user perlu membuka halamannya dulu.</p>
<div class="cb info"><div class="cbt">ℹ️ Microdata vs JSON-LD</div>Saat ini Google lebih merekomendasikan format <strong>JSON-LD</strong> (blok <code>&lt;script type="application/ld+json"&gt;</code>) karena lebih mudah dipelihara terpisah dari markup tampilan. Microdata tetap valid dan didukung, tapi JSON-LD jadi pilihan populer untuk proyek baru.</div>`};

// ─── html-g-microformats ───
D["html-g-microformats"]={t:"Microformats",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Konsep Dasar","Contoh h-card","Microformats Populer"],
html:`<h1 class="dt">Microformats</h1><p class="ds">// Data terstruktur yang ditandai lewat konvensi penamaan class HTML biasa.</p>
<h2 class="st" id="s0">Konsep Dasar</h2>
<p>Berbeda dari microdata yang punya atribut khusus (<code>itemprop</code>, dll), microformats hanya menggunakan atribut <code>class</code> standar dengan nama-nama yang sudah disepakati komunitas. Ini membuatnya sangat ringan karena tidak butuh atribut tambahan sama sekali.</p>
<h2 class="st" id="s1">Contoh: h-card (Kontak/Profil)</h2>
<pre data-lang="HTML"><code>&lt;div class="h-card"&gt;
  &lt;img class="u-photo" src="foto.jpg" alt="Foto profil"&gt;
  &lt;a class="p-name u-url" href="https://situs.dev"&gt;Rian Pratama&lt;/a&gt;
  &lt;p class="p-org"&gt;Orias Studio&lt;/p&gt;
  &lt;a class="u-email" href="mailto:rian@studio.dev"&gt;rian@studio.dev&lt;/a&gt;
  &lt;p class="p-locality"&gt;Bandung, Indonesia&lt;/p&gt;
&lt;/div&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Microformats yang Sering Dipakai</h2>
<pre data-lang="HTML"><code>h-card    &lt;!-- info kontak / profil orang atau organisasi --&gt;
h-entry   &lt;!-- postingan blog, artikel, atau status --&gt;
h-event   &lt;!-- info acara: judul, tanggal, lokasi --&gt;
h-review  &lt;!-- ulasan produk atau tempat --&gt;
h-product &lt;!-- info produk untuk katalog / listing --&gt;
rel="me"  &lt;!-- menghubungkan profil sosial milik orang yang sama --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Dipakai luas di dunia IndieWeb</div>Microformats populer di komunitas <strong>IndieWeb</strong> karena memungkinkan situs personal saling terhubung (webmention, syndication) tanpa bergantung pada API platform pihak ketiga.</div>`};

// ─── html-g-quirks ───
D["html-g-quirks"]={t:"Quirks Mode and Standards Mode",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Apa itu Rendering Mode","Cara Browser Menentukan Mode","Perbedaan Perilaku"],
html:`<h1 class="dt">Quirks Mode & Standards Mode</h1><p class="ds">// Mengapa satu baris DOCTYPE bisa menentukan cara seluruh halaman dirender.</p>
<h2 class="st" id="s0">Apa itu Rendering Mode?</h2>
<p>Browser bisa merender halaman HTML dalam beberapa mode berbeda, tergantung ada-tidaknya dan bentuk deklarasi DOCTYPE di awal dokumen. Ini adalah warisan dari era ketika banyak halaman web ditulis tanpa mengikuti standar, sehingga browser perlu tetap kompatibel dengan kode lama tersebut.</p>
<pre data-lang="HTML"><code>Standards mode        &lt;!-- render sesuai spesifikasi HTML/CSS modern --&gt;
Quirks mode           &lt;!-- meniru perilaku browser lama (IE5, dsb) --&gt;
Limited-quirks mode   &lt;!-- mode "hampir standar", sedikit pengecualian --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Cara Browser Menentukan Mode</h2>
<p>Penentuannya berdasarkan baris pertama dokumen HTML.</p>
<pre data-lang="HTML"><code>&lt;!-- Standards mode: DOCTYPE HTML5 sederhana --&gt;
&lt;!DOCTYPE html&gt;

&lt;!-- Quirks mode: tanpa DOCTYPE sama sekali --&gt;
&lt;html&gt;...&lt;/html&gt;

&lt;!-- Quirks mode: DOCTYPE lama gaya HTML 4 tanpa URL --&gt;
&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Perbedaan Perilaku yang Terasa</h2>
<p>Di quirks mode, sejumlah perhitungan CSS berubah drastis dibanding standards mode, misalnya:</p>
<pre data-lang="HTML"><code>&lt;!-- box-sizing di quirks mode cenderung berlaku seperti border-box --&gt;
&lt;!-- unit persentase pada tinggi elemen dihitung berbeda --&gt;
&lt;!-- ukuran font di dalam tabel tidak mewarisi dari parent dengan benar --&gt;
&lt;!-- vertical-align pada gambar berperilaku tidak konsisten --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb warn"><div class="cbt">⚠️ Selalu deklarasikan DOCTYPE</div>Cukup tulis <code>&lt;!DOCTYPE html&gt;</code> di baris paling atas setiap dokumen HTML agar browser konsisten memakai standards mode. Tanpa ini, layout bisa terlihat berbeda-beda di setiap browser.</div>`};

// ─── html-g-responsive ───
D["html-g-responsive"]={t:"Responsive Images",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["srcset & sizes","Elemen picture","Lazy Loading","Format Modern"],
html:`<h1 class="dt">Responsive Images</h1><p class="ds">// Menyajikan ukuran & format gambar yang tepat untuk tiap perangkat, tanpa membuang bandwidth.</p>
<h2 class="st" id="s0">Atribut srcset & sizes</h2>
<p>Atribut <code>srcset</code> memberi browser beberapa pilihan file gambar dengan lebar berbeda; <code>sizes</code> memberitahu kira-kira seberapa lebar gambar akan tampil di layout, sehingga browser bisa memilih file yang paling efisien.</p>
<pre data-lang="HTML"><code>&lt;img
  src="foto-800.jpg"
  srcset="foto-400.jpg 400w,
          foto-800.jpg 800w,
          foto-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Pemandangan gunung saat matahari terbit"&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Elemen &lt;picture&gt; untuk Art Direction</h2>
<p>Ketika bukan cuma ukuran yang perlu berubah tapi juga <em>crop</em> atau komposisi gambarnya (misalnya versi portrait untuk mobile), gunakan <code>&lt;picture&gt;</code> dengan beberapa <code>&lt;source&gt;</code>.</p>
<pre data-lang="HTML"><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="hero-mobile.jpg"&gt;
  &lt;source media="(max-width: 1200px)" srcset="hero-tablet.jpg"&gt;
  &lt;img src="hero-desktop.jpg" alt="Banner utama halaman"&gt;
&lt;/picture&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Lazy Loading Bawaan Browser</h2>
<p>Atribut <code>loading="lazy"</code> menunda pemuatan gambar sampai mendekati viewport, mengurangi beban di awal halaman tanpa perlu JavaScript tambahan.</p>
<pre data-lang="HTML"><code>&lt;img src="thumbnail.jpg" alt="Thumbnail artikel" loading="lazy"&gt;
&lt;img src="logo.svg" alt="Logo" loading="eager"&gt; &lt;!-- prioritaskan, mis. gambar above-the-fold --&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Menyajikan Format Modern (WebP/AVIF)</h2>
<p><code>&lt;picture&gt;</code> juga berguna untuk menyajikan format gambar modern ke browser yang mendukung, dengan fallback otomatis ke format lama.</p>
<pre data-lang="HTML"><code>&lt;picture&gt;
  &lt;source type="image/avif" srcset="foto.avif"&gt;
  &lt;source type="image/webp" srcset="foto.webp"&gt;
  &lt;img src="foto.jpg" alt="Fallback untuk browser lama"&gt;
&lt;/picture&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 alt tetap wajib</div>Berapa pun banyaknya varian gambar yang disediakan, atribut <code>alt</code> pada tag <code>&lt;img&gt;</code> di dalam <code>&lt;picture&gt;</code> tetap satu-satunya sumber teks alternatif — pastikan selalu diisi deskriptif.</div>`};
