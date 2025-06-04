// src/components/About.js
import React from 'react';
import './styles/About.css';

const About = () => (
  <section id="about" className="about">
    <h2>Let's Introduce</h2>
    <div className="about-content">
      <div className="about-text">
        <h3>Who We Are</h3>
        <p>
          We are a passionate team dedicated to empowering India's green revolution through
          advanced solar technologies. Our mission is to enable sustainable urban planning
          with state-of-the-art tools.
          </p>  
        <p>
          Our Eco Map is a cutting-edge solution that combines 3D modeling, solar
          irradiance data, and shadow simulations to provide actionable insights for rooftop
          solar potential and energy planning.
        </p>
        <p>
          Our tool is tailored for accuracy, user-friendliness, and dynamic visualizations,
          making it the perfect choice for policymakers, architects, and energy solution providers.
        </p>
      </div>
    </div>
  </section>
);

export default About;
