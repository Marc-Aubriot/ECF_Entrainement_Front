import React from 'react';
import Logo from './Logo.js';
import Nav from './Nav.js';
import './styles/Header.css';

const Header = () => {

    return (
        <header className="headerStyles">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;