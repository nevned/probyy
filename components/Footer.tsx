import React, { useState } from 'react';
import Newsletter from '../models/Newsletter';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import '../styles/TermsPage.css';
import '../styles/Weather.css';

const newsletter = new Newsletter();

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setMessage('Uspesno ste se prijavili.');
      return;
    }

   const result = newsletter.subscribe(email);
    if (typeof result === 'string') {
      setMessage(result);
      setShowModal(true);
      setEmail('');
    } else {
      
      setMessage('Uspesno ste se prijavili.');
      setShowModal(true);
      setEmail('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Adresa kompanije: Jove Ilica 154, Beograd</p>
        <p>Telefon: +123 456 7890 | Email: info@edusfera.com</p>
        <div className="footer-terms">
        <Link to="/uslovi-koriscenja">Politika Privatnosti</Link>
      </div>
      <div className="footer-vreme">
        <Link to="/uslovi-koriscenja2">Proverite vreme</Link>
        <Link to="/uslovi-koriscenja3">|Bitcoin</Link>
      </div>
      </div>
      <div className="footer-center">
        <p>Pratite nas na društvenim mrežama:</p>
       
        <div className="social-icons">
          <a href="https://sr.wikipedia.org/sr-ec/Java_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%81%D0%BA%D0%B8_%D1%98%D0%B5%D0%B7%D0%B8%D0%BA)" target="_blank" rel="noopener noreferrer">
            <img src="../slike/drustvenemreze.png" alt="Social Icon 1" />
          </a>
         
        </div>
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
            <p>{message}</p>
            <button onClick={closeModal}>Zatvori</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;



