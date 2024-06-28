import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

const NavMenu: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../slike/leftside.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li><Link to="/">POČETNA</Link></li>
        <li><Link to="/gallery">KURSEVI</Link></li>
        <li><Link to="/about">O NAMA</Link></li>
        <li><Link to="/contact">KONTAKT</Link></li>
        <li><Link to="/cart">KORPA</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;