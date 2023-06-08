import { useQuery } from "react-query";
import { instance } from "../../../constants";


const useGetAllSubCategory = () => {
    return useQuery('getAllSubCategories' , async()=>{
     const res =   await instance.get('/subcategories')
     return res.data
    })
}
 
export default useGetAllSubCategory;