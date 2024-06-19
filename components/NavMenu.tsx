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
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/gallery">Galerija</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
        <li><Link to="/cart">Korpa</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;