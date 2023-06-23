import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import useGetAllProducts from "../../../../api/services/products/useGetAllProducts";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import ProductCart from "../../../../components/userComponent/productCart";

const CategoryScreen = () => {
  //  const locationParams = useLocation();
    //const searchParams=useSearchParams()
     //   const url = window.location.href;
    const useParam=useParams()
  const catName=useParam.id?.split("_")[0]
    
const[selectProduct,setSelectProduct]=useState([])

useEffect(()=>{
 
axios.get(`http://localhost:8000/api/products?category=${catName}`).then(res=>setSelectProduct(res.data.data.products))

},[useParam])



    return ( 
    <div dir="rtl" > 
         <MainHeader />
         <div className="mx-2">
         <div className="mt-5">
         <img width="100%" className="rounded-3xl h-[200px]" src="/picture/تصویربالایصفحه.png"/>
         </div>

<div className="flex mt-10">
  <div className="w-[300px]">
    <h1 className="text-xl font-semibold  border-b-2 border-black pb-2"> دسته بندی محصولات</h1>
    <div className="mt-3 flax flex-col gap-1 ">
    <div className="mb-2">
    <input type="checkbox"/>
      <span> صندلی اموزشی کودک</span>
    </div>
    <div  className="mb-2" >
    <input type="checkbox"/>
      <span> صندلی اموزشی کودک</span>
    </div>
    <div  className="mb-2" >
    <input type="checkbox"/>
      <span> صندلی اموزشی کودک</span>
    </div>
    </div>
  </div>
  <div className="px-10 flex  gap-5">
    {selectProduct.map(item=>   <ProductCart  photo={item.images[0]} name={item.name} price={item.price}/>)}
 
  </div>
</div>
    </div>
    <img src="/picture/footer.png"/>
    </div>
    );
}
 
export default CategoryScreen;