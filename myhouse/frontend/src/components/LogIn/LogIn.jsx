import { React, useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LogIn.css';

const LogIn = () => {
    const navigate = useNavigate();
    const formRef = useRef();
    const submitRef = useRef();
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        submitRef.current.addEventListener('click', sendForm);

        function sendForm(event) {
            event.preventDefault();

            const response = fetch("/auth/token/login/", {
                method: 'POST',
                body: new FormData(formRef.current)
            });
            response.then(res => res.json())
                .then(data => {
                    if (data.auth_token) {
                        localStorage.setItem("authToken", "Token " + data.auth_token);
                        navigate("/realty-management");
                    } else {
                        setIsValid(false);
                    }  
                });
        }
    }, []);

    return (
        <div className="login-page-content innerWidth paddings flexColCenter">
            {
                !isValid && (<div>
                    <span className="primaryText">Invalid username or password!</span>
                </div>)
            }

            <span className="primaryText">Log In</span>
            <form
                className="login-form flexColStart"
                ref={formRef}
                name="login"
            >
                <label htmlFor="username" className="secondaryText">Username</label>
                <input type="text" id="username" name="username"></input>

                <label htmlFor="password" className="secondaryText">Password</label>
                <input type="password" id="password" name="password"></input>

                <button type="submit" className="btn" ref={submitRef}>Log In</button>
            </form>
        </div>
    )
}

export default LogIn;