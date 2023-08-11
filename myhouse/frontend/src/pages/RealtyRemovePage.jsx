import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RealtyRemove from "../components/RealtyRemove/RealtyRemove";
import BackBtn from "../components/BackBtn/BackBtn";

const RealtyRemovePage = () => {
  return (
    <div className="realty-remove-page-wrapper footer-fixator">
      <div className="top-block">
        <Header />
        <BackBtn />
      </div>
      <RealtyRemove />
      <Footer />
    </div>
  )
}

export default RealtyRemovePage;