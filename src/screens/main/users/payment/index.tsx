import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import useAddNewOrder from "../../../../api/services/products/useAddNewOrder";
import { setOrderData, storeAppState } from "../../../../redux/slice/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = () => {
    const appState = useSelector(storeAppState); 
    const {mutate,isError}=useAddNewOrder({}) 
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const cookies = new Cookies();
    const user = cookies.get("user");
 
    
    
    const navigateSuccess=()=>{
        const newOrder=appState.OrderData.map((item:any)=>{ return{product:item.id,count:item.orderNUm}})
  
        const data={
            user:user._id,
            products:newOrder,
            deliveryStatus:false,
            deliveryDate:new Date(Number(  appState.deliveryDate) * 1000)  
        }
      mutate(data) 
if(!isError){
    dispatch(setOrderData({OrderData:[]}))
    navigate( routes.USERS.successPaymen) 
}else{
    toast.warning('   مشکلی روی داده دوباره امتحان کنید', {
        position: toast.POSITION.TOP_RIGHT
    })
    navigate( routes.USERS.unSuccessPayment) 
}

    }
    const navigateUnSuccess=()=>{
        navigate( routes.USERS.unSuccessPayment)    
    }
    return ( <div className="w-full h-full flex justify-center items-center flex-col">
        <img src="public/picture/gateway-saman-bank.png" alt="" />
        <div className="flex gap-3">
        <button onClick={navigateUnSuccess} className="border px-4 rounded-2xl bg-gray-300 py-1"> انصراف</button>
        <button onClick={navigateSuccess} className="border px-4 rounded-2xl bg-blue-400 text-white py-1"> پرداخت</button>
        </div>
    
   </div> );
}
 
export default PaymentPage;
