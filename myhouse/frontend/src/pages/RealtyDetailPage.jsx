import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RealtyDetail from "../components/RealtyDetail/RealtyDetail";
import { useNavigate, useLocation } from "react-router-dom";

const RealtyDetailPage = () => {
    let navigate = useNavigate();
    const {state} = useLocation();

    return (
        <div className="realty-detail-wrapper footer-fixator">
            <div className="top-block">
                <Header />
                <div className="flexStart innerWidth">
                    <span className="link-style" onClick={() => navigate(-1)}>&lt; Back</span>
                </div>
            </div>
            <RealtyDetail realty={state.realty} />
            <Footer />
        </div>
    )
}

export default RealtyDetailPage;