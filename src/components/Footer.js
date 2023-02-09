/* imports reacts */
import React from "react";

/* imports composants et styles */
import './styles/Logo.css'
import './styles/Footer.css';

/* imports ressources */
import logoImg from '../ressources/logo avec fond.png';

/* composant: Footer */
const Footer = () => {

    return (
        <footer className="footerStyles">

            <div className="logoWrapperBottom">
                <img
                    src={logoImg}
                    title="logo de Charles Cantin"
                    alt="logo du site"
                    className="logoImgBottom"
                />
                <p className="copyrightsText">© 2023 Charles Cantin</p>
            </div>

        </footer>
    );
}

export default Footer;