import React from "react";
import ProductsSlider from "./sliderProducts";

const SearchProducts = () => {
    return ( <div className="flex flex-col items-center md:mt-10">
        <h1 className="text-secondary md:text-4xl text-3xl font-bold md:mb-5">جستجوی محصول</h1>
        <div  className=" relative md:mt-10  mt-6 flex gap-2 md:gap-5">
            <button className="relative  focus:bg-secondary focus:text-white focus:outline-none
             focus:ring-none border-2 px-2
             rounded-full pb-1 font-semibold border-secondary text-xs md:text-lg" >محصولات پرفروش</button>
            <button className="relative focus:bg-secondary focus:text-white  focus:outline-none focus:ring-none border-2 px-2
             rounded-full pb-1 font-semibold border-secondary text-xs md:text-lg" > تخفیفات ویژه</button>
            <button className="relative  focus:bg-secondary focus:text-white focus:outline-none focus:ring-none border-2 px-2
             rounded-full pb-1 font-semibold border-secondary text-xs md:text-lg" >جدیدترین محصولات  </button>
            
        </div>
        <div className="w-[100%] flex items-center justify-center  mt-6 ">
            <ProductsSlider/>
        </div>
    </div> );
}
 
export default SearchProducts;