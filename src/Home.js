import React from "react";
import "./App.sass";
import { DesktopResinTable, 
    MobileResinTable, 
    DesktopFilamentTable, 
    MobileFilamentTable, 
    DesktopPrinterTable, 
    MobilePrinterTable } from "./Tables";

const Home = () => {
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
        <div className="home">
            <h1>VT3D - 3D-tulostus ja mallinnuspalvelut</h1>
            <h2>Tervetuloa VT3D:n keskeneräisille nettisivuille!</h2>
            <h3>Tämä on nettisivujen Alpha versio. <br/>
            Sivuja päivitetään valmiiksi.</h3>
            <p>Olemme pieni 3D-tulostus ja mallinnuspaja Oulusta (muutamme kohta). <br/>
            Piirrämme ja tulostamme kaikenlaisia hyödyllisiä ja esteettisiä esineitä. <br/>
            Koska yritys ei ole kovin suuri ja lähinnä harrastuksen johdatuksella tässä,<br/> 
            teemme kilpailijoitamme halvemmalla usein<br/></p>
            <h3>Käytämmä seuraavia tulostustekniikoita:</h3>
            <ul>
                <li>FDM, eli muovin pursotuitus suuttimen läpi</li>
                <li>MSLA, eli hartsin kovettamista UV-valolla</li>
            </ul>
            <h2>Tässä vertailtuna tulostustekniikat:</h2>
            <p>(Huom, nämä ovat vain arvioita ja todellinen lopputulos riippuu kappaleesta <br/> 
            sekä asiakkaan toiveista).</p>
            { printerTable }
            <h2>FDM-tekniikan materiaalit:</h2>            
            { filamentTable }
            <h2>MSLA-tekniikan materiaalit:</h2>
            { resinTable }
        </div>
    );
}

export default Home;