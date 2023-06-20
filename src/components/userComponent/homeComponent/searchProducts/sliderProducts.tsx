import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import useGetPaginationProducts from '../../../../api/services/products/usePaginationProducts';
import { useState } from 'react';
import { LeftArrow, RightArrow } from '../../../kit/Arrow';

const ProductsSlider = () => {
  const [filter, setFilter]=useState("")
  const { data, isLoading, refetch } = useGetPaginationProducts(1, 20,filter);
  const value = !isLoading && data.data.products
  const handelswiper =useSwiper()
    return (
    <div className='w-[80%]  ' >
       <Swiper
        spaceBetween={2}
        slidesPerView={4}
        modules={[Navigation, Pagination, A11y]}
       // navigation
       pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
   
      >    
        {!isLoading && value.map((product:any, index:number)=>
          <SwiperSlide>
          <div className='flex flex-col items-center'>
        {index%2==0 ? <img  className='h-[280px]  w-[200px] border rounded-3xl'  src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/>: <img  className='h-[200px]  w-[200px] border rounded-3xl'  src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/>} 
          <div className='flex flex-col items-center gap-2'>
              <span className='font-semibold'> {product.name}  </span>
              <div className='flex gap-5'>
              <s className='text-sm text-gray-400'>851000 تومان</s>
              <span className='text-sm'>{product.price}تومان</span>
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