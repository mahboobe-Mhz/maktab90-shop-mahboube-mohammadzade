import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import AdminHeader from "../../components/adminComponent/adminHeader";
const AdminLayout = () => {
    return (
        <>
       <AdminHeader/>
        <Link to={routes.ADMIN.inventory}>inventory</Link>
         <Link to={routes.ADMIN.orders}>orders</Link>
         <Outlet/> 
         </>  );
}
 
export default AdminLayout;