
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
             <SwiperSlide><img className='rounded-3xl md:h-[500px] h-[300px]'
              src='public/picture/banner2.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-[30px] w-full md:h-[500px] h-[300px]' 
        src='public/picture/IMG_7177.JPG'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px] md:h-[500px] h-[300px]' 
         src='public/picture/bannerj.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-[30px] md:h-[500px] h-[300px]' 
          src='public/picture/banner-01.jpg'/></SwiperSlide>
        <div className=' absolute md:bottom-[70px]  md:right-[40px] bottom-[50px]  right-[20px]   z-20'>
        <div className="flex md:gap-5 gap-2">
        <span 
         className=" nextPage hover:cursor-pointer focus:outline-none"  > 
          <FlashIcon className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px] border  p-1 border-black  rounded-full hover:border-secondary" /></span>
        <span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon className="md:w-[40px] md:h-[40px] w-[20px] h-[20px] rotate-180 border  p-1 border-black  rounded-full hover:border-secondary" /></span>
    
    </div>
        </div>
   
   
      </Swiper>
      <div className=' firstDetail hidden md:flex  absolute top-[200px] left-[-15px] z-10 rounded-full p-3 bg-white'>
      <div className='flex flex-col items-center bg-white rounded-full pb-2 px-6 border-2 border-black' >
      <span className='md:text-xl text-[7px] font-semibold text-secondary'> ارسال سریع</span>
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
      <div className=' firstDetail2 md:hidden absolute top-[100px] left-[-15px] z-10 rounded-full p-2 bg-white'>
      <div className='flex flex-col items-center bg-white rounded-full pb-2 px-6 border-2 border-black' >
      <span className='md:text-xl text-[7px] font-semibold text-secondary'> ارسال سریع</span>
      <span className='md:text-xs text-[5px] text-secondary'> ارسال کالا در سریعترین زمان</span>
      </div>
      </div>
      <div className='secondDetail2  md:hidden absolute bottom-[-15px] right-[-10px] z-10 rounded-full p-2 bg-white '>
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