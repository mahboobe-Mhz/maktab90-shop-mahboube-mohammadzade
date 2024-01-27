import { Box, Typography, Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ControlledAccordions from "../accordian1";
import ControlledAccordions2 from "../accordian2";
import ChatIcon from "@mui/icons-material/Chat";
import DiscountIcon from '@mui/icons-material/Discount';
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../redux/slice/appSlice";
import { routes } from "../../../routes";
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from "universal-cookie";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        bgcolor: "secondary.main",
        color: "#ffff",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          gap: "10px",
          paddingRight: "40px",
          borderBottom: "solid",
          height: "100px",
          width: "100%",
        }}
      >
        <StorefrontIcon sx={{ width: "50px", height: "50px" }} />
        <Typography fontSize={30}>فروشگاه</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ControlledAccordions />
        <ControlledAccordions2 />
        <Button
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: " نظرات",
              })
            ),
              navigate(routes.ADMIN.comments);
          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "160px",
            fontSize: "16px",
          }}
        >
          <ChatIcon sx={{ width: "30px" }} /> نظرات
        </Button>
        <Button
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: " نظرات",
              })
            ),
              navigate(routes.ADMIN.comments);
          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "160px",
            fontSize: "16px",
          }}
        >
          <WorkOutlinedIcon sx={{ width: "30px" }} /> اصناف
        </Button>
        <Button
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: " بنرها",
              })
            ),
              navigate(routes.ADMIN.addBanner);
          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "160px",
            fontSize: "16px",
          }}
        >
          <PhotoLibraryIcon sx={{ width: "30px" }} /> بنرها
        </Button>
     
        <Button
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: " تخفیفات",
              })
            ),
              navigate(routes.ADMIN.discount);
          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "150px",
            fontSize: "16px",
          }}
        >
          <DiscountIcon sx={{ width: "30px" }} /> تخفیفات
        </Button>
        <Button
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: " گزارشات",
              })
            ),
              navigate(routes.ADMIN.reports);
          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "150px",
            fontSize: "16px",
          }}
        >
          <EqualizerIcon sx={{ width: "30px" }} /> گزارشات
        </Button>
        <Button
          onClick={() => {
              cookies.remove('user')
              cookies.remove('refreshToken')
              cookies.remove('accessToken')
              navigate('/');

          }}
          sx={{
            color: "#ffff",
            paddingY: "15px",
            paddingLeft: "112px",
            fontSize: "16px",
          }}
        >
         <LogoutIcon sx={{paddingLeft:"3px"}}/> خروج از پنل ادمین
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
