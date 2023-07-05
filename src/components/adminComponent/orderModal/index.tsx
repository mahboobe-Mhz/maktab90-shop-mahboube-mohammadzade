import Modal from "@mui/material/Modal";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper, Box, Typography, TableHead, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setModal,
  setOrderModal,
  storeAppState,
} from "../../../redux/slice/appSlice";
import { instance } from "../../../api/constants";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OrderModal(orderData: any,refetch:any) {
  
  
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
  const handleClose = () => dispatch(setOrderModal({ orderModal: false }));

  const handleSendOrder = () => {
    const delivery={
      deliveryStatus:true
    }
    instance({ method:"PATCH", data:delivery, url:`/orders/${orderData?.orderData?._id}`})
    refetch()
  };
  return (
    <div>
      <Modal
        open={appState.orderModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "right" }}>
            <Typography>
              {" "}
              نام مشتری :{orderData?.orderData?.user.firstname}{" "}
              {orderData?.orderData?.user.lastname}{" "}
            </Typography>
            <Typography>
              {" "}
              ادرس : {orderData?.orderData?.user.address}{" "}
            </Typography>
            <Typography>
              {" "}
              تلفن : {orderData?.orderData?.user.phoneNumber}
            </Typography>
            <Typography>
              {" "}
              زمان تحویل :{" "}
              {new Date(orderData?.orderData?.deliveryDate).toLocaleDateString(
                "fa-IR"
              )}
            </Typography>
            <Typography>
              زمان سفارش :{" "}
              {new Date(orderData?.orderData?.createdAt).toLocaleDateString(
                "fa-IR"
              )}
            </Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"> قیمت</TableCell>
                  <TableCell align="center"> تعداد</TableCell>
                  <TableCell align="center"> کالا</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData?.orderData?.products.map((row: any) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.product?.price}</TableCell>
                    <TableCell align="center">{row?.count}</TableCell>
                    <TableCell align="center">{row.product?.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {orderData?.orderData?.deliveryStatus ?   <Button  disabled sx={{bgcolor:"#ffff", marginTop:5}} onClick={handleSendOrder}> ارسال شده </Button>:
             <Button  sx={{bgcolor:"secondary.main", color:"#ffff"}} onClick={handleSendOrder}> ارسال شد </Button>
          }
       
        </Box>
      </Modal>
    </div>
  );
}
