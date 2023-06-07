import { Box,Typography ,Button} from "@mui/material";
import SideBar from "../../../../components/adminComponent/sideBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ShowTableBox from "../../../../components/adminComponent/showTable";
import { Outlet } from "react-router-dom";
const ProductsManagement = () => {
    return ( <Box sx={{display:"flex", direction:"rtl"}}>     
        <Box>
            <SideBar/>
        </Box>
        <Box sx={{padding:"15px", bgcolor:"#F3F3F5", width:"100%"}}>
            <Box sx={{display:"flex"}}>
                <Typography sx={{color:"secondary.main"}}> برنامه ها</Typography>
                <KeyboardArrowLeftIcon/>
                <Typography>  فروشگاه</Typography>
               
            </Box>
            <Outlet/>
        </Box>
    </Box> );
}
 
export default ProductsManagement;
