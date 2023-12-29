import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AiFillCheckCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import StarRating from "react-star-ratings";
import RatingReview from "../component/RatingReview";
import { NavLink } from "react-router-dom";
import SearchFilterAll from "../component/SearchFilter/SearchFilterAll";
import { flancoData } from "../data";
import { BiPlusMedical } from "react-icons/bi";
import FuturedIn from "../component/FuturedIn";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function VandorListingPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const validation = Yup.object({
    first_name: Yup.string().min(3).max(25).required("First name is required"),
    last_name: Yup.string().min(2).max(25).required("last name is required"),
    email: Yup.string().email().required("email is required"),
    message: Yup.string().min(10).max(500).required("massage is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  // Formik form handling
  const { values, handleChange, handleSubmit, touched, handleBlur, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validation,
      onSubmit: (event) => {
        console.log(event);
      },
    });
  const { first_name, last_name, email, message } = values;
  return (
    <>
      <SearchFilterAll />

      <div className="listing-image">
        <img src="static/empvan.png" className="w-100" alt="piz " />
        <button className='VandorPlus-Button' ><BiPlusMedical /></button>
        <button className='VandorPhoto-Button' >SEE MORE PHOTOS</button>
      </div>

      <div className="container-fluid vandorListing-Container">
        <div className="vandor-listing row ">
          <div className="col-7 col-xl-7 col-md-8 ">
            <div className="flanco-heading-content">
            <div className="row">
            <div className="col-8">
              <h3>
                Flanco Pizza <AiFillCheckCircle /> <AiOutlineInstagram />{" "}
                <BsFacebook /> <AiOutlineTwitter />
                <span className="flancoweb">flancopizza.com</span>
              </h3>
              </div>
              <div className="col-4">
                <button className="editVandor-Profile-Btn">Edit Profile</button>
              </div>
              </div>
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
              <span style={{ paddingLeft: "10px" }}>
                4.9 | Reviews | Sussex, United Kingdom | Since 2019
              </span>

              <p className="pricing-span">
                From 30-100 guests | Price range: £225-£1500 | Average event
                cost: £700
              </p>
            </div>

            <hr />
            <div className="testimonial py-3">
              <div className="tetimonial-image d-flex">
                <img src="static/flanco.png" alt="test-op" />
                <h3>About Flanco Pizza</h3>
              </div>
              <div className="testimonial-content py-3">
                <p>
                  Flanco Pizza brings you the best Napolian Pizza fueled right
                  from our beloved and hand-painted converted horsebox! We’re
                  available for events, private hire and weddings with the
                  occasional street pitch thrown into the mix.
                </p>
              </div>
              <div className="testimonial-btn">
              
                  <button>READ MORE</button>
               
              </div>
            </div>

            <hr />
            <div className="perfect-theme ">
              <h3>PERFECT FOR THESE WEDDING THEMES:</h3>
              <h3>Boho, Festival, Modern, Whimsical, Rustic</h3>
            </div>

            <hr />

            <div className="flanco-card-container py-4">
              <div className="py-2 row">
              <div className="col-8 col-xxl-7 col-md-6">
                <h2 className="pizza-services-heading">
                  Flanco Pizza’s Services
                </h2>
                </div>
                <div className="col-4 col-xxl-5 col-md-6">
                  <button className="addService-Vandor-Btn">+ ADD A SERVICE</button>
                </div>
              </div>

              <div className=" row flanco-card-group gx-2 gy-4">
                {flancoData.map(({ id, title, image, text, price }) => {
                  return (
                    <div className="col " key={id} style={{display:'grid',placeItems:'center'}}>
                      <div className="flanco-card">
                        <button style={{ backgroundColor: "#027656" }}>
                          <BiPlusMedical />
                        </button>
                        <div className="flanco-card-image">
                          <img src={image} alt="flanco-card-img" />
                        </div>
                        <div className="flanco-card-body">
                          <h4>{title}</h4>
                          <p>{text}</p>
                          <p>{price}</p>
                        </div>
                    
                      </div>
                      <div className="flanco-service-edit">
                      <button>Edit</button>
                    </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
            <FuturedIn   heading="Featured In..." color="#F8B912" para="INSPIRATION"    />
            <FuturedIn color="#00B0D7" para="BLOGS" />
            <RatingReview />
          </div>

          <div className="col-5  col-xl-5 col-md-4 ">
            <div className="rating-link">
              <p>
                {" "}
                Share |
                <span>
                  <BiPlusMedical />
                </span>{" "}
                Save{" "}
              </p>
            </div>
            <Calendar value={dateState} onChange={changeDate} />

            <div className="listing-data-card row">
              <div className="listing-card ">
                <h3 className="listing-data-card-heading">Get in touch</h3>
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
                  <p className="reach-translator">
                    {" "}
                    Reach out through translator
                  </p>

                  <form>
                    <div className="listing-card-form">
                      <input type="text" placeholder="First name" />
                      <input type="text" placeholder="Last name" />
                      <input type="email" placeholder="Email" />

                      <div className="textarea-fieldBox">
                        <textarea
                          name="message"
                          id="msg"
                          className="textarea-msg"
                          maxLength={500}
                          placeholder="Message"
                          value={message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="rem-text px-3">
                          {message.length}/500
                        </div>
                      </div>
                      <div className="listCard-button">
                        <button type="button">SEND AWAY</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="connected-vandors">
              <div className="connected-vandors-section">
            
                <h3> Connected Vendors </h3>
                <p className="workPara">There are 34 wedding vendors who have worked with Flanco Pizza on other events. Take a peek below: </p>
              <div className="vendor-venuesPara">
                <p> ALL VENDORS & VENUES (34)</p>
                <p> VENUES (12) </p>
                <p>  CATERERS (2)</p>
                <p> FLORISTS (6)</p>
                <p> OFFICIANTS (9)</p>
                <p> PHOTOGRAPHERS (12)</p>
                <p> HAIR & MAKEUP (10)</p>
                <p> VIDEOGRAPHERS (4)</p>
                <p> STYLISTS (3)</p>
                <p> BAKERS (8)</p>
                <p>  EVENT PLANNERS (5)</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default VandorListingPage;
