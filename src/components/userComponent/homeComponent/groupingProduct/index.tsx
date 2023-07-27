import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupingProduct = () => {
  const navigate = useNavigate();
  const [catData ,setCatData]=React.useState([])
  React.useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
 res.then(response=>setCatData(response.data.data.categories)
 ) },[])

 const navigateToCat =(event:any)=>{

  navigate(`/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1`)
  
 }
    return ( <div className="flex flex-col items-center mt-5 direction gap-10 md:mt-10  md:mb-12">
         <h1 className="text-secondary md:text-4xl  font-bold md:mb-5"> دسته بندی محصولات</h1>
 
      <div className='hidden md:flex flex-wrap pr-16 '>
        {
        catData && catData.map(item=>
          <div className="flex mt-16">
          <div className=" relative group  w-[200px]" id={item._id} data-user={item.slugname} onClick={navigateToCat}> 
          <img className=" opacity-0 photo object-cover
           absolute text-center top-[-5px] right-5" height={60}  width={100} 
           src={`http://localhost:8000/images/categories/icons/${item.icon}`}></img>
             <span className="absolute z-10 text-center group-hover:text-secondary transition duration-300 
             md:text-2xl font-bold">  {item.name} </span>
         
      
          </div>
          <span className=" p-[0.75px] bg-gray-600 ml-14 h-[50px] " ></span>
        </div> )
        }
      </div>
      <div className='flex flex-wrap gap-2 justify-center md:hidden'>
      {
        catData && catData.map(item=>
          <div className="flex  ">
          <div className="  group flex  w-[150px]" id={item._id} data-user={item.slugname} 
          onClick={navigateToCat}> 
          <img className=" " height={30}  width={30} 
           src={`http://localhost:8000/images/categories/icons/${item.icon}`}></img>
             <span className=" z-10  group-hover:text-secondary text-xs transition duration-300 
              font-bold mt-4 pr-2">  {item.name} </span>
         
      
          </div>
          <span className=" p-[0.75px] bg-gray-600  h-[30px] " ></span>
        </div> )
        }
      </div>
   
    </div> );
}
 
export default GroupingProduct;
