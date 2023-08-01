import GroupingProduct from "../../../../components/userComponent/homeComponent/groupingProduct";
import SearchProducts from "../../../../components/userComponent/homeComponent/searchProducts";
import TopOfHome from "../../../../components/userComponent/homeComponent/top";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import AboutProduct from "../../../../components/userComponent/homeComponent/aboutProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PopularBrand from "../../../../components/userComponent/homeComponent/popularBrand";

const Home = () => {

  


  return (
    <div className="w-[100%] flex flex-col  gap-5 " dir="rtl">
      <MainHeader />
      <TopOfHome />
      <SearchProducts />
      <GroupingProduct />
      <div className=" mainBanner w-full hidden md:flex items-center justify-center relative px-10">
        <div className="fa-homnet absolute top-[-5px] right-[20px] md:pr-[130px] md:pl-[30px]  pb-8 pt-6 bg-white rounded-full ">
          <span className="px-5 pb-2 md:text-4xl  rounded-full bg-white border-secondary border-2"> هومنت</span>
        </div>
        <img
          className=" rounded-3xl "
          src="public/picture/banner-01.jpg"
        />
        <div className="en-homnet absolute bottom-[-20px] left-[20px] pl-[100px] pr-[30px] pb-8 pt-6 bg-white rounded-full ">
          <span className="px-5 pb-2 text-4xl rounded-full bg-white border-secondary border-2"> Homnet</span>
        </div>
      </div>
      <div className=" resBanner w-full md:hidden flex items-center justify-center relative px-10 pt-10">
        <div className=" faHomnet absolute top-[35px] right-[20px]  pr-10 pl-3 pb-2 pt-1 bg-white rounded-full ">
          <span className="px-2 pb-1 rounded-full text-xs bg-white border-secondary border-2"> هومنت</span>
        </div>
        <img
          className=" rounded-3xl "
          src="public/picture/banner-01.jpg"
        />
        <div className="enHomnet absolute bottom-[-2px] left-[20px]  pb-3 pt-1 pr-3 pl-7 bg-white rounded-full ">
          <span className="px-2 pb-1 rounded-full text-xs bg-white border-secondary border-2"> Homnet</span>
        </div>
      </div>
      <AboutProduct/>
      <PopularBrand/>
      <MainFooter />
    </div>
  );
};

export default Home;
