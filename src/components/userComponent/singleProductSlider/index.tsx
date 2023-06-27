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

export default function SingleProductSlider({selectProduct}:Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" w-[400px]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
     //   navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
         {selectProduct.images?.map(item =>
                  <SwiperSlide>
         
                  <img className=""src={`http://localhost:8000/images/products/images/${item}`}/>
                  </SwiperSlide>
               )}

      </Swiper>
      <Swiper
      style={{marginTop:"10px"}}
       onClick={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
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
