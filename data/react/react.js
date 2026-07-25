// ═══ OLPL Data — REACT ═══
// 2 modules

// ─── rx-hooks ───
D["rx-hooks"]={t:"React Hooks Lengkap",lang:"React",lk:"react",color:"#38bdf8",
toc:["useState","useEffect","useRef","useMemo & useCallback","useContext","useReducer","Custom Hook"],
html:`<h1 class="dt">React Hooks Lengkap</h1><p class="ds">Semua hooks bawaan React — dari state dasar hingga optimisasi performa.</p>
<h2 class="st" id="s0">useState</h2>
<pre data-lang="JSX"><code><span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>(<span class="num">0</span>);
<span class="kw">const</span> [user, setUser]   = <span class="fn">useState</span>({ nama: <span class="str">""</span>, umur: <span class="num">0</span> });
<span class="cm">// Functional update (aman untuk async)</span>
<span class="fn">setCount</span>(<span class="var">prev</span> <span class="op">=&gt;</span> <span class="var">prev</span> + <span class="num">1</span>);
<span class="cm">// Update object — HARUS spread!</span>
<span class="fn">setUser</span>(<span class="var">prev</span> <span class="op">=&gt;</span> ({ ...<span class="var">prev</span>, nama: <span class="str">"Budi"</span> }));</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">useEffect</h2>
<pre data-lang="JSX"><code><span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
  <span class="kw">let</span> ignore = <span class="kw">false</span>;
  <span class="fn">fetch</span>(<span class="str">\`/api/users/\${id}\`</span>)
    .<span class="fn">then</span>(<span class="var">r</span> <span class="op">=&gt;</span> <span class="var">r</span>.<span class="fn">json</span>())
    .<span class="fn">then</span>(<span class="var">d</span> <span class="op">=&gt;</span> { <span class="kw">if</span> (!ignore) <span class="fn">setData</span>(<span class="var">d</span>); });
  <span class="kw">return</span> () <span class="op">=&gt;</span> { ignore = <span class="kw">true</span>; }; <span class="cm">// cleanup</span>
}, [id]); <span class="cm">// dependency array</span>
<span class="cm">// [] = mount/unmount saja</span>
<span class="cm">// [x,y] = re-run saat x atau y berubah</span>
<span class="cm">// tanpa [] = setiap render</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">useRef</h2>
<pre data-lang="JSX"><code><span class="kw">const</span> inputRef = <span class="fn">useRef</span>(<span class="kw">null</span>);
<span class="fn">useEffect</span>(() <span class="op">=&gt;</span> { inputRef.current.<span class="fn">focus</span>(); }, []);
<span class="kw">return</span> &lt;<span class="cls">input</span> ref={inputRef} /&gt;;
<span class="cm">// Simpan nilai tanpa trigger re-render</span>
<span class="kw">const</span> prevCount = <span class="fn">useRef</span>(<span class="num">0</span>);
prevCount.current = count;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">useMemo &amp; useCallback</h2>
<pre data-lang="JSX"><code><span class="cm">// useMemo: cache komputasi mahal</span>
<span class="kw">const</span> filtered = <span class="fn">useMemo</span>(
  () <span class="op">=&gt;</span> items.<span class="fn">filter</span>(<span class="var">i</span> <span class="op">=&gt;</span> <span class="var">i</span>.<span class="fn">includes</span>(query)),
  [items, query]
);
<span class="cm">// useCallback: cache fungsi</span>
<span class="kw">const</span> handleClick = <span class="fn">useCallback</span>(
  (<span class="var">id</span>) <span class="op">=&gt;</span> console.<span class="fn">log</span>(<span class="var">id</span>), []
);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">useContext</h2>
<pre data-lang="JSX"><code><span class="kw">const</span> ThemeCtx = <span class="fn">createContext</span>(<span class="str">'dark'</span>);
<span class="cm">// Provider di parent:</span>
&lt;ThemeCtx.Provider value={{ theme, setTheme }}&gt;
  &lt;<span class="cls">App</span> /&gt;
&lt;/ThemeCtx.Provider&gt;
<span class="cm">// Consumer di child:</span>
<span class="kw">const</span> { theme } = <span class="fn">useContext</span>(ThemeCtx);</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s5">useReducer</h2>
<pre data-lang="JSX"><code><span class="kw">const</span> <span class="fn">reducer</span> = (<span class="var">state</span>, <span class="var">action</span>) <span class="op">=&gt;</span> {
  <span class="kw">switch</span> (<span class="var">action</span>.type) {
    <span class="kw">case</span> <span class="str">'TAMBAH'</span>: <span class="kw">return</span> { ...<span class="var">state</span>, count: <span class="var">state</span>.count + <span class="num">1</span> };
    <span class="kw">case</span> <span class="str">'RESET'</span>:  <span class="kw">return</span> { count: <span class="num">0</span> };
    <span class="kw">default</span>: <span class="kw">return</span> <span class="var">state</span>;
  }
};
<span class="kw">const</span> [state, dispatch] = <span class="fn">useReducer</span>(<span class="var">reducer</span>, { count: <span class="num">0</span> });
<span class="fn">dispatch</span>({ type: <span class="str">'TAMBAH'</span> });</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s6">Custom Hook</h2>
<pre data-lang="JSX"><code><span class="cm">// Nama HARUS mulai "use"</span>
<span class="kw">function</span> <span class="fn">useFetch</span>(<span class="var">url</span>) {
  <span class="kw">const</span> [data, setData]   = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [loading, setLoad]= <span class="fn">useState</span>(<span class="kw">true</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="fn">useEffect</span>(() <span class="op">=&gt;</span> {
    <span class="fn">fetch</span>(<span class="var">url</span>).<span class="fn">then</span>(<span class="var">r</span><span class="op">=&gt;</span><span class="var">r</span>.<span class="fn">json</span>()).<span class="fn">then</span>(<span class="fn">setData</span>)
      .<span class="fn">catch</span>(<span class="fn">setError</span>).<span class="fn">finally</span>(()<span class="op">=&gt;</span><span class="fn">setLoad</span>(<span class="kw">false</span>));
  }, [url]);
  <span class="kw">return</span> { data, loading, error };
}
<span class="cm">// Pakai: const { data, loading } = useFetch('/api');</span></code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};


// ═══ JS: Operator ═══

// ─── rx-comp ───
D["rx-comp"]={t:"Component & Props",lang:"React",lk:"react",color:"#38bdf8",
toc:["Functional Component","Props Dasar","Props Destructuring","Children","PropTypes","Composition"],
html:`<h1 class="dt">Component &amp; Props</h1><p class="ds">// Blok bangunan React — UI yang dapat digunakan ulang.</p>
<h2 class="st" id="s0">Functional Component</h2>
<pre data-lang="JSX"><code><span class="cm">// Functional component (modern — gunakan ini)</span>
<span class="kw">function</span> <span class="cls">Button</span>({ label, onClick }) {
  <span class="kw">return</span> (
    &lt;<span class="cls">button</span>
      onClick={onClick}
      style={{ background: <span class="str">"#00ff41"</span>, color: <span class="str">"#000"</span> }}
    &gt;
      {label}
    &lt;/<span class="cls">button</span>&gt;
  );
}
<span class="cm">// Arrow component</span>
<span class="kw">const</span> <span class="cls">Title</span> = ({ text }) <span class="op">=&gt;</span> &lt;<span class="cls">h1</span>&gt;{text}&lt;/<span class="cls">h1</span>&gt;;
<span class="cm">// Penggunaan</span>
&lt;<span class="cls">Button</span> label=<span class="str">"Klik"</span> onClick={() <span class="op">=&gt;</span> alert(<span class="str">"Hi"</span>)} /&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s1">Props</h2>
<pre data-lang="JSX"><code><span class="cm">// Kirim berbagai tipe props</span>
&lt;<span class="cls">Card</span>
  title=<span class="str">"OLPL Docs"</span>           <span class="cm">// string</span>
  count={42}                   <span class="cm">// number</span>
  isActive={true}              <span class="cm">// boolean</span>
  isActive                     <span class="cm">// shorthand = true</span>
  style={{ color: <span class="str">"#00ff41"</span> }} <span class="cm">// object</span>
  onClick={handleClick}        <span class="cm">// function</span>
  items={[<span class="str">"a"</span>, <span class="str">"b"</span>]}          <span class="cm">// array</span>
/&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s2">Props Destructuring &amp; Default</h2>
<pre data-lang="JSX"><code><span class="kw">function</span> <span class="cls">Badge</span>({ text, color = <span class="str">"#00ff41"</span>, size = <span class="str">"md"</span> }) {
  <span class="kw">return</span> &lt;<span class="cls">span</span> style={{ color }}&gt;{text}&lt;/<span class="cls">span</span>&gt;;
}
<span class="cm">// Spread props</span>
<span class="kw">function</span> <span class="cls">Input</span>({ label, ...rest }) {
  <span class="kw">return</span> (
    &lt;<span class="cls">div</span>&gt;
      &lt;<span class="cls">label</span>&gt;{label}&lt;/<span class="cls">label</span>&gt;
      &lt;<span class="cls">input</span> {...rest} /&gt;  {<span class="cm">/* forward semua props ke input */</span>}
    &lt;/<span class="cls">div</span>&gt;
  );
}</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s3">children</h2>
<pre data-lang="JSX"><code><span class="kw">function</span> <span class="cls">Card</span>({ title, children }) {
  <span class="kw">return</span> (
    &lt;<span class="cls">div</span> className=<span class="str">"card"</span>&gt;
      &lt;<span class="cls">h2</span>&gt;{title}&lt;/<span class="cls">h2</span>&gt;
      &lt;<span class="cls">div</span>&gt;{children}&lt;/<span class="cls">div</span>&gt;
    &lt;/<span class="cls">div</span>&gt;
  );
}
<span class="cm">// Penggunaan</span>
&lt;<span class="cls">Card</span> title=<span class="str">"Judul"</span>&gt;
  &lt;<span class="cls">p</span>&gt;Konten apapun di sini&lt;/<span class="cls">p</span>&gt;
  &lt;<span class="cls">Button</span>&gt;Klik&lt;/<span class="cls">Button</span>&gt;
&lt;/<span class="cls">Card</span>&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>
<h2 class="st" id="s4">Composition Pattern</h2>
<pre data-lang="JSX"><code><span class="cm">// Render props</span>
<span class="kw">function</span> <span class="cls">List</span>({ items, renderItem }) {
  <span class="kw">return</span> &lt;<span class="cls">ul</span>&gt;{items.<span class="fn">map</span>(renderItem)}&lt;/<span class="cls">ul</span>&gt;;
}
&lt;<span class="cls">List</span>
  items={users}
  renderItem={u <span class="op">=&gt;</span> &lt;<span class="cls">li</span> key={u.id}&gt;{u.name}&lt;/<span class="cls">li</span>&gt;}
/&gt;</code><button class="cpb" onclick="cp(this)">[COPY]</button></pre>`};


// ═══ JS: Class ═══
