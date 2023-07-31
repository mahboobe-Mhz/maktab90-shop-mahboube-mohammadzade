import { Box, Typography, Button } from "@mui/material";
import SideBar from "../../../../components/adminComponent/sideBar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
import { useState } from "react";

const ProductsManagement = () => {
  const AppState = useSelector(storeAppState);
  const [showMenu,setShowMenu]=useState(false)

  const name = AppState.BreadCrumb;

  return (
    <Box sx={{ display: "flex", direction: "rtl", height: "100%", width:"100%" }}>

      <div className="md:flex hidden">
        <SideBar />
      </div>
      <div className="flex md:hidden">
        {
          showMenu? <SideBar />: <div onClick={()=>setShowMenu(true)} className="px-3 bg-secondary "> </div>
        }
      </div>
      <Box onClick={()=>setShowMenu(false)} sx={{ padding: "15px", bgcolor: "#F3F3F5", width: "100%" ,overflowY:"scroll"}}>
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
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProductsManagement;
