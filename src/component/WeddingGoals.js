import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { weddingPlace,season } from "../data";

function WeddingGoals() {

  return (
    <>
      <div className="WeddingGoals ">
        <div className="wedding-info py-3 ">
          <h2>Your wedding goals</h2>

          <div className="row wedding-row py-4">
            <div className="col-xxl-9 col-md-10 col-9 ">
              <div className="wedding-content">
                <h5>When: </h5>
           
             
         <p>Which season would you like to get married in?</p>
         <div className='row  py-4'>
                            {season.map(({ id, image, heading }) => {
                                return (
                                    <div className='col-md-6 col-sm-12 col-lg-3  seaon-image' key={id}>
                                        <img src={image} alt='season ' />
                                        <div className=' d-flex  season-radio'>
                                            <input type='radio' name='season' />
                                            <p className='text-seaon'>{heading}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <button type="button" className="weddingGoals-save-btn">
                      SAVE
                    </button>
              </div>
              </div>
              <div className="col-3 col-xxl-3 col-md-2 weddingGoals-btn ">
              <button>Cancel</button>
            </div>
          <div className="col-xxl-9 col-md-11 col-3 ">
              <div className="wedding-goals-place">
              
                <h5>Where:</h5>
                <p>Where in the world would you like to get married?</p>
                <form>
                  <div className="Merrid-place">
                    <div className="group-place p-0">
                    
                      <div className='row  gx-3 '>
                            {weddingPlace.map(({ id, image, place, name }) => {
                                return (
                                    <div className='col-md-6 col-sm-12 col-lg-3  place-image' key={id}>
                                        <img src={image} alt='place ' />
                                        <div className=' d-flex  place-radio'>
                                            <input type='radio' name={name} />
                                            <p className='text-place'>{place}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <button type="button" className="weddingGoals-save-btn">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
              </div>
              <div className="col-3 col-xxl-3 col-md-1 weddingGoals-btn ">
              <button>Cancel</button>
            </div>
            <div className="col-xxl-9 col-md-10 col-9 ">
              <div className="weddingGoals-guest">
          <form>   <h5>How many guests:</h5>
                <p>
                  
                  Let us know how many guests you’d like to join you for your
                  special day.
                </p>
                <div className=" row weddingGoals-guest-box  justify-content-center">
                  <h6 className="text-center">How many attending?</h6>
                  <div className="col">
                    <p>Min guests</p>
                    <input type="number" placeholder="60" />
                  </div>
                  <div className="col">
                    <p>Max guests</p>
                    <input type="number" placeholder="60" />
                  </div>
                </div> <button type="button" className="weddingGoals-save-btn my-3">
                SAVE
              </button></form>   
              </div>
              </div>
              <div className="col-3 col-xxl-3 col-md-2 weddingGoals-btn ">
              <button>Cancel</button>
            </div>
            </div>
            
          </div>
        </div>
     
    </>
  );
}

export default WeddingGoals;
