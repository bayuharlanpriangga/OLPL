// ═══ OLPL Data — HTML ═══
// 3 modules

// ─── html-base ───
D["html-base"]={t:"Struktur Dasar HTML",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["DOCTYPE & html","head","meta tags","body","Semantic Structure"],
html:`<h1 class="dt">Struktur Dasar HTML</h1><p class="ds">// Kerangka setiap halaman web modern.</p>
<h2 class="st" id="s0">Template Lengkap</h2>
<p>Setiap halaman HTML harus diawali dengan deklarasi DOCTYPE dan memiliki struktur dasar yang terdiri dari elemen <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan <code>&lt;body&gt;</code>. Ini adalah kerangka minimal yang valid untuk semua browser modern.</p>
<pre data-lang="HTML"><code><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="val">"id"</span><span class="tag">&gt;</span>
<span class="tag">&lt;head&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="val">"UTF-8"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"viewport"</span> <span class="attr">content</span>=<span class="val">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"description"</span> <span class="attr">content</span>=<span class="val">"Deskripsi halaman untuk SEO"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;title&gt;</span>Judul Halaman<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="val">"icon"</span> <span class="attr">href</span>=<span class="val">"/favicon.ico"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="val">"stylesheet"</span> <span class="attr">href</span>=<span class="val">"style.css"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/head&gt;</span>
<span class="tag">&lt;body&gt;</span>
  <span class="tag">&lt;header&gt;&lt;nav&gt;</span>...<span class="tag">&lt;/nav&gt;&lt;/header&gt;</span>
  <span class="tag">&lt;main&gt;</span>
    <span class="tag">&lt;article&gt;</span>...<span class="tag">&lt;/article&gt;</span>
    <span class="tag">&lt;aside&gt;</span>...<span class="tag">&lt;/aside&gt;</span>
  <span class="tag">&lt;/main&gt;</span>
  <span class="tag">&lt;footer&gt;</span>...<span class="tag">&lt;/footer&gt;</span>
  <span class="tag">&lt;script</span> <span class="attr">src</span>=<span class="val">"app.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Kenapa DOCTYPE?</div><code>&lt;!DOCTYPE html&gt;</code> memberitahu browser bahwa dokumen ini menggunakan standar HTML5. Tanpanya, browser masuk ke "quirks mode" yang dapat menyebabkan rendering yang tidak konsisten antar browser.</div>
<h2 class="st" id="s1">Meta Tags Penting</h2>
<p>Meta tags ada di dalam <code>&lt;head&gt;</code> dan tidak terlihat di halaman, tapi sangat penting untuk SEO, tampilan di social media, dan responsivitas di mobile.</p>
<pre data-lang="HTML"><code><span class="cm">&lt;!-- Karakter encoding — selalu pakai UTF-8 agar emoji & karakter khusus tampil benar --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="val">"UTF-8"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- Responsive: paksa browser pakai lebar perangkat, zoom awal 1x --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"viewport"</span> <span class="attr">content</span>=<span class="val">"width=device-width, initial-scale=1"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- SEO: deskripsi yang muncul di hasil pencarian Google (150-160 karakter) --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"description"</span> <span class="attr">content</span>=<span class="val">"..."</span><span class="tag">&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"keywords"</span> <span class="attr">content</span>=<span class="val">"html, css, js"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- Open Graph: tampilan preview saat link dibagikan di Facebook, WhatsApp, dll --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">property</span>=<span class="val">"og:title"</span> <span class="attr">content</span>=<span class="val">"Judul"</span><span class="tag">&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">property</span>=<span class="val">"og:description"</span> <span class="attr">content</span>=<span class="val">"Deskripsi"</span><span class="tag">&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">property</span>=<span class="val">"og:image"</span> <span class="attr">content</span>=<span class="val">"/preview.jpg"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- Twitter Card: tampilan preview di Twitter/X --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"twitter:card"</span> <span class="attr">content</span>=<span class="val">"summary_large_image"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- Warna toolbar browser di Android/Chrome --&gt;</span>
<span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="val">"theme-color"</span> <span class="attr">content</span>=<span class="val">"#000a00"</span><span class="tag">&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ HTML: Semantic ═══

// ─── html-sem ───
D["html-sem"]={t:"Semantic HTML5",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Elemen Struktural","Elemen Konten","Figure & Details","ARIA","Landmark Roles"],
html:`<h1 class="dt">Semantic HTML5</h1><p class="ds">// Gunakan tag yang mendeskripsikan makna konten, bukan hanya tampilannya.</p>
<p>HTML semantik berarti menggunakan elemen yang tepat sesuai konteks dan maknanya. Ini meningkatkan aksesibilitas (screen reader), SEO (mesin pencari memahami struktur), dan keterbacaan kode. Hindari menggunakan <code>&lt;div&gt;</code> untuk segalanya jika ada elemen semantik yang lebih tepat.</p>
<h2 class="st" id="s0">Elemen Struktural</h2>
<p>Elemen-elemen ini mendefinisikan struktur halaman secara keseluruhan. Setiap elemen punya peran spesifik yang dikenali oleh browser, screen reader, dan mesin pencari.</p>
<pre data-lang="HTML"><code><span class="tag">&lt;header&gt;</span>  Logo, navigasi, hero section  <span class="tag">&lt;/header&gt;</span>
<span class="tag">&lt;nav&gt;</span>     Menu navigasi                 <span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;main&gt;</span>    Konten utama <span class="cm">(1 per halaman)</span>  <span class="tag">&lt;/main&gt;</span>
<span class="tag">&lt;article&gt;</span> Konten mandiri <span class="cm">(blog post)</span>    <span class="tag">&lt;/article&gt;</span>
<span class="tag">&lt;section&gt;</span> Bagian bertema               <span class="tag">&lt;/section&gt;</span>
<span class="tag">&lt;aside&gt;</span>   Sidebar / konten sampingan   <span class="tag">&lt;/aside&gt;</span>
<span class="tag">&lt;footer&gt;</span>  Info bawah halaman           <span class="tag">&lt;/footer&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb info"><div class="cbt">ℹ️ article vs section</div><strong>article</strong>: konten yang bisa berdiri sendiri dan masih bermakna jika diambil dari konteksnya (blog post, komentar, produk). <strong>section</strong>: bagian tematik dari halaman yang membutuhkan konteks sekitarnya.</div>
<h2 class="st" id="s1">Elemen Konten</h2>
<p>Elemen teks semantik memberikan makna pada konten tulisan, bukan hanya styling visual. Browser dan screen reader menggunakannya untuk memahami hierarki dan tujuan konten.</p>
<pre data-lang="HTML"><code><span class="tag">&lt;h1&gt;</span> sampai <span class="tag">&lt;h6&gt;</span>  Heading hierarki <span class="cm">&lt;!-- hanya 1 h1 per halaman --&gt;</span>
<span class="tag">&lt;p&gt;</span>               Paragraf
<span class="tag">&lt;blockquote&gt;</span>      Kutipan panjang
<span class="tag">&lt;cite&gt;</span>            Sumber kutipan
<span class="tag">&lt;abbr</span> <span class="attr">title</span>=<span class="val">"HyperText Markup Language"</span><span class="tag">&gt;</span>HTML<span class="tag">&lt;/abbr&gt;</span>
<span class="tag">&lt;time</span> <span class="attr">datetime</span>=<span class="val">"2025-01-01"</span><span class="tag">&gt;</span>1 Januari 2025<span class="tag">&lt;/time&gt;</span>
<span class="tag">&lt;address&gt;</span>         Informasi kontak       <span class="tag">&lt;/address&gt;</span>
<span class="tag">&lt;mark&gt;</span>            Teks yang di-highlight <span class="tag">&lt;/mark&gt;</span>
<span class="tag">&lt;code&gt;</span>            Kode inline            <span class="tag">&lt;/code&gt;</span>
<span class="tag">&lt;pre&gt;&lt;code&gt;</span>       Kode block             <span class="tag">&lt;/code&gt;&lt;/pre&gt;</span>
<span class="tag">&lt;kbd&gt;</span>Ctrl+S<span class="tag">&lt;/kbd&gt;</span> Keyboard input</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Figure &amp; Details</h2>
<p><code>&lt;figure&gt;</code> digunakan untuk membungkus konten yang merupakan ilustrasi mandiri (gambar, diagram, kode). <code>&lt;details&gt;</code> membuat konten yang bisa di-toggle tanpa JavaScript.</p>
<pre data-lang="HTML"><code><span class="tag">&lt;figure&gt;</span>
  <span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="val">"chart.png"</span> <span class="attr">alt</span>=<span class="val">"Grafik penjualan 2025"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;figcaption&gt;</span>Grafik penjualan Q1 2025<span class="tag">&lt;/figcaption&gt;</span>
<span class="tag">&lt;/figure&gt;</span>
<span class="tag">&lt;details&gt;</span>
  <span class="tag">&lt;summary&gt;</span>Klik untuk lihat detail<span class="tag">&lt;/summary&gt;</span>
  <span class="tag">&lt;p&gt;</span>Konten tersembunyi di sini...<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/details&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">ARIA Accessibility</h2>
<p>ARIA (Accessible Rich Internet Applications) menambahkan informasi aksesibilitas ke elemen HTML. Gunakan ARIA sebagai pelengkap, bukan pengganti semantik HTML yang benar. Prinsipnya: <em>gunakan elemen HTML semantik yang tepat, baru tambahkan ARIA jika diperlukan</em>.</p>
<pre data-lang="HTML"><code><span class="cm">&lt;!-- Label untuk screen reader yang tidak bisa melihat ikon --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">aria-label</span>=<span class="val">"Tutup dialog"</span><span class="tag">&gt;</span>&times;<span class="tag">&lt;/button&gt;</span>
<span class="cm">&lt;!-- Landmark roles untuk navigasi screen reader --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">role</span>=<span class="val">"dialog"</span> <span class="attr">aria-labelledby</span>=<span class="val">"title"</span> <span class="attr">aria-modal</span>=<span class="val">"true"</span><span class="tag">&gt;</span>
<span class="cm">&lt;!-- Umumkan perubahan dinamis ke screen reader --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">aria-live</span>=<span class="val">"polite"</span><span class="tag">&gt;</span>Pesan akan diumumkan<span class="tag">&lt;/div&gt;</span>
<span class="cm">&lt;!-- State elemen interaktif --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">aria-expanded</span>=<span class="val">"false"</span> <span class="attr">aria-controls</span>=<span class="val">"menu"</span><span class="tag">&gt;</span>Menu<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;nav</span> <span class="attr">id</span>=<span class="val">"menu"</span> <span class="attr">aria-hidden</span>=<span class="val">"true"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/nav&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ HTML: Form ═══

// ─── html-frm ───
D["html-frm"]={t:"Form & Input",lang:"HTML",lk:"html",color:"#ff8c42",
toc:["Form Dasar","Input Types","Select & Textarea","Validasi","Fieldset & Label","Aksesibilitas"],
html:`<h1 class="dt">Form &amp; Input Lengkap</h1><p class="ds">// Semua elemen form HTML5 — input, validasi, aksesibilitas.</p>
<p>Form HTML adalah cara utama untuk mengumpulkan data dari pengguna. Atribut <code>action</code> menentukan ke mana data dikirim, <code>method</code> menentukan metode HTTP (GET atau POST). Atribut <code>novalidate</code> menonaktifkan validasi browser bawaan, berguna saat validasi dilakukan manual lewat JavaScript.</p>
<h2 class="st" id="s0">Form Dasar</h2>
<pre data-lang="HTML"><code><span class="tag">&lt;form</span> <span class="attr">action</span>=<span class="val">"/submit"</span> <span class="attr">method</span>=<span class="val">"POST"</span> <span class="attr">novalidate</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="val">"nama"</span><span class="tag">&gt;</span>Nama:<span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"text"</span> <span class="attr">id</span>=<span class="val">"nama"</span> <span class="attr">name</span>=<span class="val">"nama"</span>
    <span class="attr">placeholder</span>=<span class="val">"Masukkan nama"</span> <span class="attr">required</span> <span class="attr">minlength</span>=<span class="val">"2"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"submit"</span><span class="tag">&gt;</span>Kirim<span class="tag">&lt;/button&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="val">"reset"</span><span class="tag">&gt;</span>Reset<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;/form&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 Selalu pasangkan label dengan input</div>Gunakan <code>for</code> di label yang menunjuk ke <code>id</code> input. Ini meningkatkan aksesibilitas dan area klik — klik label juga akan fokus ke input.</div>
<h2 class="st" id="s1">Input Types</h2>
<p>HTML5 menambahkan banyak tipe input baru yang memiliki validasi dan UI bawaan di browser. Gunakan tipe yang tepat agar browser bisa memunculkan keyboard yang sesuai di mobile dan memvalidasi format secara otomatis.</p>
<pre data-lang="HTML"><code><span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"text"</span>           <span class="attr">name</span>=<span class="val">"nama"</span><span class="tag">&gt;</span>           <span class="cm">&lt;!-- teks bebas --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"email"</span>          <span class="attr">name</span>=<span class="val">"email"</span><span class="tag">&gt;</span>          <span class="cm">&lt;!-- validasi format email --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"password"</span>       <span class="attr">name</span>=<span class="val">"pass"</span> <span class="attr">minlength</span>=<span class="val">"8"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"number"</span>         <span class="attr">name</span>=<span class="val">"qty"</span> <span class="attr">min</span>=<span class="val">"1"</span> <span class="attr">max</span>=<span class="val">"100"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"tel"</span>            <span class="attr">name</span>=<span class="val">"phone"</span><span class="tag">&gt;</span>          <span class="cm">&lt;!-- keyboard angka di mobile --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"url"</span>            <span class="attr">name</span>=<span class="val">"website"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"date"</span>           <span class="attr">name</span>=<span class="val">"tgl"</span><span class="tag">&gt;</span>            <span class="cm">&lt;!-- date picker bawaan --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"datetime-local"</span> <span class="attr">name</span>=<span class="val">"dt"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"color"</span>          <span class="attr">name</span>=<span class="val">"warna"</span><span class="tag">&gt;</span>          <span class="cm">&lt;!-- color picker --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"range"</span>          <span class="attr">name</span>=<span class="val">"vol"</span> <span class="attr">min</span>=<span class="val">"0"</span> <span class="attr">max</span>=<span class="val">"100"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"file"</span>           <span class="attr">name</span>=<span class="val">"foto"</span> <span class="attr">accept</span>=<span class="val">"image/*"</span> <span class="attr">multiple</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"checkbox"</span>       <span class="attr">name</span>=<span class="val">"setuju"</span> <span class="attr">value</span>=<span class="val">"1"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"radio"</span>          <span class="attr">name</span>=<span class="val">"gender"</span> <span class="attr">value</span>=<span class="val">"L"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"hidden"</span>         <span class="attr">name</span>=<span class="val">"token"</span> <span class="attr">value</span>=<span class="val">"abc123"</span><span class="tag">&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="val">"search"</span>         <span class="attr">name</span>=<span class="val">"q"</span> <span class="attr">list</span>=<span class="val">"saran"</span><span class="tag">&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Select, Textarea, Datalist</h2>
<pre data-lang="HTML"><code><span class="tag">&lt;select</span> <span class="attr">name</span>=<span class="val">"kota"</span> <span class="attr">required</span><span class="tag">&gt;</span>
  <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="val">""</span><span class="tag">&gt;</span>-- Pilih Kota --<span class="tag">&lt;/option&gt;</span>
  <span class="tag">&lt;optgroup</span> <span class="attr">label</span>=<span class="val">"Jawa"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="val">"jkt"</span><span class="tag">&gt;</span>Jakarta<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="val">"bdg"</span><span class="tag">&gt;</span>Bandung<span class="tag">&lt;/option&gt;</span>
  <span class="tag">&lt;/optgroup&gt;</span>
<span class="tag">&lt;/select&gt;</span>
<span class="tag">&lt;textarea</span> <span class="attr">name</span>=<span class="val">"pesan"</span> <span class="attr">rows</span>=<span class="val">"4"</span> <span class="attr">cols</span>=<span class="val">"50"</span>
  <span class="attr">placeholder</span>=<span class="val">"Tulis pesan..."</span><span class="tag">&gt;&lt;/textarea&gt;</span>
<span class="cm">&lt;!-- Autocomplete dengan datalist --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">list</span>=<span class="val">"bahasa"</span> <span class="attr">name</span>=<span class="val">"lang"</span><span class="tag">&gt;</span>
<span class="tag">&lt;datalist</span> <span class="attr">id</span>=<span class="val">"bahasa"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="val">"JavaScript"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="val">"Python"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/datalist&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Validasi HTML5</h2>
<p>HTML5 menyediakan validasi bawaan browser tanpa perlu JavaScript. Atribut validasi ini menghasilkan pesan error otomatis saat form di-submit. Gunakan <code>novalidate</code> di elemen <code>&lt;form&gt;</code> jika ingin membuat UI validasi kustom sendiri.</p>
<pre data-lang="HTML"><code><span class="attr">required</span>          <span class="cm">&lt;!-- wajib diisi --&gt;</span>
<span class="attr">minlength</span>=<span class="val">"3"</span>     <span class="cm">&lt;!-- minimal panjang string --&gt;</span>
<span class="attr">maxlength</span>=<span class="val">"100"</span>   <span class="cm">&lt;!-- maksimal panjang string --&gt;</span>
<span class="attr">min</span>=<span class="val">"0"</span> <span class="attr">max</span>=<span class="val">"100"</span> <span class="cm">&lt;!-- range angka / tanggal --&gt;</span>
<span class="attr">pattern</span>=<span class="val">"[A-Za-z]+"</span> <span class="cm">&lt;!-- validasi dengan regex --&gt;</span>
<span class="attr">type</span>=<span class="val">"email"</span>      <span class="cm">&lt;!-- validasi format email --&gt;</span>
<span class="attr">type</span>=<span class="val">"url"</span>        <span class="cm">&lt;!-- validasi format URL --&gt;</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ Python: Fungsi ═══
