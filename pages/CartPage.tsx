import React from 'react';
import Kurs from '../components/Kurs';
import '../styles/CartPage.css';

const CartPage: React.FC = () => {
  return (
    <div>
    <div className="cart-container">
      <h1>Korpa</h1>
      <div className="kurs-container">
        <Kurs />
      </div>
    </div>
    </div>
  );
};

export default CartPage;