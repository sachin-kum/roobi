import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";

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

function SignupExplore() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [signupIsOpen, setsignupIsOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [completeSignup, setcompleteSignup] = useState(false);
  const [profile, setProfile] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function signupModal() {
    setsignupIsOpen(true);
    setIsOpen(false);
  }
  function signupForm() {
    setsignupIsOpen(false);
    setSignup(true);
    setIsOpen(false);
  }
  function showPassword() {
    setSignup(false);
    setPassword(true);
  }

  function finishSignup() {
    setPassword(false);
    setcompleteSignup(true);
  }
  function createProfile() {
    setcompleteSignup(false);
    setProfile(true);
  }
  function continueClick() {
    setProfile(false);
  }
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setsignupIsOpen(false);
    setSignup(false);
    setPassword(false);
    setcompleteSignup(false);
    setProfile(false);
  }
  return (
    <>
      <div className=" text-center pt-4">
        <button type="button" onClick={openModal}>
          SIGN-UP
        </button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="login-roobi ">
            <div className=" py-2 login-title ">
              <h4 className="ms-auto">Login</h4>
              <button
                onClick={closeModal}
                className="border-0  close_button ms-auto"
              >
                <CgCloseO size={30} style={{ marginRight: "20px" }} />
              </button>
            </div>

            <hr />
            <form>
              <div className="roobi-form">
                <div className="row text-center login-heading py-4">
                  <h4>Log in to with Roobi</h4>
                </div>

                <div className="row input-roobi justify-content-center">
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="login-submit text-center py-3">
                  <button type="button">LOGIN</button>
                </div>

                <div className="login-content text-center">
                  <p>
                    Don’t have an account yet? No problem, just sign up below
                  </p>
                </div>
                <div className="signup_button text-center py-3">
                  <button type="button" onClick={signupModal}>
                    SIGN UP
                  </button>
                  <p className="py-2">Forgot Your Password</p>
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
            <div className=" py-2 login-title">
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
            <div className=" py-2 login-title">
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
                  <h4>Welcome to with Roobi</h4>
                  <p>Sign up to start building your ideal wedding</p>
                </div>
                <div className="row signup-mail">
                  <input
                    type="email"
                    placeholder="Pop your email address here"
                  />
                </div>
                <div className="signup-group py-4">
                  <div className="text-center pt-2 ">
                    <button
                      style={{
                        backgroundColor: "#027656",
                        color: "white",
                        border: "0",
                      }}
                      onClick={showPassword}
                      type="button"
                    >
                      continue
                    </button>
                  </div>
                  <p className="text-center py-3">Or</p>

                  <div className="text-center pt-2">
                    <button>continue with facebook</button>
                  </div>
                  <div className="text-center pt-2">
                    <button>continue with google</button>{" "}
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
            <div className=" py-2 login-title">
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
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div className="show-password">
                    <button type="button" onClick={togglePassword}>
                      Show{" "}
                    </button>
                  </div>
                </div>
                <div className=" p_include text-center py-3 ">
                  <p>Your password must include _______________</p>
                </div>
                <div className="text-center p_button py-4">
                  <button type="button" onClick={finishSignup}>
                    LET’S GO!
                  </button>
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
            <form>
              <div className="roobi-form" style={{ width: "800px" }}>
                <div className="signup-section py-4 px-5">
                  <div className="  row detail-section ">
                    <div className="col">
                      <p>About you</p>
                      <input type="text" placeholder="First Name" />
                      <br />
                      <input type="text" placeholder="Last Name" />
                      <br />
                      <input type="text" placeholder="Pronouns" />
                    </div>
                    <div className="col">
                      <p>About your partner</p>

                      <input type="text" placeholder="First Name" />
                      <br />
                      <input type="text" placeholder="Last Name" />
                      <br />
                      <input type="text" placeholder="Pronouns" />
                    </div>
                  </div>
                  <p className="para">
                    We ask for your pronouns so we recognise you as you
                  </p>
                  <div className="birth_signup">
                    <input type="text" placeholder="Your date of birth" />
                  </div>
                  <p className="text-center py-3">
                    By going ahead you agree to the terms of the site
                  </p>
                  <div className="agree_button">
                    <button type="button" onClick={createProfile}>
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
            <div className=" py-2 login-title">
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
                <h4>Welcome to with Roobi</h4>
                <p>Let’s start building your ideal wedding!</p>
                <div className="text-center py-4 addListingButton">
                  <button
                    style={{ backgroundColor: "#027656" }}
                    onClick={continueClick}
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default SignupExplore;
