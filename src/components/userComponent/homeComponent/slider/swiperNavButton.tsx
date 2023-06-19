import { useSwiper } from "swiper/react";
import{ RightArrow , LeftArrow} from "../../../kit/Arrow";

const SwiperNavButton = () => {
    const swiper =useSwiper()
    return ( <div className="flex gap-5">
        <span className=" hover:cursor-pointer" onClick={()=>swiper.slidePrev}> <LeftArrow  /></span>
        <span  className=" hover:cursor-pointer"  onClick={()=>swiper.slideNext}> <RightArrow  /></span>
    </div> );
}
 
export default SwiperNavButton;