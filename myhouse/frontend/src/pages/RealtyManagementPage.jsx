import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RealtyManagement from "../components/RealtyManagement/RealtyManagement";

const RealtyManagementPage = () => {
  return (
    <div className="realty-management-page-wrapper footer-fixator">
      <Header />
      <RealtyManagement />
      <Footer />
    </div>
  )
}

export default RealtyManagementPage;