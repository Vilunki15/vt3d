import React from 'react';
import './Cookies.css';

const CookiePrompt = ({ setCookiesAccepted, setCookiesPrompted }) => {
    //This component uses parent component usestates. The component usage looks this:
    //<CookiePrompt setCookiesAccepted={setCookiesAccepted} setCookiesPrompted={setCookiesPrompted} />
    //if-else can be used for hidden/shown
    const cookieState = (cookies) => {
        setCookiesAccepted(cookies);
    };
    const cookiesPrompted = () => {
        setCookiesPrompted(true);
    };
    const handleCookieState = (accepted) => {
        cookieState(accepted);
        cookiesPrompted();
    };
    return (
        <div className='cookie-container'>
            <h2 className='cookie-header'>Evästeet</h2>
            <p className='cookie-text'>Tämä sivusto käyttää evästeitä <br />
            Käytämme evästeitä paremman palvelukokemuksen saamiseen. <br />
            Huomaathan, että evästeet saattavat vaikuttaa sivun toimintaan.</p>
            <button className='cookie-btn' onClick={() => handleCookieState(true)}>Hyväksy evästeet</button>
            <button className='cookie-btn' onClick={() => handleCookieState(false)}>Hylkää evästeet</button>
        </div>
    );
};

export default CookiePrompt;