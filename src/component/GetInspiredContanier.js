import React from "react";
import "../pages/GetInspired/GetInspire.css";
import {
  getInspireData,
  getInspireData1,
} from "../pages/GetInspired/GetInspireData";
import { GoPlus } from "react-icons/go";

function GetInspiredContanier({ padding, paddingTop, paddingBottom }) {
  return (
    <>
      <div className="getInspired-page " style={{ padding }}>
        <div className="card-container " style={{ paddingTop: paddingTop }}>
          <div class="container-outer">
            <div className="wedding-data row">
              {getInspireData.map(
                ({
                  id,
                  image,
                  title,
                  text,
                  line,
                  borderColor,
                  titleColor,
                  btn,
                  btnColor,
                }) => {
                  return (
                    <>
                      <div className=" col-4" key={id}>
                        <div className="inspired-box inspired-box-lg">
                          <div className="inspireImage">
                            <button
                              className="lowerMapPlus"
                              style={{ backgroundColor: titleColor }}
                            >
                              {" "}
                              <GoPlus size={25} />
                            </button>
                            <img src={image} alt="" className="three-row" />
                          </div>
                          <div className="inspire-data">
                            <p
                              style={{ color: titleColor }}
                              className="sm-inspire-title"
                            >
                              {title}
                            </p>
                            <div className="when-where">
                              <p>{line}</p>
                            </div>
                            <p className="inpired-des">{text}</p>
                            <button
                              style={{
                                color: btnColor,
                                border: `3px solid ${borderColor}`,
                              }}
                              className="img-btn"
                            >
                              {btn}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="card-container ">
          <div class="container-outer">
            <div
              className="wedding-data1 row"
              style={{ paddingBottom: paddingBottom }}
            >
              {getInspireData1.map(
                ({
                  id1,
                  image1,
                  title1,
                  text1,
                  line1,
                  borderColor1,
                  titleColor1,
                  btn1,
                  btnColor1,
                }) => {
                  return (
                    <>
                      <div className="col" key={id1}>
                        <div className="inspireImage inspired-box-lg">
                          <img src={image1} alt="" className="four-row" />
                          <button
                            className="lowerMapPlus"
                            style={{ backgroundColor: titleColor1 }}
                          >
                            {" "}
                            <GoPlus size={25} />
                          </button>
                        </div>
                        <div className="inspire-data">
                          <h1
                            style={{ color: titleColor1 }}
                            className="sm-inspire-title"
                          >
                            {title1}
                          </h1>
                          <div className="when-where">
                            <p>{line1}</p>
                          </div>
                          <p className="inpired-des">{text1}</p>
                          <button
                            style={{
                              color: btnColor1,
                              border: `3px solid ${borderColor1}`,
                            }}
                            className="img-btn"
                          >
                            {btn1}
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInspiredContanier;
