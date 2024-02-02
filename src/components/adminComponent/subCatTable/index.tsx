import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import useGetAllCategory from '../../../api/services/products/useGetAllCategory';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Category } from '../../../api/interface/category';
import axios from 'axios';

function SubCatTable() {
    const { data, isLoading } = useGetAllCategory();
    const [subCatName, setSubCatName]=useState("")
    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCategory(event.target.value);
    };

      

  return (
    <div>
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
              marginBottom:"20px"
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
            زیر دسته ها
            </Typography>
          </Box>
         <Box  bgcolor={"#ffff"} borderRadius={"20px"} paddingBottom={2} display={"flex"} gap={20} >
              <Box sx={{display:"flex"}} >    
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">دسته ها</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Age"
        >
          {
          !isLoading && data.data.categories?.map((item:Category)=>     <MenuItem value={item.name}>
         {item.name}
          </MenuItem>)
          }
       
     
        </Select>
      </FormControl>
      <Box> 
      <TextField id="standard-basic"  onChange={(e)=>setSubCatName(e.currentTarget.value)} label="زیردسته" variant="standard" sx={{marginTop:"8px"}}/>
      </Box>
      <button className='text-white bg-secondary  py-1.5 rounded-full w-[90px] mx-auto mt-5 mb-10 mr-10'> ثبت</button>
              </Box>
     
    </Box> 

    <Box bgcolor={"#ffff"} borderRadius={"20px"} paddingBottom={2} marginTop={2}>
    <TableContainer  component={Paper}>

      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="right">دسته</TableCell>
              <TableCell align="right">زیر دسته </TableCell>
              <TableCell align="center">  </TableCell>
          
         
        
          </TableRow>
        </TableHead>
        <TableBody>
     {
      !isLoading && data.data.categories?.map((item:Category)=>    <TableRow
        
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="right">{item.name}</TableCell>
      <TableCell align="center">
        <TableRow sx={{display:"flex", flexDirection:"column"}}>
          
          <TableCell sx={{ display:"flex" , justifyContent:"space-between" , ":hover":{cursor:"pointer"} }}> {item.name} <Box>  <DeleteOutlineOutlinedIcon sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} /> <ModeEditOutlineOutlinedIcon id={item._id}  sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} />  </Box> </TableCell>
          <TableCell sx={{ display:"flex" , justifyContent:"space-between" , ":hover":{cursor:"pointer"} }}> {item.name} <Box>  <DeleteOutlineOutlinedIcon sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} /> <ModeEditOutlineOutlinedIcon id={item._id}  sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} />  </Box> </TableCell>
          <TableCell sx={{ display:"flex" , justifyContent:"space-between" ,":hover":{cursor:"pointer"} }}> {item.name} <Box>  <DeleteOutlineOutlinedIcon sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} /> <ModeEditOutlineOutlinedIcon id={item._id}  sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }} />  </Box> </TableCell>

 
 
        </TableRow><Box></Box>
        
         </TableCell>


  
    </TableRow>
)
     }
        
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </div>
  )
}

export default SubCatTable