import React, { useState } from 'react'


function SuperAdminDashboard() {
    const [adminName,setAdminName]=useState("")
    const [adminPhoneNumber,setAdminPhoneNumber]=useState(0)
    const [adminInfo , setAdminInfo]=useState<{adminName:string,adminPhoneNumber:number }[]>([])
    const handleInsertAdmin =()=>{
            const adminData={
                adminName:adminName,
                adminPhoneNumber:adminPhoneNumber
            }
            setAdminInfo([...adminInfo,adminData])
    }
    const handleDeleteAdminInfo =(event:any)=>{
  
           const newAdminInfo= adminInfo.filter((item:any)=> item.adminName !== event.target.id)
            setAdminInfo(newAdminInfo)      
    }
  return (
    <div>
          <form dir='rtl' className='flex flex-col gap-5 border p-10 border-gray-500 rounded-2xl bg-gray-50 mt-24 md:mt-0'>
        <div className='flex gap-10 md:flex-row flex-col'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> نام فروشگاه</label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  شماره تماس فروشگاه</label>
    <input type="number" className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <div className='flex gap-10 md:flex-row flex-col'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  لوگو فروشگاه</label>
    <input type="file" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> بنر فروشگاه</label>
    <input type='file'  className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <div className='flex gap-10'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">   آدرس فروشگاه</label>
    <textarea className='border border-secondary rounded-full px-3 py-1' />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
            {
                adminInfo.length>0 && adminInfo.map((item:any,index:number)=>
                <div className='flex gap-2' key={index} >
                    <span> {item.adminName}</span>
                    <span>{item.adminPhoneNumber}</span>
                    <span id={item.adminName} className='text-secondary mr-10 hover:cursor-pointer' onClick={handleDeleteAdminInfo}> X</span>
                </div>
                
                )
            }
        </div>
        <div className='flex md:gap-10 gap-5 md:flex-row flex-col'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  نام ادمین</label>
    <input type="text" onChange={(e)=>setAdminName(e.currentTarget.value)} className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">    شماره تلفن ادمین</label>
    <input type="number" onChange={(e)=>setAdminPhoneNumber(+e.currentTarget.value)} className='border border-secondary rounded-full px-3 py-1' />
  </div>
        <button onClick={handleInsertAdmin} className='bg-secondary text-white rounded-full md:px-10 h-[40px] md:mt-4'> +</button>
        </div>
<button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5'> ثبت</button>
    </form>
    </div>
  
  )
}

export default SuperAdminDashboard