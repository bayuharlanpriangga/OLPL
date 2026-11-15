export type KodeGalatPustaka =
  | 'DATA_TIDAK_VALID'
  | 'DOKUMEN_TIDAK_DITEMUKAN'
  | 'BAHASA_TIDAK_DITEMUKAN';

export class GalatPustaka extends Error {
  public readonly kode: KodeGalatPustaka;
  public readonly konteks: string;

  constructor(kode: KodeGalatPustaka, pesan: string, konteks = '') {
    super(konteks ? `${pesan} (${konteks})` : pesan);
    this.name = 'GalatPustaka';
    this.kode = kode;
    this.konteks = konteks;
  }
}
