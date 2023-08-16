import React from "react";
import { ReactDOM, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaReact } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import CookiePrompt from "./CookiePrompt";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"


import Home from "./Home";
import Websites from "./Websites";


const App = () => {


  //const [ isCookiesAccepted, setCookiesAccepted ] = useState(false);
  //const [ isCookiesPrompted, setCookiesPrompted ] = useState(false);










  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="Websites" Component={Websites} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;