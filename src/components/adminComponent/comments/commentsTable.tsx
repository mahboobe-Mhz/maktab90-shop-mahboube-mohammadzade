import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DoneIcon from '@mui/icons-material/Done';
import DeleteCommentModal from './deleteCommentModal';




export default function CommentsTable() {
  const[openDeleteModal,setOpenDeleteModal]=React.useState(false)

  return (
    <TableContainer  component={Paper}>
  <DeleteCommentModal setOpenDeleteModal={setOpenDeleteModal}  openDeleteModal={openDeleteModal } />
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="center">نویسنده</TableCell>
              <TableCell align="center">دیدگاه </TableCell>
              <TableCell align="center">درپاسخ به </TableCell>
          
              <TableCell align="center"> تاریخ</TableCell>
              <TableCell> حالت نظر</TableCell>
              <TableCell align="center"> </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
            <TableRow
        
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">حقیقی</TableCell>
              <TableCell align="center">عالی </TableCell>
              <TableCell align="center">  صندلی</TableCell>
              <TableCell align="center">  42/05/02</TableCell>
              <TableCell>در انتظار تایید </TableCell>
              <TableCell align="left">   
                 <DeleteOutlineOutlinedIcon
                  onClick={()=>setOpenDeleteModal(true)}
                      sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
                    />
                    <DoneIcon

                      sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
                    /> 
                    </TableCell>
          
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}