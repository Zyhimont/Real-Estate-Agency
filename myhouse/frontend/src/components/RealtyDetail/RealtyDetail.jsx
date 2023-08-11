import { React, useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { imagesSliderSettings } from "../../utils/common";
import "swiper/css";
import './RealtyDetail.css';

const RealtyDetail = ({ realty }) => {
    const [publishDate, setPublishDate] = useState("");
    useEffect(() => {
        const date = new Date(realty.publish_date);
        const day = date.getDate() >= 10 ? date.getDate() : ("0" + date.getDate());
        const month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1));
        const year = date.getFullYear();
        setPublishDate(day + "." + month + "." + year);
    }, [])

    return (
        <div className="realty-detail-content innerWidth paddings">
            <div className="realty-detail-content-top">
                <div className="realty-detail-left">
                    <Swiper {...imagesSliderSettings} >
                        <SliderButtons />
                        {realty.images.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="realty-image-card flexColStart">
                                    <img className="img-borders" src={item.image} alt="property" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="realty-detail-right">
                    <div className="top-info">
                        <div className="top-info-header">
                            <span className="primaryText">{realty.title}</span>
                            <span className="secondaryText">{realty.address}</span>
                        </div>
                        <div className="contacts-block">
                            <span className="text-header">Contacts</span>
                                <div className="phone-block">
                                    <span>Phone: </span>
                                    <span className="padding-left">{realty.contact_phone}</span>
                                    {realty.contact_extra_phone && <span className="padding-left">{realty.contact_extra_phone}</span>}
                                </div>
                                <span>Email: <span className="padding-left">{realty.contact_email}</span></span>
                        </div>
                        <div className="top-info-bottom">
                            <span className="secondaryText">Published <span>{publishDate}</span></span>
                            <span className="realty-price">
                                <span className="color-gold">$</span>
                                <span>{realty.cost} USD</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-info flexColStart">
                <div className="description-block">
                    <span className="primaryText">Description</span>
                    <p className="secondaryText">{realty.description}</p>
                </div>
                <div className="general-info-block">
                    <table>
                        <caption className="primaryText">General information</caption>
                        <tbody>
                            <tr>
                                <td>Address:</td>
                                <td className="secondaryText">{realty.address}</td>
                            </tr>
                            <tr>
                                <td>Construction year:</td>
                                <td className="secondaryText">{realty.construction_year}</td>
                            </tr>
                            <tr>
                                <td>Area:</td>
                                <td className="secondaryText">{realty.area} m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Property type:</td>
                                <td className="secondaryText">{realty.property_type}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cost-block flexColStart">
                    <span className="text-header cost-holder">Cost: <span className="padding-left">{realty.cost} USD</span></span>
                    <span className="text-header cost-holder">Price per meter: <span className="padding-left">{realty.price_per_meter} USD</span></span>
                </div>
            </div>
        </div>
    )
}

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="realty-images-slider-buttons realty-slider-buttons flexCenter">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}

export default RealtyDetail;