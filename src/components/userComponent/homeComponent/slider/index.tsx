
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { LeftArrow, RightArrow } from '../../../kit/Arrow';
const TopSwiper = () => {
  
    return (
    <div className=' relative , w-[80%px] ' >
       <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}

   
      >
             <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"500px"}}  src='public/picture/banner2.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-3xl' style={{width:"100%", height:"500px"}} src='public/picture/IMG_7177.JPG'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"500px"}} src='public/picture/bannerj.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"500px"}}  src='public/picture/banner-01.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[100px] z-10 right-[100px]'>
        <div className="flex gap-5">
        <span 
         className=" nextPage hover:cursor-pointer focus:outline-none"  > <RightArrow  /></span>
        <span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > <LeftArrow  /></span>
    
    </div>
        </div>
   
   
      </Swiper>
      <div className=' absolute top-[200px] z-10 rounded-full'>
      <div className='flex flex-col items-center bg-white rounded-full pb-2 px-6' >
      {/* <span className='text-xl font-semibold text-secondary'> ارسال سریع</span>
      <span className='text-xs text-secondary'> ارسال کالا در سریعترین زمان</span> */}
      </div>
      </div>
      
   
    {/* <span className= ' absolute bottom-[50px] right-[50px] bg-white text-xl font-semibold
     text-secondary rounded-full px-5 pt-1 pb-2 z-10 '> تضمین کیفیت کالا</span> */}
    </div>
     );
}
 
export default TopSwiper;