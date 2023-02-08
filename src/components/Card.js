/* imports reacts */
import React from "react";

/* imports composants et styles */
import './styles/Card.css';


/* composant: Card des prestations */
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
            <div className="cardBottom" style={{backgroundColor: [props.bgcolor]}} >
                <h3 className="cardPrice">{props.price}</h3>
                <p className="cardDesc">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;