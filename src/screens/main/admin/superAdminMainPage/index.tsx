import { useNavigate } from "react-router-dom"
import AdminHeader from "../../../../components/adminComponent/adminHeader"
import { routes } from "../../../../routes"
import AddHomeStoreInfoHeader from "../../../../components/adminComponent/homeStoreInfoHeader"



function SuperAdminMainPage() {
    const navigate=useNavigate()
    const handleNavigateInsertProduct =()=>{
      navigate(routes.ADMIN.ColleagueProductPage)
    }
    const handleNavigateAddAdmin =()=>{
      navigate(routes.ADMIN.SuperAdminDashboard)
    }
    const handleNavigateAddStoreInfo=()=>{
      navigate(routes.ADMIN.AddHomeStoreInfo)
      
    }
  return (
    <div className=" w-full h-full"> 
      <AdminHeader/>
      <AddHomeStoreInfoHeader/>
      <div dir="rtl" className=" flex flex-col md:flex-row gap-20 justify-center mt-20 p-10 ">
      <div onClick={handleNavigateInsertProduct} className="bg-secondary py-10 px-10 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span> مدیریت فروشگاه</span>
      </div>
      <div onClick={handleNavigateAddAdmin} className="bg-secondary py-10 px-10 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span> افزودن ادمین</span>
      </div>
      <div onClick={ handleNavigateAddStoreInfo} className="bg-secondary py-10 px-10 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span> افزودن اطلاعات فروشگاه</span>
      </div>
      <div onClick={ handleNavigateAddStoreInfo} className="bg-secondary py-10 px-10 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span> افزودن  کد معرف/ایجاد کاربر</span>
      </div>
      </div>
      

    </div>
  )
}

export default SuperAdminMainPage