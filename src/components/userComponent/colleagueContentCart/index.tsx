import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOrderData, storeAppState } from "../../../redux/slice/appSlice";

import BasketIcon2 from "../../svg/basketIcon2";
import { OrderDataType, OrderInfo } from "../../../api/interface/order";
import { Product } from "../../../api/interface/products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props{
  productSelect:Product
}


const ColleagueContentCart = ({productSelect}:Props) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const appState = useSelector(storeAppState);
  const orderInfo = {
    id: productSelect._id,
    image: productSelect.images,
    name: productSelect.name,
    price: productSelect.price,
    orderNUm: 1,
    quantity: productSelect.quantity,
    category:productSelect.category._id,
      slugName:productSelect.slugname
  };
  const navigateToSinglePage =(event:any)=>{
    navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}_${productSelect.category._id}`)
  }
  const handleInsertToCart=()=>{
    if(appState.OrderData.length>0){
       const newAppState =appState.OrderData.filter((item:OrderInfo) => item.id !==productSelect._id)
      dispatch(setOrderData({ OrderData: [...newAppState, orderInfo] }));
    }else{
      dispatch(setOrderData({ OrderData: [...appState.OrderData, orderInfo] }));
    }
    toast.success("محصول به سبد خرید اضافه ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  
    return (<div className="mt-2  md:w-[240px] w-[150px] " dir="rtl"  >
        <div className="singleCard relative shadow-xl md:rounded-3xl rounded-xl w-full">
        <img onClick={navigateToSinglePage} id={productSelect._id} data-user={productSelect.slugname} 
          className="md:h-[190px] md:w-[240px]  h-[100px]  md:rounded-3xl rounded-xl border" 
         src={`http://localhost:8000/images/products/images/${productSelect.images?.[0]}`}/>
     
        </div>
  <div className="mt-3 md:text-sm text-xs md:font-semibold pr-3">
    <h1 className="hover:cursor-pointer" > {productSelect.name}   </h1>
    <span> محصولی مناب برای منزل شما</span>
  </div>
       
    </div>  );
}
 
export default ColleagueContentCart;