import {Box,Typography,Paper} from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
const Discounts = () => {
    return (  <Paper sx={{ height:"90%" , bgcolor:"#ffff", padding:"20px", borderRadius:"30px", marginTop:"10px"}}>
        <Box>
        <Typography sx={{color:"secondary.main", fontSize:"30px", borderBottom:"solid"}}> تخفیفات</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"10px", width:"100%",
         height:"100%", justifyContent:"center",alignItems:"center",color:"secondary.main"
    }}>
            <DiscountIcon sx={{color:"secondary.main", width:"120px", height:"120px"}}/>
            <Typography sx={{fontSize:"30px"}}>تخفیفی ثبت نشده</Typography>
          
        </Box>

    </Paper>);
}
 
export default Discounts;