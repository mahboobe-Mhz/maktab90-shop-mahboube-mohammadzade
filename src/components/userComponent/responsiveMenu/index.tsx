import { useState } from "react";
import CategoryResMenu from "./categoryMenu";
import { Link } from "react-router-dom";
import React from "react";

const ResponsiveMenu = () => {
    const[showMenu,setShowMenu]=useState(false)

  
  
    return (  
        <div className="relative group z-20">
 {/* Category item with subcategory */}
  <span  onClick={()=>setShowMenu(true)}   className="text-black  font-semibold  hover:cursor-pointer hover:text-secondary  "
  > <img  className="changColor"  width={20} src="/icons/list.svg"></img></span>
  {
    showMenu? <div id="menu" className="absolute  shadow-black  shadow-xl rounded-2xl bg-white mt-2
    border border-black py-2 w-[150px] right-[5px]" >
        <div className="flex flex-col pr-3 gap-2">
        <Link to="http://localhost:5173/">صفحه اصلی </Link>
   <span> </span>
    <span>  <CategoryResMenu/> </span> 
   <Link to='http://localhost:5173/cart'> رهگیری سفارشات</Link>
   <span>پنل نمایندگان </span>
        </div>   
       </div>:""
    
  }
</div>
    );
}
 
export default ResponsiveMenu;