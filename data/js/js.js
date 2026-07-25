// ═══ OLPL Data — JS ═══
// 13 modules

// ─── js-var ───
D["js-var"]={t:"Variabel & Tipe Data",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Deklarasi","Tipe Primitif","Tipe Referensi","typeof","Type Coercion"],
html:`<h1 class="dt">Variabel &amp; Tipe Data</h1><p class="ds">Cara menyimpan data — dari var warisan hingga const modern.</p>
<h2 class="st" id="s0">Deklarasi Variabel</h2>
<p>JavaScript punya tiga cara mendeklarasikan variabel. <code>var</code> adalah cara lama dengan banyak masalah (bocor dari blok, hoisting). <code>let</code> dan <code>const</code> (ES6+) memperbaiki ini dengan block scope. Gunakan <code>const</code> sebagai default ganti ke <code>let</code> hanya jika nilai perlu berubah.</p>
<table><tr><th>Keyword</th><th>Scope</th><th>Re-assign</th><th>Hoisting</th><th>Pakai?</th></tr>
<tr><td><code>var</code></td><td>Function</td><td>Ya</td><td>Ya (undefined)</td><td>❌ Hindari</td></tr>
<tr><td><code>let</code></td><td>Block</td><td>Ya</td><td>TDZ</td><td>✅ Jika berubah</td></tr>
<tr><td><code>const</code></td><td>Block</td><td>Tidak</td><td>TDZ</td><td>✅ Default</td></tr></table>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">nama</span> = <span class="str">"Budi"</span>;        <span class="cm">// gunakan const secara default</span>
<span class="kw">let</span>   <span class="var">skor</span> = <span class="num">0</span>;            <span class="cm">// let jika nilai akan berubah</span>
<span class="var">skor</span> = <span class="num">100</span>;               <span class="cm">// valid</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<div class="cb tip"><div class="cbt">💡 const ≠ immutable</div><code>const</code> berarti referensi tidak bisa di-reassign, bukan nilainya tidak berubah. Object dan array yang dideklarasikan dengan <code>const</code> tetap bisa dimodifikasi isinya.</div>
<h2 class="st" id="s1">Tipe Primitif</h2>
<p>Tipe primitif disimpan by value — ketika di-assign ke variabel baru, nilainya disalin. Ada 7 tipe primitif di JavaScript modern.</p>
<div class="cg">
<div class="card"><div class="ci">🔢</div><div class="cn">Number</div><div class="cd">42, 3.14, NaN, Infinity — semua angka pakai tipe yang sama</div></div>
<div class="card"><div class="ci">📝</div><div class="cn">String</div><div class="cd">"halo", 'halo', \`template literal\` — immutable</div></div>
<div class="card"><div class="ci">✅</div><div class="cn">Boolean</div><div class="cd">true atau false — sering hasil dari perbandingan</div></div>
<div class="card"><div class="ci">🚫</div><div class="cn">null</div><div class="cd">Nilai kosong yang disengaja oleh programmer</div></div>
<div class="card"><div class="ci">❓</div><div class="cn">undefined</div><div class="cd">Variabel belum diberi nilai, atau tidak ada</div></div>
<div class="card"><div class="ci">🔣</div><div class="cn">Symbol</div><div class="cd">Identifier unik — sering untuk property key</div></div>
<div class="card"><div class="ci">🔢</div><div class="cn">BigInt</div><div class="cd">123n — angka integer sangat besar (ES2020)</div></div>
</div>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">n</span>   = <span class="num">42</span>;
<span class="kw">const</span> <span class="var">s</span>   = <span class="str">"Hello"</span>;
<span class="kw">const</span> <span class="var">tpl</span> = <span class="str">\`Halo \${s}!\`</span>;    <span class="cm">// template literal</span>
<span class="kw">const</span> <span class="var">b</span>   = <span class="kw">true</span>;
<span class="kw">const</span> <span class="var">nil</span> = <span class="kw">null</span>;
<span class="kw">let</span>   <span class="var">u</span>;                   <span class="cm">// undefined</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Tipe Referensi</h2>
<p>Object, Array, dan Function disimpan by reference — ketika di-assign ke variabel baru, yang disalin adalah <em>alamat memori</em>, bukan nilainya. Ini berarti dua variabel bisa menunjuk ke objek yang sama!</p>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">obj</span> = { nama: <span class="str">"Siti"</span>, umur: <span class="num">28</span> };
<span class="kw">const</span> <span class="var">arr</span> = [<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>];
<span class="kw">const</span> <span class="var">fn</span>  = (<span class="var">x</span>) <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">*</span> <span class="num">2</span>;
<span class="cm">// Referensi — bukan salinan!</span>
<span class="kw">const</span> <span class="var">a</span> = { x: <span class="num">1</span> };
<span class="kw">const</span> <span class="var">b</span> = <span class="var">a</span>;    <span class="cm">// b dan a → objek yang sama di memori</span>
<span class="var">b</span>.x = <span class="num">99</span>;
console.<span class="fn">log</span>(<span class="var">a</span>.x); <span class="cm">// 99 — a ikut berubah!</span>
<span class="cm">// Cara salin (shallow clone):</span>
<span class="kw">const</span> <span class="var">salin</span> = {...<span class="var">a</span>};  <span class="cm">// atau Object.assign({}, a)</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">typeof</h2>
<p><code>typeof</code> mengembalikan string yang menyatakan tipe data. Ada quirk klasik: <code>typeof null === "object"</code> — ini bug lama JavaScript yang tidak bisa diperbaiki karena akan merusak kompatibilitas.</p>
<pre data-lang="JS"><code><span class="kw">typeof</span> <span class="num">42</span>        <span class="cm">// "number"</span>
<span class="kw">typeof</span> <span class="str">"teks"</span>   <span class="cm">// "string"</span>
<span class="kw">typeof</span> <span class="kw">true</span>      <span class="cm">// "boolean"</span>
<span class="kw">typeof</span> <span class="kw">null</span>      <span class="cm">// "object" ← bug klasik JS — harus null, tapi sudah terlanjur</span>
<span class="kw">typeof</span> []         <span class="cm">// "object"  — array juga object!</span>
<span class="kw">typeof</span> (() <span class="op">=&gt;</span> {}) <span class="cm">// "function" — fungsi punya typeof sendiri</span>
<span class="cls">Array</span>.<span class="fn">isArray</span>([]) <span class="cm">// true ✅ cara aman cek array</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Type Coercion</h2>
<p>JavaScript secara otomatis mengkonversi tipe data dalam operasi tertentu. Ini disebut implicit coercion dan sering jadi sumber bug. Selalu gunakan <code>===</code> (strict equality) yang memeriksa nilai DAN tipe, bukan <code>==</code> (loose equality) yang melakukan coercion.</p>
<pre data-lang="JS"><code><span class="str">"5"</span> <span class="op">+</span> <span class="num">3</span>    <span class="cm">// "53"  — + dengan string = concatenation</span>
<span class="str">"5"</span> <span class="op">-</span> <span class="num">3</span>    <span class="cm">// 2     — - tidak bisa string, jadi string dikonversi ke number</span>
<span class="fn">Number</span>(<span class="str">"42"</span>)  <span class="cm">// 42    — explicit conversion (aman)</span>
<span class="fn">Boolean</span>(<span class="num">0</span>)   <span class="cm">// false — 0 adalah falsy</span>
<span class="fn">Boolean</span>(<span class="str">""</span>)  <span class="cm">// false — string kosong adalah falsy</span>
<span class="cm">// SELALU pakai === bukan ==</span>
<span class="num">0</span> <span class="op">==</span>  <span class="kw">false</span>  <span class="cm">// true  ❌ loose: 0 dikonversi ke boolean</span>
<span class="num">0</span> <span class="op">===</span> <span class="kw">false</span>  <span class="cm">// false ✅ strict: number ≠ boolean</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── js-arr ───
D["js-arr"]={t:"Array & 40+ Method",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Membuat Array","Method Mutasi","Method Iterasi","Transformasi","Spread & Destruktur","Pencarian","Flattening"],
html:`<h1 class="dt">Array &amp; 40+ Method</h1><p class="ds">Struktur data paling sering dipakai di JS.</p>
<p>Array di JavaScript adalah objek terurut yang bisa menampung nilai apapun — angka, string, object, bahkan array lain. Index dimulai dari 0. Array bersifat dinamis: ukurannya bisa berubah kapan saja.</p>
<h2 class="st" id="s0">Membuat Array</h2>
<p>Ada beberapa cara membuat array. Literal <code>[]</code> adalah cara paling umum. <code>Array.from()</code> berguna untuk membuat array dari iterable (string, NodeList, Set) atau dari ukuran tertentu dengan mapping function.</p>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">a1</span> = [<span class="str">"apel"</span>, <span class="str">"mangga"</span>];
<span class="kw">const</span> <span class="var">a2</span> = <span class="cls">Array</span>.<span class="fn">from</span>({length:<span class="num">5</span>}, (<span class="var">_</span>,<span class="var">i</span>) <span class="op">=&gt;</span> <span class="var">i</span>); <span class="cm">// [0,1,2,3,4]</span>
<span class="kw">const</span> <span class="var">a3</span> = <span class="cls">Array</span>.<span class="fn">from</span>(<span class="str">"abc"</span>);   <span class="cm">// ["a","b","c"]</span>
<span class="kw">const</span> <span class="var">a4</span> = <span class="cls">Array</span>.<span class="fn">of</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>);      <span class="cm">// [1,2,3]</span>
<span class="var">arr</span>.<span class="fn">at</span>(-<span class="num">1</span>)  <span class="cm">// elemen terakhir (ES2022) — lebih aman dari arr[arr.length-1]</span>
<span class="var">arr</span>.<span class="fn">includes</span>(<span class="str">"c"</span>) <span class="cm">// true — cek keberadaan elemen</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Method Mutasi (ubah array asli)</h2>
<p>Method mutasi langsung mengubah array asli — berhati-hati saat bekerja dengan data yang dishare. Jika perlu array baru, gunakan method transformasi seperti <code>map()</code>, <code>filter()</code>, atau spread <code>[...arr]</code>.</p>
<table><tr><th>Method</th><th>Fungsi</th><th>Return</th></tr>
<tr><td><code>push(...x)</code></td><td>Tambah di akhir</td><td>panjang baru</td></tr>
<tr><td><code>pop()</code></td><td>Hapus elemen terakhir</td><td>elemen yang dihapus</td></tr>
<tr><td><code>unshift(...x)</code></td><td>Tambah di awal</td><td>panjang baru</td></tr>
<tr><td><code>shift()</code></td><td>Hapus elemen pertama</td><td>elemen yang dihapus</td></tr>
<tr><td><code>splice(i,n,...x)</code></td><td>Hapus/sisipkan di posisi</td><td>elemen yang dihapus</td></tr>
<tr><td><code>sort(fn)</code></td><td>Urutkan (HARUS pakai comparator!)</td><td>array yang sama</td></tr>
<tr><td><code>reverse()</code></td><td>Balik urutan</td><td>array yang sama</td></tr>
<tr><td><code>fill(v,s,e)</code></td><td>Isi dengan nilai</td><td>array yang sama</td></tr></table>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">a</span> = [<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>];
<span class="var">a</span>.<span class="fn">push</span>(<span class="num">4</span>);
<span class="var">a</span>.<span class="fn">sort</span>((<span class="var">x</span>,<span class="var">y</span>) <span class="op">=&gt;</span> <span class="var">x</span><span class="op">-</span><span class="var">y</span>); <span class="cm">// [1,2,3,4] — tanpa comparator, sort() pakai unicode (salah untuk angka!)</span>
<span class="var">a</span>.<span class="fn">splice</span>(<span class="num">1</span>,<span class="num">1</span>,<span class="str">"x"</span>); <span class="cm">// hapus 1 di index 1, ganti "x"</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Method Iterasi</h2>
<p>Method iterasi tidak mengubah array, tapi menjalankan fungsi callback untuk setiap elemen. <code>forEach</code> hanya untuk efek samping, tidak return nilai. <code>find</code> dan <code>findIndex</code> berhenti di elemen pertama yang cocok, lebih efisien dari <code>filter</code> jika hanya butuh satu elemen.</p>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">n</span> = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>];
<span class="var">n</span>.<span class="fn">forEach</span>(<span class="var">x</span> <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">x</span>));    <span class="cm">// tidak return apa-apa</span>
<span class="var">n</span>.<span class="fn">find</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">3</span>)       <span class="cm">// 4 — elemen pertama yang cocok</span>
<span class="var">n</span>.<span class="fn">findIndex</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">3</span>)  <span class="cm">// 3 — index elemen yang cocok</span>
<span class="var">n</span>.<span class="fn">some</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">4</span>)         <span class="cm">// true — minimal 1 elemen memenuhi</span>
<span class="var">n</span>.<span class="fn">every</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">0</span>)        <span class="cm">// true — semua elemen memenuhi</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Transformasi</h2>
<p>Method transformasi selalu mengembalikan array baru tanpa mengubah array asli. Ini pola functional programming yang aman dan mudah di-chain. <code>reduce()</code> adalah yang paling fleksibel — bisa menggantikan hampir semua method array lain.</p>
<pre data-lang="JS"><code><span class="var">n</span>.<span class="fn">map</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">*</span> <span class="num">2</span>)                  <span class="cm">// [2,4,6,8,10] — transform setiap elemen</span>
<span class="var">n</span>.<span class="fn">filter</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>)       <span class="cm">// [2,4] — ambil yang memenuhi kondisi</span>
<span class="var">n</span>.<span class="fn">reduce</span>((<span class="var">acc</span>,<span class="var">x</span>) <span class="op">=&gt;</span> <span class="var">acc</span><span class="op">+</span><span class="var">x</span>, <span class="num">0</span>)    <span class="cm">// 15 — akumulasi (0 = nilai awal)</span>
<span class="var">n</span>.<span class="fn">slice</span>(<span class="num">1</span>,<span class="num">3</span>)                        <span class="cm">// [2,3] — potong index 1 sampai 3 (tidak termasuk 3)</span>
<span class="var">n</span>.<span class="fn">flatMap</span>(<span class="var">x</span> <span class="op">=&gt;</span> [<span class="var">x</span>, <span class="var">x</span><span class="op">*</span><span class="num">2</span>])          <span class="cm">// [1,2,2,4,3,6...] — map lalu flatten 1 level</span>
<span class="cm">// Method chaining — susun pipeline transformasi</span>
[<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>].<span class="fn">filter</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span><span class="op">%</span><span class="num">2</span><span class="op">===</span><span class="num">0</span>).<span class="fn">map</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span><span class="op">**</span><span class="num">2</span>) <span class="cm">// [4,16]</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Spread &amp; Destructuring</h2>
<p>Spread operator <code>...</code> "membuka" array menjadi elemen individual. Destructuring memungkinkan kita mengambil nilai dari array dan menyimpannya ke variabel dalam satu baris.</p>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">gabung</span> = [...[<span class="num">1</span>,<span class="num">2</span>], ...[<span class="num">3</span>,<span class="num">4</span>]]; <span class="cm">// merge array: [1,2,3,4]</span>
<span class="kw">const</span> [<span class="var">a</span>, <span class="var">b</span>, ...<span class="var">rest</span>] = [<span class="num">10</span>,<span class="num">20</span>,<span class="num">30</span>,<span class="num">40</span>];
<span class="cm">// a=10, b=20, rest=[30,40]</span>
<span class="kw">let</span> <span class="var">x</span>=<span class="num">1</span>, <span class="var">y</span>=<span class="num">2</span>; [<span class="var">x</span>,<span class="var">y</span>]=[<span class="var">y</span>,<span class="var">x</span>]; <span class="cm">// swap nilai tanpa variabel sementara!</span>
<span class="cm">// Klon array (shallow copy)</span>
<span class="kw">const</span> <span class="var">klon</span> = [...<span class="var">original</span>]; <span class="cm">// aman — modifikasi klon tidak pengaruhi original</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Pencarian</h2>
<p>JavaScript punya banyak method pencarian dengan cara kerja berbeda. Pilih yang tepat sesuai kebutuhan — apakah butuh index, elemen, atau cukup tahu ada/tidaknya?</p>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">arr</span> = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">20</span>, <span class="num">40</span>];
<span class="var">arr</span>.<span class="fn">indexOf</span>(<span class="num">20</span>)        <span class="cm">// 1 — index kemunculan pertama, -1 jika tidak ada</span>
<span class="var">arr</span>.<span class="fn">lastIndexOf</span>(<span class="num">20</span>)    <span class="cm">// 3 — index kemunculan terakhir</span>
<span class="var">arr</span>.<span class="fn">includes</span>(<span class="num">30</span>)       <span class="cm">// true — cek keberadaan (NaN-safe)</span>
<span class="var">arr</span>.<span class="fn">find</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">25</span>)  <span class="cm">// 30 — elemen pertama yang cocok</span>
<span class="var">arr</span>.<span class="fn">findIndex</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">25</span>) <span class="cm">// 2 — index elemen yang cocok</span>
<span class="cm">// findLast & findLastIndex (ES2023)</span>
<span class="var">arr</span>.<span class="fn">findLast</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">&gt;</span> <span class="num">15</span>)  <span class="cm">// 40 — cari dari belakang</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s6">Flattening & Lainnya</h2>
<p><code>flat()</code> meratakan array bersarang. <code>flatMap()</code> gabungan map dan flat — sering lebih efisien dari memanggil keduanya terpisah. Method ES2023+ seperti <code>toSorted()</code> dan <code>toReversed()</code> adalah versi non-mutating dari <code>sort()</code> dan <code>reverse()</code>.</p>
<pre data-lang="JS"><code><span class="cm">// flat — ratakan array bersarang</span>
[<span class="num">1</span>, [<span class="num">2</span>, <span class="num">3</span>], [<span class="num">4</span>, [<span class="num">5</span>]]].<span class="fn">flat</span>()     <span class="cm">// [1,2,3,4,[5]] — 1 level</span>
[<span class="num">1</span>, [<span class="num">2</span>, [<span class="num">3</span>, [<span class="num">4</span>]]]].<span class="fn">flat</span>(<span class="cls">Infinity</span>)  <span class="cm">// [1,2,3,4] — semua level</span>
<span class="cm">// join & from string</span>
[<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>].<span class="fn">join</span>(<span class="str">"-"</span>)           <span class="cm">// "a-b-c"</span>
<span class="cm">// Non-mutating sort (ES2023) — array asli tidak berubah</span>
<span class="kw">const</span> <span class="var">sorted</span> = [<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>].<span class="fn">toSorted</span>(); <span class="cm">// [1,2,3] — array baru</span>
<span class="kw">const</span> <span class="var">rev</span>    = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>].<span class="fn">toReversed</span>(); <span class="cm">// [3,2,1] — array baru</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── js-async ───
D["js-async"]={t:"Async/Await & Promise",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Promise","Async/Await","Promise Methods","Error Handling","Fetch Contoh"],
html:`<h1 class="dt">Async/Await &amp; Promise</h1><p class="ds">JavaScript asinkron — dari callback jadul hingga async/await modern.</p>
<h2 class="st" id="s0">Promise</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">janji</span> = <span class="kw">new</span> <span class="cls">Promise</span>((<span class="var">resolve</span>, <span class="var">reject</span>) <span class="op">=&gt;</span> {
  <span class="kw">if</span> (sukses) <span class="fn">resolve</span>(<span class="str">"Berhasil!"</span>);
  <span class="kw">else</span>        <span class="fn">reject</span>(<span class="kw">new</span> <span class="cls">Error</span>(<span class="str">"Gagal!"</span>));
});
<span class="var">janji</span>.<span class="fn">then</span>(<span class="var">r</span> <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">r</span>)).<span class="fn">catch</span>(<span class="var">e</span> <span class="op">=&gt;</span> console.<span class="fn">error</span>(<span class="var">e</span>));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Async/Await</h2>
<pre data-lang="JS"><code><span class="kw">async function</span> <span class="fn">ambilData</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">res</span>  = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/data"</span>);
    <span class="kw">const</span> <span class="var">data</span> = <span class="kw">await</span> <span class="var">res</span>.<span class="fn">json</span>();
    <span class="kw">return</span> <span class="var">data</span>;
  } <span class="kw">catch</span> (<span class="var">err</span>) {
    console.<span class="fn">error</span>(<span class="var">err</span>);
  }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Promise Methods</h2>
<pre data-lang="JS"><code><span class="cm">// Paralel — lebih cepat dari sequential!</span>
<span class="kw">const</span> [<span class="var">user</span>, <span class="var">posts</span>] = <span class="kw">await</span> <span class="cls">Promise</span>.<span class="fn">all</span>([
  <span class="fn">fetch</span>(<span class="str">"/user"</span>).<span class="fn">then</span>(<span class="var">r</span> <span class="op">=&gt;</span> <span class="var">r</span>.<span class="fn">json</span>()),
  <span class="fn">fetch</span>(<span class="str">"/posts"</span>).<span class="fn">then</span>(<span class="var">r</span> <span class="op">=&gt;</span> <span class="var">r</span>.<span class="fn">json</span>()),
]);
<span class="cm">// allSettled — tidak berhenti jika ada yg gagal</span>
<span class="kw">const</span> <span class="var">results</span> = <span class="kw">await</span> <span class="cls">Promise</span>.<span class="fn">allSettled</span>([p1, p2, p3]);
<span class="cm">// race — ambil yang paling cepat</span>
<span class="kw">const</span> <span class="var">winner</span> = <span class="kw">await</span> <span class="cls">Promise</span>.<span class="fn">race</span>([p1, p2]);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Error Handling</h2>
<pre data-lang="JS"><code><span class="kw">async function</span> <span class="fn">safe</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> <span class="var">data</span> = <span class="kw">await</span> <span class="fn">riskyOp</span>();
    <span class="kw">return</span> { ok: <span class="kw">true</span>, data };
  } <span class="kw">catch</span> (<span class="var">err</span>) {
    <span class="kw">return</span> { ok: <span class="kw">false</span>, error: <span class="var">err</span>.message };
  } <span class="kw">finally</span> {
    <span class="fn">cleanup</span>(); <span class="cm">// selalu jalan</span>
  }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Fetch Contoh Nyata</h2>
<pre data-lang="JS"><code><span class="kw">async function</span> <span class="fn">fetchUser</span>(<span class="var">id</span>) {
  <span class="kw">const</span> <span class="var">res</span> = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">\`https://jsonplaceholder.typicode.com/users/\${id}\`</span>);
  <span class="kw">if</span> (!<span class="var">res</span>.ok) <span class="kw">throw new</span> <span class="cls">Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
  <span class="kw">return</span> <span class="var">res</span>.<span class="fn">json</span>();
}
<span class="fn">fetchUser</span>(<span class="num">1</span>).<span class="fn">then</span>(<span class="var">u</span> <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">u</span>.name)).<span class="fn">catch</span>(console.<span class="fn">error</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── js-op ───
D["js-op"]={t:"Operator",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Aritmatika","Assignment","Perbandingan","Logical","Bitwise","Optional Chaining"],
html:`<h1 class="dt">Operator</h1><p class="ds">// Semua operator di JavaScript — aritmatika, logika, hingga nullish coalescing.</p>
<h2 class="st" id="s0">Aritmatika</h2>
<pre data-lang="JS"><code><span class="num">10</span> <span class="op">+</span> <span class="num">3</span>   <span class="cm">// 13</span>
<span class="num">10</span> <span class="op">-</span> <span class="num">3</span>   <span class="cm">// 7</span>
<span class="num">10</span> <span class="op">*</span> <span class="num">3</span>   <span class="cm">// 30</span>
<span class="num">10</span> <span class="op">/</span> <span class="num">3</span>   <span class="cm">// 3.333...</span>
<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>   <span class="cm">// 1  — modulus (sisa bagi)</span>
<span class="num">2</span>  <span class="op">**</span> <span class="num">8</span>  <span class="cm">// 256 — eksponensial</span>
<span class="op">++</span><span class="var">x</span>      <span class="cm">// increment (pre)</span>
<span class="var">x</span><span class="op">++</span>      <span class="cm">// increment (post)</span>
<span class="op">--</span><span class="var">x</span>      <span class="cm">// decrement (pre)</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Assignment</h2>
<pre data-lang="JS"><code><span class="var">x</span> <span class="op">=</span> <span class="num">5</span>     <span class="cm">// assign</span>
<span class="var">x</span> <span class="op">+=</span> <span class="num">3</span>    <span class="cm">// x = x + 3</span>
<span class="var">x</span> <span class="op">-=</span> <span class="num">3</span>    <span class="cm">// x = x - 3</span>
<span class="var">x</span> <span class="op">*=</span> <span class="num">3</span>    <span class="cm">// x = x * 3</span>
<span class="var">x</span> <span class="op">/=</span> <span class="num">3</span>    <span class="cm">// x = x / 3</span>
<span class="var">x</span> <span class="op">%=</span> <span class="num">3</span>    <span class="cm">// x = x % 3</span>
<span class="var">x</span> <span class="op">**=</span> <span class="num">2</span>   <span class="cm">// x = x ** 2</span>
<span class="var">x</span> <span class="op">??=</span> <span class="num">5</span>   <span class="cm">// x = x ?? 5 (nullish assign)</span>
<span class="var">x</span> <span class="op">||=</span> <span class="num">5</span>   <span class="cm">// x = x || 5</span>
<span class="var">x</span> <span class="op">&amp;&amp;=</span> <span class="num">5</span>   <span class="cm">// x = x &amp;&amp; 5</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Perbandingan</h2>
<pre data-lang="JS"><code><span class="num">5</span> <span class="op">==</span>  <span class="str">"5"</span>  <span class="cm">// true  — sama nilai (coercion) ❌</span>
<span class="num">5</span> <span class="op">===</span> <span class="str">"5"</span>  <span class="cm">// false — sama nilai DAN tipe ✅</span>
<span class="num">5</span> <span class="op">!=</span>  <span class="str">"5"</span>  <span class="cm">// false</span>
<span class="num">5</span> <span class="op">!==</span> <span class="str">"5"</span>  <span class="cm">// true  ✅</span>
<span class="num">5</span> <span class="op">&gt;</span>   <span class="num">3</span>    <span class="cm">// true</span>
<span class="num">5</span> <span class="op">&gt;=</span>  <span class="num">5</span>    <span class="cm">// true</span>
<span class="num">5</span> <span class="op">&lt;</span>   <span class="num">3</span>    <span class="cm">// false</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Logical</h2>
<pre data-lang="JS"><code><span class="kw">true</span>  <span class="op">&amp;&amp;</span> <span class="kw">false</span>   <span class="cm">// false — AND</span>
<span class="kw">true</span>  <span class="op">||</span> <span class="kw">false</span>   <span class="cm">// true  — OR</span>
<span class="op">!</span><span class="kw">true</span>            <span class="cm">// false — NOT</span>
<span class="kw">null</span>  <span class="op">??</span> <span class="str">"default"</span> <span class="cm">// "default" — Nullish Coalescing</span>
<span class="num">0</span>     <span class="op">??</span> <span class="str">"default"</span> <span class="cm">// 0  — 0 bukan null/undefined</span>
<span class="num">0</span>     <span class="op">||</span> <span class="str">"default"</span> <span class="cm">// "default" — 0 adalah falsy</span>
<span class="cm">// Short circuit</span>
<span class="kw">const</span> <span class="var">name</span> = <span class="var">user</span><span class="op">?.</span>name <span class="op">??</span> <span class="str">"Anonymous"</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Bitwise</h2>
<pre data-lang="JS"><code><span class="num">5</span> <span class="op">&amp;</span>  <span class="num">3</span>   <span class="cm">// 1  — AND</span>
<span class="num">5</span> <span class="op">|</span>  <span class="num">3</span>   <span class="cm">// 7  — OR</span>
<span class="num">5</span> <span class="op">^</span>  <span class="num">3</span>   <span class="cm">// 6  — XOR</span>
<span class="op">~</span><span class="num">5</span>       <span class="cm">// -6 — NOT</span>
<span class="num">5</span> <span class="op">&lt;&lt;</span> <span class="num">1</span>   <span class="cm">// 10 — left shift</span>
<span class="num">5</span> <span class="op">&gt;&gt;</span> <span class="num">1</span>   <span class="cm">// 2  — right shift</span>
<span class="cm">// Tip: ~~x adalah Math.floor() yang cepat</span>
<span class="op">~~</span><span class="num">3.7</span>    <span class="cm">// 3</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Optional Chaining & Ternary</h2>
<pre data-lang="JS"><code><span class="cm">// Optional chaining ?. — aman akses nested</span>
<span class="kw">const</span> <span class="var">city</span> = <span class="var">user</span><span class="op">?.</span>address<span class="op">?.</span>city;    <span class="cm">// undefined, bukan error</span>
<span class="kw">const</span> <span class="var">len</span>  = <span class="var">arr</span><span class="op">?.</span>length;
<span class="var">obj</span><span class="op">?.</span><span class="fn">method</span><span class="op">?.</span>();                    <span class="cm">// call method jika ada</span>
<span class="cm">// Ternary: kondisi ? jika_true : jika_false</span>
<span class="kw">const</span> <span class="var">label</span> = <span class="var">skor</span> <span class="op">&gt;=</span> <span class="num">60</span> <span class="op">?</span> <span class="str">"Lulus"</span> <span class="op">:</span> <span class="str">"Gagal"</span>;
<span class="cm">// Nested ternary (hindari jika terlalu dalam)</span>
<span class="kw">const</span> <span class="var">grade</span> = <span class="var">s</span><span class="op">&gt;=</span><span class="num">90</span> <span class="op">?</span> <span class="str">"A"</span> <span class="op">:</span> <span class="var">s</span><span class="op">&gt;=</span><span class="num">80</span> <span class="op">?</span> <span class="str">"B"</span> <span class="op">:</span> <span class="str">"C"</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Kondisional ═══

// ─── js-cond ───
D["js-cond"]={t:"Kondisional",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["if/else","else if","switch","Ternary","Logical Short Circuit"],
html:`<h1 class="dt">Kondisional</h1><p class="ds">// Percabangan — eksekusi kode berdasarkan kondisi.</p>
<h2 class="st" id="s0">if / else</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">nilai</span> = <span class="num">75</span>;
<span class="kw">if</span> (<span class="var">nilai</span> <span class="op">&gt;=</span> <span class="num">90</span>) {
  console.<span class="fn">log</span>(<span class="str">"A"</span>);
} <span class="kw">else if</span> (<span class="var">nilai</span> <span class="op">&gt;=</span> <span class="num">80</span>) {
  console.<span class="fn">log</span>(<span class="str">"B"</span>);
} <span class="kw">else if</span> (<span class="var">nilai</span> <span class="op">&gt;=</span> <span class="num">70</span>) {
  console.<span class="fn">log</span>(<span class="str">"C"</span>);
} <span class="kw">else</span> {
  console.<span class="fn">log</span>(<span class="str">"D"</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Falsy Values</h2>
<pre data-lang="JS"><code><span class="cm">// Nilai-nilai yang dianggap FALSE:</span>
<span class="kw">false</span>, <span class="num">0</span>, <span class="num">-0</span>, <span class="num">0n</span>, <span class="str">""</span>, <span class="str">''</span>, <span class="kw">null</span>, <span class="kw">undefined</span>, <span class="fn">NaN</span>
<span class="cm">// Semua hal lain = truthy, termasuk:</span>
<span class="str">"0"</span>, <span class="str">"false"</span>, [], {}, <span class="kw">function</span>(){}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">switch</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">hari</span> = <span class="str">"Senin"</span>;
<span class="kw">switch</span> (<span class="var">hari</span>) {
  <span class="kw">case</span> <span class="str">"Senin"</span>:
  <span class="kw">case</span> <span class="str">"Selasa"</span>:
    console.<span class="fn">log</span>(<span class="str">"Awal pekan"</span>);
    <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"Jumat"</span>:
    console.<span class="fn">log</span>(<span class="str">"Akhir pekan kerja"</span>);
    <span class="kw">break</span>;
  <span class="kw">default</span>:
    console.<span class="fn">log</span>(<span class="str">"Hari lain"</span>);
}
<span class="cm">// Modern: object lookup (lebih clean)</span>
<span class="kw">const</span> <span class="var">actions</span> = {
  tambah: () <span class="op">=&gt;</span> <span class="var">count</span><span class="op">++</span>,
  kurang: () <span class="op">=&gt;</span> <span class="var">count</span><span class="op">--</span>,
  reset:  () <span class="op">=&gt;</span> <span class="var">count</span> = <span class="num">0</span>,
};
<span class="var">actions</span>[<span class="var">action</span>]<span class="op">?.</span>();</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Ternary</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">status</span> = <span class="var">isLoggedIn</span> <span class="op">?</span> <span class="str">"Online"</span> <span class="op">:</span> <span class="str">"Offline"</span>;
<span class="cm">// Ternary di JSX/template</span>
<span class="kw">const</span> <span class="var">btn</span> = <span class="var">loading</span>
  <span class="op">?</span> <span class="str">"&lt;button disabled&gt;Loading...&lt;/button&gt;"</span>
  <span class="op">:</span> <span class="str">"&lt;button&gt;Submit&lt;/button&gt;"</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Logical Short Circuit</h2>
<pre data-lang="JS"><code><span class="cm">// && — jalankan kanan jika kiri truthy</span>
<span class="var">user</span>.isAdmin <span class="op">&amp;&amp;</span> <span class="fn">showAdminPanel</span>();
<span class="cm">// || — pakai kanan jika kiri falsy</span>
<span class="kw">const</span> <span class="var">name</span> = <span class="var">inputName</span> <span class="op">||</span> <span class="str">"Anonymous"</span>;
<span class="cm">// ?? — hanya null/undefined (bukan 0 atau "")</span>
<span class="kw">const</span> <span class="var">port</span> = <span class="var">config</span>.port <span class="op">??</span> <span class="num">3000</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Loop ═══

// ─── js-loop ───
D["js-loop"]={t:"Loop",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["for","while / do-while","for...of","for...in","break & continue","Loop Array"],
html:`<h1 class="dt">Loop</h1><p class="ds">// Perulangan — jalankan kode berkali-kali.</p>
<h2 class="st" id="s0">for</h2>
<pre data-lang="JS"><code><span class="cm">// for klasik</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> <span class="op">&lt;</span> <span class="num">5</span>; <span class="var">i</span><span class="op">++</span>) {
  console.<span class="fn">log</span>(<span class="var">i</span>);
}
<span class="cm">// Reverse</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">4</span>; <span class="var">i</span> <span class="op">&gt;=</span> <span class="num">0</span>; <span class="var">i</span><span class="op">--</span>) {
  console.<span class="fn">log</span>(<span class="var">i</span>);
}
<span class="cm">// Step 2</span>
<span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> <span class="op">&lt;</span> <span class="num">10</span>; <span class="var">i</span> <span class="op">+=</span> <span class="num">2</span>) {
  console.<span class="fn">log</span>(<span class="var">i</span>); <span class="cm">// 0 2 4 6 8</span>
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">while / do-while</h2>
<pre data-lang="JS"><code><span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>;
<span class="kw">while</span> (<span class="var">i</span> <span class="op">&lt;</span> <span class="num">5</span>) {
  console.<span class="fn">log</span>(<span class="var">i</span>);
  <span class="var">i</span><span class="op">++</span>;
}
<span class="cm">// do-while — minimal 1x jalan</span>
<span class="kw">let</span> <span class="var">input</span>;
<span class="kw">do</span> {
  <span class="var">input</span> = <span class="fn">prompt</span>(<span class="str">"Masukkan angka:"</span>);
} <span class="kw">while</span> (<span class="fn">isNaN</span>(<span class="var">input</span>));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">for...of</h2>
<pre data-lang="JS"><code><span class="cm">// Iterasi nilai — untuk array, string, Map, Set</span>
<span class="kw">const</span> <span class="var">buah</span> = [<span class="str">"apel"</span>, <span class="str">"mangga"</span>, <span class="str">"jeruk"</span>];
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">b</span> <span class="kw">of</span> <span class="var">buah</span>) {
  console.<span class="fn">log</span>(<span class="var">b</span>);
}
<span class="cm">// Dengan index</span>
<span class="kw">for</span> (<span class="kw">const</span> [<span class="var">i</span>, <span class="var">b</span>] <span class="kw">of</span> <span class="var">buah</span>.<span class="fn">entries</span>()) {
  console.<span class="fn">log</span>(<span class="var">i</span>, <span class="var">b</span>);
}
<span class="cm">// String</span>
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">ch</span> <span class="kw">of</span> <span class="str">"OLPL"</span>) console.<span class="fn">log</span>(<span class="var">ch</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">for...in</h2>
<pre data-lang="JS"><code><span class="cm">// Iterasi KEY object</span>
<span class="kw">const</span> <span class="var">user</span> = { nama: <span class="str">"Andi"</span>, umur: <span class="num">25</span>, kota: <span class="str">"Jakarta"</span> };
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">key</span> <span class="kw">in</span> <span class="var">user</span>) {
  console.<span class="fn">log</span>(<span class="var">key</span>, <span class="str">"="</span>, <span class="var">user</span>[<span class="var">key</span>]);
}
<span class="cm">// ⚠️ Hindari for...in untuk array — gunakan for...of</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">break &amp; continue</h2>
<pre data-lang="JS"><code><span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="num">0</span>; <span class="var">i</span> <span class="op">&lt;</span> <span class="num">10</span>; <span class="var">i</span><span class="op">++</span>) {
  <span class="kw">if</span> (<span class="var">i</span> <span class="op">===</span> <span class="num">3</span>) <span class="kw">continue</span>; <span class="cm">// skip 3</span>
  <span class="kw">if</span> (<span class="var">i</span> <span class="op">===</span> <span class="num">7</span>) <span class="kw">break</span>;    <span class="cm">// stop di 7</span>
  console.<span class="fn">log</span>(<span class="var">i</span>); <span class="cm">// 0,1,2,4,5,6</span>
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Loop Array Modern</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">n</span> = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>];
<span class="cm">// forEach — tidak bisa break/return</span>
<span class="var">n</span>.<span class="fn">forEach</span>((<span class="var">v</span>,<span class="var">i</span>) <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">i</span>,<span class="var">v</span>));
<span class="cm">// map — return array baru</span>
<span class="kw">const</span> <span class="var">doubled</span> = <span class="var">n</span>.<span class="fn">map</span>(<span class="var">x</span> <span class="op">=&gt;</span> <span class="var">x</span><span class="op">*</span><span class="num">2</span>);
<span class="cm">// for...of lebih fleksibel (bisa break)</span>
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">v</span> <span class="kw">of</span> <span class="var">n</span>) {
  <span class="kw">if</span> (<span class="var">v</span> <span class="op">&gt;</span> <span class="num">3</span>) <span class="kw">break</span>;
  console.<span class="fn">log</span>(<span class="var">v</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Function ═══

// ─── js-fn ───
D["js-fn"]={t:"Fungsi & Arrow Function",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Function Declaration","Arrow Function","Parameter Default","Rest & Spread","Closure","IIFE"],
html:`<h1 class="dt">Fungsi &amp; Arrow Function</h1><p class="ds">// Blok kode yang bisa dipanggil berulang kali.</p>
<h2 class="st" id="s0">Function Declaration</h2>
<pre data-lang="JS"><code><span class="cm">// Declaration — bisa dipanggil sebelum definisi (hoisted)</span>
<span class="fn">sapa</span>(<span class="str">"Budi"</span>);
<span class="kw">function</span> <span class="fn">sapa</span>(<span class="var">nama</span>) {
  <span class="kw">return</span> <span class="str">\`Halo, \${nama}!\`</span>;
}
<span class="cm">// Expression — tidak hoisted</span>
<span class="kw">const</span> <span class="var">tambah</span> = <span class="kw">function</span>(<span class="var">a</span>, <span class="var">b</span>) { <span class="kw">return</span> <span class="var">a</span> <span class="op">+</span> <span class="var">b</span>; };
<span class="cm">// Named function expression</span>
<span class="kw">const</span> <span class="var">fib</span> = <span class="kw">function</span> <span class="fn">fibonacci</span>(<span class="var">n</span>) {
  <span class="kw">return</span> <span class="var">n</span> <span class="op">&lt;=</span> <span class="num">1</span> <span class="op">?</span> <span class="var">n</span> <span class="op">:</span> <span class="fn">fibonacci</span>(<span class="var">n</span><span class="op">-</span><span class="num">1</span>) <span class="op">+</span> <span class="fn">fibonacci</span>(<span class="var">n</span><span class="op">-</span><span class="num">2</span>);
};</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Arrow Function</h2>
<pre data-lang="JS"><code><span class="cm">// Sintaks ringkas</span>
<span class="kw">const</span> <span class="fn">kuadrat</span> = (<span class="var">x</span>) <span class="op">=&gt;</span> <span class="var">x</span> <span class="op">**</span> <span class="num">2</span>;
<span class="kw">const</span> <span class="fn">greet</span>   = <span class="var">name</span> <span class="op">=&gt;</span> <span class="str">\`Hi \${name}\`</span>; <span class="cm">// 1 param, tanpa ()</span>
<span class="kw">const</span> <span class="fn">noArg</span>   = () <span class="op">=&gt;</span> <span class="str">"hello"</span>;
<span class="kw">const</span> <span class="fn">multiLine</span> = (<span class="var">a</span>, <span class="var">b</span>) <span class="op">=&gt;</span> {
  <span class="kw">const</span> <span class="var">hasil</span> = <span class="var">a</span> <span class="op">+</span> <span class="var">b</span>;
  <span class="kw">return</span> <span class="var">hasil</span>;
};
<span class="cm">// Return object — perlu dikelilingi ()</span>
<span class="kw">const</span> <span class="fn">mkUser</span> = (<span class="var">nama</span>) <span class="op">=&gt;</span> ({ nama, aktif: <span class="kw">true</span> });
<span class="cm">// Perbedaan this: arrow tidak punya this sendiri</span>
<span class="kw">const</span> <span class="var">obj</span> = {
  nilai: <span class="num">42</span>,
  <span class="fn">dapatkan</span>() { <span class="kw">return</span> <span class="kw">this</span>.nilai; },    <span class="cm">// ✅ this = obj</span>
  salah: () <span class="op">=&gt;</span> <span class="kw">this</span>.nilai,             <span class="cm">// ❌ this = undefined</span>
};</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Parameter Default</h2>
<pre data-lang="JS"><code><span class="kw">function</span> <span class="fn">sapa</span>(<span class="var">nama</span> = <span class="str">"Tamu"</span>, <span class="var">salam</span> = <span class="str">"Halo"</span>) {
  <span class="kw">return</span> <span class="str">\`\${salam}, \${nama}!\`</span>;
}
<span class="fn">sapa</span>();              <span class="cm">// "Halo, Tamu!"</span>
<span class="fn">sapa</span>(<span class="str">"Budi"</span>);        <span class="cm">// "Halo, Budi!"</span>
<span class="fn">sapa</span>(<span class="str">"Siti"</span>, <span class="str">"Hi"</span>);  <span class="cm">// "Hi, Siti!"</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Rest &amp; Spread</h2>
<pre data-lang="JS"><code><span class="cm">// Rest — kumpulkan argumen sisa jadi array</span>
<span class="kw">function</span> <span class="fn">jumlah</span>(...<span class="var">angka</span>) {
  <span class="kw">return</span> <span class="var">angka</span>.<span class="fn">reduce</span>((<span class="var">a</span>,<span class="var">b</span>) <span class="op">=&gt;</span> <span class="var">a</span><span class="op">+</span><span class="var">b</span>, <span class="num">0</span>);
}
<span class="fn">jumlah</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>); <span class="cm">// 10</span>
<span class="cm">// Spread — sebar array jadi argumen</span>
<span class="kw">const</span> <span class="var">nums</span> = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>];
console.<span class="fn">log</span>(Math.<span class="fn">max</span>(...<span class="var">nums</span>)); <span class="cm">// 3</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Closure</h2>
<pre data-lang="JS"><code><span class="cm">// Closure — fungsi mengingat lingkup tempat dia dibuat</span>
<span class="kw">function</span> <span class="fn">buat_counter</span>(<span class="var">awal</span> = <span class="num">0</span>) {
  <span class="kw">let</span> <span class="var">count</span> = <span class="var">awal</span>;
  <span class="kw">return</span> {
    tambah: () <span class="op">=&gt;</span> <span class="op">++</span><span class="var">count</span>,
    kurang: () <span class="op">=&gt;</span> <span class="op">--</span><span class="var">count</span>,
    nilai:  () <span class="op">=&gt;</span> <span class="var">count</span>,
  };
}
<span class="kw">const</span> <span class="var">c</span> = <span class="fn">buat_counter</span>(<span class="num">10</span>);
<span class="var">c</span>.<span class="fn">tambah</span>(); <span class="var">c</span>.<span class="fn">tambah</span>(); <span class="var">c</span>.<span class="fn">nilai</span>(); <span class="cm">// 12</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">IIFE</h2>
<pre data-lang="JS"><code><span class="cm">// Immediately Invoked Function Expression</span>
(<span class="kw">function</span>() {
  console.<span class="fn">log</span>(<span class="str">"Langsung jalan!"</span>);
})();
<span class="cm">// Arrow IIFE</span>
(() <span class="op">=&gt;</span> { console.<span class="fn">log</span>(<span class="str">"Arrow IIFE"</span>); })();
<span class="cm">// Berguna untuk isolasi scope</span>
<span class="kw">const</span> <span class="var">result</span> = (() <span class="op">=&gt;</span> {
  <span class="kw">const</span> <span class="var">private_var</span> = <span class="num">42</span>;
  <span class="kw">return</span> <span class="var">private_var</span> <span class="op">*</span> <span class="num">2</span>;
})(); <span class="cm">// 84</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Object ═══

// ─── js-obj ───
D["js-obj"]={t:"Object & Destructuring",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Object Literal","Method & this","Destructuring","Spread Object","Object Methods","Optional Chaining"],
html:`<h1 class="dt">Object &amp; Destructuring</h1><p class="ds">// Struktur data key-value paling fundamental di JavaScript.</p>
<h2 class="st" id="s0">Object Literal</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">user</span> = {
  nama: <span class="str">"Rina"</span>,
  umur: <span class="num">24</span>,
  aktif: <span class="kw">true</span>,
  <span class="cm">// Shorthand property (ES6)</span>
};
<span class="cm">// Akses</span>
<span class="var">user</span>.nama         <span class="cm">// "Rina"</span>
<span class="var">user</span>[<span class="str">"umur"</span>]      <span class="cm">// 24 — dynamic key</span>
<span class="cm">// Tambah / ubah</span>
<span class="var">user</span>.email = <span class="str">"rina@email.com"</span>;
<span class="var">user</span>.umur  = <span class="num">25</span>;
<span class="cm">// Hapus</span>
<span class="kw">delete</span> <span class="var">user</span>.aktif;
<span class="cm">// Cek key</span>
<span class="str">"nama"</span> <span class="kw">in</span> <span class="var">user</span>      <span class="cm">// true</span>
<span class="var">user</span>.<span class="fn">hasOwnProperty</span>(<span class="str">"nama"</span>) <span class="cm">// true</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Method &amp; this</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">mobil</span> = {
  merek: <span class="str">"Toyota"</span>,
  kecepatan: <span class="num">0</span>,
  <span class="fn">gas</span>(<span class="var">n</span>) {
    <span class="kw">this</span>.kecepatan <span class="op">+=</span> <span class="var">n</span>;
    <span class="kw">return</span> <span class="kw">this</span>; <span class="cm">// method chaining</span>
  },
  <span class="fn">rem</span>(<span class="var">n</span>) {
    <span class="kw">this</span>.kecepatan = Math.<span class="fn">max</span>(<span class="num">0</span>, <span class="kw">this</span>.kecepatan <span class="op">-</span> <span class="var">n</span>);
    <span class="kw">return</span> <span class="kw">this</span>;
  },
  <span class="fn">info</span>() { <span class="kw">return</span> <span class="str">\`\${this.merek}: \${this.kecepatan} km/h\`</span>; }
};
<span class="var">mobil</span>.<span class="fn">gas</span>(<span class="num">60</span>).<span class="fn">gas</span>(<span class="num">40</span>).<span class="fn">rem</span>(<span class="num">20</span>).<span class="fn">info</span>(); <span class="cm">// "Toyota: 80 km/h"</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Destructuring</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">user</span> = { nama: <span class="str">"Budi"</span>, umur: <span class="num">30</span>, kota: <span class="str">"Bandung"</span> };
<span class="cm">// Dasar</span>
<span class="kw">const</span> { <span class="var">nama</span>, <span class="var">umur</span> } = <span class="var">user</span>;
<span class="cm">// Rename</span>
<span class="kw">const</span> { <span class="var">nama</span>: <span class="var">fullName</span>, <span class="var">kota</span>: <span class="var">city</span> } = <span class="var">user</span>;
<span class="cm">// Default value</span>
<span class="kw">const</span> { <span class="var">nama</span>, <span class="var">email</span> = <span class="str">"no-email"</span> } = <span class="var">user</span>;
<span class="cm">// Nested</span>
<span class="kw">const</span> { <span class="var">address</span>: { <span class="var">street</span> } } = { address: { street: <span class="str">"Jl. Sudirman"</span> }};
<span class="cm">// Di parameter fungsi</span>
<span class="kw">function</span> <span class="fn">tampil</span>({ <span class="var">nama</span>, <span class="var">umur</span> = <span class="num">0</span> }) {
  console.<span class="fn">log</span>(<span class="str">\`\${nama} (\${umur})\`</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Spread Object</h2>
<pre data-lang="JS"><code><span class="cm">// Merge object</span>
<span class="kw">const</span> <span class="var">base</span>    = { warna: <span class="str">"hitam"</span>, ukuran: <span class="str">"M"</span> };
<span class="kw">const</span> <span class="var">custom</span>  = { ...<span class="var">base</span>, warna: <span class="str">"merah"</span> }; <span class="cm">// override</span>
<span class="cm">// Shallow clone</span>
<span class="kw">const</span> <span class="var">clone</span>   = { ...<span class="var">user</span> };
<span class="cm">// Conditional spread</span>
<span class="kw">const</span> <span class="var">opts</span>    = { ...<span class="var">defaults</span>, ...(<span class="var">isAdmin</span> <span class="op">&amp;&amp;</span> { role: <span class="str">"admin"</span> }) };</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Object Methods</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">obj</span> = { a: <span class="num">1</span>, b: <span class="num">2</span>, c: <span class="num">3</span> };
<span class="cls">Object</span>.<span class="fn">keys</span>(<span class="var">obj</span>)    <span class="cm">// ["a","b","c"]</span>
<span class="cls">Object</span>.<span class="fn">values</span>(<span class="var">obj</span>)  <span class="cm">// [1,2,3]</span>
<span class="cls">Object</span>.<span class="fn">entries</span>(<span class="var">obj</span>) <span class="cm">// [["a",1],["b",2],["c",3]]</span>
<span class="cls">Object</span>.<span class="fn">assign</span>({}, <span class="var">obj</span>) <span class="cm">// shallow clone</span>
<span class="cls">Object</span>.<span class="fn">freeze</span>(<span class="var">obj</span>)    <span class="cm">// tidak bisa diubah</span>
<span class="cm">// Loop entries</span>
<span class="kw">for</span> (<span class="kw">const</span> [<span class="var">k</span>,<span class="var">v</span>] <span class="kw">of</span> <span class="cls">Object</span>.<span class="fn">entries</span>(<span class="var">obj</span>)) {
  console.<span class="fn">log</span>(<span class="var">k</span>, <span class="str">"=&gt;"</span>, <span class="var">v</span>);
}
<span class="cm">// Object dari entries</span>
<span class="kw">const</span> <span class="var">doubled</span> = <span class="cls">Object</span>.<span class="fn">fromEntries</span>(
  <span class="cls">Object</span>.<span class="fn">entries</span>(<span class="var">obj</span>).<span class="fn">map</span>(([<span class="var">k</span>,<span class="var">v</span>]) <span class="op">=&gt;</span> [<span class="var">k</span>, <span class="var">v</span><span class="op">*</span><span class="num">2</span>])
);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: DOM ═══

// ─── js-dom ───
D["js-dom"]={t:"DOM Manipulation",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Selectors","Baca & Ubah Content","Ubah Style & Class","Create & Insert Element","Remove Element","Traversal"],
html:`<h1 class="dt">DOM Manipulation</h1><p class="ds">// Kontrol elemen HTML dari JavaScript.</p>
<h2 class="st" id="s0">Selectors</h2>
<pre data-lang="JS"><code><span class="cm">// Satu elemen</span>
<span class="fn">document</span>.<span class="fn">getElementById</span>(<span class="str">"app"</span>)
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">".btn"</span>)       <span class="cm">// CSS selector</span>
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#main p"</span>)
<span class="cm">// Banyak elemen</span>
<span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".card"</span>)   <span class="cm">// NodeList</span>
<span class="fn">document</span>.<span class="fn">getElementsByClassName</span>(<span class="str">"btn"</span>)
<span class="fn">document</span>.<span class="fn">getElementsByTagName</span>(<span class="str">"p"</span>)
<span class="cm">// NodeList ke Array</span>
<span class="kw">const</span> <span class="var">cards</span> = [...<span class="fn">document</span>.<span class="fn">querySelectorAll</span>(<span class="str">".card"</span>)];</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Baca &amp; Ubah Content</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">el</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#title"</span>);
<span class="cm">// Baca</span>
<span class="var">el</span>.textContent   <span class="cm">// teks (aman dari XSS)</span>
<span class="var">el</span>.innerHTML     <span class="cm">// HTML string</span>
<span class="var">el</span>.<span class="fn">getAttribute</span>(<span class="str">"href"</span>)
<span class="var">el</span>.dataset.id    <span class="cm">// data-id="..."</span>
<span class="cm">// Ubah</span>
<span class="var">el</span>.textContent = <span class="str">"OLPL Docs"</span>;
<span class="var">el</span>.innerHTML   = <span class="str">"&lt;strong&gt;OLPL&lt;/strong&gt;"</span>;
<span class="var">el</span>.<span class="fn">setAttribute</span>(<span class="str">"href"</span>, <span class="str">"https://olpl.dev"</span>);
<span class="var">el</span>.dataset.count = <span class="num">5</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Ubah Style &amp; Class</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">el</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">".box"</span>);
<span class="cm">// Inline style</span>
<span class="var">el</span>.style.color       = <span class="str">"#00ff41"</span>;
<span class="var">el</span>.style.display     = <span class="str">"none"</span>;
<span class="var">el</span>.style.cssText     = <span class="str">"color:#00ff41;display:flex"</span>;
<span class="cm">// classList</span>
<span class="var">el</span>.classList.<span class="fn">add</span>(<span class="str">"active"</span>, <span class="str">"visible"</span>);
<span class="var">el</span>.classList.<span class="fn">remove</span>(<span class="str">"hidden"</span>);
<span class="var">el</span>.classList.<span class="fn">toggle</span>(<span class="str">"dark"</span>);
<span class="var">el</span>.classList.<span class="fn">contains</span>(<span class="str">"active"</span>); <span class="cm">// true/false</span>
<span class="var">el</span>.classList.<span class="fn">replace</span>(<span class="str">"old"</span>, <span class="str">"new"</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Create &amp; Insert Element</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">card</span> = <span class="fn">document</span>.<span class="fn">createElement</span>(<span class="str">"div"</span>);
<span class="var">card</span>.className   = <span class="str">"card"</span>;
<span class="var">card</span>.textContent = <span class="str">"Hello"</span>;
<span class="cm">// Insert</span>
<span class="fn">document</span>.body.<span class="fn">appendChild</span>(<span class="var">card</span>);       <span class="cm">// akhir</span>
<span class="fn">document</span>.body.<span class="fn">prepend</span>(<span class="var">card</span>);          <span class="cm">// awal</span>
<span class="var">parent</span>.<span class="fn">insertBefore</span>(<span class="var">card</span>, <span class="var">sibling</span>);   <span class="cm">// sebelum sibling</span>
<span class="var">target</span>.<span class="fn">insertAdjacentHTML</span>(<span class="str">"beforeend"</span>, <span class="str">"&lt;p&gt;text&lt;/p&gt;"</span>);
<span class="cm">// beforebegin | afterbegin | beforeend | afterend</span>
<span class="cm">// Template literal HTML</span>
<span class="var">container</span>.innerHTML = <span class="var">items</span>.<span class="fn">map</span>(<span class="var">item</span> <span class="op">=&gt;</span>
  <span class="str">\`&lt;div class="item"&gt;\${item.nama}&lt;/div&gt;\`</span>
).<span class="fn">join</span>(<span class="str">""</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Remove Element</h2>
<pre data-lang="JS"><code><span class="var">el</span>.<span class="fn">remove</span>();                    <span class="cm">// hapus diri sendiri</span>
<span class="var">parent</span>.<span class="fn">removeChild</span>(<span class="var">child</span>);     <span class="cm">// hapus child tertentu</span>
<span class="var">el</span>.innerHTML = <span class="str">""</span>;              <span class="cm">// kosongkan konten</span>
<span class="var">el</span>.replaceWith(<span class="var">newEl</span>);          <span class="cm">// ganti dengan elemen lain</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Traversal</h2>
<pre data-lang="JS"><code><span class="var">el</span>.parentElement
<span class="var">el</span>.children              <span class="cm">// HTMLCollection anak-anak</span>
<span class="var">el</span>.firstElementChild
<span class="var">el</span>.lastElementChild
<span class="var">el</span>.nextElementSibling
<span class="var">el</span>.previousElementSibling
<span class="var">el</span>.<span class="fn">closest</span>(<span class="str">".container"</span>)  <span class="cm">// ancestor terdekat</span>
<span class="var">el</span>.<span class="fn">matches</span>(<span class="str">".active"</span>)     <span class="cm">// true jika cocok selector</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Events ═══

// ─── js-ev ───
D["js-ev"]={t:"Event Listener",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["addEventListener","Event Object","Event Delegation","Keyboard Events","Form Events","Custom Events"],
html:`<h1 class="dt">Event Listener</h1><p class="ds">// Respon terhadap aksi pengguna — klik, ketik, scroll, dan seterusnya.</p>
<h2 class="st" id="s0">addEventListener</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">btn</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#btn"</span>);
<span class="cm">// Tambah listener</span>
<span class="var">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  console.<span class="fn">log</span>(<span class="str">"Diklik!"</span>, <span class="var">e</span>.target);
});
<span class="cm">// Hapus listener (harus fungsi bernama)</span>
<span class="kw">function</span> <span class="fn">handler</span>(<span class="var">e</span>) { console.<span class="fn">log</span>(<span class="var">e</span>); }
<span class="var">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, <span class="var">handler</span>);
<span class="var">btn</span>.<span class="fn">removeEventListener</span>(<span class="str">"click"</span>, <span class="var">handler</span>);
<span class="cm">// Once — otomatis hapus setelah 1x</span>
<span class="var">btn</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, <span class="var">handler</span>, { once: <span class="kw">true</span> });</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Event Object</h2>
<pre data-lang="JS"><code><span class="fn">document</span>.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  <span class="var">e</span>.target         <span class="cm">// elemen yang di-klik</span>
  <span class="var">e</span>.currentTarget  <span class="cm">// elemen yang pasang listener</span>
  <span class="var">e</span>.type            <span class="cm">// "click"</span>
  <span class="var">e</span>.clientX/Y       <span class="cm">// posisi mouse</span>
  <span class="var">e</span>.<span class="fn">preventDefault</span>()   <span class="cm">// cegah default (misal submit form)</span>
  <span class="var">e</span>.<span class="fn">stopPropagation</span>()  <span class="cm">// hentikan bubble ke parent</span>
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Event Delegation</h2>
<pre data-lang="JS"><code><span class="cm">// Pasang 1 listener di parent, handle banyak child</span>
<span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"#list"</span>).<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  <span class="kw">if</span> (<span class="var">e</span>.target.<span class="fn">matches</span>(<span class="str">".item"</span>)) {
    console.<span class="fn">log</span>(<span class="str">"Item diklik:"</span>, <span class="var">e</span>.target.textContent);
  }
  <span class="kw">if</span> (<span class="var">e</span>.target.<span class="fn">closest</span>(<span class="str">".btn-delete"</span>)) {
    <span class="var">e</span>.target.<span class="fn">closest</span>(<span class="str">".item"</span>).<span class="fn">remove</span>();
  }
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Keyboard Events</h2>
<pre data-lang="JS"><code><span class="fn">document</span>.<span class="fn">addEventListener</span>(<span class="str">"keydown"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  <span class="var">e</span>.key        <span class="cm">// "Enter", "Escape", "a", "ArrowUp"</span>
  <span class="var">e</span>.code       <span class="cm">// "KeyA", "Space", "Enter"</span>
  <span class="var">e</span>.ctrlKey    <span class="cm">// true jika Ctrl ditekan</span>
  <span class="var">e</span>.shiftKey   <span class="cm">// true jika Shift ditekan</span>
  <span class="var">e</span>.altKey     <span class="cm">// true jika Alt ditekan</span>
  <span class="cm">// Shortcut: Ctrl+S</span>
  <span class="kw">if</span> (<span class="var">e</span>.ctrlKey <span class="op">&amp;&amp;</span> <span class="var">e</span>.key <span class="op">===</span> <span class="str">"s"</span>) {
    <span class="var">e</span>.<span class="fn">preventDefault</span>();
    <span class="fn">save</span>();
  }
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Form Events</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">form</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"form"</span>);
<span class="var">form</span>.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  <span class="var">e</span>.<span class="fn">preventDefault</span>(); <span class="cm">// cegah reload halaman</span>
  <span class="kw">const</span> <span class="var">data</span> = <span class="kw">new</span> <span class="cls">FormData</span>(<span class="var">e</span>.target);
  console.<span class="fn">log</span>(<span class="cls">Object</span>.<span class="fn">fromEntries</span>(<span class="var">data</span>));
});
<span class="kw">const</span> <span class="var">inp</span> = <span class="fn">document</span>.<span class="fn">querySelector</span>(<span class="str">"input"</span>);
<span class="var">inp</span>.<span class="fn">addEventListener</span>(<span class="str">"input"</span>,  (<span class="var">e</span>) <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">e</span>.target.value));
<span class="var">inp</span>.<span class="fn">addEventListener</span>(<span class="str">"change"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="str">"Changed"</span>));
<span class="var">inp</span>.<span class="fn">addEventListener</span>(<span class="str">"focus"</span>,  () <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="str">"Focused"</span>));
<span class="var">inp</span>.<span class="fn">addEventListener</span>(<span class="str">"blur"</span>,   () <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="str">"Blurred"</span>));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Custom Events</h2>
<pre data-lang="JS"><code><span class="cm">// Buat event custom</span>
<span class="kw">const</span> <span class="var">evt</span> = <span class="kw">new</span> <span class="cls">CustomEvent</span>(<span class="str">"user:login"</span>, {
  detail: { userId: <span class="num">42</span>, nama: <span class="str">"Rina"</span> },
  bubbles: <span class="kw">true</span>,
});
<span class="fn">document</span>.<span class="fn">dispatchEvent</span>(<span class="var">evt</span>);
<span class="cm">// Listen</span>
<span class="fn">document</span>.<span class="fn">addEventListener</span>(<span class="str">"user:login"</span>, (<span class="var">e</span>) <span class="op">=&gt;</span> {
  console.<span class="fn">log</span>(<span class="str">"Login:"</span>, <span class="var">e</span>.detail.nama);
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Selector ═══

// ─── js-class ───
D["js-class"]={t:"Class & OOP",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Class Dasar","Constructor","Inheritance","Static","Getter/Setter","Private Fields"],
html:`<h1 class="dt">Class &amp; OOP</h1><p class="ds">// Object-Oriented Programming di JavaScript — sintaks ES6+.</p>
<h2 class="st" id="s0">Class Dasar</h2>
<pre data-lang="JS"><code><span class="kw">class</span> <span class="cls">Animal</span> {
  <span class="kw">constructor</span>(<span class="var">nama</span>, <span class="var">suara</span>) {
    <span class="kw">this</span>.nama  = <span class="var">nama</span>;
    <span class="kw">this</span>.suara = <span class="var">suara</span>;
  }
  <span class="fn">bicara</span>() {
    <span class="kw">return</span> <span class="str">\`\${this.nama} berkata \${this.suara}!\`</span>;
  }
  <span class="kw">toString</span>() { <span class="kw">return</span> <span class="str">\`[Animal: \${this.nama}]\`</span>; }
}
<span class="kw">const</span> <span class="var">kucing</span> = <span class="kw">new</span> <span class="cls">Animal</span>(<span class="str">"Kucing"</span>, <span class="str">"Meow"</span>);
<span class="var">kucing</span>.<span class="fn">bicara</span>(); <span class="cm">// "Kucing berkata Meow!"</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Inheritance</h2>
<pre data-lang="JS"><code><span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> {
  <span class="kw">constructor</span>(<span class="var">nama</span>) {
    <span class="kw">super</span>(<span class="var">nama</span>, <span class="str">"Woof"</span>); <span class="cm">// panggil constructor parent</span>
    <span class="kw">this</span>.tipe = <span class="str">"anjing"</span>;
  }
  <span class="fn">fetch</span>(<span class="var">item</span>) { <span class="kw">return</span> <span class="str">\`\${this.nama} mengambil \${item}\`</span>; }
}
<span class="kw">const</span> <span class="var">rex</span> = <span class="kw">new</span> <span class="cls">Dog</span>(<span class="str">"Rex"</span>);
<span class="var">rex</span>.<span class="fn">bicara</span>(); <span class="cm">// inherited dari Animal</span>
<span class="var">rex</span>.<span class="fn">fetch</span>(<span class="str">"bola"</span>);
<span class="var">rex</span> <span class="kw">instanceof</span> <span class="cls">Dog</span>;    <span class="cm">// true</span>
<span class="var">rex</span> <span class="kw">instanceof</span> <span class="cls">Animal</span>; <span class="cm">// true juga!</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Static</h2>
<pre data-lang="JS"><code><span class="kw">class</span> <span class="cls">MathUtils</span> {
  <span class="kw">static</span> PI = <span class="num">3.14159</span>;
  <span class="kw">static</span> <span class="fn">lingkaran</span>(<span class="var">r</span>) { <span class="kw">return</span> <span class="cls">MathUtils</span>.PI <span class="op">*</span> <span class="var">r</span><span class="op">**</span><span class="num">2</span>; }
}
<span class="cls">MathUtils</span>.<span class="fn">lingkaran</span>(<span class="num">5</span>);  <span class="cm">// dipanggil dari class, bukan instance</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Getter / Setter</h2>
<pre data-lang="JS"><code><span class="kw">class</span> <span class="cls">Circle</span> {
  <span class="kw">constructor</span>(<span class="var">radius</span>) { <span class="kw">this</span>._r = <span class="var">radius</span>; }
  <span class="kw">get</span> <span class="fn">area</span>()   { <span class="kw">return</span> Math.PI <span class="op">*</span> <span class="kw">this</span>._r<span class="op">**</span><span class="num">2</span>; }
  <span class="kw">get</span> <span class="fn">radius</span>() { <span class="kw">return</span> <span class="kw">this</span>._r; }
  <span class="kw">set</span> <span class="fn">radius</span>(<span class="var">v</span>) {
    <span class="kw">if</span> (<span class="var">v</span> <span class="op">&lt;=</span> <span class="num">0</span>) <span class="kw">throw new</span> <span class="cls">Error</span>(<span class="str">"Radius harus positif"</span>);
    <span class="kw">this</span>._r = <span class="var">v</span>;
  }
}
<span class="kw">const</span> <span class="var">c</span> = <span class="kw">new</span> <span class="cls">Circle</span>(<span class="num">5</span>);
<span class="var">c</span>.area; <span class="cm">// 78.5 — dipanggil seperti property!</span>
<span class="var">c</span>.radius = <span class="num">10</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Private Fields</h2>
<pre data-lang="JS"><code><span class="kw">class</span> <span class="cls">BankAccount</span> {
  <span class="op">#</span>saldo = <span class="num">0</span>;  <span class="cm">// private — hanya bisa diakses di dalam class</span>
  <span class="fn">setor</span>(<span class="var">jumlah</span>) { <span class="kw">this</span>.<span class="op">#</span>saldo <span class="op">+=</span> <span class="var">jumlah</span>; }
  <span class="fn">tarik</span>(<span class="var">jumlah</span>) {
    <span class="kw">if</span> (<span class="var">jumlah</span> <span class="op">&gt;</span> <span class="kw">this</span>.<span class="op">#</span>saldo) <span class="kw">throw new</span> <span class="cls">Error</span>(<span class="str">"Saldo kurang"</span>);
    <span class="kw">this</span>.<span class="op">#</span>saldo <span class="op">-=</span> <span class="var">jumlah</span>;
  }
  <span class="kw">get</span> <span class="fn">saldo</span>() { <span class="kw">return</span> <span class="kw">this</span>.<span class="op">#</span>saldo; }
}
<span class="kw">const</span> <span class="var">rek</span> = <span class="kw">new</span> <span class="cls">BankAccount</span>();
<span class="var">rek</span>.<span class="fn">setor</span>(<span class="num">500000</span>);
<span class="var">rek</span>.<span class="op">#</span>saldo; <span class="cm">// SyntaxError — tidak bisa diakses luar</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: String ═══

// ─── js-str ───
D["js-str"]={t:"String & Template Literal",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["String Basics","String Methods","Template Literal","Regular Expression","String Immutable"],
html:`<h1 class="dt">String &amp; Template Literal</h1><p class="ds">// Teks di JavaScript — immutable, banyak method bawaan.</p>
<h2 class="st" id="s0">String Basics</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">s1</span> = <span class="str">"double quote"</span>;
<span class="kw">const</span> <span class="var">s2</span> = <span class="str">'single quote'</span>;
<span class="kw">const</span> <span class="var">s3</span> = <span class="str">\`template literal\`</span>;     <span class="cm">// backtick</span>
<span class="kw">const</span> <span class="var">multi</span> = <span class="str">\`Baris 1
Baris 2\`</span>;                         <span class="cm">// multi-line</span>
<span class="kw">const</span> <span class="var">name</span> = <span class="str">"OLPL"</span>;
<span class="kw">const</span> <span class="var">msg</span>  = <span class="str">\`Selamat datang di \${name}!\`</span>;
<span class="cm">// Escape characters</span>
<span class="str">"\n"</span>  <span class="cm">// newline</span>
<span class="str">"\t"</span>  <span class="cm">// tab</span>
<span class="str">"\\"</span>  <span class="cm">// backslash</span>
<span class="str">"\""</span>  <span class="cm">// quote di dalam double-quote string</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">String Methods</h2>
<table><tr><th>Method</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>length</code></td><td>"hello".length</td><td>5</td></tr>
<tr><td><code>toUpperCase()</code></td><td>"hello".toUpperCase()</td><td>"HELLO"</td></tr>
<tr><td><code>toLowerCase()</code></td><td>"HELLO".toLowerCase()</td><td>"hello"</td></tr>
<tr><td><code>trim()</code></td><td>"  hi  ".trim()</td><td>"hi"</td></tr>
<tr><td><code>includes(s)</code></td><td>"hello".includes("ell")</td><td>true</td></tr>
<tr><td><code>startsWith(s)</code></td><td>"hello".startsWith("he")</td><td>true</td></tr>
<tr><td><code>endsWith(s)</code></td><td>"hello".endsWith("lo")</td><td>true</td></tr>
<tr><td><code>indexOf(s)</code></td><td>"hello".indexOf("l")</td><td>2</td></tr>
<tr><td><code>slice(s,e)</code></td><td>"hello".slice(1,3)</td><td>"el"</td></tr>
<tr><td><code>split(sep)</code></td><td>"a,b,c".split(",")</td><td>["a","b","c"]</td></tr>
<tr><td><code>replace(a,b)</code></td><td>"hi ho".replace("hi","bye")</td><td>"bye ho"</td></tr>
<tr><td><code>replaceAll(a,b)</code></td><td>"aaa".replaceAll("a","b")</td><td>"bbb"</td></tr>
<tr><td><code>repeat(n)</code></td><td>"ab".repeat(3)</td><td>"ababab"</td></tr>
<tr><td><code>padStart(n,c)</code></td><td>"5".padStart(3,"0")</td><td>"005"</td></tr>
<tr><td><code>at(i)</code></td><td>"hello".at(-1)</td><td>"o"</td></tr>
</table>
<h2 class="st" id="s2">Template Literal Lanjutan</h2>
<pre data-lang="JS"><code><span class="cm">// Ekspresi apapun</span>
<span class="kw">const</span> <span class="var">total</span> = <span class="str">\`Total: \${harga * qty} IDR\`</span>;
<span class="kw">const</span> <span class="var">info</span>  = <span class="str">\`Status: \${isOnline ? "Online" : "Offline"}\`</span>;
<span class="cm">// Tagged template (advanced)</span>
<span class="kw">function</span> <span class="fn">highlight</span>(<span class="var">strings</span>, ...<span class="var">vals</span>) {
  <span class="kw">return</span> <span class="var">strings</span>.<span class="fn">reduce</span>((<span class="var">acc</span>,<span class="var">str</span>,<span class="var">i</span>) <span class="op">=&gt;</span>
    <span class="var">acc</span> <span class="op">+</span> <span class="var">str</span> <span class="op">+</span> (<span class="var">vals</span>[<span class="var">i</span>] <span class="op">?</span> <span class="str">\`&lt;em&gt;\${vals[i]}&lt;/em&gt;\`</span> <span class="op">:</span> <span class="str">""</span>), <span class="str">""</span>
  );
}
<span class="fn">highlight</span><span class="str">\`Nama: \${user} Skor: \${skor}\`</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ JS: Scope & Closure ═══

// ─── js-scope ───
D["js-scope"]={t:"Scope, Hoisting & Closure",lang:"JavaScript",lk:"js",color:"#ffd166",
toc:["Scope","Block Scope","Hoisting","Temporal Dead Zone","Closure","Module Pattern"],
html:`<h1 class="dt">Scope, Hoisting &amp; Closure</h1><p class="ds">// Cara JavaScript mengelola akses variabel.</p>
<h2 class="st" id="s0">Scope</h2>
<pre data-lang="JS"><code><span class="cm">// Global scope</span>
<span class="kw">const</span> <span class="var">GLOBAL</span> = <span class="str">"bisa diakses di mana saja"</span>;
<span class="kw">function</span> <span class="fn">outer</span>() {
  <span class="kw">const</span> <span class="var">outerVar</span> = <span class="str">"di outer"</span>;
  <span class="kw">function</span> <span class="fn">inner</span>() {
    <span class="kw">const</span> <span class="var">innerVar</span> = <span class="str">"di inner"</span>;
    console.<span class="fn">log</span>(<span class="var">outerVar</span>); <span class="cm">// ✅ akses parent scope</span>
    console.<span class="fn">log</span>(<span class="var">GLOBAL</span>);   <span class="cm">// ✅ akses global</span>
  }
  <span class="cm">// console.log(innerVar); ← ReferenceError</span>
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Block Scope</h2>
<pre data-lang="JS"><code><span class="kw">if</span> (<span class="kw">true</span>) {
  <span class="kw">var</span> <span class="var">a</span> = <span class="num">1</span>;   <span class="cm">// function scope — BOCOR ke luar!</span>
  <span class="kw">let</span> <span class="var">b</span> = <span class="num">2</span>;   <span class="cm">// block scope</span>
  <span class="kw">const</span> <span class="var">c</span> = <span class="num">3</span>; <span class="cm">// block scope</span>
}
console.<span class="fn">log</span>(<span class="var">a</span>); <span class="cm">// 1 — var bocor ❌</span>
console.<span class="fn">log</span>(<span class="var">b</span>); <span class="cm">// ReferenceError ✅</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Hoisting</h2>
<pre data-lang="JS"><code><span class="cm">// var dihoisting ke atas (nilai = undefined)</span>
console.<span class="fn">log</span>(<span class="var">x</span>); <span class="cm">// undefined (bukan error!)</span>
<span class="kw">var</span> <span class="var">x</span> = <span class="num">5</span>;
<span class="cm">// function declaration hoisted sepenuhnya</span>
<span class="fn">greet</span>(); <span class="cm">// "Hello!" — bisa dipanggil sebelum deklarasi</span>
<span class="kw">function</span> <span class="fn">greet</span>() { console.<span class="fn">log</span>(<span class="str">"Hello!"</span>); }
<span class="cm">// let/const: TDZ — tidak bisa diakses sebelum deklarasi</span>
console.<span class="fn">log</span>(<span class="var">y</span>); <span class="cm">// ReferenceError (TDZ)</span>
<span class="kw">let</span> <span class="var">y</span> = <span class="num">10</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Temporal Dead Zone</h2>
<pre data-lang="JS"><code><span class="cm">// TDZ: let/const ada tapi belum bisa diakses</span>
{
  <span class="cm">// -- TDZ untuk 'nama' dimulai --</span>
  console.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="var">nama</span>); <span class="cm">// ReferenceError (beda dengan undefined!)</span>
  <span class="kw">let</span> <span class="var">nama</span> = <span class="str">"Rina"</span>;
  <span class="cm">// -- TDZ berakhir --</span>
  console.<span class="fn">log</span>(<span class="var">nama</span>); <span class="cm">// "Rina"</span>
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Closure</h2>
<pre data-lang="JS"><code><span class="cm">// Closure: fungsi mengingat scope pembuatannya</span>
<span class="kw">function</span> <span class="fn">makeMultiplier</span>(<span class="var">factor</span>) {
  <span class="kw">return</span> (<span class="var">n</span>) <span class="op">=&gt;</span> <span class="var">n</span> <span class="op">*</span> <span class="var">factor</span>; <span class="cm">// ingat factor!</span>
}
<span class="kw">const</span> <span class="var">double</span> = <span class="fn">makeMultiplier</span>(<span class="num">2</span>);
<span class="kw">const</span> <span class="var">triple</span> = <span class="fn">makeMultiplier</span>(<span class="num">3</span>);
<span class="var">double</span>(<span class="num">5</span>);  <span class="cm">// 10</span>
<span class="var">triple</span>(<span class="num">5</span>);  <span class="cm">// 15</span>
<span class="cm">// Private state dengan closure</span>
<span class="kw">function</span> <span class="fn">counter</span>() {
  <span class="kw">let</span> <span class="var">count</span> = <span class="num">0</span>;
  <span class="kw">return</span> {
    inc: () <span class="op">=&gt;</span> <span class="op">++</span><span class="var">count</span>,
    get: () <span class="op">=&gt;</span> <span class="var">count</span>
  };
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Typography ═══
