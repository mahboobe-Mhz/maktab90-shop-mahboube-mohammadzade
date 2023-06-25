
import { UseMutationOptions, useMutation } from "react-query";
import { AddNewProductType } from "../../types";
import { addNewProductService } from "./addNewProductService";

const useAddNewProduct = (options:UseMutationOptions<AddNewProductType['payload'], AddNewProductType['error'],AddNewProductType['response']>) => {
    return useMutation({
        ...options,
        mutationFn:addNewProductService
    })
    
}
 
export default useAddNewProduct;