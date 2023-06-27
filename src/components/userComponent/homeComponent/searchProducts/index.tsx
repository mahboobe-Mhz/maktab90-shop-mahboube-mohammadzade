import ProductsSlider from "./sliderProducts";

const SearchProducts = () => {
    return ( <div className="flex flex-col items-center mt-10">
        <h1 className="text-secondary text-4xl  font-bold mb-5">جستجوی محصول</h1>
        <div  className=" relative mt-10 flex gap-5">
            <button className="relative  focus:bg-secondary focus:text-white focus:outline-none focus:ring-none border-2 px-2 rounded-full pb-1 font-semibold border-secondary " >محصولات پرفروش</button>
            <button className="relative focus:bg-secondary focus:text-white  focus:outline-none focus:ring-none border-2 px-2 rounded-full pb-1 font-semibold border-secondary " > تخفیفات ویژه</button>
            <button className="relative  focus:bg-secondary focus:text-white focus:outline-none focus:ring-none border-2 px-2 rounded-full pb-1 font-semibold border-secondary " >جدیدترین محصولات  </button>
            
        </div>
        <div className="w-[100%] flex items-center justify-center mt-5 ">
            <ProductsSlider/>
        </div>
    </div> );
}
 
export default SearchProducts;