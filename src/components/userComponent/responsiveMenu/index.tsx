import { useEffect, useRef, useState } from "react";
import CategoryResMenu from "./categoryMenu";
import { Link } from "react-router-dom";


const ResponsiveMenu = () => {

    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
 
        if (ref.current && !ref.current?.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
      
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
  
    return (  
        <div  className="relative group z-20">
 {/* Category item with subcategory */}
  <span  onClick={()=>setIsComponentVisible(true)}   className="text-black  font-semibold  hover:cursor-pointer hover:text-secondary  "
  > <img  className="changColor"  width={20} src="/icons/list.svg"></img></span>
  {
    isComponentVisible? <div  ref={ref} id="menu" className="absolute  shadow-black  shadow-xl rounded-2xl bg-white mt-2
    border border-black py-2 w-[150px] right-[5px]" >
        <div className="flex flex-col pr-3 gap-2">
        <Link to="http://localhost:5173/">صفحه اصلی </Link>
   <span> </span>
    <span>  <CategoryResMenu/> </span> 
   <Link to='http://localhost:5173/cart'> رهگیری سفارشات</Link>
   <Link to='/admin/mainPage'>پنل نمایندگان </Link>
   <Link to='/homeStore/فروشگاه ها'> هوم استور </Link>
        </div>   
       </div>:""
    
  }
</div>
    );
}
 
export default ResponsiveMenu;