import { routes } from './../../../routes/index';
/* eslint-disable no-case-declarations */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import useRegisterUser from "../../../api/services/auth/useRegisterUser";
import { RegisterUserType } from "../../../api/services/types";
import { useCallback } from "react";
import { manageErrors } from "../../../utils/manageErrors";
import { useNavigate } from "react-router";

const RegisterSchema = yup.object({
    firstname:yup.string(),
    lastname:yup.string(),
    username:yup.string(),
    password:yup.string(),
    phoneNumber:yup.string(),
    address:yup.string(),
})

const useRegister = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}, setError} = useForm<RegisterUserType['payload']>({
        resolver: yupResolver(RegisterSchema)
    });

    const {mutate} = useRegisterUser({
        onSuccess:() =>{
            navigate(routes.AUTH.index)
        },
        onError:(err) =>{
            manageErrors({err, setError})
        }
    })

    const handleRegisterUser = useCallback((d: RegisterUserType['payload']) =>
    {
        mutate(d);
    },[mutate])

    return {
        handleRegisterUser,
        register, handleSubmit,errors
    }
}
 
export default useRegister;