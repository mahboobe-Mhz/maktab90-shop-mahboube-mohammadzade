import {
    Box,
    Typography,
    Button,
    Input,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import BasicTable from "./priceTable";
  import {  useState, useEffect } from "react";
  import PaginationControlled from "../../pagination";
  import axios from "axios";
import useGetPaginationProducts from "../../../api/services/products/usePaginationProducts";
  
  const PriceTable = () => {
    const [page, setPage] =useState(1);
    const [countPage, setCountPage] =useState<number>();
    const [filterData, setFilterData] =useState("");
    const { data, isLoading, refetch } = useGetPaginationProducts(page, 5,filterData);
  
   useEffect(() => {
      const req = axios.get(`http://localhost:8000/api/products`);
      req.then((res) => {
        const lengthCat = res.data.data.products.length / 5;
        const correctNum = Math.round(lengthCat);
        setCountPage(correctNum);
      });
    }, []);
 useEffect(()=>{
  refetch()
 },[page,filterData])
  
    const quantityFun = () => {
      setPage(1)
      setFilterData('quantity=0')
      const req = axios.get(`http://localhost:8000/api/products?quantity=0`);
      req.then((res) => {
        const lengthCat = res.data.data.products?.length/5;     
        const correctNum= Math.round(lengthCat);
        setCountPage(correctNum);
      })
    
   
    };
    const priceFun = () => {
      setPage(1)
      setFilterData("price=0")
      const req = axios.get(`http://localhost:8000/api/products?price=0`);
      req.then((res) => {
        const lengthCat = res.data.data.products?.length/5;     
        const correctNum= Math.round(lengthCat);
        setCountPage(correctNum);
      })  

    };
    const allProducts = () => {
      setFilterData("")
      setPage(1)
      const req = axios.get(`http://localhost:8000/api/products`);
      req.then((res) => {
        const lengthCat = res.data.data.products?.length/5;     
        const correctNum= Math.round(lengthCat);
        setCountPage(correctNum);
      })

    };
  
    return (
      <Box sx={{ height:"100%" }}>
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
          
           قیمت و موجودی
          </Typography>
          <Button
            sx={{
              color: "#ffff",
              paddingX: "30px",
              bgcolor: "secondary.main",
              borderRadius: "50px",
            }}
          >
          
        ذخیره
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
          {!isLoading  &&
            <BasicTable
              rows={ data.data.products}
              title={[ "نام محصول", "قیمت", "موجودی","عملیات"]}
            />
          }
          <PaginationControlled 
            setPage={setPage}
            page={page}
            countPage={countPage}
          />
        </Box>
      </Box>
    );
  };
  
  export default PriceTable;
  