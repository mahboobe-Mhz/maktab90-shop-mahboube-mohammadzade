import { Box, Typography, Button } from "@mui/material";
import SideBar from "../../../../components/adminComponent/sideBar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";

const ProductsManagement = () => {
  const AppState = useSelector(storeAppState);

  const name = AppState.BreadCrumb;

  return (
    <Box sx={{ display: "flex", direction: "rtl", height: "100%", width:"100%" }}>
      <Box>
        <SideBar />
      </Box>
      <Box sx={{ padding: "15px", bgcolor: "#F3F3F5", width: "100%" ,height:"100%"}}>
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
