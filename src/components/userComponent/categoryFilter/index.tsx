import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function CategoryFilter() {
  
  return (
    <>
      <Swiper
        centeredSlides={true}
         slidesPerView={7}
         spaceBetween={30}
      className="mySwiper w-[60%] ">
   
        <SwiperSlide className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر
      
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-10  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-20  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-32  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-44  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-[14rem]  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-[18rem]  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
        <SwiperSlide >
        <button className=" border-2 text-center border-secondary rounded-3xl py-1 px-14  mr-[22rem]  focus:bg-secondary focus:text-white focus:outline-none" >نیلپر</button>
        </SwiperSlide>
  
  
      </Swiper>
    </>
  );
}
