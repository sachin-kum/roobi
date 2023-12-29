import React from "react";

import { NavLink } from "react-router-dom";
import CardSlider from "../component/CardSlider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { venues } from "../data";
import { wedding, cateres, officiants, bakers, florist } from "../data";
import LowerSection from "../component/LowerSection";
import HomePageSearch from "../component/ExploreSearchBar/ExploreSearchBar";
import SearchFilter from "../component/SearchFilter/SearchFilter";

import WeddingHints from "../component/WeddingHints/WeddingHints";
function Homepage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Navbar  */}
      <HomePageSearch />

      <div className="my-image">
        <div className="container-1728px">
          <div className="content-box">
            <h1>
              Explore unique wedding vendors from across the world with Roobi.
            </h1>
            <div className="btn-image">
              <button>
                <NavLink
                  to="/explore"
                  className="text-decoration-none text-success"
                >
                  USE THE EXPLORE TOOL HERE!
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* roobi section */}

      <div className="search-container">
        {" "}
        <div class="container-outer">
          <div className="row search-roobi">
            <h2>How to search with Roobi</h2>
          </div>
          <div className="row ">
            <div className="col-md-4 ">
              <div className="img-page text-center">
                <img src="static/FindAVenue.png" alt="logo" />
              </div>
              <div className=" img-heading1">
                <h4 className="">Find the perfect place </h4>
                <br />
                <p>
                  Use our
                  <NavLink to="/explore" className="explireTool_Link">
                    {" "}
                    Explore Tool{" "}
                  </NavLink>{" "}
                  to find your ideal wedding location
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-page text-center">
                <img src="static/UniqueVendor1.png" alt="logo" />
              </div>
              <div className="img-heading2 img-page ">
                <h4 className="">Discover unique vendors</h4>
                <br />
                <p>Get stuck into our search to find vendors perfect for you</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="img-page text-center">
                <img src="static/DreamWedding.png" alt="logo1" />{" "}
              </div>
              <div className="img-heading3 ">
                <h4>Start creating your dream wedding!</h4>
                <br />
                <p>
                  {" "}
                  Get in touch with vendors and book their fantastic services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchFilter />

      <>
        {" "}
        <div className="unqiue_section-container">
          <p className="unqiue_section">Explore unique picks with Roobi</p>
          <div className="slider-line">
            <CardSlider venues={venues} name="VENUES" color="#33e6f3" />{" "}
            <CardSlider
              venues={wedding}
              name="PHOTOGRAPHERS"
              color=" #CA8BBB"
            />
          </div>
        </div>
      </>

      {/* wedding section */}

      <LowerSection />

      <div className="slider-line">
        <CardSlider venues={cateres} name="CATERERS" color="#F8B912" />
        <CardSlider venues={officiants} name="OFFICIANTS" color="#66C0BE" />
      </div>

      <WeddingHints
        heading="Wedding hints, tips and advice from our expert vendors"
        color="#FFFFFF"
        background="#F8B912"
        border="4px solid #FFFFFF"
      />

      <div className="slider-line">
        <CardSlider venues={bakers} name="BAKERS" color="#901346" />
        <CardSlider venues={florist} name="FLORISTS" color="#EC6877" />
      </div>
    </>
  );
}

export default Homepage;
