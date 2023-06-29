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
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryDate, storeAppState } from "../../../../redux/slice/appSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();

const Checkout = () => {

    const navigate=useNavigate()
    const user = cookies.get("user");
    const dispatch = useDispatch();
    const appState = useSelector(storeAppState);

  
    const handlePaymentPage=()=>{
        if(appState.deliveryDate){
            window.location.replace('http://localhost:5173/public/payment.html')

        }else{
            toast.warning('   تاریخی برای تحویل محصول انتخاب کنبد😊', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
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

<DatePicker 
calendar={persian}
locale={persian_fa}
calendarPosition="bottom-right"

weekPicker={false}
onChange={(e:any)=> {dispatch(setDeliveryDate({deliveryDate:e?.unix.toString()}))}}
/>


<span onClick={handlePaymentPage} className=" ">
    <MainButton title="پرداخت"/></span>

        </div></div>
      
 
        <MainFooter/>
    </div> );
}
 
export default Checkout;