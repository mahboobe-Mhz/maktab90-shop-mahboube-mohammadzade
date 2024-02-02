import { Box, Typography, Paper, Button, Input } from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { useState } from "react";
import SearchIcon from "../../svg/searchIcon";

import PaginationControlled from "../pagination";
import AsnafTable from "./asnafTable";
import InsertSenfModal from "./insertSenfModal";
const Asnaf = () => {
const [open , setOpen]=useState(false)
  return (
    <Box sx={{ height: "90%" }}>

        <Box>
            <InsertSenfModal open={open} setOpen={setOpen}/>
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
          اصناف
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
          افزودن صنف
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
            <AsnafTable />
            <PaginationControlled countPage={1} page={1} setPage={1} />
          </Box>
        </Box>

    </Box>
  );
};

export default Asnaf;
