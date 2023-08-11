import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LogIn from "../components/LogIn/LogIn";

const LogInPage = () => {
  return (
    <div className="about-page-wrapper footer-fixator">
      <Header />
      <LogIn />
      <Footer />
    </div>
  )
}

export default LogInPage;