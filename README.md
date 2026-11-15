# OLPL: Orias Library Programming Language

Aplikasi referensi dokumentasi 10 bahasa pemrograman dan teknologi web berbasis Next.js App Router dan TypeScript ketat.

## Alat Proyek (`rules_code_ts.md` Bagian 8)
- **Bundler & Dev Server**: Next.js 15 (App Router, `output: 'standalone'`)
- **Pengelola Paket**: `npm`
- **Pemeriksa Tipe**: `tsc --noEmit` (`strict: true`, `noUncheckedIndexedAccess: true`, `verbatimModuleSyntax: true`)
- **Linter**: ESLint (`eslint-config-next`, larangan `any`, `!`, `console.log`, dan impor tipe tanpa `import type`)
- **Test Runner**: `node:test` dijalankan via `tsx --test`

## Struktur Modul (`rules_architecture.md`)
- `src/inti/` — konfigurasi dasar, token palet Identitas Orias (Perak–Emas), batas sistem, dan kelas galat domain.
- `src/bersama/` — komponen antarmuka bersama (`IkonFacet`, `PemisahFacet`, `PenandaStatus`).
- `src/fitur/pustaka/` — domain pustaka: `logika/` (fungsi murni teruji unit test), `data/` (validasi batas runtime atas JSON hasil ekstraksi), dan `tampilan/` (komponen antarmuka Next.js).
- `src/app/` — konvensi rute App Router (`/`, `/bahasa/[kode]`, `/bahasa/[kode]/[id]`).

## Catatan Keputusan Arsitektur
1. **Data Statis JSON Tervalidasi**: Seluruh 10 bahasa, 312 topik navigasi, dan 273 modul dokumentasi telah tersalin penuh ke `src/fitur/pustaka/data/dihasilkan/` (dengan penghapusan seluruh berkas lama `/data/`), lalu divalidasi saat runtime lewat type guard (`ValidasiData.ts`) agar Server Components memuat data tanpa `eval` maupun `vm`.
2. **Penguraian HTML ke AST Terstruktur**: String HTML dokumentasi diurai oleh `PenguraiKontenHtml.ts` menjadi union terdiskriminasi `BlokKonten[]` dan dirender langsung oleh React tanpa `innerHTML` maupun `dangerouslySetInnerHTML`.
3. **Identitas Visual Orias (Perak–Emas)**: Tema Matrix lama diganti ke palet Tinta (`#0D0D0D`), Perak (`#EEF1F4`), Es (`#A9C6DC`), dan satu aksen Emas (`#D4A72C`) dengan geometri facet kristal tiga nada.
