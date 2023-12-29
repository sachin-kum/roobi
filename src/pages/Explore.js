import React from "react";

import LowerSection from "../component/LowerSection";
import { season, styleNature, theme, weddingPlace } from ".././data";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchFilterAll from "../component/SearchFilter/SearchFilterAll";

function Explore() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SearchFilterAll />
      <div className="explore-image">
        <div className="container-1728px">
          <div className="explore-content">
            <h1>Let's help you explore your ideal wedding</h1>
          </div>
        </div>
      </div>

      {/* Merrid-season section-- */}

      <div className="container-outer">
        <div className="Merrid-season">
          <div className=" heading-season text-center">
            <h1>
              When feels like a good time to get married?
              <span> (pick one)</span>{" "}
            </h1>
          </div>
          <div className="group-season ">
            <div className="row justify-content-center">
              {season.map(({ id, image, heading, label }) => {
                return (
                  <div
                    className="col-md-6 col-sm-12 col-lg-3  seaon-image"
                    key={id}
                  >
                    <img src={image} alt="season " />
                    <div className=" d-flex  season-radio">
                      <input type="radio" name="season" id={label} />
                      <p className="text-seaon">
                        <label htmlFor={label}>{heading}</label>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* place-section */}
      <hr />
      <div className="container">
        <div className="Merrid-place">
          <div className="heading-place text-center">
            <h2>
              Where looks like a nice place to get married?{" "}
              <span> (pick one)</span>{" "}
            </h2>
          </div>

          <div className="group-place ">
            <div className="row justify-content-center">
              {weddingPlace.map(({ id, image, place, name, label }) => {
                return (
                  <div
                    className="col-md-6 col-sm-12 col-lg-3  place-image"
                    key={id}
                  >
                    <img src={image} alt="place " />
                    <div className=" d-flex  place-radio">
                      <input type="radio" name={name} id={label} />
                      <p className="text-place">
                        <label htmlFor={label}>{place}</label>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* style-nature section-- */}
      <hr />
      <div className="container">
        <div className="style-nature ">
          <div className="heading-nature text-center">
            <h2>
              What style feels perfect for your wedding?{" "}
              <span> (pick one)</span>{" "}
            </h2>
          </div>
          <div className="nature-group ">
            <div className=" row  justify-content-center">
              {styleNature.map(({ id, image, heading, name, label }) => {
                return (
                  <div
                    className=" col-md-6 col-sm-12 col-lg-3   nature-image"
                    key={id}
                  >
                    <img src={image} alt="place " />
                    <div className=" d-flex  nature-radio">
                      <input type="radio" name={name} id={label} />
                      <p className="text-nature">
                        {" "}
                        <label htmlFor={label}>{heading}</label>{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* Theme section-- */}

      <div className="container">
        <div className="wedding-theme">
          <div className="heading-theme  text-center">
            <h2>
              What theme feels right for your wedding? <span> (pick one)</span>
            </h2>
          </div>
          <div className="theme-group">
            <div className=" row  justify-content-center">
              {theme.map(({ id, image, theme, name, label }) => {
                return (
                  <div
                    className=" col-md-6 col-sm-12 col-lg-3   theme-image"
                    key={id}
                  >
                    <img src={image} alt="place " />
                    <div className=" d-flex  theme-radio">
                      <input type="radio" name={name} id={label} />
                      <p className="text-theme">
                        <label htmlFor={label}>{theme}</label>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="explore-btn text-center">
            <button>
              <NavLink
                to="/exploreSearch"
                className="text-decoration-none "
                style={{ color: "#1E3B76" }}
              >
                {" "}
                LET’S EXPLORE
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <LowerSection />
    </>
  );
}

export default Explore;
