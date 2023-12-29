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
import { useContext } from "react";
import { GlobalContext } from "../App";
import { season } from "../data";

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



function VandorSignup({ button, display, icon1, icon2 }) {
  const {state , dispatch } = useContext(GlobalContext)

  const navigate = useNavigate()
  //login
  const validationobj_login = yup.object({
    email: yup.string().email().required("enter email"),
    password: yup.string().required("password email"),
  });
  const initialValues_login = {
    email: "",
    password: "",
  };
  const {
    values: val_login,
    handleChange: handlechange_login,
    handleSubmit: handlesubmit_login,
    errors: err_login,
  } = useFormik({
    initialValues: initialValues_login,
    validationSchema: validationobj_login,
    onSubmit: (event) => {
      // event.preventDefault()
      console.log(event);
      axios.post("http://192.168.0.4:8080/login", {
        ...val_login,
      });
    },
  });
  function googleLogin(e) {
    e.preventDefault();
    axios
      .get("http://192.168.0.4:8080/google")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  // singup validation

  const validationobj = yup.object({
    first_name: yup.string().min(3).max(30).required("enter your first name"),
    last_name: yup.string().min(3).max(30).required("enter your  last name"),
    pronoun: yup.string().min(2).max(30).required("enter your pronoun"),
    date_of_birth: yup.date().required("enter your dob"),
    category_id: yup.string().min(1).max(30).required("select your category"),
  });
  const initialValues = {
    first_name: "",
    last_name: "",
    pronoun: "",
    date_of_birth: "",
    category_id: "",
  };
  const { values, handleChange, handleSubmit, touched, handleBlur, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationobj,
      onSubmit: (event) => {
        console.log(event);
        axios.post("http://192.168.0.4:8080/registration", {
          ...signUpDetails,
          ...values,
        });
      },
    });
  const { first_name, last_name, date_of_birth, category_id, pronoun } = values;

const [Modalopen, setModalopen] = useState({
  modalIsOpen:false,
  signupIsOpen:false,
  signup:false,
  password:false,
  passwordShown:false,
  completeSignup:false,
  profile:false
})



  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [signupIsOpen, setsignupIsOpen] = useState(false);
  // const [signup, setSignup] = useState(false);
  // const [password, setPassword] = useState(false);
  // const [passwordShown, setPasswordShown] = useState(false);
  // const [completeSignup, setcompleteSignup] = useState(false);
  // const [profile, setProfile] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });
  const [signUpDetailsError, setSignUpDetailsError] = useState({
    email: "",
    password: "",
  });
   

  function signupVandor() {
    setIsOpen(true);
  }

  // function signupModal() {
  //   setsignupIsOpen(true);
  //   setIsOpen(false);
  // }
  // function signupForm() {
  //   setsignupIsOpen(false);
  //   setSignup(true);
  //   setIsOpen(false);
  // }
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
    setIsOpen(false);
    setsignupIsOpen(false);
    setSignup(false);
    setPassword(false);
    setcompleteSignup(false);
    setProfile(false);
  }
  function afterOpenModal() {
    //
  }

  return (
    <>
      <button onClick={signupVandor}>
        {button}
        <span>
          {icon1}
          {icon2}
        </span>
      </button>

      <Modal
        isOpen={()=>setModalopen()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi ">
          <div className=" py-3 login-title ">
            <h4 className="ms-auto">Login</h4>
            <button
              onClick={closeModal}
              className="border-0  close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>

          <hr />
          <form onSubmit={handlesubmit_login}>
            <div className="roobi-form">
              <div className="row text-center login-heading py-4">
                <h4>Log in to with Roobi</h4>
              </div>

              <div className="row input-roobi justify-content-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handlechange_login}
                  value={val_login.email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handlechange_login}
                  value={val_login.password}
                />
              </div>
              <div className="login-submit text-center py-3">
                <button type="submit">LOGIN</button>
              </div>

              <div className="login-content text-center">
                <p>Don’t have an account yet? No problem, just sign up below</p>
              </div>
              <div className="signup_button text-center py-3">
                <button type="button" onClick={()=>setModalopen({signupIsOpen:true})}>
                  SIGN UP
                </button>
                <p className="py-2" style={{ textDecoration: "underline" }}>
                  Forgot Your Password
                </p>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={signupIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi ">
          <div className=" py-3 login-title">
            <h4 className="ms-auto">Sign Up</h4>
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
              <div className="row text-center signup-heading py-4">
                <h4>Welcome to with Roobi</h4>
                <p>Tell us about you...</p>
              </div>
              <div className=" roobi-box py-5">
                <button
                  type="button"
                  className="roobi_button_1"
                  onClick={signupForm}
                >
                  i’m planning a wedding
                </button>
                <button
                  type="button"
                  className="roobi_button_2"
                  onClick={signupForm}
                >
                  i’m a vendor or supplier
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={signup}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        centered
      >
        <div className="login-roobi  ">
          <div className=" py-3 login-title">
            <h4 className="ms-auto">Sign Up</h4>
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
              {signUpDetailsError?.email && (
                <span>{signUpDetailsError?.email}</span>
              )}
              <div className="signup-group py-4">
                <div className="text-center pt-2 ">
                  <button
                    style={{
                      backgroundColor: "#CA8BBB",
                      color: "white",
                      border: "0",
                    }}
                    onClick={(e) => {
                      if (!signUpDetails?.email) {
                        e.preventDefault();
                        // setSignUpDetailsError({...signUpDetailsError ,email})
                      } else {
                        e.preventDefault();
                        showPassword();
                      }
                    }}
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
                    cookiePolicy={'single_host_origin'}
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
        isOpen={password}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        centered
      >
        <div className="login-roobi  ">
          <div className=" py-3 login-title">
            <h4 className="ms-auto">Sign Up</h4>
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
              <div className=" signup-password">
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
                    Show{" "}
                  </button>
                </div>
              </div>
              <div className=" p_include text-center py-3 ">
                <p>Your password must include _______________</p>
              </div>
              <div className="text-center p_button py-4">
                <button
                  type="submit"
                  onClick={(e) => {
                    if (!signUpDetails.password) {
                      e.preventDefault();
                    } else {
                      e.preventDefault();
                      finishSignup();
                    }
                  }}
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
        isOpen={completeSignup}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi ">
          <div className=" py-3 login-title">
            <h4 className="ms-auto">Finish signing up</h4>
            <button
              onClick={closeModal}
              className="border-0 close_button ms-auto"
            >
              <CgCloseO size={30} style={{ marginRight: "20px" }} />
            </button>
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="roobi-form" style={{ width: "700px" }}>
              <div className="signup-section py-4 px-5">
                <div
                  className="  row finish-section "
                  style={{ rowGap: "15px" }}
                >
                  <p>About you</p>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={handleChange}
                    value={first_name}
                  />

                  <br />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={handleChange}
                    value={last_name}
                  />

                  <br />
                  <input
                    type="text"
                    placeholder="Pronouns"
                    name="pronoun"
                    onChange={handleChange}
                    value={pronoun}
                  />
                </div>
                <p
                  className="para"
                  style={{ color: "#CA8BBB", paddingTop: "10px" }}
                >
                  We ask for your pronouns so we recognise you as you
                </p>
                <div className=" row birth_signup ">
                  <input
                    type="datetime-local(ddTHH:MM-mm-yyyy)"
                    placeholder="Your date of birth"
                    name="date_of_birth"
                    onChange={handleChange}
                    value={date_of_birth}
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  />
                  <input
                    type="text"
                    placeholder="Primary category e.g. Catering, Venue"
                    name="category_id"
                    onChange={handleChange}
                    value={category_id}
                  />
                  <h6>
                    You can add more vendor categories later if you offer more
                    than one service.{" "}
                  </h6>
                </div>
                <p className="text-center py-3">
                  By going ahead you agree to the terms of the site
                </p>
                <div className="agree_button">
                  <button type="submit" style={{ backgroundColor: "#CA8BBB" }}>
                    AGREE & CONTINUE
                  </button>
                </div>
                <div className="check-condioton py-3">
                  <input type="checkbox" />{" "}
                  <label>*Marketing & opt out copy*</label>
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
            <h4 className="ms-auto">Create your profile</h4>
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
