import React from 'react';
import '../styles/GalleryPage.css';
import Kurs from '../components/Kurs';
import { useNavigate } from 'react-router-dom';
import { useKursContext } from '../components/KursContext';

const GalleryPage: React.FC = () => {
  const { kursKupljen, setKursKupljen } = useKursContext(); // Dobijanje stanja i funkcije za postavljanje stanja iz konteksta
  const navigate = useNavigate();

  const handleKupiKurs = () => {
    setKursKupljen(true); // Postavlja stanje kupljenosti kursa na true
  };

 const handleDodajUKorpu = () => {
    if (kursKupljen) {
      navigate('/cart'); // Preusmeravanje na CartPage samo ako je kurs kupljen
    }
  };
  return (
    <div className="gallery-container">
      <div className="section1">
        <h1>Galerija kurseva</h1>
        <p>Postani deo zajednice.</p>
      </div>

      <div className="section">
        <Kurs naziv="1.JavaScript: Dinamicne Web Stranice" onKupi={handleKupiKurs} />
      </div>

      {kursKupljen && (
        <div className="obavestenje">
          <p>Da li zelite da dodate kurs u korpu?</p>
         <button onClick={handleDodajUKorpu}>Dodaj u korpu</button>
        </div>
      )}

      <div className="content-wrapper">
        <div className="text-above-image">
          <p>Ovde možete pogledati još naših kurseva koji će uskoro biti dostupni!</p>
        </div>
        <div className="section-right">
          <img src="../slike/kursevii.png" alt="Gallery Image" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;