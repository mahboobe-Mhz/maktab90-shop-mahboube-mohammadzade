import { instance } from "../../../constants"
import { RegisterUserType } from "../../types";

export const  registerUserService= async(data:RegisterUserType['payload']) => {
    const res = await instance.post<RegisterUserType['response']>('/auth/signup', data);
    return res.data
}
 