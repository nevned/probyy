import React, { useState } from 'react';
import Newsletter from '../models/Newsletter';
import '../styles/Footer.css';

const newsletter = new Newsletter();

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setMessage('Molimo unesite email adresu.');
      return;
    }

    const result = newsletter.subscribe(email);
    setMessage(result);
    setShowModal(true);
    setEmail('');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Adresa kompanije: Jove Ilica 154, Beograd, 11000, Srbija</p>
        <p>Telefon: +123 456 7890 | Email: info@edusfera.com</p>
      </div>
      <div className="footer-center">
        <p>Pratite nas na društvenim mrežama:</p>
        {/* Ovdje dodaj ikone društvenih mreža */}
      </div>
      <div className="social-icons">
          <img src="../slike/drustvenemreze.png" alt="Social Icon 1" />
      
          {/* Dodajte slike i alt tekstove za svoje ikonice */}
        </div>
      <div className="footer-right">
        <p>Prijavite se na naš newsletter:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
        />
        <button onClick={handleSubscribe}>Prijavi se</button>
       
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Uspesno ste se prijavili</p>
            <button onClick={closeModal}>Zatvori</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

