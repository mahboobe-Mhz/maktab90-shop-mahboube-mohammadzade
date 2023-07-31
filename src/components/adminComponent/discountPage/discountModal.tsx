import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField } from '@mui/material';
import SelectVariants from './selectModal';
interface Props{
    open:boolean,
    setOpen:any
}
const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
  borderRadius:3

};

export default function DiscountModal({open,setOpen}:Props) {


  const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box>
        <Box sx={{display:"flex",justifyContent:"space-between", bgcolor:"secondary.main", color:"white", paddingX:"10px", paddingY:"5px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px", width:"100%"}}>
        <ClearIcon/>
            <Typography> افزودن کوپن جدید</Typography>
        </Box>
        <Box  sx={{display:"flex",justifyContent:"space-between", color:"white", paddingX:"10px", paddingBottom:"20px", borderBottom:"solid"
        , borderColor:"secondary.light"}}>
                    <TextField id="standard-basic" label="کد کوپن" variant="standard" />
        <TextField id="standard-basic" label=" *نام کوپن" variant="standard" />

        </Box>
        <Box  sx={{display:"flex",justifyContent:"space-between", color:"white", paddingX:"10px", paddingBottom:"20px", borderBottom:"solid"}}>
        <TextField id="standard-basic" label="تخفیف" variant="standard" />
       <SelectVariants/>
        </Box>
       </Box>
        </Box>
      </Modal>
    </div>
  );
}