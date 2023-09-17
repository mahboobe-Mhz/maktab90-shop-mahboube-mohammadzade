import React, { useState } from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'
import DashboardCom from '../../../../components/userComponent/dashboardComponent/dashboard'
import OrderClient from '../../../../components/userComponent/dashboardComponent/orderClient'
import UserInformation from '../../../../components/userComponent/dashboardComponent/userInformation'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
        const [state , setState]=useState("داشبورد")
        const navigate =useNavigate()
    const dashboardData=["داشبورد","سفارشات","ویرایش اطلاعات"]
        const handleGoHome=()=>{
      navigate("/")  }
  return (
    <div>
      <MainHeader/>
      <div>
        <div className='flex gap-5 justify-center mt-10 flex-wrap' dir='rtl'> 
            {
                dashboardData.map((item:string)=> 
                    state===item? <span onClick={()=>setState(item)} className='bg-secondary px-10 py-1 rounded-full text-white hover:cursor-pointer'>
                    {item}
                </span>:    <span onClick={()=>setState(item)} className='border border-secondary bg-white px-10 py-1 rounded-full text-black hover:cursor-pointer'>
               {item}
            </span>
                )
            }
            <span onClick={handleGoHome} className='border border-secondary bg-white px-10 py-1 rounded-full text-black hover:cursor-pointer'> خروج</span>
        </div>
   {
    state === "داشبورد"? <DashboardCom/> :
    state === "سفارشات" ?  <OrderClient/> :
    state==="ویرایش اطلاعات" ?  <UserInformation/>:""
   }
    

      </div>
      <MainFooter/>
    </div>
  )
}

export default Dashboard