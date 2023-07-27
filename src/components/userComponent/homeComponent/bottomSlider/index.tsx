import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import FlashIcon from '../../../svg/flashIcon';
interface Props{
  setCounter:any
  counter:number
}
const BottomSlider = ({setCounter,counter}:Props) => {
 
    return (
    <div className=' relative , md:w-[50%] ,md:h-[400px] h-[200px]' >
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
             <SwiperSlide><img className='rounded-3xl w-[100%] md:h-[300px] h-[200px]'   src='public\picture\اسلایدر\00fe78a222800eb8e087a96ba9e3d241-1.jpg'/></SwiperSlide>
        <SwiperSlide ><img className='rounded-3xl md:h-[300px] h-[200px]'  src='public\picture\اسلایدر\russian-wood.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl md:h-[300px] h-[200px]'  src='public\picture\اسلایدر\1ae6337b4d41880f0075ab5f693f7c41.jpg'/></SwiperSlide>
   
        <SwiperSlide><img className='rounded-3xl md:h-[300px] h-[200px]'   src='public\picture\اسلایدر\02.png'/></SwiperSlide>
        <SwiperSlide><img className='rounded-3xl md:h-[300px] h-[200px]'   src='public\picture\اسلایدر\DSC_2436.jpg'/></SwiperSlide>
        <div className=' absolute bottom-[30px] z-10 right-[10px]'>
        <div className="flex md:gap-5 gap-2">
        <span  onClick={()=>{ counter>0 && setCounter(counter-1)}} 
        className=" pervPage hover:cursor-pointer focus:outline-none" >   <FlashIcon  className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px] rotate-180  border  p-1 border-black  rounded-full hover:border-secondary" /></span>
        <span 
        onClick={()=>{counter<4 && setCounter( counter+1)}}
         className=" nextPage hover:cursor-pointer focus:outline-none"  >   <FlashIcon  className=" md:w-[40px] md:h-[40px] w-[20px] h-[20px] border  p-1 border-black  rounded-full hover:border-secondary" /></span>
       
    
    </div>
        </div>
   
   
      </Swiper>
  
      
   
    </div>
     );
}
 
export default BottomSlider;