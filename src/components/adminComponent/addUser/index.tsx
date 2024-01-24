import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, Input, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from "@mui/icons-material/Search";
import PaginationControlled from '../pagination';

function AddUser() {
  return (
    <div className='mt-10 md:p-5 p-5 overflow-auto' dir='rtl'>
<div>
<div className='flex md:gap-10 gap-2 md:flex-row flex-col '>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> نام </label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">   نام خانوادگی</label>
    <input type="number" className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <div className='flex md:gap-10 gap-3 md:flex-row flex-col '>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor=""> شماره تماس </label>
    <input type="text" className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">    کد معرف</label>
    <input type="number" className='border border-secondary rounded-full px-3 py-1' />
  </div>
        </div>
        <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5'> ثبت</button>
</div>
<div dir='rtl'>
  <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginTop: "20px",
          paddingX: "20px",
        }}
      >
        <SearchIcon sx={{ fill: "gray", marginTop: "3px" }} />
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>
        <Box >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">نام کاربر</TableCell>
            <TableCell align="right">نام خانوادگی کاربر</TableCell>
            <TableCell align="right">شماره تماس</TableCell>
            <TableCell align="right"> کد معرف</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                hamid
              </TableCell>
              <TableCell align="right">hamidi</TableCell>
              <TableCell align="right">032265254785</TableCell>
              <TableCell align="right">F6g22</TableCell>
              <TableCell align="right">
 
              </TableCell>
            <TableCell>
            <DeleteIcon/>
            </TableCell>
            </TableRow>
    
        </TableBody>
      </Table>
    </TableContainer>
    <PaginationControlled
          setPage={1}
          page={1}
          countPage={2}
        />
        </Box>
 
    </div>
    </div>
  )
}

export default AddUser