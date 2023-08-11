import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container paddings innerWidth">
                <div className="footer-left flexColStart">
                    <span className="footer-company-name">MyHouse</span>
                    <span className="secondaryText">©2023 MyHouse Real Estate LLC. All rights reserved.</span>
                </div>
                
                <div className="footer-right flexColStart">
                    <span className="footer-media-header">Our media</span>
                    <div className="footer-media flexCenter">
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://www.facebook.com">Facebook</a>
                        <a href="https://www.instagram.com">Instagram</a>
                        <a href="https://www.youtube.com">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;