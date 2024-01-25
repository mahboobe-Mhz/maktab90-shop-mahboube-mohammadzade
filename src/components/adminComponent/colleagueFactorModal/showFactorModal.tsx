
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, TextField } from '@mui/material';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
    display:"flex",
    justifyContent:"center"
};
interface Props{
    openFactorModal:boolean,
    setOpenFactorModal:(open:boolean)=>void
   

}
export default function ShowFactorModal({openFactorModal,setOpenFactorModal}:Props) {

  const handleOpen = () => setOpenFactorModal(true);
  const handleClose = () => setOpenFactorModal(false);

  return (
    <div >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openFactorModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
   
      >
        <Box sx={style}>
            <Box sx={{overflow:"auto", }}>
                <Box sx={{width:"1100px"}}>
                <Box sx={{direction:"rtl", border:"solid",borderWidth:"1px", padding:"10px", borderRadius:"20px"}}>
           
           <Typography sx={{color:"secondary.main"}}>
           مشخصات مشتری
           </Typography>
           <Box sx={{ display:"flex" , justifyContent:"space-around"}} >
       
               <TextField label="پروفایل مشتری در هوم نت" variant="standard" type='text'  id="outlined-read-only-input"
        
          defaultValue="mahboube "
          InputProps={{
            readOnly: true,
          }}
          />
               <TextField label="    نام و نام خانوادگی" variant="standard" type='text'    defaultValue="محبوبه محمدزاده "
          InputProps={{
            readOnly: true,
          }}/>
               <TextField label="    کد ملی  " variant="standard" type='text'    defaultValue="۵۳۴۰۰۴۴۴۳۲ "
          InputProps={{
            readOnly: true,
          }}/>
               <TextField label="     آدرس  " variant="standard"   multiline
          rows={3}    defaultValue="بوشهر جم خ ولیعصر "
          InputProps={{
            readOnly: true,
          }}/>
               <TextField label="    شماره تماس   " variant="standard" type='text'/>
        
           </Box>
           </Box>
           <Box sx={{direction:"rtl", marginTop:"15px", border:"solid",borderWidth:"1px", padding:"10px", borderRadius:"20px" }}>
          
           <Typography sx={{color:"secondary.main"}}>
           مشخصات محصول:
           </Typography>
           <Box sx={{ display:"flex" , justifyContent:"space-around"}} >
               <TextField label="     نوع محصول  " variant="standard" type='text'/>
               <TextField label="     نام محصول  " variant="standard" type='text'/>
               <TextField label="     توضیحات ویژگی محصول  " variant="standard" type='text'/>
               <TextField label="     توضیحات ضمانت و خدمات پس از فروش  " variant="standard" type='text'/>
           </Box>
           </Box>
           <Box sx={{direction:"rtl", marginTop:"15px", border:"solid",borderWidth:"1px", padding:"10px", borderRadius:"20px"}}>
          
          <Typography sx={{color:"secondary.main"}}>
          مشخصات قیمت:
          </Typography>
          <Box sx={{ display:"flex" , justifyContent:"space-around"}} >
              <TextField label="   قیمت محصول     " variant="standard" type='text'/>
              <TextField label="     میزان تخفیف   " variant="standard" type='text'/>
              <TextField label="   قیمت نهایی     " variant="standard" type='text'/>
              <TextField label="     پیش‌پرداخت   " variant="standard" type='text'/>
              <TextField label="     مبلغ باقی مانده   " variant="standard" type='text'/>  
          </Box>
          </Box>
          <Box sx={{direction:"rtl", marginTop:"15px", border:"solid", borderWidth:"1px", padding:"10px", borderRadius:"20px"}}>
          
          <Typography sx={{color:"secondary.main"}}>
          مشخصات سفارش:
          </Typography>
          <Box sx={{ display:"flex" , justifyContent:"space-around"}} >
              <TextField label="  تاریخ ثبت سفارش   " variant="standard" type='text'/>
              <TextField label="    تاریخ تحویل   " variant="standard" type='text'/>

          </Box>
          </Box>
            </Box>
                </Box>
      
          
        </Box>
      </Modal>
    </div>
  );
}