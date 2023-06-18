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
    const [subIndex, setSuBIndex]=useState() 
    const [SubCatSelect, setSubCatSelect]=useState([]) 
    const { data, isLoading } = useGetAllSubCategory();   
    const [checkedState, setCheckedState] = useState(
      new Array(subData?.length).fill(false));
   



    const handelCheckBox =(e:any,position:number)=>{
       setSubCatSelect(e.target.id)
       const subCatName =!isLoading && subData.find((item:any) => item._id === SubCatSelect );
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

!isLoading && data.data.subcategories.find((item:any,index:number) =>
{if(item._id ===appState.selectEditData.subcategory._id) setSuBIndex(index) }
  )
  
    setTimeout(() => {
      const updatedCheckedState = checkedState.map(( item:any ,index:number) =>  index === subIndex ? true : false  )

    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
    }, 200);
 },[appState.selectEditData])



    return (  <><Box sx={{display:"flex", flexDirection:"column"}}>
    {!isLoading &&subData?.map((item:any,index:number)=><FormControlLabel 
     key={item._id} checked={checkedState[index]} onChange={()=>handelCheckBox(event,index)}  
     control={<Checkbox id={item._id} color="secondary" />} label={item.name} />) }
</Box> </>   );
}
 
export default SubCatSide;
