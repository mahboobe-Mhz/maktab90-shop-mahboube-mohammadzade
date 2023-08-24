import { forwardRef, useEffect, useImperativeHandle ,useState} from "react";
import { Link } from "react-router-dom";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {  toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setOrderData, storeAppState } from "../../../redux/slice/appSlice";
interface Props{
    index1:number
    item: {
      id: string
      image: string
      name: string
      price: number
      orderNUm: number
      quantity: number
    category:string
      slugName:string
    }
    handleDeleteModal:any

    }
const CartData = forwardRef(({index1,item,handleDeleteModal}:Props) => {
   
    const [counter ,setCounter]=useState<number>(item.orderNUm)

    const dispatch = useDispatch();
    const appState = useSelector(storeAppState);

useEffect(()=>{
 
  const changeData = appState.OrderData.map((data:any, index:number) => {
    if (index===index1) {
      const objCopy={...data}

      objCopy.orderNUm = counter;
      objCopy.price=(item.price/item.orderNUm)*counter
      return objCopy;
    }
    return data;
  });
  dispatch(setOrderData({ OrderData: [...changeData] }));    
  
},[counter])

    const insertOrderCount =()=>{
        if(item.quantity>counter){
            setCounter( counter+1)
        }else{
            toast.warning("بیشتر از این ندارم😊", {
                position: toast.POSITION.TOP_RIGHT,
              });
        }
      
    }

    return (<div
   
        className="flex md:flex-row flex-col justify-between border-b  border-black pb-3 px-4 w-full"
      >
        <div className="flex md:w-[40%]">
          <img
            className="border rounded-2xl " 
            width={80}
            
            src={`http://localhost:8000/images/products/images/${item.image?.[0]}`}
          />
       <div className="flex flex-col pr-3 py-2">
       <Link to={`/product/${item.id}_${item.slugName}_${item.category}`}
              className="font-bold  hover:cursor-pointer"> {item.name}</Link>
              <span className="text-xs"> رنگبندی سفید</span>
              <span className="text-xs">ست دو نفره</span>
              
              </div>  
  
         
        </div>
        <div className="flex justify-around md:w-[60%] mt-4 flex-col md:flex-row gap-2">
        <span className=" border border-black  pl-4 pr-4 h-8 pt-1 hidden md:flex
   
      rounded-full ">
        <span
          className="  hover:cursor-pointer  "
    onClick={insertOrderCount}
        >
          {" "}
          +{" "}
        </span>
        <span className="mx-4  "> {Number(item.orderNUm).toLocaleString("Fa-IR")}</span>
        <span
          className=" hover:cursor-pointer  "
     onClick={()=>{counter>1 && setCounter(counter-1)}}
        >
          {" "}
          -
        </span>
      </span>

          <span className="w-[200px] text-center ">
            {Number((item.price/item.orderNUm)*counter).toLocaleString("Fa-IR")} تومان
          </span>
          <div className="flex justify-end gap-7">
          <span className="  h-8 pt-1 flex md:hidden  ">
     <span
       className="  hover:cursor-pointer  border border-black rounded-full px-[9px] h-[26px] "
 onClick={insertOrderCount}
     >
       {" "}
       +{" "}
     </span>
     <span className="md:mx-4 mx-2  "> {Number(item.orderNUm).toLocaleString("Fa-IR")}</span>
     <span
       className=" hover:cursor-pointer  border border-black rounded-full px-[9px] h-[26px] "
  onClick={()=>{counter>1 && setCounter(counter-1)}}
     >
       {" "}
       -
     </span>
   </span>
          <span id={item.id} 
          data-user={item.name}
          className="mt-1"
          onClick={handleDeleteModal}>
            <DeleteOutlineRoundedIcon />
          </span>
          </div>

        </div>
      </div> );
  });
  export default CartData