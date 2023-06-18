import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import useGetAllSubCategory from "../../../../api/services/products/useGetAllSubCategory";
import { useState,useEffect } from "react";
import { Products } from "../../../../api/interface/products";
interface Props{
    setFormValue:any
    formValue:Products
    catSelect:string
    state:state
    resetForm:any
}
const SubCatSide = ({catSelect,setFormValue,formValue,state ,resetForm}:Props) => { 
    const [showSubCat, setShowSubCat]=useState([]) 
    const [SubCatSelect, setSubCatSelect]=useState([]) 
    const { data, isLoading } = useGetAllSubCategory();   
    const [checkedState, setCheckedState] = useState(
      new Array(showSubCat?.length).fill(false));


      useEffect(()=>{
        const subCatData= !isLoading&& data.data.subcategories;
       const subCatData2=  !isLoading&& subCatData.filter((item:any) =>item.category===catSelect)
       !isLoading&& setShowSubCat(subCatData2)    
       !isLoading&& console.log(subCatData2);          
     },[state])



    const handelCheckBox =(e:any,position:number)=>{
       setSubCatSelect(e.target.id)
       const subCatName =!isLoading && showSubCat.find((item:any) => item._id === SubCatSelect );
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
    return (  <><Box sx={{display:"flex", flexDirection:"column"}}>
    {!isLoading &&showSubCat?.map((item:any,index:number)=><FormControlLabel 
     key={item._id} checked={checkedState[index]} onChange={()=>handelCheckBox(event,index)}  
     control={<Checkbox id={item._id} color="secondary" />} label={item.name} />) }
</Box> </>   );
}
 
export default SubCatSide;
