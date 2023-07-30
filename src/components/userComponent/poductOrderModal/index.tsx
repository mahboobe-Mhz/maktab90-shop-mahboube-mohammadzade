import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setNotMOdal, setProductOrderModal, storeAppState } from '../../../redux/slice/appSlice';
interface Props{
    titleText:string
    handleDelete:any
    deleteId:string
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteOrderModal({titleText,handleDelete,deleteId}:Props) {
    const dispatch = useDispatch();
    const appState = useSelector(storeAppState);
  const handleClose = () => { 
    dispatch(setProductOrderModal({ productOrderModal: false }));} 
  const handelFunction=()=>{
    dispatch(setProductOrderModal({ productOrderModal: false }));
    handleDelete(deleteId)
  }

  return (
    <div>

      <Modal
        open={appState.productOrderModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:"center", mb:"30px" ,direction:"rtl"}}> آیا از حذف {titleText}     اطمینان دارید؟   
            

       
          </Typography>
          <Box sx={{display:"flex", gap:"20px"}}>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}} onClick={handelFunction} > بلی</Button>
          <Button sx={{color:"#ffff",  bgcolor: "secondary.main", paddingX:"50px"}} onClick={handleClose}> خیر</Button>
          </Box>
      
        </Box>
      </Modal>
    </div>
  );
}