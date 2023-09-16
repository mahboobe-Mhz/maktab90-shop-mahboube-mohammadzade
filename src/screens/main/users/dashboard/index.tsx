import React, { useState } from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'
import DashboardCom from '../../../../components/userComponent/dashboardComponent/dashboard'
import OrderClient from '../../../../components/userComponent/dashboardComponent/orderClient'

function Dashboard() {
        const [state , setState]=useState("داشبورد")
    const dashboardData=["داشبورد","سفارشات","ویرایش اطلاعات","خروج"]
  return (
    <div>
      <MainHeader/>
      <div>
        <div className='flex gap-5 justify-center mt-10' dir='rtl'> 
            {
                dashboardData.map((item:string)=> 
                    state===item? <span onClick={()=>setState(item)} className='bg-secondary px-10 py-1 rounded-full text-white hover:cursor-pointer'>
                    {item}
                </span>:    <span onClick={()=>setState(item)} className='border-2 border-secondary bg-white px-10 py-1 rounded-full text-black hover:cursor-pointer'>
               {item}
            </span>
                )
            }
            
        </div>
   
     {/* <DashboardCom/> */}
     <OrderClient/>
      </div>
      <MainFooter/>
    </div>
  )
}

export default Dashboard