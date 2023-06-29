import {Box ,Typography,TextField,FormControlLabel,Button} from '@mui/material'
import Switch from '@mui/material/Switch';
import {useState,useEffect} from "react"
import { Products } from '../../../../api/interface/products';
import { useSelector } from 'react-redux';
import { storeAppState } from '../../../../redux/slice/appSlice';
interface Props{
  
    resetForm:any
    register:any
    errors:any
}

const AddPrice = ({resetForm,register,errors}:Props) => {
    const [checked, setChecked] = useState(false);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discountPrice, setDiscountPrice] = useState<number>();
    const appState = useSelector(storeAppState);
  
    const showDiscountBox=(event:any)=>{
        setChecked(event.target.checked);    
    }
   
    const saveDiscount =(event:any)=>{
        setDiscount(event.target.value)

    }
    const showDiscount =(event:any)=>{
        event.preventDefault()
        const newPrice = Math.floor(price*discount*0.01) 
        setDiscountPrice(newPrice)

    }
//reset form
    useEffect(()=>{
        setPrice(0)
    },[resetForm])


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
        <TextField dir={"ltr"} id="standard-basic" label="فروش ویژه" value={discountPrice} variant="standard" />
        <Typography marginTop={4}>تومان</Typography>
        <Button sx={{color:"red"}} type='submit'> </Button>
        </Box> 
     
         </Box>
     }
    
   
     </Box> )
}
 
export default AddPrice;