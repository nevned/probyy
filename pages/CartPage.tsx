import React, { useState } from 'react';
import Kurs from '../components/Kurs';
import '../styles/CartPage.css';
import { useKursContext } from '../components/KursContext';

const CartPage: React.FC = () => {
  const { kursKupljen } = useKursContext();

  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    setShowReceipt(true);
  };
  const closeModal = () => {
    setShowReceipt(false);
  };


 return (
    <div className="cart-container">
      <h1>VAŠA KORPA</h1>
      {kursKupljen ? (
        <div className="kurs-container">

          <div className="pregledKurseva">

          <Kurs cena={30} naziv="1. JavaScript: Dinamične Web Stranice" opis="Naučite osnove JavaScript-a i kako da kreirate interaktivne veb stranice kroz praktične primere i vežbe. kroz praktične primere i vežbe."/>

          </div>
          <div className="pregledNarudzbine">
            <div className="pregled">
              <h4>Pregled narudžbine</h4>
            </div>
            <div className="subtotal">
              <div className="subtotal1">
                <h4>Subtotal</h4>
              </div>
              <div className="subtotal2">
                <h4>30e</h4>
              </div>
            </div>
            <div className="ukupno">
                <div className="ukupno1">
                  <h4>Ukupno</h4>
                </div>
                <div className="ukupno2">
                  <h4>30e</h4>
                </div>
            
            </div>
              <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                {showReceipt && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <img src="../slike/priznanica.png" alt="Priznanica" className="receipt-image" />
                    </div>
                  </div>
                 )}
            </div>
          
        </div>
      ) : (
        <p>Nema dodatih kurseva u korpi.</p>
      )}
    </div>
  );
};

export default CartPage;