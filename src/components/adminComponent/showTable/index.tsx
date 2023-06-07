import { Box,Typography ,Button, Input,TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import EnhancedTable from "../productsTable";
const ShowTableBox = () => {
    return ( <Box sx={{ height:"90%"}}>
    <Box sx={{display:"flex", justifyContent:"space-between", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography> محصولات</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن محصول</Button>
            </Box>
          
            <Box sx={{display:"flex", gap:"30px", padding:"20px", color:"gray" , height:"70px" }}>
                <Typography sx={{":hover":{   cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> تمام محصولات</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> اتمام موجودی</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>بدون قیمت</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>زباله دان</Typography>
            </Box>
                <Box sx={{width:"100%",display:"flex", borderRadius:"50px" ,bgcolor:"#ffff",marginBottom:"10px", paddingX:"20px",}}>
                    <SearchIcon sx={{fill:"gray", marginTop:"3px"}}/> 
                <Input placeholder="جستجو" sx={{width:"100%", outline:"none" }}  type="text" ></Input>
                </Box>
            <Box >
               <EnhancedTable/> 
            </Box>
    </Box> );
}
 
export default ShowTableBox;