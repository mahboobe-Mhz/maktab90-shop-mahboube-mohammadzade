import {Box,Typography,Paper, Button} from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import DiscountModal from './discountModal';
import React from 'react';
const Discounts = () => {
    const [open, setOpen] = React.useState(true);   
    return (  <Paper sx={{ height:"90%" , bgcolor:"#ffff", padding:"20px", borderRadius:"30px", marginTop:"10px"}}>
        <DiscountModal setOpen={setOpen}  open={open}/>
        <Box sx={{ display:"flex",borderBottom:"solid", justifyContent:"space-between", borderColor:"secondary.main" ,paddingBottom:"5px" }}>
        <Typography sx={{color:"secondary.main", fontSize:"30px", }}> تخفیفات</Typography>
       <Button onClick={()=>setOpen(true)} sx={{ bgcolor:"secondary.main" , color:"white", borderRadius:"20px", paddingX:"20px", height:"30px"}}> افزودن کوپن جدید</Button>
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