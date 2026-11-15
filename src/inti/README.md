# Modul Inti (`src/inti`)

## Tanggung Jawab
Menyediakan konfigurasi dasar aplikasi, token palet Identitas Orias (Perak–Emas), batas sistem, dan kelas galat domain tanpa ketergantungan pada fitur atau antarmuka tertentu.

## Antarmuka Publik (`index.ts`)
- `INFORMASI_APLIKASI`, `PALET_ORIAS`, `BATAS_SISTEM`, `ModeTema`
- `GalatPustaka`, `KodeGalatPustaka`

## Yang Sengaja Tidak Dilakukan
- Tidak mengimpor React, API DOM/peramban, atau modul dari `fitur/` maupun `bersama/`.
- Tidak memuat atau memproses data dokumentasi.
