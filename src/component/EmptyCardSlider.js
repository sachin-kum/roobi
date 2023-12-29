

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { GoPlus } from 'react-icons/go'
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

export default function EmptyCardSlider({ venues, name, color }) {
    return (
        < >

            <Swiper

                breakpoints={{
                    300: {
                        width: 300,
                        slidesPerView: 1,
                    },
                  350: {
                        width: 350,
                        slidesPerView: 2,
                    },
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 3,
                    },
                    1240: {
                        width:1240,
                        slidesPerView: 4,
                    },
                  1368: {
                        width: 1367,
                        slidesPerView: 4,
                    },
                   1500: {
                        width: 1500,
                        slidesPerView: 5,
                    },
                    1700: {
                        width: 1700,
                        slidesPerView: 5,
                    },
                }}
                modules={[Pagination]}
                slidesPerView={5}
                spaceBetween={10}
                draggable={true}


                className="mySwiper"
            >
                <div className='common '>

                    <div className='commoncard_container'>
                        <SwiperSlide className="swiper-heading ">
                            <p style={{ color }}>{name}</p>
                        </SwiperSlide>
                        {venues.map(({ id ,title, text, price }) => {
                            return (
                                <SwiperSlide >
                                <div>
                                    <div className='common_card common-empty-card' key={id}>
                                    <button style={{backgroundColor:color}}> <GoPlus size={25} /></button>
                                      <div className="empty-box"></div>
                                        <div className='common_footer'>
                                            <h4 style={{color}} >{text}</h4>
                                            <h5>{title}</h5>
                                            <span>{price}</span>
                                        </div>
                                    </div>  
                                    </div></SwiperSlide>)
                        })}
                        <SwiperSlide className="swiper-btn-class">
                            <button className="btn  ">  SEE ALL  </button>
                        </SwiperSlide>
                    </div></div>

            </Swiper>
        </>
    );
}
