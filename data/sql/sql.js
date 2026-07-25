// ═══ OLPL Data — SQL ═══
// 3 modules

// ─── sq-sel ───
D["sq-sel"]={t:"SELECT & WHERE Filter",lang:"SQL",lk:"sql",color:"#fb923c",
toc:["SELECT Dasar","WHERE Conditions","ORDER BY","LIMIT & OFFSET","LIKE & IN","BETWEEN & NULL"],
html:`<h1 class="dt">SELECT &amp; WHERE Filter</h1><p class="ds">Perintah paling sering dipakai di SQL.</p>
<h2 class="st" id="s0">SELECT Dasar</h2>
<pre data-lang="SQL"><code><span class="cm">-- Semua kolom</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users;
<span class="cm">-- Kolom tertentu + alias</span>
<span class="kw">SELECT</span> nama <span class="kw">AS</span> nama_lengkap, email <span class="kw">AS</span> alamat_email <span class="kw">FROM</span> users;
<span class="cm">-- Kalkulasi</span>
<span class="kw">SELECT</span> nama, harga * jumlah <span class="kw">AS</span> total <span class="kw">FROM</span> order_items;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">WHERE Conditions</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> umur <span class="op">&gt;</span> <span class="num">18</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> umur <span class="op">&gt;</span> <span class="num">18</span> <span class="kw">AND</span> kota = <span class="str">'Jakarta'</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">WHERE</span> kategori = <span class="str">'Elektronik'</span> <span class="kw">OR</span> kategori = <span class="str">'Gadget'</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> <span class="kw">NOT</span> (status = <span class="str">'banned'</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">ORDER BY</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">ORDER BY</span> harga <span class="kw">DESC</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">ORDER BY</span> kota <span class="kw">ASC</span>, nama <span class="kw">ASC</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">LIMIT &amp; OFFSET</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">LIMIT</span> <span class="num">10</span>;
<span class="cm">-- Pagination: halaman 2, 10 item per halaman</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">ORDER BY</span> id <span class="kw">LIMIT</span> <span class="num">10</span> <span class="kw">OFFSET</span> <span class="num">10</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">LIKE &amp; IN</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> nama <span class="kw">LIKE</span> <span class="str">'Ahmad%'</span>;    <span class="cm">-- mulai Ahmad</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">WHERE</span> nama <span class="kw">LIKE</span> <span class="str">'%laptop%'</span>;  <span class="cm">-- mengandung laptop</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> kota <span class="kw">IN</span> (<span class="str">'Jakarta'</span>, <span class="str">'Bandung'</span>, <span class="str">'Surabaya'</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">BETWEEN &amp; NULL</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> * <span class="kw">FROM</span> produk <span class="kw">WHERE</span> harga <span class="kw">BETWEEN</span> <span class="num">100000</span> <span class="kw">AND</span> <span class="num">500000</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> phone <span class="kw">IS NULL</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> phone <span class="kw">IS NOT NULL</span>;
<span class="cm">-- ⚠️ Jangan: WHERE phone = NULL — tidak bekerja!</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── sq-join ───
D["sq-join"]={t:"SQL JOIN Lengkap",lang:"SQL",lk:"sql",color:"#fb923c",
toc:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN","Self JOIN","Multiple JOIN"],
html:`<h1 class="dt">SQL JOIN Lengkap</h1><p class="ds">Gabungkan data dari beberapa tabel.</p>
<h2 class="st" id="s0">INNER JOIN</h2>
<p>Hanya baris yang ada di KEDUA tabel.</p>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> u.nama, o.total, o.tanggal
<span class="kw">FROM</span> users u
<span class="kw">INNER JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;
<span class="cm">-- Hanya user yang punya order</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">LEFT JOIN</h2>
<pre data-lang="SQL"><code><span class="cm">-- Semua user + order mereka (NULL jika tidak ada order)</span>
<span class="kw">SELECT</span> u.nama, <span class="fn">COUNT</span>(o.id) <span class="kw">AS</span> jumlah_order
<span class="kw">FROM</span> users u
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id
<span class="kw">GROUP BY</span> u.id, u.nama;
<span class="cm">-- User tanpa order: jumlah_order = 0</span>
<span class="kw">SELECT</span> u.nama <span class="kw">FROM</span> users u
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>; <span class="cm">-- user yang BELUM pernah order</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">RIGHT &amp; FULL JOIN</h2>
<pre data-lang="SQL"><code><span class="cm">-- RIGHT: semua dari tabel kanan</span>
<span class="kw">SELECT</span> u.nama, o.total <span class="kw">FROM</span> users u <span class="kw">RIGHT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;
<span class="cm">-- FULL OUTER: semua dari kedua tabel</span>
<span class="kw">SELECT</span> u.nama, o.total <span class="kw">FROM</span> users u <span class="kw">FULL OUTER JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;
<span class="cm">-- MySQL workaround FULL OUTER:</span>
<span class="kw">SELECT</span> u.nama, o.total <span class="kw">FROM</span> users u <span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id
<span class="kw">UNION</span>
<span class="kw">SELECT</span> u.nama, o.total <span class="kw">FROM</span> users u <span class="kw">RIGHT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Self JOIN</h2>
<pre data-lang="SQL"><code><span class="cm">-- employees: id, nama, manager_id</span>
<span class="kw">SELECT</span> e.nama <span class="kw">AS</span> karyawan, m.nama <span class="kw">AS</span> manager
<span class="kw">FROM</span> employees e
<span class="kw">LEFT JOIN</span> employees m <span class="kw">ON</span> e.manager_id = m.id;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Multiple JOIN</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span> u.nama <span class="kw">AS</span> pembeli, p.nama <span class="kw">AS</span> produk,
  oi.jumlah * oi.harga <span class="kw">AS</span> subtotal
<span class="kw">FROM</span> order_items oi
<span class="kw">INNER JOIN</span> orders   o <span class="kw">ON</span> oi.order_id   = o.id
<span class="kw">INNER JOIN</span> users    u <span class="kw">ON</span> o.user_id     = u.id
<span class="kw">INNER JOIN</span> products p <span class="kw">ON</span> oi.product_id = p.id
<span class="kw">ORDER BY</span> o.id;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── sq-agg ───
D["sq-agg"]={t:"Aggregate & GROUP BY",lang:"SQL",lk:"sql",color:"#fb923c",
toc:["Fungsi Aggregate","GROUP BY","HAVING","ORDER dengan Aggregate","ROLLUP","Window Functions"],
html:`<h1 class="dt">Aggregate &amp; GROUP BY</h1><p class="ds">// Ringkas banyak baris menjadi satu nilai — hitung, total, rata-rata.</p>
<h2 class="st" id="s0">Fungsi Aggregate</h2>
<pre data-lang="SQL"><code><span class="kw">SELECT</span>
  <span class="fn">COUNT</span>(*)          <span class="kw">AS</span> total_baris,
  <span class="fn">COUNT</span>(email)      <span class="kw">AS</span> yg_punya_email,  <span class="cm">-- NULL tidak dihitung</span>
  <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> kota) <span class="kw">AS</span> kota_unik,
  <span class="fn">SUM</span>(total)        <span class="kw">AS</span> jumlah_total,
  <span class="fn">AVG</span>(total)        <span class="kw">AS</span> rata_rata,
  <span class="fn">MIN</span>(total)        <span class="kw">AS</span> terkecil,
  <span class="fn">MAX</span>(total)        <span class="kw">AS</span> terbesar
<span class="kw">FROM</span> orders;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">GROUP BY</h2>
<pre data-lang="SQL"><code><span class="cm">-- Penjualan per kategori</span>
<span class="kw">SELECT</span>
  kategori,
  <span class="fn">COUNT</span>(*) <span class="kw">AS</span> jumlah_produk,
  <span class="fn">AVG</span>(harga) <span class="kw">AS</span> harga_rata
<span class="kw">FROM</span> produk
<span class="kw">GROUP BY</span> kategori
<span class="kw">ORDER BY</span> harga_rata <span class="kw">DESC</span>;
<span class="cm">-- Group by banyak kolom</span>
<span class="kw">SELECT</span> tahun, bulan, <span class="fn">SUM</span>(total)
<span class="kw">FROM</span> orders
<span class="kw">GROUP BY</span> tahun, bulan;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">HAVING</h2>
<pre data-lang="SQL"><code><span class="cm">-- HAVING = WHERE untuk aggregate</span>
<span class="kw">SELECT</span> user_id, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> jml_order
<span class="kw">FROM</span> orders
<span class="kw">GROUP BY</span> user_id
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) <span class="op">&gt;=</span> <span class="num">5</span>   <span class="cm">-- user yang punya 5+ order</span>
<span class="kw">ORDER BY</span> jml_order <span class="kw">DESC</span>;
<span class="cm">-- Kombinasi WHERE dan HAVING</span>
<span class="kw">SELECT</span> kategori, <span class="fn">SUM</span>(harga * stok) <span class="kw">AS</span> nilai_stok
<span class="kw">FROM</span> produk
<span class="kw">WHERE</span> aktif = <span class="num">1</span>            <span class="cm">-- filter sebelum group</span>
<span class="kw">GROUP BY</span> kategori
<span class="kw">HAVING</span> nilai_stok <span class="op">&gt;</span> <span class="num">1000000</span>;  <span class="cm">-- filter setelah group</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Order Eksekusi SQL</h2>
<table><tr><th>Urutan</th><th>Clause</th><th>Fungsi</th></tr>
<tr><td>1</td><td>FROM / JOIN</td><td>Ambil data dari tabel</td></tr>
<tr><td>2</td><td>WHERE</td><td>Filter baris</td></tr>
<tr><td>3</td><td>GROUP BY</td><td>Kelompokkan</td></tr>
<tr><td>4</td><td>HAVING</td><td>Filter grup</td></tr>
<tr><td>5</td><td>SELECT</td><td>Pilih kolom</td></tr>
<tr><td>6</td><td>ORDER BY</td><td>Urutkan</td></tr>
<tr><td>7</td><td>LIMIT</td><td>Batasi hasil</td></tr></table>
<h2 class="st" id="s4">Window Functions</h2>
<pre data-lang="SQL"><code><span class="cm">-- ROW_NUMBER, RANK, SUM kumulatif</span>
<span class="kw">SELECT</span>
  nama,
  total,
  <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> total <span class="kw">DESC</span>) <span class="kw">AS</span> rank,
  <span class="fn">SUM</span>(total)   <span class="kw">OVER</span> ()                      <span class="kw">AS</span> grand_total,
  <span class="fn">SUM</span>(total)   <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> id)          <span class="kw">AS</span> running_total
<span class="kw">FROM</span> orders;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ Three.js: Lighting ═══
