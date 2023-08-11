import React from 'react';
import './RealtyManagement.css';
import { Link } from "react-router-dom";

const RealtyManagement = () => {
    return (
        <div className="realty-management-content innerWidth paddings flexColCenter">
            <span className="big-text">Realty management system</span>
            <div className="realty-management-menu flexColCenter">
                    <Link to="/realty-management/add">Add new realty</Link>
                    <Link to="/realty-management/update">Modify realty</Link>
                    <Link to="/realty-management/remove">Remove realty</Link>
            </div>
        </div>
    )
}

export default RealtyManagement;