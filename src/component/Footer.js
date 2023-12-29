import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="row footer-section">
            <div className="col-3 title-section">
              <img src="static/footerlogo.png" alt="footer"></img>
            </div>
            <div className="col-9 sections">
              <div className="row footer-column ">
                <div className="col section-1 mx-2">
                  <div className="footer-link">
                    <p className="sections-font">A little bit more info </p>
                    <p>About with Roobi</p>
                    <NavLink to="/FAQs" className="Footer-Navlink ">
                      <p>FAQs</p>{" "}
                    </NavLink>
                    <p>Get in touch Blog</p>
                    <NavLink to="/LearnMore" className="Footer-Navlink ">
                      <p>Learn More</p>
                    </NavLink>
                  </div>
                </div>
                <div className="col section-2 mx-2">
                  <div className="footer-link">
                    <p className="sections-font">The legal bits</p>
                    <NavLink to="/privacy" className="Footer-Navlink ">
                      <p>Privacy policy </p>
                    </NavLink>
                    <p> Cookie Policy</p>
                  </div>
                </div>
                <div className="col section-3 mx-2">
                  <div className="footer-link">
                    <p className="sections-font">Let’s get social</p>
                    <p>Find us on Instagram</p>
                    <p>Follow along on YouTube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
