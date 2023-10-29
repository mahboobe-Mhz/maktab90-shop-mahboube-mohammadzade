import GroupingProduct from "../../../../components/userComponent/homeComponent/groupingProduct";
import SearchProducts from "../../../../components/userComponent/homeComponent/searchProducts";
import TopOfHome from "../../../../components/userComponent/homeComponent/top";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import AboutProduct from "../../../../components/userComponent/homeComponent/aboutProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PopularBrand from "../../../../components/userComponent/homeComponent/popularBrand";
import NewsAndArticle from "../../../../components/userComponent/homeComponent/newsAndArticle";

const Home = () => {
  return (
    <div className="w-[100%] flex flex-col  gap-5  " dir="rtl">
      <MainHeader />
      <div className=" container mx-auto px-1">
      <TopOfHome />
      <SearchProducts />
      <GroupingProduct />
      <div className=" mainBanner  w-full hidden md:flex items-center justify-center relative ">
        <div className="fa-homnet  absolute top-[-5px] right-[-20px] pr-[100px] pl-[30px]  pb-3 pt-3 bg-white rounded-full  ">
         <span> <img src="public\logo\logo2-01.png" className=" w-[220px]    md:text-4xl  rounded-full pb-2 px-2 pt-3 border-secondary 
         border-2"/></span> 
        </div>
        <img
          className=" rounded-3xl "
          src="public/picture/banner-01.jpg"
        />
        <div className="en-homnet absolute bottom-[-20px] left-[-20px] pl-[100px] pr-[30px] pb-8 pt-4 bg-white rounded-full ">
        <img src="public\logo\logo3-01.png" className=" w-[220px]  md:text-4xl  rounded-full pb-2 px-2 pt-3 border-secondary border-2"/> 
        </div>
      </div>
      <div className=" resBanner w-full md:hidden flex items-center justify-center relative px-2 pt-10">
        <div className=" faHomnet absolute top-[35px] right-[0px]  pr-8 pl-3 pb-2 pt-2 bg-white rounded-full ">
        <span> <img src="public\logo\logo2-01.png" className=" w-[90px]    md:text-4xl  rounded-full pb-1 px-2 pt-2 border-secondary 
         border-2"/></span> 
        </div>
        <img
          className=" rounded-3xl "
          src="public/picture/banner-01.jpg"
        />
        <div className="enHomnet absolute bottom-[-4px] left-[0px]  pb-2 pt-2 pr-3 pl-5 bg-white rounded-full ">
        <img src="public\logo\logo3-01.png" className=" w-[90px]  md:text-4xl  rounded-full pb-[6px] px-2 pt-[5px] border-secondary border-2"/> 
        </div>
      </div>
      <AboutProduct/>
      <PopularBrand/>
      <NewsAndArticle/>
      </div>
     
      <MainFooter />
    </div>
  );
};

export default Home;
