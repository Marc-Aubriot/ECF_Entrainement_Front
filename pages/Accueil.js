/* imports reacts */
import React from "react";

/* imports composants */
import Header from "./components/Header.js";
import Meta from "./components/Meta.js";

/* Page Accueil */
const Accueil = () => {
    
    return (
        <>
            <Meta />
            <Header />
        
            <main className="mainStyles">
                
                <div className="heroImgWrapper">

                    <img
                        src="./ressources/cover-dark-high.jpg"
                        title="logo de Charles Cantin"
                        alt="logo du site"
                        className="heroImg"
                    />

                    <h1 className="heroTitle">Charles Cantin Photographe</h1>

                </div>

            </main>
        </>
    );
}

export default Accueil;