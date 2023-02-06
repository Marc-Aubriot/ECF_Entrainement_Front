import React from "react";
import './styles/Footer.css';
import Logo from "./Logo.js";
import Copyrights from "./Copyrights.js";

const Footer = () => {
    return (
        <footer className="footerStyles">
            <Logo />
            <Copyrights />
        </footer>
    );
}

export default Footer;