import React from 'react';
import './styles/Hero.css';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-content">
      <h1>BIPV And Solar Potential Assessment And Visualisation Tool</h1>
      <p>Empowering India's green revolution through sustainable solar planning.</p>
      <button onClick={() => window.location.href = 'http://localhost:9000/'}>
        Explore Now
      </button>
    </div>
  </section>
);

export default Hero;
