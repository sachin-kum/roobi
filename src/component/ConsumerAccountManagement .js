import React, { useState } from "react";

function ConsumerAccountManagement() {
  const [input, setInput] = useState(true);
  const [formdata, setformData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const[edit5,setEdit5]=useState(false);
  const[edit6,setEdit6]=useState(false)
  const[edit7,setEdit7]=useState(false)

  const FormData = () => {
    setformData(true);
    setInput(false);
    setEdit(false);
    setEdit2(false);
    setEdit3(false);
    setEdit4(false);
    setEdit5(false);
    setEdit6(false);
    setEdit7(false)
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
  const EditData5 = () => {
    setformData(false);
    setEdit5(true);
  };
  const EditData6 = () => {
    setformData(false);
    setEdit6(true);
  };
  const EditData7 = () => {
    setformData(false);
    setEdit7(true);
  };
  return (
    <>
      <div className="AccountManagement container">
        {input && (
          <div className="your_info py-3 ">
            <h2 style={{color:'#027656'}}> Your Info</h2>
            <form>
              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Name: </h6>
                    <p>
                      Please use your legal name - the one that appears on your
                      passport or licenses.
                    </p>
                    <div className="row">
                      <div className="col"><input type="text" placeholder="First name" /></div>
                      <div className="col"><input type="text" placeholder="Last name"/></div>
                    </div>
                    
                    <div className="py-3 details-saved-btn">
                      <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                   
                  </div>
                </div>
              </div>
              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                 
                  <div className="py-3 details-saved-btn">
                  <input type="text" placeholder="They/Them etc" /><br /><br />
                    <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
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
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
               
                  <div className="py-3 details-saved-btn">
                  <input type="date" placeholder="DD/MM/YY" /><br /><br />
                    <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
              <div className="row">
                  <div className="col informaton-account">
                    <h6> Your Partners Name: </h6>
                    <p>
                    Please use their legal name - the one that appears on their passport or licenses.
                    </p>
                    <div className="row">
                      <div className="col"><input type="text" placeholder="First name" /></div>
                      <div className="col"><input type="text" placeholder="Last name"/></div>
                    </div>
                  
                    <div className="py-3 details-saved-btn">
                      <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Partners Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                 
                  <div className="py-3 details-saved-btn">
                  <input type="text" placeholder="They/Them etc" /><br /><br />
                    <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
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
                    <button type="button" style={{color:'#027656'}}>Cancel </button>
                  </div>
                  <div className="py-3 details-saved-btn">
                  <input type="text" placeholder="Email Address" /><br /><br />
                    <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
                  </div>
                </div>
              </div>

              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="py-3 details-saved-btn">
                  <textarea
                  style={{width:'50%', resize:'none'}}
                  rows="7"
                  placeholder=" Tell us a bit about you and your partner. How did you meet? What do you both do? What are you hoping for from your wedding?..."
                ></textarea><br /><br />
                    <button type="button" style={{backgroundColor:'#027656'}}>SAVE </button>
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
                      <div className="password-circle-box" style={{backgroundColor:'#00B0D7'}}>
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
        )}

        {formdata && (
          <div className="your_info py-3">
            <div className="row py-4">
              <div div className="col-8">
                <h5>Your Name</h5>
                <p> Katie Evans </p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button" onClick={EditData} style={{color:'#027656'}}>
                  Edit
                </button>
              </div>
            </div>
            <div className="row py-4">
              <div div className="col-8">
                <h5>Your Pronouns:</h5>
                <p> She/Her</p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button" onClick={EditData2} style={{color:'#027656'}}>
                  Edit
                </button>
              </div>
            </div>
            <div className="row py-4">
              <div div className="col-8">
                <h5>Your Partners Name:</h5>
                <p> Ella Thomas</p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button" onClick={EditData6} style={{color:'#027656'}}>
                  Edit
                </button>
              </div>
            </div>
            <div className="row py-4">
              <div div className="col-8">
                <h5>Your Partners Pronouns:</h5>
                <p> She/Her</p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button" onClick={EditData7} style={{color:'#027656'}}>
                  Edit
                </button>
              </div>
            </div>
            <div className="row py-2">
              <div div className="col-8">
                <h5>
                  Your Date of Birth - this is not visible on your profile{" "}
                </h5>
                <p> **/**/**** </p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button" onClick={EditData3} style={{color:'#027656'}}>Edit</button>
              </div>
            </div>
            <div className="row py-4">
              <div div className="col-8">
                <h5>Email Address - this is not visible on your profile</h5>
                <p> k**************s@flancopizza.com </p>
              </div>
              <div className="col-4 profile_listing_btn ">
                <button type="button"  onClick={EditData4} style={{color:'#027656'}}>Edit</button>
              </div>
            </div>

            <div className="row py-4">
              <div div className="col-6">
                <h5>About you:</h5>
                <p>We met in 2014 in NYC, straight after university. I’m a photographer and Ella works in banking. We’re a slightly odd couple in all honesty....  </p>
              </div>
              <div className="col-6 profile_listing_btn ">
                <button type="button"  onClick={EditData5} style={{color:'#027656'}}>Edit</button>
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
                <button type="button" style={{ color: "#901346" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}








        {edit && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Name: </h6>
                    <p>
                      Please use your legal name - the one that appears on your
                      passport or licenses.
                    </p>
                    <div className="row">
                      <div className="col">  <input type="text" placeholder="First name" /></div>
                      <div className="col">  <input type="text" placeholder="Last name" /></div>
                    </div>
                    <div className="py-3 details-saved-btn">
                      <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>
                        SAVE{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {edit2 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                     <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                  <input type="text" placeholder="They/Them etc" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>
                      SAVE{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {edit6 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Partners Name: </h6>
                    <p>
                      Please use your legal name - the one that appears on your
                      passport or licenses.
                    </p>
                    <div className="row">
                      <div className="col">  <input type="text" placeholder="First name" /></div>
                      <div className="col">  <input type="text" placeholder="Last name" /></div>
                    </div>
                    <div className="py-3 details-saved-btn">
                      <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>
                        SAVE{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {edit7 && (
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
                <div className="row">
                  <div className="col informaton-account">
                    <h6>Your Partners Pronouns: </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                     <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                  <input type="text" placeholder="They/Them etc" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>
                      SAVE{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {edit3 &&
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
              <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Your Date of Birth - this is not visible on your profile
                    </h6>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                  <input type="date" placeholder="DD/MM/YY" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>SAVE </button>
                  </div>
                </div>
              </form>
              </div>
              </div>
        }

        {edit4 &&
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
              <div className="row">
                  <div className="col informaton-account">
                    <h6>
                      Your Date of Birth - this is not visible on your profile
                    </h6>
                    <p>Use an address you’ll always have access to</p>
                  </div>
                  <div className="col text-end account-back-btn">
                    <button type="button"  style={{color:'#027656'}}>Cancel </button>
                  </div>
                  <input type="text" placeholder="Email Address" />
                  <div className="py-3 details-saved-btn">
                    <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}}>SAVE </button>
                  </div>
                </div>
              </form>
              </div>
              </div>
        }


       
        {edit5 &&
          <div className="AccountManagement-Section">
            <div className="your_info py-3 ">
              <h2  style={{color:'#027656'}}>Your Info</h2>
              <form>
              <div className="AccountManagement-Section">
                <div className="row">
                  <div className="py-3 details-saved-btn">
                  <textarea
                  style={{width:'50%', resize:'none'}}
                  rows="7"
                  placeholder=" Tell us a bit about you and your partner. How did you meet? What do you both do? What are you hoping for from your wedding?..."
                ></textarea><br /><br />
                    <button type="button" onClick={FormData} style={{backgroundColor:'#027656'}} >SAVE </button>
                  </div>
                </div>
              </div>
              </form>
              </div>
              </div>

        }
      </div>
    </>
  );
}

export default ConsumerAccountManagement;
