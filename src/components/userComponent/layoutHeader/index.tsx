

import DropDownMenu from "../nestedMenu/menu";
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBox from "../../kit/searchBox";
const MainHeader = () => {
  const navigate = useNavigate();
  const[state,setState]=useState(false)
  const navigateAdmin =()=>{
    setTimeout(() => {
      navigate(routes.ADMIN.login)
    }, 100);

  }
  const navigateToHome=()=>{
    navigate('/')
  }
  const navigateCart=()=>{
    navigate('/cart')
  }
  const navigateUserLogin=()=>{
    navigate('/login')
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
         
          <img className=""  width={20} src="/icons/icon-03.svg"></img>
          <img onClick={navigateUserLogin} className=""  width={20} src="/icons/icon-01.svg"></img>
          </div>
          <div>
    
          </div>
      </div>
   );
}
 
export default MainHeader;