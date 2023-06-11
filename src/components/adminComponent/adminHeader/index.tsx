import {  Box, Grid } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const AdminHeader = () => {
    const Navigate = useNavigate();
    const navigateHome =()=>{
        Navigate("/")
    }
    return ( <div className="">
        <Grid sx={{paddingTop:"10px", paddingX:"20px",paddingBottom:"10px", direction:"rtl"  , boxShadow:"0px 2px 5px gray"}} container  spacing={5}>
        <Grid item md={4}>
            <Box sx={{display:"flex",gap:"10px"}} >
                <Box sx={{display:"flex"}}>
        <h4>کاربر: </h4>
        <h4>mah.mhz@gmail.com</h4>
        </Box>
        <h4>نقش:مالک وب سایت</h4>
        </Box>
        </Grid> 
          <Grid sx={{display:"flex", justifyContent:"center"}}   item md={4}>
                
    
      <img width={150} height={20} src="/logo/logo-01.png"></img>
   
          </Grid>
             <Grid sx={{display:"flex", justifyContent:"flex-end" , gap:"20px"}}  item md={4}>
            <h4>خروج</h4>
         
            <span className="flashIcon" >
        <img width={20} onClick={navigateHome} src="/icons/icon-02.svg"></img>
        </span>
             </Grid>

     
   
      </Grid>
    </div> );
}
 
export default AdminHeader;