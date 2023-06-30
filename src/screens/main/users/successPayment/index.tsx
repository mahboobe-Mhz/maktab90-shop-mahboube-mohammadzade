import DoneIcon from "@mui/icons-material/Done";
import MainButton from "../../../../components/kit/button";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainHeader from "../../../../components/userComponent/mainHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeliveryDate,
  setOrderData,
  storeAppState,
} from "../../../../redux/slice/appSlice";
import useAddNewOrder from "../../../../api/services/products/useAddNewOrder";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { routes } from "../../../../routes";
import "react-toastify/dist/ReactToastify.css";

const SuccessPayment = () => {
  const appState = useSelector(storeAppState);
  const { mutate, isError } = useAddNewOrder({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newOrder = appState.OrderData.map((item: any) => {
      return { product: item.id, count: item.orderNUm };
    });
    const data = {
      user: user._id,
      products: newOrder,
      deliveryStatus: false,
      deliveryDate: new Date(Number(appState.deliveryDate) * 1000),
    };
    if (searchParams.get("status") === "success") {
      mutate(data);
      if (!isError) {
        dispatch(setOrderData({ OrderData: [] }));
        dispatch(setDeliveryDate({ deliveryDate: "" }));
      } else {
        toast.warning("   مشکلی روی داده دوباره امتحان کنید", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate(routes.USERS.unSuccessPayment);
      }
    }
  }, [searchParams]);

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="h-full w-full ">
      <MainHeader />
      <div className=" flex justify-center items-center h-full flex-col gap-20">
        <div className="flex justify-center items-center ">
          <span className="w-[300px] text-center">
            باتشکر از پرداخت شماسفارش شما ثبت شده و جهت هماهنگی با شما تماس
            گرفته خواهد شد
          </span>
          <DoneIcon sx={{ fill: "green", fontSize: "150px" }} />
        </div>
        <span onClick={navigateToHome}>
          <MainButton title="بازگشت به صفحه اصلی" />
        </span>
      </div>
    </div>
  );
};

export default SuccessPayment;
