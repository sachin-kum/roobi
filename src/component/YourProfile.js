import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
// import { theme } from "../data";
import "react-phone-input-2/lib/style.css";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPlusSm } from "react-icons/hi";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
  themelist_action,
  vandor_sinupaction,
} from "../redux/Action/Useraction";
import Autocomplete from "react-google-autocomplete";
import Loader from "./Loader";

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

function YourProfile() {
  const navigate = useNavigate();
  const [addanothelocation, setaddanothelocation] = useState({
    area_serviced: "",
    backupname: "",
    contact_email: "",
  });
  const [anotherlocation, setanotherlocation] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state) => state.category);
  const {
    user,
    isAuthenticated,
    loading: useloading,
  } = useSelector((state) => state.user);
  const { themes } = useSelector((state) => state.themlist);

  let theme = themes?.result;
  console.log(theme);

  const [value, setValue] = useState([0, 10000]);
  const [selectlocation, setselectlocation] = useState("");

  let allcategory = category?.result;
  const [vandor_details, setvandor_details] = useState({
    business_name: "",
    display_name: "",
    insuranse_proof: "",
    registration_year: "",
    display_name: "",
    website: "",
    social_links: "",
    contact_person_name: "",
    conversation_languages: "",
    about: "",
    gallery: [],
    intro_video: "",
    location: "",
    area_serviced: "",
    contact_person_email: "",
    contact_person_contact: "",
    primary_category: "",
    min_price: "",
    max_price: "",
    themes_ids: "",
  });

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(themelist_action());
    },
    [pathname],
    dispatch
  );

  const marks = [
    {
      value: 0,
      label: "$",
    },

    {
      value: 20000,
      label: "$$$",
    },
  ];
  function valuetext(value) {
    return `${value}$`;
  }

  const formchanger = (e) => {
    setvandor_details({ ...vandor_details, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue[0], newValue[1]);
    setvandor_details({ ...vandor_details, min_price: newValue[0] });
    setvandor_details({ ...vandor_details, max_price: newValue[1] });
  };
  const [submit, setsubmit] = useState(false);
  const [edit, setEdit] = useState(false);
  const [formdata, setformData] = useState(true);

  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgbox, setImgbox] = useState(false);

  const [videoLabel, setVideoLabel] = useState(false);
  const [videoFile, setVideoFile] = useState();
  const submitData = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.set("business_name", vandor_details.business_name);
    formdata.set("display_name", vandor_details.display_name);
    formdata.set("insurance_proof", vandor_details.insuranse_proof);
    formdata.set("intro_video", vandor_details.intro_video);
    formdata.set(
      "contact_person_contact",
      vandor_details.contact_person_contact
    );
    formdata.set("contact_person_email", vandor_details.contact_person_email);
    formdata.set("contact_person_name", vandor_details.contact_person_name);
    formdata.set(
      "conversation_languages",
      vandor_details.conversation_languages
    );
    formdata.set("about", vandor_details.about);
    formdata.set("location", selectlocation);
    formdata.set("area_serviced", vandor_details.area_serviced);
    formdata.set("website", vandor_details.website);
    formdata.set("social_links", vandor_details.social_links);
    formdata.set("registration_year", vandor_details.registration_year);
    formdata.set("primary_category", vandor_details.primary_category);
    formdata.set("min_price", value[0]);
    formdata.set("max_price", value[1]);
    formdata.set("themes_ids", vandor_details.themes_ids);
    formdata.set("another_location", anotherlocation);
    formdata.set("another_area_serviced", addanothelocation.area_serviced);
    formdata.set("backupname", addanothelocation.backupname);
    formdata.set("contact_backup_email", addanothelocation.contact_email);
    console.log(vandor_details.gallery);
    let images = vandor_details.gallery;
    images.forEach((img) => {
      formdata.append("gallery", img);
    });
    console.log(anotherLocation);
    console.log("video", vandor_details);
    console.log(selectlocation);
    dispatch(vandor_sinupaction(formdata));
    // setsubmit(true);
  };
  function editData() {
    setEdit(true);
    setformData(false);
    setsubmit(false);
  }
  function editData2() {
    setformData(true);
    setEdit(false);
  }
  function closeModal() {
    setsubmit(false);
  }

  function handleChange_File(e) {
    let sizeOfFile = e.target.files[0].size;
    console.log(sizeOfFile);
    const file = URL.createObjectURL(e.target.files[0]);
    let pdfFile = e.target.files[0].name;

    setvandor_details({
      ...vandor_details,
      insuranse_proof: e.target.files[0],
    });
    setFile(pdfFile);
    setMessage(null);

    if (sizeOfFile > 2e6) {
      setFile(null);
      let msg = "File size should be less than 2MB";
      setMessage(msg);
    }
  }

  function handleChange_img(e) {
    setImgbox(true);
    const selectImg = e.target.files;
    let img = e.target.files;
    setvandor_details({ ...vandor_details, gallery: [...img] });
    setImgFile(selectImg);
  }

  function handleChange_videoFile(e) {
    setVideoFile(e.target.files);
    setvandor_details({ ...vandor_details, intro_video: e.target.files[0] });
    // setVideoLabel(true);
  }

  const [anotherLocation, setAnotherlocaton] = useState(false);
  return (
    <>
      <div className="Your_profile">
        <div className="public-profile-btn text-center py-3">
          <button>VIEW YOUR PUBLIC PROFILE</button>
        </div>
        <div className="your_info py-3 ">
          <h2>Your Business Info</h2>

          {formdata && (
            <form onSubmit={submitData}>
              <div className="section-tab">
                <div className="row">
                  <div className="col-9">
                    <h5 className="ptfw-bold">Your Business Name: </h5>
                    <p>Please use your registered business name. </p>
                  </div>
                  <div className="col-3 profile_listing_btn ">
                    <button type="button">Cancel</button>
                  </div>
                </div>

                <input
                  name="business_name"
                  value={vandor_details.business_name}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      business_name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Business name"
                />
              </div>
              <div className="section-tab">
                <h5 className=" pb-1 fw-bold"> Other trading name: </h5>
                <p>
                  If you fill this in we’ll show this name instead of your
                  registered business name.
                </p>
                <input
                  name="display_name"
                  value={vandor_details.display_name}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      display_name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Trading name"
                />
              </div>

              <div className="section-tab">
                <h5 className=" pb-1 fw-bold"> Proof of insurance: </h5>
                <p>
                  We expect you to have professional indemnity and public
                  liability insurance <br /> because those are the two things
                  where little mistakes can have big consequences.
                </p>
                <div className="input-pathBox">
                  <input
                    type="file"
                    name="insuranse_proof"
                    id="file"
                    onChange={handleChange_File}
                    className="inputfile"
                    accept="application/pdf"
                  />
                  <label htmlFor="file" className="input-path-label">
                    <span>
                      <HiPlusSm size={40} />
                    </span>
                    <p className="pdfProof"> {file}</p>
                    <p className="pdfProof-Err">{message}</p>
                  </label>
                </div>
              </div>

              <div className="section-tab">
                <h5 className="pb-3 fw-bold"> Year registered: </h5>
                <div className="select-box-image">
                  <img src="static/selectarrow.svg" />
                  <select
                    name="registration_year"
                    onChange={(e) =>
                      setvandor_details({
                        ...vandor_details,
                        registration_year: e.target.value,
                      })
                    }
                    className="selectOption-box"
                  >
                    <option className="selectOption-value" value="2022">
                      2022
                    </option>
                    <option className="selectOption-value" value="2021">
                      2021
                    </option>
                    <option className="selectOption-value" value="2020">
                      2020
                    </option>
                    <option className="selectOption-value" value="2019">
                      2019
                    </option>
                    <option className="selectOption-value" value="2018">
                      2018
                    </option>
                    <option className="selectOption-value" value="2017">
                      2017
                    </option>
                    <option className="selectOption-value" value="2016">
                      2016
                    </option>
                    <option className="selectOption-value" value="2015">
                      2015
                    </option>
                  </select>
                </div>
              </div>

              <h2 className="profileInfo-box">Profile Info</h2>

              <div className="section-tab">
                <h5 className="pb-1 fw-bold">Your Category: </h5>
                <div className="select-box-image">
                  <img src="static/selectarrow.svg" />
                  <select
                    onChange={(e) =>
                      setvandor_details({
                        ...vandor_details,
                        primary_category: e.target.value,
                      })
                    }
                    className="selectOption-box"
                  >
                    {allcategory &&
                      allcategory.map((it) => {
                        return <option value={it.id}>{it.category}</option>;
                      })}
                  </select>
                </div>
              </div>
              <div className="section-tab">
                <h5 className="pb-1 fw-bold"> Your Website: </h5>
                <input
                  name="website"
                  value={vandor_details.website}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      website: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="https://"
                />
              </div>

              <div className="section-tab ">
                <h5 className="pb-1 fw-bold"> Social links</h5>

                <div className="social-input-links">
                  <div className="row  social-inks-row ">
                    <div className="col-9">
                      {" "}
                      <input
                        name="social_links"
                        value={vandor_details.social_links}
                        onChange={(e) =>
                          setvandor_details({
                            ...vandor_details,
                            social_links: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="https://instagram.com/withroobi"
                      />
                    </div>
                    <div className="col-3 m-auto">
                      <div className="social-links-btn ">
                        <button type="button">+ CONNECT</button>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="https://facebook.com/withroobi"
                />
                <input
                  type="text"
                  placeholder="https://twitter.com/withroobi"
                />
              </div>

              {/* <div className="section-tab ">
              <h5 className="pb-3 fw-bold"> Telephone Number </h5>
              <PhoneInput placeholder="" />
            </div> */}

              <div className="section-tab">
                <h5 className=" fw-bold">
                  {" "}
                  Tell us who will be your main point of contact:{" "}
                </h5>
                <p>
                  Who will be dealing with enquiries and managing your profile?
                </p>
                <input
                  name="contact_person_name"
                  value={vandor_details.contact_person_name}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      contact_person_name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Point of contact name"
                />
              </div>

              <div className="section-tab">
                <h5 className="pb-3 fw-bold">
                  {" "}
                  Tell us what languages you speak:{" "}
                </h5>
                <div className="lang-select">
                  <select
                    onChange={(e) =>
                      setvandor_details({
                        ...vandor_details,
                        conversation_languages: e.target.value,
                      })
                    }
                    name="conversation_languages"
                    id="lang"
                    className=".select"
                  >
                    <option value="English">English</option>
                    <option value="Eritrean.">Eritrean.</option>
                    <option value="English">Estonian.</option>
                    <option value="Ewe">Ewe.</option>
                  </select>
                </div>
              </div>
              <div className="section-tab">
                <h5 className="pb-1 fw-bold">
                  Tell us a bit about your business:
                </h5>
                <p>This short bio will appear on your profile.</p>
                <div className="input-control">
                  <textarea
                    name="about"
                    value={vandor_details.about}
                    onChange={(e) =>
                      setvandor_details({
                        ...vandor_details,
                        about: e.target.value,
                      })
                    }
                    className="msg"
                    id="w3review"
                    maxLength={500}
                    placeholder="Tell us a bit about you and what your clients love about working with you"
                  ></textarea>
                  <div className="rem-text px-3">
                    {vandor_details.about.length}/500
                  </div>
                </div>
              </div>

              <div className="listing-wedding-theme ">
                <h6>Pick the wedding themes your service would fit:</h6>

                <div className="theme-group-account ">
                  <div className=" row  ">
                    <div className=" col-xxl-8 col-lg-10 col-8 p-0">
                      <div className="row">
                        {theme &&
                          theme?.map((it) => {
                            console.log(it);
                            return (
                              <div
                                className=" col-md-6 col-sm-12 col-lg-3   theme-image"
                                key={it.id}
                              >
                                <img src={it.image} alt="place " />
                                <div className=" d-flex  theme-radio">
                                  <input
                                    type="radio"
                                    name="themes"
                                    onChange={(e) =>
                                      setvandor_details({
                                        ...vandor_details,
                                        themes_ids: e.target.value,
                                      })
                                    }
                                    id={it.id}
                                    value={it.id}
                                  />
                                  <label className="text-theme" htmlFor={it.id}>
                                    {it.theme}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <h5 className="pb-4">Show off your work:</h5>
                <div className=" col listing-gallery">
                  {imgbox ? (
                    <>
                      {Array.from(imgFile).map((item) => {
                        return (
                          <span>
                            {imgFile.length == 1 && (
                              <img
                                src={item ? URL.createObjectURL(item) : null}
                                className="lengthF_img"
                              />
                            )}
                            {imgFile.length <= 8 && imgFile.length > 1 && (
                              <img
                                src={item ? URL.createObjectURL(item) : null}
                                className="multipleImg-upload"
                              />
                            )}
                          </span>
                        );
                      })}
                      {imgFile.length >= 9 && (
                        <div className="err-upload-Img">
                          <p>You can select upto 8 images only</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="listing-gallery-box text-center">
                      <h5 className="">GALLERY</h5>
                    </div>
                  )}
                  <div className="listing-upload-btn  py-4">
                    <input
                      name="gallery"
                      type="file"
                      className="hide"
                      id="image_upload"
                      onChange={handleChange_img}
                      accept="image/*"
                      multiple="multiple"
                    />
                    <label htmlFor="image_upload">UPLOAD PHOTOS</label>
                  </div>
                </div>
                <div className="col  gallery-update-btn">
                  <NavLink to="/vandor-listing-page">
                    {" "}
                    <button type="button" className="gallery-update-btn-first">
                      + CONNECT YOUR CALENDAR
                    </button>
                  </NavLink>

                  <NavLink to="/vandor-listing-page">
                    {" "}
                    <button type="button" className="gallery-update-btn-second">
                      + CONNECT TO GOOGLE REVIEWS
                    </button>
                  </NavLink>
                </div>
              </div>

              <div>
                <div className="listing-section-range  ">
                  <Box sx={{ width: "70% " }}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      marks={marks}
                      min={0}
                      step={100}
                      max={20000}
                    />
                  </Box>
                </div>
              </div>

              <div className="section-tab">
                <h5 className=" fw-bold">Link to an intro video</h5>

                <input
                  type="text"
                  placeholder="https://youtube.com/withroobi"
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      intro_video: e.target.value,
                    })
                  }
                  name="intro_video"
                  id="video"
                  // className="hide"
                />
                {/* <label htmlFor="video" className="videoFile-Label">
                  {videoLabel ? (
                    <span>{videoFile}</span>
                  ) : (
                    "https://youtube.com/withroobi"
                  )}
                </label> */}
              </div>
              <div className="section-tab">
                <h5 className="pb-3 fw-bold"> Primary location: </h5>
                <div className="location-select">
                  {/* <select
                    onChange={(e) =>
                      setvandor_details({
                        ...vandor_details,
                        location: e.target.value,
                      })
                    }
                    name="location"
                    id="loc"
                  >
                    <option value="Surrey ">Surrey </option>
                    <option value=" Sussex"> Sussex </option>
                    <option value="Suffolk">Suffolk</option>
                    <option value=" Sudan"> Sudan</option>
                  </select> */}
                  <Autocomplete
                    apiKey={"AIzaSyCXy-DdHXvAotoLOS5xdQ0UmJ5X0ScBPnc"}
                    onChange={formchanger}
                    onPlaceSelected={(place) => {
                      console.log(place.formatted_address);
                      setselectlocation(place.formatted_address);
                    }}
                  />
                </div>
              </div>
              <div className="section-tab">
                <h5 className=" fw-bold">
                  Area serviced (around your primary location)
                </h5>

                <input
                  name="area_serviced"
                  value={vandor_details.area_serviced}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      area_serviced: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="1 mile, 5 miles, 10 miles etc"
                />
              </div>
              <div className="section-tab">
                <h5 className=" fw-bold">
                  Backup contact or backup business you will refer clients to:
                </h5>
                <p>
                  To make sure our users have the best service, we require you
                  to have a back up contact in your location in case of any
                  emergencies.
                </p>

                <input
                  name="contact_person_contact"
                  value={vandor_details.contact_person_contact}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      contact_person_contact: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Back up name"
                />
              </div>

              <div className="section-tab">
                <h5 className=" fw-bold"> Your back up contacts email:</h5>
                <p>
                  We’ll get in touch with your back up and confirm that they’re
                  happy to stand in when you can’t.
                </p>
                <input
                  name="contact_person_email"
                  value={vandor_details.contact_person_email}
                  onChange={(e) =>
                    setvandor_details({
                      ...vandor_details,
                      contact_person_email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="Back up email"
                />
              </div>

              <div className=" profile-location-btn py-3">
                <button
                  type="button"
                  onClick={() => setAnotherlocaton(!anotherLocation)}
                >
                  ADD ANOTHER LOCATION
                </button>
                {anotherLocation && (
                  <>
                    <div className="section-tab">
                      <h5 className="pb-3 fw-bold"> Primary location: </h5>
                      <div className="location-select">
                        <Autocomplete
                          apiKey={"AIzaSyCXy-DdHXvAotoLOS5xdQ0UmJ5X0ScBPnc"}
                          onPlaceSelected={(place) => {
                            console.log(place.formatted_address);

                            setanotherlocation(place.formatted_address);
                          }}
                        />
                      </div>
                    </div>
                    <div className="section-tab">
                      <h5 className=" fw-bold">
                        Area serviced (around your primary location)
                      </h5>

                      <input
                        name="area_serviced"
                        value={addanothelocation.area_serviced}
                        onChange={(e) =>
                          setaddanothelocation({
                            ...addanothelocation,
                            area_serviced: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="1 mile, 5 miles, 10 miles etc"
                      />
                    </div>
                    <div className="section-tab">
                      <h5 className=" fw-bold">
                        Backup contact or backup business you will refer clients
                        to:
                      </h5>
                      <p>
                        To make sure our users have the best service, we require
                        you to have a back up contact in your location in case
                        of any emergencies.
                      </p>

                      <input
                        name="contact_person_contact"
                        value={addanothelocation.backupname}
                        onChange={(e) =>
                          setaddanothelocation({
                            ...addanothelocation,
                            backupname: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Back up name"
                      />
                    </div>

                    <div className="section-tab">
                      <h5 className=" fw-bold">
                        {" "}
                        Your back up contacts email:
                      </h5>
                      <p>
                        We’ll get in touch with your back up and confirm that
                        they’re happy to stand in when you can’t.
                      </p>
                      <input
                        name="contact_person_email"
                        value={addanothelocation.contact_email}
                        onChange={(e) =>
                          setaddanothelocation({
                            ...addanothelocation,
                            contact_email: e.target.value,
                          })
                        }
                        type="email"
                        placeholder="Back up email"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className=" profile-varification-btn py-3">
                <button type="submit">SAVE & SUBMIT FOR VERIFICATION</button>
              </div>
            </form>
          )}

          {edit && (
            <form>
              <div className="Profile-Data py-3">
                <div className="row">
                  <div div className="col-8">
                    <h5>Your business name</h5>
                    <p>
                      Flanco Pizza <AiFillCheckCircle color="#CA8BBB" />
                    </p>
                  </div>
                  <div className="col-4 profile_listing_btn ">
                    <button type="button" onClick={editData2}>
                      Edit
                    </button>
                  </div>
                </div>
                <div className="section-tab">
                  <h5>Proof of insurance: </h5>
                  <p> Insurancedoc.pdf</p>
                </div>
                <div className="section-tab">
                  <h5>Year registered: </h5>
                  <p> 2020</p>
                </div>
                <h2>Profile Info</h2>
                <div className="section-tab">
                  <h5>Your Category:</h5>
                  <p> Caterer</p>
                </div>
                <div className="section-tab">
                  <h5>Your Website:</h5>
                  <p> flancopizza.com</p>
                </div>
                <div className="section-tab">
                  <h5>Social Links </h5>
                  <p>Instagram.com/withroobi</p>
                  <p>facebook.com/withroobi</p>
                  <p> twitter.com/withroob</p>
                </div>
                {/* <div className="section-tab">
                  <h5>Telephone Number:</h5>
                  <p> +44 01345 763982</p>
                </div> */}
                <div className="section-tab">
                  <h5>Tell us who will be your main point of contact:</h5>
                  <p> Katie & Elliot</p>
                </div>
                <div className="section-tab">
                  <h5> Tell us what languages you speak:</h5>
                  <p> English, Spanish.</p>
                </div>
                <div className="section-tab ">
                  <h5>Tell us a bit about your business:</h5>
                  <p>
                    {" "}
                    Flanco Pizza brings you the best Napolian Pizza fueled right
                    from our beloved
                    <br /> and hand-painted converted horsebox! We’re available
                    for events, private hire <br />
                    and weddings with the occasional street pitch thrown into
                    the mix.
                  </p>
                  <img src="static/flanco.png" alt="pizzz" />
                </div>
                <button type="button">UPLOAD A NEW PROFILE PICTURE</button>
                <div className="section-tab">
                  <h5> The wedding themes your service would fit:</h5>
                  <p>Boho, Festival, Modern, Whimsical, Rustic</p>
                </div>
                <div className="section-tab">
                  <h5> Gallery - Add up to XX Pictures:</h5>
                  <p className="output-image-box">
                    <img src="static/empvan.png" alt="" />
                    <img src="static/empvan2.png" alt="" />
                    <img src="static/empvan3.png" alt="" />
                  </p>
                </div>
                <div className="row pt-5">
                  <div div className="col-6">
                    <h5>
                      Calendar connected <AiFillCheckCircle color="#CA8BBB" />
                    </h5>{" "}
                    <br />
                    <h5>
                      Google Reviews connected
                      <AiFillCheckCircle color="#CA8BBB" />
                    </h5>
                  </div>
                  <div className="col-6  profile_disconnect_btn">
                    <button type="button">Disconnect</button>
                    <br /> <br />
                    <button type="button">Disconnect</button>
                  </div>
                </div>
                <div className="section-tab">
                  <h5>Average price Range for your services</h5>
                  <p> £1000 - £10,000</p>
                </div>
                <div className="section-tab">
                  <h5>Linked Intro Video </h5>
                  <img src="static/cklg.png" alt="" className="py-3" />
                  <img
                    src="static/videoClick.png"
                    alt=""
                    className="videoPlayButton"
                  />
                </div>
                <hr />
                <div className="row pt-5">
                  <div div className="col-8">
                    <h5>
                      Primary Location: <AiFillCheckCircle color="#CA8BBB" />
                    </h5>
                    <p>Sussex, United Kingdom</p>
                  </div>
                  <div className="col-4  profile_listing_btn">
                    <button type="button" onClick={editData2}>
                      Edit
                    </button>
                  </div>
                </div>
                <div className="section-tab">
                  <h5>
                    {" "}
                    Backup contact or backup business you will refer clients to:
                  </h5>
                  <p>Arise Pizza</p>
                </div>{" "}
                <div className="section-tab">
                  <h5> Your back up contacts email:</h5>
                  <p>arisepizza@gmail.com</p>
                </div>
              </div>
            </form>
          )}
        </div>
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
              Thanks for creating your profile!
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
              <div className="addListingButton py-4">
                <button
                  onClick={editData}
                  style={{ backgroundColor: "#CA8BBB" }}
                >
                  CONTINUE
                </button>
              </div>
              <div className="addListingButton2 pb-4">
                <button
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#525045",
                    border: "2px solid #525045",
                    padding: "8px 70px",
                  }}
                >
                  ADD A LISTING
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default YourProfile;
