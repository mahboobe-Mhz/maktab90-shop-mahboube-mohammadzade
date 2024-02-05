import React, { useEffect, useState } from "react";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Stores from "../../../../components/userComponent/homeStoreComponent/stores";
import DailyProducts from "../../../../components/userComponent/homeStoreComponent/dailyproducts";
import DailyContent from "../../../../components/userComponent/homeStoreComponent/dailyContent";
function HomeStore() {

  const useParam = useParams();
  const catId = useParam.id?.split("_")[0];

  const [productsState, setProductsState] = useState<string|undefined>("فروشگاه ها");
useEffect(()=>{
  setProductsState(catId)
},[])
  
  const productsSort= ["محصولات روزانه" ," محتوی روزانه","فروشگاه ها"]
  return (
    <div>
      <MainHeader />
      <div className="pt-5 container mx-auto flex flex-col">
        <img src="/public\picture\home-01.png" alt="" />
        <div  className=" relative md:mt-10  mt-6 flex justify-around">
            {
                productsSort.map((item:string, index:number)=>
                productsState===item?<Link to={`/homeStore/${item}`} key={index} onClick={()=>setProductsState(item)}  className="relative 
               border-2 border-secondary px-2 cursor-pointer
                rounded-full pb-1 font-semibold bg-secondary text-white text-xs md:text-lg" >{item} </Link>:
                <Link to={`/homeStore/${item}`} key={index} onClick={()=>setProductsState(item)}  className="relative  
              border-2 px-2 cursor-pointer
                rounded-full pb-1 font-semibold border-secondary text-xs md:text-lg" > {item}</Link>)
            }
    
            
        </div>
        {
          productsState=== "فروشگاه ها"?  <Stores/> : productsState === " محتوی روزانه"?<DailyContent/>  :<DailyProducts/> 
        }
     
       
        

        
      </div>

      <MainFooter />
    </div>
  );
}

export default HomeStore;
