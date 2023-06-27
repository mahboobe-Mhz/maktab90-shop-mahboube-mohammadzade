import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../../../components/kit/button";
import MainHeader from "../../../../components/userComponent/layoutHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { setOrderData, storeAppState } from "../../../../redux/slice/appSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
const Cart = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const appState = useSelector(storeAppState);
    const[orderCount,setOrderCount]=useState(appState.OrderData.orderNUm)
    const[totalPayment,setTotalPayment]=useState<number>(0)
    const PlusOrderHandle=()=>{
        appState.OrderData.quantity > orderCount && setOrderCount(orderCount+1)
        if(orderCount===appState.OrderData.quantity ){
          toast.warning('بیشتر از این ندارم😊', {
            position: toast.POSITION.TOP_RIGHT
        })
        }
       }

const handleDelete =(event:any)=>{
    const newAppState=appState.OrderData
    newAppState.splice(event.currentTarget.id,1) 
    console.log(newAppState);

        dispatch(setOrderData({OrderData:newAppState}))
        console.log(appState.OrderData);
}
useEffect(()=>{
    appState.OrderData.map((item:any)=>{setTotalPayment(totalPayment+Number(item.price))})
},[])
const handleCheckout =()=>{
    navigate( routes.USERS.checkout,)
}
    return (<div dir="rtl">
               <MainHeader />
               <ToastContainer />
               <div className="p-10">
                <h1 className="text-3xl font-bold mb-10">سبد خرید</h1>
                <div className=" md:flex gap-4 mb-10 ">
                    <div className="border rounded-2xl border-black md:w-[70%]">
                        <div className="p-4 space-y-5 overflow-y-scroll h-[400px]">
                            <div className="flex justify-between border-b border-black pb-3 px-4"> 
                                <span className="font-semibold">محصول</span>
                                <div className="flex justify-around font-semibold w-[60%]">
                                <span>تعداد</span>
                                <span>قیمت</span>
                                <span>حذف</span>
                                </div>
                        
                            </div>
                            {appState.OrderData.map((item:any , index:any)=>  <div id={index} className="flex justify-between border-b  border-black pb-3 px-4 w-full"> 
                           <div className="flex md:w-[40%]">
                           <img className="border rounded-2xl " width={80} height={80} src={`http://localhost:8000/images/products/images/${item.image?.[0]}`}/>
                                <div className="flex flex-col pr-3">
                                    <span className="font-bold"> {item.name}</span>
                                    {/* <span className="text-xs"> رنگبندی سفید</span>
                                    <span className="text-xs"> تک نفره</span> */}
                                </div>
                           </div>
                           <div className="flex justify-around md:w-[60%] mt-4">
                              <span className=" border border-black px-2 h-8 rounded-full w-[100px]">
                              <span className="mx-1  text-xl hover:cursor-pointer" > + </span>
                               <span className="mx-1 "> {item.orderNUm} </span>
                               <span className="mx-1  text-xl hover:cursor-pointer " > -</span>
                              </span>
                                <span>{item.price} تومان</span>
                                <span id={index} onClick={handleDelete}><DeleteOutlineRoundedIcon/></span>
                            </div> 
                            </div>)}
                          
                        </div>
                    </div>
                    <div className="border rounded-2xl border-black w-[30%]">
                    <div className="p-4">
                        <h3 className="font-semibold mb-5">جمع کل سبد خرید</h3>
                        <div className=" space-y-3 text-semibold">
                            <div className=" flex gap-4">
                                <input placeholder="کد تخفیف" className="border border-black rounded-full w-[80%] px-5" type="text"/>
                                <MainButton title="اعمال" />
                            </div>
                            <div className="flex justify-between">
                                <span>جمع جزء</span>
                                <span>{totalPayment} تومان</span>
                            </div>
                            <div className="flex justify-between  border-b-2 pb-3 border-black ">
                                <span> تخفیف (۱۰٪)</span>
                                <span className="text-secondary">۲۴۰۰۰۰ - تومان</span>
                            </div>
                            <div className="flex justify-between">
                                <span> مجموع</span>
                                <span>{totalPayment} تومان</span>
                            </div >
                            <div className="pt-5 flex gap-1 ">
                            <span className="text-secondary   rounded-full text-xl">●</span>
                            <span className="">هزینه حمل بر عهده مشتری می باشد</span>
                            </div>
                            <div className=" w-full text-center pt-5">
                                <span onClick={handleCheckout} >     <MainButton title="ادامه جهت تسویه حساب"/></span>
                       
                            </div>
                      
                        </div>
                    </div>
                    </div>
                </div>
              <MainButton title="بروز رسانی سبد خرید"/>
               </div>
               <MainFooter/>
    </div>);
}
 
export default Cart;