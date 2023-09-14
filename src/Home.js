import React from "react";
import { DesktopResinTable, MobileResinTable, DesktopFilamentTable, MobileFilamentTable, DesktopPrinterTable, MobilePrinterTable } from "./Tables";


const Home = () => {
    return(
        <div>
            <h1>VT3D - 3D-tulostus ja mallinnuspalvelut</h1>
            <h2>Tervetuloa VT3D:n nettisivuille!</h2>
            <p>Olemme pieni 3D-tulostus ja mallinnuspaja Oulusta (muutamme kohta). <br/>
            Piirrämme ja tulostamme kaikenlaisia hyödyllisiä ja esteettisiä esineitä. <br/>
            Koska yritys ei ole kovin suuri ja lähinnä harrastuksen johdatuksella tässä,<br/> 
            teemme kilpailijoitamme halvemmalla usein<br/></p>
            <h3>Käytämmä seuraavia tulostustekniikoita:</h3>
            <ul>
                <li>FDM, eli muovin pursotuitus suuttimen läpi</li>
                <li>MSLA, eli hartsin kovettamista UV-valolla</li>
            </ul>
            <MobilePrinterTable />
            <DesktopPrinterTable />
            <MobileFilamentTable />
            <DesktopFilamentTable />
            <DesktopResinTable />
            <MobileResinTable />
        </div>
    );
}

export default Home;