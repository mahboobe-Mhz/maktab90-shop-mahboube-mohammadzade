import { Box,Typography ,Button} from "@mui/material";
import SideBar from "../../../../components/adminComponent/sideBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DataTable from "../../../../components/adminComponent/adminTable";

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
            <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"20px", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography> محصولات</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن محصول</Button>
            </Box>
            <Box sx={{display:"flex", gap:"30px", padding:"20px", color:"gray"}}>
                <Typography sx={{":hover":{}}}> تمام محصولات</Typography>
                <Typography sx={{":hover":{}}}> اتمام موجودی</Typography>
                <Typography sx={{":hover":{}}}>بدون قیمت</Typography>
                <Typography sx={{":hover":{}}}>زباله دان</Typography>
            </Box>
            <Box>
               <DataTable/> 
            </Box>
        </Box>
            
        
    </Box> );
}
 
export default ProductsManagement;