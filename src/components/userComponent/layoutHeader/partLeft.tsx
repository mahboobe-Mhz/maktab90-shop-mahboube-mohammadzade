import { Box } from "@mui/system";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import ComboBox from "../../kit/searchBox";
import {  useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const LeftPartOfMainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const myFunction = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const navigateToLogin =()=>{
    navigate(routes.USERS.index)
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        paddingBottom: "17px",
        paddingLeft: "20px",
      }}
    >
      {isOpen ? (
        <img width={20} onClick={myFunction} src="/icons/icon-04.svg"></img>
      ) : (
        <>
          {" "}
          <ComboBox />
          <ClearIcon
            sx={{ color: "#fd6e54", paddingTop: "17px" }}
            onClick={myFunction}
          ></ClearIcon>
        </>
      )}

      <img width={20} src="/icons/icon-03.svg"></img>

  
      <img className="changColor" onClick={navigateToLogin} width={20} src="/icons/icon-01.svg"></img>
    </Box>
  );
};

export default LeftPartOfMainLayout;
