import React from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

function AdminLogin() {
    const navigate = useNavigate();

    const navigateHome = () => {

      navigate("/");
    };
    const handleNavigateSuperAdminMainPage =()=>{
      navigate(routes.ADMIN.SuperAdminMainPage)
    }
  return (
     
         <div className="h-full w-full flex justify-center items-center">
      <span
        onClick={navigateHome}
        className="border p-1 border-gray-900 rounded-full fixed md:top-[90px] md:left-[50px] top-[20px] left-[20px]"
      >
        <img width={20} src="/icons/icon-02.svg"></img>
      </span>

      <div className="bg-[#fd6e54] md:w-[30%] text-end shadow-md rounded-3xl px-3 pt-6 pb-8 mb-4 ">
      <div className="flex justify-center">
          <img src="public\logo\logo fotter-01.png" className="w-[200px]"/>
        </div>
          <div
    className="flex flex-col"
  >
       <div className="pb-2">
      <label className="block mt-5 pr-5 text-[#ffff] text-sm font-bold mb-1">
  !سلام <br/> لطفا شماره موبایل خود را وارد کنید
      </label>
      <input
        className=" bg-[#fd6e54] shadow appearance-none border rounded-full w-full 
        py-2 px-3 text-grey-darker "

        id="phoneNumber"
        type="number"
      />
      <span className="text-red-200">
        {" "}
 
      </span>
    </div>


    <button
      onClick={handleNavigateSuperAdminMainPage}
      className="w-full  bg-[#ffff] hover:bg-blue-dark text-[#fd6e54] font-bold h-[40px]  rounded-full "
    >
  ورود
    </button>
  </div>
  
  </div>

  </div>
  )
}

export default AdminLogin