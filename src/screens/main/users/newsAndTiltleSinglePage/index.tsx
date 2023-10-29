import React from 'react'
import MainHeader from '../../../../components/userComponent/mainHeader'
import MainFooter from '../../../../components/userComponent/mainFooter'
import PersonIcon from '../../../../components/svg/personIcon'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function NewsAndTileSinglePage() {
  return (
    <div>
        <MainHeader/>
        <div className='container mx-auto' dir='rtl'>
        <img src="/picture/posterCategory.png" alt="" />
        <div className='px-5 mb-10'>
      
            <div className=' flex  justify-between pb-5'>
                <h1 className='text-secondary text-3xl pt-2'> اسفنج ۴۰ کیلویی</h1>
                <div className="flex gap-5 text-sm">
                    <span> ۱۴۰۲/۱۲/۰۳</span>
                <span className="flex gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className=""/>   </span>
       
            </div>
            </div>
            <div className=' flex flex-col'>
                <h2 className=' font-bold'> چکیده مطالب کوتاه</h2>
                <p className='text-sm'>
                چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد.  <br/> <br/> <br/>
                </p>
                <h2 className=' font-bold'>   دانسیته یا وان اسفنج</h2>
                <p className='text-sm'>
               
                چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                </p>
            </div>
            <img src="/picture/posterCategory.png" alt="" />
            <div className=' flex flex-col'>
                <h2 className=' font-bold'> چکیده مطالب کوتاه</h2>
                <p className='text-sm'>
                چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد.  <br/> <br/> <br/>
                </p>
                <h2 className=' font-bold'>   دانسیته یا وان اسفنج</h2>
                <p className='text-sm'>
               
                چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. 
                </p>
            </div>
        </div>

        </div>
        <MainFooter/>
    </div>
  )
}

export default NewsAndTileSinglePage