import React from "react";
import { useState } from "react";
import "./App.sass"
import { BsFillCheckSquareFill as CheckMark,
    Bs1SquareFill as One,
    Bs2SquareFill as Two,
    Bs3SquareFill as Three,
    Bs4SquareFill as Four,
    Bs5SquareFill as Five
} from "react-icons/bs"

/* Resins */

const RTable = [
    ["Materiaali", "Kestävyys", "Sitkeys", "Shore", "Lämmön kestävyys", "Biohajoava", "Hinta"],
    ["Standard", <Three />, <Three />, "D65-D90", <Four />, "", "40-80"],
    ["Kova", <Five />, <Five />, "D68-D82", <Four />, "", "80-200"],
    ["Joustava", <Four />, <Five />, "A43-A82", <Four />, "", "50-250"],
    ["Valettava", <Three />, <Three />, "D64", "", "", "120-300"]
];
const RMTable = [
    ["Materiaali", "Kestävyys", "Sitkeys", "Shore", "Lämmön kestävyys", "Hauraus", "Hinta"],
    ["Standard", 3, 3, "D65-D90", 4, 3, "40-80"],
    ["Kova", 5, 5, "D68-D82", 4, 4, "80-200"],
    ["Joustava", 4, 5, "A43-A82", 4, 5, "50-250"],
    ["Valettava", 3, 3, "D64", "", 4, "120-300"]
];

export const DesktopResinTable = () => {
    return(
        
        <table className="resin-table">
            <thead>
                <tr className="laatikko">
                    {RTable[0].map((header, index) => (
                        <th className="testi" key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {RTable.slice(1).map((row, rowIndex) => (
                    <tr className="laatikko" key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td className ="testi" key={cellIndex}>{cell}</td>
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
                    <button className="dropdown-button" onClick={() => toggleMenu(material)}>{material}</button>
                        {isMenuOpen[material] && (
                            <div className="mobile-flex-container">
                                <div className="mobile-flex-item">
                                    <ul>
                                        {RMTable[0].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mobile-flex-item">
                                    <ul>
                                        {RMTable[index + 1].slice(1).map((item, itemIndex) => (
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
    ["PLA", <Three />, <Five />, <Two />, <Two />, <CheckMark />, "20-40"],
    ["PETG", <Four />, <Four />, <Four />, <Three />, "", "20-40"],
    ["PCTG", <Five />, <Four />, <Four />, <Four />, "", "30-50"],
    ["ABS", <Five />, <Four />, <Four />, <Four />, "", "20-50"],
    ["ASA", <Five />, <Four />, <Five />, <Four />, "", "20-50"],
    ["TPU", <Five />, <Three />, <Four />, <Three />, "", "30-80"],
    ["Puu", <Two />, <Five />, <Two />, <Two />, <CheckMark />, "60-100"],
    ["Nylon", <Five />, <Four />, <Five />, <Five />, "", "60-150"],
    ["Kivi", <Three />, <Five />, <Two />, <Two />, <CheckMark />, "30-80"],
    ["Hohtava", <Four />, <Five />, <Four />, <Three />, "", "30-60"],
    ["HIPS", <Three />, <Four />, "", <Four />, "", "20-80"]
];
const FMTable = [
    ["Materiaali", "Kestävyys", "Yksityiskohdat", "UV-Kestävyys", "Lämmön kestävyys", "Biohajoava", "Hinta"],
    ["PLA", 3, 5, 2, 2, "Kyllä", "20-40"],
    ["PETG", 4, 4, 4, 3, "Ei", "20-40"],
    ["PCTG", 5, 4, 4, 4, "Ei", "30-50"],
    ["ABS", 5, 4, 4, 4, "Ei", "20-50"],
    ["ASA", 5, 4, 5, 4, "Ei", "20-50"],
    ["TPU", 5, 3, 4, 3, "Ei", "30-80"],
    ["Puu", 2, 5, 2, 2, "Kyllä", "60-100"],
    ["Nylon", 5, 4, 5, 5, "Ei", "60-150"],
    ["Kivi", 3, 5, 2, 2, "Kyllä", "30-80"],
    ["Hohtava", 4, 5, 4, 3, "Ei", "30-60"],
    ["HIPS", 3, 4, "", 4, "Ei", "20-80"]
];

export const DesktopFilamentTable = () => {
    return(
        <table className="filament-table">
            <thead>
                <tr className="laatikko">
                    {FTable[0].map((header, index) => (
                        <th className="testi" key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {FTable.slice(1).map((row, rowIndex) => (
                    <tr className="laatikko" key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td className="testi" key={cellIndex}>{cell}</td>
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
                    <button className="dropdown-button" onClick={() => toggleMenu(material)}>{material}</button>
                        {isMenuOpen[material] && (
                            <div className="mobile-flex-container">
                                <div className="mobile-flex-item">
                                    <ul>
                                        {FMTable[0].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mobile-flex-item">
                                    <ul>
                                        {FMTable[index + 1].slice(1).map((item, itemIndex) => (
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

/* Printers */

const PTable = [
    ["Tulostin", "XY Tarkkuus", "Z Tarkkuus", "Yksityiskohdat", "Kestävyys", "Materiaali"],
    ["MSLA", "0.035mm", "0.001mm", "Erittäin hieno", "Kohtalainen-Hyvä", "Hartsi"],
    ["FDM", "0.2-1mm", "0.12-0.4mm", "Hieno", "Hyvä-Erittäin hyvä", "Muovi"]
]

export const DesktopPrinterTable = () => {
    return(
        <table className="printer-table">
            <thead>
                <tr className="laatikko">
                    {PTable[0].map((header, index) => (
                        <th className="testi" key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {PTable.slice(1).map((row, rowIndex) => (
                    <tr className="laatikko" key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td className="testi" key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export const MobilePrinterTable = () => {
    const [ isMenuOpen, setMenuOpen ] = useState({
        msla : false,
        fdm : false
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
                    <button className="dropdown-button" onClick={() => toggleMenu(material)}>{material}</button>
                        {isMenuOpen[material] && (
                            <div className="mobile-flex-container">
                                <div className="mobile-flex-item">
                                    <ul>
                                        {PTable[0].slice(1).map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mobile-flex-item">
                                    <ul>
                                        {PTable[index + 1].slice(1).map((item, itemIndex) => (
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
}