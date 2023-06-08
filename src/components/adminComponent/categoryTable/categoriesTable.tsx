import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper, Box} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
interface Props{
  rows:Array<{
 _id:string;
    name:string;
  
   
  }>
}

export default function BasicCategoryTable({rows}:Props) {
  const showSub=(e)=>{
   
    console.log(e.target.id);
    
    
  }
  return (
    <TableContainer sx={{ height:400}} component={Paper}>
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
   
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
         
              <TableCell data-tag="category" align="right"> {row.name} </TableCell>
              <TableCell align="left">
                <Box >
               < DeleteOutlineOutlinedIcon sx={{color:"secondary.main"}}/>
              <ModeEditOutlineOutlinedIcon sx={{color:"secondary.main"}}/>
              <MenuOutlinedIcon onClick={showSub} sx={{color:"secondary.main"}}/>
                </Box>
              </TableCell>
          
           
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}