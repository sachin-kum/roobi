import React from 'react'
import './Privacy.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Privacy = () => {

    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className='container privacy-container'>
            <div className="privacy-h">
                Privacy
            </div>
            <div className="privacy-sh sub-h1 ">
                Sed ut perspiciatis
            </div>
            <div className="policy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
            </div>
            <div className="privacy-sh sub-h2 ">
                Sed ut perspiciatis
            </div>
            <div className="policy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
            </div>
            <div className="privacy-sh sub-h3 ">
                Sed ut perspiciatis
            </div>
            <div className="policy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi minus, beatae aspernatur at harum dolorum? A voluptas ipsum quod accusantium cum explicabo ipsa nemo magni molestias! Ullam, eaque debitis.
            </div>
        </div>
    )
}

export default Privacy