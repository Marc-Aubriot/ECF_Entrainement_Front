import React, { useState } from "react";
import './styles/Prestations.css';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
import pic_justemoi from '../ressources/photo_presta/pourmoi-desktop.jpg';
import pic_pourdeux from '../ressources/photo_presta/pourdeux-desktop.jpg';
import pic_famille from '../ressources/photo_presta/famille-desktop.jpg';
import pic_iletaitunefois from '../ressources/photo_presta/iletaitunefois-desktop.jpg';
import pic_monbebe from '../ressources/photo_presta/monbebe-desktop.jpg';
import pic_jimmortalise from '../ressources/photo_presta/jimmortalise-desktop.jpg';

const Prestations = () => {
    const cards = [
            ["Juste moi", pic_justemoi, "130€", "Séance pour une personne en extérieur ou en studio."],
            ["Pour deux", pic_pourdeux, "195€", "Pour deux personnes, en extérieur ou en studio."],
            ["Famille", pic_famille, "220€", "Pour la famille ou les amis jusqu'à 4 personnes, en extérieur ou en studio. 30 euros en supllément par personne au-delà de 4 (hormis enfant jusqu'à 2ans)."],
            ["Il était une fois", pic_iletaitunefois, "160€", "Photo de grossesse (À votre domicile, en extérieur ou en studio)."],
            ["Mon bébé", pic_monbebe, "100€", "Photo d'enfant jusqu'à 3 ans (photo à domicile)."],
            ["J'immortalise l'évènement", pic_jimmortalise, "Sur mesure", "Prestation de mariage ou baptême sur devis."],
        ]

    return (
        <main className="mainStyles">

            <h1 className="sectionTitle">Tarifs et Prestations</h1>

            <section className="prestations">

                {cards.map(card => {
                    return (
                        <Card title={card[0]} image={card[1]} price={card[2]} desc={card[3]} />
                    )
                })}

            </section>

            <Footer />
        </main>
    );
}

export default Prestations;