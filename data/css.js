// ═══ OLPL Data — CSS ═══
// 11 modules

// ─── css-flex ───
D["css-flex"]={t:"Flexbox Lengkap",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Container Properties","Item Properties","Centering","Layout Patterns"],
html:`<h1 class="dt">CSS Flexbox Lengkap</h1><p class="ds">Layout satu dimensi paling powerful.</p>
<h2 class="st" id="s0">Container Properties</h2>
<pre data-lang="CSS"><code><span class="cls">.container</span> {
  <span class="at">display</span>: flex;
  <span class="at">flex-direction</span>: row;           <span class="cm">/* row | column | row-reverse | column-reverse */</span>
  <span class="at">flex-wrap</span>: nowrap;             <span class="cm">/* nowrap | wrap | wrap-reverse */</span>
  <span class="at">justify-content</span>: flex-start;  <span class="cm">/* main axis: flex-start|end|center|space-between|around|evenly */</span>
  <span class="at">align-items</span>: stretch;         <span class="cm">/* cross axis: stretch|flex-start|end|center|baseline */</span>
  <span class="at">gap</span>: <span class="num">16px</span>;
  <span class="at">gap</span>: <span class="num">12px 24px</span>;               <span class="cm">/* row-gap column-gap */</span>
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Item Properties</h2>
<pre data-lang="CSS"><code><span class="cls">.item</span> {
  <span class="at">flex</span>: <span class="num">1</span>;          <span class="cm">/* grow shrink basis — tumbuh merata */</span>
  <span class="at">flex</span>: auto;       <span class="cm">/* 1 1 auto */</span>
  <span class="at">flex</span>: none;       <span class="cm">/* 0 0 auto — ukuran tetap */</span>
  <span class="at">flex</span>: <span class="num">0 0 200px</span>;  <span class="cm">/* lebar tetap 200px */</span>
  <span class="at">align-self</span>: center;
  <span class="at">order</span>: <span class="num">0</span>;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Centering Tricks</h2>
<pre data-lang="CSS"><code><span class="cm">/* Perfect center */</span>
<span class="cls">.center</span> { <span class="at">display</span>:flex; <span class="at">justify-content</span>:center; <span class="at">align-items</span>:center; }
<span class="cm">/* Full screen */</span>
<span class="cls">.fullscreen</span> { <span class="at">display</span>:flex; <span class="at">justify-content</span>:center; <span class="at">align-items</span>:center; <span class="at">min-height</span>:<span class="num">100vh</span>; }
<span class="cm">/* Navbar */</span>
<span class="cls">.navbar</span> { <span class="at">display</span>:flex; <span class="at">justify-content</span>:space-between; <span class="at">align-items</span>:center; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Layout Patterns</h2>
<pre data-lang="CSS"><code><span class="cm">/* Sidebar + konten */</span>
<span class="cls">.layout</span>  { <span class="at">display</span>:flex; <span class="at">gap</span>:<span class="num">24px</span>; }
<span class="cls">.sidebar</span> { <span class="at">flex</span>:<span class="num">0 0 260px</span>; }
<span class="cls">.main</span>    { <span class="at">flex</span>:<span class="num">1</span>; }
<span class="cm">/* Responsive cards */</span>
<span class="cls">.cards</span> { <span class="at">display</span>:flex; <span class="at">flex-wrap</span>:wrap; <span class="at">gap</span>:<span class="num">16px</span>; }
<span class="cls">.card</span>  { <span class="at">flex</span>:<span class="num">1 1 280px</span>; } <span class="cm">/* min 280px, tumbuh jika bisa */</span>
<span class="cm">/* Footer stick to bottom */</span>
<span class="cls">body</span> { <span class="at">display</span>:flex; <span class="at">flex-direction</span>:column; <span class="at">min-height</span>:<span class="num">100vh</span>; }
<span class="cls">main</span> { <span class="at">flex</span>:<span class="num">1</span>; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── css-grid ───
D["css-grid"]={t:"CSS Grid Lengkap",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Grid Container","fr unit & repeat","Template Areas","Item Placement","auto-fill & minmax"],
html:`<h1 class="dt">CSS Grid Lengkap</h1><p class="ds">Layout dua dimensi — baris DAN kolom sekaligus.</p>
<h2 class="st" id="s0">Grid Container</h2>
<pre data-lang="CSS"><code><span class="cls">.grid</span> {
  <span class="at">display</span>: grid;
  <span class="at">grid-template-columns</span>: <span class="num">200px 1fr 1fr</span>;
  <span class="at">grid-template-rows</span>: <span class="num">60px auto 40px</span>;
  <span class="at">gap</span>: <span class="num">20px</span>;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">fr unit &amp; repeat</h2>
<pre data-lang="CSS"><code><span class="at">grid-template-columns</span>: <span class="num">1fr 2fr 1fr</span>;      <span class="cm">/* rasio 1:2:1 */</span>
<span class="at">grid-template-columns</span>: repeat(<span class="num">4</span>, <span class="num">1fr</span>);   <span class="cm">/* 4 kolom sama */</span>
<span class="at">grid-template-columns</span>: <span class="num">300px 1fr</span>;       <span class="cm">/* sidebar + konten */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Template Areas</h2>
<pre data-lang="CSS"><code><span class="cls">.page</span> {
  <span class="at">display</span>: grid;
  <span class="at">grid-template-areas</span>:
    <span class="str">"header header header"</span>
    <span class="str">"nav    main   aside"</span>
    <span class="str">"footer footer footer"</span>;
  <span class="at">grid-template-columns</span>: <span class="num">200px 1fr 160px</span>;
  <span class="at">grid-template-rows</span>: <span class="num">60px auto 50px</span>;
}
<span class="cls">header</span> { <span class="at">grid-area</span>: header; }
<span class="cls">nav</span>    { <span class="at">grid-area</span>: nav; }
<span class="cls">main</span>   { <span class="at">grid-area</span>: main; }
<span class="cls">aside</span>  { <span class="at">grid-area</span>: aside; }
<span class="cls">footer</span> { <span class="at">grid-area</span>: footer; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Item Placement</h2>
<pre data-lang="CSS"><code><span class="cls">.item</span> {
  <span class="at">grid-column</span>: <span class="num">1 / 3</span>;   <span class="cm">/* dari line 1 ke line 3 */</span>
  <span class="at">grid-column</span>: <span class="num">1 / -1</span>;  <span class="cm">/* penuh kiri ke kanan */</span>
  <span class="at">grid-column</span>: span <span class="num">2</span>;  <span class="cm">/* melebar 2 kolom */</span>
  <span class="at">grid-row</span>: <span class="num">2 / 4</span>;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">auto-fill &amp; minmax</h2>
<pre data-lang="CSS"><code><span class="cm">/* PALING berguna! Kolom responsive otomatis */</span>
<span class="at">grid-template-columns</span>: repeat(auto-fill, minmax(<span class="num">250px</span>, <span class="num">1fr</span>));
<span class="cm">/* min 250px, max isi sisa — tidak perlu media query! */</span>
<span class="at">grid-auto-rows</span>: minmax(<span class="num">100px</span>, auto);
<span class="at">grid-auto-flow</span>: row dense; <span class="cm">/* isi celah yang ada */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── css-sel ───
D["css-sel"]={t:"Selector & Spesifisitas",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Selector Dasar","Combinator","Pseudo-class","Pseudo-element","Spesifisitas","Attribute Selector"],
html:`<h1 class="dt">Selector &amp; Spesifisitas</h1><p class="ds">// Cara memilih elemen HTML yang akan di-style.</p>
<h2 class="st" id="s0">Selector Dasar</h2>
<pre data-lang="CSS"><code>*          { } <span class="cm">/* Universal — semua elemen */</span>
p          { } <span class="cm">/* Tag */</span>
.btn       { } <span class="cm">/* Class */</span>
#header    { } <span class="cm">/* ID */</span>
.a, .b     { } <span class="cm">/* Group (koma) */</span>
.btn.active{ } <span class="cm">/* AND — punya kedua class */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Combinator</h2>
<pre data-lang="CSS"><code>div p        { } <span class="cm">/* Descendant — semua p di dalam div */</span>
div &gt; p      { } <span class="cm">/* Child langsung */</span>
h2 + p       { } <span class="cm">/* Adjacent sibling — p tepat setelah h2 */</span>
h2 ~ p       { } <span class="cm">/* General sibling — semua p setelah h2 */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Pseudo-class</h2>
<pre data-lang="CSS"><code>a:hover      { } <span class="cm">/* saat di-hover */</span>
a:focus      { } <span class="cm">/* saat fokus */</span>
a:active     { } <span class="cm">/* saat diklik */</span>
a:visited    { } <span class="cm">/* link yang sudah dikunjungi */</span>
li:first-child    { }
li:last-child     { }
li:nth-child(2)   { } <span class="cm">/* anak ke-2 */</span>
li:nth-child(odd) { } <span class="cm">/* ganjil */</span>
li:nth-child(3n)  { } <span class="cm">/* kelipatan 3 */</span>
p:not(.special)   { } <span class="cm">/* bukan .special */</span>
input:checked     { }
input:disabled    { }
input:placeholder-shown { }
:is(h1,h2,h3)     { } <span class="cm">/* shortcut group */</span>
:where(.a,.b)     { } <span class="cm">/* seperti :is tapi spesifisitas 0 */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Pseudo-element</h2>
<pre data-lang="CSS"><code>p::first-line  { } <span class="cm">/* baris pertama */</span>
p::first-letter{ } <span class="cm">/* huruf pertama */</span>
.el::before    { content: "»"; } <span class="cm">/* sebelum konten */</span>
.el::after     { content: "";  } <span class="cm">/* setelah konten */</span>
input::placeholder { color: #666; }
::selection    { background: #00ff4133; } <span class="cm">/* teks di-select */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Spesifisitas</h2>
<table><tr><th>Selector</th><th>Nilai</th><th>Contoh</th></tr>
<tr><td>Inline style</td><td>1000</td><td>style="..."</td></tr>
<tr><td>ID</td><td>100</td><td>#header</td></tr>
<tr><td>Class / Attr / Pseudo-class</td><td>10</td><td>.btn :hover [type]</td></tr>
<tr><td>Tag / Pseudo-element</td><td>1</td><td>p ::before</td></tr>
<tr><td>Universal</td><td>0</td><td>*</td></tr></table>
<pre data-lang="CSS"><code><span class="cm">/* Spesifisitas lebih tinggi = menang */</span>
#nav .link:hover { }  <span class="cm">/* 100+10+10 = 120 */</span>
.nav .link       { }  <span class="cm">/* 10+10 = 20 — kalah */</span>
<span class="cm">/* !important override semua — hindari kecuali terpaksa */</span>
color: red !important;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Attribute Selector</h2>
<pre data-lang="CSS"><code>[type="text"]   { } <span class="cm">/* persis sama */</span>
[href^="https"] { } <span class="cm">/* mulai dengan */</span>
[href$=".pdf"]  { } <span class="cm">/* akhiri dengan */</span>
[class*="icon"] { } <span class="cm">/* mengandung */</span>
[lang|="en"]    { } <span class="cm">/* sama atau diawali "en-" */</span>
[disabled]      { } <span class="cm">/* hanya ada atributnya */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ Python: Dict ═══

// ─── css-box ───
D["css-box"]={t:"Box Model",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Box Model","margin","padding","border","box-sizing","outline vs border"],
html:`<h1 class="dt">Box Model</h1><p class="ds">// Setiap elemen HTML adalah kotak — konten + padding + border + margin.</p>
<h2 class="st" id="s0">Box Model</h2>
<div class="cb info"><div class="cbt">ℹ Diagram</div>content → padding → border → margin (dari dalam ke luar)</div>
<pre data-lang="CSS"><code>.box {
  width: 200px;     /* ukuran KONTEN (default) */
  height: 100px;
  padding: 20px;    /* jarak konten ke border */
  border: 2px solid #00ff41;
  margin: 16px;     /* jarak ke elemen lain */
  /* Total lebar = 200+20+20+2+2 = 244px */
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">margin</h2>
<pre data-lang="CSS"><code>margin: 16px;              /* semua sisi */
margin: 8px 16px;          /* atas-bawah kiri-kanan */
margin: 8px 16px 12px 0;   /* atas kanan bawah kiri */
margin-top: 8px;
margin: 0 auto;            /* tengahkan horizontal */
/* Negative margin */
margin-top: -10px;         /* geser ke atas */
/* Margin collapse — 2 margin vertikal → ambil yg terbesar */
.a { margin-bottom: 20px; }
.b { margin-top: 16px; }
/* Jarak = 20px, bukan 36px! */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">padding</h2>
<pre data-lang="CSS"><code>padding: 16px;
padding: 8px 16px;
padding: 8px 16px 12px 0;
/* Tidak ada negative padding */
/* % — relatif terhadap LEBAR parent */
padding: 10%;   /* 10% dari lebar parent */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">border</h2>
<pre data-lang="CSS"><code>border: 2px solid #00ff41;
border-top: 1px dashed;
border-radius: 8px;                    /* semua sudut */
border-radius: 8px 0 8px 0;           /* TL TR BR BL */
border-radius: 50%;                    /* lingkaran */
border-radius: 20px 5px;              /* TL-BR, TR-BL */
/* CSS outline (tidak mempengaruhi layout) */
outline: 2px solid #00ff41;
outline-offset: 4px;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">box-sizing</h2>
<pre data-lang="CSS"><code>/* ✅ Best practice — set global */
*, *::before, *::after {
  box-sizing: border-box;
}
/* border-box: width/height TERMASUK padding + border */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  /* Total tetap 200px! padding masuk ke dalam */
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ React: Component ═══

// ─── css-typ ───
D["css-typ"]={t:"Typography & Font",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Font Properties","Google Fonts","line-height & letter-spacing","Text Properties","Web Fonts","Variable Fonts"],
html:`<h1 class="dt">Typography &amp; Font</h1><p class="ds">// Kontrol tampilan teks — font, spasi, dekorasi, alignment.</p>
<h2 class="st" id="s0">Font Properties</h2>
<pre data-lang="CSS"><code>font-family: 'Orbitron', 'Share Tech Mono', monospace;
font-size: 16px;          /* absolute */
font-size: 1.5rem;        /* relative ke root (16px default) */
font-size: 1.2em;         /* relative ke parent */
font-size: clamp(14px, 2vw, 20px); /* responsive! */
font-weight: 400;         /* normal */
font-weight: 700;         /* bold */
font-weight: 900;         /* black */
font-style: italic;
font-style: normal;
/* Shorthand */
font: italic 700 1.2rem/1.5 'Orbitron', monospace;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Google Fonts</h2>
<pre data-lang="HTML"><code>&lt;link href="https://fonts.googleapis.com/css2?
  family=Orbitron:wght@400;700;900
  &amp;family=JetBrains+Mono:wght@400;600
  &amp;display=swap" rel="stylesheet"&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">line-height &amp; letter-spacing</h2>
<pre data-lang="CSS"><code>line-height: 1.6;       /* unitless — 1.6x font-size */
line-height: 24px;
letter-spacing: 0.05em; /* tracking */
letter-spacing: 2px;
word-spacing: 4px;
/* Heading: rapat */
h1 { letter-spacing: -0.02em; line-height: 1.1; }
/* Body: lega */
p  { letter-spacing: 0; line-height: 1.6; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Text Properties</h2>
<pre data-lang="CSS"><code>text-align: left | center | right | justify;
text-transform: uppercase | lowercase | capitalize;
text-decoration: none | underline | line-through;
text-decoration: underline dotted #00ff41;
text-indent: 2em;
text-overflow: ellipsis; /* potong teks */
white-space: nowrap;     /* jangan wrap */
/* 1 baris ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Multi-baris ellipsis */
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Text Effects</h2>
<pre data-lang="CSS"><code>/* Gradient text */
.grad-text {
  background: linear-gradient(90deg, #00ff41, #7c6fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
/* Glow text */
.glow { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff4188; }
/* Stroke text */
.stroke {
  -webkit-text-stroke: 1px #00ff41;
  color: transparent;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Color & Gradient ═══

// ─── css-col ───
D["css-col"]={t:"Warna & Gradient",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Format Warna","opacity & alpha","linear-gradient","radial-gradient","conic-gradient","CSS Custom Properties"],
html:`<h1 class="dt">Warna &amp; Gradient</h1><p class="ds">// Semua cara mendefinisikan warna dan gradient di CSS.</p>
<h2 class="st" id="s0">Format Warna</h2>
<pre data-lang="CSS"><code>color: red;                  /* named */
color: #00ff41;              /* hex 6 digit */
color: #0f4;                 /* hex 3 digit shorthand */
color: #00ff4180;            /* hex + alpha */
color: rgb(0, 255, 65);
color: rgba(0, 255, 65, 0.5);
color: hsl(135, 100%, 50%);  /* hue saturation lightness */
color: hsla(135, 100%, 50%, 0.5);
/* Modern (CSS Color 4) */
color: oklch(80% 0.2 145);
color: color-mix(in srgb, #00ff41 50%, #7c6fff);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">opacity &amp; alpha</h2>
<pre data-lang="CSS"><code>opacity: 0.5;                  /* semua elemen + children */
background: rgba(0,255,65,0.1); /* hanya background */
background: #00ff411a;          /* hex alpha (26 = ~10%) */
/* Hex alpha chart: 100%=ff 90%=e6 80%=cc 50%=80 30%=4d 10%=1a */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">linear-gradient</h2>
<pre data-lang="CSS"><code>background: linear-gradient(#00ff41, #7c6fff);
background: linear-gradient(to right, #00ff41, #7c6fff);
background: linear-gradient(135deg, #00ff41, #7c6fff);
background: linear-gradient(90deg, #00ff41 0%, #7c6fff 50%, #ff6b6b 100%);
/* Hard stop */
background: linear-gradient(90deg, #00ff41 50%, #000 50%);
/* Repeating */
background: repeating-linear-gradient(45deg, #0a2a0a 0px, #0a2a0a 10px, #0d3d0d 10px, #0d3d0d 20px);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">radial-gradient</h2>
<pre data-lang="CSS"><code>background: radial-gradient(circle, #00ff41, #000);
background: radial-gradient(ellipse at top, #00ff41, transparent);
background: radial-gradient(circle at 30% 70%, #00ff4133, transparent 60%);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">conic-gradient</h2>
<pre data-lang="CSS"><code>/* Pie chart */
background: conic-gradient(#00ff41 0% 30%, #7c6fff 30% 70%, #ff6b6b 70%);
border-radius: 50%;
/* Color wheel */
background: conic-gradient(red, yellow, green, cyan, blue, magenta, red);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Position ═══

// ─── css-pos ───
D["css-pos"]={t:"Position",lang:"CSS",lk:"css",color:"#c084fc",
toc:["static","relative","absolute","fixed","sticky","z-index"],
html:`<h1 class="dt">CSS Position</h1><p class="ds">// Kontrol penempatan elemen di halaman.</p>
<h2 class="st" id="s0">static (default)</h2>
<pre data-lang="CSS"><code>position: static;
/* Default — mengikuti normal flow, top/left/etc tidak berlaku */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">relative</h2>
<pre data-lang="CSS"><code>position: relative;
top: 10px;   /* geser dari posisi normal, tidak keluar dari flow */
left: 20px;
/* Dipakai sebagai anchor untuk absolute children */
.parent { position: relative; }
.child  { position: absolute; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">absolute</h2>
<pre data-lang="CSS"><code>/* Keluar dari normal flow
   Posisi relatif ke ancestor position:relative terdekat */
.modal-overlay {
  position: absolute;
  inset: 0;   /* shorthand: top:0 right:0 bottom:0 left:0 */
  background: rgba(0,0,0,0.5);
}
.badge {
  position: absolute;
  top: -8px; right: -8px;   /* pojok kanan atas parent */
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">fixed</h2>
<pre data-lang="CSS"><code>/* Relatif ke viewport — tidak bergerak saat scroll */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
}
.scroll-top-btn {
  position: fixed;
  bottom: 20px; right: 20px;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">sticky</h2>
<pre data-lang="CSS"><code>/* Gabungan relative + fixed — menempel saat di-scroll */
.section-header {
  position: sticky;
  top: 60px;   /* menempel 60px dari atas viewport */
  z-index: 10;
  background: var(--bg);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">z-index</h2>
<pre data-lang="CSS"><code>/* Urutan tumpuk — lebih tinggi = di atas */
.backdrop { z-index: 100; }
.modal    { z-index: 200; }
.toast    { z-index: 300; }
/* z-index hanya berlaku pada positioned elements */
/* (relative, absolute, fixed, sticky) */
/* Stacking context baru dibuat oleh: */
/* position + z-index, opacity < 1, transform, filter */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Shadow ═══

// ─── css-shad ───
D["css-shad"]={t:"Shadow",lang:"CSS",lk:"css",color:"#c084fc",
toc:["box-shadow","text-shadow","drop-shadow filter","Layered Shadows","Glow Effects"],
html:`<h1 class="dt">Shadow</h1><p class="ds">// Bayangan untuk depth dan efek glow.</p>
<h2 class="st" id="s0">box-shadow</h2>
<pre data-lang="CSS"><code>/* offset-x offset-y blur-radius spread-radius color */
box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
box-shadow: 0 0 20px #00ff4155;         /* glow */
box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); /* inner shadow */
/* Multiple */
box-shadow:
  0 1px 3px rgba(0,0,0,0.12),
  0 4px 12px rgba(0,0,0,0.08),
  0 0 20px rgba(0,255,65,0.1);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">text-shadow</h2>
<pre data-lang="CSS"><code>/* offset-x offset-y blur color */
text-shadow: 0 0 10px #00ff41;
text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
/* Matrix glow effect */
.matrix-text {
  text-shadow:
    0 0 7px  #00ff41,
    0 0 10px #00ff41,
    0 0 21px #00ff41,
    0 0 42px #00cc33;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">drop-shadow filter</h2>
<pre data-lang="CSS"><code>/* Mengikuti bentuk konten (PNG transparan) */
filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
filter: drop-shadow(0 0 12px #00ff41);
/* Lebih baik dari box-shadow untuk SVG/PNG */
img { filter: drop-shadow(2px 4px 6px #000); }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Glow Effects</h2>
<pre data-lang="CSS"><code>/* Neon button */
.neon-btn {
  border: 1px solid #00ff41;
  color: #00ff41;
  box-shadow:
    0 0 5px  #00ff41,
    0 0 10px #00ff41,
    inset 0 0 5px #00ff41;
  transition: box-shadow 0.3s;
}
.neon-btn:hover {
  box-shadow:
    0 0 10px #00ff41,
    0 0 25px #00ff41,
    0 0 50px #00ff41,
    inset 0 0 10px #00ff41;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Transform ═══

// ─── css-tfm ───
D["css-tfm"]={t:"Transform (2D & 3D)",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Transform 2D","Transform 3D","perspective","transform-origin","will-change"],
html:`<h1 class="dt">CSS Transform</h1><p class="ds">// Gerakkan, putar, dan ubah skala elemen tanpa mempengaruhi layout.</p>
<h2 class="st" id="s0">Transform 2D</h2>
<pre data-lang="CSS"><code>transform: translate(20px, 10px);   /* pindah */
transform: translateX(50%);
transform: scale(1.5);              /* perbesar */
transform: scale(2, 0.5);           /* X dan Y berbeda */
transform: rotate(45deg);           /* putar */
transform: skewX(10deg);            /* miring */
/* Multiple — urutan penting! */
transform: translateX(50px) rotate(45deg) scale(1.2);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Transform 3D</h2>
<pre data-lang="CSS"><code>.scene { perspective: 1000px; }     /* parent */
.card  { transform-style: preserve-3d; }
transform: rotateX(30deg);
transform: rotateY(45deg);
transform: translateZ(50px);        /* mendekat ke penonton */
transform: perspective(500px) rotateY(20deg); /* inline */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">transform-origin</h2>
<pre data-lang="CSS"><code>transform-origin: center;           /* default */
transform-origin: top left;
transform-origin: 50% 100%;
transform-origin: 0 0;              /* pojok kiri atas */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">will-change &amp; GPU</h2>
<pre data-lang="CSS"><code>/* Beritahu browser untuk persiapkan GPU layer */
.animasi { will-change: transform, opacity; }
/* Hanya tambahkan jika benar-benar dibutuhkan */
/* Terlalu banyak will-change boros memory */
/* GPU-friendly: transform, opacity */
/* CPU-heavy (hindari animasikan): width, height, top, left */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Variable ═══

// ─── css-var ───
D["css-var"]={t:"CSS Variable",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Deklarasi & Pakai","Fallback","JavaScript","Theming","Responsive Variables"],
html:`<h1 class="dt">CSS Variable (Custom Property)</h1><p class="ds">// Variabel native CSS — powerful untuk theming dan maintenance.</p>
<h2 class="st" id="s0">Deklarasi &amp; Pakai</h2>
<pre data-lang="CSS"><code>/* Deklarasi di :root = global */
:root {
  --acc: #00ff41;
  --bg: #000a00;
  --radius: 8px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --font-mono: 'Share Tech Mono', monospace;
}
/* Pakai */
.btn {
  background: var(--acc);
  border-radius: var(--radius);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-mono);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Fallback</h2>
<pre data-lang="CSS"><code>/* var(--nama, fallback) */
color: var(--text-color, #ffffff);
font-size: var(--size, var(--base-size, 16px)); /* nested fallback */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">JavaScript Interop</h2>
<pre data-lang="JS"><code><span class="cm">// Baca CSS variable</span>
<span class="fn">getComputedStyle</span>(document.documentElement)
  .<span class="fn">getPropertyValue</span>(<span class="str">'--acc'</span>).trim(); <span class="cm">// "#00ff41"</span>
<span class="cm">// Ubah CSS variable (instant theme switch!)</span>
document.documentElement.style.<span class="fn">setProperty</span>(<span class="str">'--acc'</span>, <span class="str">'#ff6b6b'</span>);
<span class="cm">// Stagger animation</span>
items.<span class="fn">forEach</span>((<span class="var">el</span>, <span class="var">i</span>) <span class="op">=&gt;</span> {
  <span class="var">el</span>.style.<span class="fn">setProperty</span>(<span class="str">'--i'</span>, <span class="var">i</span>);
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Dark/Light Theme</h2>
<pre data-lang="CSS"><code>:root { --bg: #000a00; --txt: #a0ffb0; }
[data-theme="light"] { --bg: #f0fff4; --txt: #003010; }
/* Toggle di JS */
/* document.documentElement.dataset.theme = "light"; */</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Responsive ═══

// ─── css-resp ───
D["css-resp"]={t:"Responsive & Media Query",lang:"CSS",lk:"css",color:"#c084fc",
toc:["Media Query","Breakpoints","Mobile First","Fluid Typography","Container Query"],
html:`<h1 class="dt">Responsive &amp; Media Query</h1><p class="ds">// Buat layout yang menyesuaikan semua ukuran layar.</p>
<h2 class="st" id="s0">Media Query</h2>
<pre data-lang="CSS"><code>@media (max-width: 768px) { }    /* lebar maks */
@media (min-width: 768px) { }    /* lebar min */
@media (768px &lt;= width &lt; 1200px) { } /* range (modern) */
@media (orientation: portrait)  { }
@media (prefers-color-scheme: dark) { }
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
@media print { .sidebar { display: none; } }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Breakpoints Umum</h2>
<table><tr><th>Nama</th><th>px</th><th>Perangkat</th></tr>
<tr><td>xs</td><td>&lt; 480px</td><td>HP kecil</td></tr>
<tr><td>sm</td><td>480–767px</td><td>HP besar</td></tr>
<tr><td>md</td><td>768–1023px</td><td>Tablet</td></tr>
<tr><td>lg</td><td>1024–1279px</td><td>Laptop</td></tr>
<tr><td>xl</td><td>1280–1535px</td><td>Desktop</td></tr>
<tr><td>2xl</td><td>≥ 1536px</td><td>Wide screen</td></tr></table>
<h2 class="st" id="s2">Mobile First</h2>
<pre data-lang="CSS"><code>/* Mobile First: mulai dari mobile, tambah untuk besar */
.grid { grid-template-columns: 1fr; }           /* default: mobile */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Fluid Typography &amp; Spacing</h2>
<pre data-lang="CSS"><code>/* clamp(min, preferred, max) */
font-size: clamp(14px, 2.5vw, 20px);
padding: clamp(16px, 4vw, 48px);
/* Fluid grid tanpa media query */
grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Container Query</h2>
<pre data-lang="CSS"><code>/* Berdasarkan ukuran PARENT, bukan viewport! */
.card-wrapper { container-type: inline-size; }
@container (min-width: 400px) {
  .card { display: flex; }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ TypeScript: Types ═══
