import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definišemo tipove koje će kontekst podržavati
interface KursContextProps {
  kursKupljen: boolean;
  setKursKupljen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Kreiramo kontekst
const KursContext = createContext<KursContextProps | undefined>(undefined);

// Eksportujemo custom hook za korišćenje konteksta
export const useKursContext = () => {
  const context = useContext(KursContext);
  if (!context) {
    throw new Error('useKursContext must be used within a KursProvider');
  }
  return context;
};
// Komponenta koja pruža KursContext i omogućava upravljanje stanjem
export const KursProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [kursKupljen, setKursKupljen] = useState(false);

  const value: KursContextProps = {
    kursKupljen,
    setKursKupljen,
  };

  return <KursContext.Provider value={value}>{children}</KursContext.Provider>;
};