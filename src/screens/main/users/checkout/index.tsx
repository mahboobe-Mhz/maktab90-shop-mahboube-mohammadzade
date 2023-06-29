import Cookies from "universal-cookie";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import MainButton from "../../../../components/kit/button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import DatePicker from "react-multi-date-picker"

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useState } from "react";
const cookies = new Cookies();
const Checkout = () => {
    const[fieldValue,setFieldValue]=useState()
    const navigate=useNavigate()
    const user = cookies.get("user");

    const handlePaymentPage=()=>{
        setTimeout(() => {
            navigate( routes.USERS.payment)    
        }, 100);

    }
    return ( <div dir="rtl">
        <MainHeader/>
        <div className="p-10 w-full flex justify-center">  
        <div className=" flex flex-col gap-5 border border-2 border-black rounded-3xl p-10">
            <div className="flex gap-5">
                
<label htmlFor=""> نام</label>
<input  className="border px-3 rounded-2xl "  type="text" disabled value={user.firstname}/>
<label htmlFor="">  نام خانوادگی</label>
<input  className="border px-3  rounded-2xl" type="text" disabled value={user.lastname} />
            </div>
            <div className="flex gap-5">
                
<label htmlFor=""> آدرس</label>
<input  className="border px-3 rounded-2xl " type="text" disabled value={user.address} />
<label htmlFor=""> تلفن همراه</label>
<input className="border px-3  rounded-2xl"  type="text"  disabled value={user.phoneNumber}/>
            </div>
<label htmlFor=""> تاریخ تحویل</label>
<input  className="border px-3 w-[300px] rounded-2xl" type="date" />
<DatePicker 
calendar={persian}
locale={persian_fa}
calendarPosition="bottom-right"
weekPicker={false}
// onChange={(e)=>setFieldValue(e.unix)}
/>
<span onClick={handlePaymentPage} className=" ">
    <MainButton title="پرداخت"/></span>

        </div></div>
      
 
        <MainFooter/>
    </div> );
}
 
export default Checkout;