import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import useGetAllCategory from '../../../api/services/products/useGetAllCategory';
import { useState } from 'react';

function SubCatTable() {
    const { data, isLoading } = useGetAllCategory();
    const [subCatName, setSubCatName]=useState("")
    const [adminInfo , setAdminInfo]=useState<string[]>([])
    const handleInsertSubCat=()=>{
      setAdminInfo([...adminInfo,subCatName])
    }
    const handleChangeCat =()=>{
      setAdminInfo([])  
    }
  return (
    <div>
         <Box  bgcolor={"#ffff"} borderRadius={"20px"} paddingBottom={2} display={"flex"} gap={5} >
              <Box sx={{display:"flex", flexDirection:"column"}} >    
   <FormControl>
   <FormLabel id="demo-radio-buttons-group-label" sx={{marginRight:"30px", fontSize:"25px"}}>دسته ها</FormLabel>
   <RadioGroup
     aria-labelledby="demo-radio-buttons-group-label"
     defaultValue="female"
     name="radio-buttons-group"
   >
{
     !isLoading && data.data.categories?.map((item:any) => ( <FormControlLabel    key={item._id}   value={item._id} 
      control={<Radio  
        onClick={handleChangeCat}
        sx={{
        '&, &.Mui-checked': {
          color: 'secondary.main',
        },
      }} />}       label={item.name} />)) 
}

   </RadioGroup>
 </FormControl>          
              </Box>
              <Box>
              <div className='flex md:gap-10 gap-5 md:flex-row flex-col'>
        <div className='flex  gap-5 text-right'>
    <label className='pr-2 text-2xl' htmlFor="">   زیر دسته</label>
    <input onChange={(e)=>setSubCatName(e.currentTarget.value)} type="text" className='border border-secondary rounded-full px-3 py-1 mt-4' />
    <button onClick={handleInsertSubCat} className='bg-secondary text-white rounded-full md:px-10 h-[40px] md:mt-4'> +</button>
  </div>

       
        </div>

           
             <TableContainer  component={Paper} sx={{marginTop:"10px"}}>
 
             <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
               <TableHead>
                 <TableRow> 
                 <TableCell align="right">  زیر دسته ها</TableCell>
           
                  
                     <TableCell align="right"> </TableCell>
               
                 </TableRow>
               </TableHead>
               <TableBody>
            {
               adminInfo.length>0 && adminInfo.map((item:any,index:number)=>  
               <TableRow
               
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               <TableCell align="right">{item}</TableCell>

              
               <TableCell align="left">   
                  <DeleteOutlineOutlinedIcon
                  id={item.adminName}
                
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
            <button className='text-white bg-secondary px-20 py-1.5 rounded-full w-[200px] mx-auto mt-5 mb-10'> ثبت</button>
              </Box>
    </Box> 
    </div>
  )
}

export default SubCatTable