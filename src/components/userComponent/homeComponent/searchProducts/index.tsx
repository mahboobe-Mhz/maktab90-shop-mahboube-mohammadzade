import React from "react";
import ProductsSlider from "./sliderProducts";

const SearchProducts = () => {
    const [state, setState]=React.useState("تخفیفات ویژه")
    const productsSort= ["محصولات پرفروش", "تخفیفات ویژه","جدیدترین محصولات"]
    return ( <div className="flex flex-col items-center md:mt-10">
        <h1 className="text-secondary md:text-4xl text-3xl font-bold md:mb-5">جستجوی محصول</h1>
        <div  className=" relative md:mt-10  mt-6 flex gap-2 md:gap-5">
            {
                productsSort.map((item:string, index:number)=>
                state===item?<span key={index} onClick={()=>setState(item)}  className="relative 
               border-2 border-secondary px-2 cursor-pointer
                rounded-full pb-1 font-semibold bg-secondary text-white text-xs md:text-lg" >{item} </span>:
                <span key={index} onClick={()=>setState(item)}  className="relative  
              border-2 px-2 cursor-pointer
                rounded-full pb-1 font-semibold border-secondary text-xs md:text-lg" > {item}</span>)
            }
    
            
        </div>
        <div className="w-[100%] flex items-center justify-center  mt-6 ">
            <ProductsSlider/>
        </div>
    </div> );
}
 
export default SearchProducts;