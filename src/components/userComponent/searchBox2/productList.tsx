import React from 'react'
import { Product } from '../../../api/interface/products'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../routes'
interface Props{
    products:Product[]
}
function ProductList({products}:Props) {
  const navigate =useNavigate()
  const handleMoveToSinglePage=(event:any)=>{
    console.log(event.currentTarget.id);
    navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}_${event.currentTarget.dataset.category}`)
  }
  return ( <div className='fixed top-[40px] '>

<div className=' bg-white shadow-black shadow-2xl border rounded-2xl  mt-5 pl-1 py-1'>
  <div className='flex flex-col gap-2  overflow-y-scroll  pt-3 pb-3 z-50 h-[200px] '>
  {
        products.map(product=>(
            <div key={product._id} id={product._id} data-user={product.slugname} data-category={product.category._id} onClick={handleMoveToSinglePage} className='flex hover:bg-gray-200 hover:cursor-pointer '>
                  <img  src={`http://localhost:8000/images/products/images/${product.images?.[0]}`} alt="" className="w-16 rounded-xl" />
                  <div className='pr-2'>
                  <p className='text-sm'>{product.name}</p>
                  <div className='flex flex-col text-xs'>
                    <span> رنگ بندی چوب سفید</span>
                    <span> ست دونیم نفره</span>
                  </div>
                  </div>
               
              

            </div>
        ))
        }
  </div>
 
        </div>
  </div>

  )
}

export default ProductList