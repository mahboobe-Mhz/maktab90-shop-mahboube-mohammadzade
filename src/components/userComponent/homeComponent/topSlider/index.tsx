
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import FlashIcon from '../../../svg/flashIcon';
const TopSwiper = () => {
  
    return (
    <div className='topSliderBox relative , w-[80%px] rounded-[30px]' >
       <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}

   
      >
             <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"500px"}} 
              src='public/picture/banner2.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-[30px]' style={{width:"100%", height:"500px"}} 
        src='public/picture/IMG_7177.JPG'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px]' style={{width:"100%", height:"500px"}}
         src='public/picture/bannerj.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px]' style={{width:"100%", height:"500px"}}
          src='public/picture/banner-01.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[70px] z-20 right-[50px]'>
        <div className="flex gap-5">
        <span 
         className=" nextPage hover:cursor-pointer focus:outline-none"  > 
          <FlashIcon height={40} width={40} className="  border  p-1 border-black  rounded-full hover:border-secondary" /></span>
        <span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon height={40} width={40} className=" rotate-180 border  p-1 border-black  rounded-full hover:border-secondary" /></span>
    
    </div>
        </div>
   
   
      </Swiper>
      <div className=' md:firstDetail  firstDetail2 absolute top-[200px] left-[-15px] z-10 rounded-full p-3 bg-white'>
      <div className='flex flex-col items-center bg-white rounded-full pb-2 px-6 border-2 border-black' >
      <span className='md:text-xl text-[7px] font-semibold text-secondary'> ارسال سریع</span>
      <span className='md:text-xs text-[5px] text-secondary'> ارسال کالا در سریعترین زمان</span>
      </div>
      </div>
      <div className='md:secondDetail secondDetail2 absolute bottom-[-15px] right-[-10px] z-10 rounded-full p-3 bg-white '>
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