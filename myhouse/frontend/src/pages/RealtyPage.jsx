import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Realty from "../components/Realty/Realty";

const RealtyPage = () => {
    return (
        <div className="realty-page-wrapper footer-fixator">
            <div>
                <Header />
                <Realty />
            </div>
            <Footer />
        </div>
    )
}

export default RealtyPage;