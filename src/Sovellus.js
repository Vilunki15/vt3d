import React from 'react';
import './Parallax.css'; // Oletan, että tyylit on määritelty tiedostossa App.css

class Sovellus extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  render() {
    const { scrollY } = this.state;
    const parallaxOffset = scrollY / 2; // Voit säätää offsetin sopivaksi

    return (
      <div className="container">
        <section
          className="background"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg)',
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <div className="content-wrapper">
            <p className="content-title">Full Page Parallax Effect</p>
            <p className="content-subtitle">Scroll down to see the effect!</p>
          </div>
        </section>
        <div className="lorem-ipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            diam sed justo congue consectetur at eu libero. Sed euismod
            facilisis magna, id laoreet erat tincidunt in. Nullam fringilla
            nisl non dui bibendum vestibulum.
          </p>
        </div>
      </div>
    );
  }
}

export default Sovellus;
