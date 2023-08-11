import React from 'react';
import './TopBanner.css';
import { Link } from "react-router-dom";

const TopBanner = () => {
    return (
        <div className="topBanner-wrapper">
            <div className="topBanner-container innerWidth paddings">
                <div className="topBanner-right">
                    <div>
                        <div className="topBanner-title">
                            <h1>
                                FIND <br />
                                MOST SUITABLE <br />
                                PROPERTY
                            </h1>
                        </div>
                        <div className="topBanner-desc flexColStart">
                            <p>
                                If you’re looking for a new home, an investment property or to explore the area we’ll help you
                                find exactly what you’re looking for.
                            </p>
                        </div>
                    </div>
                    <Link to="/realty" className="topBanner-btn" >
                        <span className="btn-text">Find property</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;