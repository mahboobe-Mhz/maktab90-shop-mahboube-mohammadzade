import { useQuery } from "react-query";

import axios from "axios";


const useGetPaginationProducts = (page:number , limit:number,filter:string) => {
    return useQuery('getPaginationProducts' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/products?page=${page}&limit=${limit}&${filter}&sort=-createdAt`)
     return res.data
    })
}
 
export default useGetPaginationProducts;