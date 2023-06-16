import { instance } from "../../../constants"
import { AddNewProductType } from "../../types";

export const  addNewProductService= async(formdata:AddNewProductType['payload']) => {

   
    const res = await instance({
        url:'/products',
        method: 'POST',
        data: formdata,
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });
    return res.data
}