import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from '../src/pages/Accueil.js';
import Galerie from '../src/pages/Galerie.js';
import Prestations from '../src/pages/Prestations';
import Contact from '../src/pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="galerie/" element={<Galerie />} />
        <Route path="prestations/" element={<Prestations />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);