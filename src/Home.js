import React from "react";
import "./App.sass";

const Home = () => {
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
                <li>FDM, eli muovin pursotutus suuttimen läpi</li>
                <li>MSLA, eli hartsin kovetus UV-valolla</li>
            </ul>
            <h3>Toimitus:</h3>
            <p>Toimitusvaihtoehtoinamme ovat postipaketti, matkahuollon paketti ja nouto.<br/>
            Nouto tapahtuu Oulusta erikseen sovitulla tavalla.<br/>
            </p>
        </div>
    );
}

export default Home;