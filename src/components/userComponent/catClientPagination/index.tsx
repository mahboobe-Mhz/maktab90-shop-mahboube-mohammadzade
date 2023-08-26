import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import FlashIcon from "../../svg/flashIcon";

interface Props{
    countPage:number|undefined
}
const ClientPagination = ({countPage}:Props) => {
    const navigate = useNavigate();
    const useParam=useParams()
    const catId=useParam.id?.split("_")[0]
    const catName=useParam.id?.split("_")[1]
  const pageNum=useParam.id?.split("_")[3]

  const goToPreviousPage = () => {    
if(Number(pageNum)>1){
    navigate(`/category/${catId}_${catName}_page_${Number(pageNum)-1}`)
}

}
const goToNextPage = () => {
if(Number(pageNum)<countPage){
    navigate(`/category/${catId}_${catName}_page_${Number(pageNum)+1}`)  
}

}

    return (  <div dir="ltr">

<nav  className="text-black pt-10">
  <ul className="list-style-none flex">
    <li>
        <div onClick={goToPreviousPage} className="  hover:cursor-pointer relative block rounded-full
         bg-transparent px-3 py-1.5 text-sm 
         transition-all duration-300">
            <span className="flex  hover:text-secondary "><FlashIcon className="md:w-[30px] rotate-180
             px-1 mt-0.5 hover:text-secondary "/> <span className="text-xs md:text-lg font-semibold"> صفحه قبل</span> </span> 
         </div>

    </li>
    {countPage <2 ?<li aria-current="page">
    <Link
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 md:text-lg text-xs font-medium 
      text-primary-700 transition-all duration-300"
      to={`/category/${catId}_${catName}_page_1`}>1
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 
        [clip:rect(0,0,0,0)]"
        >(current)</span>
    </Link>
  </li>:countPage <3?<div className="flex">
  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-xs md:text-lg 
      font-medium text-primary-700 transition-all duration-300"
      href={`/category/${catId}_${catName}_page_1`}>1
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 
        [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>
  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-xs md:text-lg font-medium 
      text-primary-700 transition-all duration-300"
      href={`/category/${catId}_${catName}_page_2`}>2
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0
         [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>
  </div>:<span> </span>

    }

 { countPage>2 ?  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 
      transition-all duration-300"
  >...
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 
        [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>:<span> </span>
  
 }
 
 { countPage>2 ?
     <li>
      <a
        className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
        href={`/category/${catId}_${catName}_page_${countPage}`}> {countPage}
        <span
          className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
          ></span>
      </a>
    </li>: <span> </span>
    
     
 }
    <li>
        <div onClick={goToNextPage} className=" hover:cursor-pointer hover:text-secondary relative block 
        rounded-full
         bg-transparent px-3 py-1.5 text-sm 
         transition-all duration-300">
            <span className="flex text-xs md:text-lg font-semibold "> 
           صفحه بعد <FlashIcon  className=" md:w-[30px] px-1 mt-0.5"/>    </span> 
         </div>
   
    </li>
  </ul>
</nav>
    </div>);
}
 
export default ClientPagination;