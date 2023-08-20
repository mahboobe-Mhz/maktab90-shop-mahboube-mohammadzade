import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import MainButton from "../../../../components/kit/button";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";

import { setOrderData, setProductOrderModal, storeAppState } from "../../../../redux/slice/appSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import DeleteOrderModal from "../../../../components/userComponent/poductOrderModal";
import CartData from "../../../../components/userComponent/cartData";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
  const [titleText ,setTitleText]=React.useState("")
  const [deleteId ,setDeleteId]=React.useState("")


  const handleDelete = (id: string) => {
    const newAppState = [...appState.OrderData];
    const filterAppState=newAppState.filter((item:any)=> item.id !== id)
    dispatch(setOrderData({ OrderData: filterAppState }));
  };

  const result = appState.OrderData.reduce(
    (sum: number, { price }: any) => sum + price,
    0
  );


  const handleCheckout = () => {
    if (appState.OrderData[0]) {
      navigate(routes.USERS.checkout);
    } else {
      toast.warning(" محصولی سفارش نداده ایید!  ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleDeleteModal =(event:any)=>{
    dispatch(setProductOrderModal({ productOrderModal: true }));
     setTitleText(`  ${event.currentTarget.dataset.user}  `) 
     setDeleteId(event.currentTarget.id)
  }

  return (
    <div dir="rtl">
      <MainHeader />
      <ToastContainer />
      <div className="p-10">
        <DeleteOrderModal titleText={titleText} handleDelete={handleDelete} deleteId={deleteId} />
        <h1 className="text-3xl font-bold mb-10">سبد خرید</h1>
 
        <div className=" md:flex gap-4 mb-10 ">
          <div className="border rounded-3xl border-black md:w-[70%]">
            <div className="p-4 space-y-5 overflow-y-scroll h-[400px]">
              <div className="flex justify-between border-b border-black pb-3 px-4">
                <span className="font-semibold">محصول</span>
                <div className="hidden md:flex justify-around font-semibold w-[60%] ">
                  <span>تعداد</span>
                  <span>قیمت</span>
                  <span>حذف</span>
                </div>
              </div>
              {appState.OrderData.map((item: any, index: any) => (

      <CartData  item={item} index1={index} handleDeleteModal={handleDeleteModal}  />
  
              ))}
                  
            </div>
          </div>
          <div className="border rounded-3xl border-black md:w-[30%]">
            <div className="p-4">
              <h3 className="font-semibold mb-5">جمع کل سبد خرید</h3>
              <div className=" space-y-3 text-semibold">
                <div className=" flex gap-4">
                  <input
                    placeholder="کد تخفیف"
                    className="border border-black rounded-full w-[80%] px-5"
                    type="text"
                  />
              <button className="  text-gray-400 border border-black hover:bg-secondary hover:text-white px-5 pb-2 pt-2 rounded-full">اعمال</button> 
                </div>
                <div className="flex justify-between">
                  <span>جمع جزءء</span>
                  <span>{Number(result).toLocaleString("Fa-IR")} تومان</span>
                </div>
                <div className="flex justify-between  border-b-2 pb-3 border-black ">
                  <span> تخفیف (۱۰٪)</span>
                  <span className="text-secondary">۲۴۰۰۰۰ - تومان</span>
                </div>
                <div className="flex justify-between">
                  <span> مجموع</span>
                  <span>{Number(result).toLocaleString("Fa-IR")} تومان</span>
                </div>
                <div className="pt-5 flex gap-1 ">
                  <span className="text-secondary   rounded-full text-xl">
                    ●
                  </span>
                  <span className="">هزینه حمل بر عهده مشتری می باشد</span>
                </div>
                <div className=" w-full text-center pt-5">
                  <span onClick={handleCheckout}>
                    {" "}
                    <MainButton title="ادامه جهت تسویه حساب" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <MainFooter />
    </div>
  );
};

export default Cart;
