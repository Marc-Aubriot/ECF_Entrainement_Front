/* imports reacts */
import React, { useState } from "react";
import Link from 'next/link';
//import { NavLink } from "react-router-dom";

/* imports composants et styles */
//import './styles/Nav.css';

/* imports ressources */
import socialMediaImg1 from '../ressources/instagram.svg';
import socialMediaImg2 from '../ressources/facebook.svg'
import hamburgerImg from '../ressources/list.svg';
import closeImg from '../ressources/x.svg';



/* composant: barre de Nagivation */
const Nav = () => {

    //hooks et handlers pour menu
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => { setNavbarOpen(prev => !prev) }
    const closeMenu = () => { setNavbarOpen(false) }

    // liste de navigation du menu
    const links = [
        {
            id: 1,
            path: "/Accueil",
            text: "Accueil",
        },
        {
            id: 2,
            path: "/Galerie",
            text: "Galerie",
        },
        {
            id: 3,
            path: "/Prestations",
            text: "Tarifs et prestations",
        },
        {
            id: 4,
            path: "/Contact",
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
                        //src={closeImg}
                        src="../ressources/x.svg"
                        className="hamburgerImg"
                    />
                ) : (
                    <img
                        //src={hamburgerImg}
                        src="../ressources/list.svg"
                        className="hamburgerImg"
                    />
                )}
            </button>

            {/* Navlist + Navlink + Social Media*/}
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id} className="list">
                            <Link 
                                href={link.path} 
                                //activeClasName="active-link" 
                                onClick={ () => closeMenu() } 
                                //exact
                                >
                                    {link.text}
                                </Link>
                        </li>
                    )
                })}

                {/* Social Media List + Icons */}
                <li className="socialMediaList">
                    <a href="https://www.facebook.com/">
                        <img 
                            //src={socialMediaImg2}
                            src="../ressources/facebook.svg"
                            className="socialMediaImg" 
                            target="_blank" 
                        />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img 
                            //src={socialMediaImg1} 
                            src="../ressources/instagram.svg"
                            className="socialMediaImg" 
                            target="_blank" 
                        />
                    </a>
                </li>
                
            </ul>

        </nav>
    );
}

export default Nav;