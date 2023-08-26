
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlashIcon from "../../svg/flashIcon";
import { subcategory } from "../../../api/interface/subCategory";
interface Props{
 id:string
    title:string
    showSubCat:boolean
    setShowSubCat:any

}
const SubCatMenu = ({title,id ,showSubCat, setShowSubCat}:Props) => {
 
    const[state,setState]=useState(false)
 const [subCatData,setSubCatData]=useState([])
useEffect(()=>{
    const res =axios.get('http://127.0.0.1:8000/api/subcategories?limit=30')
    res.then(response=> setSubCatData(response.data.data.subcategories.filter((item:subcategory)=>item.category===id))
    )
},[state])
document.body.addEventListener('click',()=>setState(false) , true);  
    return (  
        <div  className="relative z-30 ">
 {/* Category item with subcategory */}
  <span   onMouseOver={()=>setState(true) } onMouseLeave={()=>setState(false)} 
  onClick={()=>setState(true)}
   className="text-gray-900 w-full   pr-2  px-4 rounded-md text-sm font-medium flex justify-between"> 
   <span className="hover:text-secondary" >  {title}</span>
   {subCatData.length? <span className=" rounded-full p-[2px]
    hover:border-white hover:bg-secondary "> 
    {state?  <FlashIcon className=" fill-white w-[25px] h-[25px]
    bg-secondary rotate-90 rounded-full p-[2px]" />: <FlashIcon className=" w-[25px] h-[25px]
    rotate-180 rounded-full border border-black p-[2px]"/>}
   </span>:""
   }

  
   </span>
  
  {/* Subcategory dropdown  */}
  {state? <div className="absolute  flex flex-col shadow-xl shadow-black text-black bg-white  mt-2 rounded-3xl  w-[200px] right-[200px] 
  top-[-2px]" onMouseLeave={()=>setState(false)} onMouseOver={()=>setState(true) } >
    {
          subCatData.map((item:subcategory)=>
          <Link className=" text-sm py-1 px-4 hover:text-secondary" to={  `/subcategory/${id}_${item._id}_${item.slugname}_page_1}`}> {item.name} </Link>)
    }

</div>:""}
 
</div>
    );
}
 
export default SubCatMenu;