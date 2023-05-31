import { UseMutationOptions, useMutation } from "react-query";
import { registerUserService } from "./registerUserServices";
import { RegisterUserType } from "../../types";

const useRegisterUser = (options:UseMutationOptions<RegisterUserType['payload'], RegisterUserType['error'], RegisterUserType['response']>) => {
    return  useMutation({
        ...options,
        mutationFn:registerUserService,
    })
}

export default useRegisterUser;