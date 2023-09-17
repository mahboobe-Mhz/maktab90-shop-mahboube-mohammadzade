import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height:"80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,

  borderRadius:"30px"
};
interface Props{
    open:boolean
    setOpen:(open:boolean)=>void
    modalData:any
}
export default function DashboardModal({open ,setOpen,modalData}:Props) {

 
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
      <div dir='rtl' className='flex flex-col h-[90%] overflow-y-auto text-sm md:text-lg p-1 md:p-4'>
        <div className='flex justify-between pb-10'>
            <span>
                <img src="public\logo\logo-01.png" alt="" className='w-[200px]' />
            </span>
            <span className='text-gray-500 text-left md:text-right '> تاریخ سفارش :‌{modalData.date}</span>
        </div>
        <div className='flex justify-between pb-5'>
            <div className='md:w-[70%] w-[60%]'>
                <div className='text-secondary font-bold border-b-2 border-gray-500 w-full pb-2'> مشخصات خریدار</div>
                <div className='flex flex-col gap-2 pt-2'>
                    <span>  <span className='text-gray-500 pl-1'> نام و نام خانوادگی  :  </span><strong> said rahimi</strong></span>
                    <span>   <span className='text-gray-500 pl-1'> شماره تلفن همراه :</span> <strong> 09031979937</strong></span>
                    <span> <span className='text-gray-500 pl-1'> آدرس : </span><strong> فارس -شیراز-میدان آبیاری- خیابان قدمگاه</strong></span>
                  
                  
                   
                </div>
            </div>
            <div className='md:w-[28%] w-[38%] '>
                <div className='text-secondary font-bold border-b-2 border-gray-500 w-full pb-2  pr-5'> مشخصات فروشنده</div>
                <div className='flex flex-col pt-2 gap-5 pr-5'>
                    <span> فروشگاه اینترنتی هومنت</span>
                    <span> 091723114313</span>
                    <a href='www.homnet.com'> homenet.com</a>
                </div>
            </div>
        </div>
        <div className='flex flex-col' >
            <div className=' flex justify-between bg-gray-200 px-3'> 
                <span>نام محصول</span>
                <span> قیمت واحد</span>
            </div>
            <div className='flex flex-col'>
            <div className='flex justify-between border-b-2 '>
                <div className='flex flex-col text-gray-500 pt-2 pr-2'>
                     <span> مبل دونفره لیو</span>
                     <span> (1x) </span>
                     <span> رنگ : silver</span>
                     <span>  وضعیت سفارش :<span className='text-secondary pr-1'>{modalData.condition? " تحویل داده شده " :"در انتظار تایید"} </span> </span>
                </div>
                
                    <span className='text-gray-500 pl-2 pt-2'> ۱۲۰۰۰۰ تومان</span>
               
            </div>
          
           
            </div>
         
        </div>
        <div className='text-left'>
                <span >قیمت کل : ۱۲۰۰۰۰ تومان</span>
        </div>
      </div>
        </Box>
      </Modal>
    </div>
  );
}
