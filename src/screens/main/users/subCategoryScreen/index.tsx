import axios from "axios";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MainHeader from "../../../../components/userComponent/mainHeader";
import ProductCart from "../../../../components/userComponent/productCard";
import MainFooter from "../../../../components/userComponent/mainFooter";
import CheckIcon from "@mui/icons-material/Check";
import useGetSubCategoryProducts from "../../../../api/services/products/useGetAllProductOfSubCat";
import ClientSubPagination from "../../../../components/userComponent/subCatClientPaginationm";
import { toast } from "react-toastify";
import { Category } from "../../../../api/interface/category";
import { subcategory } from "../../../../api/interface/subCategory";
import { Product } from "../../../../api/interface/products";
import CategoryFilter from "../../../../components/userComponent/categoryFilter";

const SubCategoryScreen = () => {
  //  const locationParams = useLocation();
  //const searchParams=useSearchParams()
  //   const url = window.location.href;
  const useParam = useParams();
  const catId = useParam.id?.split("_")[0];
  const subCatId = useParam.id?.split("_")[1];
  const subCatName = useParam.id?.split("_")[2];
  const pageNum = useParam.id?.split("_")[4];

  const { data, isLoading, refetch, isError } = useGetSubCategoryProducts(
    Number(pageNum),
    6,
    subCatId,
    catId
  );
  const [selectSubCategory, setSelectSubCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const navigate = useNavigate();
  const [countPage, setCountPage] = useState<number>(0);

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
      `http://localhost:8000/api/products?category=${catId}&subcategory=${subCatId}`
    );
    req.then((res) => {
      const lengthCat = res.data.data.products.length / 6 + 0.26;
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
      `/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1`
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
      <div className=" container mx-auto px-3 md:px-0 ">
      <div >
        <div className="mt-1 w-full">
          <img src="/picture/posterCategory.png" alt="" />
        </div>
        <div className="flex justify-center mt-3  ">
        <CategoryFilter/>

</div>
        <div className="flex md:flex-row flex-col md:mt-15 mt-5 md:gap-6 gap-1  px-3  ">
          <div className="md:w-[30%] flex md:flex-col flex-row md:gap-0 gap-2">
         
            <div className="mt-3 flax flex-col gap-1  pb-2 md:h-[370px] h-[250px]   overflow-y-auto">
            <h1 className="md:text-xl text-md font-semibold  w-[150px] md:w-full  border-b-2
             border-black pb-2 ">
              {" "}
              دسته بندی محصولات
            </h1>
              {allCategory.map((item:Category) => (
                <div
                  onClick={handleShowCategoryProducts}
                  id={item._id}
                  data-user={item.slugname}
                  className="md:mb-1 hover:cursor-pointer  "
                >
                  {item._id === catId ? (
                    <span className="font-semibold md:text-lg text-sm text-secondary">
                      {" "}
                      {item.name}
                    </span>
                  ) : (
                    <span className="font-semibold md:text-lg text-sm"> {item.name}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flax flex-col gap-3 md:h-[250px] h-[250px]   overflow-y-auto ">
            <h1 className="md:text-xl text-md font-semibold w-[150px] md:w-full  border-b-2
             border-black pb-1 ">
              {" "}
               زیر دسته  محصولات
            </h1>
              {selectSubCategory.map((item:subcategory) => (
                <div
                  id={item._id}
                  data-user={item.slugname}
                  onClick={handleShowSubCategoryProducts}
                  className="mb-1 hover:cursor-pointer"
                >
                  {item._id === subCatId ? (
                    <div>
                      <CheckIcon sx={{ color: "secondary.main" }} />
                      <span className="font-semibold md:text-lg text-sm hover:cursor-pointer"> {item.name}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="font-semibold md:text-lg text-sm hover:cursor-pointer"> {item.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=" md:px-10 px-0 md:mt-0 mt-10 flex flex-wrap justify-around gap-2">
              {!isLoading &&
                data.data.products.map((item:Product) => (
                  <ProductCart productSelect={item} />
                ))}
            </div>
            <div className="w-full flex justify-center">
              <ClientSubPagination countPage={countPage} />
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

export default SubCategoryScreen;
