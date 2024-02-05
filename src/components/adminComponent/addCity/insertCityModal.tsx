import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';


interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void


}
const style = {
  position: 'absolute',
  top: '10%',
 left:{
  lg: '30%',
  md:"30%",
  sm: '30%',
  xs:'10%'
 },
  width: {
    lg:"500px",
    xs:"300px"
  },
  bgcolor: 'white',
  borderRadius:3,

};

export default function InsertCityModal({open,setOpen}:Props) {
  const handleClose = () => setOpen(false);

  return (
    <div dir='rtl'>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box  >
        <Box sx={{display:"flex",justifyContent:"space-between", bgcolor:"secondary.main", 
        color:"white", paddingX:"10px", paddingY:"6px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px", width:"100%"}}>
        <ClearIcon onClick={handleClose}/>
            <Typography >  افزودن شهر جدید </Typography>
        </Box>
     <Box sx={{display:"flex", flexDirection:"column",gap:"10px" , justifyContent:"center", alignItems:"center"}}>
        <TextField variant='standard' label="نام شهر"/>
        <Button onClick={handleClose} sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", paddingX:3 ,marginX:10, marginY:2}}>    ثبت  </Button>

       
     </Box>
      
       </Box>
        </Box>
      </Modal>
    </div>
  );
}