import {
  Box,
  Typography,
  Button,
  Input,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useGetAllProducts from "../../../api/services/products/useGetAllProducts";
import { useState } from "react";

const ShowTableBox = () => {
  const { data, isLoading } = useGetAllProducts();

  const [dataList, setDataList] = useState();

  const quantityFun = () => {
    const newDataList = data.data.products;
    const ZiroQuantity = newDataList.filter((item:{quantity:number}) => item.quantity === 0);
    setDataList(ZiroQuantity);
  };
  const priceFun = () => {
    const newDataList = data.data.products;
    const priceLess = newDataList.filter((item:{price:number}) => item.price === 0);
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
          marginY: 2,
        }}
      >
        <Typography sx={{ color: "secondary.main",fontSize:{
           lg:30,
           md:30,
           sm:20,
           xs:20
        } }}>
          {" "}
          برچسب ها
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
          افزودن برچسب
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginBottom: "10px",
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
      <Box></Box>
    </Box>
  );
};

export default ShowTableBox;
