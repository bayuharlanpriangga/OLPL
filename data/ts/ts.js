// ═══ OLPL Data — TS ═══
// 4 modules

// ─── ts-types ───
D["ts-types"]={t:"Types & Interface",lang:"TypeScript",lk:"ts",color:"#60a5fa",
toc:["Type Dasar","Interface","Type vs Interface","Union & Intersection","Literal Types","Type Assertion"],
html:`<h1 class="dt">Types &amp; Interface</h1><p class="ds">// Sistem tipe TypeScript — tangkap bug sebelum runtime.</p>
<h2 class="st" id="s0">Type Dasar</h2>
<pre data-lang="TS"><code><span class="cm">// Primitif</span>
<span class="kw">let</span> <span class="var">nama</span>: <span class="cls">string</span>  = <span class="str">"Budi"</span>;
<span class="kw">let</span> <span class="var">umur</span>: <span class="cls">number</span>  = <span class="num">25</span>;
<span class="kw">let</span> <span class="var">aktif</span>: <span class="cls">boolean</span> = <span class="kw">true</span>;
<span class="kw">let</span> <span class="var">data</span>: <span class="cls">null</span>    = <span class="kw">null</span>;
<span class="cm">// Array</span>
<span class="kw">let</span> <span class="var">nums</span>: <span class="cls">number</span>[]        = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>];
<span class="kw">let</span> <span class="var">tags</span>: <span class="cls">Array</span>&lt;<span class="cls">string</span>&gt;   = [<span class="str">"a"</span>,<span class="str">"b"</span>];
<span class="cm">// Tuple</span>
<span class="kw">let</span> <span class="var">pair</span>: [<span class="cls">string</span>, <span class="cls">number</span>] = [<span class="str">"age"</span>, <span class="num">25</span>];
<span class="cm">// Any, Unknown, Never, Void</span>
<span class="kw">let</span> <span class="var">anything</span>: <span class="cls">any</span>     = <span class="str">"bisa apa saja"</span>; <span class="cm">// hindari!</span>
<span class="kw">let</span> <span class="var">safe</span>: <span class="cls">unknown</span>     = <span class="fn">getData</span>();
<span class="kw">function</span> <span class="fn">log</span>(): <span class="cls">void</span>   { console.<span class="fn">log</span>(<span class="str">"hi"</span>); }
<span class="kw">function</span> <span class="fn">fail</span>(): <span class="cls">never</span> { <span class="kw">throw new</span> <span class="cls">Error</span>(<span class="str">"!"</span>); }</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Interface</h2>
<pre data-lang="TS"><code><span class="kw">interface</span> <span class="cls">User</span> {
  <span class="var">id</span>: <span class="cls">number</span>;
  <span class="var">nama</span>: <span class="cls">string</span>;
  <span class="var">email</span>?: <span class="cls">string</span>;         <span class="cm">// optional</span>
  <span class="kw">readonly</span> <span class="var">createdAt</span>: <span class="cls">Date</span>;
  <span class="fn">sapa</span>(): <span class="cls">string</span>;
}
<span class="cm">// Extend</span>
<span class="kw">interface</span> <span class="cls">Admin</span> <span class="kw">extends</span> <span class="cls">User</span> {
  <span class="var">role</span>: <span class="str">"admin"</span> | <span class="str">"super"</span>;
  <span class="var">permissions</span>: <span class="cls">string</span>[];
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Type vs Interface</h2>
<pre data-lang="TS"><code><span class="cm">// Type alias</span>
<span class="kw">type</span> <span class="cls">Point</span> = { x: <span class="cls">number</span>; y: <span class="cls">number</span> };
<span class="kw">type</span> <span class="cls">ID</span>    = <span class="cls">string</span> | <span class="cls">number</span>;
<span class="kw">type</span> <span class="cls">Fn</span>    = (<span class="var">x</span>: <span class="cls">number</span>) <span class="op">=&gt;</span> <span class="cls">string</span>;
<span class="cm">// Interface — bisa di-extend, declaration merging</span>
<span class="kw">interface</span> <span class="cls">Extendable</span> { a: <span class="cls">number</span> }
<span class="kw">interface</span> <span class="cls">Extendable</span> { b: <span class="cls">string</span> } <span class="cm">// merge otomatis!</span>
<span class="cm">// Prefer: interface untuk object, type untuk union/computed</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Union &amp; Intersection</h2>
<pre data-lang="TS"><code><span class="cm">// Union: A atau B</span>
<span class="kw">type</span> <span class="cls">Status</span> = <span class="str">"aktif"</span> | <span class="str">"nonaktif"</span> | <span class="str">"pending"</span>;
<span class="kw">type</span> <span class="cls">ID</span>     = <span class="cls">string</span> | <span class="cls">number</span>;
<span class="cm">// Intersection: A dan B sekaligus</span>
<span class="kw">type</span> <span class="cls">AdminUser</span> = <span class="cls">User</span> <span class="op">&amp;</span> <span class="cls">AdminRole</span>;
<span class="cm">// Discriminated union</span>
<span class="kw">type</span> <span class="cls">Shape</span> =
  | { kind: <span class="str">"circle"</span>; radius: <span class="cls">number</span> }
  | { kind: <span class="str">"rect"</span>; width: <span class="cls">number</span>; height: <span class="cls">number</span> };
<span class="kw">function</span> <span class="fn">area</span>(<span class="var">s</span>: <span class="cls">Shape</span>): <span class="cls">number</span> {
  <span class="kw">if</span> (<span class="var">s</span>.kind <span class="op">===</span> <span class="str">"circle"</span>) <span class="kw">return</span> Math.PI <span class="op">*</span> <span class="var">s</span>.radius<span class="op">**</span><span class="num">2</span>;
  <span class="kw">return</span> <span class="var">s</span>.width <span class="op">*</span> <span class="var">s</span>.height;
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ TypeScript: Generics ═══

// ─── ts-gen ───
D["ts-gen"]={t:"Generics",lang:"TypeScript",lk:"ts",color:"#60a5fa",
toc:["Fungsi Generic","Interface Generic","Constraint","keyof & typeof","Conditional Types"],
html:`<h1 class="dt">TypeScript Generics</h1><p class="ds">// Kode yang fleksibel dengan tetap type-safe.</p>
<h2 class="st" id="s0">Fungsi Generic</h2>
<pre data-lang="TS"><code><span class="cm">// T = Type parameter (nama bebas)</span>
<span class="kw">function</span> <span class="fn">identity</span>&lt;<span class="cls">T</span>&gt;(<span class="var">x</span>: <span class="cls">T</span>): <span class="cls">T</span> { <span class="kw">return</span> <span class="var">x</span>; }
<span class="fn">identity</span>&lt;<span class="cls">string</span>&gt;(<span class="str">"hello"</span>);  <span class="cm">// explicit</span>
<span class="fn">identity</span>(<span class="num">42</span>);               <span class="cm">// inferred</span>
<span class="cm">// Multiple generics</span>
<span class="kw">function</span> <span class="fn">pair</span>&lt;<span class="cls">A</span>, <span class="cls">B</span>&gt;(<span class="var">a</span>: <span class="cls">A</span>, <span class="var">b</span>: <span class="cls">B</span>): [<span class="cls">A</span>, <span class="cls">B</span>] { <span class="kw">return</span> [<span class="var">a</span>, <span class="var">b</span>]; }
<span class="cm">// Arrow generic</span>
<span class="kw">const</span> <span class="fn">first</span> = &lt;<span class="cls">T</span>,&gt;(<span class="var">arr</span>: <span class="cls">T</span>[]) =&gt; <span class="var">arr</span>[<span class="num">0</span>];</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Interface Generic</h2>
<pre data-lang="TS"><code><span class="kw">interface</span> <span class="cls">ApiResponse</span>&lt;<span class="cls">T</span>&gt; {
  data: <span class="cls">T</span>;
  status: <span class="cls">number</span>;
  message: <span class="cls">string</span>;
}
<span class="kw">const</span> <span class="var">res</span>: <span class="cls">ApiResponse</span>&lt;<span class="cls">User</span>&gt; = {
  data: { id: <span class="num">1</span>, nama: <span class="str">"Budi"</span> },
  status: <span class="num">200</span>, message: <span class="str">"OK"</span>
};
<span class="cm">// Generic class</span>
<span class="kw">class</span> <span class="cls">Stack</span>&lt;<span class="cls">T</span>&gt; {
  <span class="kw">private</span> <span class="var">items</span>: <span class="cls">T</span>[] = [];
  <span class="fn">push</span>(<span class="var">item</span>: <span class="cls">T</span>) { <span class="kw">this</span>.<span class="var">items</span>.<span class="fn">push</span>(<span class="var">item</span>); }
  <span class="fn">pop</span>(): <span class="cls">T</span> | <span class="kw">undefined</span> { <span class="kw">return</span> <span class="kw">this</span>.<span class="var">items</span>.<span class="fn">pop</span>(); }
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Constraints</h2>
<pre data-lang="TS"><code><span class="cm">// T harus punya property length</span>
<span class="kw">function</span> <span class="fn">longer</span>&lt;<span class="cls">T</span> <span class="kw">extends</span> { length: <span class="cls">number</span> }&gt;(<span class="var">a</span>: <span class="cls">T</span>, <span class="var">b</span>: <span class="cls">T</span>): <span class="cls">T</span> {
  <span class="kw">return</span> <span class="var">a</span>.length <span class="op">&gt;=</span> <span class="var">b</span>.length ? <span class="var">a</span> : <span class="var">b</span>;
}
<span class="fn">longer</span>(<span class="str">"hi"</span>, <span class="str">"hello"</span>);
<span class="fn">longer</span>([<span class="num">1</span>,<span class="num">2</span>], [<span class="num">3</span>]);
<span class="cm">// keyof constraint</span>
<span class="kw">function</span> <span class="fn">get</span>&lt;<span class="cls">T</span>, <span class="cls">K</span> <span class="kw">extends</span> <span class="kw">keyof</span> <span class="cls">T</span>&gt;(<span class="var">obj</span>: <span class="cls">T</span>, <span class="var">key</span>: <span class="cls">K</span>): <span class="cls">T</span>[<span class="cls">K</span>] {
  <span class="kw">return</span> <span class="var">obj</span>[<span class="var">key</span>];
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ TypeScript: Utility Types ═══

// ─── ts-util ───
D["ts-util"]={t:"Utility Types",lang:"TypeScript",lk:"ts",color:"#60a5fa",
toc:["Partial & Required","Pick & Omit","Record & ReturnType","Readonly","Mapped Types"],
html:`<h1 class="dt">Utility Types</h1><p class="ds">// Type transformers bawaan TypeScript.</p>
<h2 class="st" id="s0">Partial &amp; Required</h2>
<pre data-lang="TS"><code><span class="kw">interface</span> <span class="cls">User</span> { id: <span class="cls">number</span>; nama: <span class="cls">string</span>; email: <span class="cls">string</span> }
<span class="cm">// Partial — semua field optional</span>
<span class="kw">type</span> <span class="cls">UserUpdate</span> = <span class="cls">Partial</span>&lt;<span class="cls">User</span>&gt;;
<span class="cm">// { id?: number; nama?: string; email?: string }</span>
<span class="cm">// Required — semua field wajib</span>
<span class="kw">type</span> <span class="cls">FullUser</span> = <span class="cls">Required</span>&lt;<span class="cls">User</span>&gt;;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Pick &amp; Omit</h2>
<pre data-lang="TS"><code><span class="cm">// Pick — ambil field tertentu</span>
<span class="kw">type</span> <span class="cls">UserPreview</span> = <span class="cls">Pick</span>&lt;<span class="cls">User</span>, <span class="str">"id"</span> | <span class="str">"nama"</span>&gt;;
<span class="cm">// { id: number; nama: string }</span>
<span class="cm">// Omit — buang field tertentu</span>
<span class="kw">type</span> <span class="cls">UserNoId</span> = <span class="cls">Omit</span>&lt;<span class="cls">User</span>, <span class="str">"id"</span>&gt;;
<span class="cm">// { nama: string; email: string }</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Record &amp; ReturnType</h2>
<pre data-lang="TS"><code><span class="cm">// Record — object dengan key/value tertentu</span>
<span class="kw">type</span> <span class="cls">LangMap</span> = <span class="cls">Record</span>&lt;<span class="cls">string</span>, <span class="cls">number</span>&gt;;
<span class="kw">type</span> <span class="cls">StatusMap</span> = <span class="cls">Record</span>&lt;<span class="str">"active"</span>|<span class="str">"inactive"</span>, <span class="cls">User</span>[]&gt;;
<span class="cm">// ReturnType — tipe return sebuah fungsi</span>
<span class="kw">function</span> <span class="fn">getUser</span>() { <span class="kw">return</span> { id: <span class="num">1</span>, nama: <span class="str">"Budi"</span> }; }
<span class="kw">type</span> <span class="cls">UserResult</span> = <span class="cls">ReturnType</span>&lt;<span class="kw">typeof</span> <span class="fn">getUser</span>&gt;;
<span class="cm">// Parameters — tipe parameter fungsi</span>
<span class="kw">type</span> <span class="cls">P</span> = <span class="cls">Parameters</span>&lt;<span class="kw">typeof</span> <span class="fn">getUser</span>&gt;;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">Readonly &amp; NonNullable</h2>
<pre data-lang="TS"><code><span class="kw">type</span> <span class="cls">FrozenUser</span> = <span class="cls">Readonly</span>&lt;<span class="cls">User</span>&gt;;
<span class="cm">// { readonly id: number; ... }</span>
<span class="cm">// NonNullable — buang null dan undefined</span>
<span class="kw">type</span> <span class="cls">Safe</span> = <span class="cls">NonNullable</span>&lt;<span class="cls">string</span> | <span class="kw">null</span> | <span class="kw">undefined</span>&gt;;
<span class="cm">// string</span>
<span class="cm">// Awaited — unwrap Promise</span>
<span class="kw">type</span> <span class="cls">R</span> = <span class="cls">Awaited</span>&lt;<span class="cls">Promise</span>&lt;<span class="cls">string</span>&gt;&gt;; <span class="cm">// string</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ TypeScript: Enum ═══

// ─── ts-enum ───
D["ts-enum"]={t:"Enum & Union Types",lang:"TypeScript",lk:"ts",color:"#60a5fa",
toc:["Enum Dasar","Const Enum","String Enum","Union Types","Discriminated Union","Template Literal Types"],
html:`<h1 class="dt">Enum &amp; Union Types</h1><p class="ds">// Kumpulan nilai tetap yang bermakna.</p>
<h2 class="st" id="s0">Enum Dasar</h2>
<pre data-lang="TS"><code><span class="kw">enum</span> <span class="cls">Direction</span> {
  Up    = <span class="num">0</span>,
  Down  = <span class="num">1</span>,
  Left  = <span class="num">2</span>,
  Right = <span class="num">3</span>,
}
<span class="fn">move</span>(<span class="cls">Direction</span>.Up);
<span class="cm">// Auto increment</span>
<span class="kw">enum</span> <span class="cls">Status</span> { Active, Inactive, Pending }
<span class="cm">// Status.Active = 0, Inactive = 1, ...</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">String Enum &amp; Const Enum</h2>
<pre data-lang="TS"><code><span class="kw">enum</span> <span class="cls">Color</span> {
  Red   = <span class="str">"RED"</span>,
  Green = <span class="str">"GREEN"</span>,
  Blue  = <span class="str">"BLUE"</span>,
}
<span class="cm">// const enum — dihapus saat compile, lebih efisien</span>
<span class="kw">const enum</span> <span class="cls">Size</span> { Small, Medium, Large }
<span class="kw">let</span> <span class="var">s</span> = <span class="cls">Size</span>.Medium; <span class="cm">// dikompilasi jadi: let s = 1</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Union Types Modern</h2>
<pre data-lang="TS"><code><span class="cm">// Lebih disarankan dari enum untuk string values</span>
<span class="kw">type</span> <span class="cls">Dir</span>    = <span class="str">"up"</span> | <span class="str">"down"</span> | <span class="str">"left"</span> | <span class="str">"right"</span>;
<span class="kw">type</span> <span class="cls">Status</span> = <span class="str">"active"</span> | <span class="str">"inactive"</span> | <span class="str">"pending"</span>;
<span class="kw">type</span> <span class="cls">NumStr</span> = <span class="cls">number</span> | <span class="cls">string</span>;
<span class="cm">// Template literal type</span>
<span class="kw">type</span> <span class="cls">EventName</span> = <span class="str">\`on\${Capitalize&lt;string&gt;}\`</span>;
<span class="cm">// "onClick" | "onChange" | ...</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};

// ═══ HTML: Struktur ═══
