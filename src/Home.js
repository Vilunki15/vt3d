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
            <h3>Tämä on nettisivujen Beta versio. <br/>
            Sivuja päivitetään valmiiksi.</h3>
            <p>Olemme pieni 3D-tulostus ja mallinnuspaja Oulussa. <br/>
            Suunnittelemme ja tulostamme kaikenlaisia hyödyllisiä ja esteettisiä esineitä. <br/>
            Tulostustoiminta on aloitettu harrastuksen pohjalta <br/>  
            ja olemme kasvaneet pikkuhiljaa oikeaksi yritykseksi.<br/></p>
            <h3>Käytämme seuraavia tulostustekniikoita:</h3>
            <ul>
                <li>FDM, eli muovin pursotuitus suuttimen läpi</li>
                <li>MSLA, eli hartsin kovettamista UV-valolla</li>
            </ul>
            <h3>Toimitus:</h3>
            <p>Toimitusvaihtoehtoinamme ovat postipaketti, matkahuollon paketti ja nouto.<br/>
            Nouto tapahtuu Oulusta erikseen sovitulla tavalla.<br/>
            </p>
        </div>
    );
}

export default Home;