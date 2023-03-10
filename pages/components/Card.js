/* imports reacts */
import React from "react";

/* composant: Card des prestations */
function Card(props) {

    return (
        <div className="cardWrapper">
            <div className="cardTop">
               
                <img
                    src={props.image}
                    alt=""
                    title=""
                    className="cardImg"
                />
                <h2 className="cardTitle">{props.title}</h2>
            </div>
            <div className="cardBottom" style={{backgroundColor: [props.bgcolor]}} >
                <h3 className="cardPrice">{props.price}</h3>
                <p className="cardDesc">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;