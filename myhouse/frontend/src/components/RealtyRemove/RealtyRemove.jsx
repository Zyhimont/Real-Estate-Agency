import { React, useState, useRef, useEffect } from 'react';
import './RealtyRemove.css';
import { Link } from "react-router-dom";

const RealtyRemove = () => {
    const formRef = useRef();
    const submitRef = useRef();
    const [isSucceed, setIsSucceed] = useState(null);

    useEffect(() => {
        submitRef.current.addEventListener('click', sendForm);

        function sendForm(event) {
            event.preventDefault();
            const response = fetch(`/api/v1/houses/houseslist/${formRef.current.id.value}/`, {
                method: "DELETE",
                headers: {
                    Authorization: localStorage.getItem("authToken"),
                },
            });
            response.then(res => {
                if (res.ok) {
                    setIsSucceed(true);
                } else {
                    setIsSucceed(false);
                }
            })
        }
    }, []);

    return (
        <div className="realty-remove-content innerWidth paddings flexColCenter">
            <div>
                <span className="primaryText">To delete a realty, enter its id</span>
                <form className="remove-form flexColCenter"
                    name="remove"
                    ref={formRef}
                >
                    <input className="realty-remove-input" name="id" type="number" min="0" placeholder="Enter id" />
                    <button type="submit" className="btn" ref={submitRef}>Delete</button>
                </form>
            </div>
            {
                (() => {
                    if (isSucceed === true) {
                        return (
                            <div className="success-block flexColCenter">
                                <span className="primaryText">The object was successfully deleted</span>
                            </div>
                        )
                    } else if (isSucceed === false) {
                        return (
                            <div className="failure-block flexColCenter">
                                <span className="primaryText">Failed to delete the object</span>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default RealtyRemove;