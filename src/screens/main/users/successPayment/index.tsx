import DoneIcon from '@mui/icons-material/Done';
import MainButton from '../../../../components/kit/button';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../../../../components/userComponent/layoutHeader';


const SuccessPayment = () => {
    const navigate=useNavigate()
    const navigateToHome =()=>{
        navigate( "/")    
    }
    return ( <div className="h-full w-full ">
    <MainHeader/>
    <div className=" flex justify-center items-center h-full flex-col gap-20">
        <div className="flex justify-center items-center ">
        <span className='w-[300px] text-center'>باتشکر از پرداخت شماسفارش شما ثبت شده و جهت هماهنگی با شما تماس گرفته خواهد شد</span>
    <DoneIcon sx={{fill:"green" , fontSize:"150px"}}/>
        </div>
    <span onClick={navigateToHome}>
    <MainButton title='بازگشت به صفحه اصلی'/>
    </span>

    </div>


</div> );
}
 
export default SuccessPayment;

