import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactUs-page-content paddings">
            <div className="contactUs-wrapper innerWidth">
                <div className="contactUs-text">
                    <span className="contactUs-header">Contact Us</span>
                    <p>
                        If you’re looking to buy or sell a home, don’t settle for average. 
                        Get in touch with an affiliated MyHouse Agent today!
                    </p>

                    <div className="contact-options flexColStart">
                        <div className="row flexStart">
                            <div className="contactUs-option">
                                <div className="flexStart">
                                    <div className="detail flexColStart">
                                        <span className="mainText">Phone</span>
                                        <span>+375 29 123-45-67</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contactUs-option">
                                <div className="flexStart">
                                    <div className="detail flexColStart">
                                        <span className="mainText">Email</span>
                                        <span>myhouse-realty@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flexStart">
                            <div className="contactUs-option">
                                <div className="flexStart">
                                    <div className="detail flexColStart">
                                        <span className="mainText">Telegram</span>
                                        <span>+375 29 234-56-78</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contactUs-option">
                                <div className="flexStart">
                                    <div className="detail flexColStart">
                                        <span className="mainText">Viber</span>
                                        <span>+375 33 456-78-90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;