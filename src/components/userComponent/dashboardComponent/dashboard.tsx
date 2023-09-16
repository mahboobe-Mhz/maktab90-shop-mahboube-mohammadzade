import React from 'react'
import { Link } from 'react-router-dom'

function DashboardCom() {
  return (
    <div className='my-10 text-center text-lg flex flex-col gap-10'>
        <span className=''> سلام hamid</span>
        <p> از اینکه وب سایت ما را انتخاب کردید بسیارخوشحالیم <br/> اگر هنوز محصولی برای خرید انتخاب نکرده اید،پیشنهاد میکنم یه سر به فروشگاه <Link to={"/"} className='text-secondary'> هوم نت</Link> بزنید</p>
        <p> لطفا قبل از ثبت هر گونه سفارش از قسمت <span className='text-secondary'>ویرایش اطلاعات</span> .نسبت به تکمیل یا ویرایش اطلاعات خود اقدام کنید</p>
    </div>
  )
}

export default DashboardCom