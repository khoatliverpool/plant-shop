import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, where green meets serenity. We are passionate about bringing 
          nature closer to you with our carefully curated collection of houseplants. Whether you're 
          a seasoned plant parent or just beginning your green journey, we offer a wide variety of 
          beautiful, healthy plants that will transform your living space into a lush paradise. 
          Our mission is to provide high-quality plants and expert care advice to help your indoor 
          garden thrive.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
