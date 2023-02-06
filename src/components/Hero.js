import React from "react";
import './styles/Hero.css';
import heroImg from '../ressources/cover-dark-high.jpg';

const Hero = () => {
    return (
        <>
            <h1 className="heroTitle">Charles Cantin Photographe</h1>
            <div className="heroImgWrapper">
                <img
                    src={heroImg}
                    title="logo de Charles Cantin"
                    alt="logo du site"
                    className="heroImg"
                />
            </div>
        </>
    );
}

export default Hero;