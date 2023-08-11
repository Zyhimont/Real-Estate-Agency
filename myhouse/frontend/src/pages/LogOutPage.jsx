import { React, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LogOutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/auth/token/logout/", {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem("authToken"),
            },
        })
        .then(res => {
            if (res.ok) {
                localStorage.removeItem("authToken");
            }
        })
        .finally(() => {
            navigate("/");
        });
    }, []);

  return (
    <div className="about-page-wrapper footer-fixator">
        <Header />
        <div className="flexCenter">
            <span className="primaryText">Logging out...</span>
        </div>
        <Footer />
    </div>
  )
}

export default LogOutPage;