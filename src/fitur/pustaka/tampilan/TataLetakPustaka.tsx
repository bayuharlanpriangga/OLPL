'use client';

import { type ReactElement, type ReactNode, useEffect, useState, useSyncExternalStore } from 'react';
import { MotionConfig, motion } from 'motion/react';
import type { ModeTema } from '@/inti';
import type {
  IdDokumen,
  InfoBahasa,
  KodeBahasa,
  SeksiNavigasi,
} from '../TipePustaka';
import { BilahAtas, type JejakNavigasi } from './BilahAtas';
import { BilahSisi } from './BilahSisi';

interface PropertiTataLetakPustaka {
  readonly daftarBahasa: readonly InfoBahasa[];
  readonly seksiPerBahasa: Readonly<Record<KodeBahasa, readonly SeksiNavigasi[]>>;
  readonly kodeBahasaAktif: KodeBahasa;
  readonly idDokumenAktif?: IdDokumen;
  readonly jejak: readonly JejakNavigasi[];
  readonly children: ReactNode;
}

const KUNCI_TEMA = 'olpl-tema-orias';
const EVENT_TEMA = 'olpl-tema-berubah';

function bacaTemaTersimpan(): ModeTema {
  if (typeof window === 'undefined') return 'terang';
  try {
    const tersimpan = window.localStorage.getItem(KUNCI_TEMA);
    if (tersimpan === 'gelap' || tersimpan === 'terang') return tersimpan;
  } catch {
    // Abaikan jika penyimpanan lokal dibatasi peramban
  }
  return 'terang';
}

function langgananTema(padaBerubah: () => void): () => void {
  window.addEventListener(EVENT_TEMA, padaBerubah);
  window.addEventListener('storage', padaBerubah);
  return () => {
    window.removeEventListener(EVENT_TEMA, padaBerubah);
    window.removeEventListener('storage', padaBerubah);
  };
}

export function TataLetakPustaka({
  daftarBahasa,
  seksiPerBahasa,
  kodeBahasaAktif,
  idDokumenAktif,
  jejak,
  children,
}: PropertiTataLetakPustaka): ReactElement {
  const tema = useSyncExternalStore<ModeTema>(
    langgananTema,
    bacaTemaTersimpan,
    () => 'terang',
  );
  const [menuTerbuka, setMenuTerbuka] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
  }, [tema]);

  function ubahTema(): void {
    const berikutnya: ModeTema = tema === 'terang' ? 'gelap' : 'terang';
    try {
      window.localStorage.setItem(KUNCI_TEMA, berikutnya);
    } catch {
      // Abaikan kegagalan penulisan penyimpanan lokal
    }
    window.dispatchEvent(new Event(EVENT_TEMA));
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-[100dvh] w-full bg-[var(--orias-latar)] text-[var(--orias-teks)]">
        <BilahSisi
          daftarBahasa={daftarBahasa}
          seksiPerBahasa={seksiPerBahasa}
          kodeBahasaAktif={kodeBahasaAktif}
          terbukaDiPonsel={menuTerbuka}
          padaTutupPonsel={() => setMenuTerbuka(false)}
          {...(idDokumenAktif !== undefined ? { idDokumenAktif } : {})}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <BilahAtas
            jejak={jejak}
            tema={tema}
            padaBukaMenu={() => setMenuTerbuka(true)}
            padaUbahTema={ubahTema}
          />

          <motion.main
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex-1 px-4 py-6 md:px-10 md:py-9"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </MotionConfig>
  );
}
