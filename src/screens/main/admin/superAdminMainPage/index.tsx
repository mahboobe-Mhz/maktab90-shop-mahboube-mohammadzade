import { useNavigate } from "react-router-dom"
import AdminHeader from "../../../../components/adminComponent/adminHeader"
import { routes } from "../../../../routes"



function SuperAdminMainPage() {
    const navigate=useNavigate()
    const handleNavigateInsertProduct =()=>{
      navigate(routes.ADMIN.ColleagueProductPage)
    }
    const handleNavigateAddAdmin =()=>{
      navigate(routes.ADMIN.SuperAdminDashboard)
    }
  return (
    <div className=" w-full h-full"> 
      <AdminHeader/>
      <div dir="rtl" className=" flex  gap-20 justify-center mt-20 ">
      <div onClick={handleNavigateInsertProduct} className="bg-secondary py-10 px-20 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span>افزودن محصول</span>
      </div>
      <div onClick={handleNavigateAddAdmin} className="bg-secondary py-10 px-20 rounded-2xl text-xl text-white hover:cursor-pointer ">
        <span> افزودن ادمین</span>
      </div>
      </div>
      

    </div>
  )
}

export default SuperAdminMainPage