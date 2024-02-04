import { Box, Typography, Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BasicTable from "./useTable";
import * as React from "react";
import PaginationControlled from "../pagination";
import useGetPaginationProducts from "../../../api/services/products/usePaginationProducts";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from "react-redux";
import {
  setEditData,
  setIsEditing,
  storeAppState,
} from "../../../redux/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowTableBox = () => {
  const appState = useSelector(storeAppState);
  const [searchParams, setSearchParams] = useSearchParams();
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
  const quantityFun = () => {
    const req = axios.get(
      `http://localhost:8000/api/products?quantity=0&limit=100`
    );
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    setPage(1);
    setFilter("quantity=0");
  };
  const priceFun = () => {
    setPage(1);
    setFilter("price=0");
    const req = axios.get(
      `http://localhost:8000/api/products?price=0&limit=100`
    );
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
  };
  const allProducts = () => {
    setFilter("");
    setPage(1);
    const req = axios.get(`http://localhost:8000/api/products?limit=100`);
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
  };
  const NavigateAddProduct = () => {
    dispatch(setIsEditing({ isEdit: false }));
    navigate("/admin/control/addProduct?status=add");
  };
  //tabs
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "90%" }}>
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
          محصولات
        </Typography>
        <Button
          onClick={NavigateAddProduct}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          {" "}
          افزودن محصول
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: {
            lg: 5,
            md: 5,
            sm: 2,
            xs: 2,
          },
          color: "gray",
          height: {
            lg: 80,
            md: 50,
            sm: 40,
            xs: 40,
          },
          padding: {
            lg: 3,
            md: 2,
            sm: 2,
            xs: 1,
          },
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
        <Tab
               onClick={allProducts}
          value="one"
          label="تمام محصولات"
          wrapped  sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}
        />
        <Tab   onClick={quantityFun} value="two" label="اتمام موجودی"   sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}/>
        <Tab     onClick={priceFun} value="three" label="بدون قیمت"   sx={{color:"black", fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },}}/>
      </Tabs>
    

  
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginBottom: "5px",
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
      <Box sx={{ marginBottom: 3 }}>
        {isLoading ? (
           <div className="loading ">
           <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" ><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" /><g><circle cx="16" cy="64" r="16" fill="#e5642f"/><circle cx="16" cy="64" r="14.344" fill="#e5642f" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#e5642f" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#e5642f" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#e5642f" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#e5642f" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#e5642f" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#e5642f" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>
           </div>
        ) :(
          <BasicTable
            refetch={refetch}
            rows={data.data.products}
            title={[
              "عکس محصول",
              "نام محصول",
              "قیمت",
              "موجودی",
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
  );
};

export default ShowTableBox;
