import { instance } from "../../../constants"
import { AddNewProductType } from "../../types";

export const  addNewOrderService= async(formdata:AddNewProductType['payload']) => {

   
    const res = await instance({
        url:'/orders',
        method: 'POST',
        data: formdata,
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });
    return res.data
}