/* imports reacts */
import React from "react";

/* imports composants */
import Header from "./components/Header.js";

/* Page Accueil */
const Accueil = () => {
    
    return (
        <>
            <Header />
        
            <main className="mainStyles">
                <h1 className="heroTitle">Charles Cantin Photographe</h1>
                <div className="heroImgWrapper">
                    <img
                        src="./ressources/cover-dark-high.jpg"
                        title="logo de Charles Cantin"
                        alt="logo du site"
                        className="heroImg"
                    />
                </div>
            </main>
        </>
    );
}

export default Accueil;