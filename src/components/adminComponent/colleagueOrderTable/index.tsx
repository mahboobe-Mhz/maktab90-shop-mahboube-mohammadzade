import { Box, Typography, Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import PaginationControlled from "../pagination";
import axios from "axios";
import useGetPaginationOrders from "../../../api/services/products/useGetAllpaginatonOrders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicColleagueOrderTable from "./coleageOrderTable";

const ShowOrderTableBox = () => {
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState("");
  const { data, isLoading, refetch, isError } = useGetPaginationOrders(
    page,
    5,
    filter
  );
  const [countPage, setCountPage] = React.useState<number>();

  React.useEffect(() => {
    const req = axios.get(`http://localhost:8000/api/orders?limit=100`);
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 5 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    if (isError) {
      toast.error("خطایی روی داده دوباره تلاش کنید", {
        position: "top-right",
      });
    }
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 100);
  }, [page, filter]);
  const allOrders = () => {
    setFilter("");
    setPage(1);
    const req = axios.get(`http://localhost:8000/api/orders?limit=100`);
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    refetch();
  };
  const notPay = () => {
    setPage(1);
    setFilter("price=0");
    const req = axios.get(`http://localhost:8000/api/orders?price=0&limit=100`);
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    refetch();
  };
  const notAcceptOrders = () => {
    setPage(1);
    setFilter("deliveryStatus=false");
    const req = axios.get(
      `http://localhost:8000/api/orders?deliveryStatus=false&limit=100`
    );
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    refetch();
  };
  const acceptOrders = () => {
    setPage(1);
    setFilter("deliveryStatus=true");
    const req = axios.get(
      `http://localhost:8000/api/orders?deliveryStatus=true`
    );
    req.then((res) => {
      const lengthCat = res.data.data.orders.length / 4 + 0.26;
      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    refetch();
  };

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
          سفارشات
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
        <SearchIcon sx={{ fill: "gray", marginTop: "3px", marginX: 1 }} />
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
          onClick={allOrders}
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
            fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
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
            fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
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
            fontSize: {
              lg: 16,
              md: 15,
              xs: 12,
            },
          }}
        >
          {" "}
          سفارشات تایید شده
        </Typography>
   
      </Box>
      <Box>
        {isLoading ? (
          <span>loading ...</span>
        ) : (
          <BasicColleagueOrderTable
            rows={data.data.orders}
            refetch={refetch}
            title={["شناسه", "مشتری", "جمع کل", "وضعیت", "تحویل تاریخ"]}
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

export default ShowOrderTableBox;
