// ═══ OLPL Data — SVG ═══
// 3 modules

// ─── sv-basic ───
D["sv-basic"]={t:"SVG Dasar & Viewport",lang:"SVG",lk:"svg",color:"#f472b6",
toc:["Viewport & ViewBox","Elemen Dasar","Path Commands","Teks","Grouping"],
html:`<h1 class="dt">SVG Dasar &amp; Viewport</h1><p class="ds">Scalable Vector Graphics — grafis yang tidak pecah di resolusi apapun.</p>
<h2 class="st" id="s0">Viewport &amp; ViewBox</h2>
<pre data-lang="SVG"><code>&lt;svg width="200" height="200"
     viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- viewBox: minX minY width height --&gt;
  &lt;!-- 200px display = 100 unit internal --&gt;
  &lt;circle cx="50" cy="50" r="40" fill="#4fffb0"/&gt;
&lt;/svg&gt;
&lt;!-- Responsive SVG --&gt;
&lt;svg viewBox="0 0 100 100" style="width:100%;height:auto"&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Elemen Dasar</h2>
<pre data-lang="SVG"><code>&lt;line x1="0" y1="0" x2="100" y2="100" stroke="#fff" stroke-width="2"/&gt;
&lt;circle cx="50" cy="50" r="30" fill="#4fffb0" stroke="#fff" stroke-width="2"/&gt;
&lt;rect x="10" y="10" width="80" height="50" rx="5" fill="#7c6fff"/&gt;
&lt;ellipse cx="50" cy="50" rx="40" ry="20" fill="#ffd166"/&gt;
&lt;polygon points="50,5 95,95 5,95" fill="#ff6b6b"/&gt;
&lt;path d="M 10 80 C 40 10, 65 10, 95 80" stroke="#4fffb0" stroke-width="3" fill="none"/&gt;
&lt;text x="50" y="50" text-anchor="middle" fill="white" font-size="14"&gt;Hello SVG&lt;/text&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Path Commands</h2>
<table><tr><th>Command</th><th>Deskripsi</th></tr>
<tr><td><code>M x,y</code></td><td>Move to (pindah tanpa gambar)</td></tr>
<tr><td><code>L x,y</code></td><td>Line to (garis lurus)</td></tr>
<tr><td><code>H x</code></td><td>Horizontal line</td></tr>
<tr><td><code>V y</code></td><td>Vertical line</td></tr>
<tr><td><code>C x1,y1,x2,y2,x,y</code></td><td>Cubic bezier</td></tr>
<tr><td><code>Q x1,y1,x,y</code></td><td>Quadratic bezier</td></tr>
<tr><td><code>A rx,ry,rot,arc,sweep,x,y</code></td><td>Arc (busur)</td></tr>
<tr><td><code>Z</code></td><td>Close path</td></tr></table>
<h2 class="st" id="s3">Teks &amp; Grouping</h2>
<pre data-lang="SVG"><code>&lt;g transform="translate(10,10)"&gt;  &lt;!-- group + transform --&gt;
  &lt;rect width="80" height="40" fill="#1a1a2e"/&gt;
  &lt;text y="25" x="40" text-anchor="middle" fill="#4fffb0" font-family="monospace"&gt;Code&lt;/text&gt;
&lt;/g&gt;
&lt;!-- defs untuk reuse --&gt;
&lt;defs&gt;
  &lt;circle id="dot" r="5" fill="#4fffb0"/&gt;
&lt;/defs&gt;
&lt;use href="#dot" x="10" y="10"/&gt;
&lt;use href="#dot" x="30" y="10"/&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── sv-anim ───
D["sv-anim"]={t:"SVG Animation (SMIL & CSS)",lang:"SVG",lk:"svg",color:"#f472b6",
toc:["CSS pada SVG","stroke-dasharray Trick","animate (SMIL)","animateTransform","animateMotion"],
html:`<h1 class="dt">SVG Animation</h1><p class="ds">CSS keyframes + SMIL — dua cara animasi SVG yang saling melengkapi.</p>
<h2 class="st" id="s0">CSS Animation pada SVG</h2>
<pre data-lang="CSS"><code>.my-circle {
  animation: pulsate 2s ease-in-out infinite;
  transform-origin: center;
}
@keyframes pulsate {
  0%,100% { r: 30; opacity: 1; }
  50%      { r: 45; opacity: 0.6; }
}
.gear {
  transform-origin: center;
  animation: spin 3s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">stroke-dasharray Trick (Draw Effect)</h2>
<pre data-lang="SVG"><code>&lt;style&gt;
.ring {
  stroke-dasharray: 283;    /* circumference = 2 * PI * r = 2*PI*45 ≈ 283 */
  stroke-dashoffset: 283;   /* awalnya tidak terlihat */
  transition: stroke-dashoffset 1.5s ease;
  transform: rotate(-90deg);
  transform-origin: center;
}
.ring.loaded { stroke-dashoffset: 0; }  /* muncul! */
&lt;/style&gt;
&lt;svg width="100" height="100"&gt;
  &lt;circle class="ring" cx="50" cy="50" r="45"
    fill="none" stroke="#4fffb0" stroke-width="4"/&gt;
&lt;/svg&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">animate (SMIL)</h2>
<pre data-lang="SVG"><code>&lt;circle cx="10" cy="50" r="8" fill="#4fffb0"&gt;
  &lt;animate attributeName="cx" values="10;90;10"
    dur="2s" repeatCount="indefinite"/&gt;
  &lt;animate attributeName="fill"
    values="#4fffb0;#ffd166;#ff6b6b;#4fffb0"
    dur="2s" repeatCount="indefinite"/&gt;
&lt;/circle&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">animateTransform</h2>
<pre data-lang="SVG"><code>&lt;rect width="20" height="20" fill="#7c6fff"
  x="40" y="40"&gt;
  &lt;animateTransform
    attributeName="transform" type="rotate"
    from="0 50 50" to="360 50 50"
    dur="3s" repeatCount="indefinite"/&gt;
&lt;/rect&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">animateMotion</h2>
<pre data-lang="SVG"><code>&lt;circle r="5" fill="#ffd166"&gt;
  &lt;animateMotion dur="4s" repeatCount="indefinite"
    path="M 10,50 Q 50,10 90,50 Q 50,90 10,50"/&gt;
&lt;/circle&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── sv-grad ───
D["sv-grad"]={t:"Gradient & Pattern",lang:"SVG",lk:"svg",color:"#f472b6",
toc:["linearGradient","radialGradient","Pattern","Reuse dengan use","clip-path"],
html:`<h1 class="dt">SVG Gradient &amp; Pattern</h1><p class="ds">// Isi elemen SVG dengan warna bertingkat atau pola berulang.</p>
<h2 class="st" id="s0">linearGradient</h2>
<pre data-lang="SVG"><code>&lt;svg viewBox="0 0 100 100"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"&gt;
      &lt;stop offset="0%"   stop-color="#00ff41"/&gt;
      &lt;stop offset="100%" stop-color="#7c6fff"/&gt;
    &lt;/linearGradient&gt;
  &lt;/defs&gt;
  &lt;rect width="100" height="50" fill="url(#grad)"/&gt;
  &lt;!-- Gradient diagonal --&gt;
  &lt;linearGradient id="diag" x1="0%" y1="0%" x2="100%" y2="100%"&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">radialGradient</h2>
<pre data-lang="SVG"><code>&lt;defs&gt;
  &lt;radialGradient id="rgrad" cx="50%" cy="50%" r="50%"&gt;
    &lt;stop offset="0%"   stop-color="#00ff41" stop-opacity="1"/&gt;
    &lt;stop offset="100%" stop-color="#00ff41" stop-opacity="0"/&gt;
  &lt;/radialGradient&gt;
&lt;/defs&gt;
&lt;!-- Glowing circle effect --&gt;
&lt;circle cx="50" cy="50" r="45" fill="url(#rgrad)"/&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Pattern</h2>
<pre data-lang="SVG"><code>&lt;defs&gt;
  &lt;pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"&gt;
    &lt;path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0d3d0d" stroke-width="0.5"/&gt;
  &lt;/pattern&gt;
&lt;/defs&gt;
&lt;rect width="100%" height="100%" fill="url(#grid)"/&gt;
&lt;!-- Dot pattern --&gt;
&lt;pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"&gt;
  &lt;circle cx="5" cy="5" r="1" fill="#00ff4133"/&gt;
&lt;/pattern&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">clip-path &amp; mask</h2>
<pre data-lang="SVG"><code>&lt;!-- clip-path: potong bentuk --&gt;
&lt;defs&gt;
  &lt;clipPath id="circle-clip"&gt;
    &lt;circle cx="50" cy="50" r="40"/&gt;
  &lt;/clipPath&gt;
&lt;/defs&gt;
&lt;image href="photo.jpg" width="100" height="100"
  clip-path="url(#circle-clip)"/&gt;
&lt;!-- mask: transparansi berbasis grayscale --&gt;
&lt;mask id="fade"&gt;
  &lt;linearGradient id="mg"&gt;
    &lt;stop offset="0%" stop-color="white"/&gt;
    &lt;stop offset="100%" stop-color="black"/&gt;
  &lt;/linearGradient&gt;
  &lt;rect width="100" height="100" fill="url(#mg)"/&gt;
&lt;/mask&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ CSS: Box Model ═══
