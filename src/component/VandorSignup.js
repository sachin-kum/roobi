import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { user_sinupaction } from "../redux/Action/Useraction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadious: "40px",
  },
};

function VandorSignup(props) {
  const host = "http://192.168.0.4:2917";
  //login
  // const validationobj_login = yup.object({
  //   email: yup
  //     .string()
  //     .email("Enter a valid Email")
  //     .required("Email is required"),
  //   password: yup
  //     .string()
  //     .min(8, "Should be 8 chars minimum")
  //     .max(16, "Should be 16 chars mximum")
  //     .required("Password is required"),
  // });
  // const initialValues_login = {
  //   email: "",
  //   password: "",
  // };
  // const {
  //   values: val_login,
  //   handleChange: handlechange_login,
  //   handleSubmit: handlesubmit_login,
  //   errors: err_login,
  //   touched: touched_login,
  // } = useFormik({
  //   initialValues: initialValues_login,
  //   validationSchema: validationobj_login,
  //   onSubmit: (event) => {
  //     // event.preventDefault()
  //     console.log(event);
  //     // axios(`http://192.168.0.4:2917/login`, {
  //     //   method: "POST",
  //     //   mode: "no-cors",
  //     //   data: val_login,

  //     //   headers: {
  //     //     "Access-Control-Allow-Origin": `http://192.168.0.4:2917/`,
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   withCredentials: true,
  //     //   credentials: "same-origin",
  //     // });

  //     axios.post("http://192.168.0.4:2917/login", {
  //       ...val_login,
  //     });
  //   },
  // });
const dispatch=useDispatch()
  function googleLogin(e) {
    e.preventDefault();
    axios
      .get(`${host}/google`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  //password signup validation
  const passwordvalid = (e) => {
    if (!signUpDetails.password) {
      e.preventDefault();
      setSignUpDetailsError("Enter password");
    } else {
      if (signUpDetails?.password.length <= 7) {
        e.preventDefault();
        setSignUpDetailsError("Should be 8 chars minimum ");
      } else if (signUpDetails?.password.length >= 16) {
        e.preventDefault();
        setSignUpDetailsError("Password must have maximum 16 character");
      } else {
        e.preventDefault();
        setModalopen("regester");
      }
    }
  };

  // singup validation

  const emailValidation = (e) => {
    if (!signUpDetails?.email) {
      e.preventDefault();
      setSignUpDetailsError("Email is required");
    } else if (
      !signUpDetails.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
    ) {
      e.preventDefault();
      setSignUpDetailsError("Enter  a valid email");
    } else {
      e.preventDefault();
      setModalopen("password");
      setSignUpDetailsError("");
      // setModalopen(props.IsModalOpened == false);
    }
  };

  const validationobj = yup.object({
    first_name: yup
      .string()
      .min(3, "Should be 3 chars minimum")
      .max(16, "Should be 16 chars maximum")
      .required("Enter your first name"),
    last_name: yup
      .string()
      .min(3, "Should be 3 chars minimum")
      .max(16, "Should be 16 chars maximum")
      .required("Enter your  last name"),
    pronoun: yup
      .string()
      .min(2, "Should be 2 chars minimum")
      .max(12, "Should be 12 chars maximum")
      .required("Enter your pronoun"),
    date_of_birth: yup.date().required("Enter your date of birth"),
    category_id: yup
      .string()
      .min(1, "Should be 1 chars minimum")
      .max(15, "Should be 15 chars maximum")
      .required("Select your category"),
  });
  const initialValues = {
    first_name: "",
    last_name: "",
    pronoun: "",
    date_of_birth: "",
    category_id: "",
  };
  const { values, handleChange, handleSubmit, touched, handleBlurs, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationobj,
      onSubmit: (event) => {
        console.log(event);
        let info={values,signUpDetails}
        console.log(info);
    //  dispatch(user_sinupaction())
      },
    });
  const { first_name, last_name, date_of_birth, category_id, pronoun } = values;

  const [signup, setSignup] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [completeSignup, setcompleteSignup] = useState(false);
  const [profile, setProfile] = useState(false);

  const [modalOpen, setModalopen] = useState("");

  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });
  // const [modalIsOpen, setIsOpen] = useState("");

  const [signUpDetailsError, setSignUpDetailsError] = useState("");

  function signupVandor() {
    setModalopen("login_modal");
  }

  // function showPassword() {
  //   setSignup(false);
  //   setPassword(true);
  // }
  // function finishSignup() {
  //   setPassword(false);
  //   setcompleteSignup(true);
  // }
  // function createProfile() {
  //   setcompleteSignup(false);
  //   setProfile(true);
  // }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  function closeModal() {
    setModalopen(" ");
    setSignUpDetails({ email: "", password: "" });
    setSignUpDetailsError("");
    // val_login.email = "";
    // val_login.password = "";
    values.first_name = "";
    values.last_name = "";
    values.pronoun = "";
    values.date_of_birth = "";
    values.category_id = "";
    // err_login.email = "";
    // err_login.password = "";
    errors.first_name = "";
    errors.last_name = "";
    errors.pronoun = "";
    errors.date_of_birth = "";
    errors.first_name = "";
    errors.category_id = "";
  }
  function afterOpenModal() {
    //
  }
  console.log("====================================");
  console.log(props.IsModalOpened === "email_modal" ? true : false);
  console.log("====================================");
  return (
    <>
      <Modal
        isOpen={
          props.IsModalOpened === "email_modal" && !modalOpen ? true : false
        }
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        centered
        ariaHideApp={false}
      >
        <div className="login-roobi  ">
          <div className=" py-3 login-title">
            <p>Sign Up</p>
            <button
              onClick={props.closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />
          <form>
            <div className="roobi-form">
              <div className="row text-center signup-mail-heading py-4">
                <h4 style={{ color: "#CA8BBB" }}>Welcome to with Roobi</h4>
                <p>Sign up to start building your vendor profile</p>
              </div>
              <div className="row signup-mail">
                <input
                  type="email"
                  name="email"
                  value={signUpDetails?.email}
                  placeholder="Pop your email address here"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="error_sign_modal">{signUpDetailsError}</div>

              <div className="signup-group py-4">
                <div className="text-center pt-2 ">
                  <button
                    style={{
                      backgroundColor: "#CA8BBB",
                      color: "white",
                      border: "0",
                    }}
                    onClick={emailValidation}
                    type="submit"
                  >
                    continue
                  </button>
                </div>

                <p className="text-center py-3">Or</p>

                <div className="text-center pt-2">
                  <button>continue with facebook</button>
                </div>
                <div className="text-center pt-2">
                  {/* */}
                  <GoogleLogin
                    clientId="889083018428-n0vk7cnh54u5ftft61icv01pf08mgnnh.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button type="submit" onClick={renderProps.onClick}>
                        continue with google
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={"http://localhost:3000/LearnMore"}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    redirectUri={"http://localhost:3000/LearnMore"}
                  />

                  {/* <button type="submit" onClick={googleLogin}>
                        continue with google
                      </button> */}
                </div>
                <div className="text-center pt-2">
                  <button>continue with apple</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={modalOpen == "password"}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        centered
      >
        <div className="login-roobi">
          <div className=" py-3 login-title">
            <p className="ms-auto">Sign Up</p>
            <button
              onClick={closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />
          <form>
            <div className="roobi-form">
              <div className=" signup-password pt-5">
                <input
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  value={signUpDetails?.password}
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      password: e.target.value,
                    })
                  }
                />

                <div className="show-password">
                  <button
                    type="button"
                    onClick={togglePassword}
                    style={{ color: "#CA8BBB" }}
                  >
                    Show
                  </button>
                </div>
              </div>
              <div className="error_sign_modal">{signUpDetailsError}</div>
              <div className=" p_include text-center py-3 ">
                <p>Your password must include _______________</p>
              </div>
              <div className="text-center p_button py-4">
                <button
                  type="submit"
                  onClick={passwordvalid}
                  style={{ backgroundColor: "#CA8BBB" }}
                >
                  LET’S GO!
                </button>
                {/*   */}
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpen == "regester"}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi " style={{ width: "750px" }}>
          <div className=" py-3 login-title">
            <p>Finish signing up</p>
            <button
              onClick={closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="roobi-form">
              <div className="signup-section py-4 px-5">
                <div className=" gx-0 gy-2 row finish-section ">
                  <p>About you</p>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={handleChange}
                    value={first_name}
                  />
                  <div className="error_finish_modal">
                    {errors.first_name && touched.first_name
                      ? errors.first_name
                      : null}
                  </div>

                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={handleChange}
                    value={last_name}
                  />
                  <div className="error_finish_modal">
                    {errors.last_name && touched.last_name
                      ? errors.last_name
                      : null}
                  </div>

                  <input
                    type="text"
                    placeholder="Pronouns"
                    name="pronoun"
                    onChange={handleChange}
                    value={pronoun}
                  />
                  <div className="error_finish_modal">
                    {errors.pronoun && touched.pronoun ? errors.pronoun : null}
                  </div>

                  <p className="para" style={{ color: "#CA8BBB" }}>
                    We ask for your pronouns so we recognise you as you
                  </p>
                  <div className=" row birth_signup gx-0">
                    <input
                      type="text"
                      placeholder="Your date of birth"
                      name="date_of_birth"
                      onChange={handleChange}
                      value={date_of_birth}
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                    />
                    <div className="error_finish_modal">
                      {errors.date_of_birth && touched.date_of_birth
                        ? errors.date_of_birth
                        : null}
                    </div>
                    <input
                      type="text"
                      placeholder="Primary category e.g. Catering, Venue"
                      name="category_id"
                      onChange={handleChange}
                      value={category_id}
                    />
                    <div className="error_finish_modal">
                      {errors.category_id && touched.category_id
                        ? errors.category_id
                        : null}
                    </div>
                    <h6>
                      You can add more vendor categories later if you offer more
                      than one service.
                    </h6>
                  </div>
                  <p className="text-center py-2">
                    By going ahead you agree to the terms of the site
                  </p>
                  <div className="agree_button ">
                    <button
                      type="submit"
                      style={{ backgroundColor: "#CA8BBB" }}
                    >
                      AGREE & CONTINUE
                    </button>
                  </div>
                  <div className="check-condioton  py-2">
                    <input type="checkbox" />
                    <label>*Marketing & opt out copy*</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={profile}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        centered
      >
        <div className="login-roobi" style={{ width: "600px" }}>
          <div className=" py-3 login-title">
            <p>Create your profile</p>
            <button
              onClick={closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />

          <div className="roobi-form">
            <div className=" row create-profile ">
              <img src="static/navlogo.png" alt="welcome" />
              <h4 style={{ color: "#CA8BBB" }}>Welcome to with Roobi</h4>
              <p>Let’s get you set up as a with Roobi vendor!</p>
              <div className="text-center py-4 addListingButton">
                <button
                  onClick={closeModal}
                  style={{ backgroundColor: "#CA8BBB" }}
                >
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default VandorSignup;
