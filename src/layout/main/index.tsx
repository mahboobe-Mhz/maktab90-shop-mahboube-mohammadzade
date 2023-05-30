import { Link, Outlet } from 'react-router-dom';
import { routes } from '../../routes';
const MainLayout = () => {
    return (
        <>
         <h1>MainLayout</h1> 
         <Link to={routes.USERS.shopping}>shopping</Link>
         <Link to={routes.AUTH.index}>login</Link>
         <Outlet/>
         </>
    );
}
 
export default MainLayout;