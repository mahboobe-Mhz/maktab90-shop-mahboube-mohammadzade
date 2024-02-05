import { Box, Typography, Paper, Button, Input } from "@mui/material";
import { useState } from "react";
import SearchIcon from "../../svg/searchIcon";

import PaginationControlled from "../pagination";
import InsertCityModal from "./insertCityModal";
import CityTable from "./cityTable";

const AddCity = () => {
const [open , setOpen]=useState(false)
  return (
    <Box sx={{ height: "90%" }}>

        <Box>
            <InsertCityModal open={open} setOpen={setOpen}/>
            <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#ffff",
          alignItems: "center",
          paddingX: "20px",
          paddingY: "5px",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: {
              lg: 30,
              md: 30,
              sm: 20,
              xs: 20,
            },
          }}
        >
          {" "}
          شهرها
        </Typography>
        <Button
        onClick={()=>setOpen(true)}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          {" "}
          افزودن شهر
        </Button>
      </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              borderRadius: "50px",
              bgcolor: "#ffff",
              marginTop: "20px",
              paddingX: "20px",
              marginBottom:"20px"
            }}
          >
            <Box sx={{ fill: "gray", marginTop: 1, paddingX: 1 }}>
              <SearchIcon />
            </Box>

            <Input
              placeholder="جستجو"
              sx={{ width: "100%", outline: "none" }}
              type="text"
            ></Input>
          </Box>
      
          <Box>
            <CityTable />
            <PaginationControlled countPage={1} page={1} setPage={1} />
          </Box>
        </Box>

    </Box>
  );
};

export default AddCity;
