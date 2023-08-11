import React from 'react';

import Header from "../components/Header/Header";
import TopBanner from "../components/TopBanner/TopBanner";
import RealtyCarousel from "../components/RealtyCarousel/RealtyCarousel";
import Promises from "../components/Promises/Promises";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function MainPage() {
  return (
    <div>
      <Header />
      <main>
        <TopBanner />
        <RealtyCarousel />
        <Promises />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;