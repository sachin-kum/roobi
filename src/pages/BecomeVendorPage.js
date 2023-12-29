import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { vandorImage, vandorImag3 } from "../data";
import LoginUp from "../component/LoginUp";

import VandorSignup from "../component/VandorSignup";

function BecomeVendorPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //       const [modalIsOpen, setIsOpen] = useState(false);
  //   function signupVandor() {
  //     setIsOpen(true)
  //   }
  return (
    <>
      <div className="vandor_image">
        <div className="container ">
          <div className="row img-content ">
            <h1>
              Share your unique wedding services with everyone. For free.*
            </h1>
            <div className="vandor-btn text-center py-4">
              <VandorSignup button="become a vendor for free" />

              <LoginUp button="BECOME A VENDOR FOR FREE" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid vandor-container">
        <div className="row vandor-section  ">
          <div className="col-lg-6 vandor-para">
            <div className="vandor-ring">
              <div className="vandorRing1"></div>
              <div className="vandorRing2"></div>
            </div>
            <div className="vandor-heading">
              <h2>
                You could be one with Roobi search away from your{" "}
                <span>next big booking.</span>
              </h2>
            </div>
            <div className="vandor-text">
              <p>
                {" "}
                With 100s of couples searching with Roobi for wedding vendors
                everyday, you’re only ever a few clicks away from your next
                booking. And remember, it’s completely free to join.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 vandor-para2 ">
            <div className="vandor-ring">
              <div className="vandorRing3"></div>
              <div className="vandorRing4"></div>
              <div className="vandorRing5"></div>
              <div className="vandorRing6"></div>
            </div>
            <div className="vandor-para-image ">
              <img src="static/marisa.png" alt="marisa" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid weddingMenu_Container">
        <div className="row weddingMenu">
          <div className="col-8 _wedidngMenu-image">
            <img src="static/freddy.png" alt="freddy" />
          </div>

          <div className="col-4 _weddingMenu-text">
            <h3>
              ‘Since I’ve been using with Roobi my bookings increased and I’ve
              been able to help so many more couples enjoy their perfect day’
            </h3>
            <h4>VENDOR</h4>
          </div>
        </div>
      </div>

      <div className="container question-box-Container">
        <div className="row question-box ">
          <div className="question-content">
            <h2>
              Got a question about joining with Roobi? We’re online now so ask
              away.
            </h2>
            <div className="chat-btn pt-5">
              <button>OPEN CHAT</button>
            </div>
          </div>
        </div>
      </div>

      <div className="vandorGallery">
        <div className="row vandor-gallery-row ">
          {vandorImage.map(({ id, image, padding }) => {
            return (
              <div key={id} className="col" style={{ padding: "0" }}>
                <div className="vandor-image-gallery">
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="vandor-gallery-row2 row">
          <div className="col-2 vandor-row2Image p-0">
            <img src="static/vimg11.png" alt="" />
          </div>
          <div className="col-2 vandor-row2Image">
            <img src="static/vimg12.png" alt="" />
          </div>

          <div className="col-4 ">
            <div className="vandor-row2-content">
              <h3>Ready to share your services with the world?</h3>
              <button>become a vendor for free</button>
            </div>
          </div>
          <div className="col-2 vandor-row2Image">
            <img src="static/vmg13.png" alt="" />
          </div>
          <div className="col-2 vandor-row2Image p-0">
            <img src="static/vmg14.png" alt="" />
          </div>
        </div>

        {/* // duplicate-row */}

        <div className=" vandor-gallery-show  ">
          <div>
            <img src="static/vimg7.png" alt="" />
          </div>
          <div>
            <img src="static/vimg8.png" alt="" />
          </div>
          <div>
            <img src="static/vimg9.png" alt="" />
          </div>
          <div>
            <img src="static/vimg10.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeVendorPage;
