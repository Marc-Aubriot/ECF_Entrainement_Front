/* imports reacts */
import React from "react";

/* imports composants et styles */
import Logo from "./Logo.js";
import './styles/Footer.css';


/* composant: Footer */
const Footer = () => {

    return (
        <footer className="footerStyles">

            <Logo />

            <p className="copyrightsText">© 2023 Charles Cantin</p>

        </footer>
    );
}

export default Footer;