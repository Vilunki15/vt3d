import React from "react";
import { ReactDOM, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FaReact } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import CookiePrompt from "./CookiePrompt";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer"
import Home from "./Home";
import Websites from "./Websites";
import Gallery from "./Gallery";


const App = () => {
  //const [ isCookiesAccepted, setCookiesAccepted ] = useState(false);
  //const [ isCookiesPrompted, setCookiesPrompted ] = useState(false);



  return (
    <div className="app">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="page1">Page 1</Link></li>
              <li><Link to="page2">Gallery</Link></li>
            </ul>
          </div>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="page1" element={<Websites />} />
            <Route exact path="page2" element={<Gallery />}></Route>
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );













/*   return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        
         
       
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Websites />
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
 */
/*   return(
    <Router>
      <div>
        <Header />
        <hr />
        <switch>
          <Route exact path="/"><Home /></Route>
        </switch>
      </div>
    </Router>
  ) */






/* return(
  <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="websites" element={<Websites />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)
 */
/*   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Websites />} />
          <Route path="contact" element={<Footer />} />
        </Route>
      </Routes>    
    </BrowserRouter> 
  ) */
}

export default App;