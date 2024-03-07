import React, { useState } from "react";
import "./nav.css";
import MobileNav from "./MobileNavbar/MobileNav.jsx";

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
