import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setNotMOdal, storeAppState } from '../../../redux/slice/appSlice';
interface Props{
    titleText:string
    deleteItem:any
    refetch:any
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

export default function NotificationModal({titleText,deleteItem, refetch}:Props) {
    const dispatch = useDispatch();
    const appState = useSelector(storeAppState);
  const handleClose = () => { 
    dispatch(setNotMOdal({ notModal: false }));} 
  const handelFunction=()=>{
    dispatch(setNotMOdal({ notModal: false }));
    deleteItem()
    setTimeout(() => {
      refetch()
    }, 200);

  }

  return (
    <div>

      <Modal
        open={appState.notModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:"center", mb:"30px" }}>
            
        {titleText}
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