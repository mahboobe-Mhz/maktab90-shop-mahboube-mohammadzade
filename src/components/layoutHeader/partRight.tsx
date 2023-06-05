import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Menu from "../kit/nestedMenu/menu";
import { useState } from "react";


const RightPartOfMainLayout = () => {
   const [flag, setFlag] = useState(false);

   const handleClick = () => {
     setFlag(!flag);
     console.log(flag);

     
   };
    return ( <Box sx={{display:"flex", direction:"rtl", gap:"7px", padding:"20px"}}>
   
    <Typography  

    sx={{  '&:hover': {
      cursor: 'pointer',
      color:"#fd6e54"
    }}}>
         صفحه اصلی
    </Typography>
    <Typography  >
       .
    </Typography>
    <Box   
    onClick={()=>console.log("hiii") }  
       sx={{ zIndex:"3", '&:hover': {
      cursor: 'pointer',
      color:"#fd6e54"
    }
    }}>
       <Menu />
      
    </Box>
    <Typography >
       .
    </Typography>
    <Typography  sx={{  '&:hover': {
      cursor: 'pointer',
      color:"#fd6e54"
    }}}>
       رهگیری سفارشات
    </Typography>
    <Typography >
       .
    </Typography>
    <Typography sx={{  '&:hover': {
      cursor: 'pointer',
      color:"#fd6e54"
    }}}>
       پنل نمایندگان
    </Typography>

    </Box> );
}
 
export default RightPartOfMainLayout;