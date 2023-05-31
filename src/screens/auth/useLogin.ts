import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginUserType } from "../../api/services/types";
import useLoginUser from "../../api/services/auth/useLoginUser";
import { manageErrors } from "../../utils/manageErrors";
import { useCallback } from "react";
const LoginSchema = yup.object({
    username:yup.string(),
    password:yup.string(),
})
const useLogin = () => {
    const navigate =useNavigate()
    const {register, handleSubmit, formState:{errors}, setError} = useForm<LoginUserType['payload']>({
        resolver: yupResolver(LoginSchema)
    })
    const {mutate} = useLoginUser({
        onSuccess:(data) =>{
            localStorage.setItem('accessToken' ,  data.token.accessToken)
            localStorage.setItem('refreshToken', data.token.refreshToken)
            localStorage.setItem('user', JSON.stringify(data.data.user));
            navigate('/admin')
        },
        onError:(err) =>{
            manageErrors({err, setError})
        }
    })

    const handleLoginUser = useCallback((d: LoginUserType['payload']) =>
    {
        mutate(d);
    },[mutate])

    return {
        handleLoginUser,
        register, handleSubmit,errors
    }
}
    export default useLogin;