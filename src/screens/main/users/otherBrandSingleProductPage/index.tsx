import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../../../components/userComponent/mainHeader";
import ProductCart from "../../../../components/userComponent/productCard";
import MainFooter from "../../../../components/userComponent/mainFooter";
import SingleProductSlider from "../../../../components/userComponent/singleProductSlider";
import { Product } from "../../../../api/interface/products";
import { useDispatch, useSelector } from "react-redux";
import { setOrderData, storeAppState } from "../../../../redux/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { OrderInfo } from "../../../../api/interface/order";
import PersonIcon from "../../../../components/svg/personIcon";


const OtherBrandSingleProductPage = () => {
  const initialProduct =  {
    "rating": {
        "rate": 0,
        "count": 0
    },
    "_id": "",
    "category": {
        "_id": "",
        "name": " ",
        "icon": "",
        "createdAt": "",
        "updatedAt": "",
        "slugname":"",
        "__v": 0
    },
    "subcategory": {
        "_id": "",
        "category": "",
        "name": "",
        "createdAt": "",
        "updatedAt": "",
        "slugname": "",
        "__v": 0
    },
    "name": "",
    "price": 0,
    "quantity": 0,
    "brand": " ",
    "description": "",
    "thumbnail": "",
    "images": [
        ""
    ],
    "createdAt": "",
    "updatedAt":"",
    "slugname": ""
}
  const dispatch = useDispatch();
  const appState = useSelector(storeAppState);
//   const [selectProduct, setSelectProduct] = useState<Product>(initialProduct);
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [showColor , setShowColor]=useState(false)
  const [showSize , setShowSize]=useState(false)
  const[selectedColor,setSelectColor]=useState("")
 const [showDescription, setShowDescription]=useState(false)
 const [showMoreDescription, setShowMoreDescription]=useState(false)


  const useParam = useParams();
  const productId = useParam.id?.split("_")[0];
  const catId = useParam.id?.split("_")[2];

//   useEffect(() => {
 
//     axios
//       .get(`http://localhost:8000/api/products?category=${catId}&limit=5`)
//       .then((res) => {
//         setSimilarProduct(res.data.data.products);
//       });
   
//       axios.get(`http://localhost:8000/api/products/${productId}`).then((res) => {
//         setSelectProduct(res.data.data.product);
//         appState.OrderData.map((item:OrderInfo) => item.id===productId ?(setOrderCount(item.orderNUm) ,  setTotalPrice(res.data.data.product.price * item.orderNUm))
//         :"nist"
//         )
        
       
//       });

     
//   }, [useParam]);
const selectProduct= {
    "rating": {
        "rate": 0,
        "count": 0
    },
    "_id": "649980210d81c12153062f7f",
    "category": {
        "_id": "649978c10d81c12153062d42",
        "name": "مبلمان اداری",
        "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
        "createdAt": "2023-06-26T11:38:41.077Z",
        "updatedAt": "2023-06-26T11:38:41.243Z",
        "slugname": "mblman-adary",
        "__v": 0
    },
    "subcategory": {
        "_id": "64997b300d81c12153062dc6",
        "category": "649978c10d81c12153062d42",
        "name": "صندلی مدیرتی ومعاونتی",
        "createdAt": "2023-06-26T11:49:04.974Z",
        "updatedAt": "2023-06-26T11:49:04.974Z",
        "slugname": "sndly-mdyrty-wmaawnty",
        "__v": 0
    },
    "name": "صندلی مدیریتی مدل M2018F",
    "price": 5600000,
    "quantity": 10,
    "brand": "هوم نت",
    "description": "<ul><li>دسته ثابت آلومینیوم با پد انتگرال – مکانیزم دو دسته کلاجی</li><li>رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.</li><li>24 ماه ضمانت و خدمات پس از فروش</li><li>مدت زمان تحویل: 12 روز کاری</li></ul>",
    "thumbnail": "products-649980210d81c12153062f7f-1687781409329.jpeg",
    "images": [
        "products-649980210d81c12153062f7f-1687781409337-1.jpeg"
    ],
    "createdAt": "2023-06-26T12:10:09.326Z",
    "updatedAt": "2023-06-26T12:10:09.379Z",
    "slugname": "sndly-mdyryty-mdl-m2018f"
}

  useEffect(() => {
    setTotalPrice(selectProduct.price * orderCount);
  }, [orderCount]);

  const insertToCart = () => { 
    const orderInfo = {
      id: selectProduct._id,
      image: selectProduct.images,
      name: selectProduct.name,
      price: totalPrice,
      orderNUm: orderCount,
      quantity: selectProduct.quantity,
    category:selectProduct.category._id,
      slugName:selectProduct.slugname
    }; 
    if (orderCount > 0) {
  
      if(appState.OrderData.length>0){
        const newAppState =appState.OrderData.filter((item:OrderInfo)=> item.id !==productId ) 
        dispatch(setOrderData({ OrderData: [...newAppState, orderInfo] }));
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
           
              className="flex justify-between pt-1 pr-3"><span>انتخاب رنگ</span> 
              {showColor?<span  className=" pr-3  rotate-180 font-semibold text-xl hover:cursor-pointer"> ^</span>
              :<span className="pl-3 font-semibold mt-1 text-xl hover:cursor-pointer"> ^</span>}   </span> 
              {showColor? <span className="border-t border-black 
              ">
          <span  className="px-5 py-2 flex gap-1">
     
            <span  className="px-[10px] py-[0px] rounded-md bg-red-800 h-[20px] hover:cursor-pointer border-2 focus:text-red-600 border-secondary"></span>     
            <span  className="px-[10px] py-[0px] rounded-md bg-green-800 h-[20px] hover:cursor-pointer"></span>
            <span  className="px-[10px] py-[0px] rounded-md bg-blue-800 h-[20px] hover:cursor-pointer"></span>
            <span  className="px-[10px] py-[0px] rounded-md bg-yellow-800 h-[20px] hover:cursor-pointer"></span>
           
          </span>     </span>:""}
            
        
              </span>
              <span className="flex flex-col border border-black rounded-3xl px-2 py-1">
             <span onClick={()=>setShowSize(!showSize)} 
              className="flex justify-between pt-1 pr-3"><span>انتخاب ابعاد</span> 
              {showSize?<span  className=" pr-3  rotate-180 font-semibold text-xl hover:cursor-pointer"> ^</span>
              :<span className="pl-3 font-semibold  text-xl hover:cursor-pointer"> ^</span>}   </span> 
              {showSize? <span className="border-t  border-black" >
          <span className="px-5 py-2 flex gap-1" >
            <span className="">   <input name="hi" className="" type="radio"  /> <span className="px-2"> تک نفره</span></span>
            <span className="">   <input name="hi" className=" text-secondary" type="radio"  /> <span className="px-2">دونفره </span> </span>
          
           
          </span>     </span>:""}
            
        
              </span>
            </div>
            <div className="flex md:justify-between flex-col xl:flex-row justify-center items-center ">
              <span className="md:mt-2 md:mb-0 mb-3 pr-2 font-semibold ">
                {" "}
                {Number(totalPrice || selectProduct.price).toLocaleString(
                  "fa-IR"
                )
                }{" "}
                تومان{" "}
              </span>

              <div className="flex gap-10 lg:flex-row flex-col justify-center items-center">
                <span className=" md:border md:border-black md:px-5 px-3  h-8
                md:rounded-full ">
                  <span
                    className="  hover:cursor-pointer font-bold md:text-xl border border-black rounded-full px-[12px] md:px-0 md:border-none py-[2px] md:py-0"
                    onClick={PlusOrderHandle}
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="md:mx-4 mx-2 font-bold text-xl "> {Number(orderCount).toLocaleString(
                  "fa-IR"
                )}</span>
                  <span
                    className=" hover:cursor-pointer  font-bold md:text-xl border border-black rounded-full px-[12px] md:px-0 md:border-none py-[2px] md:py-0"
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
          <span onClick={()=>setShowDescription(!showDescription)} className="flex justify-between border-b-2 border-black ">
          <span className="font-bold">جزییات محصول</span>
            {showDescription? <span className="text-secondary font-semibold  text-2xl  hover:cursor-pointer"> −</span> :<span className="font-semibold  text-2xl hover:cursor-pointer"> +</span>}
          </span>
          {showDescription?<div className="border border-black rounded-xl mt-2 p-2  ">
              <span>محصولی با مواد اولیه عالی</span>
          </div>:""}
          
       
  
          <span onClick={()=>setShowMoreDescription(!showMoreDescription)} className="flex justify-between border-b-2 border-black  ">
          <span className="font-bold ">جزییات بیشتر </span>
            {showMoreDescription? <span className="text-secondary font-semibold  text-2xl hover:cursor-pointer "> −</span> :<span className="font-semibold hover:cursor-pointer text-2xl "> +</span>}
          </span>
          {showMoreDescription?<div className="border border-black rounded-xl mt-2 p-2  ">
              <span>محصولی با مواد اولیه عالی</span>
          </div>:""}
        </div>
       
      </div>
      <div dir='rtl'>
    <MainFooter />
    </div>
    </div>
  );
};

export default OtherBrandSingleProductPage;
