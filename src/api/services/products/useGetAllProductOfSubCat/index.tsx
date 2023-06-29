import { useQuery } from "react-query";

import axios from "axios";


const useGetSubCategoryProducts = (page:number , limit:number,subcategory:string|undefined ,category:string|undefined,) => {
    return useQuery('getSubCategoryProducts' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/products?page=${page}&limit=${limit}&category=${category}&subcategory=${subcategory}&sort=-createdAt`)
     return res.data
    })
}
 
export default useGetSubCategoryProducts;