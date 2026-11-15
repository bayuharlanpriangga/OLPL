# Modul Bersama (`src/bersama`)

## Tanggung Jawab
Menyediakan komponen antarmuka kecil yang dipakai ulang oleh lebih dari satu bagian tampilan (`IkonFacet`, `PemisahFacet`, dan `PenandaStatus`).

## Antarmuka Publik (`index.ts`)
- `IkonFacet`, `PemisahFacet`
- `PenandaStatus`, `JenisStatus`

## Yang Sengaja Tidak Dilakukan
- Tidak menyimpan state aplikasi atau memanggil sumber data.
- Tidak menampung utilitas serba ada yang hanya dipakai satu tempat.
