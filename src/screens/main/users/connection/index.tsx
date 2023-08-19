import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import MainHeader from '../../../../components/userComponent/mainHeader';
import MainFooter from '../../../../components/userComponent/mainFooter';

const Connection = () => {
    return (  
        <div>
            <MainHeader/>
             <div className='text-center flex flex-col justify-center items-center  gap-20'> 
        <h1 className=' font-bold text-4xl mt-10 '>
            ما اینجاییم تا به سوالات شما جواب بدهیم 
        </h1>
        <div  className='flex gap-10 mb-10'>
        <div>
            <div className='w-[250px] shadow-lg flex flex-col justify-center items-center text-center py-10 px-5 rounded-2xl'> 
            <FmdGoodIcon sx={{color:"secondary.main", width:"50px", height:"50px"}}/>
    <p className='font-bold text-3xl pb-2'> نشانی فروشگاه</p>
    <p className='text-secondary font-bold'>  شیراز-خیابان قصرودشت مجتمع تجاری آناهیتا۲ پلاک ۴۳</p>
            </div>
        </div>
        <div>
            <div className='w-[250px] shadow-lg flex flex-col justify-center items-center text-center py-10 px-5 rounded-2xl'> 
            <LocalPhoneIcon sx={{color:"secondary.main", width:"50px", height:"50px"}}/>
    <p className='font-bold text-3xl pb-2'>  شماره های تماس</p>
    <p className='text-secondary font-bold flex flex-col'>  <span>09177903484</span> <span>07132302046</span></p>
            </div>
        </div>  <div>
            <div className='w-[250px] shadow-lg flex flex-col justify-center items-center text-center py-10 px-5 rounded-2xl'> 
            <MailOutlineIcon sx={{color:"secondary.main", width:"50px", height:"50px"}}/>
    <p className='font-bold text-3xl pb-2'>    پست الکترونیکی</p>
    <p className='text-secondary font-bold flex flex-col'>  <span>info@homnet.ir</span> <span><InstagramIcon/> Homenet.co</span></p>
            </div>
        </div>
      
        </div>
   
    </div>
    <div dir='rtl'>
    <MainFooter />
    </div>
 
        </div>
   
    );
}
 
export default Connection;