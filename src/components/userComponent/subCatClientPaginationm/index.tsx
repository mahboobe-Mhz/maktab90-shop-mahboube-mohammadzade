import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

interface Props{
    countPage:number
}
const ClientSubPagination = ({countPage}:Props) => {
    const navigate = useNavigate();
    const useParam=useParams()
    const catId=useParam.id?.split("_")[0]
    const subCatId=useParam.id?.split("_")[1]
    const subCatName=useParam.id?.split("_")[2]
    const pageNum=useParam.id?.split("_")[4]
console.log(pageNum);

  const goToPreviousPage = () => {    
if(Number(pageNum)>1){
    navigate(`/subcategory/${catId}_${subCatId}_${subCatName}_page_${Number(pageNum)-1 }`)
}

}
const goToNextPage = () => {
if(Number(pageNum)<countPage){

    navigate(`/subcategory/${catId}_${subCatId}_${subCatName}_page_${Number(pageNum)+1 }`)
}

}

    return (  <div dir="ltr">

<nav  className="text-black pt-10">
  <ul className="list-style-none flex">
    <li>
        <div onClick={goToPreviousPage} className="  hover:cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm 
         transition-all duration-300">
            <span className="flex md:text-lg text-sx font-semibold"><img width={30} src="/icons/icon-02.svg" />صفحه قبل </span> 
         </div>

    </li>
    {countPage <2 ?<li aria-current="page">
    <Link
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
      to={`/category/${catId}_${catId}_page_1`}>۱
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        >(current)</span>
    </Link>
  </li>:countPage <3?<div className="flex">
  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
      href={`/subcategory/${catId}_${subCatId}_${subCatName}_page_1_مبلمانـراحتی}`}>۱
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>
  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
      href={`/subcategory/${catId}_${subCatId}_${subCatName}_page_2}`}>۲
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>
  </div>:<span> </span>

    }

 { countPage>2 ?  <li aria-current="page">
    <a
      className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
  >...
      <span
        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        >(current)</span>
    </a>
  </li>:<span> </span>
  
 }
 
 { countPage>2 ?
     <li>
      <a
        className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
        href={`/subcategory/${catId}_${subCatId}_${subCatName}_page_${countPage}}`}> {countPage}
        <span
          className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
          ></span>
      </a>
    </li>: <span> </span>
    
     
 }
    <li>
        <div onClick={goToNextPage} className=" hover:cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm 
         transition-all duration-300">
            <span className="flex md:text-lg font-semibold"> 
           صفحه بعد <img width={30} className=" mt-1 rotate-180" src="/icons/icon-02.svg" />   </span> 
         </div>
   
    </li>
  </ul>
</nav>
    </div>);
}
 
export default ClientSubPagination;