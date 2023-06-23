import { useNavigate } from "react-router-dom";

interface Props{
  productSelect:any
}


const ProductCart = ({productSelect}:Props) => {
  const navigate = useNavigate();
  const navigateToSinglePage =(event:any)=>{
    navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}`)
  }
    return (<div onClick={navigateToSinglePage} id={productSelect._id}  data-user={productSelect.slugname}  >
        <div className=" relative shadow-md rounded-2xl">
        <img className="h-[200px]" src={`http://localhost:8000/images/products/images/${productSelect.images?.[0]}`}/>
        <span className="absolute bottom-[0px] bg-secondary p-1 rounded-md">
        <img className=" z-10 "  width={30} src="/icons/icon-03.svg"/>
        </span>
        </div>
  <div className="mt-3 font-semibold">
    <h1> {productSelect.name}   </h1>
    <span>{productSelect.price} تومان</span>
  </div>
       
    </div>  );
}
 
export default ProductCart;