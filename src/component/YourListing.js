import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { theme, emptyListingData } from "../data";
import { useState } from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { baseApi } from "../baseApi";
import { Cookies } from "react-cookie";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadious: "40px",
  },
};

function YourListing() {
  const [guest, setGuest] = useState([]);

  const [isChecked, setIsChecked] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [color, setColor] = useState({
    color1: false,
    color2: false,
    color3: false,
  });

  const [vendorInfo, setVenderInfo] = useState({
    service: "",
    Image: "",
    text: "",
    weddingSize: [],
    pricing: "",
    frequency: "",
    currency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenderInfo({ ...vendorInfo, [name]: value, weddingSize: guest });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const cookies = new Cookies();

  const [file, setFile] = useState();

  const handleChangeImage = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setFile(reader.result);
      setVenderInfo({ ...vendorInfo, Image: event.target.files[0] });
    };
  };

  const [submit, setsubmit] = useState(false);
  const [edit, setEdit] = useState(false);
  const [formdata, setformData] = useState(true);

  const submitData = () => {
    setsubmit(true);
    const details = {
      headers: {
        "Access-Control-Allow-Origin": baseApi,
        "content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    const formdata = new FormData();
    formdata.set("service", vendorInfo.service);
    formdata.set("currency", vendorInfo.currency);
    formdata.set("frequency", vendorInfo.frequency);
    formdata.set("pricing", vendorInfo.pricing);
    formdata.set("Image", vendorInfo.Image);
    formdata.set("weddingSize", vendorInfo.weddingSize);
    let token = cookies.get("token");
    console.log(token);
    axios
      .post(`${baseApi}/vendorServices?token=token`, formdata, details)
      .then((res) => res.data)
      .catch((error) => console.log(error));
    console.log(
      "🚀 ~ file: YourListing.js:36 ~ handleChange ~ vendorInfo",
      vendorInfo
    );
  };

  function editData() {
    setEdit(true);
    setformData(false);
    setsubmit(false);
  }

  function closeModal() {
    setsubmit(false);
  }
  const handleGuest = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setGuest([...guest, value]);
    } else {
      setGuest(guest.filter((e) => e !== value));
    }
    setVenderInfo({ ...vendorInfo, weddingSize: guest });
  };
  const handleColor = (col) => {
    setColor(col);
  };

  const Check = (para) => {
    setIsChecked((prevIsChecked) => {
      return {
        ...prevIsChecked,
        [para]: !prevIsChecked[para],
      };
    });
  };

  return (
    <>
      <div className="Your-Listing">
        {formdata && (
          <div className="yourListing  py-3">
            <h2 className="py-3">Add a service</h2>
            <form>
              <div className="row gx-3">
                <div className="col ">
                  <div className="listingImageCol">
                    <h6>What is your service?</h6>
                    <p> e.g Pizza Van</p>
                    <input
                      type="text"
                      placeholder="What is your service?"
                      value={vendorInfo.service}
                      onChange={handleChange}
                      name="service"
                    />
                  </div>
                </div>
                <div className="col">
                  {file ? (
                    <img className="image-model" src={file} />
                  ) : (
                    <div className="listing-gallery-box text-center"></div>
                  )}
                  <div className="listing-upload-btn text-center py-4">
                    <input
                      type="file"
                      className="hide"
                      id="image_upload_01"
                      onChange={handleChangeImage}
                    />
                    <div className="uploadImgageListing">
                      <label htmlFor="image_upload_01">UPLOAD IMAGE</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="listing-section-tab">
                <h6>Tell us a bit about your service</h6>
                <div className="input-control">
                  <textarea
                    className="msg"
                    maxLength={500}
                    placeholder="Tell us a bit about you and what your clients love about working with you"
                    value={vendorInfo.text}
                    onChange={handleChange}
                    name="text"
                  ></textarea>
                  <div>{vendorInfo.text.length}/500</div>
                </div>
              </div>

              <div className="listing-section-tab">
                <h6>Pick the wedding sizes you can accomodate for:</h6>
                <p> You can pick multiple.</p>
                <div className="checkbox-btn row ">
                  <div
                    className="col checkbox-btn-col1"
                    onClick={() => Check("first")}
                    style={{ background: isChecked.first ? "green" : "gray" }}
                  >
                    <label>
                      Small (up to 30 guests){" "}
                      <input
                        type="checkbox"
                        onChange={handleGuest}
                        value="   Small (up to 30 guests)"
                      ></input>
                    </label>
                  </div>

                  <div
                    className="col checkbox-btn-col2"
                    onClick={() => Check("second")}
                    style={{ background: isChecked.second ? "green" : "gray" }}
                  >
                    <label>
                      Medium (up to 70 guests){" "}
                      <input
                        type="checkbox"
                        onChange={handleGuest}
                        value="    Medium (up to 70 guests)"
                      ></input>
                    </label>
                  </div>

                  <div
                    className="col checkbox-btn-col3"
                    onClick={() => Check("third")}
                    style={{ background: isChecked.third ? "green" : "gray" }}
                  >
                    <label>
                      Large (70+ guests){" "}
                      <input
                        type="checkbox"
                        onChange={handleGuest}
                        value="Large (70+ guests)"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>

              <div className="listing-section-tab">
                <h6>Pricing for this service:</h6>
                <div className="Price-vandor-row row">
                  <div className=" col priceVandor-box">
                    <p>Starting, From, Average etc </p>
                    <select
                      value={vendorInfo.pricing}
                      onChange={handleChange}
                      name="pricing"
                    >
                      <option>Starting at</option>
                      <option>From</option>
                      <option>Average </option>
                    </select>
                  </div>
                  <div className=" col priceVandor-box2">
                    <p>Currency + Price </p>
                    <div className="USDPrice-box">
                      <span className="USDPrice-span1">
                        $ USD
                        <img src="/static/selectarrow.svg" alt="" />
                      </span>
                      {/* <span className="USDPrice-span2">1,200</span> */}
                      <span className="USDPrice-span2">
                        <input
                          type="text"
                          value={vendorInfo.currency}
                          onChange={handleChange}
                          name="currency"
                        />
                      </span>
                    </div>
                  </div>
                  <div className=" col priceVandor-box">
                    <p>Frequency </p>
                    <select
                      value={vendorInfo.frequency}
                      onChange={handleChange}
                      name="frequency"
                    >
                      <option>Per day, per hour</option>
                      <option>Per day, per month</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="listing-review-btn ">
                <button type="button" onClick={submitData}>
                  SAVE & SUBMIT FOR REVIEW
                </button>
              </div>
            </form>
          </div>
        )}
        {edit && (
          <div className="yourListing ">
            <h2>Your Listing</h2>
            <h6 className="py-4">Edit & update your listing here</h6>
            <div
              className="row empty-venues g-0  justify-content-start"
              style={{ gap: "0" }}
            >
              {emptyListingData.map(({ id, title, text, price }) => {
                return (
                  <div className="col-md-6 col-sm-12 col-lg-3 cardAccount">
                    <div className=" empty-card-account" key={id}>
                      <div className="empty-box-account" />
                      <div className="empty-body-account">
                        <h3 className="empty-account-title">{title}</h3>
                        <p>{text}</p>
                        <p>{price}</p>
                      </div>
                    </div>

                    <div className=" py-4 px-3">
                      <button type="button">Edit</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={submit}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi" style={{ width: "600px" }}>
          <div className=" pt-3 login-title">
            <h4 className="ms-auto">That’s been sent off for review!</h4>
            <button
              onClick={closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />

          <div className="roobi-form">
            <p className="text-center" style={{ color: "#CA8BBB" }}>
              Thanks for adding a listing to your profile!
            </p>
            <div className=" row create-profile ">
              <img src="static/navlogo.png" alt="welcome" />
              <p style={{ color: "#525045", fontWeight: "bold" }}>
                Your profile is with our review team
              </p>
              <p
                style={{
                  color: "#525045",
                  paddingLeft: "150px",
                  paddingRight: "150px",
                  fontWeight: "normal",
                }}
              >
                Once they’ve given it the thumbs up we’ll be in touch to let you
                know your profile is live.
              </p>
              <div className="addListingButton">
                <button style={{ backgroundColor: "#CA8BBB" }}>CONTINUE</button>
              </div>
              <div className="addListingButton2 ">
                <button
                  onClick={editData}
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#525045",
                    border: "2px solid #525045",
                  }}
                >
                  ADD ANOTHER LISTING
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default YourListing;
