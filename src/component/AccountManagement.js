import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function AccountManagement() {
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = useState(true);
  const [formdata, setformData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const [updateData, setupdateData] = useState({
    first_name: "",
    last_name: "",
    pronoun: "",
    dateofbirth: "",
    email: "",
  });
  // console.log(user?.result[0]);
  const FormData = () => {
    setformData(true);
    setInput(false);
    setEdit(false);
    setEdit2(false);
    setEdit3(false);
    setEdit4(false);
  };

  const EditData = () => {
    setEdit(true);
    setformData(false);
  };
  const EditData2 = () => {
    setformData(false);
    setEdit2(true);
  };
  const EditData3 = () => {
    setformData(false);
    setEdit3(true);
  };
  const EditData4 = () => {
    setformData(false);
    setEdit4(true);
  };
  let date_of_birth = new Date(updateData.dateofbirth).toLocaleString("fr-FR");
  return (
    <>
      <div className="AccountManagement">
        {/* {input && (
          <div className="your_info py-3 ">
            <h2>Your Info</h2>
            <form>
              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Name: </h6>
                    <p>
                      Please use your legal name - the one that appears on your
                      passport or licenses.
                    </p>
                    <input type="text" placeholder="First name" />
                    <div className="py-3 details-saved-btn">
                      <button type="button">SAVE </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                    <input
                      type="text"
                      placeholder="Last name"
                      style={{ marginTop: "95px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="text" placeholder="They/Them etc" />
                  <div className="py-3 details-saved-btn">
                    <button type="button">SAVE </button>
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Your Date of Birth - this is not visible on your profile
                    </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="date" placeholder="DD/MM/YY" />
                  <div className="py-3 details-saved-btn">
                    <button type="button">SAVE </button>
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Email Address - this is not visible on your profile{" "}
                    </h6>
                    <p>Use an address you’ll always have access to</p>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="email" placeholder="Email Address" />
                  <div className="py-3 details-saved-btn">
                    <button type="button">SAVE </button>
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h2 style={{ color: "#00B0D7" }}>Login & Security</h2>
                    <h6 style={{ paddingBottom: "0" }}>Password: </h6>
                    <p> Use a strong password</p>

                    <input
                      type="password"
                      placeholder="Current Password"
                      style={{ marginBottom: "10px" }}
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      style={{ marginBottom: "10px" }}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button" style={{ color: "#00B0D7" }}>
                      Cancel
                   </button>
                    <div className="password-circle">
                      <div className="password-circle-box">
                        <h6>WEAK PASSWORD</h6>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 details-saved-btn">
                    <button
                      type="button"
                      onClick={FormData}
                      style={{ backgroundColor: "#00B0D7" }}
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )} */}

        <div className="your_info py-3">
          <div className="row py-4">
            <div div className="col-8">
              <h5>Your Name</h5>
              <p>
                {" "}
                {updateData.first_name} {updateData.last_name}
              </p>
            </div>
            <div className="col-4 profile_listing_btn ">
              <button type="button" onClick={EditData}>
                Edit
              </button>
            </div>
          </div>
          <div className="row py-4">
            <div div className="col-8">
              <h5>Your Pronouns:</h5>
              <p> {updateData.pronoun}</p>
            </div>
            <div className="col-4 profile_listing_btn ">
              <button type="button" onClick={EditData2}>
                Edit
              </button>
            </div>
          </div>
          <div className="row py-2">
            <div div className="col-8">
              <h5>Your Date of Birth - this is not visible on your profile </h5>
              <p> {date_of_birth.split(" ")[0]} </p>
            </div>
            <div className="col-4 profile_listing_btn ">
              <button type="button" onClick={EditData3}>
                Edit
              </button>
            </div>
          </div>
          <div className="row py-4">
            <div div className="col-8">
              <h5>Email Address - this is not visible on your profile</h5>
              <p> {updateData.email} </p>
            </div>
            <div className="col-4 profile_listing_btn ">
              <button type="button" onClick={EditData4}>
                Edit
              </button>
            </div>
          </div>
          <div className="row py-4">
            <h2 className="py-3" style={{ color: "#00B0D7" }}>
              Login & Security
            </h2>
            <div div className="col-8">
              <h5>Password: </h5>
              <p> Last updated August 2022</p>
              <h5>Google: </h5>
              <p> Connected September 2022</p>
            </div>
            <div className="col-4 profile_listing_btn ">
              <button type="button" style={{ color: "#00B0D7" }}>
                Update
              </button>
              <div className="pt-5">
                <button type="button" style={{ color: "#00B0D7" }}>
                  Disconnect
                </button>
              </div>
            </div>
          </div>
          <div className="row ">
            <div div className="col-8 ">
              <h2 style={{ color: "#901346" }}>Account</h2>
              <h5 className="py-3">Delete your account </h5>
            </div>
            <div className="col-4 profile_listing_btn pt-5">
              <NavLink to="/deleteAccount">
                <button type="button" style={{ color: "#901346" }}>
                  Delete
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {edit && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Name: </h6>
                    <p>
                      Please use your legal name - the one that appears on your
                      passport or licenses.
                    </p>
                    <input type="text" placeholder="First name" />
                    <div className="py-3 details-saved-btn">
                      <button type="button" onClick={FormData}>
                        SAVE{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                    <input
                      type="text"
                      placeholder="First name"
                      style={{ marginTop: "95px" }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {edit2 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="text" placeholder="They/Them etc" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData}>
                      SAVE{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {edit3 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Your Date of Birth - this is not visible on your profile
                    </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="date" placeholder="DD/MM/YY" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData}>
                      SAVE{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {edit4 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Email Address - this is not visible on your profile{" "}
                    </h6>
                    <p>Use an address you’ll always have access to</p>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button">Cancel </button>
                  </div>
                  <input type="email" placeholder="Email Address" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData}>
                      SAVE{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AccountManagement;
