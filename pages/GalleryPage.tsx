import React, { useState } from 'react';
import '../styles/GalleryPage.css';
import Kurs from '../components/Kurs';

const GalleryPage: React.FC = () => {
  const [kursKupljen, setKursKupljen] = useState(false);

  const handleKupiKurs = () => {
    setKursKupljen(true);
  };

  return (
    <div>
    <div className="gallery-container">
      <div className="section">
        <h1>Galerija kurseva</h1>
        <p>postani deo zajednice.</p>
      </div>

      <div className="section">
        <Kurs onKupi={handleKupiKurs} />
      </div>

      {kursKupljen && (
        <div className="obavestenje">
          <p>Kurs je uspešno kupljen!</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default GalleryPage;