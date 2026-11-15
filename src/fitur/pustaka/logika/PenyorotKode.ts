import type { JenisTokenKode, TokenKode } from '../TipePustaka';

interface AturanSorot {
  readonly pola: RegExp;
  readonly jenis: JenisTokenKode;
}

const ATURAN_PER_BAHASA: Readonly<Record<string, readonly AturanSorot[]>> = {
  CSS: [
    { pola: /\/\*[\s\S]*?\*\//, jenis: 'cm' },
    { pola: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    { pola: /@[a-zA-Z-]+/, jenis: 'at' },
    { pola: /(?:^|(?<=[\s{;,]))[a-zA-Z-]+(?=\s*:)/, jenis: 'at' },
    { pola: /#[a-zA-Z0-9_-]+|\.[a-zA-Z0-9_-]+|::?[a-zA-Z-]+(?:\([^)]*\))?/, jenis: 'cls' },
    { pola: /\b\d+(?:\.\d+)?(?:px|em|rem|vh|vw|%|s|ms|deg|fr)?\b/, jenis: 'num' },
  ],
  HTML: [
    { pola: /<!--[\s\S]*?-->/, jenis: 'cm' },
    { pola: /<\/?[a-zA-Z][a-zA-Z0-9-]*/, jenis: 'tag' },
    { pola: /"[^"]*"|'[^']*'/, jenis: 'val' },
    { pola: /[a-zA-Z-:]+(?==)/, jenis: 'attr' },
  ],
  SVG: [
    { pola: /<!--[\s\S]*?-->/, jenis: 'cm' },
    { pola: /\/\*[\s\S]*?\*\//, jenis: 'cm' },
    { pola: /<\/?[a-zA-Z][a-zA-Z0-9-]*/, jenis: 'tag' },
    { pola: /"[^"]*"|'[^']*'/, jenis: 'val' },
    { pola: /[a-zA-Z-:]+(?==)/, jenis: 'attr' },
    { pola: /\b\d+(?:\.\d+)?%?\b/, jenis: 'num' },
  ],
  JS: [
    { pola: /\/\/[^\n]*|\/\*[\s\S]*?\*\//, jenis: 'cm' },
    { pola: /`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    {
      pola: /\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|default|break|continue|class|extends|super|new|this|import|export|from|as|async|await|try|catch|finally|throw|typeof|instanceof|in|of|true|false|null|undefined|yield|static|get|set)\b/,
      jenis: 'kw',
    },
    { pola: /\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?\b/, jenis: 'num' },
    { pola: /\b[A-Z][a-zA-Z0-9_]*\b/, jenis: 'cls' },
    { pola: /\b[a-z_$][\w$]*(?=\s*\()/, jenis: 'fn' },
  ],
  TS: [
    { pola: /\/\/[^\n]*|\/\*[\s\S]*?\*\//, jenis: 'cm' },
    { pola: /`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    {
      pola: /\b(?:const|let|var|function|return|if|else|for|while|do|switch|case|default|break|continue|class|extends|implements|super|new|this|import|export|from|as|is|keyof|infer|typeof|instanceof|in|of|async|await|try|catch|finally|throw|interface|type|enum|readonly|private|public|protected|abstract|override|declare|namespace|string|number|boolean|void|never|unknown|any|true|false|null|undefined)\b/,
      jenis: 'kw',
    },
    { pola: /\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?\b/, jenis: 'num' },
    { pola: /\b[A-Z][a-zA-Z0-9_]*\b/, jenis: 'cls' },
    { pola: /\b[a-z_$][\w$]*(?=\s*[<(])/, jenis: 'fn' },
  ],
  JSX: [
    { pola: /\/\/[^\n]*|\/\*[\s\S]*?\*\/|\{\/\*[\s\S]*?\*\/\}/, jenis: 'cm' },
    { pola: /`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    { pola: /<\/?[a-zA-Z][a-zA-Z0-9.]*/, jenis: 'tag' },
    {
      pola: /\b(?:const|let|var|function|return|if|else|for|while|switch|case|default|break|continue|class|extends|new|this|import|export|from|as|async|await|try|catch|throw|true|false|null|undefined)\b/,
      jenis: 'kw',
    },
    { pola: /\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?\b/, jenis: 'num' },
    { pola: /\b[A-Z][a-zA-Z0-9_]*\b/, jenis: 'cls' },
    { pola: /\b[a-z_$][\w$]*(?=\s*\()/, jenis: 'fn' },
  ],
  SQL: [
    { pola: /--[^\n]*|\/\*[\s\S]*?\*\//, jenis: 'cm' },
    { pola: /'[^']*'/, jenis: 'str' },
    {
      pola: /\b(?:SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|CROSS|ON|AS|GROUP BY|ORDER BY|HAVING|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|ALTER|DROP|TABLE|INDEX|UNIQUE|PRIMARY|KEY|FOREIGN|REFERENCES|CONSTRAINT|DEFAULT|CHECK|NOT NULL|VIEW|WITH|UNION|ALL|DISTINCT|LIMIT|OFFSET|RETURNING|EXISTS|IN|NOT|AND|OR|IS|NULL|BETWEEN|LIKE|ILIKE|ASC|DESC|OVER|PARTITION BY|ROW_NUMBER|RANK|DENSE_RANK|COUNT|SUM|AVG|MIN|MAX|COALESCE|CASE|WHEN|THEN|ELSE|END|EXPLAIN|ANALYZE)\b/i,
      jenis: 'kw',
    },
    { pola: /\b\d+(?:\.\d+)?\b/, jenis: 'num' },
    { pola: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/, jenis: 'fn' },
  ],
  Python: [
    { pola: /#[^\n]*/, jenis: 'cm' },
    { pola: /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    {
      pola: /\b(?:def|class|return|if|elif|else|for|while|import|from|as|in|not|and|or|is|None|True|False|lambda|try|except|finally|raise|with|yield|async|await|pass|break|continue|del|global|nonlocal|match|case)\b/,
      jenis: 'kw',
    },
    { pola: /@[a-zA-Z_][\w.]*/, jenis: 'at' },
    { pola: /\b\d+(?:\.\d+)?\b/, jenis: 'num' },
    { pola: /\b[A-Z][a-zA-Z0-9_]*\b/, jenis: 'cls' },
    { pola: /\b[a-z_]\w*(?=\s*\()/, jenis: 'fn' },
  ],
  bash: [
    { pola: /#[^\n]*/, jenis: 'cm' },
    { pola: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/, jenis: 'str' },
    { pola: /(?:^|\s)--?[a-zA-Z0-9-]+/, jenis: 'attr' },
    { pola: /\b(?:npm|npx|yarn|pnpm|node|python|pip|git|cd|mkdir|ls|curl)\b/, jenis: 'kw' },
  ],
};

function gabungTokenBiasa(tokens: readonly TokenKode[]): readonly TokenKode[] {
  const hasil: TokenKode[] = [];
  for (const token of tokens) {
    const terakhir = hasil.at(-1);
    if (token.jenis === 'biasa' && terakhir?.jenis === 'biasa') {
      hasil[hasil.length - 1] = { jenis: 'biasa', isi: terakhir.isi + token.isi };
    } else if (token.isi.length > 0) {
      hasil.push(token);
    }
  }
  return hasil;
}

/**
 * Menyorot teks kode polos berdasarkan bahasa jika blok kode belum bertoken.
 * Berjalan dalam satu lintasan berbasis posisi agar tidak terjadi penimpaan tag HTML.
 */
export function sorotTeksKode(kode: string, bahasa: string): readonly TokenKode[] {
  const aturan = ATURAN_PER_BAHASA[bahasa];
  if (!aturan || kode.length === 0) {
    return kode.length > 0 ? [{ jenis: 'biasa', isi: kode }] : [];
  }

  const hasil: TokenKode[] = [];
  let indeks = 0;

  while (indeks < kode.length) {
    let kandidat: { readonly pos: number; readonly teks: string; readonly jenis: JenisTokenKode } | null = null;

    for (const item of aturan) {
      const regex = new RegExp(item.pola.source, item.pola.flags.includes('i') ? 'gi' : 'g');
      regex.lastIndex = indeks;
      const cocok = regex.exec(kode);
      if (!cocok || cocok[0].length === 0) continue;
      if (kandidat === null || cocok.index < kandidat.pos) {
        kandidat = { pos: cocok.index, teks: cocok[0], jenis: item.jenis };
      }
    }

    if (kandidat === null) {
      hasil.push({ jenis: 'biasa', isi: kode.slice(indeks) });
      break;
    }

    if (kandidat.pos > indeks) {
      hasil.push({ jenis: 'biasa', isi: kode.slice(indeks, kandidat.pos) });
    }
    hasil.push({ jenis: kandidat.jenis, isi: kandidat.teks });
    indeks = kandidat.pos + kandidat.teks.length;
  }

  return gabungTokenBiasa(hasil);
}
