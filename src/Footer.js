import React from "react";
import "./App.sass";

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-container">
                    <ul>
                        <li className="footer-item">VT3D</li>
                        <li>Sähköposti: ville@vtd.fi</li>
                        <li className="footer-item">Website made with React.js</li>
                    </ul>
                </div>
                <div className="footer-container">
                    <ul>
                        <li className="footer-item">Y-Tunnus: 3380624-6</li>
                        <li>Linnanmaa, Oulu</li>
                        <li className="footer-item"><a href="https://github.com/Vilunki15" target="_blanck">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;