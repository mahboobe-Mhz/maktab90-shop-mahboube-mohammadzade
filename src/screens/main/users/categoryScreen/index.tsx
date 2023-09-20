import axios from "axios";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useGetAllProducts from "../../../../api/services/products/useGetAllProducts";
import MainHeader from "../../../../components/userComponent/mainHeader";
import ProductCart from "../../../../components/userComponent/productCard";
import MainFooter from "../../../../components/userComponent/mainFooter";
import useGetCategoryProducts from "../../../../api/services/products/useGetAllProductOfCategory";
import ClientPagination from "../../../../components/userComponent/catClientPagination";
import { toast } from "react-toastify";
import CategoryFilter from "../../../../components/userComponent/categoryFilter";
import { Category } from "../../../../api/interface/category";
import { subcategory } from "../../../../api/interface/subCategory";
import { Product } from "../../../../api/interface/products";

const CategoryScreen = () => {
  //  const locationParams = useLocation();
  //const searchParams=useSearchParams()
  //   const url = window.location.href;
  const useParam = useParams();

  const catId = useParam.id?.split("_")[0];
  const pageNum = useParam.id?.split("_")[3];

  const { data, isLoading, refetch, isError } = useGetCategoryProducts(
    Number(pageNum),
    6,
    catId
  );
  const [countPage, setCountPage] = useState<number>(0);
  const [selectSubCategory, setSelectSubCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categories`)
      .then((res) => setAllCategory(res.data.data.categories));
    axios
      .get(`http://localhost:8000/api/subcategories?category=${catId}`)
      .then((res) => setSelectSubCategory(res.data.data.subcategories));

    refetch();
  }, [useParam]);
  useEffect(() => {
    const req = axios.get(
      `http://localhost:8000/api/products?category=${catId}`
    );
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 6 + 0.26;
      console.log(res.data.data.products);

      const correctNum = Number(lengthCat.toFixed());
      setCountPage(correctNum);
    });
    if (isError) {
      toast.error("خطایی روی داده دوباره تلاش کنید", {
        position: "top-right",
      });
    }
  }, []);

  const handleShowCategoryProducts = (event: any) => {
    navigate(
      `/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1}`
    );
  };
  const handleShowSubCategoryProducts = (event: any) => {
    navigate(
      `/subcategory/${catId}_${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1`
    );
  };
  return (
    <div dir="rtl">
      <MainHeader />
      <div className=" container mx-auto">
      <div className="md:mx-2">
        <div className="mt-1 w-full">
          <img src="/picture/posterCategory.png" alt="" />
        </div>
        <div className="flex justify-center mt-3 items-center w-full">
    
        <CategoryFilter/>
        </div>

        <div className="flex md:mt-20 mt-5 md:gap-6 gap-1   px-3">
          <div className="md:w-[30%] ">
            <h1 className="md:text-xl text-md font-semibold w-[150px] md:w-full  border-b-2
             border-black pb-2">
              {" "}
              دسته بندی محصولات
            </h1>
            <div className="mt-3 flax flex-col gap-1 border-b-2 border-black pb-2">
              {allCategory.map((item:Category) => (
                <div
                  onClick={handleShowCategoryProducts}
                  id={item._id}
                  data-user={item.slugname}
                  className="mb-1 hover:cursor-pointer "
                >
                  {item._id === catId ? (
                    <span className="font-semibold text-secondary md:text-lg text-sm">
                      {" "}
                      {item.name}
                    </span>
                  ) : (
                    <span className="font-semibold md:text-lg text-sm"> {item.name}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flax flex-col gap-3 ">
              {selectSubCategory.map((item:subcategory) => (
                <div
                  id={item._id}
                  data-user={item.slugname}
                  onClick={handleShowSubCategoryProducts}
                  className="mb-2"
                >
                  <span className="font-semibold md:text-lg text-sm hover:cursor-pointer"> {item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="px-10 flex flex-wrap justify-around gap-2">
              {!isLoading &&
                data.data.products.map((item:Product) => (
                  <ProductCart productSelect={item} />
                ))}
            </div>
            <div className="w-full flex justify-center">
              <ClientPagination countPage={countPage} />
            </div>
          </div>
        </div>
      </div>
      <img className="md:h-[200px] w-full" src="/picture/footer.png" />
      </div>
    
   
    <MainFooter />

    </div>
  );
};

export default CategoryScreen;
