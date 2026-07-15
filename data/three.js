// ═══ OLPL Data — THREE ═══
// 3 modules

// ─── th-setup ───
D["th-setup"]={t:"Three.js — Setup & Scene",lang:"Three.js",lk:"three",color:"#7dd3fc",
toc:["Instalasi","3 Komponen Wajib","Renderer","Camera","Mesh & Loop","Orbit Controls"],
html:`<h1 class="dt">Three.js — Setup &amp; Scene</h1><p class="ds">Library 3D di browser berbasis WebGL — objek 3D interaktif tanpa shader manual.</p>
<h2 class="st" id="s0">Instalasi</h2>
<pre data-lang="bash"><code><span class="cm"># npm</span>
npm install three
<span class="cm"># CDN</span>
&lt;script type="module"&gt;
  import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
&lt;/script&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">3 Komponen Wajib</h2>
<pre data-lang="JS"><code><span class="kw">import</span> * <span class="kw">as</span> THREE <span class="kw">from</span> <span class="str">'three'</span>;
<span class="kw">const</span> <span class="var">scene</span>    = <span class="kw">new</span> THREE.<span class="cls">Scene</span>();
<span class="kw">const</span> <span class="var">camera</span>   = <span class="kw">new</span> THREE.<span class="cls">PerspectiveCamera</span>(<span class="num">75</span>, w/h, <span class="num">0.1</span>, <span class="num">1000</span>);
<span class="kw">const</span> <span class="var">renderer</span> = <span class="kw">new</span> THREE.<span class="cls">WebGLRenderer</span>({ antialias: <span class="kw">true</span> });
renderer.<span class="fn">setSize</span>(w, h);
document.body.<span class="fn">appendChild</span>(renderer.domElement);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Renderer</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">renderer</span> = <span class="kw">new</span> THREE.<span class="cls">WebGLRenderer</span>({ antialias:<span class="kw">true</span>, alpha:<span class="kw">true</span> });
renderer.<span class="fn">setSize</span>(w, h);
renderer.<span class="fn">setPixelRatio</span>(Math.<span class="fn">min</span>(devicePixelRatio, <span class="num">2</span>));
renderer.setClearColor(<span class="num">0x0d0f14</span>);
renderer.shadowMap.enabled = <span class="kw">true</span>;
<span class="cm">// Responsive resize</span>
window.<span class="fn">addEventListener</span>(<span class="str">'resize'</span>, () <span class="op">=&gt;</span> {
  camera.aspect = innerWidth / innerHeight;
  camera.<span class="fn">updateProjectionMatrix</span>();
  renderer.<span class="fn">setSize</span>(innerWidth, innerHeight);
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Camera</h2>
<pre data-lang="JS"><code><span class="cm">// PerspectiveCamera(fov, aspect, near, far)</span>
<span class="kw">const</span> <span class="var">cam</span> = <span class="kw">new</span> THREE.<span class="cls">PerspectiveCamera</span>(<span class="num">75</span>, w/h, <span class="num">0.1</span>, <span class="num">1000</span>);
cam.position.<span class="fn">set</span>(<span class="num">0</span>, <span class="num">2</span>, <span class="num">5</span>);
cam.<span class="fn">lookAt</span>(<span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Mesh &amp; Render Loop</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">geo</span>  = <span class="kw">new</span> THREE.<span class="cls">BoxGeometry</span>(<span class="num">1</span>, <span class="num">1</span>, <span class="num">1</span>);
<span class="kw">const</span> <span class="var">mat</span>  = <span class="kw">new</span> THREE.<span class="cls">MeshBasicMaterial</span>({ color: <span class="num">0x4fffb0</span> });
<span class="kw">const</span> <span class="var">cube</span> = <span class="kw">new</span> THREE.<span class="cls">Mesh</span>(<span class="var">geo</span>, <span class="var">mat</span>);
scene.<span class="fn">add</span>(<span class="var">cube</span>); <span class="cm">// WAJIB!</span>
<span class="kw">const</span> <span class="var">clock</span> = <span class="kw">new</span> THREE.<span class="cls">Clock</span>();
<span class="kw">function</span> <span class="fn">animate</span>() {
  <span class="fn">requestAnimationFrame</span>(<span class="var">animate</span>);
  <span class="kw">const</span> <span class="var">t</span> = <span class="var">clock</span>.<span class="fn">getElapsedTime</span>();
  <span class="var">cube</span>.rotation.y = <span class="var">t</span>;
  renderer.<span class="fn">render</span>(<span class="var">scene</span>, <span class="var">camera</span>);
}
<span class="fn">animate</span>();</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">Orbit Controls</h2>
<pre data-lang="JS"><code><span class="kw">import</span> { OrbitControls } <span class="kw">from</span> <span class="str">'three/addons/controls/OrbitControls.js'</span>;
<span class="kw">const</span> <span class="var">ctrl</span> = <span class="kw">new</span> <span class="cls">OrbitControls</span>(<span class="var">camera</span>, renderer.domElement);
<span class="var">ctrl</span>.enableDamping = <span class="kw">true</span>;
<span class="var">ctrl</span>.dampingFactor = <span class="num">0.05</span>;
<span class="cm">// Di loop: ctrl.update();</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── th-geom ───
D["th-geom"]={t:"Three.js — Geometry & Material",lang:"Three.js",lk:"three",color:"#7dd3fc",
toc:["Geometri Bawaan","Material Types","Texture","Custom BufferGeometry","Wireframe"],
html:`<h1 class="dt">Geometry &amp; Material</h1><p class="ds">Semua bentuk dan material 3D di Three.js.</p>
<h2 class="st" id="s0">Geometri Bawaan</h2>
<div class="cg">
<div class="card"><div class="ci">🟫</div><div class="cn">BoxGeometry</div><div class="cd">Kotak — Box(w,h,d)</div></div>
<div class="card"><div class="ci">🔵</div><div class="cn">SphereGeometry</div><div class="cd">Bola — Sphere(r,wSeg,hSeg)</div></div>
<div class="card"><div class="ci">🍩</div><div class="cn">TorusGeometry</div><div class="cd">Donut — Torus(r,tube)</div></div>
<div class="card"><div class="ci">📄</div><div class="cn">PlaneGeometry</div><div class="cd">Bidang datar</div></div>
<div class="card"><div class="ci">🌐</div><div class="cn">TorusKnot</div><div class="cd">Simpul cantik</div></div>
<div class="card"><div class="ci">💎</div><div class="cn">Octahedron</div><div class="cd">Berlian 8 sisi</div></div>
</div>
<pre data-lang="JS"><code><span class="kw">new</span> THREE.<span class="cls">BoxGeometry</span>(<span class="num">1</span>, <span class="num">1</span>, <span class="num">1</span>);
<span class="kw">new</span> THREE.<span class="cls">SphereGeometry</span>(<span class="num">1</span>, <span class="num">32</span>, <span class="num">16</span>);    <span class="cm">// halus</span>
<span class="kw">new</span> THREE.<span class="cls">SphereGeometry</span>(<span class="num">1</span>, <span class="num">6</span>, <span class="num">4</span>);     <span class="cm">// low-poly</span>
<span class="kw">new</span> THREE.<span class="cls">TorusGeometry</span>(<span class="num">1</span>, <span class="num">0.3</span>, <span class="num">16</span>, <span class="num">100</span>);
<span class="kw">new</span> THREE.<span class="cls">TorusKnotGeometry</span>(<span class="num">1</span>, <span class="num">0.3</span>, <span class="num">100</span>, <span class="num">16</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Material Types</h2>
<table><tr><th>Material</th><th>Deskripsi</th></tr>
<tr><td><code>MeshBasicMaterial</code></td><td>Warna flat, tidak terpengaruh cahaya</td></tr>
<tr><td><code>MeshLambertMaterial</code></td><td>Matte, butuh cahaya, performa baik</td></tr>
<tr><td><code>MeshPhongMaterial</code></td><td>Shiny, specular highlight</td></tr>
<tr><td><code>MeshStandardMaterial</code></td><td>PBR — roughness & metalness</td></tr>
<tr><td><code>MeshPhysicalMaterial</code></td><td>PBR lanjutan — clearcoat, transmission</td></tr>
<tr><td><code>LineBasicMaterial</code></td><td>Untuk garis/wireframe</td></tr></table>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">mat</span> = <span class="kw">new</span> THREE.<span class="cls">MeshStandardMaterial</span>({
  color: <span class="num">0x4fffb0</span>,
  roughness: <span class="num">0.3</span>,
  metalness: <span class="num">0.8</span>,
  wireframe: <span class="kw">false</span>,
  transparent: <span class="kw">true</span>,
  opacity: <span class="num">0.9</span>,
});</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Texture</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">loader</span>  = <span class="kw">new</span> THREE.<span class="cls">TextureLoader</span>();
<span class="kw">const</span> <span class="var">texture</span> = <span class="var">loader</span>.<span class="fn">load</span>(<span class="str">'/textures/color.jpg'</span>);
<span class="kw">const</span> <span class="var">mat</span> = <span class="kw">new</span> THREE.<span class="cls">MeshStandardMaterial</span>({ map: <span class="var">texture</span> });

<span class="cm">// Normal map (bumpy effect)</span>
<span class="var">mat</span>.normalMap = <span class="var">loader</span>.<span class="fn">load</span>(<span class="str">'/textures/normal.jpg'</span>);
<span class="cm">// Roughness map</span>
<span class="var">mat</span>.roughnessMap = <span class="var">loader</span>.<span class="fn">load</span>(<span class="str">'/textures/roughness.jpg'</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Custom BufferGeometry</h2>
<pre data-lang="JS"><code><span class="kw">const</span> <span class="var">geo</span> = <span class="kw">new</span> THREE.<span class="cls">BufferGeometry</span>();
<span class="kw">const</span> <span class="var">verts</span> = <span class="kw">new</span> <span class="cls">Float32Array</span>([
  -<span class="num">1</span>,-<span class="num">1</span>,<span class="num">0</span>,  <span class="num">1</span>,-<span class="num">1</span>,<span class="num">0</span>,  <span class="num">0</span>,<span class="num">1</span>,<span class="num">0</span>  <span class="cm">// segitiga</span>
]);
<span class="var">geo</span>.<span class="fn">setAttribute</span>(<span class="str">'position'</span>, <span class="kw">new</span> THREE.<span class="cls">BufferAttribute</span>(<span class="var">verts</span>, <span class="num">3</span>));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ─── th-light ───
D["th-light"]={t:"Three.js — Lighting",lang:"Three.js",lk:"three",color:"#7dd3fc",
toc:["AmbientLight","DirectionalLight","PointLight","SpotLight","Shadow","Helpers"],
html:`<h1 class="dt">Three.js — Lighting</h1><p class="ds">// Cahaya menentukan bagaimana material terlihat di scene 3D.</p>
<div class="cb warn"><div class="cbt">⚠ Perhatian</div>MeshBasicMaterial tidak terpengaruh cahaya. Gunakan MeshLambertMaterial, MeshPhongMaterial, atau MeshStandardMaterial.</div>
<h2 class="st" id="s0">AmbientLight</h2>
<pre data-lang="JS"><code><span class="cm">// Cahaya merata dari semua arah — tidak ada shadow</span>
<span class="kw">const</span> <span class="var">ambient</span> = <span class="kw">new</span> THREE.<span class="cls">AmbientLight</span>(<span class="num">0xffffff</span>, <span class="num">0.3</span>);
<span class="cm">// (warna, intensitas)</span>
scene.<span class="fn">add</span>(<span class="var">ambient</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">DirectionalLight</h2>
<pre data-lang="JS"><code><span class="cm">// Seperti matahari — sinar paralel dari satu arah</span>
<span class="kw">const</span> <span class="var">sun</span> = <span class="kw">new</span> THREE.<span class="cls">DirectionalLight</span>(<span class="num">0xffffff</span>, <span class="num">1</span>);
<span class="var">sun</span>.position.<span class="fn">set</span>(<span class="num">5</span>, <span class="num">10</span>, <span class="num">7</span>);
<span class="var">sun</span>.castShadow = <span class="kw">true</span>;
<span class="var">sun</span>.shadow.mapSize.width  = <span class="num">2048</span>;
<span class="var">sun</span>.shadow.mapSize.height = <span class="num">2048</span>;
scene.<span class="fn">add</span>(<span class="var">sun</span>);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">PointLight</h2>
<pre data-lang="JS"><code><span class="cm">// Seperti bohlam — menyebar ke semua arah</span>
<span class="kw">const</span> <span class="var">lamp</span> = <span class="kw">new</span> THREE.<span class="cls">PointLight</span>(<span class="num">0x00ff41</span>, <span class="num">2</span>, <span class="num">10</span>);
<span class="cm">// (warna, intensitas, jarak_max)</span>
<span class="var">lamp</span>.position.<span class="fn">set</span>(<span class="num">0</span>, <span class="num">3</span>, <span class="num">0</span>);
scene.<span class="fn">add</span>(<span class="var">lamp</span>);
<span class="cm">// Animasikan posisi lampu</span>
<span class="kw">function</span> <span class="fn">animate</span>() {
  <span class="fn">requestAnimationFrame</span>(<span class="var">animate</span>);
  <span class="kw">const</span> <span class="var">t</span> = <span class="var">clock</span>.<span class="fn">getElapsedTime</span>();
  <span class="var">lamp</span>.position.x = Math.<span class="fn">sin</span>(<span class="var">t</span>) <span class="op">*</span> <span class="num">3</span>;
  <span class="var">lamp</span>.position.z = Math.<span class="fn">cos</span>(<span class="var">t</span>) <span class="op">*</span> <span class="num">3</span>;
  renderer.<span class="fn">render</span>(<span class="var">scene</span>, <span class="var">camera</span>);
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">SpotLight</h2>
<pre data-lang="JS"><code><span class="cm">// Sorotan — kerucut cahaya yang bisa diarahkan</span>
<span class="kw">const</span> <span class="var">spot</span> = <span class="kw">new</span> THREE.<span class="cls">SpotLight</span>(<span class="num">0xffffff</span>, <span class="num">2</span>);
<span class="var">spot</span>.position.<span class="fn">set</span>(<span class="num">0</span>, <span class="num">5</span>, <span class="num">0</span>);
<span class="var">spot</span>.angle      = Math.PI / <span class="num">6</span>; <span class="cm">// 30°</span>
<span class="var">spot</span>.penumbra   = <span class="num">0.2</span>;          <span class="cm">// lembut di tepi</span>
<span class="var">spot</span>.castShadow = <span class="kw">true</span>;
<span class="var">spot</span>.target     = <span class="var">cube</span>;         <span class="cm">// arah ke objek</span>
scene.<span class="fn">add</span>(<span class="var">spot</span>, <span class="var">spot</span>.target);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Shadow Setup</h2>
<pre data-lang="JS"><code><span class="cm">// 1. Aktifkan di renderer</span>
renderer.shadowMap.enabled = <span class="kw">true</span>;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap; <span class="cm">// bayangan halus</span>
<span class="cm">// 2. Objek yang melempar bayangan</span>
<span class="var">cube</span>.castShadow    = <span class="kw">true</span>;
<span class="cm">// 3. Objek yang menerima bayangan</span>
<span class="var">plane</span>.receiveShadow = <span class="kw">true</span>;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ SVG: Gradient ═══
