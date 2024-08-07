import React from 'react';
import './HomeStyles.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="intro-container">
        <h1>Hi,</h1>
        <h2>I'm Sudarsan Chakri</h2>
        <h3>Full Stack Developer</h3>
        <a href="mywork" className="cta-button">See My Work</a>
      </div>
      <div className="image-container">
      </div>
    </section>
  );
};

export default Home;
