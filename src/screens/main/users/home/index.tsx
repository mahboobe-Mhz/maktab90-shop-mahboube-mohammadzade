import GroupingProduct from "../../../../components/userComponent/homeComponent/groupingProduct";
import SearchProducts from "../../../../components/userComponent/homeComponent/searchProducts";
import TopOfHome from "../../../../components/userComponent/homeComponent/top";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";
import AboutProduct from "../../../../components/userComponent/homeComponent/aboutProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {

  


  return (
    <div className="w-[100%] flex flex-col  gap-5 " dir="rtl">
      <MainHeader />
      <TopOfHome />
      <SearchProducts />
      <GroupingProduct />
      <div className=" w-full flex items-center justify-center relative">
        <div className="fa-homnet absolute top-[-5px] right-[50px] pr-[150px] pl-[30px] pb-8 pt-6 bg-white rounded-full ">
          <span className="px-5 pb-2 text-4xl rounded-full bg-white border-secondary border-2"> هومنت</span>
        </div>
        <img
          className=" rounded-3xl"
          width={"90%"}
          src="public/picture/banner-01.jpg"
        />
        <div className="en-homnet absolute bottom-[-20px] left-[20px] pl-[150px] pr-[30px] pb-8 pt-6 bg-white rounded-full ">
          <span className="px-5 pb-2 text-4xl rounded-full bg-white border-secondary border-2"> Homnet</span>
        </div>
      </div>
      <AboutProduct/>
      <MainFooter />
    </div>
  );
};

export default Home;
