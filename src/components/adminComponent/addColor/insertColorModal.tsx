import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControlLabel, TextField } from '@mui/material';

interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void


}
const style = {
  position: 'absolute',
  top: '0%',
 left:{
  lg: '30%',
  md:"30%",
  sm: '30%',
  xs:'10%'
 },
  width: {
    xl:500
  },
  bgcolor: 'white',
  borderRadius:3,

};

export default function InsertColorModal({open,setOpen}:Props) {
  const handleClose = () => setOpen(false);
  const [bannerImage, setBannerImage]=React.useState<string>()
  const handleBannerSelect =(event :React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
         const filesArray=Array.from(event.target.files).map((file)=>URL.createObjectURL(file)) 
         setBannerImage(filesArray[0])               
           } }
  return (
    <div >

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box >
        <Box sx={{display:"flex",justifyContent:"space-between", bgcolor:"secondary.main", 
        color:"white", paddingX:"10px", paddingY:"6px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px", width:"100%"}}>
        <ClearIcon onClick={handleClose}/>
            <Typography >  افزودن رنگ جدید </Typography>
        </Box>
        <Box padding={1}>
        <Box sx={{display:"flex", flexDirection:"column",gap:"10px", alignItems:"end"}}>
    
    <TextField sx={{width:"200px"}} variant='standard' label="نام رنگ"></TextField>
 
    <Box sx={{display:"flex", flexDirection:"column",gap:"10px" , alignItems:"end"}}>
    <Typography > تصویر رنگ را اضافه کنید</Typography>
        <input type="file" name='عکس رنگ'    onChange={handleBannerSelect}  />
    </Box>
   
    
 </Box>
 <Box sx={{display:"flex", flexDirection:"column",gap:"10px" , alignItems:"center"}}>
 <img className='w-[150px] mt-3' src={bannerImage}/>
 <Button
 onClick={handleClose}
      sx={{
        color: "#ffff",
        paddingX: "30px",
        bgcolor: "secondary.main",
        borderRadius: "50px",
        height:"30px",
        marginTop:3,
        width:"200px"
      }}
    >
      {" "}
       ثبت
    </Button> </Box>
        </Box>
  
 
       </Box>
        </Box>
      </Modal>
    </div>
  );
}