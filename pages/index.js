/* imports reacts */
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* imports composants et styles */
import Accueil from './Accueil.js';
import Galerie from './Galerie.js';
import Prestations from './Prestations.js';
import Contact from './Contact.js';
import Header from './components/Header.js';
//import './index.css';


/* APP */
//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(
export default function Home() {
  return (
    //<React.StrictMode>
      //<BrowserRouter>
      <>
        <Accueil />
        <Galerie />
        <Prestations />
        <Contact />
      </>
        //<Routes>
          //<Route path="/" element={<Accueil />} />
          //<Route path="galerie/" element={<Galerie />} />
          //<Route path="prestations/" element={<Prestations />} />
          //<Route path="contact/" element={<Contact />} />
        //</Routes>
      //</BrowserRouter>
    //</React.StrictMode>
  )
}