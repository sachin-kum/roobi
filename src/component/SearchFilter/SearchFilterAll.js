import React from 'react'
import Filterbtn from '../Filterbtn'

function SearchFilterAll() {
  return (
   <>
     <div className='explore-option'>
        <div className="container-fluid explore-option-container">
        <div className='row'>
          <div className='col-10'>
          <form >
            <div className="row select-explore-option">
              <div className="col explore-dropdown-select">
            
                <select name="" id="">
                  <option value="">Europe
                </option>
               
                </select>
               <img src='static/selectarrow.svg' alt='' className='select-image-explore'/>
              </div>
              <div className="col explore-dropdown-select">
                <select name="" id="">

                  <option value="">Season</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='select-image-explore'/>
              </div>
              <div className="col explore-dropdown-select">
                <select name="" id="">
                  <option> Formal Theme</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='select-image-explore'/>
              </div>
              <div className="col explore-dropdown-select">
                <select name="" id="">

                  <option value="">Guests</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='select-image-explore'/>
              </div>
              <div className="col explore-dropdown-select border-0 d-flex">
                <select name="" id="">
                  <option value="">Budget</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='select-image-explore'/>
                <div className='explore-dropdown_submit'>
                  <button type='button'>
                    <img src='static/vecot_border.png' alt='vector'></img>
                  </button></div>
              </div>
            </div>

          </form>
          </div>
          <div className='col-2 '>
         <Filterbtn />
         </div>
         </div>
        </div>
      </div>
   </>
  )
}

export default SearchFilterAll