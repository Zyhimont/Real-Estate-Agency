import { React, useRef, useState } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RealtyUpdate from "../components/RealtyUpdate/RealtyUpdate";
import BackBtn from "../components/BackBtn/BackBtn";
import { getRealtyById } from "../utils/api/commonApi";

const RealtyUpdatePage = () => {
  const formRef = useRef();
  const submitRef = useRef();
  const [realtyState, setRealtyState] = useState({
    loading: true,
    realty: [],
  });
  const [imagesState, setImagesState] = useState({
    loading: true,
    images: [],
  });

  function getRealty(event) {
    event.preventDefault();
    const id = event.target.closest("form").id.value;
    getRealtyById(id, setRealtyState, setImagesState);
  }

  return (
    <div className="realty-update-page-wrapper footer-fixator">
      <div className="top-block">
        <Header />
        <BackBtn />
      </div>
      {
        realtyState.loading ? (
          <div className="realty-update-content innerWidth paddings flexColCenter">
              <span className="primaryText">Enter the realty ID</span>
              <form className="update-form flexColCenter"
                name="get"
                ref={formRef}
              >
                <input className="realty-update-input" name="id" type="number" min="0" placeholder="Enter id" />
                <button type="submit" className="btn" ref={submitRef} onClick={getRealty}>Choose realty</button>
              </form>
          </div>
        ) 
        : <RealtyUpdate realtyState={realtyState} imagesState={imagesState} />
      }
      <Footer />
    </div>
  )
}

export default RealtyUpdatePage;