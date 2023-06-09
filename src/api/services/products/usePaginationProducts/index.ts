import { useQuery } from "react-query";
import { instance } from "../../../constants";
import axios from "axios";
interface Props{
    page:number
    limit: number
}

const useGetPaginationProducts = (page , limit) => {
    return useQuery('getPaginationProducts' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/products?page=${page}&limit=${limit}`)
     return res.data
    })
}
 
export default useGetPaginationProducts;