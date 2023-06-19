import { Link, Outlet } from "react-router-dom";
import { routes } from "../../routes";
import { Box } from "@mui/material";
import MainHeader from "../../components/userComponent/layoutHeader";
import MainFooter from "../../components/userComponent/mainFooter";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <MainHeader />
      <Box sx={{ flex: "1", width: "100%", height: "100%" }}>
    
          <Outlet />
     
      </Box>
      <Box>
        <MainFooter />
      </Box>
    </Box>
  );
};

export default MainLayout;
