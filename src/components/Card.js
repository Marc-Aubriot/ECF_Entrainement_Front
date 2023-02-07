import React from "react";
import './styles/Card.css';
import image from '../ressources/photo_presta/pourmoi-desktop.jpg';

function Card(props) {
    return (
        <div className="cardWrapper">
            <div className="cardTop">
                <h2 className="cardTitle">{props.title}</h2>
                <img
                    src={props.image}
                    alt=""
                    title=""
                    className="cardImg"
                />
            </div>
            <div className="cardBottom">
                <h3 className="cardPrice">{props.price}</h3>
                <p className="cardDesc">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;