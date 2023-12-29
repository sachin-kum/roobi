import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { GoPlus } from "react-icons/go";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function CardSlider({ venues, name, color }) {
  return (
    <>
      <div className="slider-topone">
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
            1366: {
              width: 1366,
              slidesPerView: 5,
            },

            1400: {
              width: 1400,
              slidesPerView: 6,
            },
            1501: {
              width: 1501,
              slidesPerView: 6,
            },
            1600: {
              width: 1600,
              slidesPerView: 6,
            },
            1700: {
              width: 1700,
              slidesPerView: 6,
            },
          }}
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={10}
          draggable={true}
          className="mySwiper"
        >
          <div className="common ">
            <div className="commoncard_container">
              <SwiperSlide className="swiper-heading ">
                <p style={{ color }}>{name}</p>
              </SwiperSlide>
              {venues.map(({ id, image, heading, country, price }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
                      <div className="common_card">
                        <button style={{ backgroundColor: color }}>
                          <GoPlus size={25} />
                        </button>
                        <img src={image} alt="wedding" />
                        <div className="common_footer">
                          <h4>{heading}</h4>
                          <h5>{country}</h5>
                          <span>{price}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="swiper-btn-class">
                <button className="btn  "> SEE ALL </button>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
