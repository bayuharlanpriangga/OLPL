// ═══ OLPL Data — HTML Elements Reference ═══
// Terinspirasi dari "HTML / Elements" di devdocs.io — 144 entri
// Dibangun otomatis dari tabel ELEMENTS di bawah supaya konsisten & mudah dirawat.
(function(){

  const ELEMENTS = [
    {id:"html", cat:"Root", desc:"Elemen akar yang membungkus seluruh isi dokumen HTML, dari head sampai body.", obsolete:false},
    {id:"base", cat:"Document Metadata", desc:"Menentukan base URL dan target default untuk semua link/relatif di dalam dokumen.", obsolete:false},
    {id:"head", cat:"Document Metadata", desc:"Wadah untuk metadata dokumen: title, meta, link, style, dan script yang tidak tampil langsung.", obsolete:false},
    {id:"link", cat:"Document Metadata", desc:"Menautkan resource eksternal ke dokumen, paling umum dipakai untuk stylesheet dan ikon.", obsolete:false},
    {id:"meta", cat:"Document Metadata", desc:"Menyimpan metadata dokumen seperti encoding, viewport, deskripsi SEO, dan Open Graph.", obsolete:false},
    {id:"style", cat:"Document Metadata", desc:"Menyisipkan aturan CSS langsung di dalam dokumen HTML tanpa file eksternal.", obsolete:false},
    {id:"title", cat:"Document Metadata", desc:"Menentukan judul dokumen yang tampil di tab browser dan hasil pencarian.", obsolete:false},
    {id:"body", cat:"Sectioning Root", desc:"Membungkus seluruh konten yang benar-benar tampil di halaman — hanya boleh ada satu per dokumen.", obsolete:false},
    {id:"address", cat:"Content Sectioning", desc:"Menandai blok informasi kontak untuk penulis atau pemilik dokumen/artikel terdekat.", obsolete:false},
    {id:"article", cat:"Content Sectioning", desc:"Konten mandiri yang tetap bermakna walau dilepas dari konteksnya — cocok untuk post blog atau berita.", obsolete:false},
    {id:"aside", cat:"Content Sectioning", desc:"Konten sampingan yang berkaitan tapi terpisah dari alur utama, seperti sidebar atau catatan pinggir.", obsolete:false},
    {id:"footer", cat:"Content Sectioning", desc:"Bagian penutup sebuah section atau halaman, biasanya berisi copyright, kontak, atau link terkait.", obsolete:false},
    {id:"header", cat:"Content Sectioning", desc:"Bagian pembuka sebuah section atau halaman, biasanya berisi judul, logo, atau navigasi.", obsolete:false},
    {id:"h1", cat:"Content Sectioning", desc:"Heading level tertinggi — idealnya hanya satu per halaman untuk menandai topik utama.", obsolete:false},
    {id:"h2", cat:"Content Sectioning", desc:"Heading level kedua, dipakai untuk sub-topik utama di bawah h1.", obsolete:false},
    {id:"h3", cat:"Content Sectioning", desc:"Heading level ketiga, sub-bagian dari h2.", obsolete:false},
    {id:"h4", cat:"Content Sectioning", desc:"Heading level keempat, sub-bagian dari h3.", obsolete:false},
    {id:"h5", cat:"Content Sectioning", desc:"Heading level kelima, jarang dipakai kecuali struktur dokumen sangat dalam.", obsolete:false},
    {id:"h6", cat:"Content Sectioning", desc:"Heading level terendah dalam hierarki heading HTML.", obsolete:false},
    {id:"hgroup", cat:"Content Sectioning", desc:"Mengelompokkan sebuah heading beserta elemen penunjang seperti subjudul menjadi satu unit.", obsolete:false},
    {id:"main", cat:"Content Sectioning", desc:"Menandai konten utama halaman yang unik, di luar navigasi/sidebar/footer yang berulang — hanya satu per halaman.", obsolete:false},
    {id:"nav", cat:"Content Sectioning", desc:"Membungkus kumpulan link navigasi utama, seperti menu situs atau breadcrumb.", obsolete:false},
    {id:"section", cat:"Content Sectioning", desc:"Bagian tematik generik dari dokumen, biasanya diawali sebuah heading.", obsolete:false},
    {id:"search", cat:"Content Sectioning", desc:"Membungkus form atau kontrol pencarian, memudahkan browser & assistive tech mengenali fitur cari.", obsolete:false},
    {id:"blockquote", cat:"Text Content", desc:"Menandai kutipan panjang dari sumber lain, biasanya ditampilkan dengan indentasi.", obsolete:false},
    {id:"dd", cat:"Text Content", desc:"Deskripsi/definisi untuk term yang didahului oleh elemen dt di dalam dl.", obsolete:false},
    {id:"div", cat:"Text Content", desc:"Kontainer generik tanpa makna semantik — dipakai saat tidak ada elemen semantik yang lebih tepat.", obsolete:false},
    {id:"dl", cat:"Text Content", desc:"Daftar deskripsi berisi pasangan term (dt) dan deskripsinya (dd).", obsolete:false},
    {id:"dt", cat:"Text Content", desc:"Term/istilah yang akan didefinisikan oleh dd berikutnya di dalam dl.", obsolete:false},
    {id:"figcaption", cat:"Text Content", desc:"Caption/keterangan untuk konten mandiri di dalam figure.", obsolete:false},
    {id:"figure", cat:"Text Content", desc:"Membungkus konten ilustratif mandiri seperti gambar, diagram, atau kode beserta captionnya.", obsolete:false},
    {id:"hr", cat:"Text Content", desc:"Garis pemisah tematik horizontal antar bagian konten.", obsolete:false},
    {id:"li", cat:"Text Content", desc:"Item dalam daftar — dipakai di dalam ul, ol, atau menu.", obsolete:false},
    {id:"menu", cat:"Text Content", desc:"Daftar item yang mewakili menu perintah/aksi, secara semantik mirip ul.", obsolete:false},
    {id:"ol", cat:"Text Content", desc:"Daftar berurutan/bernomor, dipakai saat urutan item penting.", obsolete:false},
    {id:"p", cat:"Text Content", desc:"Elemen paragraf — blok teks dasar yang paling sering dipakai.", obsolete:false},
    {id:"pre", cat:"Text Content", desc:"Menampilkan teks preformatted, mempertahankan spasi dan baris baru apa adanya.", obsolete:false},
    {id:"ul", cat:"Text Content", desc:"Daftar tak berurutan/bullet, dipakai saat urutan item tidak penting.", obsolete:false},
    {id:"a", cat:"Inline Text Semantics", desc:"Membuat hyperlink ke halaman, bagian dokumen, file, atau alamat email/telepon.", obsolete:false},
    {id:"abbr", cat:"Inline Text Semantics", desc:"Menandai singkatan atau akronim, biasanya dengan atribut title berisi kepanjangannya.", obsolete:false},
    {id:"b", cat:"Inline Text Semantics", desc:"Menebalkan teks secara visual tanpa menambah makna penting (beda dengan strong).", obsolete:false},
    {id:"bdi", cat:"Inline Text Semantics", desc:"Mengisolasi teks yang arah penulisannya mungkin berbeda dari teks sekitarnya.", obsolete:false},
    {id:"bdo", cat:"Inline Text Semantics", desc:"Memaksa arah penulisan teks (ltr/rtl) menimpa arah default.", obsolete:false},
    {id:"br", cat:"Inline Text Semantics", desc:"Menyisipkan baris baru di dalam teks, tanpa membuat paragraf baru.", obsolete:false},
    {id:"cite", cat:"Inline Text Semantics", desc:"Menandai judul suatu karya yang dirujuk, seperti judul buku atau lagu.", obsolete:false},
    {id:"code", cat:"Inline Text Semantics", desc:"Menandai potongan kode komputer inline, biasanya dirender dengan font monospace.", obsolete:false},
    {id:"data", cat:"Inline Text Semantics", desc:"Menghubungkan konten yang tampil dengan versi machine-readable lewat atribut value.", obsolete:false},
    {id:"dfn", cat:"Inline Text Semantics", desc:"Menandai istilah yang sedang didefinisikan pertama kali dalam konteksnya.", obsolete:false},
    {id:"em", cat:"Inline Text Semantics", desc:"Memberi penekanan pada teks, biasanya dirender miring — mengubah makna kalimat.", obsolete:false},
    {id:"i", cat:"Inline Text Semantics", desc:"Teks dengan nada/suasana berbeda, seperti istilah asing atau nama kapal, dirender miring.", obsolete:false},
    {id:"kbd", cat:"Inline Text Semantics", desc:"Menandai input dari keyboard, seperti tombol yang harus ditekan user.", obsolete:false},
    {id:"mark", cat:"Inline Text Semantics", desc:"Menyoroti/highlight teks yang relevan dengan konteks saat ini, seperti hasil pencarian.", obsolete:false},
    {id:"q", cat:"Inline Text Semantics", desc:"Kutipan pendek inline, browser otomatis menambahkan tanda kutip di sekelilingnya.", obsolete:false},
    {id:"rp", cat:"Inline Text Semantics", desc:"Tanda kurung fallback untuk browser yang tidak mendukung ruby annotation.", obsolete:false},
    {id:"rt", cat:"Inline Text Semantics", desc:"Teks anotasi ruby (biasanya pelafalan) yang tampil di atas karakter dasar.", obsolete:false},
    {id:"ruby", cat:"Inline Text Semantics", desc:"Membungkus anotasi ruby untuk menampilkan pelafalan di atas karakter, umum untuk teks CJK.", obsolete:false},
    {id:"s", cat:"Inline Text Semantics", desc:"Menandai teks yang sudah tidak akurat/relevan lagi, tampil dicoret.", obsolete:false},
    {id:"samp", cat:"Inline Text Semantics", desc:"Menandai contoh output dari program atau sistem komputer.", obsolete:false},
    {id:"small", cat:"Inline Text Semantics", desc:"Teks berukuran lebih kecil, biasanya untuk keterangan tambahan seperti disclaimer.", obsolete:false},
    {id:"span", cat:"Inline Text Semantics", desc:"Kontainer inline generik tanpa makna semantik — dipakai untuk styling/JS hook.", obsolete:false},
    {id:"strong", cat:"Inline Text Semantics", desc:"Menandai teks dengan tingkat kepentingan tinggi, biasanya dirender tebal.", obsolete:false},
    {id:"sub", cat:"Inline Text Semantics", desc:"Teks subscript, ditampilkan sedikit di bawah baseline seperti pada rumus kimia.", obsolete:false},
    {id:"sup", cat:"Inline Text Semantics", desc:"Teks superscript, ditampilkan sedikit di atas baseline seperti pada pangkat matematika.", obsolete:false},
    {id:"time", cat:"Inline Text Semantics", desc:"Menandai tanggal/waktu dalam format yang bisa dibaca mesin lewat atribut datetime.", obsolete:false},
    {id:"u", cat:"Inline Text Semantics", desc:"Menandai teks dengan anotasi non-tekstual, dirender bergaris bawah (bukan sekadar dekorasi).", obsolete:false},
    {id:"var", cat:"Inline Text Semantics", desc:"Menandai nama variabel dalam ekspresi matematika atau kode program.", obsolete:false},
    {id:"wbr", cat:"Inline Text Semantics", desc:"Menandai titik di mana browser boleh memotong baris jika diperlukan, tanpa memaksa jeda.", obsolete:false},
    {id:"area", cat:"Image and Multimedia", desc:"Mendefinisikan area yang bisa diklik di dalam image map, dipasangkan dengan elemen map.", obsolete:false},
    {id:"audio", cat:"Image and Multimedia", desc:"Menyematkan konten audio dengan kontrol pemutaran bawaan browser.", obsolete:false},
    {id:"img", cat:"Image and Multimedia", desc:"Menyematkan gambar ke dalam dokumen.", obsolete:false},
    {id:"map", cat:"Image and Multimedia", desc:"Mendefinisikan image map beserta area klik di dalamnya lewat elemen area.", obsolete:false},
    {id:"track", cat:"Image and Multimedia", desc:"Menambahkan trek teks seperti subtitle/caption ke elemen video atau audio.", obsolete:false},
    {id:"video", cat:"Image and Multimedia", desc:"Menyematkan konten video dengan kontrol pemutaran bawaan browser.", obsolete:false},
    {id:"embed", cat:"Embedded Content", desc:"Titik integrasi generik untuk konten atau plugin eksternal.", obsolete:false},
    {id:"iframe", cat:"Embedded Content", desc:"Menyematkan dokumen HTML lain (halaman/situs terpisah) di dalam halaman saat ini.", obsolete:false},
    {id:"object", cat:"Embedded Content", desc:"Menyematkan resource eksternal, ditangani oleh plugin browser atau native handler.", obsolete:false},
    {id:"picture", cat:"Embedded Content", desc:"Membungkus beberapa sumber gambar (source) untuk kebutuhan responsive image / art direction.", obsolete:false},
    {id:"source", cat:"Embedded Content", desc:"Mendefinisikan sumber media alternatif untuk elemen picture, audio, atau video.", obsolete:false},
    {id:"svg", cat:"SVG and MathML", desc:"Membungkus grafik vektor SVG langsung di dalam dokumen HTML.", obsolete:false},
    {id:"math", cat:"SVG and MathML", desc:"Membungkus notasi matematika yang ditulis dengan markup MathML.", obsolete:false},
    {id:"canvas", cat:"Scripting", desc:"Menyediakan area untuk menggambar grafik secara dinamis lewat JavaScript (2D/WebGL).", obsolete:false},
    {id:"noscript", cat:"Scripting", desc:"Menampilkan konten alternatif ketika JavaScript dinonaktifkan atau tidak didukung browser.", obsolete:false},
    {id:"script", cat:"Scripting", desc:"Menyisipkan atau merujuk kode JavaScript yang dieksekusi browser.", obsolete:false},
    {id:"del", cat:"Demarcating Edits", desc:"Menandai teks yang telah dihapus dari dokumen, biasanya tampil dicoret.", obsolete:false},
    {id:"ins", cat:"Demarcating Edits", desc:"Menandai teks yang baru ditambahkan ke dokumen, biasanya tampil bergaris bawah.", obsolete:false},
    {id:"caption", cat:"Table Content", desc:"Judul/keterangan untuk sebuah tabel, harus jadi elemen pertama di dalam table.", obsolete:false},
    {id:"col", cat:"Table Content", desc:"Mendefinisikan properti satu atau beberapa kolom di dalam colgroup.", obsolete:false},
    {id:"colgroup", cat:"Table Content", desc:"Mengelompokkan satu atau lebih kolom tabel untuk keperluan styling bersama.", obsolete:false},
    {id:"table", cat:"Table Content", desc:"Membuat tabel data dengan baris dan kolom.", obsolete:false},
    {id:"tbody", cat:"Table Content", desc:"Mengelompokkan baris-baris isi utama tabel, terpisah dari header dan footer.", obsolete:false},
    {id:"td", cat:"Table Content", desc:"Sel data biasa di dalam baris tabel.", obsolete:false},
    {id:"tfoot", cat:"Table Content", desc:"Mengelompokkan baris ringkasan/penutup tabel, seperti total.", obsolete:false},
    {id:"th", cat:"Table Content", desc:"Sel header tabel, memberi label pada baris atau kolom terkait.", obsolete:false},
    {id:"thead", cat:"Table Content", desc:"Mengelompokkan baris header tabel.", obsolete:false},
    {id:"tr", cat:"Table Content", desc:"Satu baris di dalam tabel, berisi sel td atau th.", obsolete:false},
    {id:"button", cat:"Forms", desc:"Tombol yang bisa diklik, dipakai untuk submit form, reset, atau aksi kustom lewat JavaScript.", obsolete:false},
    {id:"datalist", cat:"Forms", desc:"Menyediakan daftar opsi saran/autocomplete untuk input teks lewat atribut list.", obsolete:false},
    {id:"fieldset", cat:"Forms", desc:"Mengelompokkan beberapa kontrol form terkait ke dalam satu kotak visual.", obsolete:false},
    {id:"form", cat:"Forms", desc:"Membungkus kontrol input untuk mengumpulkan dan mengirim data dari user.", obsolete:false},
    {id:"input", cat:"Forms", desc:"Kontrol input serbaguna — jenisnya ditentukan atribut type (text, email, checkbox, dll).", obsolete:false},
    {id:"label", cat:"Forms", desc:"Memberi label yang bisa diklik untuk kontrol form terkait, meningkatkan aksesibilitas.", obsolete:false},
    {id:"legend", cat:"Forms", desc:"Judul untuk grup kontrol di dalam fieldset.", obsolete:false},
    {id:"meter", cat:"Forms", desc:"Menampilkan pengukuran skalar dalam rentang yang diketahui, seperti kapasitas disk.", obsolete:false},
    {id:"optgroup", cat:"Forms", desc:"Mengelompokkan beberapa option terkait di dalam select dengan label bersama.", obsolete:false},
    {id:"option", cat:"Forms", desc:"Satu pilihan opsi di dalam select atau datalist.", obsolete:false},
    {id:"output", cat:"Forms", desc:"Menampilkan hasil perhitungan/aksi, biasanya dihitung lewat JavaScript.", obsolete:false},
    {id:"progress", cat:"Forms", desc:"Menampilkan progres penyelesaian sebuah tugas, seperti progress bar upload.", obsolete:false},
    {id:"select", cat:"Forms", desc:"Membuat dropdown pilihan berisi beberapa elemen option.", obsolete:false},
    {id:"textarea", cat:"Forms", desc:"Kontrol input teks multi-baris untuk teks panjang seperti komentar atau pesan.", obsolete:false},
    {id:"details", cat:"Interactive Elements", desc:"Widget yang bisa dibuka/ditutup (toggle) untuk menyembunyikan/menampilkan konten tanpa JavaScript.", obsolete:false},
    {id:"dialog", cat:"Interactive Elements", desc:"Membuat dialog atau modal box, native dan bisa dikontrol lewat method showModal().", obsolete:false},
    {id:"summary", cat:"Interactive Elements", desc:"Judul/ringkasan yang selalu terlihat pada elemen details, berfungsi sebagai tombol toggle.", obsolete:false},
    {id:"slot", cat:"Web Components", desc:"Placeholder di dalam shadow DOM yang bisa diisi markup dari luar komponen.", obsolete:false},
    {id:"template", cat:"Web Components", desc:"Menyimpan markup HTML yang tidak langsung dirender, untuk dikloning lewat JavaScript nanti.", obsolete:false},
    {id:"acronym", cat:"Obsolete and Deprecated", desc:"Dulu dipakai untuk menandai akronim — sudah digantikan sepenuhnya oleh abbr.", obsolete:true},
    {id:"applet", cat:"Obsolete and Deprecated", desc:"Dulu dipakai untuk menyematkan applet Java — teknologi applet sudah tidak didukung browser modern.", obsolete:true},
    {id:"basefont", cat:"Obsolete and Deprecated", desc:"Dulu mengatur font default seluruh halaman — gantikan dengan CSS font-family/font-size.", obsolete:true},
    {id:"bgsound", cat:"Obsolete and Deprecated", desc:"Fitur khusus browser lama untuk memutar musik latar otomatis — gantikan dengan elemen audio.", obsolete:true},
    {id:"big", cat:"Obsolete and Deprecated", desc:"Dulu memperbesar ukuran teks — gantikan dengan CSS font-size.", obsolete:true},
    {id:"blink", cat:"Obsolete and Deprecated", desc:"Dulu membuat teks berkedip — sudah dihapus total, gantikan dengan CSS animation jika perlu.", obsolete:true},
    {id:"center", cat:"Obsolete and Deprecated", desc:"Dulu meratakan konten ke tengah — gantikan dengan CSS text-align atau margin auto.", obsolete:true},
    {id:"command", cat:"Obsolete and Deprecated", desc:"Bagian dari draf menu context bawaan yang tidak jadi distandarkan — tidak lagi didukung.", obsolete:true},
    {id:"content", cat:"Obsolete and Deprecated", desc:"Bagian dari Shadow DOM v0 lama untuk distribusi konten — digantikan elemen slot.", obsolete:true},
    {id:"dir", cat:"Obsolete and Deprecated", desc:"Dulu untuk daftar direktori file — gantikan dengan ul.", obsolete:true},
    {id:"element", cat:"Obsolete and Deprecated", desc:"Bagian dari draf awal Custom Elements v0 yang tidak jadi distandarkan.", obsolete:true},
    {id:"font", cat:"Obsolete and Deprecated", desc:"Dulu mengatur font, ukuran, dan warna teks langsung di markup — gantikan dengan CSS.", obsolete:true},
    {id:"frame", cat:"Obsolete and Deprecated", desc:"Satu bingkai di dalam frameset — model frameset sudah digantikan iframe.", obsolete:true},
    {id:"frameset", cat:"Obsolete and Deprecated", desc:"Membagi jendela browser menjadi beberapa frame — sudah digantikan iframe/layout CSS modern.", obsolete:true},
    {id:"image", cat:"Obsolete and Deprecated", desc:"Alias non-standar lama untuk img yang tidak pernah diimplementasi luas oleh browser.", obsolete:true},
    {id:"isindex", cat:"Obsolete and Deprecated", desc:"Dulu membuat input pencarian instan di halaman HTML awal — sudah lama tidak dipakai.", obsolete:true},
    {id:"keygen", cat:"Obsolete and Deprecated", desc:"Dulu menghasilkan pasangan kunci kriptografi di form — dihapus karena masalah keamanan.", obsolete:true},
    {id:"listing", cat:"Obsolete and Deprecated", desc:"Pendahulu dari pre untuk menampilkan teks preformatted — sudah digantikan pre.", obsolete:true},
    {id:"marquee", cat:"Obsolete and Deprecated", desc:"Dulu membuat teks bergerak/scroll otomatis — gantikan dengan CSS animation.", obsolete:true},
    {id:"menuitem", cat:"Obsolete and Deprecated", desc:"Dulu mendefinisikan item command di dalam menu context — dihapus dari standar.", obsolete:true},
    {id:"multicol", cat:"Obsolete and Deprecated", desc:"Draf awal layout multi-kolom sebelum distandarkan — gantikan dengan CSS column-count.", obsolete:true},
    {id:"nextid", cat:"Obsolete and Deprecated", desc:"Fitur generator ID dari era HTML sangat awal, sudah lama tidak relevan.", obsolete:true},
    {id:"nobr", cat:"Obsolete and Deprecated", desc:"Dulu mencegah teks membungkus ke baris baru — gantikan dengan CSS white-space: nowrap.", obsolete:true},
    {id:"noembed", cat:"Obsolete and Deprecated", desc:"Konten fallback untuk browser yang tidak mendukung embed — sudah tidak diperlukan lagi.", obsolete:true},
    {id:"noframes", cat:"Obsolete and Deprecated", desc:"Konten fallback untuk browser yang tidak mendukung frameset — ikut usang bersama frameset.", obsolete:true},
    {id:"plaintext", cat:"Obsolete and Deprecated", desc:"Dulu menampilkan sisa dokumen sebagai teks polos tanpa parsing HTML lebih lanjut.", obsolete:true},
    {id:"rb", cat:"Obsolete and Deprecated", desc:"Dulu menandai teks dasar dalam ruby annotation secara eksplisit — kini opsional/tidak perlu.", obsolete:true},
    {id:"rtc", cat:"Obsolete and Deprecated", desc:"Kontainer anotasi ruby tingkat lanjut yang jarang diimplementasi browser.", obsolete:true},
    {id:"shadow", cat:"Obsolete and Deprecated", desc:"Bagian dari Shadow DOM v0 lama untuk shadow root — digantikan API attachShadow modern.", obsolete:true},
    {id:"strike", cat:"Obsolete and Deprecated", desc:"Dulu menandai teks yang dicoret — gantikan dengan s atau del sesuai konteks.", obsolete:true},
  ];

  const VOID = new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "nextid", "source", "track", "wbr"]);

  function escTag(t){ return '&lt;' + t + '&gt;'; }

  ELEMENTS.forEach(el => {
    const isVoid = VOID.has(el.id);
    const openTag = escTag(el.id);
    const closeTag = '&lt;/' + el.id + '&gt;';
    const example = isVoid
      ? openTag
      : openTag + 'konten di sini' + closeTag;

    const warnBox = el.obsolete
      ? `<div class="cb warn"><div class="cbt">⚠️ Obsolete / Deprecated</div>Elemen ini sudah usang dan tidak boleh dipakai di proyek baru. Browser modern mungkin masih merendernya untuk kompatibilitas mundur, tapi dukungan bisa dicabut kapan saja.</div>`
      : `<div class="cb info"><div class="cbt">ℹ️ Kategori</div>Elemen ini termasuk dalam kelompok <strong>${el.cat}</strong> pada spesifikasi HTML.</div>`;

    D["html-e-" + el.id] = {
      t: "<" + el.id + ">",
      lang: "HTML", lk: "html", color: "#ff8c42",
      toc: ["Deskripsi", "Contoh", "Info"],
      html: `<h1 class="dt">&lt;${el.id}&gt;</h1><p class="ds">// ${el.cat}${el.obsolete ? " — OBSOLETE" : ""}</p>
<h2 class="st" id="s0">Deskripsi</h2>
<p>${el.desc}</p>
<h2 class="st" id="s1">Contoh Penulisan</h2>
<pre data-lang="HTML"><code>${example}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Info</h2>
${warnBox}`
    };
  });


})();
