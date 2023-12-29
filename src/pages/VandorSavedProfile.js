import React from 'react'
import { franchEmptyData } from '../data'
import EmptyCardSlider from '../component/EmptyCardSlider'
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll'
function VandorSavedProfile() {
  return (
   <>
   <SearchFilterAll />
     <div className='savedProfile-Container'>

     <div className='savedProfileHeading'>
        <h2>Your connected & saved vendors</h2>
        <button className='savedProfile'>Share</button>
        <EmptyCardSlider venues={franchEmptyData} name="SAVED VENDORS" color="#027656" />
    </div>
    <hr />
    <div className='savedRecomended'>
        <h2>Recommended vendors to connect with</h2>
     
   
          <EmptyCardSlider venues={franchEmptyData} name="VENUES" color="#33e6f3" />
            <EmptyCardSlider venues={franchEmptyData} name="PHOTOGRAPHERS" color="#ff99cc" />
            <EmptyCardSlider venues={franchEmptyData} name="CATERING" color="orange" />  
            <EmptyCardSlider venues={franchEmptyData} name="OFFICIANTS" color="#66C0BE"/>
            <EmptyCardSlider venues={franchEmptyData} name="FLORIST" color="#33e6f3" /> 
            <EmptyCardSlider venues={franchEmptyData} name="BAKERS" color="#901346"/>
            
            </div>
    <hr />
    <div className='savedNaples'>
        <h2 style={{color:'#CA8BBB'}}>Your saved Blog Posts & Inspiration for Naples</h2>

        <EmptyCardSlider venues={franchEmptyData} name="INSPIRATION" color="#F8B912" /> 
            <EmptyCardSlider venues={franchEmptyData} name="BLOGS" color="#00B0D7"/>
    </div>


  
    </div>
     
   </>
  )
}

export default VandorSavedProfile