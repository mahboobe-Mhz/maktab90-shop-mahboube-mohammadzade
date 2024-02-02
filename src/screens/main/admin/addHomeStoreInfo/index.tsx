import React, { useState } from 'react'
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function AddHomeStoreInfo() {
  const [logoImage, setLogoImage]=useState<string>()
  const [bannerImage, setBannerImage]=useState<string>()

  const asnaf = [
    { label: "لوازم خانگی"},
    { label: "فرش"},
  
  ];
  const handleBannerSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
         const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
         setBannerImage(filesArray[0])               
           } }
           const handleLogoSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
            if(event.target.files){
                 const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
                 setLogoImage(filesArray[0])               
                   } }

  return (
    <div dir='rtl' >
       <AddHomeStoreInfoHeader/>
        <div className='p-5'>
        <div className='flex gap-10 md:flex-row flex-col '>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> نام فروشگاه</label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  شماره تماس فروشگاه</label>
    <input type="number" className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <div className='flex gap-10 md:flex-row flex-col '>

   
        <Autocomplete
      disablePortal

      options={asnaf}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="صنف" variant='standard' />}
    />



<label className='pr-2' htmlFor="">  نام شهر</label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />

 
        </div>
        <div className='flex gap-10 md:flex-row flex-col mt-5'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> تعداد سال خدمات پس از فروش </label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">    تعداد سال سابقه</label>
    <input type="number" className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <div className='flex gap-10 md:flex-row flex-col mt-5'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  لوگو فروشگاه</label>
    <input type='file'     name="images"
     className='border border-secondary rounded-full px-3 py-1' 
     onChange={handleLogoSelect}  
     />
{

  <img className='w-[250px] mt-3' src={logoImage}/>
  
}
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> بنر فروشگاه</label>
    <input type='file'     name="images"
     className='border border-secondary rounded-full px-3 py-1' 
     onChange={handleBannerSelect}  
     />
{

  <img className='w-[250px] mt-3' src={bannerImage}/>
  
}
  </div>
        </div>
        <div className='flex gap-10 md:flex-row flex-col mt-5'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">   آدرس فروشگاه</label>
    <textarea className='border border-secondary rounded-full px-3 py-1 ' />
          </div>
        </div>
        <div className='flex gap-1 md:flex-row flex-col justify-center items-center'></div>
        <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5'> ثبت</button>
        <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5 mr-2'> ویرایش</button>
        </div>

    </div>
  )
}

export default AddHomeStoreInfo