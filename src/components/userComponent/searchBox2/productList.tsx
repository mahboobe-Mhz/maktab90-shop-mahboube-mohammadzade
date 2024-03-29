import React from 'react'
import { Product } from '../../../api/interface/products'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../routes'
interface Props{
    products:Product[]
}
function ProductList({products}:Props) {
  const navigate =useNavigate()
  const handleGoToSearchPage =()=>{
    navigate(routes.USERS.SearchPage)
  }
  return ( <div className='fixed top-[40px]'>

<div className='flex flex-col gap-2 h-[200px] overflow-y-scroll border pt-3 pb-3 rounded-2xl z-50 mt-5 bg-white shadow-black shadow-2xl'>{
        products.map(product=>(
            <div key={product._id} onClick={handleGoToSearchPage} className='flex hover:bg-gray-200 hover:cursor-pointer '>
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
        }</div>
  </div>

  )
}

export default ProductList