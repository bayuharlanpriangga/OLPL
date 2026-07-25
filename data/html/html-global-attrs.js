// ═══ OLPL Data — HTML Global Attributes Reference ═══
// Terinspirasi dari "HTML / Global attributes" di devdocs.io — 35 entri
// Atribut yang bisa dipasang di HAMPIR SEMUA elemen HTML, tidak terikat tag tertentu.
(function(){

  const GATTRS = [
    {id:"accesskey", name:"accesskey",
      desc:"Menentukan tombol pintasan keyboard untuk memfokuskan/mengaktifkan elemen, biasanya dikombinasikan dengan Alt atau Ctrl tergantung browser & OS.",
      ex:`&lt;button accesskey="s"&gt;Simpan&lt;/button&gt;
&lt;a href="#main" accesskey="m"&gt;Ke konten utama&lt;/a&gt;`,
      note:"Kombinasi tombol modifier berbeda-beda antar browser (Alt+Shift+s di Firefox, Alt+s di Chrome Windows, dsb), jadi jangan terlalu diandalkan sebagai satu-satunya cara akses."},

    {id:"autocapitalize", name:"autocapitalize",
      desc:"Mengatur bagaimana browser mobile otomatis mengkapitalisasi teks yang diketik user ke dalam elemen editable.",
      ex:`&lt;input type="text" autocapitalize="words"&gt;
&lt;textarea autocapitalize="sentences"&gt;&lt;/textarea&gt;`,
      note:"Nilai umum: \"none\", \"sentences\", \"words\", \"characters\". Hanya berlaku di perangkat dengan keyboard virtual (mobile)."},

    {id:"autocorrect", name:"autocorrect",
      desc:"Mengaktifkan atau menonaktifkan koreksi otomatis ejaan pada elemen input teks yang bisa diedit.",
      ex:`&lt;input type="text" autocorrect="off"&gt;
&lt;textarea autocorrect="on"&gt;&lt;/textarea&gt;`,
      note:"Berguna dimatikan untuk field seperti username, kode kupon, atau alamat email di mana koreksi otomatis justru mengganggu."},

    {id:"autofocus", name:"autofocus",
      desc:"Membuat elemen otomatis mendapat fokus begitu halaman selesai dimuat, tanpa perlu diklik user.",
      ex:`&lt;input type="text" autofocus placeholder="Langsung fokus di sini"&gt;`,
      note:"Hanya boleh dipasang di satu elemen per halaman. Pemakaian berlebihan bisa mengganggu pengguna screen reader karena fokus tiba-tiba berpindah."},

    {id:"class", name:"class",
      desc:"Menetapkan satu atau lebih nama kelas ke elemen, dipisah spasi, dipakai untuk styling CSS atau seleksi lewat JavaScript.",
      ex:`&lt;div class="card highlight"&gt;...&lt;/div&gt;
&lt;p class="text-muted"&gt;Keterangan tambahan&lt;/p&gt;`,
      note:"Atribut paling sering dipakai di seluruh HTML — jembatan utama antara markup dan CSS/JS."},

    {id:"contenteditable", name:"contenteditable",
      desc:"Membuat konten elemen bisa diedit langsung oleh user di dalam browser, seperti rich text editor sederhana.",
      ex:`&lt;div contenteditable="true"&gt;Klik dan edit teks ini langsung&lt;/div&gt;
&lt;p contenteditable="plaintext-only"&gt;Hanya teks polos, tanpa formatting&lt;/p&gt;`,
      note:"Dasar dari banyak WYSIWYG editor berbasis browser. Nilai \"plaintext-only\" mencegah user menempel HTML berformat dari clipboard."},

    {id:"data-*", name:"data-*",
      desc:"Kelompok atribut kustom untuk menyimpan data tambahan milik aplikasi langsung di elemen HTML, dibaca lewat properti dataset di JavaScript.",
      ex:`&lt;div data-user-id="482" data-role="admin"&gt;...&lt;/div&gt;

&lt;script&gt;
const el = document.querySelector('div');
console.log(el.dataset.userId); // "482"
&lt;/script&gt;`,
      note:"Nama setelah 'data-' otomatis dikonversi ke camelCase saat diakses lewat dataset (data-user-id → dataset.userId)."},

    {id:"dir", name:"dir",
      desc:"Menentukan arah penulisan teks di dalam elemen: kiri-ke-kanan, kanan-ke-kiri, atau otomatis berdasarkan kontennya.",
      ex:`&lt;p dir="rtl"&gt;نص باللغة العربية&lt;/p&gt;
&lt;p dir="auto"&gt;Terdeteksi otomatis dari karakter pertama&lt;/p&gt;`,
      note:"Nilai: \"ltr\", \"rtl\", atau \"auto\". Penting untuk mendukung bahasa Arab, Ibrani, dan bahasa RTL lainnya."},

    {id:"draggable", name:"draggable",
      desc:"Menentukan apakah elemen bisa di-drag oleh user, dipakai bersama Drag and Drop API di JavaScript.",
      ex:`&lt;div draggable="true" ondragstart="event.dataTransfer.setData('text', 'item-1')"&gt;
  Seret saya
&lt;/div&gt;`,
      note:"Gambar dan link secara default sudah draggable tanpa perlu atribut ini; elemen lain butuh draggable=\"true\" secara eksplisit."},

    {id:"enterkeyhint", name:"enterkeyhint",
      desc:"Memberi hint ke keyboard virtual mobile mengenai label/aksi apa yang sebaiknya ditampilkan pada tombol Enter.",
      ex:`&lt;input type="text" enterkeyhint="search" placeholder="Cari..."&gt;
&lt;input type="text" enterkeyhint="send"&gt;`,
      note:"Nilai umum: \"enter\", \"done\", \"go\", \"next\", \"previous\", \"search\", \"send\" — meningkatkan UX form di perangkat mobile."},

    {id:"exportparts", name:"exportparts",
      desc:"Mengekspos bagian (part) dari shadow DOM komponen kustom agar bisa di-styling dari luar komponen tersebut.",
      ex:`&lt;my-card exportparts="header, body"&gt;&lt;/my-card&gt;

&lt;style&gt;
my-card::part(header) { background: #f0f0f0; }
&lt;/style&gt;`,
      note:"Dipakai dalam konteks Web Components — melengkapi atribut part yang dideklarasikan di dalam shadow DOM komponen."},

    {id:"hidden", name:"hidden",
      desc:"Menyembunyikan elemen sepenuhnya dari tampilan visual dan dari pohon aksesibilitas (screen reader).",
      ex:`&lt;div hidden&gt;Konten ini tidak tampil sama sekali&lt;/div&gt;
&lt;p hidden="until-found"&gt;Bisa ditemukan lewat fitur cari browser&lt;/p&gt;`,
      note:"Berbeda dari CSS display:none secara semantik — hidden menyatakan elemen memang belum relevan, bukan sekadar disembunyikan visual."},

    {id:"id", name:"id",
      desc:"Memberi pengenal unik ke sebuah elemen dalam satu dokumen, dipakai untuk anchor link, styling CSS, atau seleksi JavaScript.",
      ex:`&lt;h2 id="tentang-kami"&gt;Tentang Kami&lt;/h2&gt;
&lt;a href="#tentang-kami"&gt;Loncat ke bagian ini&lt;/a&gt;`,
      note:"Nilai id harus unik di seluruh dokumen — jangan dipakai berulang di lebih dari satu elemen."},

    {id:"inert", name:"inert",
      desc:"Membuat elemen beserta seluruh anaknya tidak bisa difokus, diklik, atau dijangkau screen reader — seolah 'lembam'.",
      ex:`&lt;div inert&gt;
  &lt;button&gt;Tidak bisa diklik selama parent inert&lt;/button&gt;
&lt;/div&gt;`,
      note:"Sangat berguna untuk menonaktifkan konten di belakang modal/dialog yang sedang terbuka, tanpa perlu menonaktifkan tiap elemen satu-satu."},

    {id:"inputmode", name:"inputmode",
      desc:"Memberi hint jenis keyboard virtual apa yang sebaiknya muncul saat elemen difokus di perangkat mobile.",
      ex:`&lt;input type="text" inputmode="numeric"&gt;
&lt;input type="text" inputmode="email"&gt;
&lt;div contenteditable inputmode="decimal"&gt;&lt;/div&gt;`,
      note:"Berbeda dari type=\"number\" pada input, inputmode hanya memengaruhi tampilan keyboard, bukan validasi nilainya."},

    {id:"is", name:"is",
      desc:"Memungkinkan elemen HTML bawaan (seperti button) berperilaku sebagai custom element yang sudah didaftarkan, tanpa mengganti nama tag-nya.",
      ex:`&lt;button is="fancy-button"&gt;Tombol Kustom&lt;/button&gt;`,
      note:"Dikenal sebagai 'customized built-in element' dalam spesifikasi Web Components — dukungan browser masih terbatas (belum di Safari)."},

    {id:"itemid", name:"itemid",
      desc:"Memberi ID global unik untuk item microdata, biasanya berupa URL yang merujuk ke identitas resmi item tersebut.",
      ex:`&lt;div itemscope itemtype="https://schema.org/Book" itemid="urn:isbn:978-0-12345-678-9"&gt;
  ...
&lt;/div&gt;`,
      note:"Hanya valid dipasang bersamaan dengan itemscope dan itemtype pada elemen yang sama."},

    {id:"itemprop", name:"itemprop",
      desc:"Menandai elemen sebagai properti dari item microdata terdekat, memberi nama pada nilai yang dikandungnya.",
      ex:`&lt;div itemscope itemtype="https://schema.org/Person"&gt;
  &lt;span itemprop="name"&gt;Budi Santoso&lt;/span&gt;
&lt;/div&gt;`,
      note:"Lihat modul Guides → Microdata untuk penjelasan lebih lengkap tentang itemscope, itemprop, dan itemtype."},

    {id:"itemref", name:"itemref",
      desc:"Merujuk elemen lain (lewat id) yang propertinya harus ikut dianggap sebagai bagian dari item microdata saat ini, meski secara DOM berada di luar itemscope.",
      ex:`&lt;div itemscope itemtype="https://schema.org/Product" itemref="harga"&gt;
  &lt;span itemprop="name"&gt;Sepatu Lari&lt;/span&gt;
&lt;/div&gt;
&lt;p id="harga" itemprop="price"&gt;350000&lt;/p&gt;`,
      note:"Berguna saat struktur DOM tidak memungkinkan semua properti item berada langsung di dalam elemen itemscope."},

    {id:"itemscope", name:"itemscope",
      desc:"Menandai elemen sebagai awal dari sebuah item data microdata baru — semua itemprop di dalamnya jadi properti item ini.",
      ex:`&lt;div itemscope itemtype="https://schema.org/Recipe"&gt;
  &lt;h1 itemprop="name"&gt;Nasi Goreng&lt;/h1&gt;
&lt;/div&gt;`,
      note:"Atribut boolean — cukup ditulis itemscope tanpa nilai untuk mengaktifkannya."},

    {id:"itemtype", name:"itemtype",
      desc:"Menentukan kosakata/vocabulary (biasanya URL schema.org) yang dipakai untuk mendefinisikan arti setiap itemprop dalam item microdata.",
      ex:`&lt;div itemscope itemtype="https://schema.org/Event"&gt;
  &lt;span itemprop="name"&gt;Konser Musik&lt;/span&gt;
&lt;/div&gt;`,
      note:"Wajib dipasangkan dengan itemscope di elemen yang sama — tanpa itemscope, itemtype tidak berefek apa pun."},

    {id:"lang", name:"lang",
      desc:"Menentukan bahasa konten elemen memakai kode bahasa standar (BCP 47), membantu screen reader dan mesin pencari.",
      ex:`&lt;html lang="id"&gt;
&lt;p lang="en"&gt;This paragraph is in English.&lt;/p&gt;`,
      note:"Idealnya selalu dipasang minimal di elemen &lt;html&gt; — memengaruhi pelafalan screen reader dan saran terjemahan browser."},

    {id:"nonce", name:"nonce",
      desc:"Nilai kriptografis sekali pakai yang mengizinkan sebuah &lt;script&gt; atau &lt;style&gt; inline dieksekusi meski kebijakan Content-Security-Policy ketat.",
      ex:`&lt;script nonce="r4nd0mBase64Str1ng"&gt;
  console.log('Diizinkan CSP karena nonce cocok');
&lt;/script&gt;`,
      note:"Nilai nonce harus digenerate baru di server untuk setiap request dan dicocokkan dengan header CSP — jangan pernah dihardcode statis."},

    {id:"part", name:"part",
      desc:"Menandai sebuah elemen di dalam shadow DOM sebagai 'bagian' yang bisa di-styling dari luar lewat pseudo-element ::part().",
      ex:`&lt;template id="tpl"&gt;
  &lt;div part="wrapper"&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
my-el::part(wrapper) { border: 1px solid #ccc; }
&lt;/style&gt;`,
      note:"Bekerja berpasangan dengan exportparts saat part perlu diteruskan lebih dari satu level shadow DOM."},

    {id:"popover", name:"popover",
      desc:"Membuat elemen berperilaku sebagai popover native browser — muncul di atas konten lain dan bisa ditutup dengan klik di luar area atau tombol Esc.",
      ex:`&lt;button popovertarget="info"&gt;Info&lt;/button&gt;
&lt;div id="info" popover&gt;Ini konten popover native browser.&lt;/div&gt;`,
      note:"Tidak butuh JavaScript maupun z-index manual — browser otomatis menanganinya lewat top layer, termasuk fokus dan penutupan."},

    {id:"slot", name:"slot",
      desc:"Menetapkan elemen mana yang akan ditempatkan di dalam slot bernama tertentu pada shadow DOM sebuah custom element.",
      ex:`&lt;my-card&gt;
  &lt;span slot="title"&gt;Judul Kartu&lt;/span&gt;
&lt;/my-card&gt;`,
      note:"Berpasangan dengan elemen &lt;slot name=\"title\"&gt; yang dideklarasikan di dalam shadow DOM komponennya."},

    {id:"spellcheck", name:"spellcheck",
      desc:"Mengaktifkan atau menonaktifkan pemeriksaan ejaan bawaan browser pada elemen yang bisa diedit.",
      ex:`&lt;textarea spellcheck="false"&gt;&lt;/textarea&gt;
&lt;div contenteditable spellcheck="true"&gt;&lt;/div&gt;`,
      note:"Berguna dimatikan untuk field kode, username, atau istilah teknis yang sering salah ditandai sebagai typo."},

    {id:"style", name:"style",
      desc:"Menyisipkan aturan CSS inline langsung pada satu elemen, berlaku hanya untuk elemen tersebut.",
      ex:`&lt;p style="color: red; font-weight: bold;"&gt;Teks penting&lt;/p&gt;`,
      note:"Sebaiknya dipakai secukupnya — styling lewat class dan file CSS terpisah jauh lebih mudah dirawat untuk proyek besar."},

    {id:"tabindex", name:"tabindex",
      desc:"Mengatur apakah elemen bisa difokus lewat keyboard (Tab) dan menentukan urutan fokusnya.",
      ex:`&lt;div tabindex="0"&gt;Bisa di-Tab, urutan alami&lt;/div&gt;
&lt;div tabindex="-1"&gt;Bisa difokus lewat JS, tapi dilewati Tab&lt;/div&gt;
&lt;div tabindex="2"&gt;Urutan fokus kustom&lt;/div&gt;`,
      note:"Hindari nilai positif (1, 2, 3, ...) di proyek besar karena membuat urutan Tab sulit diprediksi — gunakan 0 atau -1 saja bila memungkinkan."},

    {id:"title", name:"title",
      desc:"Menampilkan teks tooltip saat elemen di-hover, dan memberi konteks tambahan bagi assistive technology.",
      ex:`&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
&lt;img src="ikon.svg" title="Simpan dokumen" alt="Ikon simpan"&gt;`,
      note:"Jangan jadikan title satu-satunya sumber informasi penting — tooltip tidak muncul di perangkat sentuh tanpa hover."},

    {id:"translate", name:"translate",
      desc:"Memberi hint ke fitur terjemahan browser apakah konten elemen boleh diterjemahkan atau harus dibiarkan apa adanya.",
      ex:`&lt;p translate="no"&gt;OLPL — Orias Library Programming Language&lt;/p&gt;
&lt;p translate="yes"&gt;Paragraf ini boleh diterjemahkan.&lt;/p&gt;`,
      note:"Cocok dipasang \"no\" pada nama merek, kode, atau istilah teknis yang tidak boleh ikut diterjemahkan mesin."},

    {id:"writingsuggestions", name:"writingsuggestions",
      desc:"Mengaktifkan/menonaktifkan saran penulisan berbasis AI bawaan browser (seperti auto-suggest teks) pada elemen yang bisa diedit.",
      ex:`&lt;textarea writingsuggestions="false"&gt;&lt;/textarea&gt;`,
      note:"Atribut yang relatif baru di ekosistem web platform; dukungan browser masih terus berkembang."},

    {id:"virtualkeyboardpolicy", name:"virtualkeyboardpolicy",
      desc:"Mengatur apakah keyboard virtual mobile muncul otomatis atau harus dikontrol manual lewat VirtualKeyboard API saat elemen editable difokus.",
      ex:`&lt;div contenteditable virtualkeyboardpolicy="manual"&gt;&lt;/div&gt;`,
      note:"Berguna untuk aplikasi web yang membangun UI keyboard kustomnya sendiri, seperti editor kode di mobile."},

    {id:"role", name:"role",
      desc:"Bagian dari ARIA — mendefinisikan peran/fungsi elemen bagi assistive technology, terutama saat elemen HTML semantiknya tidak tersedia.",
      ex:`&lt;div role="button" tabindex="0"&gt;Tombol Kustom&lt;/div&gt;
&lt;div role="alert"&gt;Data berhasil disimpan!&lt;/div&gt;`,
      note:"Prinsip utama ARIA: 'No ARIA is better than Bad ARIA' — selalu utamakan elemen HTML semantik asli (button, nav, dsb) sebelum menambah role manual."},

    {id:"aria-*", name:"aria-*",
      desc:"Kelompok atribut ARIA (aria-label, aria-hidden, aria-expanded, aria-live, dst.) yang menambahkan informasi aksesibilitas ke elemen untuk screen reader.",
      ex:`&lt;button aria-label="Tutup dialog" aria-expanded="false"&gt;&amp;times;&lt;/button&gt;
&lt;div aria-live="polite"&gt;Pesan status akan diumumkan&lt;/div&gt;`,
      note:"Lihat juga modul Semantic HTML5 di kategori STRUKTUR untuk contoh ARIA lain seperti aria-modal dan aria-controls."},
  ];

  GATTRS.forEach(a => {
    const slug = a.id.replace(/\*/g,"").replace(/-/g,"");
    D["html-ga-" + slug] = {
      t: a.name,
      lang: "HTML", lk: "html", color: "#ff8c42",
      toc: ["Deskripsi", "Contoh", "Catatan"],
      html: `<h1 class="dt">${a.name}</h1><p class="ds">// Global Attribute — bisa dipasang di hampir semua elemen HTML</p>
<h2 class="st" id="s0">Deskripsi</h2>
<p>${a.desc}</p>
<h2 class="st" id="s1">Contoh Penggunaan</h2>
<pre data-lang="HTML"><code>${a.ex}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Catatan</h2>
<div class="cb info"><div class="cbt">ℹ️ Info</div>${a.note}</div>`
    };
  });

})();
