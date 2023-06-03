import { Link, Outlet } from 'react-router-dom';
import { routes } from '../../routes';
import { Box } from '@mui/material';
import MainHeader from '../../components/mainHeader';
import MainFooter from '../../components/mainFooter';
const MainLayout = () => {
    return (
   
    <Box
    sx={{
        display:'flex', flexDirection:"column",alignItems:"center", width:"100%", height:"100%"
    }}
    >
        <MainHeader/>
        <Box sx={{
         display:"flex", gap:"10px"
         }}>
    
      
          <Link to={routes.ADMIN.index}>login</Link>  
          
      <Link to={routes.USERS.cart}>cart</Link>
      <Link to={routes.USERS.checkout}>checkout</Link>
         <Link to={routes.USERS.shopping}>shopping</Link>
         <Link to={routes.USERS.single}>single</Link>
       
          </Box>
        <Outlet/>
        <MainFooter/>
    </Box>
     );
}
 
export default MainLayout;