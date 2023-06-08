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
    id:string;
    name:string;
    images:any;
    price:number;
    quantity:number;
    description:string
  }>
  title:Array<[
    name1:string,
    name2:string,
    name3:string,
    name4?:string,
    name5?:string
  ]
    
     
  >
}

export default function BasicTable({rows,title}:Props) {
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
   
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              <img width={50} src={`http://localhost:8000/images/products/images/${row.images?.[0]}`}/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}