import React from 'react'
import { useNavigate } from 'react-router-dom';

function SmsCode() {
    const navigate = useNavigate();
    const naivgateHome = () => {

        navigate("/");
      };
  return (
    <div className="h-full w-full flex  justify-center items-center">
    <span
      onClick={naivgateHome}
      className="border p-1 border-gray-900 rounded-full fixed md:top-[90px] md:left-[50px] top-[20px] left-[20px]"
    >
      <img width={20} src="/icons/icon-02.svg"></img>
    </span>

    <div className="bg-[#fd6e54] md:w-[30%] text-end shadow-md rounded-3xl px-3 pt-6 pb-8 mb-4 ">
 <div className="flex justify-center ">
        <img src="public\logo\logo fotter-01.png" className="w-[200px]"/>
      </div>
  
     <form
 
      className="flex flex-col gap-5"
    >
   
      
         <div className="pb-2">
        <label className="block mt-5 pr-5 text-[#ffff] text-sm font-bold mb-5">
        کد تایید را وارد کنید<br/> کد تایید برای شماره تماس 09170894060 پیامک شد
        </label>
        <input
          className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
          py-2 px-3 text-grey-darker "
  
          id="name"
          type="text"
        />
  
      </div>
  
  

      <button
        type="submit"
        className="w-full  bg-[#ffff] hover:bg-blue-dark text-[#fd6e54] font-bold h-[40px]  rounded-full "
      >
      تایید
      </button>
    </form> 
   

    
    </div>

  </div>
  )
}

export default SmsCode
