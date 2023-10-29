import { useState } from "react";
import BottomSlider from "../aboutProduct/aboutProductSlider";
import MainButton from "../../../kit/button";
import FlashIcon from "../../../svg/flashIcon";
import NewsSlider from "./newsSlider";
import PersonIcon from "../../../svg/personIcon";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

const NewsAndArticle = () => {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();
  const navigateToNewsAndArticlePage =()=>{
  navigate(routes.USERS.NewsAndTitle)
  }
  const navigateToNewsAndArticleSinglePage =()=>{
    navigate(routes.USERS.NewsAndTileSinglePage) 
  }
  return (
    <div className=" mt-4 md:mt-0 flex flex-col  " dir="ltr">
        <h1 className="text-secondary md:text-4xl text-center text-3xl font-bold md:mb-5 pb-5 md:pb-10 hover:cursor-pointer" onClick={navigateToNewsAndArticlePage}> اخبار و مقالات</h1>
      <div className=" flex  flex-col md:flex-row items-center ">
      <div className="md:hidden flex  px-7 ">
        <NewsSlider setCounter={setCounter} counter={counter} />
        </div>
        {counter === 0 ? (
          <div className="  flex flex-col text-right justify-center  h-[350px]">
            <h1 className="md:text-5xl text-4xl md:text-right text-center  md:pr-7  md:mt-0 ">
              {" "}
             متریال{" "}
            </h1>
            <div className="  flex flex-col px-7 w-full   ">
              <p className="font-semibold text-sm md:text-lg md:mt-5 mt-3 text-center md:text-right">
                چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
                به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
                توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
                توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
                می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر
                تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
              </p>
           
              <div className="flex md:justify-between  md:flex-row flex-col items-center justify-center " >
              <button
              onClick={navigateToNewsAndArticleSinglePage}
                className="md:flex hidden text-black border-2 font-semibold pl-4 md:pr-2
                 pr-3 md:pt-2 md:pb-2 py-3 border-black  rounded-full  md:gap-2 
                mt-5 md:w-[160px]"
              >
                <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
                <span>
                  <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
                </span>{" "}
              </button>
              <div className="flex gap-5  md:mt-10 mt-4 text-secondary ">
              <span className="flex gap-2"> yasaman jalalian <PersonIcon className="fill-[#fd6e54]"/>   </span>
              <span className="flex gap-2">
                متریال ،طراحی داخلی
                <LocalOfferOutlinedIcon/> 
              </span>
              </div>
              <button
                className="md:hidden i  text-black border-2 font-semibold pl-4 md:pr-2
                 pr-3 md:pt-2 md:pb-2 py-3 border-black flex rounded-full  gap-2 
                mt-5 md:w-[160px]"
              >
                <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
                <span>
                  <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
                </span>{" "}
              </button>
              </div>
              
            </div>
          </div>
        ) : counter === 1 ? (
          <div className="  flex flex-col text-right justify-center  h-[350px]">
          <h1 className="md:text-5xl text-4xl text-center  md:pr-7  md:mt-0 ">
            {" "}
           متریال{" "}
          </h1>
          <div className="  flex flex-col px-7 w-full   ">
            <p className="font-semibold text-sm md:text-lg md:mt-5 mt-3 text-center md:text-right">
              چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر
              تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
            </p>
         
            <div className="flex md:justify-between  md:flex-row flex-col items-center justify-center " >
            <button
              className="md:flex hidden text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black  rounded-full  md:gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            <div className="flex gap-5  md:mt-10 mt-4 text-secondary ">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className="fill-[#fd6e54]"/>   </span>
            <span className="flex gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <button
              className="md:hidden i  text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black flex rounded-full  gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            </div>
            
          </div>
        </div>
        ) : counter === 2 ? (
          <div className="  flex flex-col text-right justify-center  h-[350px]">
          <h1 className="md:text-5xl text-4xl text-center  md:pr-7  md:mt-0 ">
            {" "}
           متریال{" "}
          </h1>
          <div className="  flex flex-col px-7 w-full   ">
            <p className="font-semibold text-sm md:text-lg md:mt-5 mt-3 text-center md:text-right">
              چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر
              تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
            </p>
         
            <div className="flex md:justify-between  md:flex-row flex-col items-center justify-center " >
            <button
              className="md:flex hidden text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black  rounded-full  md:gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            <div className="flex gap-5  md:mt-10 mt-4 text-secondary ">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className="fill-[#fd6e54]"/>   </span>
            <span className="flex gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <button
              className="md:hidden i  text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black flex rounded-full  gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            </div>
            
          </div>
        </div>
        ) : counter === 3 ? (
          <div className="  flex flex-col text-right justify-center  h-[350px]">
          <h1 className="md:text-5xl text-4xl text-center  md:pr-7  md:mt-0 ">
            {" "}
           متریال{" "}
          </h1>
          <div className="  flex flex-col px-7 w-full   ">
            <p className="font-semibold text-sm md:text-lg md:mt-5 mt-3 text-center md:text-right">
              چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر
              تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
            </p>
         
            <div className="flex md:justify-between  md:flex-row flex-col items-center justify-center " >
            <button
              className="md:flex hidden text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black  rounded-full  md:gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            <div className="flex gap-5  md:mt-10 mt-4 text-secondary ">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className="fill-[#fd6e54]"/>   </span>
            <span className="flex gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <button
              className="md:hidden i  text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black flex rounded-full  gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            </div>
            
          </div>
        </div>
        ) : counter === 4 ? (
          <div className="  flex flex-col text-right justify-center  h-[350px]">
          <h1 className="md:text-5xl text-4xl text-center  md:pr-7  md:mt-0 ">
            {" "}
           متریال{" "}
          </h1>
          <div className="  flex flex-col px-7 w-full   ">
            <p className="font-semibold text-sm md:text-lg md:mt-5 mt-3 text-center md:text-right">
              چوب روسی از جمله فرآورده‌های پر استفاده در صنعت تلقی می­شود که
              به تمامی کشورها صادر یا وارد می‌شود. چوب روسی در هر کشوری با
              توجه به اقلیم متفاوت و نوع درختان آن منطقه، متفاوت است که با
              توجه به میزان مصرف آن در صنایع مختلف به کشورهای دیگر صادر
              می‌شود. چوب روسی قیمت متفاوتی در نقاط مختلف دنیا دارد. اگر
              تاکنون برای خرید مبلمان، سرویس خواب، کابینت و اقلامید،
            </p>
         
            <div className="flex md:justify-between  md:flex-row flex-col items-center justify-center " >
            <button
            
              className="md:flex hidden text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black  rounded-full  md:gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            <div className="flex gap-5  md:mt-10 mt-4 text-secondary ">
            <span className="flex gap-2"> yasaman jalalian <PersonIcon className="fill-[#fd6e54]"/>   </span>
            <span className="flex gap-2">
              متریال ،طراحی داخلی
              <LocalOfferOutlinedIcon/> 
            </span>
            </div>
            <button
              className="md:hidden i  text-black border-2 font-semibold pl-4 md:pr-2
               pr-3 md:pt-2 md:pb-2 py-3 border-black flex rounded-full  gap-2 
              mt-5 md:w-[160px]"
            >
              <span className="md:text-lg ">بیشتر بخوانید</span>{" "}
              <span>
                <FlashIcon className=" md:w-[30px] w-[20px]  " />{" "}
              </span>{" "}
            </button>
            </div>
            
          </div>
        </div>
        ) : (
          " "
        )}
         <div className="md:flex hidden px-7 ">
        <NewsSlider setCounter={setCounter} counter={counter} />
        </div>
           
      </div>
  
    </div>
  );
};

export default NewsAndArticle;
