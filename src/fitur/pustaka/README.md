# Fitur Pustaka (`src/fitur/pustaka`)

## Tanggung Jawab
Menyediakan katalog bahasa pemrograman, pencarian topik, penguraian konten dokumentasi menjadi AST aman, penyorotan sintaks kode, serta tampilan bacaan dokumentasi.

## Struktur
- `TipePustaka.ts` — definisi tunggal tipe domain pustaka.
- `logika/` — fungsi murni tanpa efek samping beserta unit test (`*.test.ts`).
- `data/` — pemuat data JSON hasil ekstraksi tervalidasi pada sisi server.
- `tampilan/` — komponen React App Router untuk beranda, ikhtisar bahasa, dan pembaca dokumen.

## Antarmuka Publik (`index.ts`)
Hanya mengekspos fungsi pengambil data tervalidasi, tipe publik, dan komponen halaman utama untuk `src/app/`.

## Yang Sengaja Tidak Dilakukan
- Tidak memodifikasi isi dokumentasi asli atau mengeksekusi kode pengguna di sisi klien.
- Tidak menyimpan state global yang diubah dari banyak tempat.
