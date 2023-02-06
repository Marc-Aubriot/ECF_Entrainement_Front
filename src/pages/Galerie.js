import React, { useState } from "react";
import './styles/Galerie.css';
import pic_0 from '../ressources/photos_galerie/famille1-desktop.jpg';
import pic_1 from '../ressources/photos_galerie/bébé1-desktop.jpg';
import pic_2 from '../ressources/photos_galerie/bapteme1-desktop.jpg';
import pic_3 from '../ressources/photos_galerie/mariage1-desktop.jpg';
import pic_4 from '../ressources/photos_galerie/grossesse1-desktop.jpg';
import pic_5 from '../ressources/photos_galerie/couple1-desktop.jpg';
import pic_6 from '../ressources/photos_galerie/bapteme2-desktop.jpg';
import pic_7 from '../ressources/photos_galerie/bébé2-desktop.jpg';
import pic_8 from '../ressources/photos_galerie/couple2-desktop.jpg';
import pic_9 from '../ressources/photos_galerie/famille2-desktop.jpg';
import pic_10 from '../ressources/photos_galerie/grossesse2-desktop.jpg';
import pic_11 from '../ressources/photos_galerie/mariage2-desktop.jpg';
import Footer from '../components/Footer.js';

const Galerie = () => {
    const pics = [pic_0,pic_1,pic_2,pic_3,pic_4,pic_5,pic_6,pic_7,pic_8,pic_9,pic_10,pic_11]

    return (
        <main className="mainStyles">
            <h1 className="sectionTitle">Galerie</h1>

            <section className="gallery">

                {pics.map(pic => {
                    return (
                        <img src={pic}
                        className="pics"
                        alt="photo"
                        title={`photo`}
                        />
                    )
                })}
            

            </section>

            <Footer />

        </main>
    );
}

export default Galerie;