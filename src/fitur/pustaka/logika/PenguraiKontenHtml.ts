import type {
  BlokKonten,
  ItemKartuKonsep,
  JenisCatatan,
  JenisTokenKode,
  SegmenInline,
  TokenKode,
} from '../TipePustaka';
import { sorotTeksKode } from './PenyorotKode';

const ENTITAS_HTML: Readonly<Record<string, string>> = {
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&times;': '×',
  '&nbsp;': ' ',
};

const JENIS_TOKEN_SAH: ReadonlySet<string> = new Set<JenisTokenKode>([
  'biasa',
  'kw',
  'fn',
  'str',
  'num',
  'cm',
  'op',
  'cls',
  'var',
  'at',
  'tag',
  'attr',
  'val',
]);

export function dekodeEntitasHtml(teks: string): string {
  return teks.replace(
    /&(?:lt|gt|amp|quot|#39|apos|times|nbsp);/g,
    (cocok) => ENTITAS_HTML[cocok] ?? cocok,
  );
}

const POLA_EMOJI_DEKORATIF =
  /[\p{Extended_Pictographic}\uFE0F\u200D\u2600-\u27BF\u2139]/gu;

function hapusEmojiTanpaPangkasTepi(teks: string): string {
  return teks.replace(POLA_EMOJI_DEKORATIF, '').replace(/[ \t]{2,}/g, ' ');
}

export function bersihkanEmojiDekoratif(teks: string): string {
  return hapusEmojiTanpaPangkasTepi(teks).trim();
}

function hilangkanTagHtml(potongan: string): string {
  return dekodeEntitasHtml(potongan.replace(/<[^>]+>/g, ''));
}

export function uraiSegmenInline(potongan: string): readonly SegmenInline[] {
  const hasil: SegmenInline[] = [];
  const pola = /<(code|strong|em)>([\s\S]*?)<\/\1>/gi;
  let kursor = 0;

  for (const cocok of potongan.matchAll(pola)) {
    const pos = cocok.index ?? 0;
    if (pos > kursor) {
      const teksSebelum = hapusEmojiTanpaPangkasTepi(
        hilangkanTagHtml(potongan.slice(kursor, pos)),
      );
      if (teksSebelum) hasil.push({ jenis: 'teks', isi: teksSebelum });
    }
    const tag = (cocok[1] ?? '').toLowerCase();
    const isiMentah = hilangkanTagHtml(cocok[2] ?? '');
    if (tag === 'code') {
      if (isiMentah) hasil.push({ jenis: 'kode', isi: isiMentah });
    } else {
      const isiBersih = bersihkanEmojiDekoratif(isiMentah);
      if (isiBersih) {
        hasil.push({ jenis: tag === 'strong' ? 'tebal' : 'miring', isi: isiBersih });
      }
    }
    kursor = pos + cocok[0].length;
  }

  if (kursor < potongan.length) {
    const sisa = hapusEmojiTanpaPangkasTepi(hilangkanTagHtml(potongan.slice(kursor)));
    if (sisa) hasil.push({ jenis: 'teks', isi: sisa });
  }

  while (hasil.length > 0 && hasil[0]?.jenis === 'teks') {
    const awal = hasil[0].isi.trimStart();
    if (awal) {
      hasil[0] = { jenis: 'teks', isi: awal };
      break;
    }
    hasil.shift();
  }

  while (hasil.length > 0 && hasil[hasil.length - 1]?.jenis === 'teks') {
    const indeksAkhir = hasil.length - 1;
    const teksAkhir = hasil[indeksAkhir];
    if (!teksAkhir || teksAkhir.jenis !== 'teks') break;
    const akhir = teksAkhir.isi.trimEnd();
    if (akhir) {
      hasil[indeksAkhir] = { jenis: 'teks', isi: akhir };
      break;
    }
    hasil.pop();
  }

  return hasil;
}

function uraiTokenDariKodeHtml(isiKode: string, bahasa: string): {
  readonly token: readonly TokenKode[];
  readonly teksSalin: string;
} {
  const punyaSpan = /<span\s+class="/i.test(isiKode);
  if (!punyaSpan) {
    const teksPolos = hilangkanTagHtml(isiKode);
    return { token: sorotTeksKode(teksPolos, bahasa), teksSalin: teksPolos };
  }

  const token: TokenKode[] = [];
  const bagianSalin: string[] = [];
  const polaSpan = /<span\s+class="([^"]*)">([\s\S]*?)<\/span>/gi;
  let kursor = 0;

  for (const cocok of isiKode.matchAll(polaSpan)) {
    const pos = cocok.index ?? 0;
    if (pos > kursor) {
      const biasa = hilangkanTagHtml(isiKode.slice(kursor, pos));
      if (biasa) {
        token.push({ jenis: 'biasa', isi: biasa });
        bagianSalin.push(biasa);
      }
    }
    const kelasMentah = (cocok[1] ?? '').trim();
    const jenis: JenisTokenKode = JENIS_TOKEN_SAH.has(kelasMentah)
      ? (kelasMentah as JenisTokenKode)
      : 'biasa';
    const isi = hilangkanTagHtml(cocok[2] ?? '');
    if (isi) {
      token.push({ jenis, isi });
      bagianSalin.push(isi);
    }
    kursor = pos + cocok[0].length;
  }

  if (kursor < isiKode.length) {
    const sisa = hilangkanTagHtml(isiKode.slice(kursor));
    if (sisa) {
      token.push({ jenis: 'biasa', isi: sisa });
      bagianSalin.push(sisa);
    }
  }

  return { token, teksSalin: bagianSalin.join('') };
}

function uraiBlokTabel(isiTabel: string): BlokKonten {
  const kepala: (readonly SegmenInline[])[] = [];
  const baris: (readonly (readonly SegmenInline[])[])[] = [];

  for (const cocokBaris of isiTabel.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const isiBaris = cocokBaris[1] ?? '';
    const selKepala = [...isiBaris.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map((m) =>
      uraiSegmenInline(m[1] ?? ''),
    );
    if (selKepala.length > 0 && kepala.length === 0) {
      kepala.push(...selKepala);
      continue;
    }
    const selIsi = [...isiBaris.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) =>
      uraiSegmenInline(m[1] ?? ''),
    );
    if (selIsi.length > 0) {
      baris.push(selIsi);
    }
  }

  return { jenis: 'tabel', kepala, baris };
}

function uraiKisiKartu(isiKisi: string): BlokKonten {
  const item: ItemKartuKonsep[] = [];
  const polaKartu =
    /<div\s+class="card"[^>]*>[\s\S]*?<div\s+class="cn"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<div\s+class="cd"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<\/div>/gi;

  for (const cocok of isiKisi.matchAll(polaKartu)) {
    const nama = bersihkanEmojiDekoratif(hilangkanTagHtml(cocok[1] ?? ''));
    const deskripsi = bersihkanEmojiDekoratif(hilangkanTagHtml(cocok[2] ?? ''));
    if (nama) {
      item.push({ nama, deskripsi });
    }
  }
  return { jenis: 'kisiKartu', item };
}

function normalisasiRagamCatatan(kelas: string): JenisCatatan {
  if (kelas.includes('tip')) return 'tip';
  if (kelas.includes('warn')) return 'warn';
  if (kelas.includes('err')) return 'err';
  return 'info';
}

function uraiCatatan(kelas: string, blokHtml: string): BlokKonten {
  const isiCatatan = blokHtml
    .replace(/^<div[^>]*>/i, '')
    .replace(/<\/div>\s*$/i, '');
  const cocokJudul = isiCatatan.match(/<div\s+class="cbt"[^>]*>([\s\S]*?)<\/div>/i);
  const judulMentah = cocokJudul ? hilangkanTagHtml(cocokJudul[1] ?? '') : 'Catatan';
  const judul = bersihkanEmojiDekoratif(judulMentah) || 'Catatan';
  const sisaHtml = cocokJudul
    ? isiCatatan.replace(cocokJudul[0], '')
    : isiCatatan;

  return {
    jenis: 'catatan',
    ragam: normalisasiRagamCatatan(kelas),
    judul,
    segmen: uraiSegmenInline(sisaHtml),
  };
}

function ekstrakBlokDivSeimbang(html: string, mulai: number): {
  readonly blokHtml: string;
  readonly akhir: number;
} {
  let kedalaman = 0;
  let kursor = mulai;
  const polaDiv = /<\/?div\b[^>]*>/gi;
  polaDiv.lastIndex = mulai;

  for (let m = polaDiv.exec(html); m !== null; m = polaDiv.exec(html)) {
    if (m[0].startsWith('</')) kedalaman -= 1;
    else kedalaman += 1;
    if (kedalaman === 0) {
      const akhir = m.index + m[0].length;
      return { blokHtml: html.slice(mulai, akhir), akhir };
    }
    kursor = m.index + m[0].length;
  }

  return { blokHtml: html.slice(mulai), akhir: Math.max(kursor, html.length) };
}

/**
 * Mengurai string HTML dokumentasi OLPL menjadi AST BlokKonten[] yang terstruktur.
 * Menghilangkan markup mentah serta ikon emoji dekoratif agar aman dirender di React.
 */
export function uraiKontenHtml(html: string): readonly BlokKonten[] {
  const blok: BlokKonten[] = [];
  let kursor = 0;

  const polaBlok =
    /<h1\s+class="dt"[^>]*>([\s\S]*?)<\/h1>|<p\s+class="ds"[^>]*>([\s\S]*?)<\/p>|<h2\s+class="st"(?:\s+id="([^"]*)")?[^>]*>([\s\S]*?)<\/h2>|<p>([\s\S]*?)<\/p>|<table[^>]*>([\s\S]*?)<\/table>|<pre(?:\s+data-lang="([^"]*)")?[^>]*>\s*<code>([\s\S]*?)<\/code>[\s\S]*?<\/pre>|<div\s+class="cb\s+([^"]*)"[^>]*>|<div\s+class="cg"[^>]*>/gi;

  while (kursor < html.length) {
    polaBlok.lastIndex = kursor;
    const cocok = polaBlok.exec(html);
    if (!cocok) break;

    if (cocok[0].startsWith('<div')) {
      const hasilDiv = ekstrakBlokDivSeimbang(html, cocok.index);
      if (cocok[9] !== undefined) {
        blok.push(uraiCatatan(cocok[9], hasilDiv.blokHtml));
      } else {
        blok.push(uraiKisiKartu(hasilDiv.blokHtml));
      }
      kursor = hasilDiv.akhir;
      continue;
    }

    if (cocok[1] !== undefined) {
      blok.push({ jenis: 'judul', isi: hilangkanTagHtml(cocok[1]).trim() });
    } else if (cocok[2] !== undefined) {
      const ringkasan = hilangkanTagHtml(cocok[2]).replace(/^\/\/\s*/, '').trim();
      if (ringkasan) blok.push({ jenis: 'ringkasan', isi: ringkasan });
    } else if (cocok[4] !== undefined) {
      blok.push({
        jenis: 'subjudul',
        idBagian: cocok[3] ?? `s${blok.length}`,
        isi: hilangkanTagHtml(cocok[4]).trim(),
      });
    } else if (cocok[5] !== undefined) {
      const segmen = uraiSegmenInline(cocok[5]);
      if (segmen.length > 0) blok.push({ jenis: 'paragraf', segmen });
    } else if (cocok[6] !== undefined) {
      blok.push(uraiBlokTabel(cocok[6]));
    } else if (cocok[8] !== undefined) {
      const bahasa = cocok[7] ?? 'Kode';
      const hasilKode = uraiTokenDariKodeHtml(cocok[8], bahasa);
      blok.push({ jenis: 'kode', bahasa, ...hasilKode });
    }

    kursor = cocok.index + cocok[0].length;
  }

  return blok;
}
