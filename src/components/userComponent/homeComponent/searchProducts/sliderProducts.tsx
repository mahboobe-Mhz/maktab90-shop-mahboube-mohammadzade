import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y ,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import useGetPaginationProducts from '../../../../api/services/products/usePaginationProducts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ProductsSlider = () => {
  const [filter, setFilter]=useState("")
  const navigate = useNavigate();
  const [discount,setDiscount]=useState(true)
  const { data, isLoading, refetch } = useGetPaginationProducts(1, 20,filter);
  const value = !isLoading && data.data.products
 const showSingleProduct =(event)=>{
  navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}_${event.currentTarget.dataset.category}`)
  // navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}`)
 }
    return (
    <div className='w-[80%]  ' >
       <Swiper
        spaceBetween={5}
        slidesPerView={4}


       // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, A11y,Autoplay]}
      >    
        {!isLoading && value.map((product:any, index:number)=>
          <SwiperSlide id={product._id} data-user={product.slugname} data-category={product.category._id} 
           onClick={showSingleProduct}>
               
          <div className='flex flex-col items-center pt-10 '>
        {discount? <span className='absolute text-white px-2 bg-secondary rounded-xl rotate-[-17deg] md:top-[30px] top-[35px]
         md:text-md text-[7px]'> ۳۵٪-</span>:""} 
        {index%2==0 ? <div className='group bg-black object-cover rounded-xl shadow-lg md:rounded-3xl '>
          <span className='opacity-0 group-hover:opacity-100 absolute top-[140px] left-[70px] text-white border-[2px] border-white px-5 pb-1 text-lg rounded-2xl font-bold'> خرید محصول</span>
          <img  className='md:h-[280px]  md:w-[300px] 
        hover:opacity-40  border 
         rounded-xl  md:rounded-3xl ' width={150} 
          src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/></div> :
          <div className='bg-black group rounded-xl  md:rounded-3xl '>
            <span className='opacity-0 group-hover:opacity-100 absolute top-[110px] left-[60px] text-white font-bold text-lg border-[2px] px-5  pb-1 rounded-2xl'> خرید محصول</span>
              <img  className='md:h-[200px]  md:w-[200px] h-[100px]   hover:opacity-40 border shadow-lg   rounded-xl md:rounded-3xl'  
         src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/>
          </div>
       } 
          <div className='flex flex-col md:mt-3 mt-1 items-center md:gap-2'>
              <span className='font-bold md:w-40 text-center w-[30px] text-[7px] md:text-lg'> {product.name}  </span>
              <div className='flex md:gap-5  md:flex-row flex-col gap-0'>
              <span className='text-[7px] md:text-sm md:mt-1'>{Number(product.price).toLocaleString(
                  "fa-IR"
                )}تومان</span>
                {discount?   <div className="price-wrapper">
  <div className="price-slash"></div>
  <span className='text-gray-400 text-[7px] md:text-sm'>{Number(84000).toLocaleString(
                  "fa-IR"
                )}  تومان</span>
              
              </div>:""}
           
        
            
       
              </div>
              
          </div>
          </div>
        </SwiperSlide>
        )}

      </Swiper>
    
    </div>
     );
}
 
export default ProductsSlider;