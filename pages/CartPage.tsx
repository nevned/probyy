import React from 'react';
import Kurs from '../components/Kurs';
import '../styles/CartPage.css';
import { useKursContext } from '../components/KursContext';

const CartPage: React.FC = () => {
  const { kursKupljen } = useKursContext();

 return (
    <div className="cart-container">
      <h1>Korpa</h1>
      {kursKupljen ? (
        <div className="kurs-container">
          <Kurs naziv="1. JavaScript: Dinamične Web Stranice" />
        </div>
      ) : (
        <p>Nema dodatih kurseva u korpi.</p>
      )}
    </div>
  );
};

export default CartPage;