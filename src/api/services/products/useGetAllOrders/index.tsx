import { useQuery } from "react-query";
import { instance } from "../../../constants";


const useGetAllSubOrders = () => {
    return useQuery('getAllSubCategories' , async()=>{
     const res =   await instance.get('/orders')
     return res.data
    })
}
 
export default useGetAllSubOrders;