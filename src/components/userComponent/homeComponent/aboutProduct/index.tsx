import { useState } from "react";
import BottomSlider from "../bottomSlider";
import MainButton from "../../../kit/button";
import FlashIcon from "../../../svg/flashIcon";

const AboutProduct = () => {
   const [counter,setCounter]=useState<number>(0)
    return ( <div className="p-14" dir="ltr">
        <div className="md:flex justify-between  gap-3 ">
        <BottomSlider setCounter={setCounter} counter={counter}/>
        {
        
        counter===0 ? 
        <div className="  flex flex-col text-right justify-center  h-[600px]" >
                <h1 className="md:text-5xl text-md  pb-3 pr-7 mt-3 md:mt-0 " > سرویس خواب لیو </h1>
                <div className="  flex flex-col px-7  " >
                <p className="font-semibold text-sm md:text-lg mt-5 text-right">
چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
                 </p>
                <button className="text-black border-2 font-semibold pl-4 pr-2 pt-2 pb-2 border-black flex rounded-full  gap-2 
                mt-5 w-[160px]">
                     <span className="text-lg">خرید محصول</span> <span><FlashIcon className=" w-[30px] "/> </span>  </button>
                </div>
              
            </div>
             :counter===1 ? 
             <div className="  flex flex-col text-right justify-center  h-[600px]" >
             <h1 className="md:text-5xl text-md  pb-3 pr-7 mt-3 md:mt-0 " > سرویس خواب تارا </h1>
             <div className="  flex flex-col px-7  " >
             <p className="font-semibold text-sm md:text-lg mt-5 text-right">
چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
              </p>
             <button className="text-black border-2 font-semibold pl-4 pr-2 pt-2 pb-2 border-black flex rounded-full  gap-2 
             mt-5 w-[160px]">
                  <span className="text-lg">خرید محصول</span> <span><FlashIcon className=" w-[30px] "/> </span>  </button>
             </div>
           
         </div> 
            :counter===2 ? 
            <div className="  flex flex-col text-right justify-center  h-[600px]" >
            <h1 className="md:text-5xl text-md  pb-3 pr-7 mt-3 md:mt-0 " > سرویس خواب نگار </h1>
            <div className="  flex flex-col px-7  " >
            <p className="font-semibold text-sm md:text-lg mt-5 text-right">
چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
             </p>
            <button className="text-black border-2 font-semibold pl-4 pr-2 pt-2 pb-2 border-black flex rounded-full  gap-2 
            mt-5 w-[160px]">
                 <span className="text-lg">خرید محصول</span> <span><FlashIcon className=" w-[30px] "/> </span>  </button>
            </div>
          
        </div>
            : counter===3? 
            <div className="  flex flex-col text-right justify-center  h-[600px]" >
                <h1 className="md:text-5xl text-md  pb-3 pr-7 mt-3 md:mt-0 " > سرویس خواب یاس </h1>
                <div className="  flex flex-col px-7  " >
                <p className="font-semibold text-sm md:text-lg mt-5 text-right">
چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
                 </p>
                <button className="text-black border-2 font-semibold pl-4 pr-2 pt-2 pb-2 border-black flex rounded-full  gap-2 
                mt-5 w-[160px]">
                     <span className="text-lg">خرید محصول</span> <span><FlashIcon className=" w-[30px] "/> </span>  </button>
                </div>
              
            </div>
            :counter===4 ?  
            <div className="  flex flex-col text-right justify-center  h-[600px]" >
                <h1 className="md:text-5xl text-md  pb-3 pr-7 mt-3 md:mt-0 " > سرویس خواب رز </h1>
                <div className="  flex flex-col px-7  " >
                <p className="font-semibold text-sm md:text-lg mt-5 text-right">
چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
                 </p>
                <button className="text-black border-2 font-semibold pl-4 pr-2 pt-2 pb-2 border-black flex rounded-full  gap-2 
                mt-5 w-[160px]">
                     <span className="text-lg">خرید محصول</span> <span><FlashIcon className=" w-[30px] "/> </span>  </button>
                </div>
              
            </div>
            :" "}
          
       
        </div>
       
         </div> );
}
 
export default AboutProduct;