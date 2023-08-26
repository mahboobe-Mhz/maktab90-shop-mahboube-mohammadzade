import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteDiscountModal from './deleteDiscountModal';
interface Props{
  setOpen:(open:boolean)=>void
}

export default function DiscountTable({setOpen}:Props) {
const [openDeleteModal,setOpenDeleteModal]=React.useState<boolean>(false)
const handleDeleteModal=()=>{
  setOpenDeleteModal(true)

}
const handleEditModal=()=>{
  setOpen(true)
}
  return (
    <TableContainer  component={Paper}>
  <DeleteDiscountModal titleText='ایا از حذف کوپن اطمینان دارید؟' openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="center">شناسه</TableCell>
              <TableCell align="center">نام کوپن</TableCell>
              <TableCell align="center">کد کوپن</TableCell>
              <TableCell align="center"> </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
            <TableRow
        
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">1004</TableCell>
              <TableCell align="center">ryer </TableCell>
              <TableCell align="center">  </TableCell>
              <TableCell align="left">   
                 <DeleteOutlineOutlinedIcon
                 onClick={handleDeleteModal}
                      sx={{ color: "secondary.main" }}
                    />
                    <ModeEditOutlineOutlinedIcon
                onClick={handleEditModal}
                      sx={{ color: "secondary.main" }}
                    /> </TableCell>
          
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}