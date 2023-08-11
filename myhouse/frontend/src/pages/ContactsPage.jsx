import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactsPage = () => {
    return (
        <div className="contacts-page-wrapper footer-fixator">
            <Header />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default ContactsPage;