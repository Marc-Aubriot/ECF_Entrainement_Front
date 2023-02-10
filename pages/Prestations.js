/* imports reacts */
import React from "react";

/* imports composants */
import Footer from './components/Footer.js';
import Card from './components/Card.js';
import Header from "./components/Header.js";
import Meta from "./components/Meta.js";

/* Page Prestations */
const Prestations = () => {

    /* cards data */
    const cards = [
        ["Juste moi", "./ressources/photo_presta/pourmoi-desktop.jpg", "130€", "Séance pour une personne en extérieur ou en studio.","#9CA4A4"],
        ["Pour deux", "./ressources/photo_presta/pourdeux-desktop.jpg", "195€", "Pour deux personnes, en extérieur ou en studio.","#44645C"],
        ["Famille", "./ressources/photo_presta/famille-desktop.jpg", "220€", "Pour la famille ou les amis jusqu'à 4 personnes, en extérieur ou en studio. 30 euros en supllément par personne au-delà de 4 (hormis enfant jusqu'à 2ans).","#9CA4A4"],
        ["Il était une fois", "/ressources/photo_presta/iletaitunefois-desktop.jpg", "160€", "Photo de grossesse (À votre domicile, en extérieur ou en studio).","#70605C"],
        ["Mon bébé", "./ressources/photo_presta/monbebe-desktop.jpg", "100€", "Photo d'enfant jusqu'à 3 ans (photo à domicile).","#9CA4A4"],
        ["J'immortalise l'évènement", "./ressources/photo_presta/jimmortalise-desktop.jpg", "Sur mesure", "Prestation de mariage ou baptême sur devis.","#6C60A8"],
    ]

    return (
        <>
            <Meta />
            <Header />
            
            <main className="mainStyles">

                <h1 className="sectionTitle">Tarifs et Prestations</h1>

                <section className="prestations">

                    {cards.map((card,index) => {
                        return (
                            <Card title={card[0]} image={card[1]} price={card[2]} desc={card[3]} bgcolor={card[4]} key={index} />
                        )
                    })}

                </section>

                
            </main>
            
            <Footer />
        </>
    );
}

export default Prestations;