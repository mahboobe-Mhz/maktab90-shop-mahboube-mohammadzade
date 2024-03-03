
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import FlashIcon from '../../../svg/flashIcon';
const TopMobileSlider = () => {
  
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
             <SwiperSlide ><img className='rounded-3xl h-[300px] w-full'
              src='public/picture/banner-01 - Copy.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-[30px] w-full  h-[300px] w-full' 
        src='public/picture/IMG_7177.JPG'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px]  h-[300px] w-full ' 
         src='public/picture/خانهوشمند.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px]  h-[300px] w-full' 
          src='public/picture/صنایعدستی.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[50px]  right-[30px]   z-20'>
        <div className="flex md:gap-5 gap-2 ">
        <span 
         className=" nextPage hover:cursor-pointer focus:outline-none"  > 
          <FlashIcon className="z-50   w-[30px] h-[30px] border-2 transition duration-300 p-1 border-white fill-white  rounded-full hover:border-secondary hover:fill-[#fd6e54]" /></span>
        <span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon className="z-50 w-[30px] h-[30px] rotate-180 border-2  transition duration-300 p-1 border-white fill-white rounded-full hover:border-secondary hover:fill-[#fd6e54]" /></span>
    
    </div>
        </div>
   
   
      </Swiper>
    
      <div className=' firstDetail2 md:hidden absolute top-[100px] left-[-10px] z-10 rounded-full p-2 bg-white'>
      <div className='flex flex-col items-center bg-white rounded-full pb-1 px-2 border-2 border-black' >
      <span className='md:text-xl text-[8px] font-semibold text-secondary'> ارسال سریع</span>
      <span className='md:text-xs text-[6px] text-secondary'> ارسال کالا در سریعترین زمان</span>
      </div>
      </div>
      <div className='secondDetail2  md:hidden absolute bottom-[-10px] right-[-10px] z-10 rounded-full p-2 bg-white '>
      <div className='  bg-white md:text-xl  text-[8px] font-semibold
     text-secondary rounded-full px-2 pt-1 pb-1 border-2 border-black'>
      <span className=''>
        تضمین کیفیت کالا 
        </span>
     </div>
      </div>

   
    </div>
     );
}
 
export default TopMobileSlider;