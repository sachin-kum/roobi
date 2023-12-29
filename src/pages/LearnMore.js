import React from "react";
import { LearnMoreData } from "../data";
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function LearnMore() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <SearchFilterAll />
   
      <div className="about-image">
      <div className="container-fluid about-image-container">
        <div className="about-image-content">
          <div className="about-image-content-heading">
            <h1>
              Making it easier than ever to plan truly unique one-of-a-kind
              weddings.
            </h1>
          </div>
          <div className="about-image-content-btn">
            <button>SIGN UP TODAY</button>
          </div>
        </div>
      </div>
</div>
      <div className="container learn-container">
        <div className="row learn-row">
          <div className="col-md learn-column-content">
            <h2>
              Want to plan a once-in-a-lifetime wedding but haven't a clue where
              to look? Picked a location but have no idea how to find or
              approach local vendors? With Roobi has got your back.
            </h2>
          </div>
          <div className="col-md learn-side-content">
            <p>
              You simply tell us where you fancy having your wedding, and we go
              out and bring you all those secret local suggestions in seconds.
              All those hidden venues, fancy food vendors, stunning florists,
              local entertainment - the works! <br />
              <br />
              Wedding planning stress? Sure, it can happen. But with us, you can
              have fun planning your truly unique day. And remember, you've got
              this! Because we're here by your side the whole way.
              <br />
              So, you ready? Let's start building your ideal wedding.
            </p>

            <div className="_learn-btn-demo">
              <button type="button">SIGN UP TODAY</button>
            </div>
          </div>
        </div>
      </div>

      <div className="number-learn">
        <div className="container">
          <div className="learn-number-heading">
            <h2>Your unique wedding is only a few clicks away</h2>
          </div>
          <div className="row number-learn-row ">
            {LearnMoreData.map(({ id, number, bgcolor, text, color }) => {
              return (
                <div className="col " key={id}>
                  <div className="number-count">
                    <div className="text-center">
                      <span style={{ color: color, backgroundColor: bgcolor }}>
                        {number}
                      </span>
                    </div>
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-planing">
            <button>START PLANNING</button>
          </div>
        </div>
      </div>

      <div className="container brain-behind-container">
        <h2>Meet the brains behind with Roobi</h2>
        <div className="row brain-behind">
          <div className="col ringsystem ">
            <div className="brain-behind-image">
              <div className="learnmore-ring1"></div>
              <div className="learnmore-ring2"></div>
              <div className="learnmore-ring3"></div>
              <div className="learnmore-ring4"></div>
              <img src="static/chhoriph.png" className="rightImg" alt="" />
            </div>
          </div>
          <div className="col ">
            <div className="brain-behind-content">
              <p>
                Liz Rae first started in the wedding industry with her
                officiating business, Liz Rae & Co, in 2014. To provide a safe
                space for couples to share their story.
              </p>

              <p>
                Having fallen in love with the wedding industry, travel, and the
                vendors she worked alongside, she came uo with the idea for with
                Roobi - to create a wedding platform that made it easy and
                stress-free for couples to book and plan their ideal, most
                unique wedding anywhere in the world.
              </p>

              <p>
                Having met and worked with so many rare and hidden global
                vendors all over the world, it made perfect sense to bring it
                all together here. So you have everything you need to
                effortlessly make your big day exactly as you want it to be.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container learnMore-box-container ">
        <div className="row learnMore-box ">
          <div className="learnMore-box-content">
            <h2>Ready to start building your ideal wedding?</h2>
            <div className="learnMore-chat-btn p-5">
              <button>SIGN UP TODAY</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default LearnMore;
