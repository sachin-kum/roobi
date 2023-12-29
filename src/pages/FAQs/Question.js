import React, { useState } from 'react'

const Question = ({number}) => {
    const [showAns, SetShowAns] = useState(false)
    return (
        <div className="q-box">
            <div className="hr_line"></div>
            <div className="quetion-field">
                <div className="qs-part">
                    <div className="qtn">
                        {number}
                    </div>
                    <div className={ showAns ? "ans active" : "ans" }>
                        Answer the question here. Description area about the service they provide. Read more
                    </div>
                </div>
                <div className="ans-toggle">
                    <button type='button' className={ showAns ? 'ans-tbtn active' : "ans-tbtn" } onClick={ () => SetShowAns(showAns ? false : true) } >
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.95415 1.56559e-06L15.7087 13.4312L0.199627 13.4312L7.95415 1.56559e-06Z" fill="#525045" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Question