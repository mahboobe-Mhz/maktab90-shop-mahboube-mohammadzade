
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DashboardModal from './dashboardModal';
import React from 'react';

function OrderClient() {
    const orderData=[{
        date:"۱۴۰۲/۰۶/۰۲",
        orderNumber:"۱۳۲۶۵۷۵۵",
        orderAmount:123216516,
        condition:true,

    },
    {
        date:"۱۴۰۲/۰۶/۰۲",
        orderNumber:"۱۳۲۶۵۷۵۵",
        orderAmount:123216516,
        condition:false,
        
}]
const [open, setOpen] = React.useState(false);
const[modalData,setModalData]=React.useState("")
  return (
    <div className='flex flex-col justify-center items-center gap-5 mt-10 pb-20' dir='rtl'>
        <DashboardModal open={open} setOpen={setOpen} modalData={modalData}/>
        <div className='text-center'>
            <h1 className='font-bold'>سفارشات</h1>
        </div>
        <table className='w-[70%] '>
     
        <tr className='border-b rounded-full  border-secondary  '   >
            <th className='pb-2'> ردیف</th>
            <th className='pb-2'> تاریخ ثبت سفارش</th>
            <th className='pb-2'> شماره سفارش</th>
            <th className='pb-2'> مبلغ سفارش</th>
            <th className='pb-2'> وضعیت</th>
            <th className='pb-2'> عملیات</th>
       
        </tr>
      
            {
                orderData.map((item:any, index:number)=> <tr className=' text-center  mt-5' dir='rtl'>
                    <td  className='pt-2'> {(index+1).toLocaleString("fa-ir")}</td>
                    <td  className='pt-2'>{item.date}</td>
                    <td  className='pt-2'>{ item.orderNumber}</td>
                    <td  className='pt-2'> {Number(item.orderAmount).toLocaleString("fa-IR")} تومان</td>
                    {item.condition? <td  className='pt-2'>تحویل شده</td> : <td  className='pt-2'> در انتظار تایید</td> }
                    <td className='pt-2 hover:cursor-pointer' onClick={()=>{setOpen(!open),setModalData(item)}} >
                        <RemoveRedEyeIcon sx={{color:"secondary.main"}}/>
                    </td>
                </tr>)
            }
      
        </table>
      
    </div>
  )
}

export default OrderClient