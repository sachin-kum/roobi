import React from 'react'

import EmptyCardSlider from '../component/EmptyCardSlider'

import { franchEmptyData } from '../data'

function ConsumerNaplesWedding() {
  return (
    <>
      

        <div className='container-fluid py-5'>
        
            <div className='naplesWedding'>
            <h3 className='naplesWedding-heading'>Naples wedding ideas</h3>
            <EmptyCardSlider venues={franchEmptyData} name="FRANCE" color="#EC6877" />
            <EmptyCardSlider venues={franchEmptyData} name="ITALY" color="#027656" />
            <EmptyCardSlider venues={franchEmptyData} name="MONTENEGRO" color="#1E3B76" />
            </div>
        </div>
        
    </>
  )
}

export default ConsumerNaplesWedding