import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";
const MainFooter = () => {
  const navigate = useNavigate();
  const navigateHome =()=>{
    navigate('/')
  }
  const navigateConnectionPage=()=>{
    navigate('/connectedUs')
  }
  const navigateAboutUsPage=()=>{
    navigate('/aboutUs')
  }
  return (
    <div className="position:fixed button:0px bg-black text-white md:py-5 ">
      <div className="flex justify-between md:px-10">
        <div className="flex md:gap-10 gap-2">
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 md:text-md text-sm ">دفتر مرکزی</h3>
            <span className=" md:text-sm text-xs pb-2 border-b md:w-[200px] w-[100px] border-white font-semibold">
              شیراز خیابان قصرودشت مجتمع تجاری اناهیتا۲ پلاک ۴۳
            </span>
            <span className="  mt-1 mb-2 font-bold md:text-md text-sm">شماره تماس</span>
            <span className=" md:text-sm text-xs  font-semibold"> ۰۷۱۳۲۳۰۲۰۴۶</span>
            <span className=" md:text-sm text-xs border-b w-[100px] border-white pb-2 font-semibold">
              ۰۹۱۷۷۹۰۳۴۸۴
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2  md:text-md text-sm">پیوندهای مفید </h3>
            <span onClick={navigateHome}   className=" text-sm  font-semibold hover:cursor-pointer"> فروشگاه هومنت</span>
            <span className=" text-sm  font-semibold md:text-md text-sm">فروشگاه</span>
            <span onClick={navigateAboutUsPage} className=" text-sm  font-semibold hover:cursor-pointer">درباره ما</span>
            <span onClick={navigateConnectionPage} className=" text-sm   font-semibold border-b border-white pb-2 hover:cursor-pointer">
              تماس با ما
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2 md:text-md text-sm"> حساب کاربری </h3>
            <span className=" md:text-sm text-xs font-semibold "> حساب کاربری من </span>
            <span className=" md:text-sm text-xs  font-semibold "> تسویه حساب </span>
            <span className=" md:text-sm text-xs font-semibold "> رهگیری سفارشات </span>
            <span className=" md:text-sm text-xs  font-semibold border-b border-white pb-2 ">
              {" "}
              لیست علاقه مندی{" "}
            </span>
          </div>
          <div>
            {" "}
            <h3 className="font-bold mb-2 md:text-sm text-xs"> نماد الکترونیکی </h3>
            <span className="  text-center">
              <img
                width={80}
                className="rounded-md"
                src="picture/enamad.webp"
              />
            </span>
          </div>
        </div>
        <div className="pt-5 hidden md:flex md:flex-col">
          <img  onClick={navigateHome} width={120} src="public\logo\Untitled-2-01.png"/>
      
          <span className="flex gap-2">
            <TelegramIcon sx={{ width: "15px" }} />{" "}
            <InstagramIcon sx={{ width: "15px" }} />{" "}
            <YouTubeIcon sx={{ width: "15px" }} />
          </span>
          <span className="font-bold mb-2 "> با ما همراه باشید</span>
        </div>
      </div>
      <div className="mt-2 px-3 text-xs font-semibold">
        <p className="border border-white rounded-full px-5 py-2">
          هوم نت به عنوان یم استارتاپ و تجارت نوپا ,قصد دارد تا با ارائه سبک های
          متنوع طراحی داخلی،مطالب تحلیلی و انتقادی،مشاوره های کاربردی،معرفی
          محصولات با کیفیت ایرانی وهمچنین استفاده از تکنولوژی های به روز ،مسری
          هموار و هیجان انگیز برای زیبا کردند خانه شما ایجاد کند.
        </p>
      </div>
      <div className="flex text-center justify-center w-full ">
        <div className="pt-5  md:hidden ">
          <img src='public/logo/wiethLogo.png'/>
   
          <span className="flex gap-2 justify-center">
            <TelegramIcon sx={{ width: "15px" }} />{" "}
            <InstagramIcon sx={{ width: "15px" }} />{" "}
            <YouTubeIcon sx={{ width: "15px" }} />
          </span>
          <span className="font-bold mb-2 "> با ما همراه باشید</span>
        </div>
      </div>

      <div className="w-full text-center mt-2  px-3 text-xs font-semibold">
        <p className="border-t border-white">
          تمامی حقوق متعلق به سایت هومنت میباشد
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
