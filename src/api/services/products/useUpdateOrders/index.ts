import { useMutation } from "react-query";
import { instance } from "../../../constants";
const useUpdateOrder = ({data,id}:any) => {
    return  useMutation({
        mutationFn:async() => {
            const res = await instance({ method:"PATCH", data, url:`/orders/${id}`})
            return res.data;
        }
    })
}
 
export default useUpdateOrder;