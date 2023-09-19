import { AxiosError } from "axios";

export type LoginUserType = {
    payload:{
        name: string;
        lastName:string;
        phoneNumber:number;
    },
    response:{
        status: string;
        token: {
            accessToken:string;
            refreshToken: string;
        },
        data: {
            user: {
                _id: string;              
                username: string;
                password:  string;        
                role:  string;
                createdAt:  string;
                updatedAt:  string;
                __v: number;
                refreshToken:  string;
            }
        }
    };
    error:AxiosError<{
        status:string;
        message:string;
    }>
}
export type RegisterUserType = {
    payload:{
        firstname: string;
        lastname: string;
        username: string;
        password:string;
        phoneNumber:string;
        address: string;
    },
    response:{
    status:string;
    token:{accessToken:number;refreshToken:number};
    data:{user:string}
};
error:AxiosError<{
    status:string;
    message:string;
}>
}
export type AddNewProductType = {
    payload:any;
    response:unknown;
    error:unknown
}