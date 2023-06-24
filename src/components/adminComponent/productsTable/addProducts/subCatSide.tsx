import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import useGetAllSubCategory from "../../../../api/services/products/useGetAllSubCategory";
import { useState,useEffect } from "react";
import { Products } from "../../../../api/interface/products";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
interface Props{
    setFormValue:any
    formValue:Products
    catSelect:string
    subData:[]
    resetForm:any
}
const SubCatSide = ({catSelect,setFormValue,formValue,subData ,resetForm}:Props) => { 
  const appState = useSelector(storeAppState);
    const { data, isLoading } = useGetAllSubCategory();   
    const [checkedState, setCheckedState] = useState(
      new Array(subData?.length).fill(false))
    const handelCheckBox =(e:any,position:number)=>{

       const subCatName =!isLoading && subData.find((item:any) => item._id === e.target.id );
       !isLoading && setFormValue({...formValue,subcategory:subCatName?._id})    
       const updatedCheckedState = checkedState.map((item:any, index:number) =>
       index === position ? !item : false
     );
     setCheckedState(updatedCheckedState);
      }

//reset form
    useEffect(()=>{
      setCheckedState([false,false,false,false])
    },[resetForm])
//handel edit 

useEffect(()=>{

const indexId=!isLoading && data.data.subcategories.findIndex((item:any) =>
item._id ===appState.selectEditData?.subcategory._id) 
 const updatedCheckedState = checkedState.map(( item:any ,index:number) =>  index === indexId ? true : false  )
 !isLoading &&console.log( data.data.subcategories);
console.log(appState.selectEditData?.subcategory._id);
console.log(indexId);
    setCheckedState(updatedCheckedState);
  
 },[appState.selectEditData])



    return (  <><Box sx={{display:"flex", flexDirection:"column"}}>
    {!isLoading &&subData?.map((item:any,index:number)=><FormControlLabel 
     key={item._id} checked={checkedState[index]} onChange={()=>handelCheckBox(event,index)}  
     control={<Checkbox id={item._id} color="secondary" />} label={item.name} />) }
</Box> </>   );
}
 
export default SubCatSide;
