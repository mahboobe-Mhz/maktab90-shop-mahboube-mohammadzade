interface Props{
    photo:any
    name:string
    price:number
}


const ProductCart = ({photo,name,price}:Props) => {
  const navigateToSinglePage =()=>{
    
  }
    return (<div onClick={navigateToSinglePage}>
        <div className=" relative shadow-md rounded-2xl">
        <img className="h-[200px]" src={`http://localhost:8000/images/products/images/${photo}`}/>
        <span className="absolute bottom-[0px] bg-secondary p-1 rounded-md">
        <img className=" z-10 "  width={30} src="/icons/icon-03.svg"/>
        </span>
        </div>
  <div className="mt-3 font-semibold">
    <h1> {name}   </h1>
    <span>{price} تومان</span>
  </div>
       
    </div>  );
}
 
export default ProductCart;