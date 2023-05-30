import { AxiosError } from "axios";

export type LoginUserType = {
    payload:{
        username: string;
        password:string;
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
