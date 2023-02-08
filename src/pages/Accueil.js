/* imports reacts */
import React from "react";

/* imports composants et styles */
import './styles/Accueil.css';

/* imports ressources */
import heroImg from '../ressources/cover-dark-high.jpg';


/* composant: Page Accueil */
const Accueil = () => {
    
    return (
        <main className="mainStyles">
            <h1 className="heroTitle">Charles Cantin Photographe</h1>
            <div className="heroImgWrapper">
                <img
                    src={heroImg}
                    title="logo de Charles Cantin"
                    alt="logo du site"
                    className="heroImg"
                />
            </div>
        </main>
    );
}

export default Accueil;