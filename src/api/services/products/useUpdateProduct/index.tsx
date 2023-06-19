import { useMutation } from "react-query";
import { instance } from "../../../constants";
const useUpdateProduct = ({data,id}:any) => {
    return  useMutation({
        mutationFn:async() => {
            const res = await instance({ method:"PATCH", data, url:`/products/${id}`})
            return res.data;
        }
    })
}
 
export default useUpdateProduct;