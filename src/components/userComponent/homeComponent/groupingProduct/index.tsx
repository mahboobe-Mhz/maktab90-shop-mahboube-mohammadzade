import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../../../api/interface/category';

const GroupingProduct = () => {
  const navigate = useNavigate();
  const [catData ,setCatData]=React.useState<Category[]>([])
  React.useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
 res.then(response=>setCatData(response.data.data.categories)
 ) },[])

 const navigateToCat =(event:any)=>{

  navigate(`/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1`)
  
 }
    return ( <div className="flex flex-col items-center md:mt-5 direction gap-10 md:mt-10  md:mb-12">
         <h1 className="text-secondary md:text-4xl text-3xl font-bold md:mb-5"> دسته بندی محصولات</h1>
 
      <div className='hidden md:flex flex-wrap pr-16 '>
        {
        catData && catData.map((item, index)=>
          <div className="flex mt-16">
          <div className=" relative group hover:cursor-pointer w-[200px]" id={item._id} data-user={item.slugname} onClick={navigateToCat}> 
          <img className=" opacity-0 photo object-cover
           absolute text-center top-[-5px] right-5" height={60}  width={100} 
           src={`http://localhost:8000/images/categories/icons/${item.icon}`}></img>
             <span className="absolute z-10 text-center group-hover:text-secondary transition duration-200

             md:text-2xl font-bold ">  {item.name} </span>
         
      
          </div>
         
        <span className=" p-[0.75px] bg-gray-600 ml-14 h-[50px] " ></span>
        </div> )
        }
      </div>
      <div className='flex flex-wrap gap-2 justify-center md:hidden'>
      {
        catData && catData.map((item,index)=>
          <div className="flex  ">
          <div className="  group flex  w-[140px]" id={item._id} data-user={item.slugname} 
          onClick={navigateToCat}> 
          <img className=" " height={20}  width={40} 
           src={`http://localhost:8000/images/categories/icons/${item.icon}`}></img>
             <span className=" z-10  group-hover:text-secondary text-xs transition duration-200 
              font-bold mt-4 pr-2">  {item.name} </span>
         
      
          </div>
          {
            index%2===0?  <span className=" p-[0.75px] bg-gray-600 ml-14 h-[50px] " ></span>:""
          }
        </div> )
        }
      </div>
   
    </div> );
}
 
export default GroupingProduct;
