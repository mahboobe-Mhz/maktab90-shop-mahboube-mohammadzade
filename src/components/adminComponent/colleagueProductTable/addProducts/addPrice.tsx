import {Box ,Typography,TextField,FormControlLabel,Button} from '@mui/material'
import Switch from '@mui/material/Switch';
import {useState,useEffect} from "react"
import { FieldErrors } from 'react-hook-form';

interface Props{
    register: any
    errors:FieldErrors
}

const AddPrice = ({register,errors}:Props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [discountPrice, setDiscountPrice] = useState<number>(0);

  
    const showDiscountBox=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(event.target.checked);    
    }
   
    const saveDiscount =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setDiscount(Number(event.target.value))

    }
    const showDiscount =(event:React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault()
        const newPrice = Math.floor(price*discount*0.01) 
        setDiscountPrice(newPrice)

    }


    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography>قیمت گذاری</Typography>

        
      
     </Box> 
     <Box padding={1.5} display={"flex"} gap={2}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
        <Box display={"flex"} gap={2} >
        <TextField dir={"ltr"} id="standard-basic" {...register("price",{required:true})} type='number'  label="*قیمت" variant="standard" />
     <Typography marginTop={4}>تومان</Typography>
        </Box>
        {errors.price?.type === 'required' && <p style={{color:'red',fontSize:"10px"}} role="alert">قیمت محصول را وارد کنید</p>}</Box>
     <FormControlLabel sx={{marginTop:"25px"}} control={<Switch onChange={showDiscountBox} checked={checked}  color="secondary"/>} label="حراج" />       
     </Box>
     {checked &&
         <Box component={"form"} onSubmit={showDiscount} display={"flex"} gap={2} >
         <Box padding={1.5} display={"flex"} gap={2}>
         
            <TextField dir={"ltr"} id="standard-basic" onChange={saveDiscount} label="تخفیف" variant="standard" />
            
             
         </Box>
         <Box padding={1.5} display={"flex"} gap={2}>
        <TextField dir={"ltr"} id="standard-basic" label="فروش ویژه" value={discountPrice} variant="standard" disabled={true}/>
        <Typography marginTop={4}>تومان</Typography>
        </Box> 
     
         </Box>
     }
    
   
     </Box> )
}
 
export default AddPrice;