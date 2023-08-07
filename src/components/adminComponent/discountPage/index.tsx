import {Box,Typography,Paper, Button, Input} from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import DiscountModal from './discountModal';
import React from 'react';
import SearchIcon from '../../svg/searchIcon';
import DiscountTable from './discountTable'
const Discounts = () => {
    const [open, setOpen] = React.useState(false);   
    const[discount,setDiscount]=React.useState(true)
    return (  <Box sx={{ height:"90%" }}>
        <DiscountModal setOpen={setOpen}  open={open}/>
     
        {!discount?
    
           <Paper sx={{ height:"90%" , bgcolor:"#ffff", padding:"20px", borderRadius:"30px", marginTop:"10px"}}>
           <Box>
           <Typography sx={{color:"secondary.main",   fontSize:{
               lg:30,
               md:30,
               sm:20,
               xs:20
            }, borderBottom:"solid"}}> تخفیفات</Typography>
           </Box>
           <Box sx={{display:"flex", flexDirection:"column", gap:"10px", width:"100%",
            height:"100%", justifyContent:"center",alignItems:"center",color:"secondary.main"
       }}>
                <DiscountIcon sx={{color:"secondary.main", width:"120px", height:"120px"}}/>
            <Typography sx={{fontSize:"30px"}}>تخفیفی ثبت نشده</Typography>
           </Box>
   
       </Paper>
        :
        <Box sx={{display:"flex", flexDirection:"column", gap:2 , marginTop:2}}>
                   <Box sx={{ display:"flex"
        , justifyContent:"space-between" 
        ,paddingBottom:"5px" ,bgcolor:"#ffff",     paddingX: "20px",
        paddingY: "5px",
        borderRadius: "20px",}}>
        <Typography sx={{color:"secondary.main",   fontSize:{
            lg:30,
            md:30,
            sm:20,
            xs:20
         }, }}> تخفیفات</Typography>
       <Button onClick={()=>setOpen(true)} sx={{ bgcolor:"secondary.main" , color:"white", borderRadius:"20px", 
       paddingX:"20px", height:"30px", marginTop:1}}> افزودن کوپن جدید</Button>
        </Box>
        <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginTop: "20px",
          paddingX: "20px",
        }}
      >
        <Box sx={{ fill: "gray", marginTop: "7px",paddingX:1 }} >
        <SearchIcon  />
        </Box>
     
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>

      <DiscountTable setOpen={setOpen}/>
            </Box>}
       


    </Box>);
}
 
export default Discounts;