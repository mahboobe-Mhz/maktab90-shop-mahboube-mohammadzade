import { useQuery } from "react-query";

import axios from "axios";


const useGetCategoryProducts = (page:number|undefined , limit:number,category:string|undefined,) => {
    return useQuery('getCategoryProducts' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/products?page=${page}&limit=${limit}&category=${category}&sort=-createdAt`)
     return res.data
    })
}
 
export default useGetCategoryProducts;