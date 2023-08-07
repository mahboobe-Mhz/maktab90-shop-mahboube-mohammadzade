import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControlLabel, TextField } from '@mui/material';

interface Props{
    open:boolean,
    setOpen:any
}
const style = {
  position: 'absolute',
  top: '0%',
 left:{
  lg: '30%',
  md:"30%",
  sm: '30%',
  xs:0
 },
  width: {
    xl:500
  },
  bgcolor: 'white',
  borderRadius:3,

};

export default function CategoryModal({open,setOpen}:Props) {
const [addSubCat,setAddSubCat]=React.useState(1)

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
       <Box >
        <Box sx={{display:"flex",justifyContent:"space-between", bgcolor:"secondary.main", 
        color:"white", paddingX:"10px", paddingY:"6px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px", width:"100%"}}>
        <ClearIcon onClick={handleClose}/>
            <Typography>  افزودن دسته جدید </Typography>
        </Box>
     <Box sx={{display:"flex", flexDirection:"column",gap:"10px", width:400 }}>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light"}}>     <TextField sx={{marginX:2 , marginY:2 , width:"90%"}} label="نام دسته" variant="standard" /></Box>
    
     <Box display={"flex"} justifyContent={"space-between"} flexDirection={'column'}>
        <Box sx={{display:"flex", flexDirection:"column",paddingRight:2,direction:"rtl"}} >
            <Typography sx={{color:"secondary.main", font:"bold"}}> زیر دسته ها</Typography>
        <Typography> بالشت</Typography>
        </Box>
      <Box sx={{display:"flex",justifyContent:"space-between", paddingX:2}}>
      <TextField label="نام زیر دسته" variant="standard" />
     <Button sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", marginTop:2}}> + </Button>
      </Box>
 
     </Box>
 
        <Button sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", paddingX:3 ,marginX:10, marginY:2}}>    ثبت  </Button>

     </Box>
      
       </Box>
        </Box>
      </Modal>
    </div>
  );
}