import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import { useState,useEffect } from "react";
import useGetAllCategory from "../../../../api/services/products/useGetAllCategory";
import SubCatSide from "./subCatSide";
import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
import axios from "axios";
interface Props{
  setFormValue:any
  formValue:any
  resetForm:any
  register:any
}
interface catIndex{
  index?:any
}
const CatSidebar = ({setFormValue,formValue,resetForm,register}:Props) => {
  const [subState , setSubState]=useState([])
  const [subData , setSubData]=useState([])
  const [catIndex , setCatIndex]=useState<catIndex>()
    const [showSub, setShowSub]=useState(false)
    const [catSelect, setCatSelect]=useState("")
    const { data, isLoading } = useGetAllCategory();
    const appState = useSelector(storeAppState);
  const catData = !isLoading && data.data.categories
  const [checkedState, setCheckedState] = useState(
    new Array(catData?.length).fill(false));

    const handelCheckBox =(e:any,position:number)=>{
     setCatSelect(e.target.id);      
      const updatedCheckedState = checkedState.map((item:any, index:number) =>
      index === position ? !item : false
    );
    setCheckedState(updatedCheckedState);

    }

    useEffect(()=>{  
       const productData =!isLoading &&  catData?.find((item:any) => item._id ===catSelect )  
      setFormValue({...formValue,category:productData?._id})
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
///handel edit
 useEffect(()=>{
  const res = axios.get(`http://127.0.0.1:8000/api/categories`)
        res.then(response => (
    response.data.data.categories.find((item:any,index:number) =>{if(item._id ===appState.selectEditData?.category._id) 
      setCatIndex(index)} )))  
    setTimeout(() => {
      const updatedCheckedState = checkedState.map(( item:any ,index:number) =>  index === catIndex ? true : false  )

    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);
    }, 200);
 },[appState.selectEditData])

//subcategory data
useEffect(()=>{
  const res = axios.get(`http://127.0.0.1:8000/api/subcategories`)
res.then(response=>setSubState(response.data.data.subcategories) )
setSubData(subState.filter((item:any)=> item.category ===catSelect))
},[catSelect])

   
   
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
               <FormControlLabel  key={item._id} control={<Checkbox id={item._id}  checked={checkedState[index]} 
               onChange={()=>handelCheckBox(event,index)}  color="secondary" />} label={item.name} />
              )
              }
              </Box>
        }
     
       {showSub&&
   
        <SubCatSide catSelect={catSelect} setFormValue={setFormValue} formValue={formValue}
        subData={subData} resetForm={resetForm} />
  
     
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