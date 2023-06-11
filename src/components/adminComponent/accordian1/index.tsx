import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBreadCrumb } from "../../../redux/slice/appSlice";
import { routes } from "../../../routes";

export default function ControlledAccordions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState<string | false>(false);

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
            <LocalOfferIcon /> کاتالوگ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            onClick={() => {
              dispatch(
                addBreadCrumb({
                  BreadCrumb: "محصولات",
                })
              ),
                navigate(routes.ADMIN.products);
            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#ffff",
              fontFamily: "nimkat",
              paddingLeft: "140px",
            }}
          >
            محصولات
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button
            onClick={() => {
              dispatch(
                addBreadCrumb({
                  BreadCrumb: " قیمت و موجودی",
                })
              ),
                navigate(routes.ADMIN.price);
            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#ffff",
              fontFamily: "nimkat",
              paddingLeft: "100px",
            }}
          >
          قیمت و موجودی
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button
            onClick={() => {
              dispatch(
                addBreadCrumb({
                  BreadCrumb: "دسته ها",
                })
              ),
                navigate(routes.ADMIN.category);
            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#ffff",
              fontFamily: "nimkat",
              paddingLeft: "140px",
            }}
          >
            دسته ها
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button
            onClick={() => {
              dispatch(
                addBreadCrumb({
                  BreadCrumb: "برچسب ها",
                })
              ),
                navigate(routes.ADMIN.label);
            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#ffff",
              fontFamily: "nimkat",
              paddingLeft: "135px",
            }}
          >
            برچسب ها
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
