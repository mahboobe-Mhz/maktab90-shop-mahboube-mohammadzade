import { Outlet } from "react-router";
const AdminLayout = () => {
    return (
        <>
         <div className="flex justify-center  h-[100%]">
         <Outlet/> 
         </div>
        
         </>  );
}
 
export default AdminLayout;