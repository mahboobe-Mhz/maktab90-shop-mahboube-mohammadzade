import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import useGetAllSubCategory from "../../../../api/services/products/useGetAllSubCategory";
import { useState,useEffect } from "react";
import { Products } from "../../../../api/interface/products";
interface Props{
    setFormValue:any
    formValue:Products
    catSelect:string
}
const SubCatSide = ({catSelect,setFormValue,formValue}:Props) => {
    const [showSubCat, setShowSubCat]=useState([]) 
    const [SubCatSelect, setSubCatSelect]=useState([]) 
    const { data, isLoading } = useGetAllSubCategory();   
    console.log(catSelect);

    const handelCheckBox =(event :any)=>{
       setSubCatSelect(event.currentTarget.parentElement.parentElement.id)
       const subCatName =!isLoading && showSubCat.find((item:any) => item._id === SubCatSelect )
       console.log(subCatName);
       
       !isLoading && setFormValue({...formValue,subcategory:subCatName?._id})    
      }
    useEffect(()=>{
       const subCatData= !isLoading&& data.data.subcategories;
      const subCatData2=  !isLoading&& subCatData.filter((item:any) =>item.category===catSelect)
      !isLoading&& setShowSubCat(subCatData2)    
      !isLoading&& console.log(subCatData2);
              
    },[catSelect])


    return (  <><Box sx={{display:"flex", flexDirection:"column"}}>
    {!isLoading &&showSubCat?.map((item:any)=><FormControlLabel id={item._id} key={item._id} onChange={handelCheckBox} control={<Checkbox  color="secondary" />} label={item.name} />) }
</Box> </>   );
}
 
export default SubCatSide;
