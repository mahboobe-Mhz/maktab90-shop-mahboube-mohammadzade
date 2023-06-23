import axios from 'axios';
import * as React from 'react';

const GroupingProduct = () => {
  const [catData ,setCatData]=React.useState([])
  React.useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
 res.then(response=>setCatData(response.data.data.categories)
 ) },[])
 console.log(catData);
 
    return ( <div className="flex flex-col items-center mt-5 direction gap-5  mb-12">
         <h1 className="text-secondary text-4xl  font-bold mb-5"> دسته بندی محصولات</h1>
 
      <div className='flex flex-wrap pr-16 '>
        {
        catData && catData.map(item=>
          <div className="flex mt-16">
          <div className=" relative group   w-[200px]"> 
          <img className=" opacity-0 photo object-cover
           absolute text-center top-[-5px] right-5" height={60}  width={100} 
           src={`http://localhost:8000/images/categories/icons/${item.icon}`}></img>
             <span className="absolute z-10 text-center group-hover:text-secondary transition duration-300 text-2xl font-bold">  {item.name} </span>
         
      
          </div>
          <span className=" p-[0.75px] bg-gray-600 ml-14 h-[50px] " ></span>
        </div> )
        }
      </div>
     
      
    </div> );
}
 
export default GroupingProduct;
