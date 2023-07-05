import axios from "axios";
import { useEffect, useState } from "react";
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
        console.log("hi3");
            
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


  return (
    <div dir="rtl">
      <MainHeader />
      <div className="flex flex-col gap-2 p-10">
        <div className=" flex gap-20 ">
          <div className="w-[50%]">
            <SingleProductSlider selectProduct={selectProduct} />
          </div>
          <div className="flex flex-col gap-5 w-[50%]">
            <h1 className="text-2xl font-bold"> {selectProduct?.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: selectProduct?.description }}
            />

            <div className="flex flex-col w-full gap-2">
              <span className="border border-black rounded-full px-2 py-1">
                انتخاب رنگ
              </span>
              <span className="border border-black rounded-full px-2 py-1">
                انتخاب ابعاد
              </span>
            </div>
            <div className="flex justify-between  ">
              <span className="mt-2 font-semibold">
                {" "}
                {Number(totalPrice || selectProduct.price).toLocaleString(
                  "fa-IR"
                )}{" "}
                تومان{" "}
              </span>

              <div className="flex gap-10">
                <span className=" border border-black px-2 rounded-full">
                  <span
                    className="mx-3  hover:cursor-pointer font-bold text-xl "
                    onClick={PlusOrderHandle}
                  >
                    {" "}
                    +{" "}
                  </span>
                  <span className="mx-1 font-bold  "> {orderCount}</span>
                  <span
                    className="mx-3 hover:cursor-pointer  font-bold text-xl "
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
                  className="bg-secondary rounded-full px-4 py-1 pb-2 text-white"
                >
                  {" "}
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2">
            <span>جزییات محصول</span> <span> +</span>{" "}
          </span>
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2">
            <span> نظرات</span> <span> +</span>{" "}
          </span>
          <span className="flex justify-between font-semibold border-b-2 border-black pb-2">
            <span>جزییات بیشتر</span> <span> +</span>{" "}
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">محصولات مشابه</h1>
          <div className="flex gap-3  w-full">
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
