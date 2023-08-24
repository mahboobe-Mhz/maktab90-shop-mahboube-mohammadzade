import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function CategoryFilter() {
  const[selectItem , setSelectItem]=useState<string>("نیلپر2")
  const fiterItem =["9نیلپر","8نیلپر","7نیلپر","6نیلپر","5نیلپر","4نیلپر","3نیلپر","نیلپر1","نیلپر2"]
  return (
    <>
      <Swiper
        centeredSlides={true}
         slidesPerView={7}
         spaceBetween={20}
         freeMode={true}
         breakpoints={{
          500: {
            spaceBetween:30,
            speed:2000
          },}}
      className="mySwiper md:w-[60%] w-[80%]  ">
        {
          fiterItem.map((item) => (
           item===selectItem? <SwiperSlide key={item} onClick={()=>setSelectItem(item)} className="  hover:cursor-pointer border-2 text-center border-secondary bg-secondary rounded-3xl py-1 md:pr-14 md:pl-20 text-white text-xs  md:text-lg pr-5 pl-10" >نیلپر
      
            </SwiperSlide>:       <SwiperSlide onClick={()=>setSelectItem(item)}  className="hover:cursor-pointer border-2 text-center border-secondary rounded-3xl py-1 md:pr-14 md:pl-20 text-xs md:text-lg  pr-5 pl-10 " >نیلپر
      
      </SwiperSlide>  
          )
 
          )
        }
  
     
 
  
      </Swiper>
    </>
  );
}
