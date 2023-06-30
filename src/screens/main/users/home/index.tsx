import GroupingProduct from "../../../../components/userComponent/homeComponent/groupingProduct";
import SearchProducts from "../../../../components/userComponent/homeComponent/searchProducts";
import TopOfHome from "../../../../components/userComponent/homeComponent/top";
import MainHeader from "../../../../components/userComponent/mainHeader";
import MainFooter from "../../../../components/userComponent/mainFooter";

const Home = () => {
  return (
    <div className="w-[100%] flex flex-col  gap-5 " dir="rtl">
      <MainHeader />
      <TopOfHome />
      <SearchProducts />
      <GroupingProduct />
      <div className="w-full flex items-center justify-center">
        <img
          className=" rounded-3xl"
          width={"90%"}
          src="public/picture/banner-01.jpg"
        />
      </div>
      <MainFooter />
    </div>
  );
};

export default Home;
