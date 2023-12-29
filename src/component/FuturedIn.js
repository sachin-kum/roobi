import React from 'react'
import { BiPlusMedical } from "react-icons/bi";
import {futuredData} from '../data'
function FuturedIn({heading,para,color}) {
  return (
  <>
     <div className="fututred-In row">
             <h2>{heading}</h2>
             <div className="futuredIn-section">
            <p className="futured-rotate" style={{color}}>{para}</p>
            <div className='futured-collection'>
              {futuredData.map(({id,heading,place,guest})=>{
                return(
                <div className="col" key={id}>
                  <div className="futured-card" >
                  <button style={{backgroundColor:color}}><BiPlusMedical /></button>
                  <div className="futured-empty-box"></div>
                  <div className="futured-box-content">
                    <h5 style={{color}}>{heading}</h5>
                    <p>{place}</p>
                    <p>{guest}</p>
                  </div>
                  </div>
                </div>
                )
              })}
              </div>
              </div>
             </div>
  </>
  )
}

export default FuturedIn