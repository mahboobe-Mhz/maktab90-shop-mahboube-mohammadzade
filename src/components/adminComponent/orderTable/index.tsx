import { Box,Typography ,Button,Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import useGetAllOrders from "../../../api/services/products/useGetAllOrders";
import { useState } from "react";
import BasicOrderTable from "./dataTable";


const ShowTableBox = () => {
    const { data, isLoading } =  useGetAllOrders()
    const [dataList, setDataList]=useState()



    
    return ( <>
    <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"20px", bgcolor:"#ffff", alignItems:"center", paddingX:"20px", paddingY:"5px", borderRadius:"20px"}}>
                <Typography> سفارشات</Typography>
                <Button sx={{color:"#ffff", paddingX:"30px", bgcolor:"secondary.main", borderRadius:"50px"}}> افزودن محصول</Button>
            </Box>
            <Box sx={{width:"100%",display:"flex", borderRadius:"50px" ,bgcolor:"#ffff",marginTop:"20px", paddingX:"20px",}}>
                    <SearchIcon sx={{fill:"gray", marginTop:"3px"}}/> 
                <Input placeholder="جستجو" sx={{width:"100%", outline:"none" }}  type="text" ></Input>
                </Box>
            <Box sx={{display:"flex", gap:"30px", padding:"20px", color:"gray" , height:"70px" }}>
                <Typography sx={{":hover":{   cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> تمام سفارشات</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>  در انتظار پرداخت</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}>سفارشات منتظر تایید </Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> سفارشات تایید شده</Typography>
                <Typography sx={{":hover":{cursor: 'pointer', borderBottom:"solid" , borderColor:"secondary.main"}}}> سفارشات حذف شده</Typography>
            </Box>
            <Box >
           {isLoading ? <div> loading...</div> :     
               
               <BasicOrderTable rows={ data.data.orders} title={["شناسه"," پرداخت","مشتری","جمع کل","وضعیت","تاریخ"]}/>
 } 
            </Box>
    </> );
}
 
export default ShowTableBox;