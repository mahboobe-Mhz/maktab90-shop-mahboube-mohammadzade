import {
  Box,
  Typography,
  Button,
  Input,
  TextField,
  TableBody,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BasicTable from "./useTable";
import * as React from "react";
import { useState } from "react";
import PaginationControlled from "../../pagination";
import useGetPaginationProducts from "../../../api/services/products/usePaginationProducts";
import axios from "axios";

const ShowTableBox = () => {
  const [page, setPage] = React.useState(1);
  const [countPage, setCountPage] = React.useState<number>();
  const [dataList, setDataList] = useState();
  const { data, isLoading, refetch } = useGetPaginationProducts(page, 5);

  React.useEffect(() => {
    const req = axios.get(`http://localhost:8000/api/products`);
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 4;
      const correctNum = Math.round(lengthCat);
      setCountPage(correctNum);
    });
  }, []);
  setTimeout(() => {
    refetch()
    !isLoading && setDataList(data.data.products);
}, 100);
  console.log(dataList);

  const quantityFun = () => {
    const newDataList = data.data.products;
    const ZiroQuantity = newDataList.filter((item: any) => item.quantity === 0);
    setDataList(ZiroQuantity);
  };
  const priceFun = () => {
    const newDataList = data.data.products;
    const priceLess = newDataList.filter((item: any) => item.price === 0);
    setDataList(priceLess);
  };
  const allProducts = () => {
    const newDataList = data.data.products;
    setDataList(newDataList);
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
        <Typography sx={{ color: "secondary.main", fontSize: 30 }}>
          {" "}
          محصولات
        </Typography>
        <Button
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
          gap: "30px",
          padding: "20px",
          color: "gray",
          height: "70px",
        }}
      >
        <Typography
          onClick={allProducts}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          {" "}
          تمام محصولات
        </Typography>
        <Typography
          onClick={priceFun}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          {" "}
          اتمام موجودی
        </Typography>
        <Typography
          onClick={quantityFun}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          بدون قیمت
        </Typography>
        <Typography
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          زباله دان
        </Typography>
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
        {!isLoading && (
          <BasicTable
            rows={dataList || data.data.products}
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
