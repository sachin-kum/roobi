import React from 'react'

import './FAQs.css'
import Question from './Question'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchFilterAll from '../../component/SearchFilter/SearchFilterAll'


const FAQs = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
 
    return (
        <>
        <SearchFilterAll />
        <div className='FAQs' >
            <div className="FAQs-top">
                <div className='FAQs-heading'>Got a quetion you <br /> need answering?</div>
                <div className='FAQs-para'>
                    Below you'll find answers to the questions <br /> we tend to get asked the most.
                </div>
                <div className="FAQs-quiry">
                    <span className='q-1'>Couple FAQs</span> &nbsp; | &nbsp; <span className='q-2'>Vendor FAQs</span>
                </div>
            </div>
            </div >
            <div className="quetion">
                <Question number='Qution 1'/>
                <Question number='Qution 2'/>
                <Question number='Qution 3'/>
                <Question number='Qution 4'/>
                <Question number='Qution 5'/>
                <Question number='Qution 6'/>
                <Question number='Qution 7'/>
            </div>
            <div className='FAQs-Chat'  >
                <div className='FAQs-chatBox'>
                    <h2>Didn't answer your question? No problem -
we're online now so pop us a message</h2>

<button>OPEN CHAT</button>
                </div>
               
            </div>
        
      
        </>
    )
}

export default FAQs