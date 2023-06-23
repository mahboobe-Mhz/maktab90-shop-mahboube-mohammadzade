import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import ProductCart from "../../../../components/userComponent/productCart";

const ShowSingleProduct = () => {
    const[selectProduct,setSelectProduct]=useState([])
const useParam=useParams()
const productId=useParam.id?.split("_")[0]
useEffect(()=>{

    axios.get(`http://localhost:8000/api/products/${productId}`).then(res=>{setSelectProduct(res.data.data.product)})
    
    },[useParam])

    
    return ( 
    <div dir="rtl"> 
         <MainHeader />
         <div className="flex flex-col gap-2 p-10">
  <div className=" flex gap-20 ">
    <div className="w-[50%]">
      <img className=""src={`http://localhost:8000/images/products/images/${selectProduct.images?.[0]}`}/>
      {/* <SingleProductSlider/> */}
    </div>
    <div className="flex flex-col gap-5 w-[50%]">
      <h1 className="text-2xl font-bold"> {selectProduct.name}</h1>
      <div
      dangerouslySetInnerHTML={{__html:selectProduct.description}}
      />
        
  
     
   <div className="flex flex-col w-full gap-2"> 
    <span className="border border-black rounded-full px-2 py-1">انتخاب رنگ</span>
    <span className="border border-black rounded-full px-2 py-1">انتخاب ابعاد</span>
   </div>
    <div className="flex justify-between  ">
      <span className="mt-2">  {selectProduct.price}  تومان</span>
      <div className="flex gap-10">
      <span className=" border border-black px-2 rounded-full "> 
        <span className="mx-3 font-bold text-xl "> - </span> <span className="mx-1 font-bold  "> 0</span> <span className="mx-3 font-bold text-xl "> +</span>
      </span>
      <button className="bg-secondary rounded-full px-4 py-1 pb-2 text-white"> افزودن به سبد خرید</button>
      </div>
    
    </div>
    </div>
  </div>
  <div className="mt-10">

    <span className="flex justify-between font-semibold border-b-2 border-black pb-2"><span>جزییات محصول</span> <span> +</span>  </span>
    <span className="flex justify-between font-semibold border-b-2 border-black pb-2"><span> نظرات</span> <span> +</span>  </span>
    <span className="flex justify-between font-semibold border-b-2 border-black pb-2"><span>جزییات بیشتر</span> <span> +</span>  </span>

  </div>
  <div>
    <h1>محصولات مشابه</h1>

  </div>
  </div>
    </div>
   );
}
 
export default ShowSingleProduct;