import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../redux/slice/appSlice";
import { routes } from "../../../routes";

export default function ControlledAccordions2() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        sx={{ width: "100%", bgcolor: "secondary.main", fontFamily: "nimkat" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fill: "#ffff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: "#ffff" }}>
            {" "}
            <ShoppingBasketIcon /> سفارشات
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            onClick={() => {
              dispatch(
                addBreadCrumb({
                  BreadCrumb: "سفارشات",
                })
              ),
           
                navigate(routes.ADMIN.orders);
          
           

            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#ffff",
              fontFamily: "nimkat",
              paddingLeft: "140px",
            }}
          >
            سفارشات
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
