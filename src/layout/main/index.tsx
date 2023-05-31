import { Link, Outlet } from 'react-router-dom';
import { routes } from '../../routes';
import { Box } from '@mui/material';
const MainLayout = () => {
    return (
        <Box sx={{
            display:"flex", gap:"10px"
        }}>
         <h1>MainLayout</h1> 
         <Link to='/auth/login'>shopping</Link>
         <Link to={routes.ADMIN.index}>login</Link>
       
         <Link to={routes.USERS.cart}>cart</Link>
         <Link to={routes.USERS.checkout}>checkout</Link>
         <Link to={routes.USERS.shopping}>shopping</Link>
         <Link to={routes.USERS.single}>single</Link>
         <Outlet/>
         </Box>
    );
}
 
export default MainLayout;