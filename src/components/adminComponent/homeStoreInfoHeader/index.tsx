import React from 'react'
import { Link } from 'react-router-dom'

function AddHomeStoreInfoHeader() {
  return (
    <div className=' '  dir='rtl'>
           <div className=' px-10 flex md:gap-5 gap-2 flex-wrap-reverse text-xs md:text-lg mb-5 bg-gray-200' >
        <Link to={"/admin/colleagueProductPage"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300 '> مدیریت فروشگاه </Link>
        <Link to={"/admin/superAdminDashboard"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن ادمین</Link>
        <Link to={"/admin/addHomeStoreInfo"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن اطلاعات فروشگاه</Link>
        <Link to={"/admin/identificationCode"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن کد معرف/ایجاد کاربر</Link>
        <Link to={"/admin/colleagueFactor"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      فاکتورها</Link>
      <Link to={"/"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      خروج</Link>
    </div>
    </div>
 
  )
}

export default AddHomeStoreInfoHeader