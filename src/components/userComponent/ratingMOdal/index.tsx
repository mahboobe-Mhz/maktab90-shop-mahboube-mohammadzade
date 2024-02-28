
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "300px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    gap:"15px",


};
interface Props{
    openModal:boolean,
    setOpenModal:(open:boolean)=>void
   

}
export default function RatingModal({openModal,setOpenModal}:Props) {
    const [value, setValue] = React.useState<number | null>(2);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
      sx={{direction:"rtl"}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
   
      >
        <Box sx={style}>
            <Typography> به دیجی کالا امتیاز دهید</Typography>
        <Rating
       
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
          
        </Box>
      </Modal>
    </div>
  );
}