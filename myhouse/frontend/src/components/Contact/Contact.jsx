import React from 'react';
import './Contact.css';
import { GrMail } from "react-icons/gr";
import { FaViber, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-container innerWidth paddings flexCenter">
                <div className="contact-left">
                    <div className="image-container">
                        <img src="./media/img/contactUs.png" alt="" />
                    </div>
                </div>

                <div className="contact-right flexColStart">
                    <span className="primaryText">Contact Us</span>
                    <p className="secondary-text">
                        If you’re looking to buy or sell a home, don’t settle for average. 
                        Get in touch with an affiliated MyHouse Agent today!
                    </p>

                    <div className="contact-options flexColStart">
                        <div className="row flexStart">
                            <div className="option flexColCenter">
                                <div className="flexStart">
                                    <div className="icon flexCenter">
                                        <FaPhoneAlt size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className="mainText">Phone</span>
                                        <span className="secondaryText">+375 29 123-45-67</span>
                                    </div>
                                </div>
                            </div>
                            <div className="option flexColCenter">
                                <div className="flexStart">
                                    <div className="icon flexCenter">
                                        <GrMail size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className="mainText">Email</span>
                                        <span className="secondaryText">myhouse-realty@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row flexStart">
                            <div className="option flexColCenter">
                                <div className="flexStart">
                                    <div className="icon flexCenter">
                                        <FaTelegramPlane size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className="mainText">Telegram</span>
                                        <span className="secondaryText">+375 29 234-56-78</span>
                                    </div>
                                </div>
                            </div>
                            <div className="option flexColCenter">
                                <div className="flexStart">
                                    <div className="icon flexCenter">
                                        <FaViber size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className="mainText">Viber</span>
                                        <span className="secondaryText">+375 33 456-78-90</span>
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

export default Contact;