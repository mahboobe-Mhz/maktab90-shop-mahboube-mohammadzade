import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { setOrderModal } from '../../../redux/slice/appSlice';
import OrderModalTable from '../orderModal';
import { UseQueryResult } from 'react-query';
import { OrderDataType } from '../../../api/interface/order';
interface Props{
  rows:Array<OrderDataType>
  title:[
    name1:string,
    name2:string,
    name3:string,
    name4?:string,
    name5?:string,
    name6?:string
  ]
  refetch: () => Promise<UseQueryResult>
}

export default function BasicColleagueOrderTable({rows,title,refetch}:Props) {
 const[modalInfo,setModalInfo]=React.useState<OrderDataType|undefined>()
  const dispatch = useDispatch();
  const handleShowOrderModal =(event:any)=>{
    
    const modalData =rows.find((item:any) => item._id===event.currentTarget.id)
    setModalInfo(modalData)
    
    dispatch(setOrderModal({ orderModal: true }));
  }
  return (
    <TableContainer  component={Paper}>
      <OrderModalTable orderData={modalInfo} refetch={refetch}/>
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell align="center">  {title[0]}</TableCell>
            <TableCell align="center">  {title[1]}</TableCell>
            <TableCell align="center">  {title[2]}</TableCell>
            <TableCell align="center">  {title[3]}</TableCell>
            <TableCell align="center">  {title[4]}</TableCell>
            <TableCell align="center">  {title[5]}</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row?._id}</TableCell>
              <TableCell align="center">{row?.user.firstname}</TableCell>
              <TableCell align="center">{row?.totalPrice }</TableCell>
              <TableCell align="center">{row?.deliveryStatus?" ارسال شده":"در حال بررسی"}</TableCell>
              <TableCell align="center">{new Date(row.deliveryDate).toLocaleDateString('fa-IR')}</TableCell>
              <TableCell onClick={handleShowOrderModal} id={row?._id} align="center" sx={{":hover":{cursor:"pointer"}}}> <MenuIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}