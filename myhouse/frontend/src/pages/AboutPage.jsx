import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

const AboutPage = () => {
  return (
    <div className="about-page-wrapper footer-fixator">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage;