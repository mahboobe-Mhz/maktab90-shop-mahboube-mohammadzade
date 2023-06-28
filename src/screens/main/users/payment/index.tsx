import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

const PaymentPage = () => {
    const navigate=useNavigate()
    const navigateSuccess=()=>{
        navigate( routes.USERS.successPaymen)    
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