import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper } from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";


function ColleagueIdentificationCode() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const identificationCodeArray=["hjh","hjhj"]
  const generateRandomPassword = () => {
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const numberChars = "0123456789";
   let passwordChars = "";
   let password = "";
     passwordChars += uppercaseChars;
       passwordChars += lowercaseChars;
     passwordChars += numberChars;

   const passwordLength = 5

   for (let i = 0; i < passwordLength; i++) {
     const randomIndex = Math.floor(Math.random() * passwordChars.length);
     password += passwordChars[randomIndex];
   }

   setGeneratedPassword(password);
 };


const handlePassword=()=>{
  generateRandomPassword()
}
    
  return (
    <div dir='rtl' className='mt-10 overflow-auto md:p-5 p-10'>
      <div className=' flex md:flex-row flex-col'>
        <div>     <button onClick={handlePassword} className='mb-5 border-2 rounded-xl px-5 '>
     
     ایجاد کد معرف
   </button>
   <span className=' bg-gray-100 px-5 mr-5'> {generatedPassword}</span></div>
        <div>   <span className='mr-5'> نام کاربر</span>
        <input type='text' className='bg-gray-100 mr-5 py-1'/></div> 
        <button className='px-10 bg-secondary text-white rounded-xl mr-5 py-1 mb-3 md:mt-0 mt-5'  > ثبت</button>
        </div>
      <div className=' overflow-auto'>
      <TableContainer  component={Paper} >
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="center">  کد معرف</TableCell>
            <TableCell align="center">   نام کاربر</TableCell>
            <TableCell align="center">     عملیات</TableCell>
         
   
           
          </TableRow>
        </TableHead>
        <TableBody >
         
            <TableRow
  
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center">S4fg</TableCell>
              <TableCell align="center"> محبوبه</TableCell>
     
       
              <TableCell align="center"> 
                
                    <DeleteOutlineOutlinedIcon
            
      
       
                      sx={{ color: "secondary.main" }}
                    />
           
                
             </TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
      </div>
    
    </div>
  )
}

export default ColleagueIdentificationCode