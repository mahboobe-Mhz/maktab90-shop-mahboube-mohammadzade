import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { LeftArrow, RightArrow } from '../../../kit/Arrow';
import FlashIcon from '../../../svg/flashIcon';
interface Props{
  setCounter:any
  counter:number
}
const BottomSlider = ({setCounter,counter}:Props) => {
 
    return (
    <div className=' relative , md:w-[50%] ,md:h-[400px] ' >
       <Swiper
        spaceBetween={0}
       // slidesPerView="auto"
       allowTouchMove={false}
      
        modules={[Navigation ]}
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}

   
      >
             <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"300px"}}  src='public\picture\اسلایدر\00fe78a222800eb8e087a96ba9e3d241-1.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-3xl' style={{width:"100%", height:"300px"}} src='public\picture\اسلایدر\russian-wood.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"300px"}} src='public\picture\اسلایدر\1ae6337b4d41880f0075ab5f693f7c41.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"300px"}}  src='public\picture\اسلایدر\02.png'/></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl' style={{width:"100%", height:"300px"}}  src='public\picture\اسلایدر\DSC_2436.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[10px] z-10 right-[10px]'>
        <div className="flex gap-5">
        <span  onClick={()=>{ counter>0 && setCounter(counter-1)}} 
        className=" pervPage hover:cursor-pointer focus:outline-none" >   <FlashIcon height={40} width={40} className=" rotate-180  border  p-1 border-black  rounded-full hover:border-secondary" /></span>
        <span 
        onClick={()=>{counter<4 && setCounter( counter+1)}}
         className=" nextPage hover:cursor-pointer focus:outline-none"  >   <FlashIcon height={40} width={40} className="  border  p-1 border-black  rounded-full hover:border-secondary" /></span>
       
    
    </div>
        </div>
   
   
      </Swiper>
  
      
   
    </div>
     );
}
 
export default BottomSlider;