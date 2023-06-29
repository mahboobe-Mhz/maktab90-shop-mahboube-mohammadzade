import { useQuery } from "react-query";
import { instance } from "../../../constants";
import axios from "axios";


const useGetAllOrders = () => {
    return useQuery('getAllOrders' , async()=>{
     const res =   await axios.get('http://127.0.0.1:8000/api/orders?sort=-createdAt')
     return res.data
    })
}
 
export default useGetAllOrders;