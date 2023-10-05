import React from "react";
import "./App.sass";
import { DesktopResinTable, 
    MobileResinTable, 
    DesktopFilamentTable, 
    MobileFilamentTable, 
    DesktopPrinterTable, 
    MobilePrinterTable } from "./Tables";

const Materials = () => {
    let screenWidth = window.innerWidth;
    let printerTable;
    let resinTable;
    let filamentTable;
    if (screenWidth < 900) {
        console.log(screenWidth)
        printerTable = <MobilePrinterTable />
        resinTable = <MobileResinTable />
        filamentTable = <MobileFilamentTable />
    }
    else {
        console.log(screenWidth)
        printerTable = <DesktopPrinterTable />
        resinTable = <DesktopResinTable />
        filamentTable = <DesktopFilamentTable />
    }
    return(
        <div>
            <h1>Vertailua erilaisista materiaaleista ja tekniikoista:</h1>
            <h2>Tässä vertailtuna tulostustekniikat:</h2>
            <p>(Huom, nämä ovat vain arvioita ja todellinen lopputulos riippuu kappaleesta <br/> 
            sekä asiakkaan toiveista).</p>
            { printerTable }
            <h2>FDM-tekniikan materiaalit:</h2>
            <p>Asteikko 1-5</p>            
            { filamentTable }
            <h2>MSLA-tekniikan materiaalit:</h2>
            <p>Asteikko 1-5</p>
            { resinTable }
{/*             <h3>Käytämme seuraavien brändien materiaaleja:</h3>
            <ul>
                <li>3DJake</li>
                <li>Anycubic</li>
                <li>Elegoo</li>
                <li>BambuLab</li>
                <li>Devil Design</li>
                <li>FilamentPM</li>
                <li>Filalab</li>
                <li>Extrudr</li>
                <li>ESun</li>
                <li>ADD:North</li>
                <li>Polymaker</li>
                <li>Winkle</li>
                <li>Fiberlogy</li>
                <li>SunLu</li>
            </ul> */}
        </div>
    );
};

export default Materials;