// ═══ OLPL Data — PY ═══
// 3 modules

// ─── py-list ───
D["py-list"]={t:"List, Tuple & Set",lang:"Python",lk:"py",color:"#4db8ff",
toc:["List & Methods","Tuple","Set & Operasi Himpunan","Comprehension"],
html:`<h1 class="dt">List, Tuple &amp; Set</h1><p class="ds">Tiga struktur data koleksi utama Python.</p>
<h2 class="st" id="s0">List &amp; Methods</h2>
<pre data-lang="Python"><code><span class="cm"># Ordered, mutable, boleh duplikat</span>
buah = [<span class="str">"apel"</span>, <span class="str">"mangga"</span>, <span class="str">"jeruk"</span>]
buah[<span class="num">0</span>]      <span class="cm"># "apel"</span>
buah[-<span class="num">1</span>]     <span class="cm"># "jeruk" — dari belakang</span>
buah[<span class="num">1</span>:<span class="num">3</span>]    <span class="cm"># ["mangga","jeruk"]</span>
buah[::-<span class="num">1</span>]   <span class="cm"># balik list</span>
<span class="cm"># Method penting</span>
buah.<span class="fn">append</span>(<span class="str">"anggur"</span>)
buah.<span class="fn">insert</span>(<span class="num">0</span>, <span class="str">"pisang"</span>)
buah.<span class="fn">remove</span>(<span class="str">"apel"</span>)
buah.<span class="fn">pop</span>()          <span class="cm"># hapus & return terakhir</span>
buah.<span class="fn">sort</span>()
buah.<span class="fn">sort</span>(reverse=<span class="kw">True</span>)
<span class="fn">sorted</span>(buah, key=<span class="fn">len</span>)  <span class="cm"># return baru, tidak ubah asli</span>
buah.<span class="fn">reverse</span>()
buah.<span class="fn">index</span>(<span class="str">"mangga"</span>)   <span class="cm"># cari index</span>
buah.<span class="fn">count</span>(<span class="str">"apel"</span>)    <span class="cm"># hitung kemunculan</span>
buah.<span class="fn">extend</span>([<span class="str">"kiwi"</span>])
buah.<span class="fn">copy</span>()            <span class="cm"># shallow copy</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Tuple</h2>
<pre data-lang="Python"><code><span class="cm"># Ordered, IMMUTABLE</span>
koordinat = (<span class="num">10.5</span>, -<span class="num">6.2</span>)
single    = (<span class="num">1</span>,)  <span class="cm"># perlu trailing comma!</span>
x, y = koordinat   <span class="cm"># unpacking</span>
<span class="cm"># Named tuple</span>
<span class="kw">from</span> collections <span class="kw">import</span> namedtuple
Point = namedtuple(<span class="str">'Point'</span>, [<span class="str">'x'</span>, <span class="str">'y'</span>])
p = <span class="fn">Point</span>(<span class="num">1</span>, <span class="num">2</span>); p.x  <span class="cm"># 1</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Set &amp; Operasi Himpunan</h2>
<pre data-lang="Python"><code><span class="cm"># Unordered, unique — tidak ada duplikat</span>
s = {<span class="str">"merah"</span>, <span class="str">"hijau"</span>, <span class="str">"biru"</span>}
s.<span class="fn">add</span>(<span class="str">"kuning"</span>)
s.<span class="fn">discard</span>(<span class="str">"merah"</span>)  <span class="cm"># tidak error jika tidak ada</span>
a = {<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>}; b = {<span class="num">3</span>,<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>}
a | b   <span class="cm"># union: {1,2,3,4,5,6}</span>
a &amp; b   <span class="cm"># intersect: {3,4}</span>
a - b   <span class="cm"># difference: {1,2}</span>
a ^ b   <span class="cm"># symmetric diff: {1,2,5,6}</span>
<span class="cm"># Hapus duplikat dari list</span>
unik = <span class="fn">list</span>(<span class="fn">set</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">3</span>]))</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Comprehension</h2>
<pre data-lang="Python"><code><span class="cm"># List</span>
kuadrat = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
genap   = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="cm"># Set</span>
unik_len = {<span class="fn">len</span>(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"hello"</span>, <span class="str">"hey"</span>]}  <span class="cm"># {2,5,3}</span>
<span class="cm"># Dict</span>
d = {w: <span class="fn">len</span>(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"apel"</span>, <span class="str">"mangga"</span>]}  <span class="cm"># {"apel":4, "mangga":6}</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── py-dict ───
D["py-dict"]={t:"Dictionary",lang:"Python",lk:"py",color:"#4db8ff",
toc:["Membuat Dict","Akses & Modifikasi","Method","Nested Dict","Dict Comprehension","defaultdict"],
html:`<h1 class="dt">Dictionary</h1><p class="ds">// Struktur data key-value di Python — unordered (Python 3.7+ ordered by insert).</p>
<h2 class="st" id="s0">Membuat Dict</h2>
<pre data-lang="Python"><code><span class="cm"># Literal</span>
user = {<span class="str">"nama"</span>: <span class="str">"Andi"</span>, <span class="str">"umur"</span>: <span class="num">25</span>, <span class="str">"kota"</span>: <span class="str">"Jakarta"</span>}
<span class="cm"># dict()</span>
cfg  = <span class="fn">dict</span>(host=<span class="str">"localhost"</span>, port=<span class="num">5432</span>)
<span class="cm"># Dari list pasangan</span>
d    = <span class="fn">dict</span>([(<span class="str">"a"</span>,<span class="num">1</span>),(<span class="str">"b"</span>,<span class="num">2</span>)])</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Akses &amp; Modifikasi</h2>
<pre data-lang="Python"><code>user[<span class="str">"nama"</span>]           <span class="cm"># "Andi" — KeyError jika tidak ada</span>
user.<span class="fn">get</span>(<span class="str">"email"</span>)      <span class="cm"># None — aman</span>
user.<span class="fn">get</span>(<span class="str">"email"</span>, <span class="str">"-"</span>) <span class="cm"># "-" — default value</span>
user[<span class="str">"email"</span>] = <span class="str">"andi@mail.com"</span>   <span class="cm"># tambah/ubah</span>
<span class="kw">del</span> user[<span class="str">"kota"</span>]                    <span class="cm"># hapus</span>
user.<span class="fn">pop</span>(<span class="str">"umur"</span>)                    <span class="cm"># hapus + return</span>
user.<span class="fn">pop</span>(<span class="str">"x"</span>, <span class="kw">None</span>)                 <span class="cm"># aman jika tidak ada</span>
<span class="str">"nama"</span> <span class="kw">in</span> user          <span class="cm"># True — cek key</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Method</h2>
<pre data-lang="Python"><code>user.<span class="fn">keys</span>()    <span class="cm"># dict_keys(["nama","umur"...])</span>
user.<span class="fn">values</span>()  <span class="cm"># dict_values([...])</span>
user.<span class="fn">items</span>()   <span class="cm"># dict_items([("nama","Andi"),...])</span>
user.<span class="fn">update</span>({<span class="str">"umur"</span>: <span class="num">26</span>, <span class="str">"hobi"</span>: <span class="str">"coding"</span>})
user.<span class="fn">copy</span>()   <span class="cm"># shallow copy</span>
user.<span class="fn">clear</span>()  <span class="cm"># kosongkan</span>
<span class="cm"># Merge (Python 3.9+)</span>
merged = dict1 | dict2
dict1 |= dict2
<span class="cm"># Loop</span>
<span class="kw">for</span> k, v <span class="kw">in</span> user.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="var">f</span><span class="str">"{k}: {v}"</span>)</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Nested Dict</h2>
<pre data-lang="Python"><code>data = {
    <span class="str">"user"</span>: {<span class="str">"nama"</span>: <span class="str">"Rina"</span>, <span class="str">"skill"</span>: [<span class="str">"Python"</span>, <span class="str">"JS"</span>]},
    <span class="str">"config"</span>: {<span class="str">"debug"</span>: <span class="kw">True</span>, <span class="str">"port"</span>: <span class="num">8080</span>},
}
data[<span class="str">"user"</span>][<span class="str">"nama"</span>]       <span class="cm"># "Rina"</span>
data[<span class="str">"user"</span>][<span class="str">"skill"</span>][<span class="num">0</span>]  <span class="cm"># "Python"</span>
<span class="cm"># Aman akses nested</span>
data.<span class="fn">get</span>(<span class="str">"user"</span>, {}).<span class="fn">get</span>(<span class="str">"email"</span>)  <span class="cm"># None</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Dict Comprehension</h2>
<pre data-lang="Python"><code><span class="cm"># Dasar</span>
kuadrat = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>)}
<span class="cm"># {0:0, 1:1, 2:4, 3:9, 4:16}</span>
<span class="cm"># Filter</span>
genap = {k: v <span class="kw">for</span> k, v <span class="kw">in</span> kuadrat.<span class="fn">items</span>() <span class="kw">if</span> v % <span class="num">2</span> == <span class="num">0</span>}
<span class="cm"># Invert dict</span>
inv = {v: k <span class="kw">for</span> k, v <span class="kw">in</span> {<span class="str">"a"</span>:<span class="num">1</span>,<span class="str">"b"</span>:<span class="num">2</span>}.<span class="fn">items</span>()}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">defaultdict</h2>
<pre data-lang="Python"><code><span class="kw">from</span> collections <span class="kw">import</span> defaultdict, Counter
<span class="cm"># defaultdict — tidak KeyError, auto buat default</span>
dd = <span class="fn">defaultdict</span>(<span class="fn">list</span>)
dd[<span class="str">"python"</span>].<span class="fn">append</span>(<span class="str">"Django"</span>)
dd[<span class="str">"python"</span>].<span class="fn">append</span>(<span class="str">"FastAPI"</span>)
<span class="cm"># Counter — hitung frekuensi</span>
c = <span class="fn">Counter</span>([<span class="str">"a"</span>,<span class="str">"b"</span>,<span class="str">"a"</span>,<span class="str">"c"</span>,<span class="str">"a"</span>])
c.<span class="fn">most_common</span>(<span class="num">2</span>)  <span class="cm"># [("a",3),("b",1)]</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ SQL: Aggregate ═══

// ─── py-fn ───
D["py-fn"]={t:"Fungsi & Lambda",lang:"Python",lk:"py",color:"#4db8ff",
toc:["Definisi Fungsi","Parameter","*args & **kwargs","Lambda","Decorator","Generator"],
html:`<h1 class="dt">Fungsi &amp; Lambda</h1><p class="ds">// Blok kode yang dapat dipanggil ulang di Python.</p>
<h2 class="st" id="s0">Definisi Fungsi</h2>
<pre data-lang="Python"><code><span class="kw">def</span> <span class="fn">sapa</span>(nama):
    <span class="str">"""Docstring: dokumentasi fungsi."""</span>
    <span class="kw">return</span> <span class="var">f</span><span class="str">"Halo, {nama}!"</span>
<span class="cm"># Type hints (Python 3.5+)</span>
<span class="kw">def</span> <span class="fn">tambah</span>(a: <span class="cls">int</span>, b: <span class="cls">int</span>) -&gt; <span class="cls">int</span>:
    <span class="kw">return</span> a + b
<span class="cm"># Default parameter</span>
<span class="kw">def</span> <span class="fn">greet</span>(nama: <span class="cls">str</span>, salam: <span class="cls">str</span> = <span class="str">"Halo"</span>) -&gt; <span class="cls">str</span>:
    <span class="kw">return</span> <span class="var">f</span><span class="str">"{salam}, {nama}!"</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">*args &amp; **kwargs</h2>
<pre data-lang="Python"><code><span class="kw">def</span> <span class="fn">jumlah</span>(*args):       <span class="cm"># tuple</span>
    <span class="kw">return</span> <span class="fn">sum</span>(args)
<span class="fn">jumlah</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>)        <span class="cm"># 10</span>
<span class="kw">def</span> <span class="fn">info</span>(**kwargs):      <span class="cm"># dict</span>
    <span class="kw">for</span> k, v <span class="kw">in</span> kwargs.<span class="fn">items</span>():
        <span class="fn">print</span>(<span class="var">f</span><span class="str">"{k}: {v}"</span>)
<span class="fn">info</span>(nama=<span class="str">"Budi"</span>, umur=<span class="num">25</span>)
<span class="cm"># Unpack saat memanggil</span>
nums = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
<span class="fn">jumlah</span>(*nums)</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Lambda</h2>
<pre data-lang="Python"><code><span class="cm"># lambda params: expression</span>
kuadrat = <span class="kw">lambda</span> x: x**<span class="num">2</span>
tambah  = <span class="kw">lambda</span> a, b: a + b
<span class="cm"># Berguna di sort/filter/map</span>
users = [{"nama":"Zara","umur":25},{"nama":"Andi","umur":30}]
users.<span class="fn">sort</span>(key=<span class="kw">lambda</span> u: u[<span class="str">"umur"</span>])
hasil = <span class="fn">list</span>(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x > <span class="num">0</span>, [-1,2,-3,4]))</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Decorator</h2>
<pre data-lang="Python"><code><span class="kw">def</span> <span class="fn">timer</span>(func):
    <span class="kw">import</span> time
    <span class="kw">def</span> <span class="fn">wrapper</span>(*args, **kwargs):
        start = time.<span class="fn">time</span>()
        result = <span class="fn">func</span>(*args, **kwargs)
        <span class="fn">print</span>(<span class="var">f</span><span class="str">"{func.__name__}: {time.time()-start:.4f}s"</span>)
        <span class="kw">return</span> result
    <span class="kw">return</span> wrapper
<span class="at">@timer</span>
<span class="kw">def</span> <span class="fn">proses</span>():
    <span class="fn">sum</span>(<span class="fn">range</span>(<span class="num">1_000_000</span>))</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};
