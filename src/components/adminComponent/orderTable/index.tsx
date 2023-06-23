import { Box, Typography, Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import useGetAllOrders from "../../../api/services/products/useGetAllOrders";
import { useState } from "react";
import BasicOrderTable from "./dataTable";
import PaginationControlled from "../../pagination";
import axios from "axios";
import useGetPaginationOrders from "../../../api/services/products/useGetAllpaginatonOrders";


const ShowTableBox = () => {
  const [page, setPage] = React.useState(1);
  const [filter,setFilter]=React.useState("");
  const { data, isLoading, refetch } = useGetPaginationOrders(page,5,filter);

  const [countPage, setCountPage] = React.useState<number>();
  const [dataList, setDataList] = useState();
  React.useEffect(() => {
    const req = axios.get(`http://localhost:8000/api/orders`);
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 4;
      const correctNum = Math.round(lengthCat);
      setCountPage(correctNum);
    });
  }, []);

  const allOrders = () => {
    setFilter("")
    setPage(1)
    const req = axios.get(`http://localhost:8000/api/orders`);
    req.then((res) => {
      const lengthCat = res.data.data.products?.length/5;     
      const correctNum= Math.round(lengthCat);
      setCountPage(correctNum);
    })
  };
  const notPay = () => {
    setPage(1)
    setFilter("price=0")
    const req = axios.get(`http://localhost:8000/api/orders?price=0`);
    req.then((res) => {
      const lengthCat = res.data.data.orders?.length/5;     
      const correctNum= Math.round(lengthCat);
      setCountPage(correctNum);
    })  
  };
  const notAcceptOrders = () => {
    const newDataList = data.data.orders;
    const notAcceptOrders = newDataList.filter(
      (item: any) => item.deliveryStatus === false
    );
    setDataList(notAcceptOrders);

    
  };
  const acceptOrders = () => {
    const newDataList = data.data.orders;
    const acceptOrders = newDataList.filter(
      (item: any) =>  item.deliveryStatus === true
    );
    setDataList(acceptOrders);
  };

  !isLoading && console.log(data.data.orders);

  return (
    <Box sx={{ height: "90%" }}>
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
        <Typography> سفارشات</Typography>
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
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginTop: "20px",
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
          onClick={allOrders}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          {" "}
          تمام سفارشات
        </Typography>
        <Typography
          onClick={notPay}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          {" "}
          در انتظار پرداخت
        </Typography>
        <Typography
          onClick={notAcceptOrders}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          سفارشات منتظر تایید{" "}
        </Typography>
        <Typography
          onClick={acceptOrders}
          sx={{
            ":hover": {
              cursor: "pointer",
              borderBottom: "solid",
              borderColor: "secondary.main",
            },
          }}
        >
          {" "}
          سفارشات تایید شده
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
          {" "}
          سفارشات حذف شده
        </Typography>
      </Box>
      <Box>
        {isLoading ? (
          <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.0"
            width="64px"
            height="64px"
            viewBox="0 0 128 128"
            xml:space="preserve"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
            <g>
              <circle cx="16" cy="64" r="16" fill="#e5642f" />
              <circle
                cx="16"
                cy="64"
                r="14.344"
                fill="#e5642f"
                transform="rotate(45 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="12.531"
                fill="#e5642f"
                transform="rotate(90 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="10.75"
                fill="#e5642f"
                transform="rotate(135 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="10.063"
                fill="#e5642f"
                transform="rotate(180 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="8.063"
                fill="#e5642f"
                transform="rotate(225 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="6.438"
                fill="#e5642f"
                transform="rotate(270 64 64)"
              />
              <circle
                cx="16"
                cy="64"
                r="5.375"
                fill="#e5642f"
                transform="rotate(315 64 64)"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
                calcMode="discrete"
                dur="720ms"
                repeatCount="indefinite"
              ></animateTransform>
            </g>
          </svg>
        ) : (
          <BasicOrderTable
            rows={ data.data.orders}
            title={["شناسه", " پرداخت", "مشتری", "جمع کل", "وضعیت", "تاریخ"]}
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
