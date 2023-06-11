import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Menu from "../../kit/nestedMenu/menu";
import {  useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const RightPartOfMainLayout = () => {

  const Navigate = useNavigate();
  const navigateLogin = () => {
    Navigate(routes.ADMIN.login)

  };
  return (
    <Box
      sx={{ display: "flex", direction: "rtl", gap: "7px", padding: "20px" }}
    >
      <Typography
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "#fd6e54",
          },
        }}
      >
        صفحه اصلی
      </Typography>
      <Typography>.</Typography>
      <Box
        onClick={() => console.log("hiii")}
        sx={{
          zIndex: "3",
          "&:hover": {
            cursor: "pointer",
            color: "#fd6e54",
          },
        }}
      >
        <Menu />
      </Box>
      <Typography>.</Typography>
      <Typography
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "#fd6e54",
          },
        }}
      >
        رهگیری سفارشات
      </Typography>
      <Typography>.</Typography>
      <Typography
      onClick={navigateLogin}
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "#fd6e54",
          },
        }}
      >
        پنل نمایندگان
      </Typography>
    </Box>
  );
};

export default RightPartOfMainLayout;
