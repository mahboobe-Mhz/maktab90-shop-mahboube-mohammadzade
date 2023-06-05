import { Link, Outlet } from 'react-router-dom';
import { routes } from '../../routes';
import { Box } from '@mui/material';
import MainHeader from '../../components/layoutHeader';
import MainFooter from '../../components/mainFooter';
const MainLayout = () => {
    return (
   
    <Box >
      
            
        <MainHeader />
     
 
       
       
       
        <Outlet/>
        <MainFooter/>
    </Box>
     );
}
 
export default MainLayout;