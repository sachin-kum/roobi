import React from 'react'

import { emptyData, europeanWedding, weddingData,franchEmptyData } from '../data'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EmptyCardSlider from '../component/EmptyCardSlider'
import SignupExplore from '../component/SignupExplore';
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll';
import WeddingHints from '../component/WeddingHints/WeddingHints';
import GetInspiredContanier from '../component/GetInspiredContanier';
import SearchStyleFilter from '../component/SearchFilter/SearchStyleFilter';




function ExploreSearch() {

  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
 
  return (
    <>
     
      <SearchFilterAll />

      <div className=' container  d-flex justify-content-center ' style={{ paddingTop: "60px", paddingBottom: "60px" }}>

        <div className='row   signup-explore  py-4 ' >
          <div className='heading-signup text-center' >
            <h4>Sign up to start building your ideal wedding</h4>
          </div>
          <SignupExplore />
        </div>

      </div>
    


      <div className='coutries-slider'>
      <h2>Here’s where we think is perfect for you</h2>
        
        <EmptyCardSlider venues={franchEmptyData} name="FRANCE" color="#EC6877" />
            <EmptyCardSlider venues={franchEmptyData} name="ITALY" color="#027656" />
            <EmptyCardSlider venues={franchEmptyData} name="MONTENEGRO" color="#1E3B76" />
        </div>

    

      <WeddingHints heading='Our top European Wedding hints, tips and advice' color='#EC6877'
            background='#F5F5F5' border='2px solid #EC6877 ' />

<div className="getInspired-wedding">
<h2>Get inspired with more European weddings</h2>

<SearchStyleFilter />

<GetInspiredContanier padding='0px 150px'
paddingTop='0'
paddingBottom='0'
/>
</div>

    </>
  )
}

export default ExploreSearch












