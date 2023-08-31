import React from "react";
import { useSpring, animated } from "react-spring";
import logo from "./Assets/header.jpg";
import "./App.css";



const Header = () => {
    const [{ y }, set] = useSpring(() => ({ y: 0 }));
    const handleScroll = () => {
        set({ y: window.scrollY});
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const header =  <img src={logo} alt="VT3D Header Logo Pic" />


    return (
        <animated.div
          className="header"
          style={{
            transform: y.interpolate(y => `translate3d(0, ${-y}px, 0)`),
          }}
        >
          {header}
        </animated.div>
      );













    /* return (
        <div>
            <img src={header} alt="VT3D Header Logo Pic" />
            
        </div>
    ) */
}

export default Header;