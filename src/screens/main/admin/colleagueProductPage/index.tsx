import React, { useState } from 'react'
import ColleagueProductTable from '../../../../components/adminComponent/colleagueProductTable'
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader'
import ShowOrderTableBox from '../../../../components/adminComponent/colleagueOrderTable'

function ColleagueProductPage() {
  const [state , setState]=useState("محصولات")
  return (
    <div dir='rtl' className='  overflow-auto no-scrollbar'>
       <AddHomeStoreInfoHeader/>
       <div> 
        <button  className='border-2 px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer' onClick={()=>setState("محصولات")}> محصولات </button> 
        <span>/</span>
        <button className='border-2 px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer'  onClick={()=>setState("سفارشات")}> سفارشات </button>
       </div>
       {
        state==="محصولات"?   <ColleagueProductTable/> :<ShowOrderTableBox/>
       }
     
    </div>
  )
}

export default ColleagueProductPage