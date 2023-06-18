import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import { useState,useEffect } from "react";
import useGetAllCategory from "../../../../api/services/products/useGetAllCategory";
import SubCatSide from "./subCatSide";
interface Props{
  setFormValue:any
  formValue:any
  resetForm:any
}
const CatSidebar = ({setFormValue,formValue,resetForm}:Props) => {
  const [state , setState]=useState(false)
    const [showSub, setShowSub]=useState(false)
    const [catSelect, setCatSelect]=useState("")
    const { data, isLoading } = useGetAllCategory();
  const catData = !isLoading && data.data.categories
  const [checkedState, setCheckedState] = useState(
    new Array(catData?.length).fill(false));

    const handelCheckBox =(e:any,position:number)=>{
      setState(!state)
     setCatSelect(e.target.id);      
      const updatedCheckedState = checkedState.map((item:any, index:number) =>
      index === position ? !item : false
    );
    setCheckedState(updatedCheckedState);

    }

    useEffect(()=>{  
       const productData =!isLoading &&  catData?.find((item:any) => item._id ===catSelect )  
      setFormValue({...formValue,category:productData._id})
      },[catSelect])
//reset form
useEffect(()=>{
  setCheckedState([false,false,false,false])
},[resetForm])
//for show subCategory
    const handelShowLabel =()=>{
        setShowSub(true)
    }
    const handelHideLabel =()=>{
        setShowSub(false)
    }
    return ( <Box  bgcolor={"#ffff"} borderRadius={"20px"} paddingBottom={2}>
        <Box sx={{borderBottom:"solid", borderColor:"secondary.light" ,}}>
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
              {!isLoading && catData?.map((item:any,index:any)=>
               <FormControlLabel  key={item._id} control={<Checkbox id={item._id}  checked={checkedState[index]} onChange={()=>handelCheckBox(event,index)}  color="secondary" />} label={item.name} />
              )
              }
              </Box>
        }
     
       {showSub&&
   
        <SubCatSide catSelect={catSelect} setFormValue={setFormValue} formValue={formValue} state={state} resetForm={resetForm} />
  
     
       }
       <Box sx={{borderTop:"solid", borderColor:"secondary.light" ,}}>
        <Box sx={{ paddingX:3 }}>
        <Typography>برچسب</Typography>
         <TextField sx={{color:"secondary.main"}} id="standard-basic" label="یک برچسب وارد کنید" variant="standard" />
        </Box>
       
         </Box>
      

    </Box> );
}
 
export default CatSidebar;