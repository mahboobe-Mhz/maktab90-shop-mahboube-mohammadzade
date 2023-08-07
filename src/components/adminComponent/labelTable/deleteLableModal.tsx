import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Props{
    titleText:string
    openDeleteModal:boolean
    setOpenDeleteModal:any
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteLabelModal({titleText,openDeleteModal,setOpenDeleteModal}:Props) {

  const handleClose = () => { 
    setOpenDeleteModal(false)
} 

  return (
    <div>

      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:"center", mb:"30px" }}>
            
        {titleText}
          </Typography>
          <Box sx={{display:"flex", gap:"20px"}}>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}} onClick={handleClose} > بلی</Button>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}} onClick={handleClose}> خیر</Button>
          </Box>
      
        </Box>
      </Modal>
    </div>
  );
}