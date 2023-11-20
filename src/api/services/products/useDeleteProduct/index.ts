
import { UseMutationOptions, useMutation, useQueryClient } from "react-query";

import { instance } from "../../../constants";



const useDeleteProduct = (setDeletionError:any) => {
    const queryClient = useQueryClient();

    return useMutation(
     
    
    (id)=>{return instance.delete(`/products/${id}`)

    },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["getPaginationProducts"]);

        },
        onError: ({ message }) => {
          setDeletionError(message);
        
          
        },
      }
    );
}
 
export default useDeleteProduct;