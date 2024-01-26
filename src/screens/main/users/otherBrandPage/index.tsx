import React, { useState } from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'

import OtherBrandProductCard from '../../../../components/userComponent/homeStore/otherBrandProductCard'
import FlashIcon from '../../../../components/svg/flashIcon'
import ColleagueContentCart from '../../../../components/userComponent/colleagueContentCart'

function OtherBrandPage() {
  const [showProducts ,setShowProducts ]=useState(true)
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
    <div>
      <MainHeader/>
      <div className=' container mx-auto' dir='rtl'>
        <div>
        <img src="public\picture\posterCategory.png" alt="" />
        <img src="public\picture\28993615.png" className='md:w-[200px] w-[100px] absolute z-20 md:top-[200px] top-[10%] left-[42%] bg-white border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
        <div className='flex justify-between md:px-16 px-2 md:pt-1 pt-10 flex-wrap'>
          <div className='flex flex-col'>
          <span  className=''>آدرس خیابان زرگری  حدفاصل کوچه ۱۷و۱۹</span>
          {showProducts?  <div>
           <span onClick={()=>setShowProducts(true)} className='text-secondary md:text-2xl text-lg hover:cursor-pointer'> محصولات</span>
           <span> /</span>
           <span onClick={()=>setShowProducts(false)} className='md:text-2xl text-lg hover:cursor-pointer'> محتوی</span>
          </div> :  <div>
           <span onClick={()=>setShowProducts(true)} className=' md:text-2xl text-lg hover:cursor-pointer'> محصولات</span>
           <span> /</span>
           <span onClick={()=>setShowProducts(false)} className= 'text-secondary md:text-2xl text-lg hover:cursor-pointer'> محتوی</span>
          </div>}
        
          </div>
 
           <span className=''> شماره تماس ۰۷۱۱۲۳۲۳۲۳-۰۷۱۱۲۳۲۳۲۳-۰۷۱۱۲۳۲۳۲۳</span>
           </div>

        </div>
        {
          showProducts ?   
          <div>
          <div className='flex flex-wrap md:px-16 px-2 justify-center md:gap-12 gap-5 md:pt-24 pt-10 pb-10'>
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
       <OtherBrandProductCard productSelect={productSample} />
  
  
  
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
        :     <div>
        <div className='flex flex-wrap md:px-16 px-2 justify-center md:gap-12 gap-5 md:pt-24 pt-10 pb-10'>
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
        }
    
        </div>
  
      <MainFooter/>
    </div>
  )
}

export default OtherBrandPage