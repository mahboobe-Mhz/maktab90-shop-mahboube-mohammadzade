import { useNavigate } from "react-router-dom";
import MainButton from "../../../../components/kit/button";
import MainHeader from "../../../../components/userComponent/mainHeader";
import ClearIcon from "@mui/icons-material/Clear";

const UnSuccessPayment = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="h-full w-full ">
      <MainHeader />
      <div className=" flex justify-center items-center h-full flex-col gap-20 container mx-auto">
        <div className="flex justify-center items-center ">
          <span className="w-[300px] text-center">
            پرداخت شما موفقیت آمیز نبود،سفارش شما در انتظار پرداخت است
          </span>
          <ClearIcon sx={{ fill: "red", fontSize: "150px" }} />
        </div>
        <span onClick={navigateToHome}>
          <MainButton title="بازگشت به صفحه اصلی" />
        </span>
      </div>
    </div>
  );
};

export default UnSuccessPayment;
