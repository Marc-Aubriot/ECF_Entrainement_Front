/* imports reacts */
import React, { useState } from "react";

/* imports composants et styles */
import Footer from '../components/Footer.js';
import './styles/Galerie.css';

/* imports ressources */
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


/* composant: Page Galerie */
const Galerie = () => { 

    /* photo data */
    const picsList = [
        {
            photo: pic_0,
            categorie: "famille",
            title: "famille1",
        },
        {
            photo: pic_1,
            categorie: "bébé",
            title: "bébé1",
        },
        {
            photo: pic_2,
            categorie: "bâptème",
            title: "bâptème1",
        },
        {
            photo: pic_3,
            categorie: "mariage",
            title: "mariage1",
        },
        {
            photo: pic_4,
            categorie: "grossesse",
            title: "grossesse1",
        },
        {
            photo: pic_5,
            categorie: "couple",
            title: "couple1",
        },
        {
            photo: pic_6,
            categorie: "bâptème",
            title: "bâptème2",
        },
        {
            photo: pic_7,
            categorie: "bébé",
            title: "bébé2",
        },
        {
            photo: pic_8,
            categorie: "couple",
            title: "couple2",
        },
        {
            photo: pic_9,
            categorie: "famille",
            title: "famille2",
        },
        {
            photo: pic_10,
            categorie: "grossesse",
            title: "grossesse2",
        },
        {
            photo: pic_11,
            categorie: "mariage",
            title: "mariage2",
        },
    ];

    /* dropdown hooks */
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleToggle = () => { setDropdownOpen(prev => !prev) }
    //const closeDropdown = () => { setDropdownOpen(false) }

    /* category + hooks */
    const [cat1, setFilterCat1] = useState(false)
    const toggleCat1 = () => { setFilterCat1(prev => !prev) }

    const [cat2, setFilterCat2] = useState(false)
    const toggleCat2 = () => { setFilterCat2(prev => !prev) }

    const [cat3, setFilterCat3] = useState(false)
    const toggleCat3 = () => { setFilterCat3(prev => !prev) }

    const [cat4, setFilterCat4] = useState(false)
    const toggleCat4 = () => { setFilterCat4(prev => !prev) }

    const [cat5, setFilterCat5] = useState(false)
    const toggleCat5 = () => { setFilterCat5(prev => !prev) }

    const [cat6, setFilterCat6] = useState(false)
    const toggleCat6 = () => { setFilterCat6(prev => !prev) }

    /* rempli la galerie avec les images, prend en compte le choix des filtres */
    function populateGalery() {
        if ( cat1 === true || cat2 === true || cat3 === true || cat4 === true || cat5 === true || cat6 === true ) {

            //créer un array photo copiant l'original et filtrant uniquement les catégories sélectionnées
            const tempArray = [];
            picsList.forEach(element => { 
                if ( cat1 === true && element.categorie === "bâptème" ) { tempArray.push(element); }
                if ( cat2 === true && element.categorie === "mariage" ) { tempArray.push(element); }
                if ( cat3 === true && element.categorie === "bébé" ) { tempArray.push(element); }
                if ( cat4 === true && element.categorie === "famille" ) { tempArray.push(element); }
                if ( cat5 === true && element.categorie === "grossesse" ) { tempArray.push(element); }
                if ( cat6 === true && element.categorie === "couple" ) { tempArray.push(element); }
            });

            return ( //retourne l'array filtré avec les catégories sélectionnées
                Object.keys(tempArray).map((item, i) => (
                    <img 
                        src={tempArray[item].photo}
                        className={`pics photo${i}`}
                        alt="photo de Charles Cantin"
                        title={`photo ${tempArray[item].title}`}
                    />
                ))
            ) 
        } else { //retourne tout l'array photo
            return (
                Object.keys(picsList).map((item, i) => (
                    <img 
                        src={picsList[item].photo}
                        className={`pics photo${i}`}
                        alt="photo de Charles Cantin"
                        title={`photo ${picsList[item].title}`}
                    />
                ))
            ) 
        }
    }

    return (
        <>
            <main className="mainStyles">

                {/* titre de la page */}
                <h1 className="sectionTitle">Galerie</h1>

                {/* Filtre avec menu Dropdown */}
                <div className="dropdownContainer">

                    {/* Toggle du menu filtre */}
                    <button className="dropdownToggle" onClick={handleToggle}>Filtre</button>

                    {/* menu filtre */}
                    <ul className={`dropdownList ${dropdownOpen ? " showDropdown" : ""}`}>

                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat1 ? " showActiveFilter" : ""}`} onClick={ toggleCat1 } >Bâptème</button>
                        </li>
                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat2 ? " showActiveFilter" : ""}`} onClick={ toggleCat2 } >Mariage</button>
                        </li>
                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat3 ? " showActiveFilter" : ""}`} onClick={ toggleCat3 } >Bébé</button>
                        </li>
                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat4 ? " showActiveFilter" : ""}`} onClick={ toggleCat4 } >Famille</button>
                        </li>
                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat5 ? " showActiveFilter" : ""}`} onClick={ toggleCat5 } >Grossesse</button>
                        </li>
                        <li className="dropdownListItem">
                            <button className={`categoryToggleBtn ${cat6 ? " showActiveFilter" : ""}`} onClick={ toggleCat6 } >Couple</button>
                        </li>

                    </ul>

                </div>

                {/* galerie photo */}
                <section className="gallery">

                    {  populateGalery() }

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Galerie;