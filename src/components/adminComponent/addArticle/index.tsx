import { Box, Button, Typography } from '@mui/material'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteArticleModal from './deleteArticleModal';
import AddNewArticleModal from './addNewArticleModal';
import PaginationControlled from '../pagination';
import HomeNetMenu from '../../userComponent/homenetMenu';


function AddArticle() {
    const[openDeleteModal,setOpenDeleteModal]=React.useState(false)
    const[openInsertArticleModal, setOpenInsertArticleModal]=React.useState(false)
  return (
    <div dir='rtl'>
      <div className='text-left'>
      <HomeNetMenu/>
      </div>
 
        <DeleteArticleModal setOpenDeleteModal={setOpenDeleteModal}  openDeleteModal={openDeleteModal } />
       <AddNewArticleModal openInsertArticleModal={openInsertArticleModal} setOpenInsertArticleModal={setOpenInsertArticleModal} /> 
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
              marginBottom:"10px",
              direction:"rtl"

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
              مقالات و خبر ها
            </Typography>
            <Button
            onClick={()=>setOpenInsertArticleModal(true)}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          افزودن مقاله
        </Button>
          </Box>
          <Box>
          <TableContainer  component={Paper}>
 
      <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell align="right">سر تیتر</TableCell>
              <TableCell align="right">متن </TableCell>
              <TableCell align="right"> تاریخ </TableCell>
              <TableCell align="right"> </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
     
            <TableRow
        
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">انواع جنس چوب</TableCell>
              <TableCell align="right">     <Typography sx={{width:{lg:400,md:300,xs:200},height:"50px",overflow:"hidden"}}>
              دسته یکپارچه-فریم داخلی فلزی-پایه بشقابی فلزی با آبکاری طلایی مکانیزم تک‌دسته براکت دار ثابت رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید. 24 ماه ضمانت و خدمات پس از فروش مدت زمان تحویل: 12 روز کاری
               
                </Typography>
            </TableCell>
              <TableCell align="right">  42/05/02</TableCell>
              <TableCell align="left">   
                 <DeleteOutlineOutlinedIcon
               onClick={()=>setOpenDeleteModal(true)}
                      sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
                    />
                  <ModeEditOutlineOutlinedIcon
                    onClick={()=>setOpenInsertArticleModal(true)}
                      sx={{ color: "secondary.main", ":hover":{cursor:"pointer"} }}
                    />
                    </TableCell>
          
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
    <PaginationControlled
          setPage={1}
          page={1}
          countPage={1}
        />
          </Box>
    </div>
  )
}

export default AddArticle