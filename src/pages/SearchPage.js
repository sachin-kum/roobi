import React from 'react'
import CardSlider from '../component/CardSlider'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll';
import { wedding, cateres, officiants, bakers, florist ,venues} from "../data";

function SearchPage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
   <SearchFilterAll />
            {/* <div className='options'>
                <div className="container">
              
                    <form >
                 
                        <div className="row select-option">
                            <div className="col dropdown-select">
                                <select name="" id="">
                                    <option value="">Anywhere</option>

                                </select>
                            </div>
                            <div className="col dropdown-select">
                                <select name="" id="">

                                    <option value="">05.05.2024</option>
                                </select>
                            </div>
                            <div className="col dropdown-select">
                                <select name="" id="">
                                    <option>Boho Theme</option>
                                </select>
                            </div>
                            <div className="col dropdown-select">
                                <select name="" id="">

                                    <option value="">30-50 guests</option>
                                </select>
                            </div>
                            <div className="col dropdown-select border-0 d-flex">
                                <select name="" id="">
                                    <option value="">Price Range: $$</option>
                                </select>
                                <div className='dropdown_submit'>
                                    <button type='submit'>
                                        <img src='static/vecot_border.png' alt='vector'></img>
                                    </button></div>
                            </div>
                        </div>
                        <div className='row search-heading py-5'>
                        <h2>What would you like to see?</h2>

                    </div>
                        <div className=' row radio-option'>
                        <div className='col'>
                            <input type='radio' name='r_btn' /><label>Venue</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r_btn2' /><label>Florist</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r_btn3' /><label>Catering</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r_bt4' /><label>Officiant</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r_bt5' /><label>Photographer</label>
                        </div>

                        </div>
                        <div className=' row radio-option2'>
                        <div className='col'>
                            <input type='radio' name='r' /><label>Planners</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r' /><label>Stylist</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r' /><label>Music</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r' /><label>Bakers</label>
                        </div>
                        <div className='col'>
                            <input type='radio' name='r' /><label>Entertainment</label>
                        </div>

                        </div>
                    </form>
                    <div className='text-center py-5 filter-btn'>
                        <button>
                            FIND VENDORS
                        </button>
                    </div>
                </div>
            </div> */}
   <div className='container-fluid py-4 mid_container'>
    <div className='row text-center  '>
    <p>SIGN-UP TO START BUILDING YOUR  IDEAL WEDDING</p>

    </div>
   </div>
            <> <div className='py-5 SearchPage-Container'>

            
          <CardSlider venues={venues} name="VENUES" color="#33e6f3" />
          <CardSlider venues={wedding} name="PHOTOGRAPHER" color="#ff99cc" />
          <CardSlider venues={cateres} name="CATERING" color="orange" />
        <CardSlider venues={officiants} name="OFFICIANTS" color="#66C0BE" />
        <CardSlider venues={bakers} name="BAKERS" color="#901346" />
        <CardSlider venues={florist} name="FLORIST" color="#33e6f3" />
            </div>
            </>
          
        </>
    )
}

export default SearchPage