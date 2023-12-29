
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

export default function VenuesCard({ venues, name, color }) {
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
                        slidesPerView: 4,
                    },
                    1240: {
                        width:1240,
                        slidesPerView: 4,
                    },
                  1368: {
                        width: 1367,
                        slidesPerView: 5,
                    },
                   1500: {
                        width: 1500,
                        slidesPerView: 5,
                    },
                    1700: {
                        width: 1700,
                        slidesPerView: 6,
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
                        {venues.map(({ id, image, heading, country, price }) => {
                            return (
                                <SwiperSlide >

                                    <div className='common_card' key={id}>
                                        <img src={image} alt='wedding' />
                                        <div className='common_footer'>
                                            <h4 style={{ color: "black" }}>{heading}</h4>
                                            <h5>{country}</h5>
                                            <span>{price}</span>
                                        </div>
                                    </div>  </SwiperSlide>)
                        })}
                        
                    </div></div>

            </Swiper>
        </>
    );
}
