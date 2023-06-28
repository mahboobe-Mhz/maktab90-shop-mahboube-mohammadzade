import { TextField, Box, Typography ,FormControlLabel,Checkbox, Radio, RadioGroup} from "@mui/material";
import { useState,useEffect } from "react";
import useGetAllCategory from "../../../../api/services/products/useGetAllCategory";
import SubCatSide from "./subCatSide";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
import axios from "axios";
import { Controller } from "react-hook-form";
interface Props{
  errors:any
  control:any
  setSubData:any
}

const CatSidebar = ({errors,control,setSubData}:Props) => {

    const [showSub, setShowSub]=useState(false)
    const [catSelect, setCatSelect]=useState("")
    const { data, isLoading } = useGetAllCategory();
    const appState = useSelector(storeAppState);



    const handelCheckBox =(e:any)=>{
     setCatSelect(e.currentTarget.id);       
    }


//reset form

//for show subCategory
    const handelShowLabel =()=>{
        setShowSub(true)
    }
    const handelHideLabel =()=>{
        setShowSub(false)
    }
///handel edit



//subcategory data
useEffect(()=>{
  const res = axios.get(`http://127.0.0.1:8000/api/subcategories`)
res.then(response=>{
  const subCatData=response.data.data.subcategories
  const newSubData =subCatData.filter((item:any)=> item.category=== catSelect)
 
  setSubData(newSubData)
})


},[catSelect])




   
   return ( <Box  bgcolor={"#ffff"} borderRadius={"20px"} paddingBottom={2}>
        <Box >
        <Box sx={{display:"flex", gap:"30px", paddingX:3 , justifyContent:"space-around"}}>
        {
       showSub? <Typography sx={{":hover":{ cursor:"pointer", color:"secondary.main"}, paddingY:1,paddingX:"10px"}} onClick={handelHideLabel} >دسته بندی</Typography>:
       <Typography sx={{":hover":{ cursor:"pointer", color:"secondary.main"}, paddingY:1,paddingX:"10px",color:"secondary.main",borderBottom:"solid", borderColor:"secondary.main"}} onClick={handelHideLabel} >دسته بندی</Typography>
           
        }
        {
          !showSub ? <Typography sx={{":hover":{ cursor:"pointer", color:"secondary.main"}, paddingY:1,paddingX:"10px"}} onClick={handelShowLabel} >زیردسته </Typography> :
          <Typography sx={{":hover":{ cursor:"pointer", color:"secondary.main"}, paddingY:1,paddingX:"10px",color:"secondary.main",borderBottom:"solid", borderColor:"secondary.main"}} onClick={handelShowLabel} >زیردسته </Typography>
        }
          
        </Box>
        </Box>
        {!showSub&&
              <Box sx={{display:"flex", flexDirection:"column"}} >
        {errors.category && <p style={{color:'red',fontSize:"10px",paddingRight:"5px"}}>دسته ایی انتخاب کنید</p>}
      <Controller
        rules={{
          required: true,
         }}
render={({ field }) => (
  <RadioGroup aria-label="gender" {...field}>
    {!isLoading && data.data.categories?.map((item:any,index:any)=>  
     <FormControlLabel

     id={item._id}
     onClick={handelCheckBox}
      value={item._id}
      control={<Radio />}
      label={item.name}
    />
    ) }
   
  </RadioGroup>
)}
name="category"
control={control}
/>
              </Box>
        }


   
  
  
     
   
      

    </Box> );
}
 
export default CatSidebar;

