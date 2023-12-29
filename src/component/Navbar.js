import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';
import VandorSignup from "./VandorSignup";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import LoginUp from "./LoginUp";

function Navbar() {
  // const [modalIsOpen, setIsOpen] = useState(false);
  // function signupVandor() {
  //     setIsOpen(true)
  //   }

  return (
    <>
      <nav className="navbar navbar-expand-lg  header ">
        <div className="container-fluid navbar-container  nav-roobi ">
          <NavLink className="navbar-brand main-logo" to="/">
            <img src="static/navlogo.png" className="img-fluid" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-nav" id="navbarNav">
            <ul className="navbar-nav " style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">
                  Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/BecomeVendorPage">
                  {" "}
                  Become a vendor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/getInspired">
                  Get Inspired
                </NavLink>
              </li>
            </ul>
            <div className="main-btn">
              {/* <button onClick={signupVandor}>sign-up & log in <IoMdArrowDropdown /> <FaUserCircle /></button> */}
              <LoginUp
                button="SIGN-UP & LOG-IN "
                icon1=<IoMdArrowDropdown />
                icon2=<FaUserCircle />
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
