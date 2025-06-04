// src/components/Services.js
import React from 'react';
import './styles/Services.css';

const Features = () => (
  <section id="features" className="features">
    <h2>Why Choose Our Tool?</h2>
    <div className="feature-cards">
      <div className="card">
        <i className="icon">🌞</i>
        <h3>Accurate Analysis</h3>
        <p>High-precision solar irradiance data and 3D models for reliable results.</p>
      </div>
      <div className="card">
        <i className="icon">📊</i>
        <h3>Interactive Visualization</h3>
        <p>Explore heatmaps and shadow simulations for informed decision-making.</p>
      </div>
      <div className="card">
        <i className="icon">⚡</i>
        <h3>Effortless Planning</h3>
        <p>Plan energy-efficient projects quickly with intuitive tools.</p>
      </div>
    </div>
  </section>
);

export default Features;
