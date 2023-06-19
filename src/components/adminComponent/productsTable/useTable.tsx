import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Box} from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from 'react-router';
import { routes } from '../../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { setEditData, setIsEditing, storeAppState } from '../../../redux/slice/appSlice';
import axios from 'axios';
import { instance } from '../../../api/constants';


interface Props{
  rows:Array<{
   _id:string;
    name:string;
    images:any;
    price:number;
    quantity:number;
    description:string
  }>
  title:Array<[
    name1:string|undefined,
    name2:string,
    name3:string,
    name4?:string,
    name5?:string
  ]  
  >
  refetch:any

}

export default function BasicTable({rows,title,refetch}:Props) {
  const navigate= useNavigate()
  const dispatch= useDispatch()

  const [editId ,setEditId] =React.useState("")
  const [state ,setState] =React.useState(false)
  const handelEdit=(event)=>{
    setEditId(event.currentTarget.id)

    setTimeout(() => {
           navigate(routes.ADMIN.addProduct)
    }, 100);

    setState(!state)
    dispatch(setIsEditing({isEdit:true}))
  }
  React.useEffect(()=>{
    const req =  axios.get(`http://localhost:8000/api/products/${editId}`);
    req.then((res) => {dispatch(setEditData({
      selectEditData:res.data.data.product
    }))})
  },[state])

  const handelDelete =(event)=>{
    console.log(event.currentTarget.id);
    
    instance({ method:"DELETE", url:`/products/${event.currentTarget.id}`})
    refetch()
  }

  return (
    <TableContainer  component={Paper}>
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
        <TableBody >
          {rows?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              <img width={50} src={`http://localhost:8000/images/products/images/${row.images?.[0]}`}/>
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">   <Box>
                    <DeleteOutlineOutlinedIcon
                       id={row._id}
                    onClick={handelDelete}
                      sx={{ color: "secondary.main" }}
                    />
                    <ModeEditOutlineOutlinedIcon
                        id={row._id}
                    onClick={handelEdit}
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