import { useQuery } from "react-query";
import { instance } from "../../../constants";
import axios from "axios";


const useGetAllSubCategory = () => {
    return useQuery('getAllSubCategories' , async()=>{
     const res =   await axios.get('http://127.0.0.1:8000/api/subcategories')
     return res.data
    })
}
 
export default useGetAllSubCategory;