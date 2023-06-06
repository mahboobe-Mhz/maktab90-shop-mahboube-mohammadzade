import { Box,Typography ,Button} from "@mui/material";
import DataTable from "../productsTable";
const ShowTableBox = () => {
    return ( <>
    <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"20px", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography> محصولات</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن محصول</Button>
            </Box>
            <Box sx={{display:"flex", gap:"30px", padding:"20px", color:"gray" , height:"70px" }}>
                <Typography sx={{":hover":{   cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> تمام محصولات</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> اتمام موجودی</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>بدون قیمت</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>زباله دان</Typography>
            </Box>
            <Box >
               <DataTable/> 
            </Box>
    </> );
}
 
export default ShowTableBox;