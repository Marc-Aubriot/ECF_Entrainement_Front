import React from "react";
import './styles/Logo.css'
import logoImg from '../ressources/logo avec fond.png';

const Logo = () => {
    return (
        <div className="logoWrapper">
            <img
                src={logoImg}
                title="logo de Charles Cantin"
                alt="logo du site"
                className="logoImg"
            />
        </div>
    );
}

export default Logo;