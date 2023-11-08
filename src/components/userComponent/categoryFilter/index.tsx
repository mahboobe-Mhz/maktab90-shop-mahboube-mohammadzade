import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y ,Autoplay} from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import FlashIcon from "../../svg/flashIcon";

export default function CategoryFilter() {
  const[selectItem , setSelectItem]=useState<string>("نیلپر2")
  const fiterItem =["9نیلپر","8نیلپر","7نیلپر","6نیلپر","5نیلپر","4نیلپر","3نیلپر","نیلپر1","نیلپر2"]
  return (
    <div className=" relative  w-[100%] ">
      <Swiper
      dir="ltr"
        centeredSlides={true}
         slidesPerView={7}
         spaceBetween={20}
         freeMode={true}
         modules={[Navigation, Pagination, A11y,Autoplay]}
         loop={true}
         navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}
         breakpoints={{
          500: {
            spaceBetween:30,
            speed:2000
          },}}
      className="mySwiper  md:w-[60%] w-[80%] ]">

        
    
       
        {
          fiterItem.map((item) => (
           item===selectItem? <SwiperSlide key={item} onClick={()=>setSelectItem(item)} className="  md:mb-24 mb-10 hover:cursor-pointer border-2 md:text-center border-secondary bg-secondary rounded-3xl py-1 md:pr-14 md:pl-20 text-white text-xs  md:text-lg pr-10 pl-5" >نیلپر
      
            </SwiperSlide>:       <SwiperSlide onClick={()=>setSelectItem(item)}  className="hover:cursor-pointer border-2 text-center border-secondary rounded-3xl py-1 md:pr-14 md:pl-20 text-xs md:text-lg  pr-10 pl-5 " >نیلپر
      
      </SwiperSlide>  
          )
 
          )
        }
      <div className="absolute md:top-[50px] md:right-[45%] right-[40%] top-8 flex md:gap-5 gap-2 z-20">
      <span  
        className=" pervPage hover:cursor-pointer focus:outline-none  " > 
        <FlashIcon className="md:w-[40px] md:h-[40px] w-[20px] h-[20px] rotate-180 border-2 transition
         duration-200 p-1 border-black  rounded-full hover:border-secondary hover:fill-[#fd6e54]" />
        </span>
  <span  
        className="  nextPage hover:cursor-pointer focus:outline-none   " > 
        <FlashIcon className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]  border-2 transition duration-200 p-1
         border-black fill-black rounded-full hover:border-secondary hover:fill-[#fd6e54]" />
        </span>
      </div>

      
        
  
  
      </Swiper>
    </div>
  );
}
