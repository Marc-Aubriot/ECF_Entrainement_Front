import React, { useState } from "react";
import './styles/Nav.css';
import hamburgerImg from '../ressources/list.svg';
import closeImg from '../ressources/x.svg';
import { NavLink } from "react-router-dom";

const Nav = () => {
    //hooks et handlers pour menu
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => { setNavbarOpen(prev => !prev) }
    const closeMenu = () => { setNavbarOpen(false) }

    // List de navigation du menu
    const links = [
        {
            id: 1,
            path: "/",
            text: "Accueil",
        },
        {
            id: 2,
            path: "/galerie",
            text: "Galerie",
        },
        {
            id: 3,
            path: "/prestations",
            text: "Tarifs et prestations",
        },
        {
            id: 4,
            path: "/contact",
            text: "Contact",
        },
    ]

    return (
        <nav className="navList">

            {/* Bouton MENU open/close */}
            <button className="hamburgerBtn" onClick={handleToggle}>
                {navbarOpen ? 
                ( 
                    <img
                        src={closeImg}
                        className="hamburgerImg"
                    />
                ) : (
                    <img
                        src={hamburgerImg}
                        className="hamburgerImg"
                    />
                )}
            </button>

            {/* Navlist + Navlink */}
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id} className="list">
                            <NavLink 
                                to={link.path} 
                                activeClassName="active-link" 
                                onClick={ () => closeMenu() } 
                                exact
                                >
                                    {link.text}
                                </NavLink>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default Nav;