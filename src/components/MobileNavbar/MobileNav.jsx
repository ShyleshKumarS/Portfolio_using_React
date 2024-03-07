import React from "react";
import "./MobileNav.css";
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
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">About</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Projects</a>
            </li>
            <li>
              <a className="menu-item">Contact me</a>
            </li>
            <button className="btn btn--primary" onClick={() => {}}>
              Get in touch
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
