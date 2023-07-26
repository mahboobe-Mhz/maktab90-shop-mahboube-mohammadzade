import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../../../components/userComponent/mainHeader";
import ProductCart from "../../../../components/userComponent/productCard";
import MainFooter from "../../../../components/userComponent/mainFooter";
import SingleProductSlider from "../../../../components/userComponent/singleProductSlider";
import { Products } from "../../../../api/interface/products";
import { useDispatch, useSelector } from "react-redux";
import { setOrderData, storeAppState } from "../../../../redux/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
interface selectProduct {
  id: string;
  name: string;
  price: string;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: [];
  images: [];
  category: string;
  subcategory: string;
  orderCount: number;
}
const ShowSingleProduct = () => {
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
  const [selectProduct, setSelectProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [showColor , setShowColor]=useState(false)
  const [showSize , setShowSize]=useState(false)
  const[selectedColor,setSelectColor]=useState("")

  const orderInfo = {
    id: selectProduct._id,
    image: selectProduct.images,
    name: selectProduct.name,
    price: totalPrice,
    orderNUm: orderCount,
    quantity: selectProduct.quantity,
  };

  const useParam = useParams();
  const productId = useParam.id?.split("_")[0];
  const catId = useParam.id?.split("_")[2];
  //document.body.addEventListener('click',()=>{setShowColor(false),setShowSize(false)} , true);  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${productId}`).then((res) => {
      setSelectProduct(res.data.data.product);
    });
    axios
      .get(`http://localhost:8000/api/products?category=${catId}&limit=5`)
      .then((res) => {
        setSimilarProduct(res.data.data.products);
      });
      appState.OrderData.map(item => item.id===productId ?setOrderCount(item.orderNUm):"nist"
      )
  }, [useParam]);
  useEffect(() => {
    setTotalPrice(selectProduct.price * orderCount);
  }, [orderCount]);

  const insertToCart = () => {  
    if (orderCount > 0) {
  
      if(appState.OrderData.length>0){
        appState.OrderData?.map((item:any) => {
          if(item.id===productId){         
           const newOrderInfo = {
      id: selectProduct._id,
      image: selectProduct.images,
      name: selectProduct.name,
      price: totalPrice,
      orderNUm: orderCount,
      quantity: selectProduct.quantity,
    };
    const newAppState = [...appState.OrderData];
    newAppState.splice(item.id, 1);
            dispatch(setOrderData({ OrderData: [...newAppState, newOrderInfo] }));
            
          }else{
           
            
            dispatch(setOrderData({ OrderData: [...appState.OrderData, orderInfo] }));
          }
        })
      }else{

            
        dispatch(setOrderData({ OrderData: [...appState.OrderData, orderInfo] }));
      }
      

    
 

  

    }
    if (orderCount === 0) {
      toast.warning("تعداد را وارد کنید😊", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const PlusOrderHandle = () => {
    selectProduct.quantity > orderCount && setOrderCount(orderCount + 1);
    if (orderCount === selectProduct.quantity) {
      toast.warning("بیشتر از این ندارم😊", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
 const handleSelectColor =(event:any)=>{
setSelectColor(event.currentTarget.id)

 }

  return (
    <div dir="rtl">
      <MainHeader />
      <div className="flex flex-col gap-2 p-10">
        <div className=" flex md:gap-20 flex-col md:flex-row">
          <div className="md:w-[50%] ">
            <SingleProductSlider selectProduct={selectProduct} />
          </div>
          <div className="flex flex-col gap-5 md:w-[50%] mt-5 md:mt-0">
            <h1 className="md:text-2xl font-bold text-lg"> {selectProduct?.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: selectProduct?.description }}
            />

            <div  className="flex flex-col w-full gap-2" >
              <span className="flex flex-col border border-black rounded-3xl px-2 py-1">
             <span onClick={()=>setShowColor(!showColor)}
           
              className="flex justify-between"><span>انتخاب رنگ</span> 
              {showColor?<span  className=" pr-3  rotate-180 font-semibold text-xl hover:cursor-pointer"> ^</span>
              :<span className="pl-3 font-semibold text-xl"> ^</span>}   </span> 
              {showColor? <span className="border-t border-black ">
          <span  className="px-5 py-2 flex gap-1">
     
            <span  className="px-[10px] py-[0px] rounded-md bg-red-800 h-[20px] hover:cursor-pointer border-2 focus:text-red-600 border-secondary"></span>     
            <span  className="px-[10px] py-[0px] rounded-md bg-green-800 h-[20px] hover:cursor-pointer"></span>
            <span  className="px-[10px] py-[0px] rounded-md bg-blue-800 h-[20px] hover:cursor-pointer"></span>
            <span  className="px-[10px] py-[0px] rounded-md bg-yellow-800 h-[20px] hover:cursor-pointer"></span>
           
          </span>     </span>:""}
            
        
              </span>
              <span className="flex flex-col border border-black rounded-3xl px-2 py-1">
             <span onClick={()=>setShowSize(!showSize)} 
              className="flex justify-between"><span>انتخاب ابعاد</span> 
              {showSize?<span  className=" pr-3  rotate-180 font-semibold text-xl"> ^</span>
              :<span className="pl-3 font-semibold text-xl"> ^</span>}   </span> 
              {showSize? <span className="border-t border-black" >
          <span className="px-5 py-2 flex gap-1" >
            <span className="">   <input name="hi" className="" type="radio"  /> <span className="px-2"> تک نفره</span></span>
            <span className="">   <input name="hi" className=" text-secondary" type="radio"  /> <span className="px-2">دونفره </span> </span>
          
           
          </span>     </span>:""}
            
        
              </span>
            </div>
            <div className="flex md:justify-between flex-col md:flex-row justify-center items-center ">
              <span className="md:mt-2 md:mb-0 mb-3 font-semibold ">
                {" "}
                {Number(totalPrice || selectProduct.price).toLocaleString(
                  "fa-IR"
                )}{" "}
                تومان{" "}
              </span>

              <div className="flex gap-10 md:flex-row flex-col justify-center items-center">
                <span className=" border border-black md:px-5 w-[150px] px-7
                py-1
                rounded-full ">
                  <span
                    className="  hover:cursor-pointer font-bold text-xl "
                    onClick={PlusOrderHandle}
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="mx-4 font-bold  "> {orderCount}</span>
                  <span
                    className=" hover:cursor-pointer  font-bold text-xl "
                    onClick={() => {
                      orderCount > 0 && setOrderCount(orderCount - 1);
                    }}
                  >
                    {" "}
                    -
                  </span>
                </span>
                <button
                  onClick={insertToCart}
                  className="bg-secondary rounded-full px-10 py-1 pb-2 text-white mr-5"
                >
                  {" "}
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2 text-sm md:text-md">
            <span>جزییات محصول</span> <span> +</span>{" "}
          </span>
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2 text-sm md:text-md">
            <span> نظرات</span> <span> +</span>{" "}
          </span>
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2 text-sm md:text-md">
            <span>جزییات بیشتر</span> <span> +</span>{" "}
          </span>
        </div>
        <div>
          <h1 className="md:text-2xl font-bold text-lg">محصولات مشابه</h1>
          <div className="flex gap-3  w-full overflow-x-scroll">
            {similarProduct.map((item) => (
              <ProductCart productSelect={item} />
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default ShowSingleProduct;
