import React from "react";
import { NavLink } from "react-router-dom";
import { weddingData } from "../data";
import { GoPlus } from "react-icons/go";

function LowerSection() {
  return (
    <>
      <div className="lowerSection">
        {" "}
        <div class="container-outer">
          <div className="lower_container">
            <p className="lower_container-heading">
              Get inspired with our favorite with Roobi weddings
            </p>
            <div className="lowercard_container">
              {weddingData.map(({ id, image, heading, span, people }) => {
                return (
                  <div className="lower_card" key={id}>
                    <button className="lowerPlus-Button">
                      <GoPlus size={25} />
                    </button>
                    <img src={image} alt="wedding" />
                    <div className="lowercard_footer">
                      <h4 style={{ fontFamily: "laviossa" }}>{heading}</h4>
                      <p>{span}</p>
                      <p>{people}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="lower_button">
              <NavLink to="/getInspired">
                <button className="seeMore_loweCard">SEE MORE</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerSection;
