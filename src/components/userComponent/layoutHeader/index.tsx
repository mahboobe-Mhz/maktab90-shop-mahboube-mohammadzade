import {  Box, Grid, Paper } from "@mui/material";
import RightPartOfMainLayout from "./partRight";
import LeftPartOfMainLayout from "./partLeft";


const MainHeader = () => {
    return ( 
      <Grid sx={{  direction:"rtl"  , boxShadow:"0px 2px 5px gray"}} container  spacing={5}>
        <Grid item md={4}>
        <RightPartOfMainLayout /></Grid> 
          <Grid sx={{display:"flex", justifyContent:"center"}}   item md={4}>
                
      <Box paddingTop={1} >
      <img width={200} height={50} src="/logo/logo-01.png"></img>
      </Box>
          </Grid>
             <Grid sx={{display:"flex", justifyContent:"flex-end"}}  item md={4}>
             <LeftPartOfMainLayout/>
             </Grid>

     
   
      </Grid>
   );
}
 
export default MainHeader;