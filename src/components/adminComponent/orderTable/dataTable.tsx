import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props{
  rows:Array<{
 
    _id:string;
    totalPrice:string;
    user:string;
    deliveryStatus:string;
    deliveryDate:string;
    data6:string;
   
  }>
  title:[
    name1:string,
    name2:string,
    name3:string,
    name4?:string,
    name5?:string,
    name6?:string
  ]
}

export default function BasicOrderTable({rows,title}:Props) {
  return (
    <TableContainer sx={{ height:400}} component={Paper}>
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
              <TableCell align="center">{row._id}</TableCell>
              <TableCell align="center">{row.totalPrice}</TableCell>
              <TableCell align="center">{row.user.firstname}</TableCell>
              <TableCell align="center">{row.totalPrice }</TableCell>
              <TableCell align="center">{row.deliveryStatus?" ارسال شده":"در حال بررسی"}</TableCell>
              <TableCell align="center">{row.deliveryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}