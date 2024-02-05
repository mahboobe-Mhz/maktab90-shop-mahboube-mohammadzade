import { Box, Typography, Button } from "@mui/material";
import SideBar from "../../../../components/adminComponent/sideBar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
import { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChatIcon from "@mui/icons-material/Chat";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from '@mui/icons-material/Logout';
import DiscountIcon from '@mui/icons-material/Discount';
import HomeNetMenu from "../../../../components/userComponent/homenetMenu";
const ProductsManagement = () => {
  const AppState = useSelector(storeAppState);
  const [showMenu,setShowMenu]=useState<boolean>(false)

  const name = AppState.BreadCrumb;

  return (
    <Box sx={{ display: "flex", direction: "rtl", height: "100vh", width:"100%" }}>
  
      <div className="md:flex hidden ">
        <SideBar />
      </div>
      <div className="flex md:hidden">
        {
          showMenu? <SideBar />: <Box onClick={()=>setShowMenu(true)} sx={{display:"flex", flexDirection:"column",gap:"10px",
          bgcolor:"secondary.main", color:"white", padding:"5px"}} >
              <StorefrontIcon  />
              <LocalOfferIcon />
              <ShoppingBasketIcon /> 
              <ChatIcon />
              <DiscountIcon  />
            <EqualizerIcon />
            <LogoutIcon />


             </Box>
        }
      </div>
     
    
      <Box onClick={()=>setShowMenu(false)} sx={{ padding: "15px", bgcolor: "#F3F3F5", width: "100%", height:"100%"}}>
   <Box sx={{display:"flex" , justifyContent:"space-between"}}>
   <Box sx={{ display: "flex" }}>
          
          <Typography sx={{ color: "secondary.main" }}> برنامه ها</Typography>
          <KeyboardArrowLeftIcon />
          <Typography> فروشگاه</Typography>
          {AppState.BreadCrumb && (
            <>
              <KeyboardArrowLeftIcon /> <Typography>{name} </Typography>{" "}
            </>
          )}
            
        </Box>
        <span>  <HomeNetMenu/></span>
         </Box>
      
   
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProductsManagement;
