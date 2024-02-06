import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';
import ColleagueAddContents from './addContent';


interface Props{
    open:boolean,
    setOpen:(open:boolean)=>void
}
const style = {
  position: 'absolute',
  top: '10%',
  left:"5%",
  right:"5%",
  bottom:"10%",
  width: "90%",

  bgcolor: 'white',
  borderRadius:3,
  overflowY:"auto"

};

export default function AddContentModal({open,setOpen}:Props) {
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
       <Box sx={{}}  >
   
        <ColleagueAddContents open={open} setOpen={setOpen}/>
      
       </Box>
        </Box>
      </Modal>
    </div>
  );
}