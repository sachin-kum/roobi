import React from 'react'
import './SearchFilter.css'

function SearchStyleFilter() {
  return (
   <>
    <div className='style-filter container'>
    <div className="row style-filtere-option">
              <div className="col style-filter-select">
            
                <select name="" id="">
                  <option value="">Europe
                </option>
               
                </select>
               <img src='static/selectarrow.svg' alt='' className='image-style-filter'/>
              </div>
              <div className="col style-filter-select">
                <select name="" id="">

                  <option value="">Style</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='image-style-filter'/>
              </div>
              <div className="col style-filter-select">
                <select name="" id="">
                  <option> Theme</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='image-style-filter'/>
              </div>
              
              <div className="col style-filter-select border-0 d-flex">
                <select name="" id="">
                  <option value="">Season</option>
                </select>
                <img src='static/selectarrow.svg' alt='' className='image-style-filter'/>
                <div className='style-filter_submit'>
                  <button type='button'>
                    <img src='static/vecot_border.png' alt='vector'></img>
                  </button></div>
              </div>
            </div>
    </div>
   </>
  )
}

export default SearchStyleFilter