import React from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'
import FlashIcon from '../../../../components/svg/flashIcon'

function HomeStore() {
  return (
    <div>
        <MainHeader/>
        <div className='pt-4 px-4 flex flex-col'>
        <img src="public\picture\home-01.png" alt="" />
        <div className='py-5 flex flex-wrap gap-7'>
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl  shadow-gray-500 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
            <img src="public\picture\28993615.png" className='w-[200px] border px-3 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] shadow-gray-500 hover:cursor-pointer' alt="" />
        </div>
        <div className='flex gap-5 justify-center py-4'>
            <span>۱</span>
            <span>۲</span>
            <span>۳</span>
            <span>...</span>
            <span>۴۳</span>
            <span className='flex gap-3'> صفحه بعد     <FlashIcon className=' w-[20px] pt-1'/></span>
         
        </div>
        </div>

        <MainFooter/>
    </div>
  )
}

export default HomeStore