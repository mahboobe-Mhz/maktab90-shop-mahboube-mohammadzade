import React, { useEffect, useState } from 'react'
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader'
import ColleagueIdentificationCode from '../../../../components/adminComponent/colleagueIdentificationCode'
import AddUser from '../../../../components/adminComponent/addUser'


function IdentificationCode() {
    const [state , setState]=useState("ایجاد کد معرف")

  return (
    <div>
               <AddHomeStoreInfoHeader/>

               <div className=' text-right p-5'> 
        <button    className='border-2 focus:outline-none px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer' onClick={()=>setState("ایجاد کد معرف")}> ایجاد کد معرف </button> 
        <span>/</span>
        <button className='border-2 focus:outline-none px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer'  onClick={()=>setState("ابجاد کاربر")}> ایجاد کاربر </button>
       </div>
    <div>
    {state==="ایجاد کد معرف" ?<ColleagueIdentificationCode/> : <AddUser/>}
    </div>
    </div>
  )
}

export default IdentificationCode