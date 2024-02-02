
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../redux/slice/appSlice";
import Cookies from "universal-cookie";
import BasketIcon from "../../svg/basket";
import MainMenu from "../tailwindMenu";
import ResponsiveMenu from "../responsiveMenu";
import React from "react";
import SearchBox2 from "../searchBox2";
import PersonIcon from "../../svg/personIcon";
const MainHeader = () => {
  const navigate = useNavigate();
  const appState = useSelector(storeAppState);
  const cookies = new Cookies();
  const user = cookies.get("user");
  const[state,setState]=useState(false)
 

  const navigateToHome=()=>{
    navigate('/')
  }
  const navigateCart=()=>{
    navigate('/cart')
  }
  const navigateDashboard=()=>{
    navigate('/dashboard')
  }
  const handleLogin=()=>{
    navigate(routes.USERS.login)
  }

    return ( 
 <div className="border-b shadow-md border-[#3f3f3f]">
     <div className="grid grid-cols-2 md:grid-cols-3 direction md:pt-2 mx-auto max-w-[1440px] ">
          <div className="hidden md:flex flex-wrap md:pr-10  gap-1 relative">
            <button onClick={navigateToHome} className="text-black font-semibold hover:text-secondary 
            hover:cursor-pointer focus:text-secondary focus:outline-none focus:ring-none relative">صفحه اصلی</button>
           
            <span className="mt-3">.</span>
           
              <button>  <MainMenu/></button>
            
           
            {/* <button className=" hover:text-secondary hover:cursor-pointer focus:text-secondary 
            focus:outline-none focus:ring-none relative mt-1"><DropDownMenu /></button> */}
            <span className="mt-3">.</span>
            <button onClick={navigateDashboard} className="font-semibold hover:text-secondary hover:cursor-pointer
             focus:text-secondary focus:outline-none focus:ring-none relative"> رهگیری سفارشات</button>
           <span className="mt-3">.</span>
            <button className="font-semibold hover:text-secondary hover:cursor-pointer
             focus:text-secondary focus:outline-none focus:ring-none relative" onClick={()=>{navigate("/homeStore")}}> هوم استور </button>
          </div>
          <div className="flex gap-5 md:pr-10 md:justify-center">
            <div  className="md:hidden flex mt-3">
           <ResponsiveMenu/>

            </div>
            <img className= {`w-[100px] h-[30px]  md:w-[200px] mt-3 md:mt-[3px]  md:h-[50px] hidden sm:flex cursor-pointer
            `} onClick={navigateToHome} 
            src="/logo/logo-01.png"></img> 
            {!state &&  <img className= {`w-[100px] h-[30px]  md:w-[200px] mt-3 md:mt-[3px]  md:h-[50px] flex sm:hidden cursor-pointer
            `} onClick={navigateToHome} 
            src="/logo/logo-01.png"></img> }
         
          </div>
          <div className="flex gap-4 justify-end md:pl-10 pb-1">
    
            {/* <SearchBox setState={setState} state={state} />  */}
            <span className=" ">
            <SearchBox2 state={state} setState={setState}/>
            </span>
         
     

          <img className={` transition-all duration-400	 ${!state? "opacity-100" :"opacity-0"} z-20 cursor-pointer `} 
       onClick={()=>setState(true)}
          width={20} height={20} src="/icons/icon-04.svg"></img>

{/* { state ? <SearchBox setState={setState} state={state} /> : <img className=" mt-3   transition-all " 
       onClick={()=>setState(true)}
          width={20} src="/icons/icon-04.svg"></img>} */}
      <span onClick={navigateCart} className={`mt-3  hidden sm:flex cursor-pointer`}>
          {appState.OrderData.length==0? <span></span> : 
          <span className="absolute top-[0] md:left-[65px] left-[30px] w-[17px]  bg-secondary rounded-full
           text-white px-[5px] text-xs pb-[6px] h-4 ">{appState.OrderData.length}</span>}
         <BasketIcon />
         </span>    
       
   {!state && 
       <span onClick={navigateCart} className={`mt-3 flex sm:hidden cursor-pointer`}>
          {appState.OrderData.length==0? <span></span> : 
          <span className="absolute top-[0] md:left-[65px] left-[30px] w-[17px]  bg-secondary rounded-full
           text-white px-[5px] text-xs pb-[6px] h-4 ">{appState.OrderData.length}</span>}
         <BasketIcon />
         </span> 
         }
         <span className="mt-3 hidden sm:flex cursor-pointer" onClick={handleLogin} ><PersonIcon className=''/></span>

 { !state &&   <span onClick={handleLogin} className="mt-3 flex sm:hidden cursor-pointer "><PersonIcon  className=''/></span>}
       
         
      {/* <UserInfo/> */}
        

       
          </div>
          <div>
    
          </div>
      </div>
 </div>
   
   );
}
 
export default MainHeader;