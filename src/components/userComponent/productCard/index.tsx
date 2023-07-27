import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOrderData, storeAppState } from "../../../redux/slice/appSlice";

interface Props{
  productSelect:any
}


const ProductCart = ({productSelect}:Props) => {
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
  };
  const navigateToSinglePage =(event:any)=>{
    navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}_${productSelect.category._id}`)
  }
  const handleInsertToCart=()=>{
dispatch(setOrderData({ OrderData: [...appState.OrderData, orderInfo] }));
  }
    return (<div className="mt-2  md:w-[240px] w-[150px] "   >
        <div className="singleCard relative shadow-xl md:rounded-3xl rounded-xl w-full">
        <img onClick={navigateToSinglePage} id={productSelect._id} data-user={productSelect.slugname} 
          className="md:h-[190px] md:w-[240px]  h-[110px] w-[150px] md:rounded-3xl rounded-xl border" 
         src={`http://localhost:8000/images/products/images/${productSelect.images?.[0]}`}/>
        <span onClick={handleInsertToCart} className="absolute bottom-[0px] bg-secondary p-1 rounded-md">
        <img className=" z-10 md:w-[30px] w-[10px] "   src="/icons/icon-03.svg"/>
        </span>
        </div>
  <div className="mt-3 md:text-sm text-xs md:font-semibold pr-3">
    <h1 > {productSelect.name}   </h1>
    <span>{ Number(productSelect.price).toLocaleString("fa-IR")} تومان</span>
  </div>
       
    </div>  );
}
 
export default ProductCart;