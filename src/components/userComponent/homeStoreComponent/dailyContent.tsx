import React, { useState } from 'react'

import Rating from '@mui/material/Rating';
import ColleagueContentCart from '../colleagueContentCart';
import FlashIcon from '../../svg/flashIcon';


function DailyContent() {
  const [showProducts ,setShowProducts ]=useState(true)
  const [openModal,setOpenModal]=useState(false)
  const productSample=   {
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

      <div className=' container mx-auto' dir='rtl'>
  
      
    
            <div>
        <div className='flex flex-wrap md:px-16 px-2 justify-center md:gap-12 gap-5  pt-10 pb-10 '>
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />
     <ColleagueContentCart productSelect={productSample} />



     </div>
     <div className='flex gap-5 justify-center pb-5' dir='ltr'>
            <span>۱</span>
            <span>۲</span>
            <span>۳</span>
            <span>...</span>
            <span>۴۳</span>
            <span className='flex gap-3'> صفحه بعد     <FlashIcon className=' w-[20px] pt-1'/></span>
         
        </div>
      </div>
      
    
        </div>


  )
}

export default DailyContent