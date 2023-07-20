import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y ,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import useGetPaginationProducts from '../../../../api/services/products/usePaginationProducts';
import { useState } from 'react';
import { LeftArrow, RightArrow } from '../../../kit/Arrow';
import { useNavigate } from 'react-router-dom';

const ProductsSlider = () => {
  const [filter, setFilter]=useState("")
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetPaginationProducts(1, 20,filter);
  const value = !isLoading && data.data.products
 const showSingleProduct =(event)=>{
  navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}_${event.currentTarget.dataset.category}`)
  // navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}`)
 }
    return (
    <div className='w-[80%] mt-10 ' >
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
          <SwiperSlide id={product._id} data-user={product.slugname} data-category={product.category._id}  onClick={showSingleProduct}>
          <div className='flex flex-col items-center '>
        {index%2==0 ?  <img  className='md:h-[280px]  md:w-[300px] shadow-lg border rounded-xl  md:rounded-3xl ' width={150}  src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/>:
         <img  className='md:h-[200px]  md:w-[200px] h-[100px] border shadow-lg   rounded-xl md:rounded-3xl'  src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/>} 
          <div className='flex flex-col mt-3 items-center gap-2'>
              <span className='font-semibold md:w-40 text-center text-xs md:text-lg'> {product.name}  </span>
              <div className='flex gap-5'>
          
              <span className='text-xs
              md:text-lg'>{product.price}تومان</span>
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