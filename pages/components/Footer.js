/* imports reacts */
import React from "react";

/* composant: Footer */
const Footer = () => {

    return (
        <footer className="footerStyles">

            <div className="logoWrapperBottom">
                <img
                    src="../ressources/logo avec fond.png"
                    title="logo de Charles Cantin"
                    alt="logo du site"
                    className="logoImgBottom"
                />
                <p className="copyrightsText">© 2023 Charles Cantin</p>
            </div>

        </footer>
    );
}

export default Footer;