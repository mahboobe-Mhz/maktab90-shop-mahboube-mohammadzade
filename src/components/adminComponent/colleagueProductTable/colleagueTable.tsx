import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Box, Typography} from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from 'react-router';
import { routes } from '../../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { setEditData, setEditId, setIsEditing, setNotMOdal, storeAppState } from '../../../redux/slice/appSlice';
import axios from 'axios';

import useDeleteProduct from '../../../api/services/products/useDeleteProduct';
import NotificationModal from '../../kit/notModal';


interface Props{
  rows:Array<{
   _id:string;
    name:string;
    images:any;
    price:number;
    quantity:number;
    description:string
  }>
  title:[
    name1:string,
    name2:string|undefined,
    name3:string|undefined,
    name4?:string|undefined,
    name5?:string|undefined,
    name6?:string|undefined,
  ]
  refetch:any
}

export default function ColleagueBasicTable({rows,title,refetch}:Props) {

  const navigate= useNavigate()
  const dispatch= useDispatch()
  const [deletionError, setDeletionError] = React.useState(null);
  const { mutate, isLoading: isDeleting }= useDeleteProduct(setDeletionError)
  const [editId ,setEditedId] =React.useState("")
  const [state ,setState] =React.useState(false)
  const [titleText ,setTitleText]=React.useState("")
  const [deleteId ,setDeleteId]=React.useState()

 
  const handelEdit=(event:any)=>{
    setEditedId(event.currentTarget.id)
    setTimeout(() => {
           navigate(routes.ADMIN.addProduct)
    }, 100);

    setState(!state)
    dispatch(setIsEditing({isEdit:true}))
   
  }
  React.useEffect(()=>{
    const req =  axios.get(`http://localhost:8000/api/products/${editId}`);
    req.then((res) => {
      dispatch(setEditData({
      selectEditData:res.data.data.product
    })),
    dispatch(setEditId({editId:{catId:res.data.data.product.category._id, subCatId:res.data.data.product.subcategory._id}}))
  
  })
  },[state])

  const HandelDelete =(event:any)=>{
    dispatch(setNotMOdal({ notModal: true }));  
    isDeleting?setTitleText(`برخورد کرده ایید  ${deletionError}   به مشکل`):setTitleText(`اطمینان  دارید ؟ ${event.target.dataset.user}  ایا از حذف `)
    setDeleteId(event.currentTarget.id)
  }
const deleteItem=()=>{
 mutate(deleteId) 
}
  return (<Box sx={{direction:""}}>
    <NotificationModal titleText={titleText} deleteItem={deleteItem}     refetch={refetch}/>
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
              <TableCell  align="center">
                <Typography sx={{width:{lg:400,md:300,xs:200},height:"50px",overflow:"hidden"}}>
                  <div  dangerouslySetInnerHTML={{ __html: row?.description}}/>
               
                </Typography>
           
                
                </TableCell>
              <TableCell align="center">   <Box sx={{display:"flex"}}>
                
                    <DeleteOutlineOutlinedIcon
                       id={row._id}
                    onClick={HandelDelete}
                    data-user={row.name}
                      sx={{ color: "secondary.main" }}
                    />
                    <ModeEditOutlineOutlinedIcon
                        id={row._id}
                        data-user={row.name}
                    onClick={handelEdit}
                      sx={{ color: "secondary.main" }}
                    />
                
                  </Box></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></Box>
  );
}