import { React, useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { imagesSliderSettings } from "../../utils/common";
import "swiper/css";
import './RealtyUpdate.css';

const RealtyUpdate = ({ realtyState, imagesState }) => {
    const realty = realtyState.realty;
    const formRef = useRef();
    const submitRef = useRef();
    const typeRef = useRef();
    const [isSucceed, setIsSucceed] = useState(null);
    const [deletedImgs, setDeletedImgs] = useState([]);

    useEffect(() => {
        const opts = Array.from(typeRef.current.children);
        const initialType = opts.find((item) => +item.value === +realty.property_type);
        initialType.selected = true;
    }, []);

    function sendForm(event) {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const formDataNonEmpty = new FormData();
        formData.delete("images");

        for (const pair of formData) {
            if (pair[1]) formDataNonEmpty.append(pair[0], pair[1]);
        }

        const responseInfo = fetch(`/api/v1/houses/houseslist/${realty.id}/`, {
            method: "PATCH",
            body: formDataNonEmpty,
            headers: {
                Authorization: localStorage.getItem("authToken"),
            },
        });
        responseInfo.then(res => {
            if (res.ok) {
                setIsSucceed(true);
            } else {
                setIsSucceed(false);
            }
            return res.json();
        })
            .then((res) => {
                if (!formRef.current.images.files.length) {
                    return;
                }

                const imagesData = new FormData();
                imagesData.append("image", formRef.current.images.files[0]);
                imagesData.append("house", realty.id);

                const responseImages = fetch(`/api/v1/houses/houseimages/${realty.id}/`, {
                    method: "POST",
                    body: imagesData,
                    headers: {
                        Authorization: localStorage.getItem("authToken"),
                    },
                });
            })
            .then(() => {
                for (let id of deletedImgs) {
                    const responseImages = fetch(`/api/v1/houses/houseimages/${realty.id}/${id}/`, {
                        method: "DELETE",
                        headers: {
                            Authorization: localStorage.getItem("authToken"),
                        },
                    });
                }
            })
    }

    function deleteImg(event) {
        const image = event.target.closest(".realty-image-card");
        const imageId = image.dataset.id;
        setDeletedImgs((prev) => [...prev, imageId]);
        event.target.closest(".swiper-slide").remove();
    }

    return (
        <div className="realty-update-content innerWidth paddings flexColCenter">
            <div className="realty-update-container">
                <span className="primaryText">Update the realty information</span>
                <form className="update-form flexColCenter"
                    name="update"
                    ref={formRef}
                >
                    <label htmlFor="title">Title *</label>
                    <input name="title" id="title" type="text" required placeholder={realty.title} />

                    <label htmlFor="address">Address *</label>
                    <input name="address" id="address" type="text" required placeholder={realty.address} />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="15" maxLength="1000" defaultValue={realty.description} />

                    <label htmlFor="constructionYear">Construction year</label>
                    <input name="construction_year" id="constructionYear" type="number" placeholder={realty.construction_year} />

                    <label htmlFor="area">Area <span>&#40;m<sup>2</sup>&#41;</span> *</label>
                    <input name="area" id="area" type="number" required placeholder={realty.area} />

                    <label htmlFor="cost">Cost *</label>
                    <input name="cost" id="cost" type="number" required placeholder={realty.cost} />

                    <label htmlFor="propertyType">Realty type</label>
                    <select name="property_type" id="propertyType" ref={typeRef}>
                        <option value="">Choose type</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                    </select>

                    <label htmlFor="contact">Agent ID *</label>
                    <input name="contact" id="contact" type="number" min="0" placeholder={realty.contact} />

                    <label htmlFor="images">Realty images</label>
                    <input name="images" type="file" id="images" accept="image/*" />

                    <button type="submit" className="btn" ref={submitRef} onClick={sendForm}>Update</button>
                </form>
                <div className="update-realty-images">
                    <span className="primaryText">To remove an image click on it</span>
                    <Swiper {...imagesSliderSettings} >
                        <SliderButtons />
                        {!imagesState.loading && (realty.images.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="realty-image-card flexColStart" data-id={item.id} onClick={deleteImg}>
                                    <img className="img-borders" src={item.image} alt="property" />
                                </div>
                            </SwiperSlide>
                        )))}
                    </Swiper>
                </div>
            </div>
            {
                (() => {
                    if (isSucceed === true) {
                        return (
                            <div className="success-block flexColCenter">
                                <span className="primaryText">The object was successfully updated</span>
                            </div>
                        )
                    } else if (isSucceed === false) {
                        return (
                            <div className="failure-block flexColCenter">
                                <span className="primaryText">Failed to update the object</span>
                            </div>
                        )
                    }
                })()
            }
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

export default RealtyUpdate;