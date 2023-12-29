import React from "react";
import Filterbtn from "../Filterbtn";

function SearchFilter() {
  return (
    <>
      <div className="search-box">
        <div className="container SearchBox-Style">
          <div className="row search-heading">
            <h2>Already know what you're looking for? Use our search here:</h2>
          </div>
          <div className="row Search_Guest_Bar">
            <div className="input-box-style col-8">
              <div className=" row search-border  ">
                <div className="col-4 input-border">
                  <select name="" id="">
                    <option value="">where?</option>
                  </select>
                  <img
                    src="static/selectarrow.svg"
                    alt=""
                    className="select-explore-style"
                  />
                </div>
                <div className="col-4 input-border">
                  <select name="" id="">
                    <option value="">Season</option>
                  </select>
                  <img
                    src="static/selectarrow.svg"
                    alt=""
                    className="select-explore-style"
                  />
                </div>

                <div className="col-4 input-border border-0  d-flex ">
                  <select name="" id="">
                    <option value="">Guests?</option>
                  </select>
                  <img
                    src="static/selectarrow.svg"
                    alt=""
                    className="select-explore-style"
                  />
                  <div className="explore-_submit_btn">
                    <button type="button">
                      <img src="static/vecot_border.png" alt="vector"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <Filterbtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
