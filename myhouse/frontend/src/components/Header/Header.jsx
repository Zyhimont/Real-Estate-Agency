import { React } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-container innerWidth paddings">
                <Link to="/" className="companyName">MyHouse</Link>

                <div className="header-menu flexCenter">
                    <Link to="/realty">Realty</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contacts">Contact Us</Link>
                    {
                        localStorage.getItem("authToken") && <Link to="/realty-management" className="wrap-center">Management Panel</Link>
                    }
                    {
                        localStorage.getItem("authToken") ?
                        <Link to="/logout" id="authBtn">Log Out</Link>
                        : <Link to="/login" id="authBtn">Log In</Link>
                    }
                </div>
            </div>
        </header>
    )
} 

export default Header;