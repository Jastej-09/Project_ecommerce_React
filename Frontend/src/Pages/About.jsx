import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About This Project</h1>
        <p>
          This project was created by <strong>Jastej Singh</strong> as a demonstration of a full-stack video game e-commerce platform.
        </p>
        <p>
          The website allows users to explore, view details, and manage a collection of video games. It includes user login, admin features like adding products, and a responsive, samurai-inspired design theme with cherry blossom aesthetics.
        </p>
        <p>
          It is built using <strong>React</strong> for the frontend, <strong>Express.js</strong> and <strong>MongoDB</strong> for the backend, and features RESTful routing, Axios integration, and modular component-based structure.
        </p>
      </div>
    </div>
  );
};

export default About;
