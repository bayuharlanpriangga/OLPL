// ═══ OLPL Data — ANIM ═══
// 4 modules

// ─── an-kf ───
D["an-kf"]={t:"@keyframes Lengkap",lang:"Animasi CSS",lk:"anim",color:"#4fffb0",
toc:["Syntax","from/to vs %","Animation Properties","Animasi Siap Pakai","Stagger"],
html:`<h1 class="dt">@keyframes Lengkap</h1><p class="ds">Buat animasi CSS murni — smooth, performant, browser-native.</p>
<h2 class="st" id="s0">Syntax @keyframes</h2>
<pre data-lang="CSS"><code><span class="at">@keyframes</span> <span class="var">namaAnimasi</span> {
  <span class="kw">from</span> { <span class="at">opacity</span>: <span class="num">0</span>; }
  <span class="kw">to</span>   { <span class="at">opacity</span>: <span class="num">1</span>; }
}
<span class="cls">.kotak</span> {
  <span class="at">animation</span>: <span class="var">namaAnimasi</span> <span class="num">1s</span> ease-in-out infinite;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">from/to vs Persentase</h2>
<pre data-lang="CSS"><code><span class="at">@keyframes</span> <span class="var">bounce</span> {
  <span class="num">0%</span>   { <span class="at">transform</span>: translateY(<span class="num">0</span>); }
  <span class="num">30%</span>  { <span class="at">transform</span>: translateY(-<span class="num">40px</span>); }
  <span class="num">50%</span>  { <span class="at">transform</span>: translateY(<span class="num">0</span>); }
  <span class="num">70%</span>  { <span class="at">transform</span>: translateY(-<span class="num">20px</span>); }
  <span class="num">100%</span> { <span class="at">transform</span>: translateY(<span class="num">0</span>); }
}
<span class="cm">/* Gabung frame */</span>
<span class="at">@keyframes</span> <span class="var">pulse</span> {
  <span class="num">0%</span>, <span class="num">100%</span> { <span class="at">transform</span>: scale(<span class="num">1</span>); }
  <span class="num">50%</span>      { <span class="at">transform</span>: scale(<span class="num">1.1</span>); }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Animation Properties</h2>
<table><tr><th>Property</th><th>Value</th></tr>
<tr><td><code>animation-name</code></td><td>nama @keyframes</td></tr>
<tr><td><code>animation-duration</code></td><td>1s, 500ms</td></tr>
<tr><td><code>animation-timing-function</code></td><td>ease, linear, cubic-bezier()</td></tr>
<tr><td><code>animation-delay</code></td><td>0.3s, -1s</td></tr>
<tr><td><code>animation-iteration-count</code></td><td>1, infinite, 3</td></tr>
<tr><td><code>animation-direction</code></td><td>normal, reverse, alternate</td></tr>
<tr><td><code>animation-fill-mode</code></td><td>forwards, backwards, both</td></tr>
<tr><td><code>animation-play-state</code></td><td>running, paused</td></tr></table>
<pre data-lang="CSS"><code><span class="cls">.elemen</span> {
  <span class="cm">/* shorthand: name duration timing delay count direction fill */</span>
  <span class="at">animation</span>: <span class="var">fadeIn</span> <span class="num">0.6s</span> ease-out <span class="num">0.2s</span> <span class="num">1</span> normal forwards;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Animasi Siap Pakai</h2>
<pre data-lang="CSS"><code><span class="cm">/* Fade In Up */</span>
<span class="at">@keyframes</span> <span class="var">fadeInUp</span> {
  <span class="kw">from</span> { <span class="at">opacity</span>:<span class="num">0</span>; <span class="at">transform</span>:translateY(<span class="num">30px</span>); }
  <span class="kw">to</span>   { <span class="at">opacity</span>:<span class="num">1</span>; <span class="at">transform</span>:translateY(<span class="num">0</span>); }
}
<span class="cm">/* Spin loading */</span>
<span class="at">@keyframes</span> <span class="var">spin</span> { <span class="kw">to</span> { <span class="at">transform</span>: rotate(<span class="num">360deg</span>); } }
<span class="cls">.loader</span> { <span class="at">animation</span>: <span class="var">spin</span> <span class="num">1s</span> linear infinite; }
<span class="cm">/* Shimmer skeleton */</span>
<span class="at">@keyframes</span> <span class="var">shimmer</span> {
  <span class="kw">from</span> { <span class="at">background-position</span>: -<span class="num">200%</span> <span class="num">0</span>; }
  <span class="kw">to</span>   { <span class="at">background-position</span>:  <span class="num">200%</span> <span class="num">0</span>; }
}
<span class="cls">.skeleton</span> {
  <span class="at">background</span>: linear-gradient(<span class="num">90deg</span>, #1a1a2e <span class="num">25%</span>, #2a2a4e <span class="num">50%</span>, #1a1a2e <span class="num">75%</span>);
  <span class="at">background-size</span>: <span class="num">200%</span>;
  <span class="at">animation</span>: <span class="var">shimmer</span> <span class="num">1.5s</span> infinite;
}
<span class="cm">/* Typing cursor */</span>
<span class="at">@keyframes</span> <span class="var">blink</span> { <span class="num">50%</span> { <span class="at">border-color</span>: transparent; } }
<span class="cls">.cursor</span> { <span class="at">border-right</span>: <span class="num">2px</span> solid; <span class="at">animation</span>: <span class="var">blink</span> <span class="num">0.8s</span> step-end infinite; }
<span class="cm">/* Heartbeat */</span>
<span class="at">@keyframes</span> <span class="var">heartbeat</span> {
  <span class="num">0%</span>,<span class="num">100%</span> { <span class="at">transform</span>: scale(<span class="num">1</span>); }
  <span class="num">14%</span>,<span class="num">42%</span> { <span class="at">transform</span>: scale(<span class="num">1.2</span>); }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Stagger Effect</h2>
<pre data-lang="CSS"><code><span class="cls">.item</span> { <span class="at">animation</span>: <span class="var">fadeInUp</span> <span class="num">0.5s</span> both; }
<span class="cls">.item</span>:nth-child(<span class="num">1</span>) { <span class="at">animation-delay</span>: <span class="num">0s</span>; }
<span class="cls">.item</span>:nth-child(<span class="num">2</span>) { <span class="at">animation-delay</span>: <span class="num">0.1s</span>; }
<span class="cls">.item</span>:nth-child(<span class="num">3</span>) { <span class="at">animation-delay</span>: <span class="num">0.2s</span>; }
<span class="cm">/* CSS Variable stagger */</span>
<span class="cls">.item</span> { <span class="at">animation-delay</span>: calc(var(<span class="at">--i</span>) * <span class="num">0.1s</span>); }
<span class="cm">/* HTML: &lt;div class="item" style="--i:0"&gt; */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── an-trans ───
D["an-trans"]={t:"CSS Transition",lang:"Animasi CSS",lk:"anim",color:"#4fffb0",
toc:["Syntax","Property Animatable","Timing Functions","Hover Effects"],
html:`<h1 class="dt">CSS Transition</h1><p class="ds">Animasi sederhana saat state berubah — hover, focus, active, dll.</p>
<h2 class="st" id="s0">Syntax</h2>
<pre data-lang="CSS"><code><span class="cm">/* transition: property duration timing delay */</span>
<span class="cls">.btn</span> {
  <span class="at">background</span>: #1a1a2e;
  <span class="at">transition</span>: background <span class="num">0.3s</span> ease;
}
<span class="cls">.btn</span>:hover { <span class="at">background</span>: #4fffb0; }
<span class="cm">/* Multiple */</span>
<span class="cls">.card</span> {
  <span class="at">transition</span>: transform <span class="num">0.3s</span> ease, box-shadow <span class="num">0.3s</span> ease;
}
<span class="cls">.card</span>:hover {
  <span class="at">transform</span>: translateY(-<span class="num">4px</span>);
  <span class="at">box-shadow</span>: <span class="num">0 12px 40px</span> rgba(<span class="num">0,0,0,.3</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Property Animatable</h2>
<table><tr><th>Kategori</th><th>Property</th></tr>
<tr><td>Warna</td><td>color, background-color, border-color</td></tr>
<tr><td>Dimensi</td><td>width, height, padding, margin</td></tr>
<tr><td>Visual</td><td>opacity, box-shadow, border-radius</td></tr>
<tr><td>Transform</td><td>transform (scale, rotate, translate)</td></tr>
<tr><td>Font</td><td>font-size, letter-spacing</td></tr></table>
<div class="cb warn"><div class="cbt">⚡ Performa</div>Gunakan <code>transform</code> dan <code>opacity</code> — diproses GPU, tidak menyebabkan layout reflow.</div>
<h2 class="st" id="s2">Timing Functions</h2>
<pre data-lang="CSS"><code><span class="at">transition-timing-function</span>: ease;
<span class="at">transition-timing-function</span>: ease-in;
<span class="at">transition-timing-function</span>: ease-out;
<span class="at">transition-timing-function</span>: ease-in-out;
<span class="at">transition-timing-function</span>: linear;
<span class="at">transition-timing-function</span>: steps(<span class="num">4</span>);
<span class="at">transition-timing-function</span>: cubic-bezier(<span class="num">0.34, 1.56, 0.64, 1</span>); <span class="cm">/* spring! */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Hover Effects Siap Pakai</h2>
<pre data-lang="CSS"><code><span class="cm">/* Glow button */</span>
<span class="cls">.btn-glow</span> { <span class="at">transition</span>: box-shadow <span class="num">0.3s</span>, transform <span class="num">0.2s</span>; }
<span class="cls">.btn-glow</span>:hover {
  <span class="at">box-shadow</span>: <span class="num">0 0 20px</span> rgba(<span class="num">79,255,176,.5</span>);
  <span class="at">transform</span>: scale(<span class="num">1.03</span>);
}
<span class="cm">/* Link underline animasi */</span>
<span class="cls">.link</span> { <span class="at">position</span>: relative; <span class="at">text-decoration</span>: none; }
<span class="cls">.link</span>::after {
  <span class="at">content</span>: <span class="str">""</span>; <span class="at">position</span>: absolute; <span class="at">bottom</span>: -<span class="num">2px</span>; <span class="at">left</span>: <span class="num">0</span>;
  <span class="at">width</span>: <span class="num">0</span>; <span class="at">height</span>: <span class="num">2px</span>; <span class="at">background</span>: currentColor;
  <span class="at">transition</span>: width <span class="num">0.3s</span> ease;
}
<span class="cls">.link</span>:hover::after { <span class="at">width</span>: <span class="num">100%</span>; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── an-2d ───
D["an-2d"]={t:"Transform 2D",lang:"Animasi CSS",lk:"anim",color:"#4fffb0",
toc:["Transform Functions","Translate","Scale","Rotate","Skew","Transform Origin"],
html:`<h1 class="dt">CSS Transform 2D</h1><p class="ds">Gerakkan, besarkan, putar, dan miringkan — tanpa menggeser layout sekitarnya.</p>
<h2 class="st" id="s0">Transform Functions</h2>
<table><tr><th>Function</th><th>Contoh</th></tr>
<tr><td><code>translate(x,y)</code></td><td>translate(20px, 10px)</td></tr>
<tr><td><code>scale(x,y)</code></td><td>scale(1.5) atau scale(2, 0.5)</td></tr>
<tr><td><code>rotate(angle)</code></td><td>rotate(45deg)</td></tr>
<tr><td><code>skew(x,y)</code></td><td>skewX(10deg)</td></tr></table>
<h2 class="st" id="s1">Translate</h2>
<pre data-lang="CSS"><code><span class="cm">/* Tengahkan elemen */</span>
<span class="cls">.center</span> {
  <span class="at">position</span>: absolute; <span class="at">top</span>: <span class="num">50%</span>; <span class="at">left</span>: <span class="num">50%</span>;
  <span class="at">transform</span>: translate(-<span class="num">50%</span>, -<span class="num">50%</span>); <span class="cm">/* -50% dari ukuran diri sendiri */</span>
}
<span class="cls">.slide</span>       { <span class="at">transform</span>: translateX(<span class="num">0</span>);    <span class="at">transition</span>: <span class="num">0.3s</span>; }
<span class="cls">.slide</span>:hover { <span class="at">transform</span>: translateX(<span class="num">10px</span>); }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Scale</h2>
<pre data-lang="CSS"><code><span class="cls">.icon</span>        { <span class="at">transition</span>: transform <span class="num">0.2s</span> cubic-bezier(<span class="num">.34,1.56,.64,1</span>); }
<span class="cls">.icon</span>:hover  { <span class="at">transform</span>: scale(<span class="num">1.2</span>); }
<span class="cls">.icon</span>:active { <span class="at">transform</span>: scale(<span class="num">0.95</span>); } <span class="cm">/* efek "ditekan" */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Rotate</h2>
<pre data-lang="CSS"><code><span class="cls">.spin</span>:hover { <span class="at">transform</span>: rotate(<span class="num">180deg</span>); <span class="at">transition</span>: <span class="num">0.5s</span>; }
<span class="at">@keyframes</span> <span class="var">rotar</span> { <span class="kw">to</span> { <span class="at">transform</span>: rotate(<span class="num">360deg</span>); } }
<span class="cls">.loader</span> { <span class="at">animation</span>: <span class="var">rotar</span> <span class="num">1s</span> linear infinite; }
<span class="cm">/* Dropdown arrow flip */</span>
<span class="cls">.arrow</span>         { <span class="at">transform</span>: rotate(<span class="num">0</span>);      <span class="at">transition</span>: <span class="num">0.3s</span>; }
<span class="cls">.open</span> <span class="cls">.arrow</span> { <span class="at">transform</span>: rotate(<span class="num">180deg</span>); }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Skew</h2>
<pre data-lang="CSS"><code><span class="cls">.parallelogram</span> {
  <span class="at">transform</span>: skewX(-<span class="num">15deg</span>);
  <span class="at">background</span>: #4fffb0; <span class="at">padding</span>: <span class="num">10px 30px</span>;
}
<span class="cls">.parallelogram</span> <span class="cls">.content</span> { <span class="at">transform</span>: skewX(<span class="num">15deg</span>); } <span class="cm">/* counter-skew */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Transform Origin</h2>
<pre data-lang="CSS"><code><span class="at">transform-origin</span>: center;        <span class="cm">/* default */</span>
<span class="at">transform-origin</span>: top left;
<span class="at">transform-origin</span>: bottom right;
<span class="cm">/* Urutan transform PENTING! */</span>
<span class="at">transform</span>: translateX(<span class="num">50px</span>) rotate(<span class="num">45deg</span>);  <span class="cm">/* geser dulu, baru rotate */</span>
<span class="at">transform</span>: rotate(<span class="num">45deg</span>) translateX(<span class="num">50px</span>);  <span class="cm">/* rotate dulu, baru geser — beda hasil! */</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── an-3d ───
D["an-3d"]={t:"Transform 3D & Perspective",lang:"Animasi CSS",lk:"anim",color:"#4fffb0",
toc:["Perspective","rotateX/Y/Z","Card Flip Effect","3D Cube","preserve-3d"],
html:`<h1 class="dt">Transform 3D &amp; Perspective</h1><p class="ds">Buat efek kedalaman 3D murni CSS — card flip, cube, dan banyak lagi.</p>
<h2 class="st" id="s0">Perspective</h2>
<pre data-lang="CSS"><code><span class="cm">/* perspective diset di PARENT */</span>
<span class="cls">.scene</span> { <span class="at">perspective</span>: <span class="num">800px</span>; }
<span class="cm">/* atau langsung */</span>
<span class="cls">.elemen</span> { <span class="at">transform</span>: perspective(<span class="num">500px</span>) rotateY(<span class="num">20deg</span>); }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">rotateX / rotateY / rotateZ</h2>
<pre data-lang="CSS"><code><span class="at">transform</span>: rotateX(<span class="num">45deg</span>);  <span class="cm">/* putar sumbu X — efek jatuh ke belakang */</span>
<span class="at">transform</span>: rotateY(<span class="num">45deg</span>);  <span class="cm">/* putar sumbu Y — efek balik halaman */</span>
<span class="at">transform</span>: rotateZ(<span class="num">45deg</span>);  <span class="cm">/* sama dengan rotate() biasa */</span>
<span class="cm">/* Tilt card on hover */</span>
<span class="cls">.card-3d</span>:hover {
  <span class="at">transform</span>: perspective(<span class="num">600px</span>) rotateY(<span class="num">10deg</span>) rotateX(-<span class="num">5deg</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Card Flip Effect</h2>
<pre data-lang="CSS"><code><span class="cls">.flip-card</span> { <span class="at">perspective</span>: <span class="num">1000px</span>; <span class="at">width</span>:<span class="num">200px</span>; <span class="at">height</span>:<span class="num">300px</span>; }
<span class="cls">.flip-inner</span> {
  <span class="at">width</span>:<span class="num">100%</span>; <span class="at">height</span>:<span class="num">100%</span>;
  <span class="at">position</span>:relative;
  <span class="at">transition</span>: transform <span class="num">0.6s</span> ease;
  <span class="at">transform-style</span>: preserve-3d; <span class="cm">/* ← KUNCI! */</span>
}
<span class="cls">.flip-card</span>:hover <span class="cls">.flip-inner</span> { <span class="at">transform</span>: rotateY(<span class="num">180deg</span>); }
<span class="cls">.front</span>, <span class="cls">.back</span> {
  <span class="at">position</span>:absolute; <span class="at">inset</span>:<span class="num">0</span>;
  <span class="at">backface-visibility</span>: hidden; <span class="cm">/* sembunyikan sisi belakang */</span>
  <span class="at">border-radius</span>:<span class="num">12px</span>;
}
<span class="cls">.back</span> { <span class="at">transform</span>: rotateY(<span class="num">180deg</span>); <span class="at">background</span>: #4fffb0; }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">3D Cube</h2>
<pre data-lang="CSS"><code><span class="cls">.cube</span> {
  <span class="at">width</span>:<span class="num">100px</span>; <span class="at">height</span>:<span class="num">100px</span>; <span class="at">position</span>:relative;
  <span class="at">transform-style</span>: preserve-3d;
  <span class="at">animation</span>: <span class="var">rotateCube</span> <span class="num">6s</span> linear infinite;
}
<span class="cls">.face</span> { <span class="at">position</span>:absolute; <span class="at">inset</span>:<span class="num">0</span>; <span class="at">background</span>:rgba(<span class="num">79,255,176,.05</span>); <span class="at">border</span>:<span class="num">1px</span> solid rgba(<span class="num">79,255,176,.3</span>); }
<span class="cls">.front</span>  { <span class="at">transform</span>: translateZ(<span class="num">50px</span>); }
<span class="cls">.back</span>   { <span class="at">transform</span>: rotateY(<span class="num">180deg</span>) translateZ(<span class="num">50px</span>); }
<span class="cls">.right</span>  { <span class="at">transform</span>: rotateY(<span class="num">90deg</span>)  translateZ(<span class="num">50px</span>); }
<span class="cls">.left</span>   { <span class="at">transform</span>: rotateY(-<span class="num">90deg</span>) translateZ(<span class="num">50px</span>); }
<span class="cls">.top</span>    { <span class="at">transform</span>: rotateX(<span class="num">90deg</span>)  translateZ(<span class="num">50px</span>); }
<span class="cls">.bottom</span> { <span class="at">transform</span>: rotateX(-<span class="num">90deg</span>) translateZ(<span class="num">50px</span>); }
<span class="at">@keyframes</span> <span class="var">rotateCube</span> {
  <span class="kw">from</span> { <span class="at">transform</span>: rotateX(<span class="num">0</span>) rotateY(<span class="num">0</span>); }
  <span class="kw">to</span>   { <span class="at">transform</span>: rotateX(<span class="num">360deg</span>) rotateY(<span class="num">360deg</span>); }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};
