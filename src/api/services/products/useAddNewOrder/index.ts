import { UseMutationOptions, useMutation } from "react-query";
import { AddNewProductType } from "../../types";
import { addNewOrderService } from "./addNewOrderServices";


const useAddNewOrder = (options:UseMutationOptions<AddNewProductType['payload'], AddNewProductType['error'],AddNewProductType['response']>) => {
    return useMutation({
        ...options,
        mutationFn:addNewOrderService
    })
    
}
 
export default useAddNewOrder;