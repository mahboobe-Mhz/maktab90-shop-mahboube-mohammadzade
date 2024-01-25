import React from 'react'
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader'
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper } from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ColleagueFactorModal from '../../../../components/adminComponent/colleagueFactorModal';
import ShowFactorModal from '../../../../components/adminComponent/colleagueFactorModal/showFactorModal';

function ColleagueFactor() {
    const [open, setOpen] = React.useState(true);
    const [openFactorModal, setOpenFactorModal] = React.useState(true);
    const handleAddFactorModal=()=>{
        setOpen(true)
    }
    const handleShowFactorModal=()=>{
        setOpenFactorModal(true)
    }
  return (
    <div>
         <AddHomeStoreInfoHeader/>
       <div className='p-5' dir='rtl'>
       <ColleagueFactorModal setOpen={setOpen} open={open}/>
       <ShowFactorModal openFactorModal={openFactorModal} setOpenFactorModal={setOpenFactorModal}/>
       <Button
        onClick={handleAddFactorModal}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          {" "}
          افزودن فاکتور
        </Button>

        <TableContainer  component={Paper}  sx={{marginTop:"10px"}}>
        
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="center">   نام و نام خانوادگی</TableCell>
            <TableCell align="center">   شماره تماس </TableCell>
            <TableCell align="center">     نام محصول</TableCell>
            <TableCell align="center">      قیمت</TableCell>
            <TableCell align="center">      تاریخ</TableCell>
            <TableCell align="center">      عملیات</TableCell>
         
   
           
          </TableRow>
        </TableHead>
        <TableBody >
         
            <TableRow
  
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center">محبوبه محمدزاده</TableCell>
              <TableCell align="center"> 09121415568</TableCell>
              <TableCell align="center"> تلوزیون ۵۵</TableCell>
              <TableCell align="center">  { Number(12454220).toLocaleString("fa-IR")} تومان</TableCell>
              <TableCell align="center"> ۱۴۰۲/۰۳/۲۲</TableCell>
       
              <TableCell align="center"> 
                <Box>
                <DeleteOutlineOutlinedIcon
            sx={{ color: "secondary.main" , ":hover":{cursor:"pointer"}}}
          />
              <ModeEditOutlineOutlinedIcon
            sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
          />
               <VisibilityIcon
               onClick={handleShowFactorModal}
            sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
          />
                </Box>
                
           
                
             </TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
       </div>
    </div>
  )
}

export default ColleagueFactor