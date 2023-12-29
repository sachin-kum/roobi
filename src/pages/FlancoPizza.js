import React from "react";
import SelectOption from "../component/SelectOption";
import { AiFillCheckCircle } from "react-icons/ai";
import StarRating from "react-star-ratings";
import { flancoData } from "../data";
import RatingReview from "../component/RatingReview";

function FlancoPizza() {
  return (
    <>
      <SelectOption />
      <div className="container-fluid px-5 py-5">
        <div className=" row flanco-testimonial py-3">
          <div className=" col-md-7 flanco  ">
            <div className="about_flanco d-flex">
              <div className="flanco-image">
                <img src="static/flanco.png" alt="test-op" />
              </div>
              <div className="flanco-heading-content">
                <h3>
                  Flanco Pizza <AiFillCheckCircle />
                </h3>
                <p>category: catering</p>
                <span className="rating-star">
                  <StarRating
                    name="small-rating"
                    caption="Small"
                    size={10}
                    totalStars={5}
                    rating={5}
                  />
                </span>
                <span style={{ paddingLeft: "10px", paddingTop: "20px" }}>
                  4.9 | Reviews | Sussex, United Kingdom
                </span>
              </div>
            </div>

            <p className="flanco-para py-4">
              Flanco Pizza brings you the best Napolian Pizza fueled right from
              our beloved and hand-painted converted horsebox! We’re available
              for events, private hire and weddings with the occasional street
              pitch thrown into the mix.
            </p>
            <hr />

            <div className="flanco-card-container py-4">
              <div className="py-2">
                <h2 className="pizza-services-heading">
                  Flanco Pizza’s Services
                </h2>
              </div>

              <div className=" row flanco-card-group justify-content-center gx-0">
                {flancoData.map(({ id, title, image, text, price }) => {
                  return (
                    <div className="flanco-card" key={id}>
                      <div className="flanco-card-image">
                        <img src={image} alt="flanco-card-img" />
                      </div>
                      <div className="flanco-card-body">
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <p>{price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="listing-data-card">
              <div className="listing-card px-3 py-4">
                <h3 className="py-2">Get in touch</h3>
                <div className="listing-card-content">
                  <p>
                    <b> Languages Spoken:</b> English, Spanish
                  </p>
                  <p>
                    <b>Point of contact:</b> Katie & Elliott
                  </p>
                  <p>
                    <b>Website:</b> flancopizza.com
                  </p>
                  <p>
                    <b>Telephone Number: </b>+447415020737
                  </p>
                  <p className="py-3"> Reach out through translator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RatingReview />
      </div>
    </>
  );
}

export default FlancoPizza;
