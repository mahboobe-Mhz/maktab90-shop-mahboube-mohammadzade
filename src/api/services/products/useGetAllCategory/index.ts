import { useQuery } from "react-query";

import axios from "axios";
interface Props{
    page:number
    limit: number
}

const useGetAllCategory = () => {
    return useQuery('getAllCategories' , async()=>{
     const res =   await axios.get(`http://127.0.0.1:8000/api/categories?limit=30`)
     return res.data
    })
}
 
export default useGetAllCategory;