import React from 'react'

function AddHomeStoreInfo() {
  return (
    <div dir='rtl' >
        <div>
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
        <div className='flex flex-col gap-1'></div>
        </div>
        <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5'> ثبت</button>
        <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5 mr-2'> ویرایش</button>
    </div>
  )
}

export default AddHomeStoreInfo