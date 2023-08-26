import axios from "axios";
import { useEffect, useState } from "react";
import useGetAllCategory from "../../../api/services/products/useGetAllCategory";
import { Link } from "react-router-dom";
import { Category } from "../../../api/interface/category";

const CategoryResMenu = () => {
    const[showMenu,setShowMenu]=useState<boolean>(false)
 const {data,refetch,isLoading}=useGetAllCategory()
  
  
  
     return (  
         <div className="relative group z-20">
  {/* Category item with subcategory */}
   <span  onClick={()=>setShowMenu(true)}   className="text-black  font-semibold  hover:cursor-pointer hover:text-secondary  "
   > محصولات</span>
   {
     showMenu? <div id="subMenu" className="absolute  shadow-black  shadow-xl rounded-2xl bg-white mt-2
     border border-black py-2 w-[150px] right-[150px] top-[10px]" >
         <div className="flex flex-col pr-3 gap-2">
  {
    !isLoading?data.data.categories.map((item:Category)=>
    <Link to={`http://localhost:5173/category/${item._id}_${item.slugname}_page_1`} >
        { item.name}
    
    </Link>
    ):""
  
  }
         </div>
 
       
        </div>:""
     
   }
 
 
 
   
 </div>
     );
}
 
export default CategoryResMenu;