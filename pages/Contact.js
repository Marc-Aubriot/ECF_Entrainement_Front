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
            <Meta title="Contact" siteTitle="Charles Cantin" />
            <Header />
            
            <main className="mainStyles">
                <h1 className="sectionTitle">Contact</h1>

                <section className="contact">

                    <div className="formWrapper">
                            
                        <form name="contact" method="POST" className="formArea" action="https://formspree.io/f/xknajlvp">

                                    
                            <label className="emailArea">
                                <input type="email" name="email" className="emailInputArea" placeholder="email" required/>
                            </label>
                            
                            <label>
                                <textarea name="message" placeholder="message" className="formTextArea" required> </textarea>
                            </label>

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