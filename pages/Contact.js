/* imports reacts */
import React from "react";

/* imports composants */
import Footer from "./components/Footer";
import Header from "./components/Header";
import Meta from "./components/Meta";

/* Page Contact */
const Contact = () => {
    
    return (
        <>
            <Meta />
            <Header />
            
            <main className="mainStyles">
                <h1 className="sectionTitle">Contact</h1>

                <section className="contact">

                    <div className="formWrapper">
                            
                        <form className="formArea">

                            <label className="emailArea">
                                <input type="email" name="email" className="emailInputArea" value="Email" required/>
                            </label>
                            
                            <textarea value="Message" className="formTextArea" required/>

                            <button type="submit" className="submitBtn">Envoyer </button>

                        </form>

                    </div>

                </section>

               
            </main>

            <Footer />

        </>
    );
}

export default Contact;