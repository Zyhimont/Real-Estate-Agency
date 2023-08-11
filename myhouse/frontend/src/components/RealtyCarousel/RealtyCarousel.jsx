import {React, useEffect, useState} from 'react';
import './RealtyCarousel.css';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { sliderSettings } from "../../utils/common";
import "swiper/css";
import { getFullRealtyList } from "../../utils/api/commonApi";
import { useNavigate  } from "react-router-dom";

const RealtyCarousel = () => {
    const navigate = useNavigate();

    const [realtyState, setRealtyState] = useState({
        loading: true,
        realty: [],
      });

    const [imagesState, setImagesState] = useState({
    loading: true,
    images: [],
    });

    useEffect(() => {
        getFullRealtyList(setRealtyState, setImagesState);
    }, []);

    function openRealty(event) {
        const id = event.target.closest(".realty-card").id;
        const realty = realtyState.realty.find((item) => +item.id === +id);
        navigate(`/realty/${id}`, { state: { realty } });
    };

    return (
        <div className="realty-wrapper">
            <div className="realty-container innerWidth paddings">
                <div className="realty-head flexColStart">
                    <span className="primaryText">Popular Realty</span>
                </div>
                <Swiper {...sliderSettings} >
                    <SliderButtons />
                    {realtyState.realty.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="realty-card flexColStart" id={item.id} onClick={openRealty}>
                                <img className="img-borders" src={
                                    !imagesState.loading && item.images ? item.images[0].image : "./media/img/realty_placeholder.png"    
                                } alt="property" />
                                <span className="realty-price">
                                    <span className="color-gold">$</span>
                                    <span>{item.cost}</span>
                                </span>
                                <span className="bold-text">{item.title}</span>
                                <span className="realty-carousel-address secondaryText">{item.address}</span>
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> 
        </div>
    )
}

export default RealtyCarousel;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="realty-slider-buttons flexCenter">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}