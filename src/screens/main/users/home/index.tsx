import GroupingProduct from "../../../../components/userComponent/homeComponent/groupingProduct";
import SearchProducts from "../../../../components/userComponent/homeComponent/searchProducts";
import TopOfHome from "../../../../components/userComponent/homeComponent/top";

const Home = () => {
    return ( <div className="w-[100%] flex flex-col gap-10">
    <TopOfHome/>
    <SearchProducts/>
    <GroupingProduct/>
    </div> );
}
 
export default Home;