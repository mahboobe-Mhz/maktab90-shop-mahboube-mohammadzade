import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography } from '@mui/material';
function AddBanner() {
  return (
    <div >
           <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              bgcolor: "#ffff",
              alignItems: "center",
              paddingX: "20px",
              paddingY: "5px",
              borderRadius: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: 30,
                  md: 30,
                  sm: 20,
                  xs: 20,
                },
                color: "secondary.main",
              }}
            >
              {" "}
              بنرها
            </Typography>
          </Box>
                <TableContainer component={Paper} sx={{ marginTop:"10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right"> بنر </TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row"> بنر اسلایدر اول هوم پیج</TableCell>
              <TableCell align="right" component="th" scope="row">
                <input type="file" />
              </TableCell>
       
            <TableCell>
            <DeleteIcon sx={{color:"secondary.main"}} />
            <EditIcon sx={{color:"secondary.main"}}/>
            </TableCell>
            </TableRow>
            <TableRow
       
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       <TableCell align="right" component="th" scope="row"> بنر اسلایدر اول هوم پیج</TableCell>
       <TableCell align="right" component="th" scope="row">
         <input type="file" />
       </TableCell>

     <TableCell>
          <DeleteIcon sx={{color:"secondary.main"}} />
            <EditIcon sx={{color:"secondary.main"}}/>
     </TableCell>
             </TableRow>
             <TableRow
       
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       <TableCell align="right" component="th" scope="row"> بنر اسلایدر اول هوم پیج</TableCell>
       <TableCell align="right" component="th" scope="row">
         <input type="file" />
       </TableCell>

     <TableCell>
     <DeleteIcon sx={{color:"secondary.main"}} />
            <EditIcon sx={{color:"secondary.main"}}/>
     </TableCell>
             </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default AddBanner