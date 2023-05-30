import { instance } from "../../../constants"
import { LoginUserType } from "../../types";

export const  loginUserService= async(data:LoginUserType['payload']) => {
    const res = await instance.post<LoginUserType['response']>('/auth/login', data);
    return res.data
}