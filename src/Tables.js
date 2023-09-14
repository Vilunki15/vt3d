import React from "react";
import { useState } from "react";
import "./App.css"

/* Resins */

const RTable = [
    ["Materiaali", "Kestävyys", "Sitkeys", "Shore", "Lämmönkestävyys", "Hauraus", "Hinta"],
    ["Standard", 3.5, 3.5, "D65-D90", 3.5, 3, "40-80"],
    ["Kova", 4.5, 4.5, "D68-D82", 4, 4, "80-200"],
    ["Joustava", 4, 5, "A43-A82", 3.5, 5, "50-250"],
    ["Valettava", 3, 3, "D64", "", 4, "120-300"]
];

export const DesktopResinTable = () => {
    return(
        <table className="resin-table">
            <thead>
                <tr>
                    {RTable[0].map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {RTable.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const MobileResinTable = () => {
    const [ isMenuOpen, setMenuOpen ] = useState({
        standard : false,
        kova : false,
        joustava: false,
        valettava : false
    });
    const toggleMenu = (menu) => {
        setMenuOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };
    return (
        <div>
            {Object.keys(isMenuOpen).map((material, index) => (
                <div key={material}>
                    <button onClick={() => toggleMenu(material)}>{material}</button>
                        {isMenuOpen[material] && (
                            <div className="mobile-flex-container">
                                <div className="mobile-flex-item">
                                    <ul>
                                        {RTable[0].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mobile-flex-item">
                                    <ul>
                                        {RTable[index + 1].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                </div>
            ))}
        </div>
    );
};

/* Filaments */

const FTable = [
    ["Materiaali", "Kestävyys", "Yksityiskohdat", "UV-Kestävyys", "Lämmön kestävyys", "Biohajoava", "Hinta"],
    ["PLA", 3, 5, 2, 2, "x", "20-40"],
    ["PETG", 4, 4.5, 3.5, 3.5, "", "20-40"],
    ["PCTG", 4.5, 4.5, 4, 4, "", "30-50"],
    ["ABS", 5, 4.5, 4, 4.5, "", "20-50"],
    ["ASA", 4.5, 4.5, 5, 4.5, "", "20-50"],
    ["TPU", 5, 3, 4.5, 3.5, "", "30-80"],
    ["Puu", 2.5, 4.5, 2, 2, "x", "60-100"],
    ["Nylon", 5, 4.5, 5, 5, "", "60-150"],
    ["Kivi", 3, 4.5, 2, 2, "x", "30-80"],
    ["Hohtava", 4, 4.5, 3.5, 3.5, "", "30-60"],
    ["HIPS", 4.5, 4.5, "", 4.5, "", "20-80"]
];

export const DesktopFilamentTable = () => {
    return(
        <table className="filament-table">
            <thead>
                <tr>
                    {FTable[0].map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {FTable.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const MobileFilamentTable = () => {
    const [ isMenuOpen, setMenuOpen ] = useState({
        pla : false,
        petg : false,
        pctg : false,
        abs : false,
        asa : false,
        tpu : false,
        puu : false,
        nylon : false,
        kivi : false,
        hohtava : false,
        hips : false
    });
    const toggleMenu = (menu) => {
        setMenuOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };
    return (
        <div>
            {Object.keys(isMenuOpen).map((material, index) => (
                <div key={material}>
                    <button onClick={() => toggleMenu(material)}>{material}</button>
                        {isMenuOpen[material] && (
                            <div className="mobile-flex-container">
                                <div className="mobile-flex-item">
                                    <ul>
                                        {FTable[0].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mobile-flex-item">
                                    <ul>
                                        {FTable[index + 1].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                </div>
            ))}
        </div>
    );
};

















