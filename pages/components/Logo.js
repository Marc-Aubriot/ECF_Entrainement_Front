/* imports reacts */
import React from "react";

/* composant: Logo du site */
const Logo = () => {

    return (
        <div className="logoWrapper">

            <img
                src="../ressources/logo avec fond.png"
                title="logo de Charles Cantin"
                alt="logo du site"
                className="logoImg"
            />
            
        </div>
    );
}

export default Logo;