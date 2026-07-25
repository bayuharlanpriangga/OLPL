// ═══ OLPL Data — HTML Attributes Reference ═══
(function(){

  const ATTRS = [
    {id:"accept", name:"accept", el:"&lt;input type=\"file\"&gt;",
      desc:"Membatasi tipe file apa saja yang boleh dipilih user lewat file picker. Nilainya berupa daftar ekstensi atau MIME type dipisah koma.",
      ex:`&lt;input type="file" accept="image/*"&gt;
&lt;input type="file" accept=".pdf,.docx"&gt;
&lt;input type="file" accept="image/png, image/jpeg" multiple&gt;`,
      note:"Ini cuma filter di sisi UI file picker, bukan validasi keamanan. Selalu validasi ulang tipe file di server."},

    {id:"autocomplete", name:"autocomplete", el:"&lt;form&gt;, &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;",
      desc:"Memberi hint ke browser apakah field boleh diisi otomatis dari data tersimpan, dan kategori data apa yang diharapkan.",
      ex:`&lt;input type="email" autocomplete="email"&gt;
&lt;input type="text" autocomplete="name"&gt;
&lt;input type="password" autocomplete="new-password"&gt;
&lt;form autocomplete="off"&gt;...&lt;/form&gt;`,
      note:"Nilai standar seperti \"email\", \"name\", \"tel\", \"street-address\" membantu browser mengisi form lebih akurat dan meningkatkan UX."},

    {id:"capture", name:"capture", el:"&lt;input type=\"file\"&gt;",
      desc:"Menyarankan browser mobile untuk langsung membuka kamera atau mikrofon, alih-alih membuka file manager biasa.",
      ex:`&lt;input type="file" accept="image/*" capture="environment"&gt;
&lt;input type="file" accept="image/*" capture="user"&gt;`,
      note:"\"environment\" = kamera belakang, \"user\" = kamera depan. Hanya berpengaruh di perangkat mobile yang mendukungnya."},

    {id:"content", name:"content", el:"&lt;meta&gt;",
      desc:"Menyimpan nilai/isi dari meta tag, dipasangkan dengan atribut name atau http-equiv untuk menentukan konteksnya.",
      ex:`&lt;meta name="description" content="Belajar HTML dari dasar"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;meta http-equiv="refresh" content="30"&gt;`,
      note:"Tanpa name atau http-equiv yang menyertainya, atribut content tidak punya arti apa pun bagi browser."},

    {id:"crossorigin", name:"crossorigin", el:"&lt;img&gt;, &lt;script&gt;, &lt;link&gt;, &lt;video&gt;, &lt;audio&gt;",
      desc:"Mengatur bagaimana request lintas-origin (CORS) dilakukan saat memuat resource eksternal seperti gambar, script, atau font.",
      ex:`&lt;img src="https://cdn.lain.com/foto.jpg" crossorigin="anonymous"&gt;
&lt;script src="https://cdn.lain.com/lib.js" crossorigin="anonymous"&gt;&lt;/script&gt;`,
      note:"\"anonymous\" mengirim request tanpa credential, \"use-credentials\" mengirim cookie/auth. Wajib diisi jika resource nanti dibaca lewat canvas/WebGL untuk menghindari error tainted canvas."},

    {id:"dirname", name:"dirname", el:"&lt;input&gt;, &lt;textarea&gt;",
      desc:"Membuat browser ikut mengirim arah penulisan teks (ltr/rtl) sebagai field tambahan saat form di-submit.",
      ex:`&lt;input type="text" name="komentar" dirname="komentar.dir"&gt;
&lt;!-- saat submit, server juga menerima: komentar.dir=ltr --&gt;`,
      note:"Berguna untuk aplikasi multi-bahasa yang mendukung teks Arab/Ibrani (rtl) bercampur dengan bahasa Latin (ltr)."},

    {id:"disabled", name:"disabled", el:"&lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;, &lt;fieldset&gt;, &lt;option&gt;",
      desc:"Menonaktifkan elemen form — tidak bisa difokus, diklik, atau diedit, dan nilainya tidak ikut dikirim saat form di-submit.",
      ex:`&lt;button disabled&gt;Tidak bisa diklik&lt;/button&gt;
&lt;input type="text" disabled value="Terkunci"&gt;
&lt;fieldset disabled&gt;
  &lt;input type="text"&gt; &lt;!-- ikut nonaktif karena parent disabled --&gt;
&lt;/fieldset&gt;`,
      note:"Beda dengan readonly: elemen disabled sama sekali tidak terkirim ke server, sedangkan readonly tetap terkirim."},

    {id:"elementtiming", name:"elementtiming", el:"&lt;img&gt;, &lt;video&gt;, elemen teks",
      desc:"Menandai elemen tertentu agar waktu render-nya bisa diukur lewat Element Timing API — berguna untuk memantau performa loading bagian penting halaman.",
      ex:`&lt;img src="hero.jpg" elementtiming="hero-image" alt="Banner utama"&gt;

&lt;script&gt;
new PerformanceObserver((list) =&gt; {
  console.log(list.getEntries());
}).observe({type: 'element', buffered: true});
&lt;/script&gt;`,
      note:"Bagian dari Web Vitals tooling — cocok dipakai untuk mengukur elemen kunci seperti gambar hero atau judul utama."},

    {id:"fetchpriority", name:"fetchpriority", el:"&lt;img&gt;, &lt;script&gt;, &lt;link&gt;",
      desc:"Memberi hint prioritas relatif ke browser tentang seberapa penting resource ini dimuat lebih dulu dibanding resource lain.",
      ex:`&lt;img src="hero-banner.jpg" fetchpriority="high" alt="Banner"&gt;
&lt;img src="iklan-footer.jpg" fetchpriority="low" alt="Iklan"&gt;
&lt;script src="analytics.js" fetchpriority="low"&gt;&lt;/script&gt;`,
      note:"Nilainya: \"high\", \"low\", atau \"auto\" (default). Sangat berguna untuk mempercepat Largest Contentful Paint (LCP) pada gambar hero."},

    {id:"for", name:"for", el:"&lt;label&gt;, &lt;output&gt;",
      desc:"Menghubungkan label ke elemen form lewat id-nya, atau menandai input mana saja yang memengaruhi nilai sebuah output.",
      ex:`&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;

&lt;input type="range" id="a" value="50"&gt; +
&lt;input type="range" id="b" value="30"&gt; =
&lt;output for="a b"&gt;80&lt;/output&gt;`,
      note:"Mengklik label otomatis memindahkan fokus/klik ke input yang terhubung — penting untuk aksesibilitas dan area klik yang lebih besar di mobile."},

    {id:"form", name:"form", el:"&lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;, &lt;output&gt;, &lt;fieldset&gt;",
      desc:"Menghubungkan sebuah elemen form ke &lt;form&gt; tertentu lewat id, meski elemennya secara HTML berada di luar tag &lt;form&gt; itu.",
      ex:`&lt;form id="form-login"&gt;...&lt;/form&gt;

&lt;!-- di luar form, tapi tetap ikut ter-submit ke form-login --&gt;
&lt;input type="text" name="referral" form="form-login"&gt;`,
      note:"Berguna saat layout memaksa sebuah input berada di luar struktur DOM form-nya (misalnya di dalam modal terpisah)."},

    {id:"integrity", name:"integrity", el:"&lt;script&gt;, &lt;link&gt;",
      desc:"Menyediakan hash kriptografis untuk memverifikasi bahwa resource eksternal (biasanya dari CDN) tidak dimodifikasi/disusupi sebelum dieksekusi browser.",
      ex:`&lt;script src="https://cdn.example.com/lib.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"&gt;&lt;/script&gt;`,
      note:"Dikenal sebagai Subresource Integrity (SRI). Jika hash tidak cocok, browser menolak mengeksekusi file tersebut sama sekali."},

    {id:"max", name:"max", el:"&lt;input&gt;, &lt;progress&gt;, &lt;meter&gt;",
      desc:"Menentukan nilai maksimum yang diperbolehkan untuk input numerik/tanggal, atau nilai maksimum skala pada progress/meter.",
      ex:`&lt;input type="number" min="1" max="10"&gt;
&lt;input type="date" max="2025-12-31"&gt;
&lt;progress value="70" max="100"&gt;&lt;/progress&gt;`,
      note:"Untuk input, browser akan menandai nilai di atas max sebagai out-of-range lewat Constraint Validation API."},

    {id:"maxlength", name:"maxlength", el:"&lt;input&gt;, &lt;textarea&gt;",
      desc:"Membatasi jumlah maksimum karakter yang boleh diketik user ke dalam field teks.",
      ex:`&lt;input type="text" maxlength="20" placeholder="Maks 20 karakter"&gt;
&lt;textarea maxlength="280" placeholder="Seperti batas tweet"&gt;&lt;/textarea&gt;`,
      note:"Browser mencegah user mengetik lebih dari batas ini secara langsung — beda dengan pattern yang baru divalidasi saat submit."},

    {id:"min", name:"min", el:"&lt;input&gt;, &lt;meter&gt;",
      desc:"Menentukan nilai minimum yang diperbolehkan untuk input numerik/tanggal, atau nilai minimum skala pada elemen meter.",
      ex:`&lt;input type="number" min="0"&gt;
&lt;input type="date" min="2025-01-01"&gt;
&lt;meter min="0" max="100" value="35"&gt;&lt;/meter&gt;`,
      note:"Sering dipasangkan dengan max untuk membuat rentang nilai yang valid, misalnya kuantitas pembelian 1 sampai 10."},

    {id:"minlength", name:"minlength", el:"&lt;input&gt;, &lt;textarea&gt;",
      desc:"Menentukan jumlah karakter minimum yang wajib diisi sebelum form dianggap valid untuk di-submit.",
      ex:`&lt;input type="password" minlength="8" required&gt;
&lt;textarea minlength="10" placeholder="Minimal 10 karakter"&gt;&lt;/textarea&gt;`,
      note:"Berbeda dari maxlength yang mencegah ketikan lebih, minlength baru diperiksa saat submit — user tetap bisa mengetik kurang dari batas ini."},

    {id:"multiple", name:"multiple", el:"&lt;input type=\"file\"|\"email\"&gt;, &lt;select&gt;",
      desc:"Mengizinkan lebih dari satu nilai dipilih sekaligus — beberapa file, beberapa alamat email, atau beberapa opsi di dropdown.",
      ex:`&lt;input type="file" multiple&gt;
&lt;input type="email" multiple placeholder="email1@x.com, email2@x.com"&gt;
&lt;select multiple&gt;
  &lt;option&gt;Merah&lt;/option&gt;
  &lt;option&gt;Biru&lt;/option&gt;
&lt;/select&gt;`,
      note:"Pada &lt;select multiple&gt;, user memilih beberapa opsi dengan Ctrl/Cmd+klik, dan nilainya berupa array saat dibaca lewat JavaScript."},

    {id:"pattern", name:"pattern", el:"&lt;input&gt;",
      desc:"Memvalidasi nilai input terhadap sebuah regular expression sebelum form dianggap valid untuk di-submit.",
      ex:`&lt;input type="text" pattern="[A-Za-z]{3,}" title="Minimal 3 huruf"&gt;
&lt;input type="tel" pattern="08[0-9]{9,11}" placeholder="08xxxxxxxxxx"&gt;`,
      note:"Regex otomatis dianggap \"anchored\" (seolah diapit ^ dan $), jadi harus cocok dengan seluruh nilai, bukan cuma sebagian."},

    {id:"placeholder", name:"placeholder", el:"&lt;input&gt;, &lt;textarea&gt;",
      desc:"Menampilkan teks contoh/hint di dalam field kosong, yang otomatis hilang begitu user mulai mengetik.",
      ex:`&lt;input type="search" placeholder="Cari produk..."&gt;
&lt;textarea placeholder="Tulis pesan Anda di sini"&gt;&lt;/textarea&gt;`,
      note:"Placeholder bukan pengganti label — kontrasnya sering rendah dan hilang saat user mengetik, sehingga tetap wajib memakai &lt;label&gt; yang sebenarnya."},

    {id:"readonly", name:"readonly", el:"&lt;input&gt;, &lt;textarea&gt;",
      desc:"Membuat field tidak bisa diedit user, tapi tetap bisa difokus dan nilainya tetap ikut terkirim saat form di-submit.",
      ex:`&lt;input type="text" value="user123" readonly&gt;
&lt;textarea readonly&gt;Teks ini tidak bisa diubah tapi tetap terkirim.&lt;/textarea&gt;`,
      note:"Cocok untuk menampilkan nilai yang sudah ditentukan sistem (misal ID otomatis) tapi tetap perlu ikut di-submit ke server."},

    {id:"rel", name:"rel", el:"&lt;a&gt;, &lt;link&gt;, &lt;area&gt;, &lt;form&gt;",
      desc:"Mendefinisikan hubungan/relasi antara dokumen saat ini dengan resource yang ditautkan. Nilainya bisa lebih dari satu, dipisah spasi.",
      ex:`&lt;a href="/privacy" rel="nofollow"&gt;Kebijakan Privasi&lt;/a&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;a href="https://situs-lain.com" target="_blank" rel="noopener noreferrer"&gt;Kunjungi&lt;/a&gt;`,
      note:"Nilai rel yang tersedia berbeda tergantung elemennya — lihat entri rel.* di bawah untuk daftar nilai yang paling sering dipakai."},

    {id:"rel-alternate-stylesheet", name:"rel=\"alternate stylesheet\"", el:"&lt;link&gt;",
      desc:"Mendaftarkan sebuah stylesheet alternatif yang bisa dipilih user lewat menu browser, di luar stylesheet utama halaman.",
      ex:`&lt;link rel="stylesheet" href="terang.css" title="Tema Terang"&gt;
&lt;link rel="alternate stylesheet" href="gelap.css" title="Tema Gelap"&gt;`,
      note:"Jarang dipakai di browser modern karena kebanyakan situs kini mengganti tema lewat JavaScript/CSS variable, bukan lewat menu bawaan browser."},

    {id:"rel-compression-dictionary", name:"rel=\"compression-dictionary\"", el:"&lt;link&gt;",
      desc:"Mendaftarkan sebuah dictionary kompresi bersama yang bisa dipakai browser untuk mengompresi request berikutnya lebih efisien (Compression Dictionary Transport).",
      ex:`&lt;link rel="compression-dictionary" href="/dict/shared.dat"&gt;`,
      note:"Fitur performa tingkat lanjut yang masih baru di ekosistem web platform; dukungan browser perlu dicek sebelum diandalkan di produksi."},

    {id:"rel-dns-prefetch", name:"rel=\"dns-prefetch\"", el:"&lt;link&gt;",
      desc:"Memberi hint ke browser untuk melakukan resolusi DNS domain tertentu lebih awal, sebelum benar-benar dibutuhkan.",
      ex:`&lt;link rel="dns-prefetch" href="https://fonts.googleapis.com"&gt;
&lt;link rel="dns-prefetch" href="https://cdn.analytics.com"&gt;`,
      note:"Optimasi ringan yang mempercepat koneksi ke domain eksternal (CDN, font, analytics) yang akan segera dipakai halaman."},

    {id:"rel-manifest", name:"rel=\"manifest\"", el:"&lt;link&gt;",
      desc:"Menautkan file web app manifest (.json) yang mendeskripsikan metadata aplikasi untuk fitur Progressive Web App (PWA).",
      ex:`&lt;link rel="manifest" href="/manifest.json"&gt;`,
      note:"File manifest berisi nama aplikasi, ikon, warna tema, dan mode tampilan yang dipakai saat PWA diinstall ke home screen."},

    {id:"rel-me", name:"rel=\"me\"", el:"&lt;a&gt;, &lt;link&gt;",
      desc:"Menandai bahwa tautan tersebut menunjuk ke profil lain milik orang/entitas yang sama, dipakai untuk verifikasi identitas antar situs.",
      ex:`&lt;a rel="me" href="https://mastodon.social/@username"&gt;Mastodon saya&lt;/a&gt;
&lt;a rel="me" href="https://github.com/username"&gt;GitHub saya&lt;/a&gt;`,
      note:"Dipakai luas di komunitas IndieWeb dan platform seperti Mastodon untuk fitur verifikasi tautan (centang hijau di profil)."},

    {id:"rel-modulepreload", name:"rel=\"modulepreload\"", el:"&lt;link&gt;",
      desc:"Memberi tahu browser untuk lebih awal mengunduh dan mem-parsing sebuah JavaScript module, sebelum benar-benar dieksekusi.",
      ex:`&lt;link rel="modulepreload" href="/js/app.mjs"&gt;
&lt;script type="module" src="/js/app.mjs"&gt;&lt;/script&gt;`,
      note:"Mirip dengan rel=\"preload\" tapi khusus untuk ES module, termasuk turut memuat dependency import yang dideklarasikan module tersebut."},

    {id:"rel-noopener", name:"rel=\"noopener\"", el:"&lt;a&gt;, &lt;area&gt;, &lt;form&gt;",
      desc:"Mencegah halaman tujuan (yang dibuka lewat target=\"_blank\") mendapat akses lewat window.opener ke halaman asal.",
      ex:`&lt;a href="https://situs-eksternal.com" target="_blank" rel="noopener"&gt;
  Buka di tab baru
&lt;/a&gt;`,
      note:"Penting untuk keamanan — tanpa ini, halaman tujuan berpotensi memanipulasi lokasi halaman asal lewat window.opener.location (tabnabbing)."},

    {id:"rel-noreferrer", name:"rel=\"noreferrer\"", el:"&lt;a&gt;, &lt;area&gt;, &lt;form&gt;",
      desc:"Mencegah browser mengirim header Referer ke halaman tujuan, sekaligus otomatis menerapkan efek noopener.",
      ex:`&lt;a href="https://situs-eksternal.com" target="_blank" rel="noreferrer"&gt;
  Kunjungi tanpa mengirim referrer
&lt;/a&gt;`,
      note:"Berguna saat tidak ingin situs tujuan tahu dari halaman mana pengunjung berasal, misalnya untuk tautan afiliasi atau privasi."},

    {id:"rel-preconnect", name:"rel=\"preconnect\"", el:"&lt;link&gt;",
      desc:"Memberi hint ke browser untuk membuka koneksi awal (DNS + TCP + TLS) ke sebuah origin sebelum resource dari sana benar-benar diminta.",
      ex:`&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;`,
      note:"Lebih \"berat\" dibanding dns-prefetch karena juga menyiapkan handshake TLS, cocok untuk origin yang pasti akan dipakai (font, API utama)."},

    {id:"rel-prefetch", name:"rel=\"prefetch\"", el:"&lt;link&gt;",
      desc:"Meminta browser mengunduh resource dengan prioritas rendah di waktu senggang, karena kemungkinan akan dibutuhkan segera untuk navigasi berikutnya.",
      ex:`&lt;link rel="prefetch" href="/halaman-checkout.html"&gt;`,
      note:"Cocok untuk halaman yang kemungkinan besar akan dikunjungi user selanjutnya, misalnya halaman checkout setelah keranjang belanja."},

    {id:"rel-preload", name:"rel=\"preload\"", el:"&lt;link&gt;",
      desc:"Meminta browser mengunduh resource dengan prioritas tinggi lebih awal karena pasti dibutuhkan segera oleh halaman saat ini.",
      ex:`&lt;link rel="preload" href="/fonts/heading.woff2" as="font" type="font/woff2" crossorigin&gt;
&lt;link rel="preload" href="/hero.jpg" as="image"&gt;`,
      note:"Wajib menyertakan atribut as agar browser tahu prioritas & tipe resource yang benar (font, image, script, style, dsb)."},

    {id:"required", name:"required", el:"&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;",
      desc:"Mewajibkan field diisi sebelum form bisa di-submit; browser otomatis menampilkan pesan error bawaan jika kosong.",
      ex:`&lt;input type="email" required&gt;
&lt;select required&gt;
  &lt;option value=""&gt;-- Pilih --&lt;/option&gt;
  &lt;option value="a"&gt;A&lt;/option&gt;
&lt;/select&gt;`,
      note:"Bisa di-styling lewat pseudo-class CSS :required, dan statusnya bisa dicek lewat properti validity.valueMissing di JavaScript."},

    {id:"size", name:"size", el:"&lt;input&gt;, &lt;select&gt;",
      desc:"Menentukan lebar tampilan field dalam satuan karakter (untuk input teks) atau jumlah baris opsi yang terlihat sekaligus (untuk select).",
      ex:`&lt;input type="text" size="10"&gt;
&lt;select size="4" multiple&gt;
  &lt;option&gt;Satu&lt;/option&gt;
  &lt;option&gt;Dua&lt;/option&gt;
  &lt;option&gt;Tiga&lt;/option&gt;
  &lt;option&gt;Empat&lt;/option&gt;
&lt;/select&gt;`,
      note:"Ini hanya pengaruh visual/lebar tampilan, bukan pembatas jumlah karakter yang boleh diketik — untuk itu gunakan maxlength."},

    {id:"step", name:"step", el:"&lt;input&gt;",
      desc:"Menentukan kelipatan lompatan nilai yang valid untuk input numerik/tanggal/waktu, biasanya dipakai bersama tombol panah atau slider.",
      ex:`&lt;input type="number" min="0" max="100" step="5"&gt;
&lt;input type="range" min="0" max="1" step="0.1"&gt;
&lt;input type="time" step="60"&gt; &lt;!-- kelipatan 60 detik --&gt;`,
      note:"Nilai \"any\" menonaktifkan pembatasan kelipatan sama sekali, sehingga desimal bebas diperbolehkan."},

    {id:"download", name:"download", el:"&lt;a&gt;, &lt;area&gt;",
      desc:"Membuat tautan otomatis mengunduh file alih-alih membukanya/navigasi ke sana, dengan opsi menentukan nama file hasil unduhan.",
      ex:`&lt;a href="/laporan.pdf" download&gt;Unduh Laporan&lt;/a&gt;
&lt;a href="/data.csv" download="data-penjualan-2025.csv"&gt;Unduh CSV&lt;/a&gt;`,
      note:"Hanya berfungsi penuh untuk resource same-origin. Untuk file lintas-origin, browser sering tetap membuka tab baru alih-alih mengunduh."},
  ];

  ATTRS.forEach(a => {
    D["html-a-" + a.id] = {
      t: a.name + " (attribute)",
      lang: "HTML", lk: "html", color: "#ff8c42",
      toc: ["Deskripsi", "Contoh", "Catatan"],
      html: `<h1 class="dt">${a.name}</h1><p class="ds">// Atribut HTML — berlaku pada ${a.el}</p>
<h2 class="st" id="s0">Deskripsi</h2>
<p>${a.desc}</p>
<h2 class="st" id="s1">Contoh Penggunaan</h2>
<pre data-lang="HTML"><code>${a.ex}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Catatan</h2>
<div class="cb info"><div class="cbt">ℹ️ Info</div>${a.note}</div>`
    };
  });

})();
