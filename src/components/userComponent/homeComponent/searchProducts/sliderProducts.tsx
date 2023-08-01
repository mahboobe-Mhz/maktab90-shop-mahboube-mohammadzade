import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y ,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import useGetPaginationProducts from '../../../../api/services/products/usePaginationProducts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import FlashIcon from '../../../svg/flashIcon';

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
    <div className='md:px-[80px] px-5 w-full relative' >
       <Swiper
           centeredSlides={true}
      
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          500: {
            spaceBetween:2,
            slidesPerView: 4,
          },
       
        }}
    
   
       // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
    
      modules={[Navigation, Pagination, A11y,Autoplay]}
      navigation={{
        prevEl:`.pervPage` ,
        nextEl:`.nextPage`
      }}
      speed={2000}
      >    
        {!isLoading && value.map((product:any, index:number)=>
          <SwiperSlide id={product._id} data-user={product.slugname} data-category={product.category._id} 
           onClick={showSingleProduct}>
               
          <div className='flex flex-col items-center md:pt-20 pt-10 '>
        {discount? <span className='absolute text-white px-2 bg-secondary rounded-xl rotate-[-17deg] md:top-[70px] top-[35px]
         md:text-lg text-[7px]'> ۳۵٪-</span>:""} 
        {index%2==0 ? <div className='group bg-black object-cover rounded-xl shadow-lg md:rounded-3xl '>
          <span className='opacity-0 group-hover:opacity-100 absolute md:top-[160px] md:left-[80px] text-white border-[2px] border-white
           px-5 pb-1 text-lg rounded-2xl font-bold'> خرید محصول</span>
          <img  className='md:h-[280px]  md:w-[300px] h-[80px]
        hover:opacity-40  border 
         rounded-xl  md:rounded-3xl ' width={150} 
          src={`http://localhost:8000/images/products/images/${product.images?.[0]}`}/></div> :
          <div className='bg-black group rounded-xl  md:rounded-3xl '>
            <span className='opacity-0 group-hover:opacity-100 absolute md:top-[150px] md:left-[90px] text-white font-bold text-lg 
            border-[2px] px-5  pb-1 rounded-2xl'> خرید محصول</span>
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
      <div className='absolute z-10 md:top-0 md:right-[45%] right-[40%] top-0 flex gap-2'>
      <span  
        className=" nextPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon className="md:w-[50px] md:h-[50px] w-[20px] h-[20px]  border-2 transition duration-200 p-1
         border-black fill-black rounded-full hover:border-secondary hover:fill-[#fd6e54]" />
        </span>
<span  
        className=" pervPage hover:cursor-pointer focus:outline-none" > 
        <FlashIcon className="md:w-[50px] md:h-[50px] w-[20px] h-[20px] rotate-180 border-2 transition
         duration-200 p-1 border-black  rounded-full hover:border-secondary hover:fill-[#fd6e54]" />
        </span>
      
</div>
      </Swiper>

    </div>
     );
}
 
export default ProductsSlider;