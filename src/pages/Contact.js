/* imports reacts */
import React from "react";

/* imports composants et styles */
import Footer from "../components/Footer";
import './styles/Contact.css';


/* composant: Page Contact */
const Contact = () => {
    
    return (
        <main className="mainStyles">
            <h1 className="sectionTitle">Contact</h1>

            <section className="contact">

                <div className="formWrapper">
                        
                    <form className="formArea">

                        <label className="emailArea">
                            <input type="email" name="email" className="emailInputArea" required/>
                        </label>
                        
                        <textarea value="Message" className="formTextArea" required/>

                        <button type="submit" className="submitBtn">Envoyer </button>

                    </form>

                </div>

            </section>

            <Footer />
        </main>
    );
}

export default Contact;