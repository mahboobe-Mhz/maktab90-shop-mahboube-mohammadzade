import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import useAddNewOrder from "../../../../api/services/products/useAddNewOrder";
import { storeAppState } from "../../../../redux/slice/appSlice";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const PaymentPage = () => {
    const {mutate}=useAddNewOrder({})
    const OrderData=new FormData()
    const navigate=useNavigate()
    const appState = useSelector(storeAppState);
    const cookies = new Cookies();
    const user = cookies.get("user");
    const navigateSuccess=()=>{
        navigate( routes.USERS.successPaymen)   
        // OrderData.append("user",user._id)
        // OrderData.append("products",appState.OrderData)
        // OrderData.append("user",user._id)
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
