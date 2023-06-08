import { useQuery } from "react-query";
import { instance } from "../../../constants";


const useGetAllCategory = () => {
    return useQuery('getAllSubCategories' , async()=>{
     const res =   await instance.get('/categories')
     return res.data
    })
}
 
export default useGetAllCategory;