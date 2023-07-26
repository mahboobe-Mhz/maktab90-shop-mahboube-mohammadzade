import { useEffect, useState } from "react";
import SubCatMenu from "./subCatMenu";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";

const MainMenu = () => {
    const [catData ,setCatData]=useState([])
    const[showCategory,setShowCategory]=useState(false)
    const [showSubCat ,setShowSubCat]=useState(false)
    useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
    res.then(response=>setCatData(response.data.data.categories)
    ) },[])
    document.body.addEventListener('click',()=>setShowCategory(false) , true);  
    return (  
        <div className="relative group z-20">
 {/* Category item with subcategory */}
  <button  className="text-black  font-semibold  hover:cursor-pointer hover:text-secondary  "
   onMouseOver={()=>setShowCategory(true)}>محصولات</button>
  
{
showCategory ?<div className="absolute  shadow-black  shadow-xl rounded-2xl bg-white mt-2
 border border-black py-2 w-[200px] right-[10px] top-[30px]" >
   
    {
     catData && catData?.map((item:any)=>
      <Link to={`http://localhost:5173/category/${item._id}_${item.slugname}_page_1`} 
      className="block w-full py-2 text-xl"> 
       <SubCatMenu showSubCat={showSubCat} setShowSubCat={setShowSubCat} title={item.name} id={item._id}/></Link>
     )
   }
    
 
   </div>:""
}
  
</div>
    );
}
 
export default MainMenu;