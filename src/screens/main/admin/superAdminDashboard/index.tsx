import { Box, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader';
import SearchIcon from '../../../../components/svg/searchIcon';
import PaginationControlled from '../../../../components/adminComponent/pagination';

function SuperAdminDashboard() {
    const [adminName,setAdminName]=useState("")
    const [adminPhoneNumber,setAdminPhoneNumber]=useState(0)
    const [adminInfo , setAdminInfo]=useState<{adminName:string,adminPhoneNumber:number }[]>([])
    const handleInsertAdmin =()=>{
            const adminData={
                adminName:adminName,
                adminPhoneNumber:adminPhoneNumber
            }
            setAdminInfo([...adminInfo,adminData])
    }
    const handleDeleteAdminInfo =(event:any)=>{
  
           const newAdminInfo= adminInfo.filter((item:any)=> item.adminName !== event.target.id)
            setAdminInfo(newAdminInfo)      
    }
  return (
    <div dir='rtl' >

      <AddHomeStoreInfoHeader/>  
    
    
   
    
{/*       
            {
                adminInfo.length>0 && adminInfo.map((item:any,index:number)=>
                <div className='flex gap-2' key={index} >
                    <span> {item.adminName}</span>
                    <span>{item.adminPhoneNumber}</span>
                    <span id={item.adminName} className='text-secondary mr-10 hover:cursor-pointer'> X</span>
                </div>
                
                )
               
            } */}
                    <div className='flex md:gap-10 gap-5 md:flex-row flex-col px-20 mt-20'>
        <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">  نام ادمین</label>
    <input type="text" onChange={(e)=>setAdminName(e.currentTarget.value)} className='border border-secondary rounded-full px-3 py-1' />
  </div>
  <div className='flex flex-col text-right'>
    <label className='pr-2' htmlFor="">    شماره تلفن ادمین</label>
    <input type="number"  onChange={(e)=>setAdminPhoneNumber(+e.currentTarget.value)} className='border border-secondary rounded-full px-3 py-1' />
  </div>
        <button onClick={handleInsertAdmin} className='bg-secondary text-white rounded-full md:px-10 h-[40px] md:mt-4'> +</button>
        <button className='text-white bg-secondary md:px-20  py-1.5 rounded-full w-[200px] mx-auto mt-5 mb-10'> ثبت</button>
        </div>

           <div className=' overflow-auto'>
           <Box
        sx={{
          width: "100%",
          display: "flex",
          borderRadius: "50px",
          bgcolor: "#ffff",
          marginBottom: "5px",
          paddingX: "20px",
        }}
      >
        <SearchIcon  />
        <Input
          placeholder="جستجو"
          sx={{ width: "100%", outline: "none" }}
          type="text"
        ></Input>
      </Box>
           <TableContainer sx={{overflow:"auto"}}  component={Paper}>
 
 <Table sx={{ minWidth: 400}} aria-label="simple table">
   <TableHead>
     <TableRow> 
     <TableCell align="center">نام ادمین</TableCell>
         <TableCell align="center">شماره تماس </TableCell>
      
         <TableCell align="center"> </TableCell>
   
     </TableRow>
   </TableHead>
   <TableBody>
{
   adminInfo.length>0 && adminInfo.map((item:any,index:number)=>  
   <TableRow
   
   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
   <TableCell align="center">{item.adminName}</TableCell>
   <TableCell align="center">{item.adminPhoneNumber} </TableCell>
  
   <TableCell align="left">   
      <DeleteOutlineOutlinedIcon
      id={item.adminName}
      onClick={handleDeleteAdminInfo}
           sx={{ color: "secondary.main" }}
         />
         <ModeEditOutlineOutlinedIcon
  
           sx={{ color: "secondary.main" }}
         /> 
         </TableCell>
  
                  </TableRow>)
  
}
      
  
   </TableBody>
 </Table>
</TableContainer>
<PaginationControlled
          setPage={2}
          page={1}
          countPage={2}
        />
           </div>
           



    </div>
    
  
  )
}

export default SuperAdminDashboard