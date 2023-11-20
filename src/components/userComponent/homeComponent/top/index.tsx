import React from "react";
import TopSwiper from "../topSlider";
import TopMobileSlider from "../topSlider/topMobileSlider";

const TopOfHome = () => {
    return ( <div className="flex justify-center">
<div className=" w-[100%] pl-1 md:flex hidden "> <TopSwiper/></div>
<div className=" w-[100%] pl-1 md:hidden flex "> <TopMobileSlider/></div>
    
    </div> );
}
 
export default TopOfHome;