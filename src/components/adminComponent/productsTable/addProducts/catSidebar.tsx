import { TextField, Box, Typography ,FormControlLabel,Checkbox} from "@mui/material";
import { useState } from "react";
import useGetAllCategory from "../../../../api/services/products/useGetAllCategory";
import SubCatSide from "./subCatSide";
const CatSidebar = () => {
    const [showSub, setShowSub]=useState(false)
    const { data, isLoading } = useGetAllCategory();
  const catData = !isLoading && data.data.categories
    const handelCheckBox =(event)=>{
      console.log(event.currentTarget.label);
      
    }
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
              {!isLoading && catData?.map((item:any)=>
               <FormControlLabel key={item._id} onChange={handelCheckBox} control={<Checkbox  color="secondary" />} label={item.name} />
              )
              }
              </Box>
        }
     
       {showSub&&
       <SubCatSide/>
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