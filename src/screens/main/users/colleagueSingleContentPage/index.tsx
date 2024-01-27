import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import SingleProductSlider from "../../../../components/userComponent/singleProductSlider";

import "react-toastify/dist/ReactToastify.css";



const OtherBrandSingleProductPage = () => {
  const initialProduct =  {
    "rating": {
        "rate": 0,
        "count": 0
    },
    "_id": "",
    "category": {
        "_id": "",
        "name": " ",
        "icon": "",
        "createdAt": "",
        "updatedAt": "",
        "slugname":"",
        "__v": 0
    },
    "subcategory": {
        "_id": "",
        "category": "",
        "name": "",
        "createdAt": "",
        "updatedAt": "",
        "slugname": "",
        "__v": 0
    },
    "name": "",
    "price": 0,
    "quantity": 0,
    "brand": " ",
    "description": "",
    "thumbnail": "",
    "images": [
        ""
    ],
    "createdAt": "",
    "updatedAt":"",
    "slugname": ""
}
 const [showDescription, setShowDescription]=useState(false)
 const [showMoreDescription, setShowMoreDescription]=useState(false)


  const useParam = useParams();



const selectProduct= {
    "rating": {
        "rate": 0,
        "count": 0
    },
    "_id": "649980210d81c12153062f7f",
    "category": {
        "_id": "649978c10d81c12153062d42",
        "name": "مبلمان اداری",
        "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
        "createdAt": "2023-06-26T11:38:41.077Z",
        "updatedAt": "2023-06-26T11:38:41.243Z",
        "slugname": "mblman-adary",
        "__v": 0
    },
    "subcategory": {
        "_id": "64997b300d81c12153062dc6",
        "category": "649978c10d81c12153062d42",
        "name": "صندلی مدیرتی ومعاونتی",
        "createdAt": "2023-06-26T11:49:04.974Z",
        "updatedAt": "2023-06-26T11:49:04.974Z",
        "slugname": "sndly-mdyrty-wmaawnty",
        "__v": 0
    },
    "name": "صندلی مدیریتی مدل M2018F",
    "price": 5600000,
    "quantity": 10,
    "brand": "هوم نت",
    "description": "<ul><li>دسته ثابت آلومینیوم با پد انتگرال – مکانیزم دو دسته کلاجی</li><li>رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.</li><li>24 ماه ضمانت و خدمات پس از فروش</li><li>مدت زمان تحویل: 12 روز کاری</li></ul>",
    "thumbnail": "products-649980210d81c12153062f7f-1687781409329.jpeg",
    "images": [
        "products-649980210d81c12153062f7f-1687781409337-1.jpeg"
    ],
    "createdAt": "2023-06-26T12:10:09.326Z",
    "updatedAt": "2023-06-26T12:10:09.379Z",
    "slugname": "sndly-mdyryty-mdl-m2018f"
}




  return (
    <div dir="rtl">
      <MainHeader />
      <div className="flex flex-col gap-2 py-10 container mx-auto px-2">
        <div className=" flex md:gap-20 flex-col md:flex-row">
          <div className="md:w-[50%] ">
            <SingleProductSlider selectProduct={selectProduct} />
          </div>
          <div className="flex flex-col gap-5 md:w-[50%] mt-5 md:mt-0">
            <h1 className="md:text-2xl font-bold text-lg"> {selectProduct?.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: selectProduct?.description }}
            />

        
        
          </div>
        </div>
        <div className="mt-10">
          <span onClick={()=>setShowDescription(!showDescription)} className="flex justify-between border-b-2 border-black mb-2">
          <span className="font-bold">جزییات محصول</span>
            {showDescription? <span className="text-secondary font-semibold  text-2xl  hover:cursor-pointer"> −</span> :<span className="font-semibold  text-2xl hover:cursor-pointer"> +</span>}
          </span>
          {showDescription?<div className="border border-black rounded-xl mt-2 p-2  mb-2">
              <span>محصولی با مواد اولیه عالی</span>
          </div>:""}
          
       
  
          <span onClick={()=>setShowMoreDescription(!showMoreDescription)} className="flex justify-between border-b-2 border-black  ">
          <span className="font-bold ">جزییات بیشتر </span>
            {showMoreDescription? <span className="text-secondary font-semibold  text-2xl hover:cursor-pointer "> −</span> :<span className="font-semibold hover:cursor-pointer text-2xl "> +</span>}
          </span>
          {showMoreDescription?<div className="border border-black rounded-xl mt-2 p-2  ">
              <span>محصولی با مواد اولیه عالی</span>
          </div>:""}
        </div>
       
      </div>
      <div dir='rtl'>
    <MainFooter />
    </div>
    </div>
  );
};

export default OtherBrandSingleProductPage;
