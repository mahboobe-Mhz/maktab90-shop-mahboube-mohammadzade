import { Box, Typography, Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import PaginationControlled from "../pagination";
import useGetPaginationProducts from "../../../api/services/products/usePaginationProducts";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditData,
  setIsEditing,
  storeAppState,
} from "../../../redux/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColleagueBasicTable from "./contentTable";
import AddContentModal from "./addContentModal";
const ColleagueContentTable = () => {
  const appState = useSelector(storeAppState);
  const [searchParams, setSearchParams] = useSearchParams();
const [open ,setOpen]=React.useState(false)
  const [filter, setFilter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [countPage, setCountPage] = React.useState<number>();
  const { data, isLoading, refetch, isError } = useGetPaginationProducts(
    page,
    4,
    filter
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //first render
  React.useEffect(() => {
    const req = axios.get(`http://localhost:8000/api/products?limit=100`);
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    if (isError) {
      toast.error("خطایی روی داده دوباره تلاش کنید", {
        position: "top-right",
      });
    }
  }, [data]);

  //for pagination-
  React.useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 100);
  }, [page, filter, searchParams.get("status"), appState.isEdit]);

  //filter



  const NavigateAddProduct = () => {
    dispatch(setIsEditing({ isEdit: false }));
    navigate("/admin/colleagueAddProduct");
  };
// tableInfo
const [alignment, setAlignment] = React.useState<string | null>('right');

const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | null,
) => {
  setAlignment(newAlignment);
};


  return (
    <div >
        <AddContentModal open={open} setOpen={setOpen} />
          <Box sx={{ height: "90%" , paddingX:"20px"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#ffff",
          alignItems: "center",
          paddingX: "20px",
        
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
          محتوی
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
          افزودن محتوی
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
         
          paddingX: "20px",
        }}
      >
        <SearchIcon sx={{ fill: "gray", marginTop: "3px" }} />
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>
      <Box >
        {!isLoading && (
          <ColleagueBasicTable 
          open={open}
          setOpen={setOpen}
            refetch={refetch}
            rows={data.data.products}
            title={[
              "عکس محصول",
              "نام محصول",
              "توضیحات",
              "عملیات",
            ]}
          />
        )}
        <PaginationControlled
          setPage={setPage}
          page={page}
          countPage={countPage}
        />
      </Box>
    </Box>
    </div>

  );
};

export default ColleagueContentTable;
