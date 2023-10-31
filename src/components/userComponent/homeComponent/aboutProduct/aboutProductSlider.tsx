import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import FlashIcon from '../../../svg/flashIcon';
interface Props{
  setCounter:(counter:number)=>void
  counter:number
}
const BottomSlider = ({setCounter,counter}:Props) => {
 
    return (
    <div className=' relative md:rounded-3xl rounded-none  md:w-[500px] md:h-[500px] h-[60px] w-[360px]' >
       <Swiper
       centeredSlides={true}
       // slidesPerView="auto"
       allowTouchMove={false}
       spaceBetween={10} 
       slidesPerView={2}
       speed={2000}
    
       breakpoints={{
        500: {
          spaceBetween:2,
          slidesPerView: 1,
      
          speed:2000
        },
     
      }}
        modules={[Navigation ]}
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}
       className='md:rounded-3xl rounded-none'
   
      >
             <SwiperSlide><img className=' md:w-[500px] md:h-[500px] h-[180px] w-[320px] md:rounded-none rounded-3xl'    src='public/picture/IMG_7164.JPG'/></SwiperSlide>
             <SwiperSlide><img className=' md:w-[500px] md:h-[500px] h-[180px] w-[320px] md:rounded-none rounded-3xl'   src='public/picture/IMG_7164.JPG'/></SwiperSlide>
             <SwiperSlide><img className=' md:w-[500px] md:h-[500px] h-[180px] w-[320px] md:rounded-none rounded-3xl'   src='public/picture/IMG_7164.JPG'/></SwiperSlide>
             <SwiperSlide><img className=' md:w-[500px] md:h-[500px] h-[180px] w-[320px] md:rounded-none rounded-3xl'   src='public/picture/IMG_7164.JPG'/></SwiperSlide>
    
        <div className=' absolute bottom-[50%] z-10 w-full px-5'>
        <div className="flex md:gap-5 gap-2 justify-between ">
        <span  onClick={()=>{ counter>0 && setCounter(counter-1)}} 
        className="  nextPage hover:cursor-pointer focus:outline-none" >  
         <FlashIcon  className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px] rotate-180
          border  p-1 border-black 
         rounded-full hover:border-secondary transition duration-300 " /></span>
        <span 
        onClick={()=>{counter<4 && setCounter( counter+1)}}
         className=" pervPage hover:cursor-pointer focus:outline-none"  >  
          <FlashIcon  className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px] border 
          p-1 border-black  rounded-full hover:border-secondary transition duration-300  " /></span>
       
    
    </div>
        </div>
   
   
      </Swiper>
  
      
   
    </div>
     );
}
 
export default BottomSlider;