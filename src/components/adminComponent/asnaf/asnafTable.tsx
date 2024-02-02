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
import DeleteAsnafModal from './deleteModal';





export default function AsnafTable() {
  const[openDeleteModal,setOpenDeleteModal]=React.useState(false)

  return (
    <TableContainer  component={Paper}>
  <DeleteAsnafModal setOpenDeleteModal={setOpenDeleteModal}  openDeleteModal={openDeleteModal } />
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="right">صنف</TableCell>
         
              <TableCell align="center"> </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
            <TableRow
        
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">لوازم خانگی</TableCell>
         
              <TableCell align="left">   
                 <DeleteOutlineOutlinedIcon
                  onClick={()=>setOpenDeleteModal(true)}
                      sx={{ color: "secondary.main" , ":hover":{cursor:"pointer"}}}
                    />
                 
                    </TableCell>
          
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}