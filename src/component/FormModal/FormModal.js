import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
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

const FormModal = () => {
  function closeModal() {
    setModalopen("");
    val_login.email = "";
    val_login.password = "";
    err_login.email = "";
    err_login.password = "";
  }

  const [modalOpen, setModalopen] = useState("");

  const host = "http://192.168.0.4:2917";
  //login
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
      console.log(event);
      axios.post("http://192.168.0.4:2917/login", {
        ...val_login,
      });
    },
  });
  function signupVandor() {
    setModalopen("login_modal");
  }
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-roobi ">
          <div className=" py-3 login-title ">
            <p>Login</p>
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
    </>
  );
};

export default FormModal;
