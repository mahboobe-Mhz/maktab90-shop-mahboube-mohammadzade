import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
interface Props{
  selectProduct:any
}

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import FlashIcon from "../../svg/flashIcon";

export default function SingleProductSlider({selectProduct}:Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" md:w-[400px]">
      <Swiper
     
        navigation={{
          prevEl:`.pervPage` ,
          nextEl:`.nextPage`
        }}

   speed={2000}
        loop={true}
        spaceBetween={10}
     //   navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" rounded-3xl "
      >
         {selectProduct.images?.map(item =>
                  <SwiperSlide>
        
         <img className="object-contain"src={`http://localhost:8000/images/products/images/${item}`}/>
      
                
                  </SwiperSlide>
               )}
      <div className=' absolute md:bottom-[50%]   bottom-[50%]   w-full z-20'>
        <div className="flex  justify-between pl-4">

          <FlashIcon className="z-50 nextPage md:w-[50px] md:h-[50px] w-[30px] h-[30px] transition 
          duration-300 p-1 border-white fill-black  rounded-full hover:border-secondary
           hover:fill-[#fd6e54]" />

        <FlashIcon className="z-50 pervPage md:w-[50px] md:h-[50px] w-[30px] h-[30px] rotate-180 
         p-1 border-white fill-black rounded-full hover:border-secondary
          hover:fill-[#fd6e54]" />
    
    </div>
        </div>
      </Swiper>
      <Swiper
      style={{marginTop:"15px"}}
       onClick={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" rounded-3xl"
      >
         {selectProduct.images?.map(item =>
                  <SwiperSlide>
         
                  <img className=""src={`http://localhost:8000/images/products/images/${item}`}/>
                  </SwiperSlide>
               )}
      
      </Swiper>
    </div>
  );
}
