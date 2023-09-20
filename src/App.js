import React from "react";
import { ReactDOM, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FaReact } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import CookiePrompt from "./CookiePrompt";
//import Header from "./Header";
import Footer from "./Footer"
import Home from "./Home";
import Websites from "./Websites";
import Gallery from "./Gallery";
import NoPage from "./NoPage";
import Header from "./FixedHeader"
import Materials from "./Materials";
import "./App.sass";


const App = () => {
  //useStates for cookies. 
  const [ isCookiesAccepted, setCookiesAccepted ] = useState(false);
  const [ isCookiesPrompted, setCookiesPrompted ] = useState(false);
  //cookie component hide or show. Hidden when clicked
  let cookiePrompt;
  if (isCookiesPrompted === false) {
    cookiePrompt = <CookiePrompt setCookiesAccepted={setCookiesAccepted} setCookiesPrompted={setCookiesPrompted} />
  }
  else if (isCookiesPrompted === true) {
    cookiePrompt = null
  }
  
  return (
    <div className="app">
      <Router>
        <div className="header" >
          <Header />
        </div>
        <div className="nav">
            <ul>
              <li><Link to="/">Etusivu</Link></li>
              <li><Link to="työgalleria">Työgalleria</Link></li>
              {/* <li><Link to="nettisivut">Nettisivut</Link></li> */}
              {/* <li><Link to="materiaalit">Materiaalit ja tulostustekniikat</Link></li> */}
            </ul>
          </div>
        <div className="cookies">
          {cookiePrompt}
        </div>
        <div className="main-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="työgalleria" element={<Gallery />} />
            {/* <Route exact path="nettisivut" element={<Websites />}></Route> */}
            {/* <Route exact path="materiaalit" element={<Materials />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;