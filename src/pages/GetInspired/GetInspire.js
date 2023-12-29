import React from "react";
import { Row, Col } from "react-bootstrap";
import GetInspiredContanier from "../../component/GetInspiredContanier";
import "./GetInspire.css";
import SearchFilterAll from "../../component/SearchFilter/SearchFilterAll";
import SearchStyleFilter from "../../component/SearchFilter/SearchStyleFilter";
import {
  getInspireData,
  getInspireData1,
  getInspireData3,
} from "./GetInspireData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const GetInspire = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SearchFilterAll />
      <div className="getInspired-page">
        <div className="get-inspired-img">
          <div className="container-outer">
            <div className="img-text">
              <h4>Get inspired with our favorite with Roobi weddings</h4>
            </div>
          </div>
        </div>
        <SearchStyleFilter />
        <div className="getInspired-container">
          <div className="wedding-container">
            <div className="container-outer">
              <Row className="row-inspire">
                <Col className="wedding-container-col">
                  <div className="weding-imgoutrt">
                    <img src="static/weding-title.png" alt="logo" />
                    <button className="WeddingPlus-Button">
                      <GoPlus size={25} />
                    </button>
                  </div>
                </Col>
                <Col className=" text text-row">
                  <div className="text-oytu">
                    <h1 className="title full-blog inspire-title">
                      Wedding Title
                    </h1>
                    <h3>Where | When | How many People</h3>
                    <p className="inspired-des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Iaculis at erat pellentesque adipiscing commodo
                      elit. Et netus et malesuada fames ac turpis egestas
                      maecenas. Elementum nisi quis eleifend quam. Arcu non
                      sodales neque sodales ut etiam.
                    </p>

                    <button className="discover-btn">DISCOVER MORE</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <GetInspiredContanier />

          <div className="wedding-container">
            <div className="container-outer">
              <Row className="row-inspire">
                <Col>
                  <div className="text text2-row">
                    <h1 className="title1 full-blog inspire-title">
                      Wedding Title
                    </h1>

                    <h3>Where | When | How many People</h3>

                    <p className="inspired-des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Iaculis at erat pellentesque adipiscing commodo
                      elit. Et netus et malesuada fames ac turpis egestas
                      maecenas. Elementum nisi quis eleifend quam. Arcu non
                      sodales neque sodales ut etiam.
                    </p>

                    <button className="discover-btn1">DISCOVER MORE</button>
                  </div>
                </Col>
                <Col className="lastsecondrow">
                  <img src="static/wedding-title8.png" alt="logo" />
                  <button>
                    <GoPlus size={25} />
                  </button>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card-container ">
            <div className="container-outer">
              <div className="wedding-data last-wedding-row row">
                {getInspireData3.map(
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
                          <div className="inspired-box">
                            <div className="inspireImage">
                              <img src={image} alt="" className="three-row" />
                              <button
                                className="lowerMapPlus"
                                style={{ backgroundColor: titleColor }}
                              >
                                <GoPlus size={25} />
                              </button>
                            </div>
                            <div className="inspire-data">
                              <h1
                                style={{ color: titleColor }}
                                className="sm-inspire-title"
                              >
                                {title}
                              </h1>
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
        </div>
      </div>
    </>
  );
};

export default GetInspire;
