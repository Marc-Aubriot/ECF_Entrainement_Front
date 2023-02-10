/* imports reacts */
import React from "react";

/* imports composants et styles */
//import './styles/Logo.css'

/* imports ressources */
import logoImg from '../ressources/logo avec fond.png';


/* composant: Logo du site */
const Logo = () => {

    return (
        <div className="logoWrapper">

            <img
                //src={logoImg}
                //srcSet="../ressources/logo avec fond.png"
                src="../ressources/logo avec fond.png"
                title="logo de Charles Cantin"
                alt="logo du site"
                className="logoImg"
            />
            
        </div>
    );
}

export default Logo;