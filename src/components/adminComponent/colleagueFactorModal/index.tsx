
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
    open:boolean,
    setOpen:(open:boolean)=>void
   

}
export default function ColleagueFactorModal({open,setOpen}:Props) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
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
       
               <TextField label="پروفایل مشتری در هوم نت" variant="standard" type='text'/>
               <TextField label="    نام و نام خانوادگی" variant="standard" type='text'/>
               <TextField label="    کد ملی  " variant="standard" type='text'/>
               <TextField label="     آدرس  " variant="standard"  multiline
          rows={2}/>
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
               <TextField label="     توضیحات ویژگی محصول  " variant="standard"  multiline
          rows={2}/>
               <TextField label="     توضیحات ضمانت و خدمات پس از فروش  " variant="standard"  multiline
          rows={2}/>
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
          <Button onClick={handleClose}  sx={{color:"white" , bgcolor:"secondary.main" , marginTop:"10px", marginLeft:"10px" , borderRadius:"20px" ,padding:"0px"}}> انصراف</Button>
          <Button onClick={handleClose}  sx={{color:"white" , bgcolor:"secondary.main" , marginTop:"10px", marginLeft:"10px" , borderRadius:"20px" ,padding:"0px"}}> ثبت</Button>
            </Box>
                </Box>
      
          
        </Box>
      </Modal>
    </div>
  );
}