import { TextField, Box, Typography ,FormControlLabel,Checkbox, Radio, RadioGroup} from "@mui/material";
import { useState,useEffect } from "react";
import useGetAllCategory from "../../../../api/services/products/useGetAllCategory";
import SubCatSide from "./subCatSide";
import { useDispatch, useSelector } from "react-redux";
import { setEditData, setEditId, storeAppState } from "../../../../redux/slice/appSlice";
import axios from "axios";
import { Controller } from "react-hook-form";

interface Props{
  errors:any
  control:any
  setSubData:any
}

const CatSidebar = ({errors,control,setSubData}:Props) => {
  const appState = useSelector(storeAppState);
  const dispatch =useDispatch()
    const [showSub, setShowSub]=useState(false)
    const [catSelect, setCatSelect]=useState(appState?.selectEditData?.category._id)
    const [selectRadio, setSelectRadio]=useState("")
    const { data, isLoading } = useGetAllCategory();




    const handelCheckBox =(e:any)=>{
     setCatSelect(e.currentTarget.id);   
     setSelectRadio(e.currentTarget.id) 
     if(appState.isEdit){
       dispatch(setEditId({editId:{catId:e.currentTarget.id,subCatId:appState.editId.subCatId}}))
     }
     
    }

//for show subCategory
    const handelShowLabel =()=>{
        setShowSub(true)
    }
    const handelHideLabel =()=>{
        setShowSub(false)
    }


console.log(appState.editId);


//subcategory data
useEffect(()=>{
  const res = axios.get(`http://127.0.0.1:8000/api/subcategories`)
res.then(response=>{
  const subCatData=response.data.data.subcategories
  const newSubData =subCatData.filter((item:any)=> item.category=== catSelect)
 
  setSubData(newSubData)
})


},[catSelect,appState.isEdit])




   
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
      control={
      <Radio checked={(item._id===selectRadio) ||(item._id === appState?.editId.catId) }  
      sx={{
        '&, &.Mui-checked': {
          color: 'secondary.main',
        },
      }}
     />}
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

