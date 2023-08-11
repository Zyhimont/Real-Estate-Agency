import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page-content paddings">
            <div className="about-wrapper innerWidth">
                <div className="about-text">
                    <span className="about-header">About Us</span>
                    <p>
                        MyHouse defines itself by the projects and solutions offered to forward-thinking investors and 
                        occupiers. As the world and society evolve with technology and lifestyle changes, so do the 
                        buildings in which we live and do business. MyHouse will be there to pioneer the real estate 
                        transformations that will shape the cities of the future.
                    </p>
                    <p>
                        We're proud of the in-depth research we provide across the industry. We give insight into current 
                        market trends and predictions for the future that will help you make the right property decisions.
                    </p>
                    <p>
                        Our values capture our commitment not only to ethical, professional and responsible conduct but 
                        to the essence of real estate success, an entrepreneurial value-embracing approach.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;