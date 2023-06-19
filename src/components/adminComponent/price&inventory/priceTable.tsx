import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Box, TextField} from '@mui/material';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EasyEdit from 'react-easy-edit';
import { instance } from '../../../api/constants';
import axios from 'axios';

interface Props{
  rows:Array<{
   _id:string;
    name:string;
    images:any;
    price:number;
    quantity:number;
    description:string
    thumbnail:any
    category:any
    subcategory:any
  }>
  title:Array<[
    name1:string|undefined,
    name2:string,
    name3:string,
    name4?:string,
    name5?:string
  ]
    
     
  >
}

export default function BasicTable({rows,title}:Props) {
  console.log(rows);
  
  const handelSavePrice=(value,name,id)=>{
    const baseData={
      price:value,
  }
   instance({ method:"PATCH", data:baseData, url:`/products/${id}`})
  
  }
  const handelSaveQuantity=(value,item,id)=>{
    const baseData={
      quantity:value,
  }
   instance({ method:"PATCH", data:baseData, url:`/products/${id}`})
  }
  const cancel = () => {alert("Cancelled")}
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="center">  {title[0]}</TableCell>
            <TableCell align="center">  {title[1]}</TableCell>
            <TableCell align="center">  {title[2]}</TableCell>
            <TableCell align="center">  {title[3]}</TableCell>
            
   
           
          </TableRow>
        </TableHead>
        <TableBody >
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center"> 
    <EasyEdit
      type="text"
     value={row.price}
      onSave={(value)=>handelSavePrice(value,'price',row._id)}
      onCancel={cancel}
      saveButtonLabel="ذخیره"
      cancelButtonLabel="لغو"
      attributes={{ name: "price", id: 1}}
      //instructions={row.price}
    />
    </TableCell>


              <TableCell align="center">
              <EasyEdit
      type="text"
      value={row.quantity}
      onSave={(value)=>handelSaveQuantity(value,'quantity',row._id)}
      onCancel={cancel}
      saveButtonLabel="ذخیره"
      cancelButtonLabel="لغو"
      attributes={{ name: "quantity", id: 1}}
  
    />
                
                </TableCell>
            
              <TableCell align="center">   <Box>
                   
                    <ModeEditOutlineOutlinedIcon
                      sx={{ color: "secondary.main" }}
                    />
                
                  </Box></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}