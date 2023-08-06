import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControlLabel, TextField } from '@mui/material';
import SelectVariants from './selectModal';
import Switch from '@mui/material/Switch';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
interface Props{
    open:boolean,
    setOpen:any
}
const style = {
  position: 'absolute',
  top: '5%',
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

export default function DiscountModal({open,setOpen}:Props) {


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
        color:"white", paddingX:"10px", paddingY:"5px",borderStartEndRadius:"10px",
         borderStartStartRadius:"10px", width:"100%"}}>
        <ClearIcon/>
            <Typography> افزودن کوپن جدید</Typography>
        </Box>
        <Box sx={{height:"550px", overflowY: "scroll",}}>
        <Box  sx={{display:"flex",justifyContent:"space-between", color:"white", paddingX:"10px", paddingBottom:"20px", borderBottom:"solid"
        , borderColor:"secondary.light"}}>
                    <TextField sx={{marginLeft:"8px"}} id="standard-basic" label="کد کوپن" variant="standard" />
        <TextField id="standard-basic" label=" *نام کوپن" variant="standard" />

        </Box>
        <Box sx={{direction:"rtl" ,}}>
        <Box  sx={{display:"flex",justifyContent:"space-between", color:"white", paddingX:"10px", paddingBottom:"20px",
         borderBottom:"solid"}}>
        <TextField sx={{marginTop:1}} id="standard-basic" label="تخفیف" variant="standard" />
       <SelectVariants/>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"10px",paddingY:"20px" , borderBottom:"solid"
        , borderColor:"secondary.light"}}>
        <FormControlLabel control={  <Switch color='warning' defaultChecked />} label="محدود کردن حداکثر تخفیف" />
        <FormControlLabel control={  <Switch color='warning' defaultChecked />} label="ارسال رایگان" />

        </Box>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"10px",paddingY:"20px" , direction:"rtl"}}>
        <FormControlLabel control={  <Switch color='warning' defaultChecked />} label="محدود کردن حداقل میزان سفارش" />
        <FormControlLabel control={  <Switch color='warning' defaultChecked />} label="استفاده نا محدود از تخفیف" />
        <FormControlLabel control={  <Switch color='warning' defaultChecked />} label="فقط برای سفارش اول" />
        <Box sx={{display:"flex" , gap:"30px", paddingBottom:"20px", borderBottom:"solid"
        , borderColor:"secondary.light"}}>
        <FormControlLabel sx={{paddingTop:"20px"}} control={  <Switch color='warning' defaultChecked />} label="استفاده نامحدود برای هر کاربر" />
        <TextField sx={{marginLeft:2}} id="standard-basic" label="تعداد قابل دسترس" variant="standard" />
        </Box>
     
        </Box>
        <Box sx={{direction:"rtl", display:"flex",flexDirection:{
          md:'row',
          xs:'column'
        }, gap:"40px", paddingBottom:"20px", borderBottom:"solid"
        , borderColor:"secondary.light"}}>
        <Box sx={{marginTop:1 ,paddingRight:3}}>

<DatePicker
  calendar={persian}
  locale={persian_fa}
  calendarPosition="bottom-right"
  weekPicker={false}
  onChange={(e: any) => {
   console.log("hi");
  }}
/>
        </Box>
        <FormControlLabel  control={  <Switch color='warning' defaultChecked />} label="تنظیم تاریخ پایان" />
     
    
        </Box>
        <Box sx={{direction:"rtl" , paddingRight:5, paddingY:2}}>
          <Button sx={{color:"white", bgcolor:"secondary.main",borderRadius:"20px", paddingX:3}}> ذخیره</Button>
        </Box>
        </Box>
      
       </Box>
        </Box>
      </Modal>
    </div>
  );
}