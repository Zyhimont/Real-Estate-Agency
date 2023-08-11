import React from 'react';
import './BackBtn.css';
import { Link } from "react-router-dom";

const BackBtn = () => {
    return (
        <div className="back-btn flexStart innerWidth">
            <Link to="/realty-management"><span>&lt; </span>Back to menu</Link>
        </div>
    )
}

export default BackBtn;