import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import useLoginUsers from "./useLogin";
import { useState } from "react";
import { routes } from "../../../../routes";

const UserLogin = () => {
  const navigate = useNavigate();
  const [state,setState]=useState("ورود")
  const naivgateHome = () => {
    window.location.reload();
    navigate("/");
  };
  const { handleLoginUser, register, handleSubmit, errors } = useLoginUsers();
  const navigateSmsPage =()=>{
    navigate(routes.USERS.SmsCode)
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
      <span
        onClick={naivgateHome}
        className="border p-1 border-gray-900 rounded-full fixed md:top-[90px] md:left-[50px] top-[20px] left-[20px]"
      >
        <img width={20} src="/icons/icon-02.svg"></img>
      </span>

      <div className="bg-[#fd6e54] md:w-[30%] text-end shadow-md rounded-3xl px-3 pt-6 pb-8 mb-4 ">
   <div className="flex justify-center">
          <img src="public\logo\logo fotter-01.png" className="w-[200px]"/>
        </div>
        <div className=" mt-5 px-4">
        <span onClick={()=>setState("ورود")} className={`pl-1 hover:cursor-pointer ${state==="ورود"? "text-white":"text-black"}`}>ورود</span>
        |
          <span onClick={()=>setState("ثبت")}  className={`pr-1 hover:cursor-pointer ${state==="ثبت"? "text-white":"text-black"}`}> ثبت نام</span>
          
     
        </div>
        {state==="ثبت"? 
         <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="flex flex-col"
      >
     
        
           <div className="pb-2">
          <label className="block mt-5 pr-5 text-[#ffff] text-sm font-bold mb-1">
            نام 
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
            py-2 px-3 text-grey-darker "
            {...register("name")}
            id="name"
            type="text"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.name?.message : ""}
          </span>
        </div>
        <div className="pb-2">
          <label className="block pr-5 text-[#ffff] text-sm font-bold mb-1">
            نام خانوادگی 
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
            py-2 px-3 text-grey-darker "
            {...register("lastName")}
            id="lastName"
            type="text"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.lastName?.message : ""}
          </span>
        </div>
        <div className="pb-3">
          <label className="block pr-5 text-[#ffff] text-sm font-bold mb-1">
            شماره تماس
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border border-red 
            rounded-full w-full py-2 px-3 text-grey-darker "
            id="phoneNumber"
            {...register("phoneNumber")}
            type="number"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.phoneNumber?.message : ""}
          </span>
        </div>
    

        <button
        
          className="w-full  bg-[#ffff] hover:bg-blue-dark text-[#fd6e54] font-bold h-[40px]  rounded-full "
        >
          ثبت نام
        </button>
      </form> :    <form
        onSubmit={handleSubmit(handleLoginUser)}
        className="flex flex-col"
      >
     
        
           <div className="pb-2">
          <label className="block mt-5 pr-5 text-[#ffff] text-sm font-bold mb-1">
      !سلام <br/> لطفا شماره موبایل خود را وارد کنید
          </label>
          <input
            className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
            py-2 px-3 text-grey-darker "
            {...register("phoneNumber")}
            id="phoneNumber"
            type="number"
          />
          <span className="text-red-200">
            {" "}
            {errors ? errors.phoneNumber?.message : ""}
          </span>
        </div>
   

        <button
          onClick={navigateSmsPage}
          className="w-full  bg-[#ffff] hover:bg-blue-dark text-[#fd6e54] font-bold h-[40px]  rounded-full "
        >
      ورود
        </button>
      </form> }
     
  
      
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;
