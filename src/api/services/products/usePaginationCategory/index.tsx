import { useQuery } from "react-query";
import { instance } from "../../../constants";
import axios from "axios";


const useGetPaginationCategory = (page:number , limit:number) => {
    return useQuery('getPaginationCategories' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/categories?page=${page}&limit=${limit}&sort=-createdAt`)
     return res.data
    })
}
 
export default useGetPaginationCategory;