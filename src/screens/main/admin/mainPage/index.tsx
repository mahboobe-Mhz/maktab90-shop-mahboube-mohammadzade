import { Box, Grid, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { addBreadCrumb } from "../../../../redux/slice/appSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../../../../routes";
import AdminHeader from "../../../../components/adminComponent/adminHeader";
const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (<Box sx={{width:"100%" , height:"100%"}}> 
   <AdminHeader/>
    <Grid
      sx={{ paddingY: "20px", paddingX: "30px", direction: "rtl" }}
      container
      spacing={5}
    >
      <Grid item md={4} sm={6} xs={12}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontSize: "30px",
            fontWeight: "50px",
            borderRadius: "50px",
            paddingY: "30px",
            backgroundColor: "secondary.main",
            color: "#ffff",
          }}
        >
          <ChatIcon sx={{ width: "80px", height: "80px", fill: "#ffff" }} />
          <h1>مدیریت نوشته ها</h1>
        </Paper>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Paper
          onClick={() => {
            dispatch(
              addBreadCrumb({
                BreadCrumb: "سفارشات",
              })
            ),
              navigate(routes.ADMIN.products);
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontSize: "30px",
            fontWeight: "50px",
            borderRadius: "50px",
            paddingY: "30px",
            backgroundColor: "secondary.main",
            color: "#ffff",
          }}
        >
          <StorefrontIcon
            sx={{ width: "80px", height: "80px", fill: "#ffff" }}
          />
          <h1>مدیریت فروشگاه</h1>
        </Paper>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Paper
        onClick={()=>{navigate("/admin/AddSuperAdmin")}}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontSize: "30px",
            fontWeight: "50px",
            borderRadius: "50px",
            paddingY: "30px",
            backgroundColor: "secondary.main",
            color: "#ffff",
          }}
        >
          <PeopleIcon sx={{ width: "80px", height: "80px", fill: "#ffff" }} />
          <h1>همکاران</h1>
        </Paper>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontSize: "30px",
            fontWeight: "50px",
            borderRadius: "50px",
            paddingY: "30px",
            backgroundColor: "secondary.main",
            color: "#ffff",
          }}
        >
          <EmailIcon sx={{ width: "80px", height: "80px", fill: "#ffff" }} />
          <h1>ایمیل ها</h1>
        </Paper>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Paper
         onClick={()=>{navigate("/admin/contactsPage")}}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            fontSize: "30px",
            fontWeight: "50px",
            borderRadius: "50px",
            paddingY: "30px",
            backgroundColor: "secondary.main",
            color: "#ffff",
          }}
        >
          <PersonIcon sx={{ width: "80px", height: "80px", fill: "#ffff" }} />
          <h1>مخاطبان</h1>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
};

export default MainPage;
