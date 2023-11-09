import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Button, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
function AddBanner() {
  const [image , setImage]=useState<File[]>([])
  const [showImage , setShowImage]=useState<string[]>([])
  const [imageMobile , setImageMobile]=useState<File[]>([])
  const [showImageMobile , setShowImageMobile]=useState<string[]>([])
  const [editMobile , setEditMobile]=useState(false)
  const[editDesktop,setEditDesktop]=useState(false)
  const mobileBanner=["/public/picture/لوسترروشنایی.jpg" ,"/public/picture/لوسترروشنایی.jpg"]
  const desktopBanner=["/public/picture/banner2.jpg","/public/picture/banner2.jpg"]
  const handleShowImage =(event :React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
         const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
        setShowImage([...showImage,...filesArray])         
        setImage([...image,...Array.from(event.target.files)])     
           }  
}
const handleDeleteImage =(e:any)=>{
  const newImageArray=showImage.filter((item:string)=>item !== e.currentTarget.id)
  setShowImage(newImageArray)
  const deleteIndex=showImage.findIndex((item:string)=> item === e.currentTarget.id)
  const newImageFile =image.filter((item:any,index:number)=> index !== deleteIndex)
   setImage(newImageFile)
    }
    const handleShowImageMobile =(event :React.ChangeEvent<HTMLInputElement>)=>{
      if(event.target.files){
           const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
          setShowImageMobile([...showImageMobile,...filesArray])         
          setImageMobile([...imageMobile,...Array.from(event.target.files)])     
             }  
  }
  const handleDeleteImageMobile =(e:any)=>{
    const newImageArray=showImageMobile.filter((item:string)=>item !== e.currentTarget.id)
    setShowImageMobile(newImageArray)
    const deleteIndex=showImageMobile.findIndex((item:string)=> item === e.currentTarget.id)
    const newImageFile =imageMobile.filter((item:any,index:number)=> index !== deleteIndex)
     setImageMobile(newImageFile)
      }
const handleMobileEdit =()=>{
  setEditMobile(true)
}
const handleEditDesktop =()=>{
  setEditDesktop(true)
}
      
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
            <TableCell align="right">  افزودن بنر ها </TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">  افزودن بنر در حالت دسکتاپ </TableCell>
              <TableCell align="right" component="th" scope="row">
                <input type="file"  multiple       onChange={handleShowImage}/>
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex", gap:"10px" , overflowX:"auto"}}>
        {showImage && showImage.map((item:string)=>
        <Box sx={{position:"relative",  bgcolor:"black", borderRadius:"10px"}}  className="photoClass" >
     <Box sx={{position:"relative" }}  className="boxClass" >
     <img key={item} src={item} width="120px"style={{overflow:"hidden",borderRadius:"10px" }} />

     </Box>
  
        <DeleteOutlineOutlinedIcon id={item} onClick={handleDeleteImage} sx={{position:"absolute", top:"70%", right:"40%", color:"white", ":hover":{cursor:"pointer"} , opacity:"0"} }
        className="deleteClass"       
        />
                     
        </Box>
    
        
        )
      } 
        </Box>
              </TableCell>
            <TableCell>
              {editDesktop ?        <Button onClick={()=>setEditDesktop(false)}
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          {" "}
           ویرایش
        </Button>:        <Button
          sx={{
            color: "#ffff",
            paddingX: "30px",
            bgcolor: "secondary.main",
            borderRadius: "50px",
          }}
        >
          {" "}
           ثبت
        </Button> }
    
            </TableCell>
            </TableRow>
            <TableRow
       
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       <TableCell align="right" component="th" scope="row">  افزودن بنر در حالت موبایل </TableCell>
       <TableCell align="right" component="th" scope="row">
         <input type="file"  multiple       onChange={handleShowImageMobile}/>
       </TableCell>
       <TableCell>
       <Box sx={{display:"flex", gap:"10px" , overflowX:"auto"}}>
 {showImageMobile && showImageMobile.map((item:string)=>
 <Box sx={{position:"relative",  bgcolor:"black", borderRadius:"10px"}}  className="photoClass" >
<Box sx={{position:"relative" }}  className="boxClass" >
<img key={item} src={item} width="120px"style={{overflow:"hidden",borderRadius:"10px" }} />

</Box>

 <DeleteOutlineOutlinedIcon id={item} onClick={handleDeleteImageMobile} sx={{position:"absolute", top:"70%", right:"40%", color:"white", ":hover":{cursor:"pointer"} , opacity:"0"} }
 className="deleteClass"       
 />
              
 </Box>

 
 )
} 
 </Box>
       </TableCell>
     <TableCell>
      { editMobile ?    <Button
      onClick={()=> setEditMobile(false)}
   sx={{
     color: "#ffff",
     paddingX: "30px",
     bgcolor: "secondary.main",
     borderRadius: "50px",
   }}
 >
   {" "}
    ویرایش 
 </Button>:    <Button
   sx={{
     color: "#ffff",
     paddingX: "30px",
     bgcolor: "secondary.main",
     borderRadius: "50px",
   }}
 >
   {" "}
    ثبت
 </Button> }

     </TableCell>
     </TableRow>
     
        </TableBody>
      </Table>
    </TableContainer>

    <Box>
    <TableContainer component={Paper} sx={{ marginTop:"10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right"> نمایش بنرها  </TableCell>
         <TableCell></TableCell>
         <TableCell></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>

           <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">  بنر در حالت دسکتاپ </TableCell> 
            <TableCell>
            <Box sx={{display:"flex", gap:"10px" , overflowX:"auto"}}>
      {
        desktopBanner?.map((item:string)=> <img key={item} src={item} width="150px"  height="150px" style={{overflow:"hidden",borderRadius:"10px" }}/> )
      }
      </Box>
            </TableCell>
            <TableCell> <ModeEditOutlineOutlinedIcon  onClick={handleEditDesktop} sx={{ color: "secondary.main" }}/> </TableCell>
            </TableRow>
            <TableRow
       
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">   بنر در حالت موبایل </TableCell> 
            <TableCell>
            <Box sx={{display:"flex", gap:"10px" , overflowX:"auto"}}>
      {
        mobileBanner?.map((item:string)=> <img key={item} src={item} width="150px" height="150px" style={{overflow:"hidden",borderRadius:"10px" }}/> )
      }
      </Box>
            </TableCell>
            <TableCell> <ModeEditOutlineOutlinedIcon  onClick={handleMobileEdit} sx={{ color: "secondary.main" }}/> </TableCell>
            </TableRow>
     
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </div>
  )
}

export default AddBanner