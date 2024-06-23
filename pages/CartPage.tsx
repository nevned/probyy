import React from 'react';
import Kurs from '../components/Kurs';
import '../styles/CartPage.css';
import { useKursContext } from '../components/KursContext';

const CartPage: React.FC = () => {
  const { kursKupljen } = useKursContext();

 return (
    <div className="cart-container">
      <h1>VAŠA KORPA</h1>
      {kursKupljen ? (
        <div className="kurs-container">

          <div className="pregledKurseva">

          <Kurs cena={30} naziv="1. JavaScript: Dinamične Web Stranice" opis="Naučite osnove JavaScript-a i kako da kreirate interaktivne veb stranice kroz praktične primere i vežbe. kroz praktične primere i vežbe."/>

          </div>
          <div className="pregledNarudzbine">

            
          </div>
          
        </div>
      ) : (
        <p>Nema dodatih kurseva u korpi.</p>
      )}
    </div>
  );
};

export default CartPage;