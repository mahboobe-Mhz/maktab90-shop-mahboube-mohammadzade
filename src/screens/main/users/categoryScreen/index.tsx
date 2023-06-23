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
  const catId=useParam.id?.split("_")[0]

    
const[selectProduct,setSelectProduct]=useState([])
const[selectCategory,setSelectCategory]=useState([])
const[selectSubCategory,setSelectSubCategory]=useState([])

useEffect(()=>{
 
axios.get(`http://localhost:8000/api/products?category=${catName}`).then(res=>setSelectProduct(res.data.data.products))
axios.get(`http://localhost:8000/api/categories/${catId}`).then(res=>setSelectCategory(res.data.data.category))
axios.get(`http://localhost:8000/api/subcategories?category=${catId}`).then(res=>setSelectSubCategory(res.data.data.subcategories))

},[useParam])



    return ( 
    <div dir="rtl" > 
         <MainHeader />
         <div className="mx-2">
         <div className="mt-5 relative">
    <img width="100%" className="rounded-3xl h-[200px]" src={`http://localhost:8000/images/categories/icons/${selectCategory.icon}`}/> 
    <h1 className="absolute z-10 bottom-20 left-3 text-2xl font-bold text-secondary ">{selectCategory.name}</h1>
         </div>

<div className="flex mt-10">
  <div className="w-[300px]">
    <h1 className="text-xl font-semibold  border-b-2 border-black pb-2"> دسته بندی محصولات</h1>
    <div className="mt-3 flax flex-col gap-1 ">
      {selectSubCategory.map(item=><div className="mb-2">
    <input type="checkbox"/>
      <span> {item.name}</span>
    </div> )}
    
  
   
    </div>
  </div>
  <div className="px-10 flex  gap-5">
    {selectProduct.map(item=>   <ProductCart  productSelect={item}/>)}
 
  </div>
</div>
    </div>
    <img src="/picture/footer.png"/>
    </div>
    );
}
 
export default CategoryScreen;