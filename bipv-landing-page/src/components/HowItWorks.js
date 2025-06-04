// src/components/HowItWorks.js
import React from 'react';
import './styles/HowItWorks.css';

const HowItWorks = () => (
  <section id="how-it-works" className="how-it-works">
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step">
        <div className="step-icon">📅</div>
        <h3>Step 1</h3>
        <p>Input the desired date and daily Global Horizontal Irradiance (GHI) value.</p>
      </div>
      <div className="step">
        <div className="step-icon">🏙️</div>
        <h3>Step 2</h3>
        <p>Explore the interactive 3D models with solar potential visualized.</p>
      </div>
      <div className="step">
        <div className="step-icon">📊</div>
        <h3>Step 3</h3>
        <p>Analyze energy potential through heatmaps and actionable data.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
