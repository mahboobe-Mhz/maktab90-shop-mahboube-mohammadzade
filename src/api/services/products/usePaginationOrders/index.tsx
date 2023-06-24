import { useQuery } from "react-query";
import { instance } from "../../../constants";
import axios from "axios";


const useGetPaginationOrders = (page:number , limit:number) => {
    return useQuery('getPaginationOrders' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/orders?page=${page}&limit=${limit}&sort=-createdAt`)
     return res.data
    })
}
 
export default useGetPaginationOrders;