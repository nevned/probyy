import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import NavMenu from '../components/NavMenu';
import {KursProvider}  from '../components/KursContext';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <KursProvider>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </KursProvider>
    </Router>
  );
};

export default App;
