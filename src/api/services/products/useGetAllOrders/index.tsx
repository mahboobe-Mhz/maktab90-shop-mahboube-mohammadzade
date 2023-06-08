import { useQuery } from "react-query";
import { instance } from "../../../constants";


const useGetAllOrders = () => {
    return useQuery('getAllOrders' , async()=>{
     const res =   await instance.get('/orders')
     return res.data
    })
}
 
export default useGetAllOrders;