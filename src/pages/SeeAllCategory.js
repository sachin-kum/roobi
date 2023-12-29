import React from "react";

import SelectOption from "../component/SelectOption";
import { emptyData, venues } from "../data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VenuesCard from "../component/VenuesCard";

function SeeAllCategory() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SelectOption />

      <div className="naplesWedding Venues-Category p-4">
        <h3 className="naplesWedding-heading">Naples wedding ideas</h3>
        <h4>VENUES</h4>

        <div className="category-cards">
          <div className="row empty-venues g-0 ">
            {emptyData.map(({ id, title, text, price }) => {
              return (
                <div
                  className="col-md-6 col-sm-12 col-lg-3  empty-card"
                  key={id}
                >
                  <div className="empty-box" />
                  <div className="empty-body">
                    <h3 className="empty-title">{title}</h3>
                    <p>{text}</p>
                    <p>{price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
     
      <hr />
      </div>
      <div className="py-5">
        <h3 className="venues-heading">
          See more unique venues in Naples
        </h3>
        <VenuesCard venues={venues} name="VENUES" color="#33e6f3" />
      </div>
     
    
    </>
  );
}

export default SeeAllCategory;
