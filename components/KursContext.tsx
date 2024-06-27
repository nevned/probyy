import React, { createContext, useContext, useState, ReactNode } from 'react';


interface KursContextProps {
  kursKupljen: boolean;
  setKursKupljen: React.Dispatch<React.SetStateAction<boolean>>;
}


const KursContext = createContext<KursContextProps | undefined>(undefined);


export const useKursContext = () => {
  const context = useContext(KursContext);
  if (!context) {
    throw new Error('useKursContext must be used within a KursProvider');
  }
  return context;
};

export const KursProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [kursKupljen, setKursKupljen] = useState(false);

  const value: KursContextProps = {
    kursKupljen,
    setKursKupljen,
  };

  return <KursContext.Provider value={value}>{children}</KursContext.Provider>;
};