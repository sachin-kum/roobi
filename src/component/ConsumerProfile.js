import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import { consumerData, consumerData2,consumerData3  } from "../data";



function ConsumerProfile () {
    const [file, setFile] = useState(false);
    const[cards,setCards]=useState(false)

    function consumerCards (){
        setCards(true)
    }

    function handleChange_image(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
      }
  return (
<>
    
<div className=" container-fluid consumerAccount">
        <div className=" row consumerPage">
          <div className="col ">
            {file ? (
              <img width="100%" src={file} alt='consumer' />
              
            ) : (
              <div className="consumer-Imagae" />
            )}

            <input
              type="file"
              className="hide"
              id="image_upload"
              onChange={handleChange_image}

            ></input>
          {file ? 
        <label htmlFor="image_upload" >Update photo</label>:<label for="image_upload" >Add a photo</label>
         }
           
          </div>
          <div className=" col p-4">
            <div className=" consumer-Profile ">
              <h3>Profile</h3>
              <button type="button">EDIT ACCOUNT DETAILS</button>
            </div>
            <form>
              <div className="profile-wedding-consumer ">
                <h5>Hailey Bridges (She/Her) & Ella Thomas (She/Her) </h5>
                <textarea
                  rows="5"
                  placeholder=" A space for a short bio..."
                ></textarea>
              </div>
            </form>
            <div className="consumer-wedding-goals">
              <div className="d-flex justify-content-between">
                <h3>Wedding goals</h3>
              <NavLink to='/ConsumerViewAccount'> <button type="button">EDIT WEDDING DETAILS</button></NavLink>
                
              </div>
              <p className="pt-3">
                <b>When: </b>TBC
              </p>
              <p>
                <b>Where: </b>TBC
              </p>
              <p>
                <b>How many guests:</b> TBC
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className="consumer-listing ">
              <h3 className="py-2 consumer-listing-heading">Saved Listings</h3>
              <button type="button" onClick={consumerCards} className='consumer-listing-btn'>+ CREATE YOUR FIRST BOARD</button>


             { cards && <div className="consumer-listing-cards">
                <h6>NAPLES WEDDING IDEAS</h6>
           
          
          
          <div className='row empty-venues g-0 justify-content-start '>
       
            {
              consumerData.map(({ id, title, text, price }) => {
                return (
                  <div className="col-xxl-2 col-md-3 col-2 consumerSavedCard   ">
                    <div className=" empty-card-account" key={id}>
                      <div className="empty-box-account" />
                      <div className="empty-body-account">
                        <h3 className="empty-account-title">{title}</h3>
                        <p>{text}</p>
                        <p>{price}</p>
                      </div>
                    </div>
                    </div>
                )
              })
            }
           
          </div>
          <h6 style={{color:'#027656'}}>CALIFORNIA WEDDING IDEAS</h6>

          <div className='row empty-venues g-0 justify-content-start '>
            {
              consumerData2.map(({ id, title, text, price }) => {
                return (
                  <div className='col-xxl-2 col-md-3 col-2  consumerSavedCard  ' key={id}   >
                  <div className=" empty-card-account" key={id}>
                      <div className="empty-box-account" />
                      <div className="empty-body-account">
                        <h3 className="empty-account-title">{title}</h3>
                        <p>{text}</p>
                        <p>{price}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <h6 style={{color:'#CA8BBB'}}>NICE, FRANCE WEDDING 2023</h6>

          <div className='row empty-venues g-0 justify-content-start '>
            {
              consumerData3.map(({ id, title, text, price }) => {
                return (
                  <div className=' col-xxl-2 col-md-3 consumerSavedCard  ' key={id}   >
                  <div className=" empty-card-account" key={id}>
                      <div className="empty-box-account" />
                      <div className="empty-body-account">
                        <h3 className="empty-account-title">{title}</h3>
                        <p>{text}</p>
                        <p>{price}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
       
              </div>}
            </div>
      </div>
</>
  )
}

export default ConsumerProfile