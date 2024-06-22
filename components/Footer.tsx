import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <p>
          Adresa kompanije: Jove Ilica 154, Beograd, 11000, Srbija
          <br />
          Telefon: +123 456 7890 | Email: info@edusfera.com
        </p>
      </div>
      <div className="center-section">
        <p>Pratite nas na društvenim mrežama:</p>
        <div className="social-icons">
          <img src="../slike/drustvenemreze.png" alt="Social Icon 1" />
         
          {/* Dodajte slike i alt tekstove za svoje ikonice */}
        </div>
      </div>
      <div className="right-section">
        <p>Newsletter</p>
        <input type="email" placeholder="Unesite vašu email adresu" />
        <button>Prijavi se</button>
      </div>
    </footer>
  );
};

export default Footer;