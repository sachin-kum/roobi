import React from "react";
import { blogDaata } from "../../data";
import { GoPlus } from "react-icons/go";
import { NavLink } from "react-router-dom";

function WeddingHints({ heading, background, color, border }) {
  return (
    <>
      <div className="blogTitle-container" style={{ background }}>
        <div className="container-outer ">
          <h3 style={{ color }}>{heading}</h3>
          <div className="blogTitle-row">
            {blogDaata.map(({ id, title, des, image }) => {
              return (
                <div className="hins_card" key={id}>
                  <div className="blogTitle-card">
                    <div className="blog-plus-btn">
                      <GoPlus size={25} />
                    </div>
                    <img src={image} alt="" />
                    <div className="blogTitle-content-body">
                      <div className="blogTitle-content">
                        <h2>{title}</h2>
                        <p>{des}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <NavLink to="/getInspired">
              <button>SEE MORE</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingHints;
