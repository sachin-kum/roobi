import React from 'react'
import { franchEmptyData } from '../data'
import EmptyCardSlider from '../component/EmptyCardSlider'
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll'
import CardSlider from "../component/CardSlider";
import {venues } from "../data";
function ConsumerBoard() {
  return (

    <>
    <SearchFilterAll />
    <div className='NaplesContainer'>
    <div className='savedProfile-idea'>
    <div className='NaplesHeading'>
        <h2>Naples wedding ideas</h2>
        <button>Share</button>
    </div>
    <hr />
          <EmptyCardSlider venues={franchEmptyData} name="VENUES" color="#33e6f3" />
            <EmptyCardSlider venues={franchEmptyData} name="PHOTOGRAPHERS" color="#ff99cc" />
            <EmptyCardSlider venues={franchEmptyData} name="CATERING" color="orange" />  
            <EmptyCardSlider venues={franchEmptyData} name="OFFICIANTS" color="#66C0BE"/>
            <EmptyCardSlider venues={franchEmptyData} name="FLORIST" color="#33e6f3" /> 
            <EmptyCardSlider venues={franchEmptyData} name="BAKERS" color="#901346"/>
            
    </div>
    <hr />
    <div className='savedNaples'>
        <h2>Your saved Blog Posts & Inspiration for Naples</h2>

        <EmptyCardSlider venues={franchEmptyData} name="INSPIRATION" color="#F8B912" /> 
            <EmptyCardSlider venues={franchEmptyData} name="BLOGS" color="#00B0D7"/>
    </div>

    <hr />
    <div className='uniqeVandor-Naples'>
        <h2>See more unique vendors in Naples</h2>
        <CardSlider venues={venues} name="VENUES" color="#EC6877" />
    </div>
    </div>
    </>
  )
}

export default ConsumerBoard