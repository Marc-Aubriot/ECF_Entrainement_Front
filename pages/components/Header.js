/* imports reacts */
import React from 'react';

/* imports composants et styles */
import Logo from './Logo.js';
import Nav from './Nav.js';
//import './styles/Header.css';


/* composant: Header */
const Header = () => {

    return (
        <header className="headerStyles">

            <Logo />
            <Nav />
            
        </header>
    );
}

export default Header;