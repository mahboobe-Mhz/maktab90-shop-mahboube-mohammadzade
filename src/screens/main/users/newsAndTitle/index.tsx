import React from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'
import FlashIcon from '../../../../components/svg/flashIcon'
import PersonIcon from '../../../../components/svg/personIcon'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function NewsAndTitle() {
  return (
    <div>
        <MainHeader/>
        <div className='container mx-auto' dir='rtl'>
            <div>
                <img src="public\picture\posterCategory.png" alt="" />
                <h1 className='text-center text-secondary md:text-6xl text-2xl md:pt-5 pt-2  md:pb-10 pb-6'> اخبار و مقالات</h1>
            </div>
            <div className=' flex flex-col'>
                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 gap-1 pt-1
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>
                
                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>

                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>

                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>

                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>

                <div className=' md:flex  gap-3 border-t pt-3  mb-5 border-black px-10' >
                    <div className='flex gap-10 items-center '>
                    <img className='w-32 h-32 rounded-3xl border' src="public\picture\میزصندلی.jpg" alt="" />
                    <div className='md:hidden flex flex-col'>
              
                        <h2 className='md:text-2xl text-lg font-bold'> اسفنج ۴۰ کیلویی</h2>
               
                    <div className="flex flex-col  gap-1  pt-2 text-xs">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex  gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
                    </div>
            
                    </div>
              
                 <div className='flex flex-col '>
                    <div className=' grid grid-cols-1 md:grid-cols-3   '>
                        <div className='text-right pt-3 md:flex hidden'>
                        <h2 className='md:text-2xl text-lg'> اسفنج ۴۰ کیلویی</h2>
                        </div>
                    
                        <div className="md:flex hidden md:gap-10 gap-5  pt-5 text-sm">
            <span className="flex md:gap-2 gap-1"> yasaman jalalian <PersonIcon className=""/>   </span>
            <span className="flex md:gap-2 gap-1">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <div className='md:flex hidden justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
           
                    </div>
                    <div>
                        <span className=' text-sm'> ۱۴۰۲/۱۲/۲۵</span>
                    </div>
                    <div>
                        <p className=' text-sm'>
                        چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                        </p>
                    </div>
                    <div className='md:hidden flex justify-end md:mt-0 mt-3 '>
            <button
              className="flex  text-black border-2 font-semibold pl-2 md:pr-2
               pr-2 md:pt-2 md:pb-1  border-black  rounded-full  md:gap-2 
             md:w-[150px] "
          
            >
                 <span>
                <FlashIcon className=" md:w-[28px] w-[20px]  " />{" "}
              </span>{" "}
              <span className=" ">بیشتر بخوانید</span>{" "}
             
            </button>
            </div>
                 </div>
                </div>
             
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
        <MainFooter/>
    </div>
  )
}

export default NewsAndTitle