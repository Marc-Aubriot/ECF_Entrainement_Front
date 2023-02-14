/* imports reacts */
import React from "react";
import Link from 'next/link';

/* composant: Logo du site */
const Logo = () => {

    return (
        <div className="logoWrapper">

            <Link 
                href={"/Accueil"} 
            >
                                    
            
            <img
                src="../ressources/logo avec fond.png"
                title="logo de Charles Cantin"
                alt="logo du site"
                className="logoImg"
                
            />
            </Link>
        </div>
    );
}

export default Logo;