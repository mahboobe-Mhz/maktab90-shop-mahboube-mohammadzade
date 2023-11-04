import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  Link
} from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import MainHeader from "../../../../components/userComponent/mainHeader";
import ProductCart from "../../../../components/userComponent/productCard";
import MainFooter from "../../../../components/userComponent/mainFooter";
import useGetCategoryProducts from "../../../../api/services/products/useGetAllProductOfCategory";
import { toast } from "react-toastify";
import CategoryFilter from "../../../../components/userComponent/categoryFilter";
import { Category } from "../../../../api/interface/category";
import { subcategory } from "../../../../api/interface/subCategory";
import { Product } from "../../../../api/interface/products";
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import FlashIcon2 from "../../../../components/svg/flashIcon2";
import FlashIcon3 from "../../../../components/svg/flashIcon3";

const CategoryScreen = () => {

  //  const locationParams = useLocation();
  //const searchParams=useSearchParams()
  //   const url = window.location.href;
  const useParam = useParams();

  const catId = useParam.id?.split("_")[0];
  const catName=useParam.id?.split("_")[1]
  const pageNum = useParam.id?.split("_")[3];


  const { data, isLoading, refetch, isError } = useGetCategoryProducts(
    Number(pageNum),
    6,
    catId
  );
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
      <div className=" container mx-auto px-3 md:px-0 ">
      <div className="md:mx-2">
        <div className="mt-1 w-full">
          <img src="/picture/posterCategory.png" alt="" />
        </div>
        <div className="flex justify-center mt-3 items-center w-full">
    
        <CategoryFilter/>
        </div>

        <div className="flex md:flex-row flex-col md:mt-15 mt-5 md:gap-6 gap-1   px-3">
          <div className="md:w-[30%] flex md:flex-col flex-row md:gap-0 gap-2">
           
            <div className="mt-3 flax flex-col gap-1  pb-2 md:h-[370px] h-[250px]   overflow-y-auto" >
            <h1 className="md:text-xl text-md font-semibold w-[150px] md:w-full  border-b-2
             border-black pb-2">
              {" "}
              دسته بندی محصولات
            </h1>
              {allCategory.map((item:Category) => (
                <div
                  onClick={handleShowCategoryProducts}
                  id={item._id}
                  data-user={item.slugname}
                  className="mb-1 hover:cursor-pointer  "
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
            <div className="mt-3 flax flex-col gap-3 md:h-[250px] h-[250px]   overflow-y-auto">
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
                  className="pb-2 "
                >
                  <span className="font-semibold md:text-lg text-sm hover:cursor-pointer"> {item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="md:px-10 px-0 md:mt-0 mt-10 flex flex-wrap justify-around gap-2">
              {!isLoading &&
                data.data.products.map((item:Product) => (
                  <ProductCart productSelect={item} />
                ))}
            </div>
            <div className="w-full flex justify-center mt-10" dir="ltr">
      <Stack>
      <Pagination
      page={page}
      size="large"
      count={9} 
      siblingCount={0} 
     // boundaryCount={2} 
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem

          component={Link}
          slots={{ previous:FlashIcon3 , next:FlashIcon2 }}
          to={`/category/${catId}_${catName}_page_${item.page === 1 ? '1' : `${item.page}`}`}
          {...item}
        />
      )}
    />
      </Stack>
 
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
