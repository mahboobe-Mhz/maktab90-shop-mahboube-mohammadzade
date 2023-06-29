import { instance } from "../../../constants"
import { AddNewProductType } from "../../types";

export const  addNewOrderService= async(orderData:AddNewProductType['payload']) => {
    const res = await instance.post("/orders",orderData);
    return res.data
}