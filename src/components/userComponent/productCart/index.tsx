import { useNavigate } from "react-router-dom";

interface Props{
  productSelect:any
}


const ProductCart = ({productSelect}:Props) => {
  const navigate = useNavigate();
  const navigateToSinglePage =(event:any)=>{
    navigate(`/product/${event.currentTarget.id}_${event.currentTarget.dataset.user}`)
  }
    return (<div className="mt-2" onClick={navigateToSinglePage} id={productSelect._id}  data-user={productSelect.slugname}  >
        <div className=" relative shadow-xl rounded-3xl ">
        <img className="h-[190px] w-[240px] rounded-3xl border"  src={`http://localhost:8000/images/products/images/${productSelect.images?.[0]}`}/>
        <span className="absolute bottom-[0px] bg-secondary p-1 rounded-md">
        <img className=" z-10 "  width={30} src="/icons/icon-03.svg"/>
        </span>
        </div>
  <div className="mt-3 text-sm">
    <h1> {productSelect.name}   </h1>
    <span>{ Number(productSelect.price).toLocaleString("fa-IR")} تومان</span>
  </div>
       
    </div>  );
}
 
export default ProductCart;