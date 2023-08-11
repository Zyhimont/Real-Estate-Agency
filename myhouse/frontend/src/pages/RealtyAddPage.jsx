import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RealtyAdd from "../components/RealtyAdd/RealtyAdd";
import BackBtn from "../components/BackBtn/BackBtn";

const RealtyAddPage = () => {
  return (
    <div className="realty-add-page-wrapper footer-fixator">
      <div className="top-block">
        <Header />
        <BackBtn />
      </div>
        <RealtyAdd />
        <Footer />
    </div>
  )
}

export default RealtyAddPage;