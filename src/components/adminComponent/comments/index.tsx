import { Box, Typography, Paper, Button, Input } from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { useState } from "react";
import SearchIcon from "../../svg/searchIcon";
import CommentsTable from "./commentsTable";
import PaginationControlled from "../pagination";
const Comments = () => {
  const [isComments, setIsComments] = useState<boolean>(false);
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              borderRadius: "50px",
              bgcolor: "#ffff",
              marginTop: "20px",
              paddingX: "20px",
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
            }}
          >
            <Typography
              sx={{
                ":hover": {
                  cursor: "pointer",
                  borderBottom: "solid",
                  borderColor: "secondary.main",
                },
                fontSize: {
                  lg: 16,
                  md: 15,
                  xs: 12,
                },
              }}
            >
              {" "}
              تمام نظرات
            </Typography>
            <Typography
              sx={{
                ":hover": {
                  cursor: "pointer",
                  borderBottom: "solid",
                  borderColor: "secondary.main",
                },
                fontSize: {
                  lg: 16,
                  md: 15,
                  xs: 12,
                },
              }}
            >
              {" "}
              در انتظار تایید
            </Typography>

            <Typography
              sx={{
                ":hover": {
                  cursor: "pointer",
                  borderBottom: "solid",
                  borderColor: "secondary.main",
                },
                fontSize: {
                  lg: 16,
                  md: 15,
                  xs: 12,
                },
              }}
            >
              {" "}
              تایید شده
            </Typography>
            <Typography
              sx={{
                ":hover": {
                  cursor: "pointer",
                  borderBottom: "solid",
                  borderColor: "secondary.main",
                },
                fontSize: {
                  lg: 16,
                  md: 15,
                  xs: 12,
                },
              }}
            >
              {" "}
              نظرات حذف شده
            </Typography>
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
