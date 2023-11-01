import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setNotMOdal, storeAppState } from '../../../redux/slice/appSlice';

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
interface Props{
    setOpenDeleteModal:any
    openDeleteModal:boolean

}
export default function DeleteCommentModal({setOpenDeleteModal,openDeleteModal}:Props) {

const handleClose = () => setOpenDeleteModal(false);
 
 
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
               آیا از حذف اطمینان دارید؟  
          </Typography>
          <Box sx={{display:"flex", gap:"20px"}}>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}}> بلی</Button>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}} onClick={handleClose}> خیر</Button>
          </Box>
      
        </Box>
      </Modal>
    </div>
  );
}