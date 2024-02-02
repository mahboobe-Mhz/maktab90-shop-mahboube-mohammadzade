import { Box, Button, Input, TextField, Typography } from '@mui/material'
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
import DeleteAddColorModal from './deleteAddColorModal';
import PaginationControlled from '../pagination';
import InsertColorModal from './insertColorModal';
import SearchIcon from "../../svg/searchIcon";


function AddColor() {
    const [openDeleteModal,setOpenDeleteModal]=React.useState(false)
 
    const [open, setOpen] = React.useState<boolean>(false);
const handleDeleteModal=()=>{
  setOpenDeleteModal(true)

}
    const colorArray=[{name:"قرمز", photo:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"},
    {name:"زرد", photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX6+jNOqqP9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="},
    {name:"سبز", photo:"https://img.freepik.com/premium-photo/abstract-mint-green-gradient-background-empty-space-studio-room-display-product_8466-17.jpg"},{name:"قرمز", photo:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"},
    {name:"زرد", photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX6+jNOqqP9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="},
   ]

  return (
    <Box>
        <InsertColorModal open={open} setOpen={setOpen} />
         <DeleteAddColorModal titleText='ایا از حذف رنگ اطمینان دارید؟' openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal}/>
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
               رنگ ها
            </Typography>
            <Button
        onClick={() => {setOpen(true)}}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          افزودن رنگ
        </Button>
          </Box>
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
            <Box sx={{ fill: "gray", marginTop: 1, paddingX: 1 }}>
              <SearchIcon />
            </Box>

            <Input
              placeholder="جستجو"
              sx={{ width: "100%", outline: "none" }}
              type="text"
            ></Input>
          </Box>
     <Box sx={{ marginTop:2}}>
     <TableContainer  component={Paper}>
 
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="center">نام رنگ </TableCell>
          <TableCell align="right"> تصویر رنگ</TableCell>
   
              <TableCell align="center"> </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
        {
                    colorArray.map((item:any)=>    <TableRow
        
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="left">
                        <img src={item.photo} alt="" className='w-[30px] h-[30px]   ' />
                         </TableCell>
              
                    <TableCell align="left">   
                       <DeleteOutlineOutlinedIcon
                      onClick={handleDeleteModal}
                            sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
                          />
                         
                          </TableCell>
                
                  </TableRow> )
                }
        
       
        </TableBody>
      </Table>
    </TableContainer>
    <PaginationControlled
          setPage={1}
          page={2}
          countPage={2}
        />
     </Box>
 
    </Box>
  )
}

export default AddColor