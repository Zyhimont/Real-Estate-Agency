import { React, useState, useRef, useEffect } from 'react';
import './RealtyAdd.css';

const RealtyAdd = () => {
    const formRef = useRef();
    const submitRef = useRef();
    const [isSucceed, setIsSucceed] = useState(null);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        submitRef.current.addEventListener('click', sendForm);

        function sendForm(event) {
            event.preventDefault();
            const formData = new FormData(formRef.current);
            formData.delete("images");

            if (!formData.get("title") || !formData.get("address") || !formData.get("area") 
                || !formData.get("cost") || !formData.get("contact")) {
                setIsValid(false);
                return;
            }
            setIsValid(true);

            const responseInfo = fetch("/api/v1/houses/houseslist/", {
                method: "POST",
                body: formData,
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
                imagesData.append("house", res.id);
                
                const responseImages = fetch(`/api/v1/houses/houseimages/${res.id}/`, {
                    method: "POST",
                    body: imagesData,
                    headers: {
                        Authorization: localStorage.getItem("authToken"),
                    },
                });
            })
        }
    }, []);

    return (
        <div className="realty-add-content innerWidth paddings flexColCenter">
            <div className="realty-add-container">
                {
                    !isValid && (
                        <div>
                            <span className="primaryText" style={{ color: "red" }}>Fill in all required fields</span>
                        </div>
                    )
                }
                <span className="primaryText">Enter the realty information</span>
                <form className="add-form flexColCenter"
                    name="add"
                    ref={formRef}
                >
                    <label htmlFor="title">Title *</label>
                    <input name="title" id="title" type="text" required />

                    <label htmlFor="address">Address *</label>
                    <input name="address" id="address" type="text" required />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="15" maxLength="1000"></textarea>

                    <label htmlFor="constructionYear">Construction year</label>
                    <input name="construction_year" id="constructionYear" type="number" />

                    <label htmlFor="area">Area <span>&#40;m<sup>2</sup>&#41;</span> *</label>
                    <input name="area" id="area" type="number" required />

                    <label htmlFor="cost">Cost *</label>
                    <input name="cost" id="cost" type="number" required />

                    <label htmlFor="propertyType">Realty type</label>
                    <select name="property_type" id="propertyType">
                        <option value="">Choose type</option>
                        <option value="1">Residential</option>
                        <option value="2">Commercial</option>
                    </select>

                    <label htmlFor="contact">Agent ID *</label>
                    <input name="contact" id="contact" type="number" min="0" />

                    <label htmlFor="images">Realty images</label>
                    <input name="images" type="file" id="images" accept="image/*" />

                    <button type="submit" className="btn" ref={submitRef}>Add</button>
                </form>
            </div>
            {
                (() => {
                    if (isSucceed === true) {
                        return (
                            <div className="success-block flexColCenter">
                                <span className="primaryText">The object was successfully added</span>
                            </div>
                        )
                    } else if (isSucceed === false) {
                        return (
                            <div className="failure-block flexColCenter">
                                <span className="primaryText">Failed to add the object</span>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default RealtyAdd;