import { useQuery } from "react-query";
import axios from "axios";


const useGetAllProducts = () => {
   return useQuery("FetchAllProducts" , async() => {
        const res = await axios.get("http://localhost:8000/api/products");

        return res.data
    } )
}

export default useGetAllProducts;