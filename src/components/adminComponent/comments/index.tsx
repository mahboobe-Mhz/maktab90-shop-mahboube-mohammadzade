import { Box, Typography, Paper, Button, Input } from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import React, { useState } from "react";
import SearchIcon from "../../svg/searchIcon";
import CommentsTable from "./commentsTable";
import PaginationControlled from "../pagination";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
const Comments = () => {
  const [isComments, setIsComments] = useState<boolean>(true);
    //tabs
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  return (
    <Box sx={{ height: "90%" }}>
      {isComments ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              bgcolor: "#ffff",
              alignItems: "center",
              paddingX: "20px",
              paddingY: "5px",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: 30,
                  md: 30,
                  sm: 20,
                  xs: 20,
                },
                color: "secondary.main",
              }}
            >
              {" "}
              نظرات
            </Typography>
          </Box>
          <Box overflow={"auto"} >
          <Box
            sx={{
              display: "flex",
              gap: {
                lg: 10,
                md: 5,
                xs: 1,
              },
              padding: "20px",
              color: "gray",
              height: {
                lg: 70,
              },
              width:{
                lg:"500px",
                xs:"410px"
              }
            }}
          >
                 <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        sx={{
          marginLeft: "auto",
          "&& .Mui-selected": { // && are used to increase the specificity
             color: "secondary.main",
             borderBottomColor:"secondary.main",
             borderBottom:{lg:"solid", md:"none",xs:"none"}
          }
        }}
      >
        <Tab  value="one" label=" تمام نظرات" wrapped 
        sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}  />
        <Tab       value="two" label=" در انتظار تایید"    sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}/>
        <Tab   value="three" label="   تایید شده"    sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}/>
             <Tab   value="four" label="     نظرات حذف شده"    sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}/>
      </Tabs>
 
          </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              borderRadius: "50px",
              bgcolor: "#ffff",
              marginTop: "20px",
              paddingX: "20px",
              marginBottom:"10px"
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
            <CommentsTable />
            <PaginationControlled countPage={1} page={1} setPage={1} />
          </Box>
        </Box>
      ) : (
        <Paper
          sx={{
            height: "90%",
            bgcolor: "#ffff",
            padding: "20px",
            borderRadius: "30px",
            marginTop: "10px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: {
                  lg: 30,
                  md: 30,
                  sm: 20,
                  xs: 20,
                },
                borderBottom: "solid",
              }}
            >
              {" "}
              نظرات
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              color: "secondary.main",
            }}
          >
            <MessageOutlinedIcon
              sx={{ color: "secondary.main", width: "120px", height: "120px" }}
            />
            <Typography>نظری ثبت نشده</Typography>
            <Typography> هیچ نظری برای نوشته های شما ثبت نشده است.</Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Comments;
