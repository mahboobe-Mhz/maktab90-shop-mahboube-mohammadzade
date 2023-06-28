import {  Box ,FormControlLabel, Radio, RadioGroup} from "@mui/material";

import { useSelector } from "react-redux";
import { storeAppState } from "../../../../redux/slice/appSlice";
import { Controller } from "react-hook-form";
interface Props{
   
    subData:[]
    resetForm:any
    control:any
    errors:any
}
const SubCatSide = ({subData ,resetForm,control,errors}:Props) => { 
  const appState = useSelector(storeAppState);



//reset form

//handel edit 





    return (  <><Box sx={{display:"flex", flexDirection:"column",bgcolor:"white", borderEndEndRadius:"20px",borderBottomRightRadius:"20px"}}>
        {errors.subcategory && <p style={{color:'red',fontSize:"10px",paddingRight:"5px"}}>زیر دسته ایی انتخاب کنید</p>}
   <Controller
    rules={{
      required: true,
     }}
render={({ field }) => (
  <RadioGroup aria-label="gender" {...field}>
     {subData?.map((item:any)=><FormControlLabel
      value={item._id}
      control={<Radio />}
      label={item.name}
    />
    ) }
   
  </RadioGroup>
)}
name="subcategory"
control={control}
/>
</Box> </>   );
}
 
export default SubCatSide;
