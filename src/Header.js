import React from "react";
import { useSpring, animated } from "react-spring";
import logo from "./Assets/header.jpg";
import "./App.css";





const Hiider = () => {
  return (
    <div>
      <img src={logo} alt="Header"/>
    </div>
  )
}























const PlaaHeader = () => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scrollY: 0,
  }));

  // Käytetään scroll eventiä päivittämään springProps.scrollY
  React.useEffect(() => {
    const handleScroll = () => {
      setSpringProps({ scrollY: window.scrollY });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSpringProps]);

  return (
    <div>
      <animated.div
  className="header"
  style={{
    backgroundImage: `url(https://vt3d.fi/header.jpg)`,
    transform: springProps.scrollY.to((scrollY) => `translate3d(0, ${-scrollY}px, 0)`),
  }}
>
        {/* Tähän voit lisätä muita header-sisältöjä */}
      </animated.div>
      <div className="content">
      <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
            <h1>Etusivu</h1>
      </div>
    </div>
  );
};
























const TestHeader = () => {
  const [springProps, setSpringProps] = useSpring(() => ({
    scrollY: 0,
  }));

  // Käytetään scroll eventiä päivittämään springProps.scrollY
  window.addEventListener('scroll', () => {
    setSpringProps({ scrollY: window.scrollY });
  });

  return (
    <div>
      <animated.div
        className="header"
        style={{
          backgroundImage: 'url(https://vt3d.fi/header.jpg)', // Korvaa tämä omalla taustakuvallasi
          transform: springProps.scrollY.interpolate((scrollY) => `translate3d(0, ${-scrollY}px, 0)`),
        }}
      >
        {/* Tähän voit lisätä muita header-sisältöjä */}
      </animated.div>
      {/* <animated.svg
        className="svg"
        style={{
          opacity: springProps.scrollY.interpolate({
            range: [0, 200], // Säädä tarvittaessa
            output: [1, 0], // Säädä tarvittaessa
          }),
          transform: springProps.scrollY.interpolate((scrollY) => `translate3d(0, ${scrollY}px, 0)`),
        }}
      >
        {  }
      </animated.svg> */}
      <div className="content">
        <h2>moiii</h2>
      </div>
    </div>
  );
};










/* const Header = () => {
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

} */

export default Hiider;
