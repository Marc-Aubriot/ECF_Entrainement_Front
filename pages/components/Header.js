/* imports reacts */
import React from 'react';

/* imports composants */
import Logo from './Logo.js';
import Nav from './Nav.js';

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