import { toast } from "react-hot-toast";
export const manageErrors = ({err,setError}:any) =>{
    const msg:string = err.response?.data.message || '';
    const handleFieldErrors  = ()=>{
        const fieldName = msg.split(`"`)[1];
        const errorText = msg.split(`"`)[1] +  msg.split(`"`)[2];
        setError(fieldName, {message:errorText})
    }

    switch (err.response?.status) {
        case 400:handleFieldErrors()
            break;
        default:
        toast.error(msg)
    }
}