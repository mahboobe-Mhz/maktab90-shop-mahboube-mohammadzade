import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
const AdminLayout = () => {
    return (
        <>
        <h1>AdminLayout</h1>
        <Link to={routes.ADMIN.inventory}>inventory</Link>
         <Link to={routes.ADMIN.orders}>orders</Link>
         <Outlet/> 
         </>  );
}
 
export default AdminLayout;