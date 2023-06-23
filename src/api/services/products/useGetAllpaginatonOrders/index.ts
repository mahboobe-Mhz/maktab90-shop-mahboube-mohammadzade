import { useQuery } from "react-query";
import axios from "axios";


const useGetPaginationOrders = (page:number , limit:number,filter:string)=> {
    return useQuery('getPaginationOrders' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/orders?page=${page}&limit=${limit}&${filter}`)
     return res.data
    })
}
 
export default useGetPaginationOrders;