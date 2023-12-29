import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_loginaction, user_sinupaction } from "../redux/Action/Useraction";
import Usersinupmodle from "./Usersinupmodle";
import Logout from "./Logout";
import Loader from "./Loader";
import { baseApi } from "../baseApi";
import { useCookies } from "react-cookie";

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

function VandorSignup({ button, display, icon1, icon2 }) {
  //login
  const [cookies, setcookies] = useCookies(["token"]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user, isAuthenticated } = useSelector(
    (state) => state.user
  );
  let token = user && user?.token;

  console.log(user.token);
  const [emailverif, setemailverif] = useState({
    email: "",
  });

  const validationobj_login = yup.object({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Should be 8 chars minimum")
      .max(16, "Should be 16 chars mximum")
      .required("Password is required"),
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
    touched: touched_login,
  } = useFormik({
    initialValues: initialValues_login,
    validationSchema: validationobj_login,
    onSubmit: (event) => {
      // event.preventDefault()
      dispatch(user_loginaction(val_login));

      // navigate("/vandorViewAccount")
      console.log(event);
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated);
      navigate("/vandorViewAccount");
      setcookies("token", token, {
        path: "/",
      });
      setModalopen("");
    }
  }, [isAuthenticated]);

  function googleLogin(e) {
    e.preventDefault();
    axios
      .get("http://localhost:8080/google")
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

  const [strongPassword, setStrongPassword] = useState(false);

  //password signup validation

  let check = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");

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
      } else if (!signUpDetails?.password.match(check)) {
        // setSignUpDetailsError("Your password must include [a-z][A-Z][0-9]");
        setStrongPassword(true);
        e.preventDefault();
      } else {
        e.preventDefault();
        setStrongPassword(true);
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
      setSignUpDetailsError("Enter a valid email");
    } else {
      e.preventDefault();
      console.log(signUpDetails.email);

      axios
        .post(`${baseApi}/emailcheck`, emailverif)
        .then((res) => {
          console.log(res);
          setModalopen("password");
          setSignUpDetailsError("");
        })
        .catch((err) => {
          if (err) {
            console.log(err.response.data.message);
            alert(err.response.data.message);
          }
        });
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
    // category_id: yup
    //   .string()
    //   .min(1, "Should be 1 chars minimum")
    //   .max(15, "Should be 15 chars maximum")
    //   .required("Select your category"),
  });
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    pronoun: "",
    date_of_birth: "",
    // category_id: "",
  };
  const { category } = useSelector((state) => state.category);
  console.log(category);
  let categorylist = category && category?.result;
  const { values, handleChange, handleSubmit, touched, handleBlur, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationobj,
      onSubmit: (event) => {
        console.log(event);
        const formdata = new FormData();
        let info = { ...signUpDetails, ...values };
        formdata.set("email", signUpDetails.email);
        formdata.set("password", signUpDetails.password);
        formdata.set("first_name", values.first_name);
        formdata.set("last_name", values.last_name);
        formdata.set("date_of_birth", values.date_of_birth);
        // formdata.set("category_id", selectedOption);
        formdata.set("category_id", selectedOption);
        formdata.set("pronoun", values.pronoun);
        formdata.set("avatar", avtar);
        console.log(values);
        console.log(selectedOption);
        console.log(signUpDetails);
        dispatch(user_sinupaction(formdata));
      },
    });
  const { first_name, last_name, date_of_birth, category_id, pronoun } = values;

  const [avtar, setAvtar] = useState("");

  //category--map
  const [categories, setCategories] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    axios.get("http://192.168.0.3:2917/categories").then((res) => {
      console.log(res);
      setCategories(res.data.msg);
    });
  }, []);

  const categoryChange = (event) => {
    // console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  const [signup, setSignup] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [profile, setProfile] = useState(false);
  const [modalOpen, setModalopen] = useState("");

  const avtarUpload = (e) => {
    setAvtar(e.target.files[0]);
  };
  const [signUpDetailsError, setSignUpDetailsError] = useState("");

  function signupVandor() {
    setModalopen("login_modal");
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  function closeModal() {
    setModalopen("");
    setSignUpDetails({ email: "", password: "" });
    setSignUpDetailsError("");
    val_login.email = "";
    val_login.password = "";
    values.first_name = "";
    values.last_name = "";
    values.pronoun = "";
    values.date_of_birth = "";
    values.category_id = "";
    err_login.email = "";
    err_login.password = "";
    errors.first_name = "";
    errors.last_name = "";
    errors.pronoun = "";
    errors.date_of_birth = "";
    errors.first_name = "";
    // errors.category_id = "";
  }
  function afterOpenModal() {
    //
  }

  return (
    <>
      {isAuthenticated === true ? (
        <Logout />
      ) : (
        <button onClick={signupVandor}>
          {button}
          <span>
            {icon1}
            {icon2}
          </span>
        </button>
      )}
      {/* {loading ? (
        <Loader />
      )  (
        navigate("/vandorViewAccount")
      ) : (
        ""
      )} */}

      <Modal
        isOpen={modalOpen == "login_modal"}
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
                <div className="error_login_modal">
                  {err_login.email && touched_login.email
                    ? err_login.email
                    : null}{" "}
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handlechange_login}
                  value={val_login.password}
                />
                <div className="error_login_modal">
                  {err_login.password && touched_login.password
                    ? err_login.password
                    : null}
                </div>
              </div>

              <div className="login-submit text-center py-3">
                <button type="submit">LOGIN</button>
              </div>

              <div className="login-content text-center">
                <p>Don’t have an account yet? No problem, just sign up below</p>
              </div>
              <div className="signup_button text-center py-3">
                <button
                  type="button"
                  onClick={() => setModalopen("signup_modal")}
                >
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

      {/* --select-planing or vandor-- */}
      <Modal
        isOpen={modalOpen == "signup_modal"}
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
              <div className=" roobi-box pb-5">
                {/* <button
                  type="button"
                  className="roobi_button_1"
                  onClick={() => setModalopen("select_modal")}
                >
                  i’m planning a wedding
                </button> */}

                <Usersinupmodle />
                <button
                  type="button"
                  className="roobi_button_2"
                  onClick={() => setModalopen("select_modal")}
                >
                  I'M A VENDOR OR SUPPLIER
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalOpen == "select_modal"}
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
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    });
                    setemailverif({ ...emailverif, email: e.target.value });
                  }}
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
                    CONTINUE
                  </button>
                </div>

                <p className="text-center py-3">Or</p>

                <div className="text-center pt-2">
                  <button>CONTINUE WITH FACEBOOK</button>
                </div>
                <div className="text-center pt-2">
                  {/* */}
                  <GoogleLogin
                    clientId="889083018428-n0vk7cnh54u5ftft61icv01pf08mgnnh.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button type="submit" onClick={renderProps.onClick}>
                        CONTINUE WITH FACEBOOK
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
                  <button>CONTINUE WITH FACEBOOK</button>
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
                    {passwordShown ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="error_sign_modal">{signUpDetailsError}</div>
              <div className=" p_include text-center py-3 ">
                {strongPassword && (
                  <p> Your password must include [a-z][A-Z][0-9])[!@#$%^&*]</p>
                )}
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

                    <select
                      onChange={categoryChange}
                      value={selectedOption}
                      className="vendor_cat_select"
                    >
                      {category?.result &&
                        categorylist.map((option) => {
                          console.log("====================================");
                          console.log(option);
                          console.log("====================================");
                          return (
                            <option value={option.id}>{option.category}</option>
                          );
                        })}
                    </select>
                    {/* <div className="error_finish_modal">
                      {errors.category_id && touched.category_id
                        ? errors.category_id
                        : null}
                    </div> */}
                    <div className="upload_profile">
                      <p className="UploadProfile_title">
                        Upload Profile Picture
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={avtarUpload}
                      />
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

      {/* //user-signup */}
    </>
  );
}

export default VandorSignup;
