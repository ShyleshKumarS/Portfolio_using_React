import React from "react";
import "./MobileNav.css";
import { Link as ScrollLink } from 'react-scroll';
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}        
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/logo.png" />
          <ul>
            <li>
            <ScrollLink 
                className="menu-item"
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140} > Home</ScrollLink>
            </li>
            <li>
              <a className="menu-item" href="#A">About</a>
            </li>
            <li>
            <ScrollLink
                className="menu-item"
                to="skillsSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-140} 
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <a className="menu-item" href="https://github.com/ShyleshKumarS" target="_blank" rel="noreferrer">Projects</a>
            </li>
            <li>
            <ScrollLink
                className="menu-item"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0} 
              >
                Contact me
              </ScrollLink>
            </li>
            <button className="btn btn--primary" onClick={() => {
              window.open("https://www.linkedin.com/in/shyleshkumars/","_blank")
            }}>
              Get in touch
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
