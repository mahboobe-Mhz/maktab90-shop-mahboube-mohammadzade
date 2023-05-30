import { UseMutationOptions, useMutation } from "react-query";
import { LoginUserType } from "../../types";
import { loginUserService } from "./loginUserService";

const useLoginUser = (options:UseMutationOptions<LoginUserType['payload'], LoginUserType['error'],LoginUserType['response']>) => {
    return useMutation({
        ...options,
        mutationFn:loginUserService
    })
}
 
export default useLoginUser;