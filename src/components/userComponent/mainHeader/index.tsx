

import DropDownMenu from "../nestedMenu/menu";
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../../kit/searchBox";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../redux/slice/appSlice";
import Cookies from "universal-cookie";
import UserInfo from "../userInfo";
import BasketIcon from "../../svg/basket";
const MainHeader = () => {
  const navigate = useNavigate();
  const appState = useSelector(storeAppState);
  const cookies = new Cookies();
  const user = cookies.get("user");
  const[state,setState]=useState(false)
  const navigateAdmin =()=>{
    setTimeout(() => {
      navigate(routes.ADMIN.main)
    }, 100);

  }
  const navigateToHome=()=>{
    navigate('/')
  }
  const navigateCart=()=>{
    navigate('/cart')
  }


    return ( 
 
      <div className="grid grid-cols-2 md:grid-cols-3 direction pt-2 border-b shadow-md border-black">
          <div className="hidden md:flex flex-wrap pr-10  gap-1 relative">
            <button onClick={navigateToHome} className="text-black font-semibold hover:text-secondary 
            hover:cursor-pointer focus:text-secondary focus:outline-none focus:ring-none relative">صفحه اصلی</button>
            <span className="mt-2">.</span>
            <button className=" hover:text-secondary hover:cursor-pointer focus:text-secondary 
            focus:outline-none focus:ring-none relative mt-1"><DropDownMenu /></button>
            <span className="mt-2">.</span>
            <button onClick={navigateCart} className="font-semibold hover:text-secondary hover:cursor-pointer
             focus:text-secondary focus:outline-none focus:ring-none relative"> رهگیری سفارشات</button>
            <span className="mt-2">.</span>
            <button onClick={navigateAdmin} className="font-semibold hover:text-secondary hover:cursor-pointer
             focus:text-secondary focus:outline-none focus:ring-none relative"> پنل نمایندگان</button>
          </div>
          <div className="flex gap-5 pr-10 justify-center">
            <div className="md:hidden flex ">
            <img className="changColor"  width={20} src="/icons/list.svg"></img>
            </div>
          <img onClick={navigateToHome} width={200} height={50} src="/logo/logo-01.png"></img>
          </div>
          <div className="flex gap-4 justify-end pl-10">
<div >
{ state ? <SearchBox setState={setState} /> : <img className=" mt-3   transition-all hover:hidden" 
        onMouseOver={()=>setState(true)}
          width={20} src="/icons/icon-04.svg"></img>}
</div>
         <span onClick={navigateCart} className="mt-3 relative">
          {appState.OrderData.length==0? <span></span> : <span className="absolute bottom-8 right-3 bg-secondary rounded-full
           text-white px-[5px] text-xs pb-[6px] h-4">{appState.OrderData.length}</span>}
         <BasketIcon />
         </span>

      <UserInfo/>
        

       
          </div>
          <div>
    
          </div>
      </div>
   );
}
 
export default MainHeader;