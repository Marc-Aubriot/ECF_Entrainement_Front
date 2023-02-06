import React from "react";
import './styles/Nav.css';

const Nav = () => {
    return (
        <nav className="navList">
            <ul>
                <li>Accueil</li>
                <li>Galerie</li>
                <li>Tarifs et prestations</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;