
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import FlashIcon from '../../../svg/flashIcon';
const TopSwiper = () => {
  
    return (
    <div className='topSliderBox relative , md:w-[80%px] w-[100%] rounded-[30px] md:pr-0 pr-1 ' >
       <Swiper
        spaceBetween={3}
        modules={[Navigation, Pagination, A11y,   EffectFade,Autoplay]}
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}
        effect={'fade'}
   
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
   speed={2000}
      >
             <SwiperSlide className='md:flex hidden'><img className='rounded-3xl h-[500px] '
              src='public/picture/banner2.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-[30px] w-full h-[500px] ' 
        src='public/picture/IMG_7177.JPG'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px] h-[500px] ' 
         src='public/picture/bannerj.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px] h-[500px] ' 
          src='public/picture/banner-01.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[70px]  right-[40px]    z-20'>
        <div className="flex gap-5  ">
        <span 
         className=" nextPage hover:cursor-pointer focus:outline-none"  > 
          <FlashIcon className="z-50  w-[50px] h-[50px]  border-2 transition duration-300 p-1 border-white fill-white  rounded-full hover:border-secondary hover:fill-[#fd6e54]" /></span>
        <span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon className="z-50 w-[50px] h-[50px]  rotate-180 border-2  p-1 border-white fill-white rounded-full hover:border-secondary hover:fill-[#fd6e54]" /></span>
    
    </div>
        </div>
   
   
      </Swiper>
      <div className=' firstDetail hidden md:flex  absolute top-[200px] left-[-15px] z-10 rounded-full p-3 bg-white'>
      <div className='flex flex-col items-center bg-white rounded-full pb-2 px-6 border-2 border-black' >
      <span className='md:text-xl text-[7px] font-semibold text-secondary'> ارسال سریـــع</span>
      <span className='md:text-xs text-[5px] text-secondary'> ارسال کالا در سریعترین زمان</span>
      </div>
      </div>
      <div className='secondDetail  hidden md:flex absolute bottom-[-15px] right-[-10px] z-10 rounded-full p-3 bg-white '>
      <div className='  bg-white md:text-xl  text-[7px] font-semibold
     text-secondary rounded-full px-5 pt-1 pb-2 border-2 border-black'>
      <span className=''>
        تضمین کیفیت کالا 
        </span>
     </div>
      </div>
   

   
    </div>
     );
}
 
export default TopSwiper;