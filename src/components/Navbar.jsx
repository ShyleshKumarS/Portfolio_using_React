import React, { useState } from "react";
import "./nav.css";
import MobileNav from "./MobileNavbar/MobileNav.jsx";

import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

  const[openMenu,setOpenMenu]=useState(false);

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="navbar-wrapper">
        <div className="navbar-content">
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
              <a className="menu-item">About</a>
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
              <a className="menu-item">Projects</a>
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
              <a className="menu-item"></a>
            </li>

            <button className="btn btn--primary" onClick={() => {}}>
              Get in touch
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="ham material-icons" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close":"menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
