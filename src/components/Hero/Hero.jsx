import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | AI Enthusiast | Transforming Ideas
          into Seamless Coding Solutions
        </p>
      </div>
      <div className="hero-jpg">
        <div>
          <div className="group">
            <div className="tech-icon">
              <img src="./assets/python.png"></img>
            </div>
            <div className="tech-icon">
              <img src="./assets/react.png"></img>
            </div>
          </div>
          <img src="./assets/Profile.png" className="profile" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/html.png" className="html"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/css.png"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/js.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
